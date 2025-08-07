// Chatbot conversation flows and responses for Cortado Barbershop

export const bookingFlow = {
  steps: [
    {
      id: 'service_selection',
      message: 'What service would you like to book with Michael today?',
      type: 'options',
      options: [
        { value: 'haircut', label: '💇‍♂️ Premium Haircut ($45)' },
        { value: 'fade', label: '✂️ Signature Fade ($45)' },
        { value: 'beard_trim', label: '🧔 Beard Trim ($30)' },
        { value: 'hot_towel_shave', label: '🪒 Hot Towel Shave ($35)' },
        { value: 'combo', label: '🔥 Haircut + Beard Combo ($60)' }
      ]
    },
    {
      id: 'hair_type_check',
      message: 'Michael specializes in ALL hair types! What best describes your hair?',
      type: 'options',
      options: [
        { value: 'straight', label: 'Straight hair' },
        { value: 'wavy', label: 'Wavy hair' },
        { value: 'curly', label: 'Curly hair' },
        { value: 'coily', label: 'Coily/Textured hair' },
        { value: 'black_hair', label: 'Black/African American hair' },
        { value: 'no_preference', label: 'No specific requirements' }
      ]
    },
    {
      id: 'date_selection',
      message: 'What date works best for you?',
      type: 'options',
      options: [
        { value: 'today', label: 'Today' },
        { value: 'tomorrow', label: 'Tomorrow' },
        { value: 'this_week', label: 'This Week' },
        { value: 'next_week', label: 'Next Week' },
        { value: 'specific_date', label: 'Choose Specific Date' }
      ]
    },
    {
      id: 'time_selection',
      message: 'Here are the available times for {date} with Michael:',
      type: 'time_slots'
    },
    {
      id: 'contact_info',
      message: 'Perfect! I just need your contact information to confirm the appointment with Michael:',
      type: 'form',
      fields: ['name', 'phone', 'email', 'notes']
    },
    {
      id: 'confirmation',
      message: 'Awesome! Your appointment with Michael is confirmed!',
      type: 'confirmation'
    }
  ]
}

export const faqResponses = {
  hours: `🕒 **Our Hours:**\n7 Days a Week\n10:00 AM - 6:00 PM\n\nNo appointment necessary, but booking with Michael ensures your preferred time slot and reduces wait time!`,
  
  location: `📍 **Find Us:**\n2195 Hyacinth St NE **Suite 150B**\nSalem, OR 97301\n\n🚗 Free parking in front of the building\n📞 503-967-0304\n\n**Important:** We're in Suite 150B (not just 150). Look for our Cortado Barbershop sign with Michael's 23 years of experience!`,
  
  pricing: `💰 **Michael's Pricing:**\n\n💇‍♂️ Haircut: $45\n✂️ Haircut & Beard Trim: $60\n🧔 Beard Trim: $30\n🪒 Straight Razor Shave: $35\n🔥 Haircut, Beard & Shave: $80\n\nAll services include consultation with Michael's 23 years of expertise!`,
  
  black_hair: `✊ **Master of ALL Hair Types!**\n\nAbsolutely! Michael is a master barber with **23 YEARS of experience** specializing in ALL hair types, especially black hair. He's an expert in:\n\n• Precision fades and line-ups\n• Textured hair styling\n• Natural hair care\n• Beard grooming for coarse hair\n• Product recommendations\n\n23 years of experience serving Salem's diverse community!`,
  
  walk_ins: `🚶‍♂️ **Walk-ins Welcome!**\n\nWe accept walk-ins, but I'd recommend booking with Michael to:\n• Guarantee your preferred time\n• Skip the wait\n• Get Michael's full attention\n• Get text reminders\n\nWant to book with our master barber now? I can help you get scheduled in just a few clicks!`,
  
  parking: `🚗 **Parking Info:**\n\nFree parking is available right in front of our building at 2195 Hyacinth St NE. Look for Suite 150B - we're the established barbershop with Michael's 23 years of expertise and gold Cortado sign!`,
  
  products: `🧴 **Premium Products:**\n\nMichael uses and recommends high-quality grooming products including:\n• Pomades and styling creams\n• Beard oils and balms\n• Shampoos for different hair types\n• Aftershave and moisturizers\n\nWith 23 years of experience, Michael can recommend the perfect products for your hair type and styling needs!`,
  
  reviews: `⭐ **130+ Five-Star Reviews!**\n\nWe're proud to be Salem's highest-rated barbershop with over 130 five-star reviews! Our clients love:\n• Michael's expert cuts and fades\n• Friendly, professional service\n• Clean, welcoming atmosphere\n• 23 years of master barber expertise\n• Fair pricing\n\nCome see why Salem trusts Michael at Cortado for their grooming needs!`,
  
  experience: `🏆 **23 Years of Master Barbering Excellence**\n\nMichael brings 23 YEARS of professional barbering experience to Cortado, building a reputation for:\n• Consistent quality cuts\n• ALL hair types expertise\n• Professional service\n• Community involvement\n• Customer satisfaction\n• Modern techniques with classic style\n\nWe're not just a barbershop - Michael is a master of his craft!`,
  
  suite_location: `🏢 **Finding Suite 150B:**\n\nWe're located at 2195 Hyacinth St NE in **Suite 150B** (not Suite 150). Here's how to find us:\n\n1. Look for the building at 2195 Hyacinth St NE\n2. Find the Cortado Barbershop sign with gold scissors\n3. We're in Suite 150B - the established shop with Michael's 23 years of experience\n4. Free parking right in front!\n\nIf you have trouble finding us, call 503-967-0304 and we'll guide you in!`,
  
  specialties: `💪 **Michael's Specialties (23 Years Experience):**\n\n✂️ **ALL Hair Types:** Straight, wavy, curly, coily, textured - Michael does it all\n💇‍♂️ **Fades:** Low, mid, high, skin, drop, burst - 23 years of fade expertise\n🧔 **Beard Work:** Trimming, shaping, line-ups, hot towel treatments\n🪒 **Shaves:** Traditional hot towel shaves with premium products\n🎯 **Black Hair:** Specialized techniques for textured and coarse hair\n\nEvery service includes a consultation with Michael's 23 years of expertise!`,
  
  booking_benefits: `📱 **Why Book with Michael?**\n\n✅ Skip the wait - guaranteed time slot\n✅ Get Michael's full 23 years of expertise\n✅ Get text reminders\n✅ Easy rescheduling if needed\n✅ Special online-only promotions\n✅ Build your service history\n\nReady to book with our master barber? I can get you scheduled in under 2 minutes!`,
  
  covid_safety: `😷 **Health & Safety:**\n\nYour safety is Michael's priority:\n• Sanitized tools between every client\n• Clean workstations and chairs\n• Fresh towels for every service\n• Well-ventilated space\n• Professional hygiene standards\n\nWith 23 years of experience, Michael maintains the highest cleanliness standards so you can relax and enjoy your service!`
}

export const serviceDetails = {
  haircut: {
    name: 'Premium Haircut',
    price: '$35-50',
    duration: '45 minutes',
    description: 'Precision cuts tailored to your face shape and personal style with Michael\'s 23 years of experience. Includes consultation, wash, cut, and styling.',
    includes: ['Consultation with Michael', 'Shampoo & condition', 'Precision cut', 'Styling', 'Product recommendations']
  },
  fade: {
    name: 'Signature Fade',
    price: '$30-45',
    duration: '30-40 minutes',
    description: 'Expert fade cuts for ALL hair types with Michael\'s 23 years of experience. From subtle tapers to bold skin fades.',
    includes: ['Consultation with Michael', 'Precision fade', 'Line-up', 'Styling', 'Finishing touches']
  },
  beard_trim: {
    name: 'Beard Trim & Grooming',
    price: '$20-35',
    duration: '20-30 minutes',
    description: 'Professional beard trimming, shaping, and grooming with Michael\'s expertise for the perfect look.',
    includes: ['Consultation with Michael', 'Trim & shape', 'Line-up', 'Hot towel treatment', 'Beard oil application']
  },
  hot_towel_shave: {
    name: 'Hot Towel Shave',
    price: '$40-55',
    duration: '45-60 minutes',
    description: 'Luxury traditional shave experience with hot towels and premium products, delivered with Michael\'s 23 years of expertise.',
    includes: ['Pre-shave oil', 'Hot towel treatment', 'Premium shave cream', 'Professional shave', 'Aftershave & moisturizer']
  },
  combo: {
    name: 'Haircut + Beard Combo',
    price: '$50-70',
    duration: '60-75 minutes',
    description: 'Complete grooming package combining premium haircut with beard trimming, all with Michael\'s 23 years of expertise.',
    includes: ['Everything from haircut', 'Everything from beard trim', 'Coordinated styling', 'Save $5-15!']
  }
}

export const barberProfiles = [
  {
    id: 'michael',
    name: 'Michael - Master Barber',
    experience: '23 Years',
    specialties: ['ALL Hair Types', 'Master Fades', 'Black Hair Specialist', 'Beard Grooming', 'Classic Cuts', 'Modern Styles'],
    description: 'Master barber with 23 years of experience specializing in all hair types'
  }
]

export const timeSlots = [
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'
]

export const quickResponses = {
  greeting: [
    "Hey there! Welcome to Cortado with Michael! 👋",
    "Hi! Great to see you here! Michael's ready to help!",
    "Welcome to Cortado Barbershop! What can Michael do for you today?"
  ],
  booking_started: [
    "Awesome choice! Let's get you booked with Michael! 📅",
    "Perfect! I'll help you find the perfect time with our master barber.",
    "Great! Let's find you the perfect slot with Michael's 23 years of expertise."
  ],
  service_selected: [
    "Excellent choice! That's one of Michael's specialties.",
    "Great pick! You're going to love Michael's results with 23 years of experience.",
    "Perfect! Michael excels at that service with his expertise."
  ],
  appointment_confirmed: [
    "🎉 You're all set with Michael! Can't wait to see you at Cortado!",
    "Boom! Your appointment with our master barber is locked in. See you soon!",
    "Perfect! Your spot with Michael is reserved. Looking forward to it!"
  ]
}