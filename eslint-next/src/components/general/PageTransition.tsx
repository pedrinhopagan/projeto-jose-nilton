'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathName = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        className={`w-screen`}
        key={`page-${pathName}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 50,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
