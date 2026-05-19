"use client"

import { useEffect } from "react"
import Lenis from "lenis"

/**
 * Wraps the page in a Lenis-driven smooth scroller on pointer/desktop,
 * while letting touch devices use the platform's native momentum scrolling.
 *
 * Why: native wheel scrolling feels jumpy when paired with reveal-on-view
 * animations. Lenis interpolates the scroll position so reveals enter view
 * smoothly. On mobile we skip it because iOS/Android already do this well
 * and Lenis can fight the native momentum.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (isCoarsePointer || prefersReduced) return

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoRaf: false,
    })

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // In-page anchor links should use Lenis for scroll-to so the smoothing
    // is consistent with wheel scrolling.
    function handleAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null
      if (!anchor) return
      const id = anchor.getAttribute("href")
      if (!id || id === "#") return
      const el = document.querySelector(id) as HTMLElement | null
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -64 })
    }
    document.addEventListener("click", handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener("click", handleAnchorClick)
      lenis.destroy()
    }
  }, [])

  return null
}
