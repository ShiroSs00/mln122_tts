import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import { getGrade, quizQuestions } from "../data/quiz.js";
import QuizQuestion from "./QuizQuestion.jsx";

export default function Quiz({ unlocked, onComplete }) {
  const [index, setIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);
  const scoreRef = useRef(null);

  useEffect(() => {
    if (!complete || !scoreRef.current) return;
    const counter = { value: 0 };
    anime({
      targets: counter,
      value: score,
      round: 1,
      duration: 900,
      easing: "easeOutCubic",
      update: () => {
        scoreRef.current.textContent = Math.round(counter.value);
      },
      complete: () => {
        scoreRef.current.textContent = score;
      }
    });
  }, [complete, score]);

  if (!unlocked) {
    return (
      <section className="quiz-section quiz-section--locked" id="quiz">
        <div className="quiz-panel">
          <p className="eyebrow">Quiz đang khóa</p>
          <h2>Hoàn thành mô phỏng và mở Reality Reveal để bắt đầu quiz.</h2>
        </div>
      </section>
    );
  }

  const question = quizQuestions[index];
  const answered = selectedIndex !== null;

  const answer = (answerIndex, button) => {
    if (answered) return;
    setSelectedIndex(answerIndex);
    const correct = answerIndex === question.correctIndex;
    if (correct) setScore((value) => value + 1);

    anime({
      targets: button,
      scale: correct ? [1, 1.03, 1] : [1, 1],
      translateX: correct ? [0, 0] : [0, -6, 6, -4, 4, 0],
      duration: correct ? 300 : 400,
      easing: "easeOutQuad"
    });
  };

  const next = () => {
    if (index < quizQuestions.length - 1) {
      setIndex((value) => value + 1);
      setSelectedIndex(null);
      return;
    }
    setComplete(true);
    onComplete?.();
  };

  const retry = () => {
    setIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setComplete(false);
  };

  return (
    <section className="quiz-section" id="quiz">
      <div className="quiz-panel">
        <div className="quiz-meter">
          <span style={{ width: `${complete ? 100 : (index / quizQuestions.length) * 100}%` }} />
        </div>
        <div className="quiz-panel__meta">
          <span>Câu {complete ? quizQuestions.length : index + 1}/5</span>
          <strong>{score}/5 điểm</strong>
        </div>
        {!complete ? (
          <>
            <QuizQuestion question={question} selectedIndex={selectedIndex} onAnswer={answer} />
            <div className="quiz-actions">
              <button className="continue-button" type="button" disabled={!answered} onClick={next}>
                {index === quizQuestions.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
              </button>
            </div>
          </>
        ) : (
          <div className="quiz-result">
            <div className="score-ring">
              <span ref={scoreRef}>0</span>
              <small>/5</small>
            </div>
            <div>
              <p className="eyebrow">Kết quả</p>
              <h2>{getGrade(score)}</h2>
              <p>
                Điểm số không chỉ để kiểm tra nhớ số liệu, mà để xem bạn có nhận diện được cấu trúc quyền lực giữa người bán, người mua, nền tảng và Nhà nước hay không.
              </p>
              <button className="continue-button" type="button" onClick={retry}>
                Làm lại
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
