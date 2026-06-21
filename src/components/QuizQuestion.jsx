import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function QuizQuestion({ question, selectedIndex, onAnswer }) {
  const explanationRef = useRef(null);
  const answered = selectedIndex !== null;
  const selectedIsCorrect = selectedIndex === question.correctIndex;
  const correctLetter = "ABCD"[question.correctIndex];
  const correctOption = question.options[question.correctIndex];

  useEffect(() => {
    if (!explanationRef.current) return;
    if (!answered) {
      explanationRef.current.style.height = "auto";
      explanationRef.current.style.opacity = 1;
      return;
    }
    const element = explanationRef.current;
    element.style.height = "auto";
    const height = element.scrollHeight;
    element.style.height = "0px";
    anime({
      targets: element,
      opacity: [0, 1],
      height: [0, height],
      duration: 400,
      easing: "easeOutQuad"
    });
  }, [answered, question.explanation]);

  return (
    <div className="quiz-question">
      <h2>{question.question}</h2>
      <div className="answers">
        {question.options.map((option, index) => {
          const correct = index === question.correctIndex;
          const wrong = answered && selectedIndex === index && !correct;
          return (
            <button
              type="button"
              key={option}
              className={`answer${answered && correct ? " is-correct" : ""}${wrong ? " is-wrong" : ""}`}
              disabled={answered}
              onClick={(event) => onAnswer(index, event.currentTarget)}
            >
              <span>{"ABCD"[index]}</span>
              {option}
            </button>
          );
        })}
      </div>
      <div className={`explanation${answered ? (selectedIsCorrect ? " explanation--correct" : " explanation--wrong") : ""}`} ref={explanationRef}>
        {!answered ? (
          "Chọn một đáp án để xem giải thích."
        ) : (
          <>
            <strong>{selectedIsCorrect ? "Bạn chọn đúng." : `Bạn chọn sai. Đáp án đúng là ${correctLetter}: ${correctOption}.`}</strong>
            <p>{question.explanation}</p>
            {question.reference ? <small>{question.reference}</small> : null}
          </>
        )}
      </div>
    </div>
  );
}
