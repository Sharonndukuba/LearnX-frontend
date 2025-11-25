"use client"

import { ProgressBar } from "@/components/ui-custom/progress-bar"
import { StatCard } from "@/components/ui-custom/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Clock, TrendingUp, Award, BookMarked, Flame, Sparkles } from "lucide-react"

const dummyStudentData = {
  name: "Sarah Johnson",
  currentStreak: 12,
  totalHours: 45,
  weakAreas: ["Calculus", "Chemistry"],
  todayTasks: [
    { id: 1, title: "Algebra Fundamentals", completed: true, duration: "30 min" },
    { id: 2, title: "Quadratic Equations", completed: true, duration: "45 min" },
    { id: 3, title: "Practice Problems", completed: false, duration: "60 min" },
    { id: 4, title: "Revision Session", completed: false, duration: "20 min" },
  ],
  weeklyProgress: 72,
}

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-4 md:p-8">
      <div className="mb-8 animate-slideInRight">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          Welcome back, {dummyStudentData.name}
        </h1>
        <p className="text-muted-foreground text-lg">Here's your personalized learning summary</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {[
          {
            icon: <Flame className="w-6 h-6" />,
            label: "Study Streak",
            value: `${dummyStudentData.currentStreak} days`,
            color: "primary",
          },
          {
            icon: <Clock className="w-6 h-6" />,
            label: "Total Hours",
            value: `${dummyStudentData.totalHours}h`,
            color: "secondary",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            label: "Weekly Progress",
            value: `${dummyStudentData.weeklyProgress}%`,
            color: "accent",
          },
          { icon: <CheckCircle2 className="w-6 h-6" />, label: "Tasks Today", value: `2 of 4`, color: "primary" },
        ].map((stat, idx) => (
          <div key={idx} style={{ animationDelay: `${idx * 100}ms` }} className="animate-slideInUp">
            <StatCard icon={stat.icon} label={stat.label} value={stat.value} color={stat.color as any} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 animate-slideInLeft">
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent border-b border-primary/10">
              <CardTitle className="text-2xl flex items-center gap-2">
                <BookMarked className="w-6 h-6 text-primary" />
                Today's Learning Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-6">
              {dummyStudentData.todayTasks.map((task, idx) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-xl border-2 flex items-start gap-4 transition-all duration-300 task-item-hover shadow-md ${
                    task.completed
                      ? "bg-gradient-to-r from-secondary/15 to-secondary/5 border-secondary/40 shadow-lg shadow-secondary/20"
                      : "bg-gradient-to-r from-card to-muted/20 border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/15"
                  }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center mt-1 transition-all duration-300 ${
                      task.completed
                        ? "bg-gradient-to-br from-secondary to-secondary/70 border-secondary shadow-md shadow-secondary/50 animate-pulse-glow"
                        : "border-muted-foreground"
                    }`}
                  >
                    {task.completed && <CheckCircle2 className="w-4 h-4 text-secondary-foreground animate-scaleIn" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-lg">{task.title}</h3>
                    <p className="text-sm text-muted-foreground">{task.duration}</p>
                  </div>
                  <Button
                    variant={task.completed ? "secondary" : "default"}
                    size="sm"
                    disabled={task.completed}
                    className="flex-shrink-0 btn-hover rounded-lg font-medium"
                  >
                    {task.completed ? "Done" : "Start"}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="animate-slideInRight" style={{ animationDelay: "100ms" }}>
            <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 card-hover shadow-xl">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent border-b border-primary/10">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Areas to Focus
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {dummyStudentData.weakAreas.map((area, idx) => (
                  <div key={idx} className="space-y-2 animate-fadeIn" style={{ animationDelay: `${idx * 100}ms` }}>
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-semibold text-foreground">{area}</span>
                      <span className="text-primary font-bold text-lg">{55 + idx * 10}%</span>
                    </div>
                    <ProgressBar value={55 + idx * 10} color="primary" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="animate-slideInRight" style={{ animationDelay: "200ms" }}>
            <Card className="border-primary/30 bg-gradient-to-br from-primary/15 to-primary/5 card-hover shadow-xl shadow-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/20 to-transparent border-b border-primary/20">
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  AI Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-foreground leading-relaxed mb-4">
                  Based on your learning habits, we recommend focusing on Calculus fundamentals this week. You're close
                  to mastering this topic!
                </p>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground btn-hover font-semibold rounded-lg">
                  Start Recommended Study
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
