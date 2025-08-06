'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Calendar, Clock, Phone, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Message {
  role: 'user' | 'assistant'
  content: string
  type?: 'text' | 'options' | 'quick_actions'
  options?: Array<{ value: string; label: string; icon?: any }>
}

const quickActions = [
  { value: 'book', label: 'Book Appointment', icon: Calendar },
  { value: 'services', label: 'View Services & Pricing', icon: Clock },
  { value: 'location', label: 'Location & Directions', icon: MapPin },
  { value: 'hours', label: 'Hours & Contact', icon: Phone },
]

const faqResponses: { [key: string]: string } = {
  'hours': 'We\'re open 7 days a week from 10am to 6pm. No appointment necessary, but booking with Michael ensures your preferred time slot!',
  'location': 'We\'re located at 2195 Hyacinth St NE Suite 150B, Salem, OR 97301. Look for Suite 150B - Michael has 23 years of experience and 130+ 5-star reviews!',
  'services': 'Michael offers: Premium Haircuts ($35-50), Signature Fades ($30-45), Beard Trims ($20-35), Hot Towel Shaves ($40-55). All include consultation and Michael\'s expert touch with 23 years of experience.',
  'book': 'You can book online through our website or call us at 503-967-0304 to schedule with Michael. We recommend booking for minimal wait time, but walk-ins are always welcome!',
  'black_hair': 'Absolutely! Michael specializes in ALL hair types with 23 years of experience, including black hair. He\'s an expert in fades, line-ups, and textured hair styling.',
  'pricing': 'Michael\'s services range from $20-55: Premium Haircuts ($35-50), Signature Fades ($30-45), Beard Trims ($20-35), Hot Towel Shaves ($40-55). 23 years of master barber expertise!',
}

export default function AdvancedChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m here to help you with appointments, services, and any questions about Cortado Barbershop. How can I assist you today?',
      type: 'options',
      options: quickActions
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleQuickAction = async (value: string) => {
    const userMessage: Message = { role: 'user', content: quickActions.find(a => a.value === value)?.label || value }
    setMessages(prev => [...prev, userMessage])

    // Handle quick responses for common queries
    if (faqResponses[value]) {
      setTimeout(() => {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: faqResponses[value],
          type: 'options',
          options: [
            { value: 'book', label: 'Book Appointment' },
            { value: 'question', label: 'Ask Another Question' }
          ]
        }])
      }, 500)
    } else {
      await sendToAI(value)
    }
  }

  const sendToAI = async (message: string) => {
    setIsLoading(true)
    try {
      // Check for local FAQ responses first
      const lowerMessage = message.toLowerCase()
      let response = ''
      let showQuickActions = false

      if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('close')) {
        response = faqResponses.hours
        showQuickActions = true
      } else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where') || lowerMessage.includes('suite')) {
        response = faqResponses.location
        showQuickActions = true
      } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
        response = faqResponses.pricing
        showQuickActions = true
      } else if (lowerMessage.includes('black hair') || lowerMessage.includes('african') || lowerMessage.includes('textured')) {
        response = faqResponses.black_hair
        showQuickActions = true
      } else if (lowerMessage.includes('book') || lowerMessage.includes('appointment')) {
        response = faqResponses.book
        showQuickActions = true
      } else if (lowerMessage.includes('service')) {
        response = faqResponses.services
        showQuickActions = true
      } else {
        // Send to Gemini AI for complex queries
        const apiResponse = await fetch('/api/chatbot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message })
        })
        const data = await apiResponse.json()
        response = data.response
        showQuickActions = true
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: response,
        type: showQuickActions ? 'options' : 'text',
        options: showQuickActions ? [
          { value: 'book', label: 'Book Appointment' },
          { value: 'services', label: 'View Services' },
          { value: 'question', label: 'Ask Another Question' }
        ] : undefined
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I\'m having trouble right now. Please call us at 503-967-0304 for immediate assistance!'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    const messageToSend = input
    setInput('')

    await sendToAI(messageToSend)
  }

  const handleSendClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    sendMessage()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gold hover:bg-gold/90 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center",
          isOpen && "hidden"
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-72 sm:w-80 h-80 sm:h-96 bg-gray-900 border border-gray-700 rounded-lg shadow-xl flex flex-col animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gold rounded-t-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-black">Cortado Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black/80 hover:text-black transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-gold text-black'
                        : 'bg-white text-black'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
                
                {/* Quick Action Options */}
                {message.type === 'options' && message.options && (
                  <div className="mt-2 space-y-1">
                    {message.options.map((option, optionIndex) => {
                      const Icon = option.icon
                      return (
                        <button
                          key={optionIndex}
                          onClick={() => handleQuickAction(option.value)}
                          className="w-full flex items-center gap-2 justify-start text-left px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-black"
                        >
                          {Icon && <Icon className="h-4 w-4 text-gold" />}
                          {option.label}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="flex-1 px-3 py-2 min-h-[44px] border border-gray-300 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200"
              disabled={isLoading}
            />
            <button
              onClick={handleSendClick}
              onTouchEnd={handleSendClick}
              disabled={!input.trim() || isLoading}
              className="px-4 py-2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-gold hover:bg-gold/90 disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed text-black rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 active:scale-95 touch-manipulation"
              aria-label="Send message"
              type="button"
            >
              <Send className={`h-4 w-4 ${isLoading ? 'animate-pulse' : ''}`} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}