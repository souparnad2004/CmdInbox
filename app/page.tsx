"use client"

import * as React from "react"
import {
  ArrowRight,
  Calendar,
  Clock,
  Mail,
  TrendingUp,
  Zap,
} from "lucide-react"

import Sidebar from "@/components/sidebar"
import Topbar from "@/components/topbar"
import { StatCard } from "@/components/statCard"
import { ActivityItem } from "@/components/activityItem"

export default function DashboardPage() {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-background text-foreground">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <main className="min-w-0 flex-1 overflow-y-auto">
          <div className="w-full space-y-6 px-4 py-6 sm:px-6 lg:px-8">
            <section className="relative overflow-hidden rounded-xl border border-border/30 bg-surface p-6 md:p-8">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent" />
              <div className="relative z-10">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Welcome back, Alex
                </h1>
                <p className="mb-6 max-w-2xl text-muted-foreground">
                  Command your inbox at the speed of thought. Press{" "}
                  <kbd className="rounded border border-border/50 bg-background px-1.5 py-0.5 font-mono text-[10px]">
                    ⌘K
                  </kbd>{" "}
                  to get started.
                </p>

                <button
                  type="button"
                  className="group flex w-full max-w-2xl cursor-text items-center gap-3 rounded-xl border border-border/30 bg-background px-4 py-3 text-left shadow-inner transition-all hover:border-primary/30"
                  onClick={() =>
                    window.dispatchEvent(new CustomEvent("open-command-bar"))
                  }
                >
                  <Zap className="h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
                    Try &quot;Schedule meeting tomorrow 3pm&quot;...
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                icon={Mail}
                label="Emails Today"
                value="24"
                trend="+12%"
                color="bg-blue-500/10"
              />
              <StatCard
                icon={Calendar}
                label="Meetings"
                value="3"
                color="bg-emerald-500/10"
              />
              <StatCard
                icon={Zap}
                label="Commands Run"
                value="47"
                trend="+8%"
                color="bg-amber-500/10"
              />
              <StatCard
                icon={Clock}
                label="Time Saved"
                value="2.4h"
                color="bg-purple-500/10"
              />
            </section>

            <section>
              <h2 className="mb-4 text-lg font-semibold text-foreground">
                Recent Activity
              </h2>
              <div className="rounded-xl border border-border/30 bg-surface divide-y divide-border/20">
                <ActivityItem
                  icon={Mail}
                  title="Email sent to john@example.com"
                  description="Re: Project update - Looking forward to it!"
                  time="2m ago"
                  status="success"
                />
                <ActivityItem
                  icon={Calendar}
                  title="Meeting scheduled"
                  description="Team standup - Tomorrow 9:00 AM"
                  time="15m ago"
                  status="success"
                />
                <ActivityItem
                  icon={Mail}
                  title="Email drafted for review"
                  description="To: sarah@company.com - Q4 Report"
                  time="1h ago"
                  status="pending"
                />
                <ActivityItem
                  icon={Calendar}
                  title="Calendar invite sent"
                  description="Client call with Acme Corp - Friday 2:00 PM"
                  time="3h ago"
                  status="success"
                />
                <ActivityItem
                  icon={Mail}
                  title="Bulk archive completed"
                  description="47 newsletters archived"
                  time="5h ago"
                  status="success"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
