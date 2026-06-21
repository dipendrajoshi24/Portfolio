"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiJupyter,
  SiPostman,
} from "react-icons/si";
import { IconType } from "react-icons";
import { skillsData } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/animations";

const ICON_MAP: Record<string, IconType> = {
  SiC,
  SiCplusplus,
  SiPython,
  SiOpenjdk,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiJupyter,
  SiPostman,
};

export function SkillsShowcase() {
  // Flatten a curated set of top skills across categories for the homepage teaser
  const featured = skillsData.flatMap((c) => c.skills).slice(0, 10);

  return (
    <section className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4">My Skills</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Languages, frameworks, and tools I build with day to day
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-12">
          {featured.map((skill, index) => {
            const Icon = ICON_MAP[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 p-3 sm:p-4 text-center"
              >
                {Icon && (
                  <Icon aria-hidden="true" className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: skill.color }} />
                )}
                <span className="text-[11px] sm:text-xs font-medium leading-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <MagneticButton>
            <Link href="/skills">
              <Button variant="outline" size="lg" className="group">
                View All Skills
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
