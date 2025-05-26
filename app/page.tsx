"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Heart,
  X,
  Zap,
  Star,
  MessageCircle,
  Clock,
  ArrowRight,
  Sparkles,
  Target,
  Shield,
  ChevronRight,
  Briefcase,
  UserCheck,
} from "lucide-react"

export default function HomePage() {
  const [currentCard, setCurrentCard] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const freelancerCards = [
    {
      name: "Sarah Chen",
      tagline: "AI Agent Specialist | React & GPT Expert",
      skills: ["GPT-4", "Node.js", "React"],
      rating: 4.9,
      experience: "3 yrs",
      project: "Custom GPT Agent for Finance CRM",
      match: 91,
      image: "/placeholder.svg?height=120&width=120",
      responseTime: "2h avg",
    },
    {
      name: "Alex Rodriguez",
      tagline: "Full-Stack Developer | AI Integration Pro",
      skills: ["Python", "LangChain", "FastAPI"],
      rating: 4.8,
      experience: "5 yrs",
      project: "Voice AI Assistant for E-commerce",
      match: 87,
      image: "/placeholder.svg?height=120&width=120",
      responseTime: "1h avg",
    },
    {
      name: "Maya Patel",
      tagline: "UI/UX Designer | AI-Powered Interfaces",
      skills: ["Figma", "React", "AI/UX"],
      rating: 5.0,
      experience: "4 yrs",
      project: "AI Chatbot Interface Design",
      match: 94,
      image: "/placeholder.svg?height=120&width=120",
      responseTime: "30m avg",
    },
  ]

  const handleSwipe = (direction: "left" | "right") => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentCard((prev) => (prev + 1) % freelancerCards.length)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleSwipe("right")
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Swipe to Match",
      description: "Just like Tinder - swipe right on freelancers you love, left on those you don't",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Instant Matching",
      description: "No bidding wars. When both parties swipe right, work starts immediately",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "AI-Powered Curation",
      description: "Smart algorithm matches you with the perfect freelancer based on skills & compatibility",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Guaranteed",
      description: "Pre-vetted freelancers with verified skills and proven track records",
    },
  ]

  const stats = [
    { number: "10x", label: "Faster Hiring" },
    { number: "95%", label: "Match Success" },
    { number: "50K+", label: "Active Users" },
    { number: "24h", label: "Avg. Response" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              SkillMatch AI
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-pink-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-pink-400 transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="hover:text-pink-400 transition-colors">
              Pricing
            </a>
            <Link href="/auth/login">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                Sign In
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border-pink-500/30">
                  🔥 Tinder for Freelancing
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Swipe.
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Match.
                  </span>
                  <br />
                  <span className="text-white">Start Earning.</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  No bidding wars. No waiting. Just swipe right on the perfect freelancer and start your project
                  instantly. AI-powered matching that actually works.
                </p>
              </div>

              {/* Main CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/client/dashboard" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-lg px-8 py-6 group"
                  >
                    <Briefcase className="mr-3 h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">Join as Client</div>
                      <div className="text-sm opacity-90">Find perfect freelancers</div>
                    </div>
                    <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/freelancer/dashboard" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-6 group"
                  >
                    <UserCheck className="mr-3 h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">Join as Freelancer</div>
                      <div className="text-sm opacity-90">Find amazing projects</div>
                    </div>
                    <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Swipe Demo */}
            <div className="relative">
              <div className="relative w-full max-w-sm mx-auto">
                {/* Phone Frame */}
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-black rounded-[2.5rem] p-6 h-[600px] relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-6 text-white text-sm">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white/50 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="text-center mb-6">
                      <h3 className="text-white text-lg font-semibold">Find Your Perfect Match</h3>
                      <p className="text-gray-400 text-sm">AI Agent Development Project</p>
                    </div>

                    {/* Swipe Card */}
                    <div className="relative h-96">
                      <Card
                        className={`absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 border-0 transition-all duration-300 ${
                          isAnimating ? "transform rotate-12 translate-x-full opacity-0" : ""
                        }`}
                      >
                        <CardContent className="p-6 h-full flex flex-col">
                          <div className="flex items-center space-x-4 mb-4">
                            <img
                              src={freelancerCards[currentCard].image || "/placeholder.svg"}
                              alt={freelancerCards[currentCard].name}
                              className="w-16 h-16 rounded-full border-2 border-white"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-white">{freelancerCards[currentCard].name}</h4>
                              <p className="text-purple-200 text-sm">{freelancerCards[currentCard].tagline}</p>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {freelancerCards[currentCard].skills.map((skill, index) => (
                              <Badge key={index} className="bg-white/20 text-white border-0">
                                {skill}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between mb-4 text-white text-sm">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{freelancerCards[currentCard].rating}</span>
                            </div>
                            <span>{freelancerCards[currentCard].experience} exp</span>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{freelancerCards[currentCard].responseTime}</span>
                            </div>
                          </div>

                          <div className="bg-white/10 rounded-lg p-3 mb-4 flex-1">
                            <p className="text-white text-sm font-medium mb-1">Latest Project:</p>
                            <p className="text-purple-200 text-sm">{freelancerCards[currentCard].project}</p>
                          </div>

                          <div className="text-center">
                            <Badge className="bg-gradient-to-r from-green-400 to-blue-400 text-white border-0 text-lg px-4 py-1">
                              {freelancerCards[currentCard].match}% Match
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Swipe Buttons */}
                    <div className="flex justify-center space-x-8 mt-6">
                      <Button
                        size="lg"
                        className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 border-0"
                        onClick={() => handleSwipe("left")}
                      >
                        <X className="h-8 w-8" />
                      </Button>
                      <Button
                        size="lg"
                        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 border-0"
                        onClick={() => handleSwipe("right")}
                      >
                        <Heart className="h-8 w-8" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                SkillMatch AI?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're revolutionizing freelancing by eliminating the pain points of traditional platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-300">Simple, fast, and effective</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Post Your Project",
                description: "Describe what you need in 2 minutes. Our AI analyzes and categorizes your requirements.",
                icon: <MessageCircle className="h-8 w-8" />,
              },
              {
                step: "02",
                title: "Swipe Through Matches",
                description:
                  "Browse AI-curated freelancer profiles. Swipe right on those you like, left on those you don't.",
                icon: <Heart className="h-8 w-8" />,
              },
              {
                step: "03",
                title: "Start Working",
                description: "When both parties swipe right, it's a match! Chat instantly and begin your project.",
                icon: <Zap className="h-8 w-8" />,
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {step.icon}
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-10 -right-4 h-8 w-8 text-purple-400" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                SkillMatch AI
              </span>
            </Link>
            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-pink-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkillMatch AI. All rights reserved. The future of freelancing is here.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
