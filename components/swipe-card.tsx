"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, X, Star, Clock, MapPin } from "lucide-react"

interface SwipeCardProps {
  data: any
  onSwipe: (direction: "left" | "right") => void
  type: "freelancer" | "project"
}

export function SwipeCard({ data, onSwipe, type }: SwipeCardProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSwipe = (direction: "left" | "right") => {
    setIsAnimating(true)
    setTimeout(() => {
      onSwipe(direction)
      setIsAnimating(false)
    }, 300)
  }

  if (type === "freelancer") {
    return (
      <div className="relative max-w-md mx-auto">
        <Card
          className={`bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 transition-all duration-300 ${
            isAnimating ? "transform rotate-12 translate-x-full opacity-0" : ""
          }`}
        >
          <CardContent className="p-0">
            <div className="relative h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-t-lg">
              <img
                src={data.image || "/placeholder.svg"}
                alt={data.name}
                className="w-32 h-32 rounded-full border-4 border-white absolute bottom-4 left-6"
              />
              <Badge className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-blue-400 text-white border-0">
                {data.match}% Match
              </Badge>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{data.name}</h3>
                <p className="text-purple-300 mb-2">{data.tagline}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{data.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{data.responseTime}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-700">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-white">{data.rating}</span>
                  </div>
                  <p className="text-xs text-gray-400">{data.reviews} reviews</p>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white mb-1">{data.completedProjects}</div>
                  <p className="text-xs text-gray-400">Projects</p>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white mb-1">{data.successRate}%</div>
                  <p className="text-xs text-gray-400">Success Rate</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill: string, index: number) => (
                    <Badge key={index} className="bg-purple-600/30 text-purple-200 border-purple-500/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

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
    )
  }

  // Project card for freelancers
  return (
    <div className="relative max-w-lg mx-auto">
      <Card
        className={`bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 transition-all duration-300 ${
          isAnimating ? "transform rotate-12 translate-x-full opacity-0" : ""
        }`}
      >
        <CardContent className="p-0">
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-t-lg">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={data.clientImage || "/placeholder.svg"}
                  alt={data.company}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div>
                  <h3 className="font-semibold text-white">{data.company}</h3>
                  <div className="flex items-center space-x-1 text-sm text-blue-200">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{data.clientRating}</span>
                    <span>•</span>
                    <span>{data.clientProjects} projects</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-gradient-to-r from-green-400 to-blue-400 text-white border-0">
                {data.match}% Match
              </Badge>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">{data.title}</h2>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">{data.description}</p>

            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill: string, index: number) => (
                <Badge key={index} className="bg-blue-600/30 text-blue-200 border-blue-500/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

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
  )
}
