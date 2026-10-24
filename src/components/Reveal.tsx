"use client";

import { useAnimate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Memunculkan konten dengan animasi halus saat di-scroll ke layar.
 * Konten selalu terlihat secara default (juga sebelum JavaScript selesai dimuat);
 * hanya bagian yang masih di bawah layar yang disembunyikan sebentar lalu dianimasikan.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, margin: "0px 0px -60px 0px" });
  const waiting = useRef(false);

  useEffect(() => {
    const el = scope.current;
    if (reduce || !el || el.getBoundingClientRect().top < window.innerHeight) return;
    waiting.current = true;
    animate(el, { opacity: 0, y: 28 }, { duration: 0 });
  }, [reduce, scope, animate]);

  useEffect(() => {
    if (!inView || !waiting.current) return;
    waiting.current = false;
    animate(scope.current, { opacity: 1, y: 0 }, { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] });
  }, [inView, delay, scope, animate]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
