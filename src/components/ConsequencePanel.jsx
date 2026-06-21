import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function ConsequencePanel({ choice }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!choice || !ref.current) return;
    anime({
      targets: ref.current,
      opacity: [0, 1],
      translateY: [16, 0],
      duration: 420,
      easing: "easeOutQuad"
    });
  }, [choice]);

  if (!choice) {
    return (
      <div className="consequence consequence--empty">
        Chọn một phương án để xem hệ quả thị trường trước khi tiếp tục.
      </div>
    );
  }

  return (
    <div className="consequence" ref={ref}>
      <span>Hệ quả phân tích</span>
      <p className="consequence__summary">{choice.consequence}</p>
      {choice.analysis ? (
        <div className="consequence__analysis">
          <article>
            <b>Tác động thị trường</b>
            <p>{choice.analysis.market}</p>
          </article>
          <article>
            <b>Liên hệ giáo trình</b>
            <p>{choice.analysis.theory}</p>
            <small>{choice.analysis.reference}</small>
          </article>
        </div>
      ) : null}
    </div>
  );
}
