import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import ProgressBar from "./ProgressBar.jsx";
import MetricPanel from "./MetricPanel.jsx";
import PostGameSidebar from "./PostGameSidebar.jsx";
import GameScene from "./GameScene.jsx";
import IntroGuide from "./IntroGuide.jsx";
import MarketResult from "./MarketResult.jsx";
import RealityReveal from "./RealityReveal.jsx";
import Quiz from "./Quiz.jsx";
import SourceSection from "./SourceSection.jsx";
import SceneVisual from "./SceneVisual.jsx";
import { gameScenes, initialMetrics, intro } from "../data/gameScenes.js";
import { getMarketResult } from "../data/marketResults.js";
import { useSceneParallax } from "../hooks/useSceneParallax.js";
import { useSceneReveal } from "../hooks/useSceneReveal.js";
import { useReducedMotion } from "../hooks/useReducedMotion.js";

const clamp = (value) => Math.min(Math.max(value, 0), 100);

function applyDeltas(metrics, deltas) {
  return Object.fromEntries(
    Object.entries(metrics).map(([key, value]) => [key, clamp(value + (deltas[key] ?? 0))])
  );
}

export default function GameShell() {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const introRef = useRef(null);
  const resultRef = useRef(null);
  const realityRef = useRef(null);
  const quizRef = useRef(null);
  const sourcesRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const [started, setStarted] = useState(false);
  const [metrics, setMetrics] = useState(initialMetrics);
  const [lastDeltas, setLastDeltas] = useState(null);
  const [currentScene, setCurrentScene] = useState(0);
  const [choices, setChoices] = useState({});
  const [decisionHistory, setDecisionHistory] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [realityOpened, setRealityOpened] = useState(false);
  const [quizUnlocked, setQuizUnlocked] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [postSection, setPostSection] = useState("result");
  const [unlockedEndingIds, setUnlockedEndingIds] = useState([]);

  const selectedByIndex = useMemo(() => {
    return gameScenes.map((scene) => choices[scene.id] ?? null);
  }, [choices]);

  const journeyProgress = useMemo(() => {
    const completedUnits =
      (started ? 1 : 0) +
      decisionHistory.length +
      (gameCompleted ? 1 : 0) +
      (realityOpened ? 1 : 0) +
      (quizUnlocked ? 1 : 0) +
      (quizCompleted ? 1 : 0);
    return Math.min(completedUnits / 9, 1);
  }, [decisionHistory.length, gameCompleted, quizCompleted, quizUnlocked, realityOpened, started]);

  const currentResult = useMemo(() => getMarketResult(metrics), [metrics]);

  useEffect(() => {
    if (!gameCompleted) return;
    setUnlockedEndingIds((ids) =>
      ids.includes(currentResult.id) ? ids : [...ids, currentResult.id]
    );
  }, [currentResult.id, gameCompleted]);

  const progressLabel = useMemo(() => {
    if (!started) return "Cửa vào thị trường";
    if (!gameCompleted) return `Ghế ${currentScene + 1}/5 · ${gameScenes[currentScene].role}`;
    if (!realityOpened) return "Market Result · chờ mở dữ liệu thật";
    if (!quizUnlocked) return "Reality Reveal · chờ bắt đầu quiz";
    if (!quizCompleted) return "Quiz · kiểm tra nhận diện cấu trúc";
    return "Hoàn thành mô phỏng";
  }, [currentScene, gameCompleted, quizCompleted, quizUnlocked, realityOpened, started]);

  const showGameMetrics = !gameCompleted;
  const showPostSidebar = gameCompleted;
  const hasLeftSidebar = showGameMetrics || showPostSidebar;

  useSceneParallax(introRef);

  const animateIntro = useCallback(() => {
    anime({
      targets: introRef.current?.querySelectorAll(".asset-entrance-wrapper"),
      opacity: [0, 1],
      translateY: reducedMotion ? [0, 0] : [40, 0],
      scale: reducedMotion ? [1, 1] : [0.94, 1],
      delay: anime.stagger(70),
      duration: reducedMotion ? 160 : 900,
      easing: "easeOutExpo"
    });
  }, [reducedMotion]);

  useSceneReveal(introRef, animateIntro, containerRef, 0.2);

  const stageKey = useMemo(() => {
    if (!started) return "intro";
    if (!gameCompleted) return `scene-${currentScene}`;
    return "post-game";
  }, [currentScene, gameCompleted, quizCompleted, quizUnlocked, realityOpened, started]);

  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    container.scrollTo({ top: 0, behavior: "auto" });

    if (reducedMotion) return;

    anime({
      targets: stage,
      opacity: [0, 1],
      translateY: [42, 0],
      scale: [0.985, 1],
      duration: 620,
      easing: "easeOutExpo"
    });
  }, [reducedMotion, stageKey]);

  const scrollTo = (ref) => {
    window.setTimeout(() => {
      const container = containerRef.current;
      const target = ref.current;
      if (!container || !target) return;
      container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    }, 80);
  };

  const scrollToPostSection = (section) => {
    window.setTimeout(() => {
      const container = containerRef.current;
      const target = container?.querySelector(`[data-post-section="${section}"]`);
      if (!container || !target) return;
      container.scrollTo({ top: target.offsetTop, behavior: "auto" });
    }, 120);
  };

  const startGame = () => {
    setStarted(true);
  };

  const resetGame = () => {
    setStarted(false);
    setMetrics(initialMetrics);
    setLastDeltas(null);
    setCurrentScene(0);
    setChoices({});
    setDecisionHistory([]);
    setGameCompleted(false);
    setRealityOpened(false);
    setQuizUnlocked(false);
    setQuizCompleted(false);
    setPostSection("result");
    requestAnimationFrame(() => containerRef.current?.scrollTo({ top: 0, behavior: "smooth" }));
  };

  const choose = (sceneIndex, choice) => {
    const scene = gameScenes[sceneIndex];
    if (choices[scene.id]) return;

    setChoices((value) => ({ ...value, [scene.id]: choice }));
    setMetrics((value) => applyDeltas(value, choice.deltas));
    setLastDeltas(choice.deltas);
    setDecisionHistory((value) => [
      ...value,
      {
        sceneId: scene.id,
        role: scene.role,
        choiceId: choice.id,
        choiceTitle: choice.title,
        consequence: choice.consequence
      }
    ]);
  };

  const continueScene = (sceneIndex) => {
    if (sceneIndex < gameScenes.length - 1) {
      const next = sceneIndex + 1;
      setCurrentScene(next);
      requestAnimationFrame(() => {
        document.querySelector(`[data-game-scene="${next}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }
    setGameCompleted(true);
    setPostSection("result");
    scrollTo(resultRef);
  };

  const navigatePostGame = (section) => {
    if (section === "sources" && !quizCompleted) return;
    if (section === "reality" || section === "quiz" || section === "sources") {
      setRealityOpened(true);
    }
    if (section === "quiz" || section === "sources") {
      setQuizUnlocked(true);
    }
    setPostSection(section);
    scrollToPostSection(section);
  };

  return (
    <div className={`app-shell${hasLeftSidebar ? "" : " app-shell--no-sidebar"}${showPostSidebar ? " app-shell--post-game" : ""}`} ref={containerRef}>
      <ProgressBar progress={journeyProgress} currentLabel={progressLabel} />
      {showGameMetrics ? <MetricPanel metrics={metrics} lastDeltas={lastDeltas} compact onReset={resetGame} /> : null}
      {showPostSidebar ? (
        <PostGameSidebar activeSection={postSection} quizCompleted={quizCompleted} onNavigate={navigatePostGame} onReset={resetGame} />
      ) : null}

      <main className="stage-shell" data-stage={stageKey} key={stageKey} ref={stageRef}>
        {!started ? (
          <section className="intro-screen scene-with-visual" ref={introRef}>
            <SceneVisual sceneKey="intro" eager />
            <div className="intro-copy">
              <p className="eyebrow">{intro.eyebrow}</p>
              <h1>{intro.headline}</h1>
              <p>{intro.body}</p>
              <IntroGuide />
              <div className="intro-actions">
                <button className="primary-cta" type="button" onClick={startGame}>
                  {intro.cta}
                </button>
                <button className="secondary-cta" type="button" onClick={resetGame}>
                  Chơi lại
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {started && !gameCompleted ? (
          <div data-game-scene={currentScene}>
            <GameScene
              scene={gameScenes[currentScene]}
              index={currentScene}
              isActive
              isLocked={false}
              selectedChoice={selectedByIndex[currentScene]}
              onChoose={choose}
              onContinue={() => continueScene(currentScene)}
            />
          </div>
        ) : null}

        {gameCompleted ? (
          <div data-post-section="result" ref={resultRef}>
            <MarketResult
              metrics={metrics}
              history={decisionHistory}
              unlockedEndingIds={unlockedEndingIds}
              onRevealReality={() => navigatePostGame("reality")}
            />
          </div>
        ) : null}

        {gameCompleted ? (
          <div data-post-section="reality" ref={realityRef}>
            <RealityReveal onStartQuiz={() => navigatePostGame("quiz")} />
          </div>
        ) : null}

        {gameCompleted ? (
          <div data-post-section="quiz" ref={quizRef}>
            <Quiz unlocked={gameCompleted} onComplete={() => setQuizCompleted(true)} />
          </div>
        ) : null}

        <div data-post-section="sources" ref={sourcesRef}>
          <SourceSection visible={quizCompleted} />
        </div>
      </main>
    </div>
  );
}
