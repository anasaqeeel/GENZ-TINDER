"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import {
  Heart,
  X,
  Star,
  Clock,
  MessageCircle,
  Settings,
  Filter,
  Sparkles,
  ArrowLeft,
  DollarSign,
  Calendar,
  TrendingUp,
  Building,
} from "lucide-react"
// saad was here
export default function FreelancerDashboard() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [matches, setMatches] = useState<number[]>([])
  const [showProfileSettings, setShowProfileSettings] = useState(false)

  const projects = [
    {
      id: 1,
      title: "AI Customer Support Chatbot",
      company: "TechCorp Inc.",
      description:
        "Build an intelligent chatbot that can handle customer inquiries, integrate with our CRM, and escalate complex issues to human agents. Should support multiple languages and learn from interactions.",
      budget: "$2,500 - $5,000",
      timeline: "4-6 weeks",
      skills: ["GPT-4", "Python", "React", "API Integration", "NLP"],
      clientRating: 4.8,
      clientProjects: 23,
      urgency: "High",
      postedTime: "2 hours ago",
      applicants: 12,
      match: 94,
      clientImage: "/placeholder.svg?height=60&width=60",
      projectType: "Fixed Price",
      experienceLevel: "Intermediate",
    },
    {
      id: 2,
      title: "Voice AI Assistant for E-commerce",
      company: "ShopSmart LLC",
      description:
        "Develop a voice-activated shopping assistant that can help customers find products, place orders, and track shipments. Integration with existing e-commerce platform required.",
      budget: "$3,000 - $7,000",
      timeline: "6-8 weeks",
      skills: ["Voice AI", "Node.js", "AWS", "Speech Recognition", "E-commerce APIs"],
      clientRating: 4.9,
      clientProjects: 45,
      urgency: "Medium",
      postedTime: "5 hours ago",
      applicants: 8,
      match: 87,
      clientImage: "/placeholder.svg?height=60&width=60",
      projectType: "Fixed Price",
      experienceLevel: "Expert",
    },
    {
      id: 3,
      title: "Machine Learning Data Pipeline",
      company: "DataFlow Analytics",
      description:
        "Create a robust ML pipeline for processing large datasets, training models, and deploying them to production. Experience with MLOps and cloud platforms essential.",
      budget: "$4,000 - $8,000",
      timeline: "8-10 weeks",
      skills: ["Python", "TensorFlow", "AWS", "Docker", "MLOps"],
      clientRating: 4.7,
      clientProjects: 67,
      urgency: "Low",
      postedTime: "1 day ago",
      applicants: 15,
      match: 82,
      clientImage: "/placeholder.svg?height=60&width=60",
      projectType: "Hourly",
      experienceLevel: "Expert",
    },
    {
      id: 4,
      title: "React Native AI Photo Editor",
      company: "PhotoMagic Studio",
      description:
        "Build a mobile app with AI-powered photo editing features. Should include filters, background removal, object detection, and style transfer capabilities.",
      budget: "$5,000 - $10,000",
      timeline: "10-12 weeks",
      skills: ["React Native", "Computer Vision", "TensorFlow Lite", "Mobile Development"],
      clientRating: 4.6,
      clientProjects: 12,
      urgency: "Medium",
      postedTime: "3 hours ago",
      applicants: 6,
      match: 76,
      clientImage: "/placeholder.svg?height=60&width=60",
      projectType: "Fixed Price",
      experienceLevel: "Intermediate",
    },
  ]

  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right") {
      setMatches([...matches, projects[currentProject].id])
    }

    setIsAnimating(true)
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
      setIsAnimating(false)
    }, 300)
  }

  const currentProjectData = projects[currentProject]

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "High":
        return "bg-red-600/30 text-red-200 border-red-500/30"
      case "Medium":
        return "bg-yellow-600/30 text-yellow-200 border-yellow-500/30"
      case "Low":
        return "bg-green-600/30 text-green-200 border-green-500/30"
      default:
        return "bg-gray-600/30 text-gray-200 border-gray-500/30"
    }
  }

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
            <Dialog open={showProfileSettings} onOpenChange={setShowProfileSettings}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <Settings className="h-4 w-4 mr-2" />
                  Profile Settings
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Update Your Profile
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Professional Title</label>
                    <Input
                      placeholder="e.g., AI Developer | Full-Stack Engineer"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Bio</label>
                    <textarea
                      placeholder="Tell clients about your expertise and experience..."
                      className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white min-h-[120px]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Hourly Rate</label>
                      <Input placeholder="$85" className="bg-gray-800 border-gray-600 text-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Experience Level</label>
                      <Select>
                        <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600">
                          <SelectItem value="entry">Entry Level</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Skills</label>
                    <Input
                      placeholder="e.g., Python, React, GPT-4, Machine Learning"
                      className="bg-gray-800 border-gray-600 text-white"
                    />
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    onClick={() => setShowProfileSettings(false)}
                  >
                    Save Profile
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
                Discover Amazing{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-gray-300">Swipe right on projects you'd love to work on</p>
            </div>

            {/* Swipe Card */}
            <div className="relative max-w-lg mx-auto">
              <Card
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 transition-all duration-300 ${
                  isAnimating ? "transform rotate-12 translate-x-full opacity-0" : ""
                }`}
              >
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-t-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <img
                          src={currentProjectData.clientImage || "/placeholder.svg"}
                          alt={currentProjectData.company}
                          className="w-12 h-12 rounded-full border-2 border-white"
                        />
                        <div>
                          <h3 className="font-semibold text-white">{currentProjectData.company}</h3>
                          <div className="flex items-center space-x-1 text-sm text-blue-200">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{currentProjectData.clientRating}</span>
                            <span>•</span>
                            <span>{currentProjectData.clientProjects} projects</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-green-400 to-blue-400 text-white border-0">
                        {currentProjectData.match}% Match
                      </Badge>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">{currentProjectData.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-blue-200">
                      <Badge className={getUrgencyColor(currentProjectData.urgency)}>
                        {currentProjectData.urgency} Priority
                      </Badge>
                      <span>{currentProjectData.postedTime}</span>
                      <span>{currentProjectData.applicants} applicants</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <DollarSign className="h-4 w-4 text-green-400" />
                          <span className="text-sm font-medium text-gray-300">Budget</span>
                        </div>
                        <p className="font-semibold text-white">{currentProjectData.budget}</p>
                        <p className="text-xs text-gray-400">{currentProjectData.projectType}</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-1">
                          <Calendar className="h-4 w-4 text-blue-400" />
                          <span className="text-sm font-medium text-gray-300">Timeline</span>
                        </div>
                        <p className="font-semibold text-white">{currentProjectData.timeline}</p>
                        <p className="text-xs text-gray-400">{currentProjectData.experienceLevel}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="font-semibold text-white mb-2">Project Description</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{currentProjectData.description}</p>
                    </div>

                    {/* Required Skills */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">Required Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentProjectData.skills.map((skill, index) => (
                          <Badge key={index} className="bg-blue-600/30 text-blue-200 border-blue-500/30">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Client Info */}
                    <div className="bg-gray-800/30 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">About the Client</h4>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-300">Verified Company</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-300">Usually responds in 2h</span>
                          </div>
                        </div>
                      </div>
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
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 shadow-lg"
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
            <Card className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Your Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Matches Today</span>
                  <span className="font-semibold text-white">{matches.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Active Proposals</span>
                  <span className="font-semibold text-white">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Success Rate</span>
                  <span className="font-semibold text-white">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Earned</span>
                  <span className="font-semibold text-white">$28,750</span>
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
                      const project = projects.find((p) => p.id === matchId)
                      return (
                        <div key={matchId} className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                          <img
                            src={project?.clientImage || "/placeholder.svg"}
                            alt={project?.company}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-white text-sm">{project?.title}</p>
                            <p className="text-xs text-gray-400">{project?.budget}</p>
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
                  <span>Project Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Budget Range</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Any budget" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="any">Any budget</SelectItem>
                      <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000+">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Type</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Any type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="any">Any type</SelectItem>
                      <SelectItem value="fixed">Fixed Price</SelectItem>
                      <SelectItem value="hourly">Hourly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Timeline</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Any timeline" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      <SelectItem value="any">Any timeline</SelectItem>
                      <SelectItem value="short">Less than 1 month</SelectItem>
                      <SelectItem value="medium">1-3 months</SelectItem>
                      <SelectItem value="long">3+ months</SelectItem>
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
