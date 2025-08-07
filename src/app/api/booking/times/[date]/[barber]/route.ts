import { NextRequest, NextResponse } from 'next/server';

// Configuration
const CONFIG = {
  businessHours: {
    start: '10:00 AM',
    end: '6:00 PM'
  },
  timeZone: 'America/Los_Angeles',
};

// Headers for CORS
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Function to generate available times
function generateAvailableTimes(date: string, barber: string) {
  // Check if the date is Sunday (0) or Wednesday (3)
  const dateParts = date.split('/');
  const checkDate = new Date(
    parseInt(dateParts[2]), 
    parseInt(dateParts[0]) - 1, 
    parseInt(dateParts[1])
  );
  const dayOfWeek = checkDate.getDay();
  
  // Return empty if closed days
  if (dayOfWeek === 0 || dayOfWeek === 3) {
    return [];
  }
  
  const times = [];
  
  // Generate times from 10 AM to 6 PM
  const businessHours = [
    '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', 
    '4:00 PM', '5:00 PM', '6:00 PM'
  ];
  
  // Apply 2-hour booking window restriction for today
  const now = new Date();
  const pacificNow = new Date(now.toLocaleString("en-US", {timeZone: CONFIG.timeZone}));
  const currentDate = pacificNow.toLocaleDateString('en-US', { 
    month: 'numeric', 
    day: 'numeric', 
    year: 'numeric',
    timeZone: CONFIG.timeZone
  });
  
  const isToday = currentDate === date;
  
  if (isToday) {
    // Filter out times that are less than 2 hours from now
    const currentHour = pacificNow.getHours();
    const currentMinute = pacificNow.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    const minimumBookingTimeInMinutes = currentTimeInMinutes + 120; // 2 hours
    
    businessHours.forEach(timeStr => {
      const [time, period] = timeStr.split(' ');
      const [hourStr, minuteStr] = time.split(':');
      let hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      
      if (period === 'PM' && hour !== 12) hour += 12;
      if (period === 'AM' && hour === 12) hour = 0;
      
      const appointmentTimeInMinutes = hour * 60 + minute;
      
      if (appointmentTimeInMinutes >= minimumBookingTimeInMinutes) {
        times.push({
          time: timeStr,
          barber: barber
        });
      }
    });
  } else {
    // For future dates, show all business hours
    businessHours.forEach(timeStr => {
      times.push({
        time: timeStr,
        barber: barber
      });
    });
  }
  
  return times;
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ date: string, barber: string }> }
) {
  let date = '';
  let barber = '';
  
  try {
    const { date: dateParam, barber: barberParam } = await params;
    date = decodeURIComponent(dateParam);
    barber = decodeURIComponent(barberParam);
    
    console.log(`Getting available times for ${date} with ${barber}`);
    
    const availableTimes = generateAvailableTimes(date, barber);
    
    return NextResponse.json(
      { 
        availableTimes,
        date,
        barber
      },
      { headers }
    );
    
  } catch (error) {
    console.error('Error getting times:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error retrieving available times',
        availableTimes: [],
        date: date,
        barber: barber
      },
      { status: 500, headers }
    );
  }
}