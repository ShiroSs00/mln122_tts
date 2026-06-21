import { useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { metricMeta } from "../data/gameScenes.js";

export default function ChoiceCard({ choice, disabled, selected, onSelect }) {
  const ref = useRef(null);

  const handleClick = () => {
    if (disabled) return;
    anime({
      targets: ref.current,
      scale: [1, 1.025, 1],
      duration: 320,
      easing: "easeOutQuad"
    });
    onSelect(choice);
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`choice-card${selected ? " choice-card--selected" : ""}`}
      disabled={disabled}
      onClick={handleClick}
    >
      <h3>{choice.title}</h3>
      <div className="choice-deltas" aria-label="Tác động chỉ số">
        {Object.entries(choice.deltas).map(([key, value]) => (
          <span className={value >= 0 ? "delta--up" : "delta--down"} key={key}>
            <strong>{metricMeta[key].shortLabel}</strong>
            <em>
              {value >= 0 ? "+" : ""}
              {value}
            </em>
          </span>
        ))}
      </div>
    </button>
  );
}
