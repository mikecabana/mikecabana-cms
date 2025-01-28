'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

export function Turnstile() {
  const pathname = usePathname()

  useEffect(() => {
    const turnstileContainers = document.querySelectorAll('.cf-turnstile')

    turnstileContainers.forEach((turnstileContainer) => {
      turnstileContainer.innerHTML = ''
      if (window && window.turnstile) {
        window.turnstile.render(turnstileContainer, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          callback: 'javascriptCallback',
        })
      }
    })
  }, [pathname])

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></Script>
      <div
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-callback="javascriptCallback"
      ></div>
    </>
  )
}
