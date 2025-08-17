"use client";

import { useMemo, useState, ReactNode } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Moon,
  Sun,
  ScrollText,
  Download,
  MapPin,
  User,
  Camera,
  FileText,
  Menu,
  X,
} from "lucide-react";

// ---------- Types ----------
interface Project {
  name: string;
  description: string;
  stack: string[];
  image? : string;
  link: string;
  category: string;
}

interface Education {
  degree: string;
  school: string;
  years: string;
  grade: string;
}

interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
}

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

// ---------- Config: Edit these to update content ----------
const PROFILE: Profile = {
  name: "Subhrajit Sahoo",
  title: "B.Tech CSE (AIML) — MERN & Frontend Developer",
  location: "Bhubaneswar, Odisha, India",
  email: "subhrajitsahoo709@gmail.com",
  phone: "+91 7735476416",
  linkedin: "https://www.linkedin.com/in/subhrajit-sahoo-3897b8280",
  github: "https://github.com/Subhrajit709",
  summary:
    "Final-year CSE (AIML) student passionate about building clean, accessible, and performant web apps. Skilled in MERN, JavaScript, HTML/CSS, with growing interest in AI-first products.",
};

const SKILLS_PRIMARY: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  // "Mongoose",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Git",
  "GitHub",
  // "REST APIs",
  // "JWT/Auth",
];

const SKILLS_SECONDARY: string[] = [
  "Java",
  "OOP",
  // "DSA",
  "Python (basics)",
  "Framer Motion",
  "Shadcn/UI",
  // "Vite",
  // "Webpack",
  "Postman",
  "Netlify",
  "Vercel",
];

const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering (AIML)",
    school: "Trident Academy of Technology, Bhubaneswar",
    years: "2022 – 2026",
    grade: "CGPA: 7",
  },
];

const PROJECTS: Project[] = [
  {
    name: "Portfolio Website",
    image :"/ph-6.png",
    description:
      "Animated, accessible portfolio with dark/light mode, gradient theming, and smooth scroll.",
    stack: ["React", "Tailwind", "Framer Motion", "shadcn/ui"],
    link: "https://github.com/Subhrajit709",
    // category: "Frontend",
      category: "",
  },
  {
    name: "Battleship Game",
    image :"/ph-2.png",
    description:
      "Interactive web-based game where players place ships and attempt to sink the opponent’s fleet, with real-time game logic and dynamic board rendering.",
    stack: ["Html", "Css", "JavaScript", "Webpack"],
    link: "https://github.com/Subhrajit709",
    // category: "Full Stack",
    category: "",
  },
  {
    name: "Resume Builder",
    image :"/ph-3.png",
    description:
      "Client-side web application that allows users to create and customize professional resumes with real-time preview and export options.",
    stack: ["React"],
    link: "https://github.com/Subhrajit709",
    category: "AI/ML",
  },
];

// ---------- Minimal Animation Variants ----------
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Section = ({ id, title, subtitle, children }: SectionProps) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            {subtitle}
          </p>
        )}
      </motion.div>
      <div className="mt-12">{children}</div>
    </div>
  </section>
);

// ---------- Main Component ----------
export default function Portfolio() {
  const [dark, setDark] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Gradient tokens (official, clean)
  const gradient = useMemo(
    () =>
      "bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-black",
    []
  );

  const heroGradient =
    "bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-slate-900 dark:via-indigo-950/50 dark:to-slate-900";

  const navItems: [string, string][] = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];

  return (
    <div className={dark ? "dark" : ""}>
      <div
        className={`min-h-dvh ${gradient} text-slate-800 dark:text-slate-100 scroll-smooth`}
      >
        {/* Top Nav */}
        <header className="sticky top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 bg-background/90 border-b border-border/50">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            <a
              href="#home"
              className="font-bold tracking-tight text-xl transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              SS<span className="text-slate-400">·</span>Portfolio
            </a>

            <nav className="hidden lg:flex gap-8 text-sm font-medium">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-all group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                onClick={() => setDark((v) => !v)}
                className="transition-all hover:scale-105 hover:bg-indigo-50 dark:hover:bg-indigo-950"
              >
                {dark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>

              <Button
                asChild
                variant="outline"
                className="hidden sm:flex transition-all hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-700 bg-transparent"
              >
                <a href="#contact">
                  <ScrollText className="mr-2 h-4 w-4" /> Contact
                </a>
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden border-t bg-background/95 backdrop-blur-md"
            >
              <nav className="flex flex-col gap-4 p-4">
                {navItems.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </header>

        {/* Hero */}
        <section
          id="home"
          className={`relative overflow-hidden ${heroGradient}`}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-sky-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:px-8 py-20 lg:grid-cols-2 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50 px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to Internships & SDE Roles
              </motion.p>

              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent">
                  {PROFILE.name}
                </span>
              </h1>

              <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                {PROFILE.title}
              </p>

              <div className="mt-6 flex items-center justify-center lg:justify-start gap-3 text-base text-muted-foreground">
                <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                {PROFILE.location}
              </div>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 mx-auto lg:mx-0">
                {PROFILE.summary}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="transition-all hover:scale-105 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                >
                  <a href={PROFILE.github} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-5 w-5" /> GitHub
                  </a>
                </Button>
                <Button
                  variant="secondary"
                  asChild
                  size="lg"
                  className="transition-all hover:scale-105"
                >
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="transition-all hover:scale-105 bg-transparent"
                >
                  <a href="#contact">
                    <Download className="mr-2 h-5 w-5" /> Request CV
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Professional photo placeholder */}
              {/* Professional photo placeholder */}
             <div className="relative w-80 h-96">
  <Card className="relative overflow-hidden border-0 shadow-2xl rounded-2xl w-full h-full">
    <CardContent className="p-0 h-full">
      {/* Image covering entire card */}
      <img
        src="/ph5.jpg"
        alt="Professional"
        className="w-full h-full object-cover"
      />
    </CardContent>
  </Card>
</div>

            </motion.div>
          </div>
        </section>

        {/* About */}
        <Section
          id="about"
          title="About"
          subtitle="Who I am and what I care about"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            <motion.div className="lg:col-span-2">
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Bio</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base leading-7 text-muted-foreground">
                  <p>
                    I'm a hands‑on developer who enjoys crafting usable
                    interfaces, integrating clean APIs, and iterating fast.
                    Currently exploring AI‑assisted features to make everyday
                    tools smarter and more inclusive.
                  </p>
                  <p>
                    Outside code, I practice speaking English daily to improve
                    professional communication and stay updated with the latest
                    web development trends.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Experience</span>
                    <span className="text-muted-foreground">Fresher</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Focus</span>
                    <span className="text-muted-foreground">
                      Web · MERN · AI
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Availability</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                      Immediate
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Section>

        {/* Skills */}
        <Section
          id="skills"
          title="Skills"
          subtitle="Core tech I use day‑to‑day"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            <motion.div>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                    Primary Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  {SKILLS_PRIMARY.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="text-sm px-3 py-1.5 transition-all hover:bg-indigo-100 hover:text-indigo-700 dark:hover:bg-indigo-900 dark:hover:text-indigo-300 hover:scale-105"
                    >
                      {s}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    Secondary Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3">
                  {SKILLS_SECONDARY.map((s) => (
                    <Badge
                      key={s}
                      className="text-sm px-3 py-1.5 transition-all hover:bg-slate-200 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 hover:scale-105"
                    >
                      {s}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Section>

         {/* Projects  */}
        <Section
          id="projects"
          title="Projects"
          subtitle="Selected work and experiments"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
           {PROJECTS.map((p) => (
  <motion.div key={p.name}>
    <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="space-y-6 flex-1">
          <div className="relative">
            <div className="aspect-[16/10] rounded-xl border-2 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center transition-all group-hover:border-indigo-200 dark:group-hover:border-indigo-800 overflow-hidden">
              <div className="absolute top-3 left-3">
                <Badge
                  variant="secondary"
                  className="text-xs font-medium bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                >
                  {p.category}
                </Badge>
              </div>

             
              {p.image ? (
                <a href={p.link} target="_blank" rel="noreferrer">
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              ) : (
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900 dark:to-cyan-900 border flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Camera className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    Project Preview
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Project details */}
          <div className="space-y-4 flex-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-bold text-xl leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {p.name}
              </h3>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border bg-white dark:bg-slate-800 opacity-80 transition-all hover:opacity-100 hover:scale-110 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg"
                aria-label={`Open ${p.name}`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {p.stack.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="text-xs px-2.5 py-1 bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300 dark:hover:bg-indigo-950 dark:hover:text-indigo-300 dark:hover:border-indigo-700 transition-all hover:scale-105"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
))}

          </motion.div>
        </Section>

        {/* Education */}
        <Section
          id="education"
          title="Education"
          subtitle="Academic background"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            {EDUCATION.map((e) => (
              <motion.div key={e.degree}>
                <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                  <CardHeader>
                    <CardTitle className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-indigo-950 dark:to-sky-950 border">
                        <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl leading-tight">
                          {e.degree}
                        </h3>
                        <p className="text-base text-muted-foreground mt-1">
                          {e.school}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-base">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Duration</span>
                      <span className="text-muted-foreground">{e.years}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Grade</span>
                      <span className="text-muted-foreground">{e.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          title="Contact"
          subtitle="Let's build something meaningful"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            <motion.div className="lg:col-span-2">
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in touch</CardTitle>
                  <p className="text-muted-foreground">
                    Ready to collaborate on your next project
                  </p>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    asChild
                    className="transition-all hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-700 justify-start h-12 bg-transparent"
                  >
                    <a href={`mailto:${PROFILE.email}`}>
                      <Mail className="mr-3 h-5 w-5" /> {PROFILE.email}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="transition-all hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-700 justify-start h-12 bg-transparent"
                  >
                    <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
                      <Phone className="mr-3 h-5 w-5" /> {PROFILE.phone}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="transition-all hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-700 justify-start h-12 bg-transparent"
                  >
                    <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-3 h-5 w-5" /> LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="transition-all hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-700 justify-start h-12 bg-transparent"
                  >
                    <a href={PROFILE.github} target="_blank" rel="noreferrer">
                      <Github className="mr-3 h-5 w-5" /> GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div>
              <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-lg ring-1 ring-black/5 dark:ring-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl">CV / Resume</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-base text-muted-foreground">
                  <p>
                    Prefer a tailored CV? Click below and tell me the role
                    (e.g., AI Research Intern, Frontend Intern, SDE‑1) — I'll
                    send a role‑specific version.
                  </p>
                  <Button
                    asChild
                    className="w-full transition-all hover:scale-105 bg-indigo-600 hover:bg-indigo-700 h-12"
                  >
                    <a
                      href={`mailto:${
                        PROFILE.email
                      }?subject=CV%20Request%20—%20${encodeURIComponent(
                        PROFILE.name
                      )}&body=Hi%20Subhrajit%2C%5CnPlease%20share%20your%20CV%20for%20the%20role%3A%20`}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Request CV
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </Section>

        {/* Footer */}
        <footer className="border-t bg-slate-50/50 dark:bg-slate-900/50 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border px-4 py-2 text-sm hover:bg-muted transition-all hover:scale-105 font-medium"
              >
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border px-4 py-2 text-sm hover:bg-muted transition-all hover:scale-105 font-medium"
              >
                LinkedIn
              </a>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="rounded-lg border px-4 py-2 text-sm hover:bg-muted transition-all hover:scale-105 font-medium"
              >
                Back to top
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
