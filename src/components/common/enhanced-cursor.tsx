"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

type CursorMode = "default" | "link" | "button" | "image" | "text-input" | "heading";

interface CursorState {
  mode: CursorMode;
  label?: string;
}

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [cursorState, setCursorState] = useState<CursorState>({ mode: "default" });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 700, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Detect touch / coarse-pointer devices (mobile, tablet) so the custom
  // cursor and "cursor: none" override only apply on real mouse devices.
  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    setIsTouchDevice(!mql.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsTouchDevice(!e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const imageEl = target.closest("img, [data-cursor='image']") as HTMLElement | null;
      const inputEl = target.closest("input, textarea, [contenteditable='true']") as HTMLElement | null;
      const headingEl = target.closest("h1, h2, h3, [data-cursor='heading']") as HTMLElement | null;
      const linkEl = target.closest("a") as HTMLAnchorElement | null;
      const buttonEl = target.closest(
        "button, [role='button'], .magnetic-button, [data-cursor='button']"
      ) as HTMLElement | null;

      if (imageEl) {
        setCursorState({ mode: "image", label: "View" });
      } else if (inputEl) {
        setCursorState({ mode: "text-input" });
      } else if (buttonEl) {
        setCursorState({ mode: "button" });
      } else if (linkEl) {
        // External links get a distinct label from in-app nav links
        const isExternal = linkEl.target === "_blank" || /^https?:\/\//.test(linkEl.href || "");
        setCursorState({ mode: "link", label: isExternal ? "Visit" : "Go" });
      } else if (headingEl) {
        setCursorState({ mode: "heading" });
      } else {
        setCursorState({ mode: "default" });
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  // Hide default cursor — only on devices with a real mouse pointer
  useEffect(() => {
    if (isTouchDevice) return;

    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  const { mode, label } = cursorState;

  // Size/scale per mode — each element type gets a visually distinct cursor
  const sizeByMode: Record<CursorMode, number> = {
    default: 16,
    link: 44,
    button: 52,
    image: 64,
    "text-input": 3,
    heading: 24,
  };
  const baseSize = sizeByMode[mode];
  const scale = isClicking ? 0.85 : 1;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        x: "-50%",
        y: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={mode}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="flex items-center justify-center"
        >
          {mode === "default" && (
            <div
              className="rounded-full bg-foreground"
              style={{ width: baseSize, height: baseSize }}
            />
          )}

          {mode === "heading" && (
            <div
              className="rounded-full border-2 border-foreground bg-transparent"
              style={{ width: baseSize, height: baseSize }}
            />
          )}

          {mode === "text-input" && (
            <div
              className="bg-primary rounded-full animate-pulse"
              style={{ width: baseSize, height: 22 }}
            />
          )}

          {mode === "link" && (
            <div
              className="rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-medium tracking-wide shadow-lg"
              style={{ width: baseSize, height: baseSize }}
            >
              {label}
            </div>
          )}

          {mode === "button" && (
            <div
              className="rounded-full border-2 border-primary bg-primary/15 backdrop-blur-sm flex items-center justify-center"
              style={{ width: baseSize, height: baseSize }}
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
          )}

          {mode === "image" && (
            <div
              className="rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center text-xs font-medium shadow-xl"
              style={{ width: baseSize, height: baseSize }}
            >
              {label}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
