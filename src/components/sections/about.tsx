"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ANIMATION_VARIANTS, SITE_CONFIG } from "@/lib/constants";
import { educationData } from "@/data/achievements";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Code2,
  Database,
  BrainCircuit,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";
import {
  ScrollReveal,
  GradientText
} from "@/components/animations";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "I build complete MERN applications — React interfaces, Node/Express APIs, and MongoDB data layers — owning a feature from UI to database.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning & Data",
    text: "I work with Python, Pandas, NumPy, and scikit-learn to clean data and build predictive models for real-world problems.",
  },
  {
    icon: Database,
    title: "Strong CS Fundamentals",
    text: "C and C++ gave me a real understanding of how computers work under the hood — memory, performance, and data structures.",
  },
];

const QUICK_FACTS = [
  { label: "Focus", value: "Full Stack · MERN" },
  { label: "Also Building With", value: "Python · ML" },
  { label: "Status", value: "Open to opportunities" },
];

export function About() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-3.5 w-3.5" />
              Get to know me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
              About <GradientText>Me</GradientText>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
              The person behind the code — what I work on and what drives me.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Photo + Introduction — professional two-column layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          transition={{ delay: 0.15 }}
          className="grid md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] gap-8 sm:gap-10 lg:gap-14 items-start mb-14 sm:mb-20"
        >
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto md:mx-0 w-full max-w-[300px] md:max-w-none"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-xl">
              <div className="absolute -inset-2 rounded-[1.25rem] bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-xl -z-10" />
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/profile/dipendra.jpg"
                  alt="Dipendra Joshi — Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 300px, 380px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-display font-semibold text-lg sm:text-xl drop-shadow-sm">
                    Dipendra Joshi
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>

            {/* Social row under photo */}
            <div className="flex items-center justify-center gap-3 mt-5">
              <Link
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full border border-border/60 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full border border-border/60 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href={`mailto:${SITE_CONFIG.links.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full border border-border/60 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="/Resume.pdf"
                download
                aria-label="Download Resume"
                className="p-2.5 rounded-full border border-border/60 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <Download className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Bio + quick facts */}
          <div>
            <div className="space-y-4 mb-8">
              <p className="text-base sm:text-lg leading-relaxed">
                I&apos;m <span className="font-semibold text-foreground">Dipendra Joshi</span>, a Full
                Stack Developer and Bachelor of Computer Applications student at Graphic Era
                Hill University, Dehradun. I work primarily with the MERN stack, building
                products from the database up to a polished, responsive interface.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                My approach is hands-on: I learn by building, debugging, and rebuilding —
                a habit that started with breaking things just to understand why they
                broke, and never really stopped. I care about writing code that&apos;s
                clean enough for someone else to read and maintain, not just code that
                happens to work.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                Beyond web development, I work with Python for data analysis and
                machine learning, and I keep my fundamentals sharp with C and C++.
                I&apos;m currently focused on shipping real projects, contributing to
                open source, and continuing to grow as a well-rounded engineer.
              </p>
            </div>

            {/* Quick facts strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-border/50 bg-muted/40">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label}>
                  <p className="text-[11px] sm:text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    {fact.label}
                  </p>
                  <p className="text-sm sm:text-base font-semibold">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="mb-14 sm:mb-20">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-xl sm:text-2xl font-display font-semibold mb-6 sm:mb-8 text-center"
          >
            What I Bring
          </motion.h3>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 sm:p-6 rounded-xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary inline-flex mb-4">
                  <item.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Cards */}
        <div>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={ANIMATION_VARIANTS.fadeUp}
            className="text-xl sm:text-2xl font-display font-semibold mb-6 sm:mb-8 text-center"
          >
            Education
          </motion.h3>
          <div className="grid grid-cols-1 place-items-center max-w-3xl mx-auto">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={ANIMATION_VARIANTS.fadeUp}
                transition={{ delay: index * 0.1 }}
                className="p-5 sm:p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg">{edu.degree}</h3>
                    <p className="text-primary font-medium text-sm sm:text-base">{edu.institution}</p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 text-xs sm:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edu.location}
                      </span>
                    </div>
                    {edu.gpa && (
                      <p className="mt-2 text-sm font-medium">
                        GPA: {edu.gpa}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
