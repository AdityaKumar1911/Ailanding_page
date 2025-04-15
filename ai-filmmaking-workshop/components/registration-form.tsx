"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function RegistrationForm() {
  const [formStep, setFormStep] = useState(0)
  const [workshopType, setWorkshopType] = useState("free")
  const [joinWhatsApp, setJoinWhatsApp] = useState(true)

  const nextStep = () => {
    setFormStep(formStep + 1)
  }

  const prevStep = () => {
    setFormStep(formStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    // For now, just show the success step
    nextStep()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8"
    >
      {formStep === 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-6">Choose Your Workshop</h3>

          <RadioGroup defaultValue="free" className="space-y-4 mb-6" onValueChange={setWorkshopType}>
            <div className="flex items-start space-x-3 p-4 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer">
              <RadioGroupItem value="free" id="free" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="free" className="text-lg font-medium cursor-pointer">
                  Free 2-Hour Workshop
                </Label>
                <p className="text-gray-400 mt-1">Perfect for beginners looking to explore AI filmmaking</p>
              </div>
              <div className="text-green-400 font-bold">Free</div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer">
              <RadioGroupItem value="premium" id="premium" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="premium" className="text-lg font-medium cursor-pointer">
                  2-Day Intensive Workshop
                </Label>
                <p className="text-gray-400 mt-1">Hands-on experience with personal feedback</p>
              </div>
              <div className="text-purple-400 font-bold">₹99</div>
            </div>
          </RadioGroup>

          <Button
            onClick={nextStep}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Continue
          </Button>
        </motion.div>
      )}

      {formStep === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-6">Your Information</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+91 98765 43210" required />
            </div>

            <div className="pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="whatsapp"
                  checked={joinWhatsApp}
                  onCheckedChange={(checked) => setJoinWhatsApp(checked as boolean)}
                />
                <Label htmlFor="whatsapp" className="text-sm text-gray-300">
                  Join our WhatsApp community for updates and exclusive content
                </Label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={prevStep} className="flex-1">
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Register Now
              </Button>
            </div>
          </form>
        </motion.div>
      )}

      {formStep === 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
          <p className="text-gray-400 mb-6">
            {workshopType === "free"
              ? "You're all set for the free 2-hour workshop."
              : "You're all set for the 2-day intensive workshop."}
          </p>
          <p className="text-gray-400 mb-6">
            We've sent the details to your email.
            {joinWhatsApp && " You'll also receive an invitation to our WhatsApp community shortly."}
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Return to Homepage
          </Button>
        </motion.div>
      )}
    </motion.div>
  )
}
