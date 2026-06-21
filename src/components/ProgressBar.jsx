export default function ProgressBar({ progress, currentLabel }) {
  const percent = Math.round(progress * 100);

  return (
    <aside className="progress-bar" aria-label="Tiến trình toàn bộ game">
      <div className="progress-bar__meta">
        <span>Tiến trình</span>
        <strong>{percent}%</strong>
      </div>
      <div className="progress-bar__track">
        <span style={{ width: `${percent}%` }} />
      </div>
      <small>{currentLabel}</small>
    </aside>
  );
}
