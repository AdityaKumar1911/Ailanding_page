"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, Users, Award, BookOpen, Video, ChevronRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import RegistrationForm from "@/components/registration-form"
import AnimatedText from "@/components/animated-text"
import AiBackground from "@/components/ai-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 pb-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gray-950 z-0"></div>

        {/* AI Background Component */}
        <AiBackground />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-left"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300">
                  Master AI Filmmaking
                </span>
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                  <AnimatedText text="Create Stunning AI Videos" />
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-xl">
                Learn to harness the power of AI to create professional-quality videos — no experience required
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 h-auto w-full sm:w-auto shadow-lg shadow-purple-900/20"
                  >
                    Join Workshop <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-950/50 text-lg px-8 py-6 h-auto w-full sm:w-auto"
                  >
                    Watch Demo <Video className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right content - 3D mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="lg:w-1/2 mt-10 lg:mt-0"
            >
              <div className="relative">
                {/* Glowing effect behind the image */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl blur-xl"></div>

                {/* Main image with frame */}
                <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
                  <div className="h-8 bg-gray-800 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="relative aspect-video">
                    <img
                      src="/placeholder.svg?height=720&width=1280"
                      alt="AI Filmmaking Workshop Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-purple-600/90 flex items-center justify-center cursor-pointer hover:bg-purple-700/90 transition-colors">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -right-6 -bottom-6 bg-gray-900 border border-gray-800 rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                >
                  <Video className="h-8 w-8 text-purple-400" />
                </motion.div>

                <motion.div
                  className="absolute -left-6 top-1/4 bg-gray-900 border border-gray-800 rounded-lg p-3 shadow-lg"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 1 }}
                >
                  <Award className="h-8 w-8 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section id="workshops" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium mb-4">
              Limited Seats Available
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              2-Day Intensive Workshop
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Master AI filmmaking with hands-on training and personalized feedback
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10 z-0"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-1 rounded-2xl shadow-xl">
                  <div className="bg-gray-900 rounded-xl overflow-hidden">
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                            Next-Gen AI Filmmaking: Tools, Projects & Feedback
                          </h3>
                          <p className="text-gray-400 text-lg max-w-2xl">
                            Go beyond theory — create real AI-powered films, ads, and effects. In this hands-on 2-day
                            workshop, you'll learn, create, and get feedback directly from industry professionals.
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-6 text-center">
                          <span className="text-sm text-gray-400 uppercase">Early Bird Price</span>
                          <div className="text-4xl font-bold text-purple-400 mb-2">₹99</div>
                          <span className="text-sm text-gray-400">Regular price: ₹199</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 bg-gray-800/50 p-6 rounded-xl">
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
                            <div className="text-lg text-white font-medium">2 Days (2 Hours per Day)</div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-pink-900/30 flex items-center justify-center shrink-0">
                            <Users className="h-5 w-5 text-pink-400" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-500 uppercase block">Format</span>
                            <div className="text-lg text-white font-medium">Live & Interactive via Zoom</div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-10">
                        <h4 className="text-xl font-semibold mb-6">What You'll Learn & Create</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            "Understand How Generative AI Works",
                            "Explore Top Tools for Image, Video, and Audio",
                            "Create Your First AI Short Ad (Live)",
                            "Create 1 Mini Project: Spec Ad / VFX Scene",
                            "Submit Your Project – Get Feedback & Tips",
                            "Build Your AI Filmmaking Portfolio",
                          ].map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-3 bg-gray-800/30 p-4 rounded-lg"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-10 p-6 bg-gradient-to-br from-purple-950/40 to-blue-950/40 border border-purple-900/30 rounded-xl">
                        <h4 className="text-xl font-semibold mb-4 text-purple-300">Workshop Bonuses</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {[
                            {
                              title: "Certificate of Completion",
                              description: "Showcase your new skills",
                            },
                            {
                              title: "Live Feedback Session",
                              description: "Get personalized advice",
                            },
                            {
                              title: "Templates & Project Files",
                              description: "Jump-start your projects",
                            },
                          ].map((bonus, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="bg-gray-800/30 p-4 rounded-lg"
                            >
                              <div className="flex items-start gap-3 mb-2">
                                <CheckCircle className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                                <span className="text-white font-medium">{bonus.title}</span>
                              </div>
                              <p className="text-gray-400 pl-8">{bonus.description}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <motion.div className="text-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="lg"
                          className="w-full py-7 text-lg font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-900/20"
                        >
                          RESERVE YOUR SEAT NOW
                        </Button>
                        <p className="mt-3 text-sm text-gray-500">Only 20 seats available for this session!</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Master the art of AI filmmaking with our comprehensive curriculum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Video className="h-10 w-10 text-purple-500" />,
                title: "AI Video Generation",
                description: "Learn to create stunning videos from text prompts using cutting-edge AI tools",
              },
              {
                icon: <Users className="h-10 w-10 text-blue-500" />,
                title: "Character Creation",
                description: "Generate realistic characters and avatars for your videos with AI",
              },
              {
                icon: <Award className="h-10 w-10 text-pink-500" />,
                title: "Visual Effects",
                description: "Add professional-grade VFX to your videos without technical expertise",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-green-500" />,
                title: "Script Writing",
                description: "Craft compelling scripts and storyboards with AI assistance",
              },
              {
                icon: <Calendar className="h-10 w-10 text-yellow-500" />,
                title: "Project Planning",
                description: "Organize your AI filmmaking workflow for maximum efficiency",
              },
              {
                icon: <Clock className="h-10 w-10 text-red-500" />,
                title: "Time-Saving Techniques",
                description: "Complete projects in hours instead of days with AI-powered shortcuts",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Your Mentor */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-70"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800">
                  <img
                    src="/placeholder.svg?height=400&width=400"
                    alt="Workshop Mentor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Mentor</h2>
              <div className="flex gap-2 mb-4">
                <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm">Filmmaker</span>
                <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm">Educator</span>
                <span className="bg-pink-900/50 text-pink-300 px-3 py-1 rounded-full text-sm">AI Creator</span>
              </div>
              <p className="text-gray-300 mb-6">
                With over 10 years of experience in content creation and a passion for emerging technologies, your
                mentor has helped thousands of students master the art of AI-powered filmmaking. Creator of the viral
                course "Next-Gen AI Filmmaking" with a community of over 1,000 students.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center">
                    <Video className="h-5 w-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300">1000+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-gray-300">Award-Winning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-pink-900/50 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-pink-400" />
                  </div>
                  <span className="text-gray-300">10+ Years Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Should Attend?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our workshops are designed for a variety of creative professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Filmmakers & YouTubers",
                description: "Enhance your content with cutting-edge AI tools and techniques",
              },
              {
                title: "Content Creators & Influencers",
                description: "Stand out with unique AI-generated visuals and effects",
              },
              {
                title: "Students & Creative Professionals",
                description: "Add valuable AI skills to your creative portfolio",
              },
              {
                title: "Curious Creatives",
                description: "Anyone interested in visual storytelling with AI",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-900" id="register">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Now</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Limited seats available for our upcoming workshops</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Find answers to common questions about our workshops</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Do I need filmmaking experience?",
                  answer: "No, this workshop is beginner-friendly and perfect for all creative minds.",
                },
                {
                  question: "Are the tools used in the workshop free?",
                  answer:
                    "Yes! We'll focus on free or freemium tools to help you get started without spending a penny.",
                },
                {
                  question: "Will I get the recording?",
                  answer: "Yes, a recording will be available for a limited time for registered attendees.",
                },
                {
                  question: "Is it really live and interactive?",
                  answer: "You'll be able to ask questions and even try out a demo during the session.",
                },
                {
                  question: "Can I join from mobile?",
                  answer: "Yes, but for the best experience, a desktop/laptop is recommended.",
                },
                {
                  question: "Will there be a certificate?",
                  answer: "A certificate will be provided to those who complete a short task post-workshop.",
                },
                {
                  question: "Will I actually create something in the workshop?",
                  answer: "Yes! You'll create at least 2 AI-powered video projects in the 2-day workshop.",
                },
                {
                  question: "Is the feedback personal?",
                  answer:
                    "Yes, you'll get a short review session with direct feedback on your project in the 2-day workshop.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-gray-800 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:bg-gray-900/50 transition-all">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-gray-900/30">{item.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                AI Filmmaking Workshop
              </h3>
              <p className="text-gray-400 mt-2">Create stunning videos with AI</p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} AI Filmmaking Workshop. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/90 backdrop-blur-md border-t border-gray-800 py-3 px-4 z-50 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-3 sm:mb-0">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 font-bold mr-4">
              AI Filmmaking Workshop
            </span>
            <div className="hidden sm:flex space-x-4">
              <Link href="#workshops" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Workshop
              </Link>
              <Link href="#register" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Register
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-400">Limited time offer:</span>
            <span className="text-purple-400 font-bold">₹99</span>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm px-4"
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
