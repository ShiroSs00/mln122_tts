import { useCallback, useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import ChoiceCard from "./ChoiceCard.jsx";
import ConsequencePanel from "./ConsequencePanel.jsx";
import SceneVisual from "./SceneVisual.jsx";
import { useSceneReveal } from "../hooks/useSceneReveal.js";
import { useSceneParallax } from "../hooks/useSceneParallax.js";
import { useReducedMotion } from "../hooks/useReducedMotion.js";

export default function GameScene({
  scene,
  index,
  isActive,
  isLocked,
  selectedChoice,
  onChoose,
  onContinue
}) {
  const ref = useRef(null);
  const headlineRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useSceneParallax(ref);

  const animate = useCallback(() => {
    const assetWrappers = ref.current.querySelectorAll(".asset-entrance-wrapper");
    anime({
      targets: headlineRef.current,
      opacity: [0, 1],
      translateY: reducedMotion ? [0, 0] : [30, 0],
      easing: "easeOutExpo",
      duration: reducedMotion ? 160 : 700
    });
    anime({
      targets: ref.current.querySelectorAll(".scene-card, .choice-card"),
      opacity: [0, 1],
      scale: reducedMotion ? [1, 1] : [0.96, 1],
      delay: anime.stagger(80, { start: 150 }),
      easing: "easeOutExpo",
      duration: reducedMotion ? 160 : 650
    });
    anime({
      targets: assetWrappers,
      opacity: [0, 1],
      translateY: reducedMotion ? [0, 0] : [40, 0],
      scale: reducedMotion ? [1, 1] : [0.94, 1],
      delay: (element) => Number(element.dataset.entranceDelay ?? 0),
      easing: "easeOutExpo",
      duration: reducedMotion ? 160 : 900
    });
  }, [reducedMotion]);

  useSceneReveal(ref, animate, undefined, 0.4);

  useEffect(() => {
    if (!selectedChoice || !ref.current || reducedMotion) return;

    const activeTargets = ref.current.querySelectorAll(`[data-choice-reaction~="${selectedChoice.id}"]`);
    const mutedTargets = ref.current.querySelectorAll(`[data-choice-muted~="${selectedChoice.id}"]`);
    const fallbackTargets = activeTargets.length ? activeTargets : ref.current.querySelectorAll("[data-asset-layer='foreground']");

    anime({
      targets: fallbackTargets,
      scale: [1, 1.04, 1],
      duration: 360,
      easing: "easeOutQuad"
    });

    if (mutedTargets.length) {
      anime({
        targets: mutedTargets,
        translateX: [0, -6, 6, -3, 3, 0],
        opacity: [1, 0.72, 1],
        duration: 450,
        easing: "easeOutQuad"
      });
    }
  }, [selectedChoice, reducedMotion]);

  return (
    <section className={`game-scene scene-with-visual${isLocked ? " game-scene--locked" : ""}`} ref={ref}>
      <div className="scene-watermark">{scene.sceneNumber}</div>
      <SceneVisual sceneKey={scene.id} selectedChoiceId={selectedChoice?.id} />
      <div className="game-scene__content">
        <div className="game-scene__copy">
          <p className="eyebrow">{scene.role}</p>
          <div className="character-line">{scene.character}</div>
          <h2 ref={headlineRef}>{scene.headline}</h2>
          <p>{scene.situation}</p>
          {isLocked ? (
            <div className="scene-card locked-note">
              Hoàn thành quyết định trước đó để mở màn chơi này.
            </div>
          ) : null}
        </div>
        <div className="game-scene__choices">
          {scene.choices.map((choice) => (
            <ChoiceCard
              choice={choice}
              disabled={!isActive || Boolean(selectedChoice)}
              selected={selectedChoice?.id === choice.id}
              key={choice.id}
              onSelect={(nextChoice) => onChoose(index, nextChoice)}
            />
          ))}
          <ConsequencePanel choice={selectedChoice} />
          <button className="continue-button" type="button" disabled={!selectedChoice || !isActive} onClick={onContinue}>
            {index === 4 ? "Tính cấu trúc thị trường" : "Tiếp tục"}
          </button>
        </div>
      </div>
    </section>
  );
}
