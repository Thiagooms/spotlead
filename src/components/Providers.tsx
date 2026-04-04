'use client'

import { useEffect } from 'react'
import { RouterProvider } from 'react-aria-components'
import { useRouter } from 'next/navigation'
import Lenis from 'lenis'

type WindowWithLenis = typeof window & { __lenis?: Lenis }

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    ;(window as WindowWithLenis).__lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      ;(window as WindowWithLenis).__lenis = undefined
    }
  }, [])

  return <RouterProvider navigate={router.push}>{children}</RouterProvider>
}
