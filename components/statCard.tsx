import { cn } from "@/lib/utils"
import { TrendingUp } from "lucide-react"

export function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  color,
}: {
  icon: React.ElementType
  label: string
  value: string
  trend?: string
  color?: string
}) {
  return (
    <div className="group rounded-xl border border-border/30 bg-surface p-4 transition-all duration-200 hover:border-border/50 hover:shadow-lg">
      <div className="mb-3 flex items-start justify-between">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg",
            color || "bg-primary/10"
          )}
        >
          <Icon
            className={cn(
              "h-5 w-5",
              color
                ? color.replace("bg-", "text-").replace("/10", "")
                : "text-primary"
            )}
          />
        </div>
        {trend && (
          <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
            <TrendingUp className="h-3 w-3" />
            {trend}
          </span>
        )}
      </div>
      <p className="mb-1 text-2xl font-bold tracking-tight text-foreground">
        {value}
      </p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  )
}