export const initialMetrics = {
  sellerHealth: 50,
  buyerBenefit: 50,
  marketOpenness: 50,
  platformPower: 50
};

export const metricMeta = {
  sellerHealth: {
    label: "Sức khỏe người bán",
    shortLabel: "Người bán",
    description: "Lợi nhuận, khả năng tự chủ và sức sống của nhà bán."
  },
  buyerBenefit: {
    label: "Lợi ích người mua",
    shortLabel: "Người mua",
    description: "Giá cả, tiện lợi, lựa chọn và mức độ bảo vệ người mua."
  },
  marketOpenness: {
    label: "Độ mở thị trường",
    shortLabel: "Cạnh tranh",
    description: "Cạnh tranh, đa dạng và cơ hội tham gia của người bán nhỏ."
  },
  platformPower: {
    label: "Quyền lực nền tảng",
    shortLabel: "Nền tảng",
    description: "Khả năng kiểm soát hiển thị, phí và điều kiện tham gia."
  }
};

export const intro = {
  eyebrow: "Mô phỏng thị trường số",
  headline: "Bốn chiếc ghế. Một thị trường. Mỗi quyết định đều làm thay đổi cuộc chơi.",
  body:
    "Minh muốn bán áo thun; Lan muốn mua hàng hợp lý; nền tảng muốn tăng giao dịch; Nhà nước muốn thị trường phát triển nhưng vẫn bảo đảm cạnh tranh. Người chơi sẽ lần lượt ngồi vào từng vị trí.",
  cta: "Bước vào thị trường"
};

const scenes = [
  {
    id: "producer",
    sceneNumber: "01",
    role: "Người sản xuất",
    character: "Minh · Chủ một cửa hàng áo thun nhỏ",
    headline: "Bạn có sản phẩm — nhưng chưa có khách hàng",
    situation:
      "Minh ít vốn, website riêng chưa có traffic; TikTok Shop hỗ trợ hiển thị, thanh toán, vận chuyển và khuyến mại.",
    choices: [
      {
        id: "all-in-platform",
        title: "Đưa toàn bộ hoạt động lên TikTok Shop",
        deltas: { sellerHealth: 12, buyerBenefit: 6, marketOpenness: -8, platformPower: 14 },
        consequence:
          "Đơn hàng đến nhanh nhưng dữ liệu khách hàng, traffic và hiển thị đều nằm trong nền tảng. Minh có doanh thu nhưng chưa sở hữu quan hệ khách hàng."
      },
      {
        id: "hybrid-channel",
        title: "Vừa dùng TikTok Shop, vừa xây dựng kênh riêng",
        deltas: { sellerHealth: 7, buyerBenefit: 3, marketOpenness: 10, platformPower: 4 },
        consequence:
          "Tăng trưởng chậm hơn nhưng Minh xây được tệp khách hàng và kênh bán không hoàn toàn phụ thuộc nền tảng."
      },
      {
        id: "own-website",
        title: "Chỉ bán qua website riêng",
        deltas: { sellerHealth: -5, buyerBenefit: -4, marketOpenness: 6, platformPower: -6 },
        consequence:
          "Minh giữ quyền kiểm soát nhưng chi phí tìm khách cao và tăng trưởng chậm."
      }
    ]
  },
  {
    id: "consumer",
    sceneNumber: "02",
    role: "Người tiêu dùng",
    character: "Lan · Người tiêu dùng",
    headline: "Lan đang tìm sản phẩm — hay sản phẩm đang tìm đến Lan?",
    situation:
      "Lan đang xem video thì gặp livestream, đồng hồ đếm ngược và thông báo số lượng còn ít.",
    choices: [
      {
        id: "buy-now",
        title: "Mua ngay trước khi hết mã giảm giá",
        deltas: { sellerHealth: 8, buyerBenefit: 3, marketOpenness: -3, platformPower: 8 },
        consequence:
          "Giao dịch nhanh và giá thấp, nhưng quyết định xảy ra trước khi Lan so sánh và cân nhắc nhu cầu."
      },
      {
        id: "compare-shops",
        title: "So sánh nhiều cửa hàng trước khi mua",
        deltas: { sellerHealth: 2, buyerBenefit: 10, marketOpenness: 8, platformPower: 1 },
        consequence:
          "Tốn thời gian hơn nhưng người mua có lựa chọn và người bán nhỏ có cơ hội cạnh tranh."
      },
      {
        id: "outside-brand",
        title: "Tìm thương hiệu bên ngoài nền tảng",
        deltas: { sellerHealth: 6, buyerBenefit: 5, marketOpenness: 6, platformPower: -3 },
        consequence:
          "TikTok giúp phát hiện sản phẩm nhưng giao dịch diễn ra ngoài nền tảng."
      }
    ]
  },
  {
    id: "algorithm",
    sceneNumber: "03",
    role: "Hệ thống đề xuất",
    character: "Bạn · Người quản lý hệ thống đề xuất",
    headline: "Hàng nghìn sản phẩm đang chờ — bạn sẽ cho ai được xuất hiện?",
    situation:
      "Có quá nhiều sản phẩm cho một màn hình; người chơi phải thiết kế nguyên tắc phân phối lượt tiếp cận.",
    choices: [
      {
        id: "revenue-first",
        title: "Ưu tiên sản phẩm có khả năng tạo doanh thu cao nhất",
        deltas: { sellerHealth: 5, buyerBenefit: 5, marketOpenness: -10, platformPower: 15 },
        consequence:
          "Doanh thu tăng, nhưng cửa hàng dẫn đầu tiếp tục được ưu tiên và người mới khó xuất hiện."
      },
      {
        id: "new-sellers-quota",
        title: "Dành một phần lượt hiển thị cho cửa hàng mới",
        deltas: { sellerHealth: 4, buyerBenefit: 3, marketOpenness: 12, platformPower: 4 },
        consequence:
          "Doanh thu ngắn hạn tăng chậm hơn nhưng người mua thấy nhiều lựa chọn và người bán mới có cơ hội."
      },
      {
        id: "ads-first",
        title: "Ưu tiên những người bán trả phí quảng cáo",
        deltas: { sellerHealth: -4, buyerBenefit: -5, marketOpenness: -12, platformPower: 18 },
        consequence:
          "Nền tảng tăng doanh thu quảng cáo nhưng khả năng tiếp cận ngày càng phụ thuộc ngân sách."
      }
    ]
  },
  {
    id: "fees",
    sceneNumber: "04",
    role: "Chính sách phí",
    character: "Bạn · Bộ phận chính sách thương mại",
    headline: "Nền tảng cần tăng doanh thu — ai sẽ trả phần chi phí đó?",
    situation:
      "Chi phí vận hành, khuyến mại và hậu cần tăng; cần chọn chính sách phí.",
    choices: [
      {
        id: "flat-fee-rise",
        title: "Tăng phí đồng đều đối với tất cả người bán",
        deltas: { sellerHealth: -14, buyerBenefit: -4, marketOpenness: -10, platformPower: 14 },
        consequence:
          "Doanh thu nền tảng tăng ngay nhưng người bán nhỏ phải tăng giá hoặc rời thị trường."
      },
      {
        id: "tiered-fee",
        title: "Áp dụng mức phí theo quy mô người bán",
        deltas: { sellerHealth: 3, buyerBenefit: 2, marketOpenness: 9, platformPower: 6 },
        consequence:
          "Hệ thống phức tạp hơn nhưng người bán nhỏ có thời gian phát triển."
      },
      {
        id: "cut-subsidy",
        title: "Không tăng phí nhưng giảm mã giảm giá và hỗ trợ vận chuyển",
        deltas: { sellerHealth: -3, buyerBenefit: -8, marketOpenness: -2, platformPower: 2 },
        consequence:
          "Không tăng phí trực tiếp, nhưng nhu cầu mua giảm và chi phí được chuyển sang hình thức khác."
      }
    ]
  },
  {
    id: "regulation",
    sceneNumber: "05",
    role: "Nhà nước",
    character: "Bạn · Cơ quan quản lý thị trường",
    headline: "Thị trường đang tăng trưởng nhanh — có cần can thiệp không?",
    situation:
      "Người bán không hiểu lý do giảm hiển thị, khó khiếu nại khi bị khóa; người mua phản ánh quảng cáo gây hiểu nhầm và khuyến mại gây áp lực.",
    choices: [
      {
        id: "self-regulate",
        title: "Để nền tảng tự điều chỉnh",
        deltas: { sellerHealth: -4, buyerBenefit: -2, marketOpenness: -6, platformPower: 10 },
        consequence:
          "Thị trường phát triển nhanh nhưng người tham gia phải chấp nhận phần lớn quy tắc do nền tảng tự thiết lập."
      },
      {
        id: "transparency-appeal",
        title: "Yêu cầu minh bạch và thiết lập cơ chế khiếu nại",
        deltas: { sellerHealth: 7, buyerBenefit: 7, marketOpenness: 8, platformPower: -5 },
        consequence:
          "Nền tảng vẫn điều hành hệ thống nhưng phải giải thích và chịu giám sát."
      },
      {
        id: "strict-limits",
        title: "Áp dụng giới hạn chặt đối với phí và thuật toán",
        deltas: { sellerHealth: 5, buyerBenefit: 3, marketOpenness: 10, platformPower: -12 },
        consequence:
          "Quyền lực nền tảng giảm nhưng nền tảng có thể giảm hỗ trợ, khuyến mại và đầu tư."
      }
    ]
  }
];

const choiceAnalyses = {
  "all-in-platform": {
    market:
      "Doanh thu và tốc độ ra đơn tăng nhanh, nhưng quyền quyết định hiển thị, dữ liệu khách hàng và chi phí giao dịch tập trung vào nền tảng. Vì vậy sức khỏe người bán tăng trong ngắn hạn, còn độ mở thị trường giảm do người bán nhỏ dễ phụ thuộc một kênh.",
    theory:
      "Ở tr.68, người sản xuất được xác định là chủ thể cung cấp hàng hóa và hướng tới lợi nhuận tối đa. Lựa chọn này cho thấy Minh vẫn theo đuổi lợi nhuận, nhưng vai trò trung gian ở tr.69 không chỉ làm cầu nối mà còn chi phối điều kiện tiếp cận thị trường.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.68-69"
  },
  "hybrid-channel": {
    market:
      "Tăng trưởng có thể chậm hơn phương án dồn toàn lực vào nền tảng, nhưng rủi ro được phân tán. Minh vừa tận dụng lưu lượng của TikTok Shop, vừa giữ tệp khách hàng riêng, nhờ đó cạnh tranh không bị khóa vào một điểm kiểm soát duy nhất.",
    theory:
      "Tr.68 nhấn mạnh mục tiêu lợi nhuận của người sản xuất, còn tr.69 xem chủ thể trung gian là cầu nối giúp thị trường linh hoạt hơn. Phương án này giữ đúng chức năng cầu nối: trung gian hỗ trợ lưu thông, nhưng không thay thế toàn bộ quyền tự chủ của người sản xuất.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.68-69"
  },
  "own-website": {
    market:
      "Minh giữ quyền kiểm soát thương hiệu, dữ liệu và chính sách bán hàng, nhưng chi phí tìm khách cao hơn. Người mua cũng mất sự tiện lợi về thanh toán, vận chuyển và niềm tin nền tảng, nên lợi ích ngắn hạn của cả hai bên đều giảm.",
    theory:
      "Tr.69 cho rằng chủ thể trung gian giúp thị trường sống động và linh hoạt hơn. Khi loại bỏ trung gian, quan hệ mua bán vẫn có thể diễn ra nhưng chi phí kết nối tăng, làm quá trình lưu thông hàng hóa kém hiệu quả hơn.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  "buy-now": {
    market:
      "Giao dịch được kích hoạt nhanh, người bán và nền tảng đều hưởng lợi từ chuyển đổi tức thời. Tuy nhiên tín hiệu nhu cầu của Lan bị tác động bởi livestream, mã giảm giá và áp lực thời gian, nên lợi ích người mua chỉ tăng nhẹ, không phản ánh đầy đủ nhu cầu thật.",
    theory:
      "Tr.69 nêu người tiêu dùng định hướng sản xuất thông qua hành vi mua. Nếu hành vi mua bị thúc ép bởi thiết kế nền tảng, tín hiệu thị trường gửi về người sản xuất có thể bị lệch, khiến sản xuất chạy theo kích thích tiêu dùng hơn là nhu cầu bền vững.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  "compare-shops": {
    market:
      "Việc so sánh làm chậm quyết định mua nhưng tạo áp lực cạnh tranh về giá, chất lượng và dịch vụ. Người bán nhỏ có thêm cơ hội xuất hiện nếu họ cung cấp giá trị thật, còn người mua đưa ra tín hiệu nhu cầu rõ ràng hơn.",
    theory:
      "Theo tr.69, hành vi mua của người tiêu dùng có khả năng định hướng sản xuất. Khi Lan so sánh nhiều cửa hàng, người tiêu dùng trở thành chủ thể phản hồi thị trường tích cực, buộc người sản xuất cải thiện hàng hóa thay vì chỉ dựa vào thuật toán đẩy bán.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  "outside-brand": {
    market:
      "TikTok vẫn tạo điểm chạm ban đầu, nhưng giao dịch không hoàn toàn bị giữ trong nền tảng. Người mua có thêm quyền kiểm chứng thương hiệu, người bán có thể xây quan hệ trực tiếp, còn quyền lực nền tảng giảm vì không kiểm soát toàn bộ vòng giao dịch.",
    theory:
      "Tr.69 mô tả chủ thể trung gian là cầu nối giữa các chủ thể thị trường. Lựa chọn này giữ vai trò cầu nối ở mức phát hiện thông tin, đồng thời cho thấy người tiêu dùng vẫn có khả năng định hướng sản xuất bằng quyết định mua ở bên ngoài nền tảng.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  "revenue-first": {
    market:
      "Thuật toán ưu tiên doanh thu làm giao dịch tăng nhanh, nhưng lượt hiển thị tập trung vào nhóm đã mạnh. Người mới khó tiếp cận khách hàng, độ mở thị trường giảm và nền tảng chuyển từ vai trò kết nối sang vai trò phân bổ quyền được nhìn thấy.",
    theory:
      "Tr.69 xem trung gian là cầu nối làm thị trường linh hoạt hơn, đồng thời cảnh báo những loại hình trung gian không phù hợp chuẩn mực đạo đức. Khi thuật toán chỉ ưu tiên khả năng tạo doanh thu, cầu nối có nguy cơ trở thành bộ lọc thiên lệch.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  "new-sellers-quota": {
    market:
      "Dành không gian hiển thị cho cửa hàng mới có thể làm doanh thu ngắn hạn tăng chậm hơn, nhưng mở rộng nguồn cung và tạo cơ hội gia nhập thị trường. Người mua nhìn thấy nhiều lựa chọn hơn, còn người bán nhỏ có cơ hội chứng minh năng lực.",
    theory:
      "Phương án này gần với mô tả ở tr.69 về chủ thể trung gian làm thị trường sống động, linh hoạt hơn. Trung gian không chỉ tối đa hóa giao dịch hiện có, mà còn hỗ trợ quá trình gặp nhau giữa cung mới và cầu mới.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  "ads-first": {
    market:
      "Khi người bán trả phí được ưu tiên hiển thị, khả năng tiếp cận khách hàng phụ thuộc vào ngân sách hơn là chất lượng hàng hóa. Nền tảng tăng doanh thu quảng cáo, nhưng người bán nhỏ yếu đi và người mua có thể thấy ít lựa chọn khách quan hơn.",
    theory:
      "Tr.69 cảnh báo sự tồn tại của các loại hình trung gian không phù hợp chuẩn mực đạo đức. Nếu quyền xuất hiện trên thị trường bị mua bằng quảng cáo, trung gian không còn trung lập mà trở thành người đặt điều kiện tham gia.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  "flat-fee-rise": {
    market:
      "Tăng phí đồng đều giúp nền tảng cải thiện doanh thu ngay, nhưng chi phí bị chuyển sang người bán nhỏ và cuối cùng có thể chuyển tiếp sang giá bán. Thị trường có nguy cơ mất bớt nhà bán yếu vốn, làm cạnh tranh giảm.",
    theory:
      "Tr.69 đặt chủ thể trung gian vào vai trò hỗ trợ lưu thông hàng hóa. Khi trung gian áp điều kiện phí làm một nhóm chủ thể khó tham gia, vấn đề không còn chỉ là kết nối mà trở thành khuyết tật thị trường cần nhà nước chú ý theo tr.70.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69-70"
  },
  "tiered-fee": {
    market:
      "Phí theo quy mô làm chính sách phức tạp hơn, nhưng giảm áp lực cho người bán nhỏ và giữ số lượng chủ thể tham gia thị trường. Nền tảng vẫn có doanh thu, trong khi cấu trúc cạnh tranh được bảo vệ tốt hơn.",
    theory:
      "Tr.69 nhấn mạnh trung gian làm thị trường linh hoạt hơn. Một cấu trúc phí phân tầng thể hiện vai trò trung gian có điều tiết nội bộ: hỗ trợ lưu thông nhưng không đẩy toàn bộ gánh nặng lên nhóm sản xuất yếu thế.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  "cut-subsidy": {
    market:
      "Không tăng phí trực tiếp nhưng giảm mã giảm giá và hỗ trợ vận chuyển khiến chi phí chuyển sang người mua. Nhu cầu có thể giảm, người bán vẫn chịu áp lực doanh số, còn quyền lực nền tảng tăng nhẹ vì họ quyết định cách phân bổ ưu đãi.",
    theory:
      "Theo tr.69, người tiêu dùng định hướng sản xuất qua hành vi mua. Khi ưu đãi bị rút lại, hành vi mua thay đổi và kéo theo điều chỉnh sản xuất; đồng thời vai trò trung gian thể hiện ở khả năng điều khiển chi phí giao dịch.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  "self-regulate": {
    market:
      "Để nền tảng tự điều chỉnh giúp thị trường vận hành nhanh, nhưng rủi ro lệch quyền lực tăng. Người bán và người mua thiếu cơ chế giải thích, khiếu nại và bảo vệ, nên quyền lực nền tảng mở rộng thành quyền đặt luật chơi.",
    theory:
      "Tr.70 xác định nhà nước có vai trò quản lý và khắc phục khuyết tật thị trường. Nếu nhà nước đứng ngoài khi nền tảng kiểm soát hiển thị, phí và kỷ luật giao dịch, khuyết tật thị trường có thể tích tụ thay vì tự biến mất.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.70"
  },
  "transparency-appeal": {
    market:
      "Minh bạch và cơ chế khiếu nại không xóa vai trò điều hành của nền tảng, nhưng buộc quyền lực đó phải có giải trình. Người bán hiểu vì sao bị giảm hiển thị, người mua được bảo vệ tốt hơn, còn cạnh tranh có thêm nền tảng công bằng.",
    theory:
      "Tr.70 nhấn mạnh nhà nước quản lý và khắc phục khuyết tật thị trường. Đây là can thiệp theo hướng thiết lập luật chơi công khai, giúp các chủ thể thị trường vẫn hoạt động nhưng không bị chi phối bởi quyền lực nền tảng thiếu kiểm soát.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.70"
  },
  "strict-limits": {
    market:
      "Giới hạn chặt về phí và thuật toán làm quyền lực nền tảng giảm mạnh, đồng thời bảo vệ người bán nhỏ và cạnh tranh. Tuy vậy, nếu quá cứng, nền tảng có thể giảm hỗ trợ, khuyến mại hoặc đầu tư công nghệ, khiến lợi ích người mua chỉ tăng vừa phải.",
    theory:
      "Tr.70 cho thấy nhà nước cần khắc phục khuyết tật thị trường, nhưng vẫn phải quản lý để thị trường phát triển. Phương án này minh họa sự cân bằng khó: kiểm soát quyền lực nền tảng mà không làm tê liệt chức năng kết nối của trung gian.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69-70"
  }
};

export const gameScenes = scenes.map((scene) => ({
  ...scene,
  choices: scene.choices.map((choice) => ({
    ...choice,
    analysis: choiceAnalyses[choice.id]
  }))
}));
