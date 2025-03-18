'use server'

import { GuestbookFormState } from '@/components/guestbook'
import { getPayload } from '@/lib/payload'
import { cookies as nextCookies, headers as nextHeaders } from 'next/headers'

export async function signGuestbook(prevState: GuestbookFormState, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string
  const cfTurnstileResponse = formData.get('cf-turnstile-response') as string

  const headers = await nextHeaders()

  // If using a reverse proxy, ensure the X-Real-IP header is enabled to accurately capture the client's original IP address.
  const ip = headers.get('x-real-ip')

  // Create form data for Turnstile verification
  const verifyFormData = new FormData()
  verifyFormData.append('secret', process.env.TURNSTILE_SECRET_KEY ?? '')
  verifyFormData.append('response', String(cfTurnstileResponse))
  verifyFormData.append('remoteip', String(ip))

  const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

  try {
    const result = await fetch(url, {
      body: verifyFormData,
      method: 'POST',
    })

    const outcome = await result.json()
    if (!outcome.success) {
      return {
        success: false,
        error: true,
        message: 'Invalid CAPTCHA',
      }
    }

    const cookies = await nextCookies()

    cookies.set('guestbook', 'signed', {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      httpOnly: true,
    })

    console.log(`Guestbook signed by ${name} (${email}): ${message}`)

    const payload = await getPayload()

    await payload.create({
      collection: 'guests',
      data: {
        name,
        email,
        message,
        approved: false,
      },
    })

    return {
      success: true,
      error: false,
      message: '',
    }
  } catch (err) {
    return {
      success: false,
      error: true,
      message: 'Unable to verify CAPTCHA',
    }
  }
}

export async function setCookieConsent(consent: 'granted' | 'denied') {
  const cookies = await nextCookies()
  cookies.set({
    name: 'cookie_consent',
    value: consent,
    expires: Date.now() + 1000 * 60 * 60 * 24 * Math.floor(365.25 / 12), // approx every 1 month
    maxAge: Date.now() + 1000 * 60 * 60 * 24 * Math.floor(365.25 / 12),
  })
}

export async function getCookieConsent() {
  const cookies = await nextCookies()
  const consentCookie = cookies.get('cookie_consent')
  return consentCookie?.value as 'granted' | 'denied' | undefined
}
