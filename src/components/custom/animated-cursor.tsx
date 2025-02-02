"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function AnimatedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y)
      
      if (hoveredElement instanceof Element) {
        setIsPointer(window.getComputedStyle(hoveredElement).cursor === "pointer")
      } else {
        setIsPointer(false) // Default to false if no element is found
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", updateCursorType)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", updateCursorType)
    }
  }, [mousePosition.x, mousePosition.y])

  return (
    <>
      {/* Inner Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)] pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          damping: 18,
          stiffness: 250,
          mass: 0.4,
        }}
      />
      
      {/* Outer Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-violet-400 bg-transparent mix-blend-difference pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPointer ? 1.3 : 1,
          opacity: isPointer ? 0.6 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 180,
          mass: 0.7,
        }}
      />
    </>
  )
}
