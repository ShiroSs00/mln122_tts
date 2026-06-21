export const quizQuestions = [
  {
    question: "Vai trò trung gian rõ nhất là gì?",
    options: [
      "Tự đặt toàn bộ luật thị trường",
      "Kết nối người bán với người mua và hỗ trợ giao dịch",
      "Thay nhà nước điều tiết cạnh tranh",
      "Buộc người bán chỉ dùng một kênh"
    ],
    correctIndex: 1,
    explanation:
      "Vai trò trung gian rõ nhất là cầu nối giữa người bán và người mua, hỗ trợ giao dịch và làm thị trường linh hoạt hơn.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  {
    question: "Điều gì khiến nền tảng không còn là trung gian thụ động?",
    options: [
      "Có giao diện đẹp hơn",
      "Có nhiều video giải trí",
      "Kiểm soát lượt hiển thị, phí và điều kiện tham gia",
      "Có nhiều người tiêu dùng trẻ"
    ],
    correctIndex: 2,
    explanation:
      "Khi nền tảng kiểm soát hiển thị, phí và điều kiện tham gia, nó đã vượt khỏi vai trò trung gian thụ động và tham gia thiết kế luật chơi thị trường.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.69"
  },
  {
    question: "42% thị phần cho phép kết luận gì?",
    options: [
      "Chắc chắn đã độc quyền",
      "Không có ảnh hưởng gì",
      "Có vị thế lớn nhưng cần thêm dữ liệu để kết luận độc quyền",
      "Nhà bán hoàn toàn tự chủ"
    ],
    correctIndex: 2,
    explanation:
      "42% là dấu hiệu vị thế lớn, nhưng kết luận độc quyền cần thêm dữ liệu về rào cản gia nhập, hành vi cạnh tranh và khả năng thay thế.",
    reference: "Liên hệ số liệu YouNet ECI với vai trò Nhà nước, tr.70"
  },
  {
    question: "Rủi ro khi phụ thuộc gần như toàn bộ doanh thu vào một nền tảng?",
    options: [
      "Mất khả năng thương lượng khi chính sách thay đổi",
      "Luôn giảm được chi phí",
      "Không cần quan tâm thuật toán",
      "Không còn cần người tiêu dùng"
    ],
    correctIndex: 0,
    explanation:
      "Khi doanh thu phụ thuộc vào một nền tảng, thay đổi về phí, hiển thị hoặc khóa tài khoản có thể tác động trực tiếp tới người bán.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.68-69"
  },
  {
    question: "Biện pháp phù hợp với vai trò Nhà nước?",
    options: [
      "Cấm mọi nền tảng thương mại điện tử",
      "Để nền tảng tự đặt luật hoàn toàn",
      "Minh bạch, bảo vệ cạnh tranh và cơ chế khiếu nại",
      "Chỉ trợ giá cho nền tảng lớn"
    ],
    correctIndex: 2,
    explanation:
      "Vai trò nhà nước là khắc phục khuyết tật thị trường bằng minh bạch, bảo vệ cạnh tranh và cơ chế khiếu nại công bằng.",
    reference: "Giáo trình KTCT Mác-Lênin (2021), tr.70"
  }
];

export function getGrade(score) {
  if (score <= 2) return "Bạn đang nhìn thị trường từ một phía.";
  if (score <= 4) return "Bạn đã nhận diện được sự đánh đổi trong thị trường số.";
  return "Bạn đã nhìn được toàn bộ cấu trúc thị trường.";
}
