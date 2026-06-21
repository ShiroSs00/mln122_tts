const navItems = [
  {
    id: "result",
    label: "Kết quả game",
    description: "Tổng kết cấu trúc thị trường do lựa chọn tạo ra."
  },
  {
    id: "reality",
    label: "Liên hệ thực tế",
    description: "Đối chiếu mô phỏng với TikTok Shop và lý thuyết."
  },
  {
    id: "quiz",
    label: "Quiz",
    description: "Kiểm tra lại vai trò trung gian và quyền lực nền tảng."
  },
  {
    id: "sources",
    label: "Nguồn",
    description: "Mở sau khi hoàn thành quiz."
  }
];

export default function PostGameSidebar({ activeSection, quizCompleted, onNavigate, onReset }) {
  return (
    <aside className="post-game-sidebar" aria-label="Điều hướng sau game">
      <div className="post-game-sidebar__head">
        <span>Post-game</span>
        <p>Phần game đã mở khóa. Có thể scroll tự do hoặc nhảy nhanh tới phân tích thực tế và quiz.</p>
        <button type="button" className="text-reset" onClick={onReset}>
          Chơi lại
        </button>
      </div>
      <div className="post-nav-list">
        {navItems.map((item) => {
          const disabled = item.id === "sources" && !quizCompleted;
          return (
            <button
              className={`post-nav-button${activeSection === item.id ? " post-nav-button--active" : ""}`}
              disabled={disabled}
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
            >
              <span>{item.label}</span>
              <small>{item.description}</small>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
