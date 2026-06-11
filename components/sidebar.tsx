"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Mail,
  Calendar,
  Clock,
  Settings,
  ChevronLeft,
  ChevronRight,
  Command,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Types
interface NavItemProps {
  icon: React.ElementType
  label: string
  href: string
  shortcut?: string
  badge?: string | number
  active?: boolean
  collapsed?: boolean
}

// Navigation Item Component
const NavItem = ({
  icon: Icon,
  label,
  href,
  shortcut,
  badge,
  active,
  collapsed,
}: NavItemProps) => {
  const content = (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-all duration-200",
        active
          ? "bg-blue-500/10 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]"
          : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
      )}
    >
      <Icon
        className={cn("w-5 h-5 shrink-0 transition-colors", active && "text-blue-400")}
      />
      {!collapsed && (
        <>
          <span className="flex-1 font-medium text-sm truncate">{label}</span>
          {badge && (
            <Badge
              variant="secondary"
              className="bg-blue-500/20 text-blue-400 border-none px-1.5 h-5 min-w-[20px] flex items-center justify-center text-[10px] font-medium"
            >
              {badge}
            </Badge>
          )}
          {shortcut && !active && (
            <span className="text-[10px] font-mono opacity-0 group-hover:opacity-40 transition-opacity uppercase tracking-tighter ml-2 text-slate-500">
              {shortcut}
            </span>
          )}
        </>
      )}
    </Link>
  )

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent
            side="right"
            className="flex items-center gap-3 bg-[#131A2B] border-white/10 text-slate-200 px-3 py-2"
          >
            <span className="text-sm">{label}</span>
            {shortcut && (
              <span className="text-[10px] font-mono opacity-50 uppercase tracking-wider">
                {shortcut}
              </span>
            )}
            {badge && (
              <Badge className="bg-blue-500/20 text-blue-400 border-none text-[10px] h-5 px-1.5">
                {badge}
              </Badge>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return content
}

// Main Sidebar Component
export default function Sidebar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean
  setCollapsed: (v: boolean) => void
}) {
  const pathname = usePathname()

  const navItems = [
    {
      icon: Mail,
      label: "Inbox",
      href: "/inbox",
      shortcut: "⌘I",
      badge: 3,
    },
    {
      icon: Calendar,
      label: "Calendar",
      href: "/calendar",
      shortcut: "⌘C",
      badge: "2",
    },
    {
      icon: Clock,
      label: "Activity",
      href: "/activity",
      shortcut: "⌘A",
    },
  ]

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col h-screen border-r border-border/20 bg-background transition-all duration-300 ease-in-out relative z-40",
        collapsed ? "w-[64px]" : "w-[240px]"
      )}
    >
      {/* Brand Header */}
      <div className="h-14 flex items-center px-4 border-b border-border/20 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
          <Command className="w-4 h-4 text-white" />
        </div>
        {!collapsed && (
          <span className="ml-3 font-bold text-lg tracking-tight text-foreground animate-in fade-in slide-in-from-left-2 duration-300">
            PilotHQ
          </span>
        )}
      </div>

      {/* Navigation */}
      <ScrollArea className="flex-1 px-3 py-4">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.href}
              {...item}
              active={pathname === item.href}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-3 border-t border-border/20 space-y-4 bg-background/50 backdrop-blur-sm">
        <NavItem
          icon={Settings}
          label="Settings"
          href="/settings"
          shortcut="⌘,"
          active={pathname === "/settings"}
          collapsed={collapsed}
        />

        <div
          className={cn(
            "flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group",
            collapsed ? "justify-center" : "px-3"
          )}
        >
          <Avatar className="h-8 w-8 border border-border/30 shrink-0">
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&auto=format&fit=crop" />
            <AvatarFallback className="bg-slate-800 text-slate-400 text-xs">
              AV
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex flex-col min-w-0 animate-in fade-in duration-300">
              <span className="text-sm font-medium text-foreground truncate">
                Alex Vane
              </span>
              <span className="text-[10px] text-muted-foreground truncate uppercase tracking-wider font-mono">
                Pro Pilot
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 h-6 w-6 rounded-full border border-border/30 bg-background text-muted-foreground hover:text-foreground hover:bg-surface z-50 transition-transform hidden md:flex shadow-lg"
      >
        {collapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </Button>
    </aside>
  )
}