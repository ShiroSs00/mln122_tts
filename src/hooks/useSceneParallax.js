import { useEffect } from "react";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function useSceneParallax(sceneRef) {
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    let frame = 0;
    let active = false;
    const scrollParent = scene.closest(".app-shell") ?? window;
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const tabletQuery = window.matchMedia("(max-width: 980px)");

    const update = () => {
      frame = 0;
      if (!active) return;

      const rect = scene.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      if (rect.bottom < -160 || rect.top > viewport + 160) return;

      const progress = clamp((viewport - rect.top) / (viewport + rect.height), 0, 1);
      const centeredProgress = progress - 0.5;
      const distanceFactor = mobileQuery.matches ? 0.45 : tabletQuery.matches ? 0.72 : 1;
      const assets = scene.querySelectorAll("[data-parallax-asset]");

      assets.forEach((asset) => {
        const depth = Number(asset.dataset.depth ?? 0.4);
        const horizontalDepth = Number(asset.dataset.horizontalDepth ?? depth * 0.35);
        const rotateAmount = Number(asset.dataset.rotate ?? 0);
        const startX = Number(asset.dataset.startX ?? 0);
        const startY = Number(asset.dataset.startY ?? 0);
        const scale = Number(asset.dataset.scale ?? 1);
        const direction = asset.dataset.reverse === "true" ? -1 : 1;
        const y = clamp(centeredProgress * depth * 180 * direction * distanceFactor, -140, 140);
        const x = clamp(centeredProgress * horizontalDepth * 80 * direction * distanceFactor, -60, 60);
        const rotation = clamp(centeredProgress * rotateAmount * direction, -8, 8);

        asset.style.transform = `translate3d(${startX + x}px, ${startY + y}px, 0) rotate(${rotation}deg) scale(${scale})`;
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        requestUpdate();
      },
      {
        root: scrollParent === window ? null : scrollParent,
        rootMargin: "180px 0px"
      }
    );

    observer.observe(scene);
    requestUpdate();
    scrollParent.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
      scrollParent.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [sceneRef]);
}
