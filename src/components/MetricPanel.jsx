import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { metricMeta } from "../data/gameScenes.js";

const metricKeys = ["sellerHealth", "buyerBenefit", "marketOpenness", "platformPower"];

export default function MetricPanel({ metrics, lastDeltas, compact = false, hidden = false, onReset }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!lastDeltas || !panelRef.current) return;

    anime({
      targets: panelRef.current,
      scale: [1, 1.012, 1],
      duration: 360,
      easing: "easeOutQuad",
      complete: () => {
        if (panelRef.current) {
          panelRef.current.style.transform = "";
        }
      }
    });

    Object.keys(lastDeltas).forEach((key) => {
      const row = panelRef.current.querySelector(`[data-metric="${key}"]`);
      if (!row) return;
      anime({
        targets: row,
        backgroundColor: ["#FAF8F4", "#F5F0E8"],
        duration: 480,
        easing: "easeOutQuad"
      });
    });
  }, [lastDeltas]);

  return (
    <aside
      className={`metric-panel${compact ? " metric-panel--compact" : ""}${hidden ? " metric-panel--hidden" : ""}`}
      ref={panelRef}
      aria-hidden={hidden}
    >
      <div className="metric-panel__head">
        <div>
          <span>Market metrics</span>
          <p>Bốn chỉ số phản ánh cấu trúc thị trường do lựa chọn của bạn tạo ra.</p>
        </div>
        <button type="button" className="text-reset" onClick={onReset} tabIndex={hidden ? -1 : 0}>
          Chơi lại
        </button>
      </div>
      <div className="metric-list">
        {metricKeys.map((key) => {
          const value = metrics[key];
          const delta = lastDeltas?.[key] ?? 0;
          return (
            <div className="metric-row" data-metric={key} key={key}>
              <div className="metric-row__label">
                <strong>{compact ? metricMeta[key].shortLabel : metricMeta[key].label}</strong>
                <span className={delta > 0 ? "delta delta--up" : delta < 0 ? "delta delta--down" : "delta"}>
                  {delta > 0 ? `+${delta}` : delta < 0 ? delta : ""}
                </span>
              </div>
              <p>{metricMeta[key].description}</p>
              <div className="metric-row__track">
                <span style={{ width: `${value}%` }} />
              </div>
              <b>{value}</b>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
