'use client'

import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, Phone, MessageSquare, Loader, LogOut, User } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  propertyAddress: z.string().min(5, 'Property address must be at least 5 characters'),
  service: z.enum(['air-duct-cleaning', 'dryer-vent-cleaning', 'hvac-installation', 'duct-repair', 'waterproofing', 'uv-light', 'insulation', 'mold-testing', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const { data: session, status } = useSession()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      propertyAddress: '',
      service: undefined,
      message: '',
    },
  })

  // Pre-fill form with session data
  useEffect(() => {
    if (session?.user) {
      setValue('name', session.user.name || '')
      setValue('email', session.user.email || '')
    }
  }, [session, setValue])

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isLoading = status === 'loading'
  const isAuthenticated = status === 'authenticated'

  if (isLoading) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-gray-50 rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12 flex items-center justify-center min-h-96">
          <Loader className="w-8 h-8 animate-spin text-brand-blue" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-gray-50 rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">Send Us a Message</h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        {/* Authentication Section */}
        <div className="mb-8 pb-8 border-b border-gray-200">
          {isAuthenticated && session?.user ? (
            <div className="bg-white rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {session.user.image && (
                  <img
                    src={session.user.image}
                    alt={session.user.name || 'User'}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">{session.user.name}</p>
                  <p className="text-sm text-gray-600">{session.user.email}</p>
                </div>
              </div>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          ) : (
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-4">
                Sign in with Google to get started
              </p>
              <button
                onClick={() => signIn('google')}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 hover:border-brand-blue hover:bg-blue-50 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <User className="w-5 h-5" />
                Sign in with Google
              </button>
            </div>
          )}
        </div>

        {/* Form - Only show when authenticated */}
        {isAuthenticated ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-50 transition-colors bg-white"
              />
              <p className="text-xs text-gray-500 mt-1">Pre-filled from your account. Feel free to edit.</p>
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-50 transition-colors bg-white"
              />
              <p className="text-xs text-gray-500 mt-1">Pre-filled from your account. Feel free to edit.</p>
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                placeholder="(770) 123-4567"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-50 transition-colors bg-white"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Property Address Field */}
            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                Property Address *
              </label>
              <input
                {...register('propertyAddress')}
                type="text"
                id="propertyAddress"
                placeholder="123 Main St, Atlanta, GA 30303"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-50 transition-colors bg-white"
              />
              {errors.propertyAddress && (
                <p className="text-red-600 text-sm mt-1">{errors.propertyAddress.message}</p>
              )}
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Service Interest *
              </label>
              <select
                {...register('service')}
                id="service"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-50 transition-colors bg-white"
              >
                <option value="">Select a service...</option>
                <option value="air-duct-cleaning">Residential Air Duct Cleaning</option>
                <option value="dryer-vent-cleaning">Dryer Vent Cleaning</option>
                <option value="hvac-installation">HVAC System Installation</option>
                <option value="duct-repair">Air Duct Installation & Repair</option>
                <option value="waterproofing">Basement & Crawlspace Waterproofing</option>
                <option value="uv-light">HVAC UV Light Installation</option>
                <option value="insulation">Blown-In Attic Insulation</option>
                <option value="mold-testing">Professional Mold Testing</option>
                <option value="other">Other</option>
              </select>
              {errors.service && (
                <p className="text-red-600 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={5}
                placeholder="Tell us about your needs..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-blue-50 transition-colors resize-none bg-white"
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 p-4 rounded-lg flex items-start gap-3">
                <MessageSquare className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Thank you! Your message has been sent.</p>
                  <p className="text-sm">We will get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-lg flex items-start gap-3">
                <MessageSquare className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Error sending message</p>
                  <p className="text-sm">Please try again or call us directly.</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-blue hover:bg-blue-900 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <MessageSquare className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Your information will never be shared.
            </p>
          </form>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-600">
              Please sign in with your Google account to continue with the contact form.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
