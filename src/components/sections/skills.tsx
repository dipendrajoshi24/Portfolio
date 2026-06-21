"use client";

import { motion } from "framer-motion";
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
import { ANIMATION_VARIANTS } from "@/lib/constants";

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

export function Skills() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30" id="skills">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATION_VARIANTS.fadeUp}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Languages, frameworks, and tools I use to build full-stack
            applications and work with data.
          </p>
        </motion.div>

        {/* Category Blocks */}
        <div className="space-y-10 sm:space-y-14">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={ANIMATION_VARIANTS.fadeUp}
              transition={{ delay: categoryIndex * 0.05 }}
            >
              <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-display font-semibold mb-1">
                  {category.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = ICON_MAP[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.05 + skillIndex * 0.04,
                        ease: "easeOut"
                      }}
                      whileHover={{ y: -4 }}
                      className="flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 p-4 sm:p-5 text-center"
                    >
                      {Icon && (
                        <Icon
                          aria-hidden="true"
                          className="h-8 w-8 sm:h-10 sm:w-10"
                          style={{ color: skill.color }}
                        />
                      )}
                      <span className="text-xs sm:text-sm font-medium leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
