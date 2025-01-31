'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'

export default function SiteTitle() {
  const titles = ['Mike Cabana', '@mikecabana']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <>
      <div className="overflow-hidden h-8 md:h-16 relative mb-6">
        <h1 className="absolute invisible">{titles[0]}</h1>
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: 'anticipate' }}
            className="absolute w-full font-bold text-3xl md:text-6xl"
          >
            {titles[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  )
}
