"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Mail, Book, Settings, LogOut } from "lucide-react"

export function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: "Sarah Johnson",
    email: "sarah.johnson@university.edu",
    school: "Central University",
    goal: "Improve Mathematics and Science scores",
    subjects: ["Mathematics", "Physics", "Chemistry"],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Profile</h1>
        <p className="text-muted-foreground">Manage your learning preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card className="border-border text-center">
            <CardContent className="pt-8">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-1">{formData.name}</h2>
              <p className="text-sm text-muted-foreground mb-6">{formData.school}</p>
              <div className="space-y-2">
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? "Save Changes" : "Edit Profile"}
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">School</label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5 text-secondary" />
                Learning Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Primary Goal</label>
                <input
                  type="text"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card text-foreground disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subjects of Interest</label>
                <div className="flex flex-wrap gap-2">
                  {formData.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="w-5 h-5 text-accent" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Email Reminders</p>
                  <p className="text-sm text-muted-foreground">Get daily study reminders</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Progress Notifications</p>
                  <p className="text-sm text-muted-foreground">Celebrate your achievements</p>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Use dark theme</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
