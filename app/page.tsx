"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Dashboard } from "@/components/pages/dashboard"
import { StudyPlanner } from "@/components/pages/study-planner"
import { AdaptiveQuiz } from "@/components/pages/adaptive-quiz"
import { Analytics } from "@/components/pages/analytics"
import { Profile } from "@/components/pages/profile"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"dashboard" | "planner" | "quiz" | "analytics" | "profile">(
    "dashboard",
  )

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard />
      case "planner":
        return <StudyPlanner />
      case "quiz":
        return <AdaptiveQuiz />
      case "analytics":
        return <Analytics />
      case "profile":
        return <Profile />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 overflow-auto">{renderPage()}</main>
    </div>
  )
}
