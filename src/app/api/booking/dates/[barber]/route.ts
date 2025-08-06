import { NextRequest, NextResponse } from 'next/server';

// Configuration
const CONFIG = {
  businessDays: [1, 2, 4, 5, 6], // Monday, Tuesday, Thursday, Friday, Saturday
  daysToLookAhead: 60 // Show dates for 2 months ahead
};

// Headers for CORS
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Helper function to parse date string to Date object
function parseDate(dateStr: string) {
  try {
    const [month, day, year] = dateStr.split('/').map(num => parseInt(num));
    return new Date(year, month - 1, day);
  } catch (error) {
    console.error(`Error parsing date ${dateStr}:`, error);
    return null;
  }
}

// Function to generate available dates
function generateAvailableDates() {
  const dates = [];
  const today = new Date();
  
  for (let i = 1; i <= CONFIG.daysToLookAhead; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    // Only include business days
    const dayOfWeek = date.getDay();
    if (CONFIG.businessDays.includes(dayOfWeek)) {
      const dateStr = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
      dates.push(dateStr);
    }
  }
  
  return dates;
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { barber: string } }
) {
  try {
    const barber = decodeURIComponent(params.barber);
    console.log(`Getting available dates for barber: ${barber}`);
    
    const dates = generateAvailableDates();
    
    return NextResponse.json(
      { dates },
      { headers }
    );
    
  } catch (error) {
    console.error('Error getting dates:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Error retrieving available dates',
        dates: []
      },
      { status: 500, headers }
    );
  }
}