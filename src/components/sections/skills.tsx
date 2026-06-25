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
import { useRef, useCallback } from "react";
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

// Piano note frequencies mapped to a C major scale
const HOVER_NOTES = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
const CLICK_NOTES = [523.25, 659.25, 783.99]; // C5, E5, G5 chord

function playPianoNote(
  ctx: AudioContext,
  frequency: number,
  duration: number = 0.8,
  volume: number = 0.18
) {
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  const harmonicOsc = ctx.createOscillator(); // adds warmth
  const harmonicGain = ctx.createGain();

  // Main tone
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

  // Harmonic (octave up, quieter) for piano-like overtone
  harmonicOsc.type = "sine";
  harmonicOsc.frequency.setValueAtTime(frequency * 2, ctx.currentTime);
  harmonicGain.gain.setValueAtTime(volume * 0.3, ctx.currentTime);

  // Piano-like envelope: sharp attack, quick decay, slow release
  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(volume * 0.4, ctx.currentTime + 0.1);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

  harmonicGain.gain.setValueAtTime(0, ctx.currentTime);
  harmonicGain.gain.linearRampToValueAtTime(volume * 0.3, ctx.currentTime + 0.01);
  harmonicGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration * 0.6);

  oscillator.connect(gainNode);
  harmonicOsc.connect(harmonicGain);
  gainNode.connect(ctx.destination);
  harmonicGain.connect(ctx.destination);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration);
  harmonicOsc.start(ctx.currentTime);
  harmonicOsc.stop(ctx.currentTime + duration * 0.6);
}

export function Skills() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const handleHover = useCallback((index: number) => {
    const ctx = getAudioContext();
    const note = HOVER_NOTES[index % HOVER_NOTES.length];
    playPianoNote(ctx, note, 0.6, 0.15);
  }, [getAudioContext]);

  const handleClick = useCallback(() => {
    const ctx = getAudioContext();
    // Play a soft C major chord arpeggio on click
    CLICK_NOTES.forEach((freq, i) => {
      setTimeout(() => playPianoNote(ctx, freq, 1.0, 0.12), i * 60);
    });
  }, [getAudioContext]);

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
                  const globalIndex = categoryIndex * 10 + skillIndex;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.05 + skillIndex * 0.04,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -4 }}
                      onHoverStart={() => handleHover(globalIndex)}
                      onClick={() => handleClick()}
                      className="flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-xl border border-border/50 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 p-4 sm:p-5 text-center cursor-pointer"
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