interface ProgressBarProps {
  value: number
  color?: "primary" | "secondary" | "accent"
}

export function ProgressBar({ value, color = "primary" }: ProgressBarProps) {
  const colorClasses = {
    primary: "bg-gradient-to-r from-primary to-primary/70",
    secondary: "bg-gradient-to-r from-secondary to-secondary/70",
    accent: "bg-gradient-to-r from-accent to-accent/70",
  }

  return (
    <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
      <div
        className={`h-full rounded-full transition-all duration-500 ${colorClasses[color]} shadow-lg shadow-${color}/50`}
        style={{ width: `${Math.min(value, 100)}%` }}
      />
    </div>
  )
}
