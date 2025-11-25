"use client"

import { useState } from "react"
import { BarChart3, Settings, Menu, X, Home, Brain, Lightbulb, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  currentPage: "dashboard" | "planner" | "quiz" | "analytics" | "profile"
  setCurrentPage: (page: "dashboard" | "planner" | "quiz" | "analytics" | "profile") => void
}

export function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "planner", label: "Study Planner", icon: Lightbulb },
    { id: "quiz", label: "Quiz", icon: Brain },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "profile", label: "Profile", icon: Settings },
  ] as const

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="bg-card border border-primary/30 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/10 animate-fadeIn btn-hover rounded-xl"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static w-64 h-screen bg-gradient-to-b from-sidebar via-sidebar to-sidebar/95 border-r border-sidebar-border/50 transition-all duration-300 z-40 flex flex-col shadow-2xl`}
      >
        <div className="p-6 border-b border-sidebar-border/30 bg-gradient-to-r from-primary to-transparent animate-slideInLeft">
          <div className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 hover:translate-x-1">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/50 shadow-md shadow-primary/30">
              <Sparkles className="w-6 h-6 text-primary-foreground animate-float" />
            </div>
            <div>
              <h1 className="font-bold text-sidebar-foreground text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text">
                LearnX
              </h1>
              <p className="text-xs text-sidebar-foreground/50">AI Learning Companion</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item, idx) => {
            const Icon = item.icon
            const isActive = currentPage === item.id
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id)
                  setIsOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                  isActive
                    ? "bg-gradient-to-r from-primary to-primary/60 text-sidebar-primary-foreground shadow-lg shadow-primary/40 animate-scaleIn scale-105"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/30 hover:translate-x-1 hover:shadow-md hover:shadow-primary/10"
                }`}
                style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                <Icon className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border/30 bg-gradient-to-r from-secondary/10 to-transparent animate-slideInUp">
          <div className="bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl p-4 text-center transition-all duration-300 hover:from-primary/30 hover:to-secondary/20 hover:shadow-md hover:shadow-primary/20 border border-primary/20 cursor-pointer group">
            <p className="text-xs text-sidebar-foreground/70 font-bold mb-1 group-hover:text-primary transition-colors">
              Pro Tip
            </p>
            <p className="text-xs text-sidebar-foreground/60 group-hover:text-sidebar-foreground/80 transition-colors">
              Study daily for best results
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-30 animate-fadeIn" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}
