import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// Configuration
const CONFIG = {
  emailService: process.env.EMAIL_SERVICE || 'gmail',
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  googleClientEmail: process.env.GOOGLE_CLIENT_EMAIL,
  googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY,
  spreadsheetId: process.env.SPREADSHEET_ID || process.env.SHEET_ID || '1GwdJssNZR54l3LI9UMeuRN5G5YwQXVlzmIrDWzOJY90',
  calendarId: process.env.CALENDAR_ID || 'gthabarber1@gmail.com',
  timeZone: process.env.TIME_ZONE || 'America/Los_Angeles',
  businessHours: {
    start: '10:00 AM',
    end: '6:00 PM'
  },
  businessDays: [1, 2, 4, 5, 6], // Monday, Tuesday, Thursday, Friday, Saturday
};

// Headers for CORS
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Helper function to get Google auth
async function getGoogleAuth() {
  try {
    if (process.env.GOOGLE_CREDENTIALS) {
      try {
        const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
        const auth = new google.auth.JWT(
          credentials.client_email,
          null,
          credentials.private_key,
          [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/calendar.events'
          ]
        );
        return auth;
      } catch (e) {
        console.error('Error parsing GOOGLE_CREDENTIALS:', e);
      }
    }
    
    const credentials = {
      client_email: CONFIG.googleClientEmail,
      private_key: CONFIG.googlePrivateKey?.replace(/\\n/g, '\n')
    };
    
    if (!credentials.client_email || !credentials.private_key) {
      console.error('Google credentials missing');
      return null;
    }
    
    const auth = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/calendar.events'
      ]
    );
    
    return auth;
  } catch (error) {
    console.error('Error setting up Google Auth:', error);
    return null;
  }
}

// Email sender setup
const createTransporter = () => {
  if (!CONFIG.emailUser || !CONFIG.emailPass) {
    console.error('Email credentials not properly configured');
    return null;
  }

  return nodemailer.createTransport({
    service: CONFIG.emailService,
    auth: {
      user: CONFIG.emailUser,
      pass: CONFIG.emailPass
    }
  });
};

// Function to generate ICS calendar file
function generateICSFile(booking: any): string {
  // Parse date and time
  const [month, day, year] = booking.date.split('/');
  const [time, period] = booking.time.split(' ');
  const [hourStr, minuteStr] = time.split(':');
  
  let hour = parseInt(hourStr, 10);
  const minute = parseInt(minuteStr, 10);
  
  // Convert to 24-hour format
  if (period === 'PM' && hour < 12) {
    hour += 12;
  } else if (period === 'AM' && hour === 12) {
    hour = 0;
  }
  
  // Get appointment duration
  const serviceType = booking.service.toLowerCase();
  let appointmentDuration = 60; // Default 60 minutes
  
  if (serviceType.includes('haircut') && serviceType.includes('beard')) {
    appointmentDuration = 60;
  } else if (serviceType.includes('haircut')) {
    appointmentDuration = 45;
  } else if (serviceType.includes('beard')) {
    appointmentDuration = 30;
  } else if (serviceType.includes('shave')) {
    appointmentDuration = 30;
  } else if (serviceType.includes('enhancement')) {
    appointmentDuration = serviceType.includes('temporary') ? 15 : 45;
  }
  
  // Create start and end datetime strings in UTC format
  const startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day), hour, minute);
  const endDate = new Date(startDate.getTime() + appointmentDuration * 60 * 1000);
  
  // Format dates for ICS (YYYYMMDDTHHMMSSZ)
  const formatDate = (date: Date) => {
    const pad = (num: number) => num.toString().padStart(2, '0');
    return `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;
  };
  
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Cortado Barbershop//Appointment//EN
METHOD:REQUEST
BEGIN:VEVENT
UID:${Date.now()}@cortadobarbershop.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:Cortado Barbershop - ${booking.service}
DESCRIPTION:Appointment Details:\\n\\nService: ${booking.service}\\nBarber: ${booking.barber}\\nDuration: ${appointmentDuration} minutes\\n\\nLocation: 2195 Hyacinth St NE Suite 150B, Salem, OR 97301\\nPhone: (503) 967-0304
LOCATION:Cortado Barbershop - 2195 Hyacinth St NE Suite 150B, Salem, OR 97301
BEGIN:VALARM
TRIGGER:-PT1H
ACTION:DISPLAY
DESCRIPTION:Reminder: Cortado Barbershop appointment in 1 hour
END:VALARM
BEGIN:VALARM
TRIGGER:-PT15M
ACTION:DISPLAY
DESCRIPTION:Reminder: Cortado Barbershop appointment in 15 minutes
END:VALARM
END:VEVENT
END:VCALENDAR`;
  
  return icsContent;
}

// Function to send confirmation email
async function sendConfirmationEmail(booking: any) {
  try {
    if (!booking.email) {
      console.log('No email provided, skipping email notification');
      return false;
    }

    const transporter = createTransporter();
    if (!transporter) {
      console.log('Email transporter not configured, skipping email notification');
      return false;
    }
    
    // Generate ICS file for calendar
    const icsContent = generateICSFile(booking);
    
    const emailContent = `
      <h1>Booking Confirmation - Cortado Barbershop</h1>
      <p>Hello ${booking.name},</p>
      <p>Your appointment has been confirmed with the following details:</p>
      <ul>
        <li><strong>Date:</strong> ${booking.date}</li>
        <li><strong>Time:</strong> ${booking.time}</li>
        <li><strong>Barber:</strong> ${booking.barber}</li>
        <li><strong>Service:</strong> ${booking.service}</li>
      </ul>
      <p><strong>Location:</strong> 2195 Hyacinth St NE Suite 150B, Salem, OR 97301</p>
      <p>A calendar invitation is attached to this email. Click on it to add the appointment to your calendar.</p>
      <p>If you need to reschedule or cancel, please contact us at (503) 967-0304.</p>
      <p>Thank you for choosing Cortado Barbershop!</p>
    `;
    
    // Email to customer with ICS attachment
    const customerMailOptions = {
      from: CONFIG.emailUser,
      to: booking.email,
      subject: 'Cortado Barbershop - Appointment Confirmation',
      html: emailContent,
      attachments: [
        {
          filename: 'cortado-appointment.ics',
          content: icsContent,
          contentType: 'text/calendar'
        }
      ]
    };
    
    const customerInfo = await transporter.sendMail(customerMailOptions);
    console.log('Customer email sent with calendar invite:', customerInfo.response);
    
    // Email to barber
    const barberEmailContent = `
      <h1>New Booking Alert - Cortado Barbershop</h1>
      <p>A new appointment has been booked:</p>
      <ul>
        <li><strong>Customer:</strong> ${booking.name}</li>
        <li><strong>Date:</strong> ${booking.date}</li>
        <li><strong>Time:</strong> ${booking.time}</li>
        <li><strong>Service:</strong> ${booking.service}</li>
        <li><strong>Contact Email:</strong> ${booking.email}</li>
        <li><strong>Phone:</strong> ${booking.phone || 'Not provided'}</li>
      </ul>
      <p>This appointment has been added to your calendar.</p>
    `;
    
    const barberMailOptions = {
      from: CONFIG.emailUser,
      to: CONFIG.emailUser,
      subject: `New Appointment: ${booking.date} at ${booking.time}`,
      html: barberEmailContent
    };
    
    const barberInfo = await transporter.sendMail(barberMailOptions);
    console.log('Barber notification email sent:', barberInfo.response);
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Function to add booking to Google Calendar
async function addToCalendar(booking: any) {
  try {
    const auth = await getGoogleAuth();
    if (!auth) {
      console.log('No auth available for calendar');
      return false;
    }
    
    const calendar = google.calendar({ version: 'v3', auth });
    
    // Parse date and time
    const [month, day, year] = booking.date.split('/');
    const [time, period] = booking.time.split(' ');
    const [hourStr, minuteStr] = time.split(':');
    
    let hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    
    // Convert to 24-hour format
    if (period === 'PM' && hour < 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }
    
    // Get appointment duration
    const serviceType = booking.service.toLowerCase();
    let appointmentDuration = 60; // Default 60 minutes
    
    if (serviceType.includes('haircut') && serviceType.includes('beard')) {
      appointmentDuration = 60;
    } else if (serviceType.includes('haircut')) {
      appointmentDuration = 45;
    } else if (serviceType.includes('beard')) {
      appointmentDuration = 30;
    } else if (serviceType.includes('shave')) {
      appointmentDuration = 30;
    } else if (serviceType.includes('enhancement')) {
      appointmentDuration = serviceType.includes('temporary') ? 15 : 45;
    }
    
    const startDateTime = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`;
    const startTimeMs = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:00`).getTime();
    const endTimeMs = startTimeMs + (appointmentDuration * 60 * 1000);
    const endDateTime = new Date(endTimeMs).toISOString().replace('Z', '');
    
    const eventDescription = `
Appointment: ${booking.service}
Client: ${booking.name}
Phone: ${booking.phone || 'No phone provided'}
Email: ${booking.email || 'None provided'}
Duration: ${appointmentDuration} minutes
Barber: ${booking.barber}
    `.trim();
    
    const event = {
      summary: `${booking.service} - ${booking.name}`,
      description: eventDescription,
      location: 'Cortado Barbershop - 2195 Hyacinth St NE Suite 150B, Salem, OR 97301',
      start: {
        dateTime: startDateTime,
        timeZone: CONFIG.timeZone
      },
      end: {
        dateTime: endDateTime,
        timeZone: CONFIG.timeZone
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 60 },
          { method: 'popup', minutes: 15 }
        ]
      }
    };
    
    const response = await calendar.events.insert({
      calendarId: CONFIG.calendarId,
      resource: event,
      sendUpdates: 'none'
    });
    
    console.log('Calendar event created:', response.data.htmlLink);
    return true;
  } catch (error) {
    console.error('Error adding to calendar:', error);
    return false;
  }
}

// Function to add booking to sheet
async function addBookingToSheet(booking: any) {
  try {
    const auth = await getGoogleAuth();
    if (!auth) {
      console.log('No auth available for adding booking to sheet');
      return false;
    }
    
    const sheets = google.sheets({ version: 'v4', auth });
    const timestamp = new Date().toISOString();
    
    const values = [
      [timestamp, booking.name, booking.email || '', booking.phone || '', booking.barber, booking.service, booking.date, booking.time]
    ];
    
    await sheets.spreadsheets.values.append({
      spreadsheetId: CONFIG.spreadsheetId,
      range: 'Form Responses!A:H',
      valueInputOption: 'USER_ENTERED',
      resource: { values }
    });
    
    console.log('Booking added to sheet successfully');
    return true;
  } catch (error) {
    console.error('Error adding booking to sheet:', error);
    return false;
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers });
}

export async function POST(request: NextRequest) {
  try {
    const booking = await request.json();
    console.log('=== BOOKING SUBMISSION STARTED ===');
    console.log('Booking data:', JSON.stringify(booking, null, 2));
    console.log('Environment check:', {
      hasGoogleCreds: !!process.env.GOOGLE_CREDENTIALS,
      hasClientEmail: !!process.env.GOOGLE_CLIENT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSpreadsheetId: !!CONFIG.spreadsheetId,
      hasCalendarId: !!CONFIG.calendarId,
      hasEmailUser: !!CONFIG.emailUser,
      hasEmailPass: !!CONFIG.emailPass
    });
    
    // Validate booking data
    if (!booking.barber || !booking.service || !booking.date || !booking.time || !booking.name) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required booking information'
        },
        { status: 400, headers }
      );
    }
    
    console.log(`Processing booking: ${booking.date} at ${booking.time} with ${booking.barber} for ${booking.name}`);
    
    // Add to sheet and calendar
    const [sheetUpdated, calendarUpdated] = await Promise.all([
      addBookingToSheet(booking),
      addToCalendar(booking).catch(err => {
        console.error('Calendar error:', err);
        return false;
      })
    ]);
    
    // Send confirmation email
    const emailSent = await sendConfirmationEmail(booking).catch(err => {
      console.error('Email error:', err);
      return false;
    });
    
    return NextResponse.json(
      {
        success: true,
        message: 'Booking confirmed successfully!',
        emailSent,
        sheetUpdated,
        calendarUpdated
      },
      { headers }
    );
    
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
        error: (error as Error).message
      },
      { status: 500, headers }
    );
  }
}