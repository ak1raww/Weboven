"use client";

import React, { useEffect, useState, useRef } from "react";
import "./Effects.css";

const getIsMobile = () => {
  if (typeof window === "undefined") return true;
  const supportsHover = window.matchMedia("(hover: hover)").matches;
  return window.innerWidth < 768 || !supportsHover;
};

export default function Effects() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(getIsMobile);

  const ringRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  // Track cursor position
  useEffect(() => {
    const isMobile = getIsMobile();

    if (!isMobile) {
      document.documentElement.classList.add("custom-cursor-active");
    } else {
      document.documentElement.classList.remove("custom-cursor-active");
    }

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add pointer hover states to custom cursor
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button") ||
          target.style.cursor === "pointer" ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("interactive-hover"))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    const handleResize = () => {
      setIsMobileDevice(getIsMobile());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth delayed ring follower (lerp)
  useEffect(() => {
    if (isMobileDevice) return;

    const animateRing = () => {
      // Lerp ring position towards current mouse position
      const ease = 0.15; // smoothness factor
      ringRef.current.x += (position.x - ringRef.current.x) * ease;
      ringRef.current.y += (position.y - ringRef.current.y) * ease;
      setRingPosition({ x: ringRef.current.x, y: ringRef.current.y });

      requestRef.current = requestAnimationFrame(animateRing);
    };

    requestRef.current = requestAnimationFrame(animateRing);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position, isMobileDevice]);

  return (
    <>
      {/* Clean Premium Grid Background */}
      <div className="cleanGridBackground" />

      {/* Custom Cursor Followers for Desktop only */}
      {!isMobileDevice && (
        <div className={isHovering ? "cursorHoverActive" : ""}>
          <div
            className="customCursorDot"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          />
          <div
            className="customCursorRing"
            style={{
              left: `${ringPosition.x}px`,
              top: `${ringPosition.y}px`,
            }}
          />
        </div>
      )}
    </>
  );
}
