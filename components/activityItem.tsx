import { cn } from "@/lib/utils"

export function ActivityItem({
  icon: Icon,
  title,
  description,
  time,
  status,
}: {
  icon: React.ElementType
  title: string
  description: string
  time: string
  status?: "success" | "pending" | "error"
}) {
  const statusColors = {
    success: "bg-success/10 text-success",
    pending: "bg-warning/10 text-warning",
    error: "bg-error/10 text-error",
  }

  return (
    <div className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/40">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border/30 bg-surface">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-0.5 flex min-w-0 items-center gap-2">
          <p className="truncate text-sm font-medium text-foreground">
            {title}
          </p>
          {status && (
            <span
              className={cn(
                "shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-medium",
                statusColors[status]
              )}
            >
              {status}
            </span>
          )}
        </div>
        <p className="truncate text-xs text-muted-foreground">{description}</p>
      </div>
      <span className="mt-1 shrink-0 text-[10px] font-mono text-muted-foreground">
        {time}
      </span>
    </div>
  )
}