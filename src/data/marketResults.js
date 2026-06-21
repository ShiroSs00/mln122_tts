export function getMarketResult(metrics) {
  if (metrics.platformPower >= 86 && metrics.marketOpenness <= 50) {
    return {
      id: "platform-wins",
      title: "Nền tảng thắng, hệ sinh thái thu hẹp",
      explanation:
        "Quyền lực tập trung vào nền tảng trong khi độ mở thị trường suy giảm. Người bán nhỏ khó chen vào, còn điều kiện tham gia ngày càng phụ thuộc vào một bộ quy tắc trung tâm."
    };
  }

  if (metrics.platformPower >= 78) {
    return {
      id: "dependent-growth",
      title: "Tăng trưởng lệ thuộc",
      explanation:
        "Doanh thu và tiện ích có thể tăng, nhưng tăng trưởng phụ thuộc vào quyết định của nền tảng. Khi chính sách đổi, người bán chịu rủi ro lớn."
    };
  }

  if (
    metrics.platformPower <= 66 &&
    metrics.marketOpenness >= 60 &&
    metrics.buyerBenefit >= 55
  ) {
    return {
      id: "strictly-regulated",
      title: "Thị trường được kiểm soát chặt",
      explanation:
        "Quyền lực nền tảng được giới hạn, cạnh tranh và lợi ích người mua được bảo vệ hơn. Đổi lại, nền tảng có thể giảm đầu tư hoặc ưu đãi."
    };
  }

  if (
    metrics.sellerHealth >= 52 &&
    metrics.buyerBenefit >= 52 &&
    metrics.marketOpenness >= 52 &&
    metrics.platformPower >= 40 &&
    metrics.platformPower <= 78
  ) {
    return {
      id: "balanced-market",
      title: "Thị trường cân bằng",
      explanation:
        "Người bán, người mua và nền tảng cùng có lợi tương đối, trong khi cạnh tranh vẫn còn không gian. Đây là cấu trúc khó đạt nhưng bền vững hơn."
    };
  }

  return {
    id: "contested-market",
    title: "Thị trường giằng co",
    explanation:
      "Không chỉ số nào áp đảo hoàn toàn. Đây là trạng thái nhiều đánh đổi: mỗi bên được một phần lợi ích nhưng xung đột quyền lực vẫn còn."
  };
}
