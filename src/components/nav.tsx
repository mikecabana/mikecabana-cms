'use client'

import NextLink from 'next/link'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

function WWM() {
  return (
    <Button
      variant="secondary"
      asChild
      className="bg-sera text-primary-foreground font-bold hover:bg-sera hover:opacity-75 active:opacity-50 transition-all"
    >
      <NextLink href="https://www.seratech.dev" target="_blank">
        Work with me
      </NextLink>
    </Button>
  )
}

export function Nav() {
  const items = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Projects',
      route: '/#projects',
    },
    {
      label: 'Posts',
      route: '/posts',
    },
    // {
    //   label: 'Snippets',
    //   route: '/snippets',
    // },
    // {
    //   label: 'Connect',
    //   route: '/connect',
    // },
    {
      label: 'Guestbook',
      route: '/guests',
    },
    // {
    //   label: 'Sera',
    //   route: '/sera',
    // },
  ]

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-y-hidden')
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [isOpen])
  return (
    <>
      <nav className="hidden md:flex items-center justify-between px-4 py-6 mb-12">
        <ul className="flex items-center gap-6 font-medium">
          {items.map((item, i) => (
            <li key={i}>
              <NextLink
                href={item.route}
                className="hover:text-sera transition-colors duration-100"
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-2 font-medium">
          <li>
            <WWM />
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>

      <div className="flex md:hidden justify-end items-center gap-2 px-4 py-6 mb-12">
        <WWM />
        <ThemeSwitcher />
        <Button variant="ghost" size="icon" onClick={toggle}>
          <Menu className="h-[1.2rem] w-[1.2rem] transition-all" />
        </Button>
      </div>
      <nav
        className={cn(
          'fixed md:hidden top-0 left-0 w-screen min-h-60 z-[9999] p-8 bg-accent shadow-2xl transform transition-transform duration-300 ease-in-out',
          { 'translate-y-0': isOpen, '-translate-y-full': !isOpen },
        )}
      >
        <ul className="grid gap-6 text-2xl font-medium text-right">
          <li>
            <Button variant="ghost" size="icon" onClick={toggle}>
              <X />
            </Button>
          </li>
          {items.map((item, i) => (
            <li key={i}>
              <NextLink
                onClick={toggle}
                href={item.route}
                className="action:text-sera transition-colors duration-100"
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
