'use client'

import { cn } from '@/lib/utils'
import { getGradient } from '@/lib/card'
import { motion, useSpring, useTransform } from 'motion/react'
import { MouseEventHandler } from 'react'

const cardRotation = 15
const cardScale = 1.03
const sheenSize = 500

export default function CardAnimated({
  children,
  gradientIndex,
}: {
  children: React.ReactNode
  gradientIndex?: number
}) {
  const xPcnt = useSpring(0, { bounce: 0 })
  const yPcnt = useSpring(0, { bounce: 0 })
  const mouseX = useSpring(0, { bounce: 0 })
  const mouseY = useSpring(0, { bounce: 0 })
  const scale = useSpring(1, { bounce: 0 })

  const rotateX = useTransform(yPcnt, [-0.5, 0.5], [`-${cardRotation}deg`, `${cardRotation}deg`])
  const rotateY = useTransform(xPcnt, [-0.5, 0.5], [`${cardRotation}deg`, `-${cardRotation}deg`])

  const sheenX = useTransform(() => mouseX.get() - sheenSize / 2)
  const sheenY = useTransform(() => mouseY.get() - sheenSize / 2)

  const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect()

    const currentMouseX = e.clientX - left
    const currentMouseY = e.clientY - top

    return {
      currentMouseX,
      currentMouseY,
      containerWidth: width,
      containerHeight: height,
    }
  }

  const handleMouseMove: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY, containerWidth, containerHeight } = getMousePosition(e)

    xPcnt.set(currentMouseX / containerWidth - 0.5)
    yPcnt.set(currentMouseY / containerHeight - 0.5)

    mouseX.set(currentMouseX)
    mouseY.set(currentMouseY)
  }

  const handleMouseEnter: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY } = getMousePosition(e)

    mouseX.jump(currentMouseX)
    mouseY.jump(currentMouseY)
    scale.set(cardScale)
  }

  const handleMouseLeave: MouseEventHandler = () => {
    xPcnt.set(0)
    yPcnt.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`${cn(getGradient(gradientIndex))} flex flex-col group overflow-hidden rounded-xl shadow-lg z-10`}
      whileHover={{
        boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.25)',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="absolute z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-200 rounded-full blur-md"
        style={{
          height: sheenSize,
          width: sheenSize,
          background: 'radial-gradient(white, #3984ff00 80%)',
          left: sheenX,
          top: sheenY,
        }}
      />
      <div className="absolute bg-background inset-[0.2rem] z-0 rounded-lg"></div>
      <div className="z-10 p-4 relative">{children}</div>
    </motion.div>
  )
}
