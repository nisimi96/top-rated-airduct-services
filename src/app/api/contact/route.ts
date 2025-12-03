import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { COMPANY_INFO } from '@/lib/constants'

interface ContactFormData {
  name: string
  email: string
  phone: string
  propertyAddress: string
  service: 'air-duct-cleaning' | 'dryer-vent-cleaning' | 'hvac-installation' | 'duct-repair' | 'waterproofing' | 'uv-light' | 'insulation' | 'mold-testing' | 'other'
  message: string
}

// Initialize Nodemailer transporter
const getTransporter = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials not configured. Please check your .env.local file.')
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Get transporter (this will throw if env vars are missing)
    const transporter = getTransporter()

    // Format the email content for business
    const businessEmailContent = `
New Contact Form Submission

Customer Details:
---
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone}
Property Address: ${body.propertyAddress}
Service Interest: ${body.service}

Message:
${body.message}
---

This is an automated email. Please reply to ${body.email} to contact the customer.
`

    // Send email to business only
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: COMPANY_INFO.email,
      subject: `New Customer (Air Duct) Website - ${body.name}`,
      text: businessEmailContent,
      replyTo: body.email,
    })

    console.log('Contact form submitted by:', body.name, 'Email:', body.email)

    return NextResponse.json(
      {
        message: 'Message received. We will contact you soon.',
        data: {
          name: body.name,
          email: body.email,
        }
      },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error('Contact form error:', errorMessage, error)
    return NextResponse.json(
      {
        error: 'Failed to process form submission',
        details: errorMessage
      },
      { status: 500 }
    )
  }
}
