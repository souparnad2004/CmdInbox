"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import {
  Mail,
  Calendar,
  Bot,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  Menu,
  X,
  Search,
  Send,
  Keyboard,
  Webhook,
  Database,
  Filter,
  Command,
  Sparkles,
  CalendarPlus,
  Inbox,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Mail,
    title: "Inbox, reimagined",
    description:
      "Search, draft, and send without the clutter. Gmail power with a UI built around how you actually work.",
    benefits: ["Instant search", "Smart compose", "Priority inbox"],
  },
  {
    icon: Calendar,
    title: "Schedule in seconds",
    description:
      "Send invites, reschedule, and manage your day without digging through Google's menus.",
    benefits: ["One-step invites", "Conflict detection", "Timezone-aware"],
  },
  {
    icon: Bot,
    title: "AI command bar",
    description:
      "Describe what you need in plain English. PilotHQ handles the email and calendar actions for you.",
    benefits: ["Natural language", "Multi-step tasks", "Context-aware"],
  },
  {
    icon: Database,
    title: "Search everything",
    description:
      "Find any email or event in under a second with local vector search across your full history.",
    benefits: ["Semantic search", "Full-text", "Sub-second"],
  },
  {
    icon: Webhook,
    title: "Always in sync",
    description:
      "New emails and calendar updates arrive in real time via webhooks — no polling, no lag.",
    benefits: ["Live updates", "Push notifications", "Zero refresh"],
  },
  {
    icon: Keyboard,
    title: "Keyboard-first",
    description:
      "Every action is a keystroke away. Command palette, shortcuts, and vim-style navigation built in.",
    benefits: ["⌘K palette", "Custom bindings", "Power-user flow"],
  },
]

const shortcuts = [
  { keys: ["⌘", "K"], action: "Open command bar" },
  { keys: ["C"], action: "Compose email" },
  { keys: ["E"], action: "Archive thread" },
  { keys: ["N"], action: "New calendar event" },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      tl.from(".hero-badge", { y: 24, opacity: 0, duration: 0.5, ease: "power3.out" })
      tl.from(".hero-title", { y: 64, opacity: 0, duration: 0.9, ease: "power4.out" }, "-=0.2")
      tl.from(".hero-sub", { y: 32, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
      tl.from(".hero-cta", { scale: 0.95, opacity: 0, duration: 0.5, ease: "back.out(1.4)" }, "-=0.3")
      tl.from(".hero-preview", { y: 48, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.2")

      gsap.to(".hero-glow", {
        scale: 1.08,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })

      sectionsRef.current.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
          y: 48,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[hsl(225_50%_5%)] text-[hsl(214_32%_91%)]">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="hero-glow absolute -top-32 left-1/4 h-[32rem] w-[32rem] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 h-[28rem] w-[28rem] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(214 32% 91%) 1px, transparent 1px), linear-gradient(90deg, hsl(214 32% 91%) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/8 bg-[hsl(225_50%_5%)]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-[0_0_20px_hsl(217_91%_60%/0.4)]">
              <Command className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight">PilotHQ</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm text-white/60 transition hover:text-white">
              Features
            </Link>
            <Link href="#workflow" className="text-sm text-white/60 transition hover:text-white">
              Workflow
            </Link>
            <Link href="#shortcuts" className="text-sm text-white/60 transition hover:text-white">
              Shortcuts
            </Link>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" className="text-white/70 hover:text-white" asChild>
              <Link href="/login?callbackUrl=/dashboard">Sign in</Link>
            </Button>
            <Button className="shadow-[0_0_20px_hsl(217_91%_60%/0.25)]" asChild>
              <Link href="/signup?callbackUrl=/dashboard">
                Get started
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 transition hover:bg-white/8 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/8 bg-[hsl(225_50%_5%)]/95 backdrop-blur-xl md:hidden">
            <div className="space-y-1 px-4 py-4">
              <Link href="#features" className="block rounded-lg px-3 py-2 text-white/70 hover:bg-white/5">
                Features
              </Link>
              <Link href="#workflow" className="block rounded-lg px-3 py-2 text-white/70 hover:bg-white/5">
                Workflow
              </Link>
              <Link href="#shortcuts" className="block rounded-lg px-3 py-2 text-white/70 hover:bg-white/5">
                Shortcuts
              </Link>
              <div className="flex flex-col gap-2 pt-3">
                <Button variant="outline" className="w-full border-white/15" asChild>
                  <Link href="/login">Sign in</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/signup">Get started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="hero-badge mb-6 border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/10">
              <Sparkles className="mr-1.5 h-3 w-3" />
              Gmail + Calendar, your way
            </Badge>

            <h1 className="hero-title text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your inbox and calendar,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                at the speed of thought
              </span>
            </h1>

            <p className="hero-sub mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              PilotHQ is a keyboard-first command center for email and scheduling. Search, send,
              and schedule in fewer clicks — powered by Gmail and Google Calendar under the hood.
            </p>

            <div className="hero-cta mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" className="h-12 px-8 text-base shadow-[0_0_24px_hsl(217_91%_60%/0.3)]" asChild>
                <Link href="/signup">
                  Start for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white/15 bg-white/5 px-8 text-base text-white hover:bg-white/10"
                asChild
              >
                <Link href="/dashboard">View demo</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/40">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                Gmail integration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                Google Calendar
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                Real-time sync
              </span>
            </div>
          </div>

          {/* Product preview */}
          <div className="hero-preview relative mx-auto mt-16 max-w-5xl">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-blue-500/20 via-violet-500/10 to-transparent" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[hsl(222_39%_10%)] shadow-2xl shadow-black/50">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-xs text-white/40">
                  <Command className="h-3 w-3" />
                  pilothq.app
                </div>
              </div>

              <div className="grid md:grid-cols-5">
                {/* Sidebar */}
                <div className="hidden border-r border-white/8 p-4 md:col-span-1 md:block">
                  <div className="mb-4 flex items-center gap-2 text-xs font-medium text-white/50">
                    <Inbox className="h-3.5 w-3.5" />
                    Inbox
                  </div>
                  {["Priority", "Updates", "Calendar"].map((label, i) => (
                    <div
                      key={label}
                      className={`mb-1 flex items-center justify-between rounded-md px-2 py-1.5 text-xs ${
                        i === 0 ? "bg-blue-500/15 text-blue-300" : "text-white/45"
                      }`}
                    >
                      {label}
                      {i === 0 && (
                        <Badge className="h-4 bg-blue-500/30 px-1 text-[10px] text-blue-200">3</Badge>
                      )}
                    </div>
                  ))}
                </div>

                {/* Email list */}
                <div className="border-r border-white/8 p-4 md:col-span-2">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-xs font-medium text-white/50">Today</span>
                    <div className="flex gap-1">
                      <Search className="h-3.5 w-3.5 text-white/30" />
                      <Send className="h-3.5 w-3.5 text-white/30" />
                    </div>
                  </div>
                  {[
                    { from: "Sarah Chen", subject: "Q2 roadmap review", time: "2m", urgent: true },
                    { from: "Alex Rivera", subject: "Coffee next week?", time: "1h", urgent: false },
                    { from: "Notion", subject: "Your weekly digest", time: "3h", urgent: false },
                  ].map((email) => (
                    <div
                      key={email.subject}
                      className={`mb-2 rounded-lg p-2.5 transition ${
                        email.urgent ? "bg-blue-500/10 ring-1 ring-blue-500/20" : "bg-white/3"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-medium ${email.urgent ? "text-white" : "text-white/70"}`}>
                          {email.from}
                        </span>
                        <span className="text-[10px] text-white/30">{email.time}</span>
                      </div>
                      <p className="mt-0.5 truncate text-[11px] text-white/45">{email.subject}</p>
                    </div>
                  ))}
                </div>

                {/* Calendar + command bar */}
                <div className="p-4 md:col-span-2">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-white/50">
                    <Calendar className="h-3.5 w-3.5" />
                    Today&apos;s schedule
                  </div>
                  <div className="space-y-2">
                    {[
                      { time: "9:00", title: "Standup", color: "bg-emerald-500" },
                      { time: "11:30", title: "Product sync", color: "bg-blue-500" },
                      { time: "3:00", title: "1:1 with Sarah", color: "bg-violet-500" },
                    ].map((event) => (
                      <div key={event.title} className="flex items-center gap-2 rounded-lg bg-white/3 px-2.5 py-2">
                        <div className={`h-8 w-0.5 rounded-full ${event.color}`} />
                        <div>
                          <p className="text-[11px] font-medium text-white/80">{event.title}</p>
                          <p className="text-[10px] text-white/35">{event.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-lg border border-violet-500/25 bg-violet-500/8 p-3">
                    <div className="mb-2 flex items-center gap-1.5 text-[10px] text-violet-300">
                      <Zap className="h-3 w-3" />
                      Command bar
                    </div>
                    <p className="text-[11px] leading-relaxed text-white/55 italic">
                      &quot;Invite sarah@company.com Thursday 9am and send a follow-up email&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section ref={addToRefs} className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400/80">
              The problem
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Email and calendar weren&apos;t built for how you work
            </h2>
            <p className="mt-4 text-white/50">
              Gmail and Google Calendar are powerful — but the default UI forces everyone into the
              same workflow. Common actions take too many clicks, and your tools never talk to each
              other the way you need.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Too many clicks",
                description: "Sending an invite or drafting a reply shouldn't require a treasure hunt through menus.",
              },
              {
                icon: Filter,
                title: "One-size-fits-all",
                description: "Default filters and layouts don't match how power users actually prioritize their day.",
              },
              {
                icon: MessageSquare,
                title: "Context switching",
                description: "Jumping between inbox and calendar breaks focus and slows you down.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border-white/8 bg-white/3 transition hover:border-white/15 hover:bg-white/5"
              >
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <item.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <CardTitle className="text-base text-white/90">{item.title}</CardTitle>
                  <CardDescription className="text-white/45">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={addToRefs} id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-400/80">
              Features
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="mt-4 text-white/50">
              PilotHQ puts the actions you use most front and center — with AI, search, and
              real-time sync under the surface.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group border-white/8 bg-white/3 transition hover:border-white/15 hover:bg-white/5"
              >
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/15 to-violet-500/15 transition group-hover:scale-105">
                    <feature.icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <CardTitle className="text-base text-white/90">{feature.title}</CardTitle>
                  <CardDescription className="text-white/45">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {feature.benefits.map((benefit) => (
                      <Badge
                        key={benefit}
                        variant="secondary"
                        className="border-0 bg-white/8 text-[11px] text-white/55"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workflow */}
      <section
        ref={addToRefs}
        id="workflow"
        className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/8 via-transparent to-violet-500/8">
            <div className="grid items-center gap-10 p-8 md:grid-cols-2 md:p-12">
              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-400/80">
                  AI workflow
                </p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Say it once. PilotHQ does the rest.
                </h2>
                <p className="mt-4 text-white/50">
                  Use natural language to chain email and calendar actions. Schedule a meeting,
                  send the invite, and draft a follow-up — all from one command.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Send calendar invites with a single sentence",
                    "Draft and send emails without leaving your flow",
                    "Smart priority filtering powered by AI",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/60">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-white/10 bg-[hsl(222_39%_8%)] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/20">
                      <Bot className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                    <span className="text-xs text-white/40">You</span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">
                    Send a calendar invite to friend@company.com at 9 AM next Thursday. Send
                    them an email saying I look forward to our meeting.
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                    <span className="text-xs text-white/40">PilotHQ</span>
                  </div>
                  <div className="space-y-2 text-sm text-white/60">
                    <p className="flex items-center gap-2">
                      <CalendarPlus className="h-3.5 w-3.5 text-emerald-400" />
                      Calendar invite sent for Thu, 9:00 AM
                    </p>
                    <p className="flex items-center gap-2">
                      <Send className="h-3.5 w-3.5 text-emerald-400" />
                      Follow-up email drafted and sent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keyboard shortcuts */}
      <section ref={addToRefs} id="shortcuts" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-400/80">
                Keyboard-first
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built for people who never touch the mouse
              </h2>
              <p className="mt-4 text-white/50">
                PilotHQ is designed like the tools power users love — instant command palette,
                vim-style navigation, and shortcuts for every common action.
              </p>
              <div className="mt-6 flex items-center gap-3 text-sm text-white/40">
                <Shield className="h-4 w-4 text-blue-400" />
                Your data stays connected through secure OAuth — we never store your password.
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/3 p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/35">
                Essential shortcuts
              </p>
              <div className="space-y-3">
                {shortcuts.map((shortcut) => (
                  <div
                    key={shortcut.action}
                    className="flex items-center justify-between rounded-lg bg-white/3 px-4 py-3"
                  >
                    <span className="text-sm text-white/60">{shortcut.action}</span>
                    <div className="flex gap-1">
                      {shortcut.keys.map((key) => (
                        <kbd
                          key={key}
                          className="rounded border border-white/15 bg-white/8 px-2 py-0.5 font-mono text-xs text-white/70"
                        >
                          {key}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={addToRefs} className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-blue-600/15 to-violet-600/15 blur-3xl" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Take control of your inbox and calendar
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Stop adapting to someone else&apos;s workflow. Connect Gmail and Google Calendar, and
            work the way that makes sense for you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-base" asChild>
              <Link href="/signup">
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/15 bg-transparent px-8 text-base text-white hover:bg-white/8"
              asChild
            >
              <Link href="/login">Sign in</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
              <Command className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold">PilotHQ</span>
          </div>
          <p className="text-sm text-white/35">
            © {new Date().getFullYear()} PilotHQ. Email and calendar, reimagined.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#features" className="transition hover:text-white">
              Features
            </Link>
            <Link href="/login" className="transition hover:text-white">
              Sign in
            </Link>
            <Link href="/signup" className="transition hover:text-white">
              Sign up
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
