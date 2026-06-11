"use client"

import { usePathname } from "next/navigation"
import {
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Mail,
  Calendar,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Page title mapping
const pageTitles: Record<string, string> = {
  "/": "Mission Control",
  "/inbox": "Inbox",
  "/calendar": "Calendar",
  "/activity": "Activity",
  "/settings": "Settings",
}

export default function Topbar() {
  const pathname = usePathname()
  const pageTitle = pageTitles[pathname] || "PilotHQ"

  return (
    <header className="h-14 glass-dark border-b border-border/20 flex items-center justify-between px-4 md:px-6 shrink-0 z-30">
      {/* Left: Page Title */}
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-semibold text-foreground tracking-tight">
          {pageTitle}
        </h1>
        <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground uppercase tracking-wider bg-surface px-2 py-0.5 rounded-md border border-border/30">
          {pathname === "/" ? "Dashboard" : pathname}
        </span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2">
        {/* Quick Stats Pills */}
        <div className="hidden md:flex items-center gap-1.5 mr-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border border-border/30 text-xs text-muted-foreground">
            <Mail className="w-3 h-3 text-blue-400" />
            <span className="font-medium text-foreground">12</span>
            <span className="hidden lg:inline">unread</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface border border-border/30 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3 text-emerald-400" />
            <span className="font-medium text-foreground">3</span>
            <span className="hidden lg:inline">today</span>
          </div>
        </div>

        {/* Cmd+K Hint */}
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground bg-surface border-border/30 hover:bg-surface/80 hover:text-foreground transition-all"
          onClick={() => window.dispatchEvent(new CustomEvent("open-command-bar"))}
        >
          <Search className="w-3.5 h-3.5" />
          <span>Quick Command</span>
          <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-background border border-border/50 text-[10px] font-mono text-muted-foreground ml-1">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>

        <ThemeToggle />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-2 h-9 px-2 hover:bg-surface transition-all"
            >
              <Avatar className="h-7 w-7 border border-border/30">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=80&auto=format&fit=crop" />
                <AvatarFallback className="bg-slate-800 text-slate-400 text-[10px]">
                  AV
                </AvatarFallback>
              </Avatar>
              <span className="hidden md:inline text-sm font-medium text-foreground">
                Alex
              </span>
              <ChevronDown className="hidden md:block w-3.5 h-3.5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-56 bg-surface border-border/30 text-foreground"
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col">
                <span className="text-sm font-medium">Alex Vane</span>
                <span className="text-xs text-muted-foreground">
                  alex@example.com
                </span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-border/30" />
            <DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-border/30" />
            <DropdownMenuItem className="cursor-pointer text-red-400 hover:bg-red-500/10 focus:bg-red-500/10">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
