"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import {
  Heart,
  X,
  Star,
  Clock,
  MapPin,
  MessageCircle,
  Plus,
  Filter,
  Sparkles,
  ArrowLeft,
  DollarSign,
  TrendingUp,
} from "lucide-react"

export default function ClientDashboard() {
  const [currentFreelancer, setCurrentFreelancer] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [matches, setMatches] = useState<number[]>([])
  const [showProjectForm, setShowProjectForm] = useState(false)

  const freelancers = [
    {
      id: 1,
      name: "Sarah Chen",
      tagline: "AI Agent Specialist | React & GPT Expert",
      skills: ["GPT-4", "Node.js", "React", "Python", "LangChain"],
      rating: 4.9,
      reviews: 127,
      experience: "3 years",
      hourlyRate: "$85/hr",
      location: "San Francisco, CA",
      responseTime: "2h avg",
      completedProjects: 89,
      successRate: 98,
      image: "/placeholder.svg?height=200&width=200",
      portfolio: [
        "Custom GPT Agent for Finance CRM",
        "AI-Powered Customer Support Bot",
        "Voice Assistant for E-commerce",
      ],
      bio: "Specialized in building intelligent AI agents that integrate seamlessly with business workflows. Expert in GPT-4, LangChain, and modern web technologies.",
      availability: "Available now",
      match: 91,
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      tagline: "Full-Stack Developer | AI Integration Pro",
      skills: ["Python", "LangChain", "FastAPI", "React", "PostgreSQL"],
      rating: 4.8,
      reviews: 203,
      experience: "5 years",
      hourlyRate: "$75/hr",
      location: "Austin, TX",
      responseTime: "1h avg",
      completedProjects: 156,
      successRate: 96,
      image: "/placeholder.svg?height=200&width=200",
      portfolio: [
        "Voice AI Assistant for E-commerce",
        "ML-Powered Analytics Dashboard",
        "Automated Content Generation System",
      ],
      bio: "Full-stack developer with deep expertise in AI integration. I help businesses leverage AI to automate processes and enhance user experiences.",
      availability: "Available in 2 days",
      match: 87,
    },
    {
      id: 3,
      name: "Maya Patel",
      tagline: "UI/UX Designer | AI-Powered Interfaces",
      skills: ["Figma", "React", "AI/UX", "Prototyping", "User Research"],
      rating: 5.0,
      reviews: 94,
      experience: "4 years",
      hourlyRate: "$90/hr",
      location: "New York, NY",
      responseTime: "30m avg",
      completedProjects: 67,
      successRate: 100,
      image: "/placeholder.svg?height=200&width=200",
      portfolio: ["AI Chatbot Interface Design", "Voice UI for Smart Home App", "ML Dashboard for Data Scientists"],
      bio: "UI/UX designer specializing in AI-powered interfaces. I create intuitive designs that make complex AI systems accessible to everyday users.",
      availability: "Available now",
      match: 94,
    },
    {
      id: 4,
      name: "David Kim",
      tagline: "Backend Engineer | ML Infrastructure",
      skills: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes"],
      rating: 4.7,
      reviews: 178,
      experience: "6 years",
      hourlyRate: "$95/hr",
      location: "Seattle, WA",
      responseTime: "3h avg",
      completedProjects: 134,
      successRate: 94,
      image: "/placeholder.svg?height=200&width=200",
      portfolio: [
        "Scalable ML Pipeline for Fintech",
        "Real-time AI Recommendation Engine",
        "Computer Vision API for Retail",
      ],
      bio: "Backend engineer focused on building robust ML infrastructure. I help companies scale their AI solutions from prototype to production.",
      availability: "Available in 1 week",
      match: 82,
    },
  ]

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      setMatches([...matches, freelancers[currentFreelancer].id])
    }

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentFreelancer((prev) => (prev + 1) % freelancers.length)
      setIsAnimating(false)
    }, 300)
  }

  const currentProfile = freelancers[currentFreelancer]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="px-6 py-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                SkillMatch AI
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Dialog open={showProjectForm} onOpenChange={setShowProjectForm}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                  <Plus className="h-4 w-4 mr-2" />
                  Post Project
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Post a New Project
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Title</label>
                    <Input
                      placeholder="e.g., AI Chatbot for Customer Support"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <Textarea
                      placeholder="Describe your project requirements, goals, and expectations..."
                      className="bg-gray-800 border-gray-600 text-white min-h-[120px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget</label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000+">$5,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Timeline</label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                          <SelectValue placeholder="Project duration" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="1-week">1 Week</SelectItem>
                          <SelectItem value="2-4-weeks">2-4 Weeks</SelectItem>
                          <SelectItem value="1-3-months">1-3 Months</SelectItem>
                          <SelectItem value="3-months+">3+ Months</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Required Skills</label>
                    <Input
                      placeholder="e.g., Python, GPT-4, React, Machine Learning"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                    onClick={() => setShowProjectForm(false)}
                  >
                    Post Project & Start Matching
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-400/10">
              <MessageCircle className="h-4 w-4 mr-2" />
              Matches ({matches.length})
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Swipe Area */}
          <div className="lg:col-span-2">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Find Your Perfect{" "}
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Freelancer
                </span>
              </h1>
              <p className="text-gray-300">Swipe right to match with talented freelancers</p>
            </div>

            {/* Swipe Card */}
            <div className="relative max-w-md mx-auto">
              <Card
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 transition-all duration-300 ${
                  isAnimating ? "transform rotate-12 translate-x-full opacity-0" : ""
                }`}
              >
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-t-lg">
                    <img
                      src={currentProfile.image || "/placeholder.svg"}
                      alt={currentProfile.name}
                      className="w-32 h-32 rounded-full border-4 border-white absolute bottom-4 left-6"
                    />
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-blue-400 text-white border-0">
                      {currentProfile.match}% Match
                    </Badge>
                  </div>

                  <div className="p-6 space-y-4">
                    {/* Basic Info */}
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{currentProfile.name}</h3>
                      <p className="text-purple-300 mb-2">{currentProfile.tagline}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{currentProfile.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{currentProfile.responseTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-700">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-white">{currentProfile.rating}</span>
                        </div>
                        <p className="text-xs text-gray-400">{currentProfile.reviews} reviews</p>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-white mb-1">{currentProfile.completedProjects}</div>
                        <p className="text-xs text-gray-400">Projects</p>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-white mb-1">{currentProfile.successRate}%</div>
                        <p className="text-xs text-gray-400">Success Rate</p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-white mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProfile.skills.map((skill, index) => (
                          <Badge key={index} className="bg-purple-600/30 text-purple-200 border-purple-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <h4 className="font-semibold text-white mb-2">About</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{currentProfile.bio}</p>
                    </div>

                    {/* Portfolio */}
                    <div>
                      <h4 className="font-semibold text-white mb-2">Recent Projects</h4>
                      <div className="space-y-2">
                        {currentProfile.portfolio.slice(0, 2).map((project, index) => (
                          <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                            <p className="text-sm text-gray-300">{project}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Availability */}
                    <div className="flex justify-between items-center pt-4">
                      <div>
                        <div className="flex items-center space-x-1 text-green-400 font-semibold">
                          <DollarSign className="h-4 w-4" />
                          <span>{currentProfile.hourlyRate}</span>
                        </div>
                        <p className="text-xs text-gray-400">{currentProfile.availability}</p>
                      </div>
                      <Badge
                        className={`${
                          currentProfile.availability === "Available now"
                            ? "bg-green-600/30 text-green-200 border-green-500/30"
                            : "bg-yellow-600/30 text-yellow-200 border-yellow-500/30"
                        }`}
                      >
                        {currentProfile.availability}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Swipe Buttons */}
              <div className="flex justify-center space-x-8 mt-8">
                <Button
                  size="lg"
                  className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600 border-0 shadow-lg"
                  onClick={() => handleSwipe("left")}
                >
                  <X className="h-8 w-8" />
                </Button>
                <Button
                  size="lg"
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 border-0 shadow-lg"
                  onClick={() => handleSwipe("right")}
                >
                  <Heart className="h-10 w-10" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Your Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Matches Today</span>
                  <span className="font-semibold text-white">{matches.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Active Projects</span>
                  <span className="font-semibold text-white">3</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Spent</span>
                  <span className="font-semibold text-white">$12,450</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Matches */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-pink-400" />
                  <span>Recent Matches</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {matches.length > 0 ? (
                  <div className="space-y-3">
                    {matches.slice(-3).map((matchId) => {
                      const freelancer = freelancers.find((f) => f.id === matchId)
                      return (
                        <div key={matchId} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                          <img
                            src={freelancer?.image || "/placeholder.svg"}
                            alt={freelancer?.name}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-white text-sm">{freelancer?.name}</p>
                            <p className="text-xs text-gray-400">{freelancer?.skills[0]}</p>
                          </div>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <MessageCircle className="h-3 w-3" />
                          </Button>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-4">No matches yet. Start swiping!</p>
                )}
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Hourly Rate</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Any rate" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="any">Any rate</SelectItem>
                      <SelectItem value="0-50">$0 - $50/hr</SelectItem>
                      <SelectItem value="50-100">$50 - $100/hr</SelectItem>
                      <SelectItem value="100+">$100+/hr</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Experience</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Any experience" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="any">Any experience</SelectItem>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                      <SelectItem value="expert">Expert (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Availability</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Any availability" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="any">Any availability</SelectItem>
                      <SelectItem value="now">Available now</SelectItem>
                      <SelectItem value="week">Within a week</SelectItem>
                      <SelectItem value="month">Within a month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
