'use client'

import * as React from 'react'
const NextThemesProvider = dynamic(() => import('next-themes').then((e) => e.ThemeProvider), {
  ssr: false,
})

import { type ThemeProviderProps } from 'next-themes/dist/types'
import dynamic from 'next/dynamic'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProviderProps>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
