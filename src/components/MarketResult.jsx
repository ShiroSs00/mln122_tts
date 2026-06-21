import { useCallback, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { getMarketResult, marketResultCatalog } from "../data/marketResults.js";
import { metricMeta } from "../data/gameScenes.js";
import SceneVisual from "./SceneVisual.jsx";
import { useSceneParallax } from "../hooks/useSceneParallax.js";
import { useSceneReveal } from "../hooks/useSceneReveal.js";
import { useReducedMotion } from "../hooks/useReducedMotion.js";

const metricKeys = ["sellerHealth", "buyerBenefit", "marketOpenness", "platformPower"];

export default function MarketResult({ metrics, history, unlockedEndingIds = [], onRevealReality }) {
  const result = getMarketResult(metrics);
  const unlockedEndingSet = new Set([...unlockedEndingIds, result.id]);
  const unlockedCount = marketResultCatalog.filter((item) => unlockedEndingSet.has(item.id)).length;
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  useSceneParallax(ref);

  const animate = useCallback(() => {
    anime({
      targets: ref.current?.querySelectorAll(".asset-entrance-wrapper"),
      opacity: [0, 1],
      translateY: reducedMotion ? [0, 0] : [34, 0],
      scale: reducedMotion ? [1, 1] : [0.95, 1],
      delay: anime.stagger(80),
      duration: reducedMotion ? 160 : 820,
      easing: "easeOutExpo"
    });
  }, [reducedMotion]);

  useSceneReveal(ref, animate, undefined, 0.2);

  return (
    <section className="market-result scene-with-visual" id="market-result" ref={ref}>
      <SceneVisual sceneKey="result" />
      <div className="market-result__content">
        <div className="section-heading">
          <p className="eyebrow">Market Result</p>
          <h2>{result.title}</h2>
          <p>{result.explanation}</p>
        </div>

        <div className="result-grid">
          <div className="final-metrics">
            {metricKeys.map((key) => (
              <article className="final-metric" key={key}>
                <span>{metricMeta[key].label}</span>
                <b>{metrics[key]}</b>
                <div className="metric-row__track">
                  <i style={{ width: `${metrics[key]}%` }} />
                </div>
              </article>
            ))}
          </div>

          {result.reasoning ? (
            <article className="result-reasoning">
              <p className="eyebrow">Vì sao ra ending này?</p>
              <h3>{result.reasoning.title}</h3>
              <p>{result.reasoning.summary}</p>

              <div className="result-driver-list">
                {result.reasoning.drivers.map((item) => (
                  <div
                    className={`result-driver result-driver--${item.status}`}
                    key={`${result.id}-${item.key}`}
                  >
                    <div className="result-driver__head">
                      <span>{metricMeta[item.key].shortLabel}</span>
                      <b>{item.value}</b>
                    </div>
                    <small>{item.rule}</small>
                    <p>{item.impact}</p>
                  </div>
                ))}
              </div>

              <blockquote>{result.reasoning.theory}</blockquote>
            </article>
          ) : null}

          <article className="ending-collection">
            <div className="ending-collection__header">
              <div>
                <p className="eyebrow">Ending Collection</p>
                <h3>Các kết cục còn chờ mở khóa</h3>
              </div>
              <strong>{unlockedCount}/5</strong>
            </div>
            <p>
              Mỗi ending phản ánh một cấu trúc chỉ số khác nhau. Chơi lại và thử đổi vai
              trò lựa chọn để mở đủ 5 kết cục thị trường.
            </p>

            <div className="ending-collection__grid">
              {marketResultCatalog.map((item, index) => {
                const isCurrent = item.id === result.id;
                const isUnlocked = unlockedEndingSet.has(item.id);
                const cardClassName = [
                  "ending-card",
                  isUnlocked ? "ending-card--unlocked" : "ending-card--locked",
                  isCurrent ? "ending-card--current" : ""
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <article className={cardClassName} key={item.id}>
                    <div className="ending-card__meta">
                      <span>Ending {String(index + 1).padStart(2, "0")}</span>
                      <b>{isCurrent ? "Vừa mở khóa" : isUnlocked ? "Đã mở" : "Chờ mở khóa"}</b>
                    </div>
                    <h4>{item.title}</h4>
                    <p>{isUnlocked ? item.unlockedNote : item.hint}</p>
                  </article>
                );
              })}
            </div>
          </article>

          <div className="decision-timeline">
            <h3>Timeline lựa chọn</h3>
            {history.map((item, index) => (
              <article key={`${item.sceneId}-${item.choiceId}`}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <div>
                  <span>{item.role}</span>
                  <p>{item.choiceTitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button className="primary-cta" type="button" onClick={onRevealReality}>
          Kết thúc mô phỏng - Xem thị trường thực tế
        </button>
      </div>
    </section>
  );
}
