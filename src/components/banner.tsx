import { cn } from '@/lib/utils'
import React from 'react'

export function Banner({ children, block }: { children: React.ReactNode; block?: boolean }) {
  return (
    <div
      className={cn(
        'bg-[#3C3C40] border border-[#7C7C7C] py-1 px-4 text-sm font-medium rounded-full mb-12 inline-block',
        {
          block: block,
        },
      )}
    >
      {children}
    </div>
  )
}
