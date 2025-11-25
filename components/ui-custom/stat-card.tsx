import type React from "react"
interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
  color?: "primary" | "secondary" | "accent"
}

export function StatCard({ icon, label, value, color = "primary" }: StatCardProps) {
  const bgClasses = {
    primary: "bg-gradient-to-br from-primary/25 to-primary/5 border-primary/30 hover:border-primary/60",
    secondary: "bg-gradient-to-br from-secondary/25 to-secondary/5 border-secondary/30 hover:border-secondary/60",
    accent: "bg-gradient-to-br from-accent/25 to-accent/5 border-accent/30 hover:border-accent/60",
  }

  const textClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  }

  return (
    <div
      className={`${bgClasses[color]} rounded-xl p-6 border transition-all duration-300 hover:shadow-lg hover:shadow-${color}/20 hover:-translate-y-1 group`}
    >
      <div
        className={`${textClasses[color]} mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
      >
        {icon}
      </div>
      <p className="text-sm text-muted-foreground mb-2 font-medium">{label}</p>
      <p className={`text-3xl font-bold ${textClasses[color]} bg-clip-text`}>{value}</p>
    </div>
  )
}
