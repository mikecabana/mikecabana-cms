'use client'

import { setCookieConsent } from '@/app/actions'
import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import NextLink from 'next/link'
import { useState } from 'react'
import { Button } from './ui/button'

type ConsentBannerProps = {
  show: boolean
}

export function ConsentBanner({ show }: ConsentBannerProps) {
  const [visible, setVisible] = useState(show)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="flex flex-col md:flex-row gap-1 items-center sticky bottom-0 md:bottom-2 w-full max-w-[950px] mx-auto z-50 bg-zinc-950 border border-zinc-700 py-2 px-4 md:rounded-lg shadow-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
        >
          <p className="text-sm text-slate-300 flex-grow">
            We use cookies to enhance your experience. By clicking {'"Allow Cookies"'}, you agree to
            our use of cookies in accordance with our{' '}
            <NextLink href="/privacy-policy" className="text-white font-medium hover:text-primary">
              Privacy Policy
            </NextLink>
          </p>

          <div className="flex justify-center md:justify-end shrink-0 gap-2">
            <form action={() => setCookieConsent('denied')}>
              <Button variant="ghost" size="sm" type="submit" onClick={() => setVisible(false)}>
                Decline
              </Button>
            </form>
            <form action={() => setCookieConsent('granted')}>
              <Button type="submit" size="sm" onClick={() => setVisible(false)}>
                Allow Cookies
              </Button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
