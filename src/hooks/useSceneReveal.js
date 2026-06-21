import { useEffect, useRef } from "react";

export function useSceneReveal(ref, onReveal, rootRef, threshold = 0.4) {
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true;
          onReveal?.();
        }
      },
      {
        root: rootRef?.current ?? null,
        threshold
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, rootRef, onReveal, threshold]);
}
