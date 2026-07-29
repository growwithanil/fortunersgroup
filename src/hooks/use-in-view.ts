import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function revealCls(inView: boolean, delay = 0) {
  return {
    style: { transitionDelay: `${delay}ms` } as React.CSSProperties,
    className:
      "transition-all duration-[900ms] ease-out will-change-transform " +
      (inView
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-6"),
  };
}
