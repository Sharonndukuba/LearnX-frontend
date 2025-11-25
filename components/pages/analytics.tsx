"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProgressBar } from "@/components/ui-custom/progress-bar"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Target, Clock, BookOpen } from "lucide-react"

const performanceData = [
  { subject: "Algebra", score: 85, average: 75 },
  { subject: "Geometry", score: 78, average: 72 },
  { subject: "Calculus", score: 92, average: 80 },
  { subject: "Chemistry", score: 65, average: 70 },
  { subject: "Physics", score: 88, average: 82 },
]

const studyTrendData = [
  { day: "Mon", hours: 2, quizzes: 1 },
  { day: "Tue", hours: 2.5, quizzes: 2 },
  { day: "Wed", hours: 1.5, quizzes: 1 },
  { day: "Thu", hours: 3, quizzes: 3 },
  { day: "Fri", hours: 2.5, quizzes: 2 },
  { day: "Sat", hours: 1, quizzes: 1 },
  { day: "Sun", hours: 2, quizzes: 1 },
]

const strengthsWeaknesses = [
  { name: "Strengths", value: 60, fill: "#10b981" },
  { name: "Areas to Improve", value: 40, fill: "#f59e0b" },
]

export function Analytics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Learning Analytics</h1>
        <p className="text-muted-foreground">Your detailed performance insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                <p className="text-3xl font-bold text-primary">82%</p>
              </div>
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Study Sessions</p>
                <p className="text-3xl font-bold text-secondary">24</p>
              </div>
              <BookOpen className="w-6 h-6 text-secondary" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Hours</p>
                <p className="text-3xl font-bold text-accent">45.5 hrs</p>
              </div>
              <Clock className="w-6 h-6 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-border">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Improvement</p>
                <p className="text-3xl font-bold text-primary">+12%</p>
              </div>
              <Target className="w-6 h-6 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Performance by Subject */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="subject" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                  }}
                />
                <Legend />
                <Bar dataKey="score" fill="var(--color-primary)" name="Your Score" />
                <Bar dataKey="average" fill="var(--color-muted)" name="Class Average" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Study Trend */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Weekly Study Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={studyTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="day" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="var(--color-secondary)"
                  name="Study Hours"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="quizzes"
                  stroke="var(--color-accent)"
                  name="Quizzes Taken"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Strengths vs Weaknesses */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Performance Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={strengthsWeaknesses}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {strengthsWeaknesses.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Detailed Strengths & Weaknesses */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Top Strengths</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { subject: "Calculus", score: 92 },
                { subject: "Physics", score: 88 },
                { subject: "Algebra", score: 85 },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{item.subject}</span>
                    <span className="text-primary font-bold">{item.score}%</span>
                  </div>
                  <ProgressBar value={item.score} color="secondary" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-lg">Areas for Improvement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { subject: "Chemistry", score: 65 },
                { subject: "Geometry", score: 78 },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{item.subject}</span>
                    <span className="text-accent font-bold">{item.score}%</span>
                  </div>
                  <ProgressBar value={item.score} color="accent" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
