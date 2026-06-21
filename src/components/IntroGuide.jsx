import { metricMeta } from "../data/gameScenes.js";

const playSteps = [
  "Người chơi lần lượt ngồi vào 5 vị trí: người sản xuất, người tiêu dùng, hệ thống đề xuất, chính sách phí và nhà nước.",
  "Mỗi chương chỉ được chọn một phương án. Sau khi chọn, chỉ số thị trường đổi ngay và nút tiếp tục mới mở.",
  "Kết thúc 5 chương, nhóm so sánh thị trường do người chơi tạo ra với dữ liệu TikTok Shop thực tế."
];

const metricGuide = [
  {
    key: "sellerHealth",
    effect: "Tăng khi người bán có lợi nhuận, kênh bán và khả năng tự chủ tốt hơn; giảm khi phí, phụ thuộc nền tảng hoặc chi phí tìm khách làm họ yếu đi."
  },
  {
    key: "buyerBenefit",
    effect: "Tăng khi người mua có giá hợp lý, nhiều lựa chọn và bảo vệ tốt; giảm khi bị thúc ép mua nhanh, thiếu thông tin hoặc ít khả năng so sánh."
  },
  {
    key: "marketOpenness",
    effect: "Tăng khi người bán nhỏ còn cơ hội xuất hiện và cạnh tranh; giảm khi thị trường nghiêng về người bán lớn, quảng cáo trả phí hoặc một kênh duy nhất."
  },
  {
    key: "platformPower",
    effect: "Tăng nghĩa là nền tảng kiểm soát mạnh hơn về hiển thị, phí và luật chơi; giảm khi quyền lực đó được phân tán, minh bạch hoặc chịu giám sát."
  }
];

export default function IntroGuide() {
  return (
    <div className="intro-guide" aria-label="Hướng dẫn mô phỏng">
      <article className="intro-guide__card intro-guide__card--context">
        <span>Bối cảnh</span>
        <p>
          TikTok Shop không chỉ là nơi gặp nhau giữa người bán và người mua. Trong mô phỏng này, nền tảng có thể
          trở thành chủ thể kinh doanh và dần đặt ra luật chơi cho thị trường số.
        </p>
      </article>

      <article className="intro-guide__card">
        <span>Cách chơi</span>
        <ol>
          {playSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </article>

      <article className="intro-guide__card intro-guide__card--metrics">
        <span>Cách đọc chỉ số</span>
        <div className="intro-metric-list">
          {metricGuide.map((item) => (
            <div className="intro-metric" key={item.key}>
              <b>{metricMeta[item.key].shortLabel}</b>
              <p>{item.effect}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
