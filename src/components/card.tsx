import { cn } from '@/lib/utils'
import { getGradient } from '@/lib/card'

export function Card({
  children,
  gradientIndex,
}: {
  children: React.ReactNode
  gradientIndex?: number
}) {
  return (
    <div className={cn(getGradient(gradientIndex), 'relative rounded-xl overflow-hidden')}>
      <div className="absolute bg-background inset-1 z-0 rounded-lg"></div>
      <div className="z-10 p-4 relative">{children}</div>
    </div>
  )
}
