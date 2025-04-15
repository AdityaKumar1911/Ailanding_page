"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

interface WorkshopCardProps {
  title: string
  description: string
  price: string
  duration: string
  format: string
  features: string[]
  bonuses: string[]
  buttonText: string
  buttonVariant: "default" | "premium"
}

export default function WorkshopCard({
  title,
  description,
  price,
  duration,
  format,
  features,
  bonuses,
  buttonText,
  buttonVariant,
}: WorkshopCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl shadow-purple-900/10"
    >
      <div className="p-6 md:p-8">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
            {title}
          </h3>
          <p className="text-gray-400 text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-gray-800/50 p-6 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center shrink-0">
              <Calendar className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <span className="text-sm text-gray-500 uppercase block">Date & Time</span>
              <div className="text-lg text-white font-medium">[Insert Date]</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <span className="text-sm text-gray-500 uppercase block">Duration</span>
              <div className="text-lg text-white font-medium">{duration}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-pink-900/30 flex items-center justify-center shrink-0">
              <Users className="h-5 w-5 text-pink-400" />
            </div>
            <div>
              <span className="text-sm text-gray-500 uppercase block">Format</span>
              <div className="text-lg text-white font-medium">{format}</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-semibold">What You'll Learn</h4>
            <div className="text-2xl font-bold">
              {price === "Free" ? (
                <span className="text-green-400">{price}</span>
              ) : (
                <span className="text-purple-400">
                  {price} <span className="text-sm text-gray-400">(Early Bird)</span>
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-3 bg-gray-800/30 p-3 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {bonuses.length > 0 && (
          <div className="mb-8 p-6 bg-gradient-to-br from-purple-950/40 to-blue-950/40 border border-purple-900/30 rounded-xl">
            <h4 className="text-xl font-semibold mb-4 text-purple-300">Bonuses for Attendees</h4>
            <div className="space-y-3">
              {bonuses.map((bonus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300">{bonus}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <motion.div className="text-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            size="lg"
            className={`w-full py-7 text-lg font-medium ${
              buttonVariant === "premium"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-900/20"
                : "shadow-lg shadow-green-900/20"
            }`}
          >
            {buttonText}
          </Button>
          <p className="mt-3 text-sm text-gray-500">Limited seats available!</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
