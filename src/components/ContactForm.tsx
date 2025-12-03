'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { MessageSquare, Loader, CheckCircle } from 'lucide-react'
import AddressAutocomplete from './AddressAutocomplete'

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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    control,
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

  // Show success message if submission was successful
  if (submitStatus === 'success') {
    return (
      <div className="w-full max-w-3xl mx-auto bg-gray-50 rounded-3xl shadow-lg border border-gray-200 p-8 md:p-12">
        <div className="flex flex-col items-center justify-center py-16 animate-in fade-in duration-500">
          <div className="mb-6 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-25" />
              <div className="relative bg-green-50 rounded-full p-4">
                <CheckCircle className="text-green-600 w-12 h-12" />
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Message Sent!
          </h2>

          <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">
            Thank you! Your message has been sent. We will get back to you within 24 hours.
          </p>

          <button
            onClick={() => setSubmitStatus('idle')}
            className="bg-brand-blue hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-xl transition-colors"
          >
            Send Another Message
          </button>
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
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
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
                  errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-50' : 'border-gray-300 focus:border-brand-blue focus:ring-blue-50'
                }`}
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">{errors.name.message}</p>
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
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
                  errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-50' : 'border-gray-300 focus:border-brand-blue focus:ring-blue-50'
                }`}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">{errors.email.message}</p>
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
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
                  errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-50' : 'border-gray-300 focus:border-brand-blue focus:ring-blue-50'
                }`}
                aria-invalid={errors.phone ? 'true' : 'false'}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-600 text-sm mt-1" role="alert">{errors.phone.message}</p>
              )}
            </div>

            {/* Property Address Field */}
            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                Property Address *
              </label>
              <Controller
                name="propertyAddress"
                control={control}
                render={({ field }) => (
                  <AddressAutocomplete
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="123 Main St, Atlanta, GA 30303"
                    error={errors.propertyAddress?.message}
                  />
                )}
              />
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Service Interest *
              </label>
              <select
                {...register('service')}
                id="service"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors bg-white ${
                  errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-50' : 'border-gray-300 focus:border-brand-blue focus:ring-blue-50'
                }`}
                aria-invalid={errors.service ? 'true' : 'false'}
                aria-describedby={errors.service ? 'service-error' : undefined}
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
                <p id="service-error" className="text-red-600 text-sm mt-1" role="alert">{errors.service.message}</p>
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
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none bg-white ${
                  errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-50' : 'border-gray-300 focus:border-brand-blue focus:ring-blue-50'
                }`}
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-red-600 text-sm mt-1" role="alert">{errors.message.message}</p>
              )}
            </div>

            {/* Error Message - Only shown in form, not for success */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 p-4 rounded-lg flex items-start gap-3" role="alert" aria-live="assertive" aria-atomic="true">
                <MessageSquare className="w-5 h-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Error sending message</p>
                  <p className="text-sm">Please try again or call us directly at (770) 741-0615.</p>
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
      </div>
    </div>
  )
}
