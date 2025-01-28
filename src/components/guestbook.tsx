'use client'

import { Turnstile } from './turnstile'
import { Button } from './ui/button'
import NextLink from 'next/link'
import { signGuestbook } from '@/app/actions'
import { useActionState } from 'react'

export type GuestbookFormState = {
  message: string
  success: boolean
  error: boolean
}

const initialState: GuestbookFormState = {
  success: false,
  error: false,
  message: '',
}

export function Guestbook({ signed = false }: { signed: boolean }) {
  const [state, formAction, pending] = useActionState(signGuestbook, initialState)

  return (
    <div className="bg-primary text-background dark:text-foreground dark:bg-accent inline-block p-8 rounded-xl">
      <h3 className="text-xl text-center mb-2">Guestbook</h3>
      <p className="text-center mb-4 opacity-75">Sign the guestbook!</p>

      <form action={formAction}>
        <div className="grid columns-1 gap-4 mb-8">
          <textarea
            className="px-4 py-2 rounded-lg w-full"
            id="message"
            name="message"
            placeholder="Message*"
            required
          />

          <input
            className="px-4 py-2 rounded-lg"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />

          <input
            className="px-4 py-2 rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <Turnstile />

        {state.error && <div className="text-center text-red-500 mb-4">{state.message}</div>}

        <div className="text-center mb-4">
          <Button type="submit" disabled={pending || state.success || signed}>
            {signed ? 'Signed!' : pending ? 'Submitting...' : state.success ? 'Signed!' : 'Submit'}
          </Button>
        </div>
        <div className="text-center">
          <NextLink className="text-sm hover:underline" href="/guests">
            See who else signed the guestbook
          </NextLink>
        </div>
      </form>
    </div>
  )
}
