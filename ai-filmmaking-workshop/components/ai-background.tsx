"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Characters for the matrix rain
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to track the y position of each column
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100) // Start above the canvas
    }

    // Drawing the characters
    const draw = () => {
      // Add semi-transparent black background to create fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set the color and font of the text
      ctx.fillStyle = "rgba(147, 51, 234, 0.3)" // Purple with low opacity
      ctx.font = `${fontSize}px monospace`

      // Draw each column
      for (let i = 0; i < drops.length; i++) {
        // Get random character
        const text = chars[Math.floor(Math.random() * chars.length)]

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset position if it's at the bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move the drop down
        drops[i]++
      }
    }

    // Animation loop
    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <>
      {/* Matrix rain canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />

      {/* Neural network visualization */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Neural network nodes */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-3 h-3 bg-purple-500 rounded-full opacity-30"
              style={{
                left: `${10 + (i % 5) * 20}%`,
                top: `${15 + Math.floor(i / 5) * 30}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Neural network connections */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.15 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>

          {/* Horizontal connections */}
          {Array.from({ length: 3 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
              <motion.line
                key={`h-${row}-${col}`}
                x1={`${10 + col * 20}%`}
                y1={`${15 + row * 30}%`}
                x2={`${30 + col * 20}%`}
                y2={`${15 + row * 30}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                  delay: col * 0.3,
                }}
              />
            )),
          )}

          {/* Vertical connections */}
          {Array.from({ length: 5 }).map((_, col) =>
            Array.from({ length: 2 }).map((_, row) => (
              <motion.line
                key={`v-${col}-${row}`}
                x1={`${10 + col * 20}%`}
                y1={`${15 + row * 30}%`}
                x2={`${10 + col * 20}%`}
                y2={`${45 + row * 30}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                  delay: col * 0.2,
                }}
              />
            )),
          )}

          {/* Diagonal connections */}
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.line
              key={`d-${i}`}
              x1={`${10 + i * 20}%`}
              y1={`${15 + Math.floor(i / 2) * 30}%`}
              x2={`${30 + i * 20}%`}
              y2={`${45 + Math.floor(i / 2) * 30}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "linear",
                delay: i * 0.4,
              }}
            />
          ))}
        </svg>

        {/* Binary code effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`binary-${i}`}
              className="absolute text-xs font-mono text-blue-500/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </motion.div>
          ))}
        </div>

        {/* Circular data visualization */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9333EA" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>

            {/* Outer circle */}
            <motion.circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{
                pathLength: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            />

            {/* Middle circle */}
            <motion.circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: -360 }}
              transition={{
                pathLength: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            />

            {/* Inner circle */}
            <motion.circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="url(#circleGradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, rotate: 0 }}
              animate={{ pathLength: 1, rotate: 360 }}
              transition={{
                pathLength: { duration: 5, repeat: Number.POSITIVE_INFINITY },
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            />

            {/* Radial lines */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180
              const x1 = 100 + 40 * Math.cos(angle)
              const y1 = 100 + 40 * Math.sin(angle)
              const x2 = 100 + 80 * Math.cos(angle)
              const y2 = 100 + 80 * Math.sin(angle)

              return (
                <motion.line
                  key={`radial-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#circleGradient)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.25,
                  }}
                />
              )
            })}
          </svg>
        </div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-950 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-950 to-transparent z-0"></div>
    </>
  )
}
