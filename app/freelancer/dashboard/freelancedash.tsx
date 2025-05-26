"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Settings, Sparkles, Plus, Upload, Play, ImageIcon, X, ExternalLink } from "lucide-react"

export default function FreelancerDash() {
  const [showProfileSettings, setShowProfileSettings] = useState(false)
  const [showAddProject, setShowAddProject] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Enhanced freelancer data with projects containing images
  const freelancer = {
    name: "Jane Doe",
    email: "janedoe@email.com",
    title: "AI Developer & Full-Stack Engineer",
    bio: "Passionate about building intelligent, scalable solutions for modern businesses.",
    skills: ["GPT-4", "React", "Node.js", "Python", "TensorFlow", "AWS"],
    image: "/placeholder.svg?height=100&width=100",
    introVideo: "/placeholder.svg?height=300&width=500",
    links: [
      { label: "Portfolio", url: "https://portfolio.example.com" },
      { label: "LinkedIn", url: "https://linkedin.com/in/janedoe" },
      { label: "GitHub", url: "https://github.com/janedoe" },
    ],
    projects: [
      {
        id: 1,
        title: "AI Chatbot for E-commerce",
        year: "2023",
        description:
          "Developed an intelligent chatbot using GPT-4 that increased customer engagement by 40% and reduced support tickets by 60%.",
        technologies: ["GPT-4", "React", "Node.js", "MongoDB"],
        images: [
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
        ],
        liveUrl: "https://demo.example.com",
        githubUrl: "https://github.com/janedoe/ai-chatbot",
      },
      {
        id: 2,
        title: "Voice Assistant for Healthcare",
        year: "2022",
        description:
          "Built a HIPAA-compliant voice assistant that helps medical professionals access patient information hands-free.",
        technologies: ["Python", "TensorFlow", "AWS", "React"],
        images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
        liveUrl: "https://healthcare-demo.example.com",
      },
      {
        id: 3,
        title: "Custom CRM Automation",
        year: "2021",
        description:
          "Automated sales pipeline management system that increased team productivity by 35% through intelligent lead scoring.",
        technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
        images: [
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
          "/placeholder.svg?height=200&width=300",
        ],
        githubUrl: "https://github.com/janedoe/crm-automation",
      },
    ],
    reviews: [
      {
        stars: 5,
        text: "Jane delivered an outstanding AI solution for our business! The chatbot exceeded our expectations and the project was delivered on time.",
        client: "Sarah Johnson, TechCorp CEO",
        projectTitle: "AI Chatbot for E-commerce",
      },
      {
        stars: 5,
        text: "Professional, fast, and very knowledgeable in AI and web development. The voice assistant has transformed our workflow.",
        client: "Dr. Alex Martinez, HealthCare Plus",
        projectTitle: "Voice Assistant for Healthcare",
      },
    ],
  }

  const ProjectCard = ({ project }) => (
    <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-600/30 mb-6 overflow-hidden">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-white text-lg mb-2">{project.title}</CardTitle>
            <Badge variant="outline" className="border-blue-400 text-blue-300 mb-3">
              {project.year}
            </Badge>
          </div>
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button size="sm" variant="outline" className="border-green-400 text-green-300 hover:bg-green-400/10">
                <ExternalLink className="h-3 w-3 mr-1" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" className="border-gray-400 text-gray-300 hover:bg-gray-400/10">
                <ExternalLink className="h-3 w-3 mr-1" />
                GitHub
              </Button>
            )}
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} className="bg-purple-500/30 text-purple-200 border-0 text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {project.images.map((image, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer rounded-lg overflow-hidden bg-gray-700/50"
              onClick={() => setSelectedProject({ ...project, selectedImageIndex: idx })}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`${project.title} screenshot ${idx + 1}`}
                className="w-full h-24 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ImageIcon className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="px-6 py-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              SkillMatch AI
            </span>
          </div>
          <Dialog open={showProfileSettings} onOpenChange={setShowProfileSettings}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-3xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Edit Your Profile
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input defaultValue={freelancer.name} className="bg-gray-800 border-gray-600 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input defaultValue={freelancer.email} className="bg-gray-800 border-gray-600 text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Professional Title</label>
                  <Input defaultValue={freelancer.title} className="bg-gray-800 border-gray-600 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bio</label>
                  <Textarea
                    defaultValue={freelancer.bio}
                    className="bg-gray-800 border-gray-600 text-white min-h-[80px]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Skills (comma-separated)</label>
                  <Input
                    defaultValue={freelancer.skills.join(", ")}
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Profile Image</label>
                  <div className="flex items-center gap-4">
                    <img
                      src={freelancer.image || "/placeholder.svg"}
                      alt="Profile"
                      className="w-16 h-16 rounded-full"
                    />
                    <Button variant="outline" className="border-gray-600 text-gray-300">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New Image
                    </Button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Intro Video</label>
                  <div className="space-y-3">
                    <div className="relative bg-gray-800 rounded-lg p-4 border border-gray-600">
                      <div className="flex items-center justify-center h-32 bg-gray-700 rounded">
                        <Play className="h-8 w-8 text-gray-400" />
                      </div>
                    </div>
                    <Button variant="outline" className="border-gray-600 text-gray-300">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Intro Video
                    </Button>
                  </div>
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
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <Card className="bg-gradient-to-br from-purple-800/60 to-blue-800/60 border-purple-500/30 mb-8">
          <CardHeader className="flex flex-col items-center">
            <img
              src={freelancer.image || "/placeholder.svg"}
              alt="Freelancer Profile"
              className="w-32 h-32 rounded-full border-4 border-white mb-4"
            />
            <CardTitle className="text-3xl font-bold text-white mb-2">{freelancer.name}</CardTitle>
            <p className="text-purple-200 mb-2">{freelancer.email}</p>
            <p className="text-gray-300 text-center text-lg mb-4">{freelancer.title}</p>
            <p className="text-gray-300 text-center mb-6 max-w-2xl">{freelancer.bio}</p>

            {/* Intro Video */}
            <div className="w-full max-w-md mb-6">
              <h4 className="text-white font-semibold mb-3 text-center">Introduction Video</h4>
              <div className="relative bg-gray-800/50 rounded-lg overflow-hidden">
                <div className="aspect-video flex items-center justify-center bg-gray-700/50">
                  <Button variant="ghost" className="text-white hover:bg-white/10">
                    <Play className="h-12 w-12" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {freelancer.skills.map((skill, idx) => (
                <Badge key={idx} className="bg-white/20 text-white border-0">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4 mt-2">
              {freelancer.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </CardHeader>
        </Card>

        {/* Projects Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Portfolio Projects</h3>
            <Button
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
              onClick={() => setShowAddProject(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </div>

          {freelancer.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Client Reviews */}
        <Card className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-600/30">
          <CardHeader>
            <CardTitle className="text-white text-xl">Client Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {freelancer.reviews.map((review, idx) => (
                <div key={idx} className="bg-gray-800/40 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-yellow-400">{"★".repeat(review.stars)}</div>
                    <Badge variant="outline" className="border-blue-400 text-blue-300 text-xs">
                      {review.projectTitle}
                    </Badge>
                  </div>
                  <p className="text-gray-200 mb-2">"{review.text}"</p>
                  <p className="text-gray-400 text-sm">— {review.client}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Add Project Dialog */}
        <Dialog open={showAddProject} onOpenChange={setShowAddProject}>
          <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Add New Project
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Title</label>
                  <Input
                    placeholder="e.g., AI Chatbot for E-commerce"
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Year</label>
                  <Input placeholder="e.g., 2024" className="bg-gray-800 border-gray-600 text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  placeholder="Describe your project, its impact, and key achievements..."
                  className="bg-gray-800 border-gray-600 text-white min-h-[100px]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Technologies Used</label>
                <Input
                  placeholder="e.g., React, Node.js, MongoDB, AWS"
                  className="bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Live Demo URL</label>
                  <Input placeholder="https://demo.example.com" className="bg-gray-800 border-gray-600 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">GitHub URL</label>
                  <Input
                    placeholder="https://github.com/username/repo"
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Images</label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 mb-2">Drag and drop images here, or click to browse</p>
                  <Button variant="outline" className="border-gray-600 text-gray-300">
                    Choose Images
                  </Button>
                </div>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                onClick={() => setShowAddProject(false)}
              >
                Add Project
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Image Gallery Modal */}
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-4xl">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl">{selectedProject.title}</DialogTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedProject.images[selectedProject.selectedImageIndex || 0]}
                  alt={`${selectedProject.title} screenshot`}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-4 gap-2">
                  {selectedProject.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      className={`w-full h-16 object-cover rounded cursor-pointer ${
                        idx === (selectedProject.selectedImageIndex || 0) ? "ring-2 ring-blue-400" : ""
                      }`}
                      onClick={() => setSelectedProject({ ...selectedProject, selectedImageIndex: idx })}
                    />
                  ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </main>
    </div>
  )
}
