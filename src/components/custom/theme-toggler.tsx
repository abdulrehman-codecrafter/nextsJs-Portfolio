"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.button
      className="relative bottom-1.5 w-6 text-dark dark:text-violet-400 shadow-lg"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <Moon size={24} />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : -180,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <Sun size={24} />
      </motion.div>
    </motion.button>
  )
}

