// Analytics tracking functions for Cortado Barbershop chatbot

interface ChatbotEvent {
  action: string
  category: string
  label?: string
  value?: number
}

// Track chatbot interactions
export const trackChatbotInteraction = (action: string, label?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: 'chatbot',
      event_label: label || action,
      custom_map: {
        business: 'cortado_barbershop'
      }
    })
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Chatbot Interaction:', { action, label, timestamp: new Date().toISOString() })
  }
}

// Track booking attempts and completions
export const trackBookingAttempt = (source: string) => {
  trackChatbotInteraction('booking_started', source)
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'begin_checkout', {
      event_category: 'booking',
      event_label: source,
      custom_map: {
        barber: 'michael',
        business: 'cortado_barbershop'
      }
    })
  }
}

export const trackBookingComplete = (service: string, value?: number) => {
  trackChatbotInteraction('booking_completed', service)
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'purchase', {
      event_category: 'booking',
      event_label: service,
      value: value || 0,
      currency: 'USD',
      custom_map: {
        barber: 'michael',
        business: 'cortado_barbershop'
      }
    })
  }
}

// Track service inquiries
export const trackServiceInquiry = (service: string) => {
  trackChatbotInteraction('service_inquiry', service)
}

// Track FAQ interactions
export const trackFAQInteraction = (question: string) => {
  trackChatbotInteraction('faq_interaction', question)
}

// Track chat session metrics
export const trackChatSession = (duration: number, messageCount: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'chat_session_complete', {
      event_category: 'chatbot',
      custom_parameters: {
        session_duration: duration,
        message_count: messageCount,
        barber: 'michael',
        business: 'cortado_barbershop'
      }
    })
  }
}

// Track chatbot performance
export const trackChatbotPerformance = (metric: string, value: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'chatbot_performance', {
      event_category: 'performance',
      custom_parameters: {
        metric,
        value,
        timestamp: new Date().toISOString()
      }
    })
  }
}

// Initialize analytics for the chatbot
export const initializeChatbotAnalytics = () => {
  if (typeof window !== 'undefined') {
    // Track chatbot loaded
    trackChatbotInteraction('chatbot_loaded')
    
    // Track page info
    const pageInfo = {
      url: window.location.href,
      title: document.title,
      referrer: document.referrer
    }
    
    if ((window as any).gtag) {
      (window as any).gtag('event', 'chatbot_page_view', {
        event_category: 'chatbot',
        custom_parameters: pageInfo
      })
    }
  }
}

// Error tracking
export const trackChatbotError = (error: string, context?: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'exception', {
      description: `Chatbot Error: ${error}`,
      fatal: false,
      custom_parameters: {
        context: context || 'unknown',
        barber: 'michael',
        business: 'cortado_barbershop'
      }
    })
  }
  
  // Console error for development
  if (process.env.NODE_ENV === 'development') {
    console.error('Chatbot Error:', { error, context, timestamp: new Date().toISOString() })
  }
}