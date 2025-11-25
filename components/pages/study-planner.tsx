"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Zap, RefreshCw, Target, Play, Lightbulb, FileText, Award, ArrowRight } from "lucide-react"

const dummyWeeklyPlan = [
  {
    day: "Monday",
    topics: ["Algebra Basics", "Linear Equations"],
    hours: 2,
    difficulty: "Beginner",
  },
  {
    day: "Tuesday",
    topics: ["Quadratic Functions", "Graphing"],
    hours: 2.5,
    difficulty: "Intermediate",
  },
  {
    day: "Wednesday",
    topics: ["Polynomial Division"],
    hours: 1.5,
    difficulty: "Intermediate",
  },
  {
    day: "Thursday",
    topics: ["Calculus Introduction", "Limits"],
    hours: 3,
    difficulty: "Advanced",
  },
  {
    day: "Friday",
    topics: ["Derivatives Basics", "Practice Problems"],
    hours: 2.5,
    difficulty: "Advanced",
  },
]

const recommendedMaterials = [
  {
    id: 1,
    title: "Quadratic Equations Masterclass",
    type: "Video",
    duration: "45 min",
    difficulty: "Intermediate",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Algebra Problem Set",
    type: "Interactive",
    duration: "60 min",
    difficulty: "Beginner",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Calculus Fundamentals",
    type: "Course",
    duration: "2.5 hours",
    difficulty: "Advanced",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Functions Deep Dive",
    type: "Article",
    duration: "20 min read",
    difficulty: "Intermediate",
    rating: 4.5,
  },
]

function getDifficultyStyles(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-secondary/30 text-secondary shadow-md shadow-secondary/30"
    case "Intermediate":
      return "bg-accent/30 text-accent shadow-md shadow-accent/30"
    case "Advanced":
      return "bg-primary/30 text-primary shadow-md shadow-primary/30"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getMaterialIcon(type: string) {
  switch (type) {
    case "Video":
      return <Play className="w-5 h-5" />
    case "Interactive":
      return <Lightbulb className="w-5 h-5" />
    case "Course":
      return <BookOpen className="w-5 h-5" />
    case "Article":
      return <FileText className="w-5 h-5" />
    default:
      return <BookOpen className="w-5 h-5" />
  }
}

function getMaterialGradient(type: string) {
  switch (type) {
    case "Video":
      return "from-blue-600 to-blue-400"
    case "Interactive":
      return "from-purple-600 to-purple-400"
    case "Course":
      return "from-cyan-600 to-cyan-400"
    case "Article":
      return "from-emerald-600 to-emerald-400"
    default:
      return "from-primary to-secondary"
  }
}

export function StudyPlanner() {
  const [planGenerated, setPlanGenerated] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4 md:p-8">
      <div className="mb-8 animate-slideInRight">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Study Planner
        </h1>
        <p className="text-muted-foreground text-lg">Your personalized weekly learning schedule</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 animate-slideInLeft">
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover shadow-xl">
            <CardHeader className="bg-gradient-to-r from-secondary/10 to-transparent border-b border-secondary/10 flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="w-6 h-6 text-secondary" />
                Your Weekly Plan
              </CardTitle>
              <Button
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground btn-hover font-semibold rounded-lg flex items-center gap-2"
                onClick={() => setPlanGenerated(!planGenerated)}
              >
                <RefreshCw className="w-4 h-4" />
                Regenerate
              </Button>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {dummyWeeklyPlan.map((day, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-all duration-300 task-item-hover animate-slideInUp bg-gradient-to-r from-muted/30 to-card hover:shadow-lg hover:shadow-primary/15 group"
                  style={{ animationDelay: `${idx * 75}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                        {day.day}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <div className="flex items-center gap-1.5 text-muted-foreground group-hover:text-foreground transition-colors">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{day.hours}h</span>
                        </div>
                        <span
                          className={`text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${getDifficultyStyles(day.difficulty)}`}
                        >
                          {day.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {day.topics.map((topic, tidx) => (
                      <span
                        key={tidx}
                        className="inline-flex items-center gap-2 bg-muted/60 px-3 py-2 rounded-lg text-sm text-foreground transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:shadow-md hover:-translate-y-1 cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="animate-slideInRight" style={{ animationDelay: "100ms" }}>
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover shadow-xl">
              <CardHeader className="bg-gradient-to-r from-accent/10 to-transparent border-b border-accent/10">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  Plan Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 pt-6">
                {[
                  { label: "Total Study Hours", value: "11.5 hrs", color: "primary" },
                  { label: "Days Planned", value: "5 days", color: "secondary" },
                  { label: "Difficulty Progression", value: "Beginner → Advanced", color: "accent" },
                ].map((item, idx) => {
                  const getBgClass = (color: string) => {
                    switch (color) {
                      case "primary":
                        return "bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 hover:shadow-md hover:shadow-primary/30"
                      case "secondary":
                        return "bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 hover:shadow-md hover:shadow-secondary/30"
                      case "accent":
                        return "bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 hover:shadow-md hover:shadow-accent/30"
                      default:
                        return ""
                    }
                  }

                  const getTextClass = (color: string) => {
                    switch (color) {
                      case "primary":
                        return "text-primary"
                      case "secondary":
                        return "text-secondary"
                      case "accent":
                        return "text-accent"
                      default:
                        return ""
                    }
                  }

                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg transition-all duration-300 animate-scaleIn cursor-pointer group ${getBgClass(item.color)}`}
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <p className="text-xs text-muted-foreground mb-1.5 font-medium group-hover:text-foreground transition-colors">
                        {item.label}
                      </p>
                      <p
                        className={`text-2xl font-bold ${getTextClass(item.color)} group-hover:scale-105 transition-transform`}
                      >
                        {item.value}
                      </p>
                    </div>
                  )
                })}
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground btn-hover font-semibold rounded-lg mt-2">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-8 animate-slideInUp">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Recommended Materials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recommendedMaterials.map((material, idx) => (
            <Card
              key={material.id}
              className="border-border/50 hover:border-primary/60 transition-all duration-500 group cursor-pointer animate-scaleIn bg-gradient-to-br from-card/80 via-card to-card/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${getMaterialGradient(material.type)}`} />

              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2.5 rounded-lg bg-gradient-to-br ${getMaterialGradient(material.type)} bg-opacity-20 text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {getMaterialIcon(material.type)}
                      </div>
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                        {material.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-lg font-bold text-amber-400 bg-gradient-to-r from-amber-500/20 to-amber-500/5 px-3 py-1.5 rounded-lg border border-amber-500/30 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300">
                    <Award className="w-4 h-4" />
                    {material.rating}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-5 pb-4 border-b border-border/30">
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    <Clock className="w-4 h-4 text-primary/70" />
                    <span className="font-medium">{material.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-border/50" />
                    <span className="text-sm px-3 py-1 rounded-full font-bold transition-all duration-300 ${getDifficultyStyles(material.difficulty)}">
                      {material.type}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 ml-auto">
                    <span
                      className={`text-xs font-bold px-2.5 py-1.5 rounded-full transition-all duration-300 ${getDifficultyStyles(material.difficulty)}`}
                    >
                      {material.difficulty}
                    </span>
                  </span>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary/70 hover:from-primary/90 hover:to-primary/60 text-primary-foreground font-bold rounded-lg py-2.5 group/btn flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  size="sm"
                >
                  <span>Access Material</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
