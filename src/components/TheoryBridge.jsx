import { theoryBridge } from "../data/realityData.js";

export default function TheoryBridge() {
  return (
    <section className="theory-bridge">
      <div className="section-heading">
        <p className="eyebrow">Theory Bridge</p>
        <h2>Từ lựa chọn trong game trở lại giáo trình</h2>
        <p>Game mô phỏng các quan hệ giữa bốn chủ thể thị trường trong Giáo trình Kinh tế Chính trị Mác-Lênin.</p>
      </div>
      <div className="theory-grid">
        {theoryBridge.map((item) => (
          <article className="theory-card" key={item.title}>
            <span>{item.page}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="bridge-conclusion">
        TikTok Shop là trung gian - nhưng không chỉ là trung gian.
      </div>
    </section>
  );
}
