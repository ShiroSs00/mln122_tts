function driver(metrics, key, rule, impact, status = "neutral") {
  return {
    key,
    value: metrics[key],
    rule,
    impact,
    status
  };
}

export function getMarketResult(metrics) {
  if (metrics.platformPower >= 86 && metrics.marketOpenness <= 50) {
    return {
      id: "platform-wins",
      title: "Nền tảng thắng, hệ sinh thái thu hẹp",
      explanation:
        "Quyền lực tập trung vào nền tảng trong khi độ mở thị trường suy giảm. Người bán nhỏ khó chen vào, còn điều kiện tham gia ngày càng phụ thuộc vào một bộ quy tắc trung tâm.",
      reasoning: {
        title: "Quyền lực nền tảng vượt ngưỡng, độ mở thị trường bị nén",
        summary:
          "Ending này xuất hiện vì quyền lực nền tảng đã đạt ngưỡng chi phối, trong khi độ mở thị trường xuống thấp. Khi hai chỉ số này đi cùng nhau, nền tảng không chỉ làm trung gian kết nối mà bắt đầu quyết định ai được nhìn thấy, ai chịu phí và ai có điều kiện tham gia.",
        drivers: [
          driver(
            metrics,
            "platformPower",
            "Ngưỡng kích hoạt: >= 86",
            "Nền tảng có đủ quyền đặt phí, phân phối hiển thị và thay đổi điều kiện giao dịch; vì vậy kết quả nghiêng về vai trò người lập luật chơi.",
            "danger"
          ),
          driver(
            metrics,
            "marketOpenness",
            "Ngưỡng kích hoạt: <= 50",
            "Cạnh tranh bị thu hẹp; người bán nhỏ khó chen vào nếu không phụ thuộc thuật toán, quảng cáo hoặc chính sách của nền tảng.",
            "danger"
          ),
          driver(
            metrics,
            "sellerHealth",
            "Chỉ số hệ quả",
            "Người bán có thể vẫn ra đơn, nhưng sức khỏe này dễ chuyển thành lệ thuộc vì quan hệ khách hàng và lưu lượng nằm trong nền tảng.",
            "warning"
          ),
          driver(
            metrics,
            "buyerBenefit",
            "Chỉ số hệ quả",
            "Người mua còn hưởng tiện lợi và khuyến mại, nhưng lựa chọn thực tế bị lọc qua cơ chế hiển thị của nền tảng.",
            "warning"
          )
        ],
        theory:
          "Liên hệ giáo trình tr.69-70: chủ thể trung gian vốn là cầu nối giúp thị trường linh hoạt hơn, nhưng khi quyền lực trung gian gây méo mó cạnh tranh, Nhà nước cần quản lý để khắc phục khuyết tật thị trường."
      }
    };
  }

  if (metrics.platformPower >= 78) {
    return {
      id: "dependent-growth",
      title: "Tăng trưởng lệ thuộc",
      explanation:
        "Doanh thu và tiện ích có thể tăng, nhưng tăng trưởng phụ thuộc vào quyết định của nền tảng. Khi chính sách đổi, người bán chịu rủi ro lớn.",
      reasoning: {
        title: "Thị trường vẫn tăng, nhưng trục điều khiển nằm ở nền tảng",
        summary:
          "Ending này xuất hiện khi quyền lực nền tảng đã cao nhưng chưa làm thị trường đóng hẳn. Giao dịch có thể sôi động, người bán và người mua vẫn nhận lợi ích, nhưng tăng trưởng phụ thuộc mạnh vào quyết định phí, thuật toán và khuyến mại của nền tảng.",
        drivers: [
          driver(
            metrics,
            "platformPower",
            "Ngưỡng kích hoạt: >= 78",
            "Đây là chỉ số kéo ending chính: nền tảng đủ mạnh để điều phối tăng trưởng, nên mọi chủ thể còn lại phải phản ứng theo luật vận hành của nó.",
            "warning"
          ),
          driver(
            metrics,
            "sellerHealth",
            "Chỉ số duy trì tăng trưởng",
            "Người bán vẫn có doanh thu hoặc cơ hội ra đơn, nên thị trường chưa sụp đổ; vấn đề là sức khỏe này phụ thuộc vào kênh phân phối.",
            "good"
          ),
          driver(
            metrics,
            "buyerBenefit",
            "Chỉ số duy trì giao dịch",
            "Người mua còn thấy giá tốt, tiện lợi hoặc nhiều nội dung mua sắm, giúp vòng giao dịch tiếp tục chạy.",
            "good"
          ),
          driver(
            metrics,
            "marketOpenness",
            "Chỉ số cảnh báo",
            "Nếu độ mở không theo kịp quyền lực nền tảng, tăng trưởng sẽ nghiêng về nhóm đã thích nghi tốt với thuật toán và ngân sách quảng cáo.",
            "warning"
          )
        ],
        theory:
          "Liên hệ giáo trình tr.68-69: người sản xuất theo đuổi lợi nhuận, người tiêu dùng tạo tín hiệu mua, còn trung gian làm cầu nối. Ở ending này, cầu nối vẫn tạo lưu thông nhưng đồng thời làm các chủ thể phụ thuộc vào hạ tầng của nó."
      }
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
        "Quyền lực nền tảng được giới hạn, cạnh tranh và lợi ích người mua được bảo vệ hơn. Đổi lại, nền tảng có thể giảm đầu tư hoặc ưu đãi.",
      reasoning: {
        title: "Quyền lực nền tảng bị ghìm, cạnh tranh và người mua được bảo vệ",
        summary:
          "Ending này xuất hiện vì quyền lực nền tảng ở dưới ngưỡng chi phối, trong khi độ mở thị trường và lợi ích người mua đều vượt ngưỡng bảo vệ. Nghĩa là luật chơi đã ưu tiên minh bạch, cạnh tranh và quyền của người tham gia hơn là tăng trưởng bằng mọi giá.",
        drivers: [
          driver(
            metrics,
            "platformPower",
            "Ngưỡng kích hoạt: <= 66",
            "Nền tảng không còn đủ điểm để tự áp luật tuyệt đối; các quyết định về phí, hiển thị và khiếu nại bị giới hạn bởi cơ chế quản lý.",
            "good"
          ),
          driver(
            metrics,
            "marketOpenness",
            "Ngưỡng kích hoạt: >= 60",
            "Cạnh tranh còn đủ rộng: người bán mới và người bán nhỏ vẫn có cửa tham gia thay vì bị đẩy ra ngoài bởi phí hoặc thuật toán.",
            "good"
          ),
          driver(
            metrics,
            "buyerBenefit",
            "Ngưỡng kích hoạt: >= 55",
            "Người mua được hưởng lợi từ minh bạch, khiếu nại và lựa chọn ổn định hơn, nên kết quả không chỉ bảo vệ người bán mà còn bảo vệ phía cầu.",
            "good"
          ),
          driver(
            metrics,
            "sellerHealth",
            "Chỉ số hệ quả",
            "Người bán được bảo vệ khỏi quyền lực nền tảng quá mạnh, nhưng nếu quản lý quá cứng thì ưu đãi và hỗ trợ tăng trưởng có thể giảm.",
            "neutral"
          )
        ],
        theory:
          "Liên hệ giáo trình tr.70: Nhà nước có vai trò quản lý và khắc phục khuyết tật thị trường. Ending này minh họa sự can thiệp nhằm giữ cạnh tranh, bảo vệ người tiêu dùng và tránh để trung gian biến thành người tự đặt luật."
      }
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
        "Người bán, người mua và nền tảng cùng có lợi tương đối, trong khi cạnh tranh vẫn còn không gian. Đây là cấu trúc khó đạt nhưng bền vững hơn.",
      reasoning: {
        title: "Không chủ thể nào áp đảo, bốn vai trò cùng giữ được lợi ích",
        summary:
          "Ending này xuất hiện khi người bán, người mua và độ mở thị trường đều vượt mức ổn định, còn quyền lực nền tảng nằm trong vùng kiểm soát. Nền tảng vẫn làm trung gian hiệu quả, nhưng chưa đủ mạnh để thay thế luật chơi của thị trường.",
        drivers: [
          driver(
            metrics,
            "sellerHealth",
            "Ngưỡng kích hoạt: >= 52",
            "Người bán còn đủ lợi nhuận và khả năng tự chủ để tiếp tục sản xuất, đúng vai trò chủ thể cung cấp hàng hóa.",
            "good"
          ),
          driver(
            metrics,
            "buyerBenefit",
            "Ngưỡng kích hoạt: >= 52",
            "Người mua vẫn có giá trị từ lựa chọn, giá cả và tiện lợi; hành vi mua còn là tín hiệu định hướng sản xuất.",
            "good"
          ),
          driver(
            metrics,
            "marketOpenness",
            "Ngưỡng kích hoạt: >= 52",
            "Cạnh tranh còn đủ mở để người bán mới có cơ hội, tránh tình trạng thị trường chỉ thuộc về nhóm đã mạnh.",
            "good"
          ),
          driver(
            metrics,
            "platformPower",
            "Vùng cân bằng: 40-78",
            "Nền tảng có đủ quyền vận hành giao dịch nhưng chưa vượt sang trạng thái chi phối toàn bộ điều kiện tham gia.",
            "neutral"
          )
        ],
        theory:
          "Liên hệ giáo trình tr.68-70: người sản xuất, người tiêu dùng, chủ thể trung gian và Nhà nước cùng giữ vai trò riêng. Thị trường cân bằng khi trung gian làm cầu nối, còn Nhà nước giữ khung quản lý để các chủ thể không lấn át nhau."
      }
    };
  }

  return {
    id: "contested-market",
    title: "Thị trường giằng co",
    explanation:
      "Không chỉ số nào áp đảo hoàn toàn. Đây là trạng thái nhiều đánh đổi: mỗi bên được một phần lợi ích nhưng xung đột quyền lực vẫn còn.",
    reasoning: {
      title: "Các chỉ số kéo về nhiều hướng nên thị trường chưa có trật tự ổn định",
      summary:
        "Ending này xuất hiện khi bộ chỉ số không đạt trọn vẹn ngưỡng của các trạng thái rõ ràng hơn. Có mặt được lợi, có mặt bị nén lại; vì vậy kết quả là một thị trường còn tranh chấp quyền lực giữa người bán, người mua, nền tảng và quản lý nhà nước.",
      drivers: [
        driver(
          metrics,
          "sellerHealth",
          "Đọc cùng các chỉ số còn lại",
          "Người bán có thể còn sức sống, nhưng nếu độ mở thấp hoặc quyền lực nền tảng cao thì sức khỏe đó chưa đủ tạo thị trường cân bằng.",
          metrics.sellerHealth >= 52 ? "neutral" : "warning"
        ),
        driver(
          metrics,
          "buyerBenefit",
          "Đọc cùng các chỉ số còn lại",
          "Người mua có thể vẫn được lợi từ giá và tiện lợi, nhưng lợi ích này chưa chắc đi kèm cạnh tranh lành mạnh.",
          metrics.buyerBenefit >= 52 ? "neutral" : "warning"
        ),
        driver(
          metrics,
          "marketOpenness",
          "Ngưỡng cân bằng cần: >= 52",
          "Nếu độ mở thấp, thị trường thiếu không gian cho người bán mới; nếu độ mở cao nhưng các chỉ số khác yếu, thị trường vẫn chưa ổn định.",
          metrics.marketOpenness >= 52 ? "neutral" : "danger"
        ),
        driver(
          metrics,
          "platformPower",
          "Vùng dễ giằng co: chưa đủ/hoặc gần ngưỡng chi phối",
          "Quyền lực nền tảng chưa tạo ra ending thống trị tuyệt đối, nhưng vẫn đủ ảnh hưởng để làm các chủ thể còn lại phải điều chỉnh hành vi.",
          metrics.platformPower >= 70 ? "warning" : "neutral"
        )
      ],
      theory:
        "Liên hệ giáo trình tr.68-70: đây là lúc quan hệ giữa bốn chủ thể chưa cân bằng. Trung gian vẫn kết nối, người bán và người mua vẫn giao dịch, nhưng Nhà nước cần theo dõi để khuyết tật thị trường không chuyển thành quyền lực nền tảng quá mức."
    }
  };
}
