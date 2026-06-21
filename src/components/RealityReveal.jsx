import { useCallback, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { realityCards } from "../data/realityData.js";
import { realityCardAssets } from "../data/sceneAssets.js";
import { useSceneReveal } from "../hooks/useSceneReveal.js";
import { useSceneParallax } from "../hooks/useSceneParallax.js";
import { useReducedMotion } from "../hooks/useReducedMotion.js";
import SceneVisual from "./SceneVisual.jsx";
import TheoryBridge from "./TheoryBridge.jsx";

export default function RealityReveal({ onStartQuiz }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  useSceneParallax(ref);

  const animate = useCallback(() => {
    anime({
      targets: ref.current.querySelectorAll(".reality-card, .theory-card, .bridge-conclusion, .asset-entrance-wrapper"),
      opacity: [0, 1],
      translateY: reducedMotion ? [0, 0] : [22, 0],
      scale: reducedMotion ? [1, 1] : [0.98, 1],
      delay: anime.stagger(80),
      duration: reducedMotion ? 160 : 600,
      easing: "easeOutExpo"
    });
  }, [reducedMotion]);

  useSceneReveal(ref, animate, undefined, 0.25);

  return (
    <section className="reality-reveal scene-with-visual" id="reality" ref={ref}>
      <SceneVisual sceneKey="reality" />
      <div className="reality-reveal__content">
        <div className="section-heading">
          <p className="eyebrow">Reality Reveal</p>
          <h2>Những lựa chọn trong game là giả định. Nhưng vấn đề phía sau chúng là có thật.</h2>
        </div>
        <div className="reality-grid">
          {realityCards.map((card, index) => (
            <article className="reality-card" key={card.number}>
              <div className="reality-card__visual" aria-hidden="true">
                {(realityCardAssets[index] ?? []).map((src) => (
                  <img className="reality-card__asset" src={src} alt="" aria-hidden="true" draggable="false" loading="lazy" key={src} />
                ))}
              </div>
              <b>{card.number}</b>
              <span>{card.label}</span>
              <p>{card.analysis}</p>
            </article>
          ))}
        </div>
        <TheoryBridge />
        <button className="primary-cta" type="button" onClick={onStartQuiz}>
          Bắt đầu quiz
        </button>
      </div>
    </section>
  );
}
