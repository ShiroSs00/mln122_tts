import { sources } from "../data/sources.js";

export default function SourceSection({ visible }) {
  if (!visible) return null;

  return (
    <section className="sources-section">
      <div className="section-heading">
        <p className="eyebrow">Nguồn tham khảo</p>
        <h2>Hồ sơ nguồn của mô phỏng</h2>
        <p>Các nguồn được dùng để nối mô phỏng quyết định với dữ liệu thị trường và lý thuyết giáo trình.</p>
      </div>
      <ol>
        {sources.map((source) => (
          <li key={source}>{source}</li>
        ))}
      </ol>
    </section>
  );
}
