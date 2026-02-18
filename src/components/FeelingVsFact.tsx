import { useState, useRef } from "react";

// ─── Card data ────────────────────────────────────────────────────────────────
const cards = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const BUTTONS = [
  "Got it.",
  "Okay, I understand.",
  "I see the difference.",
  "That makes sense.",
  "Okay…",
  "I'm starting to see it.",
  "I'd like to try.",
  "I can let feelings be feelings.",
];

// ─── Shared sub-components ────────────────────────────────────────────────────
function Label({ text, type }: { text: string; type: "feeling" | "fact" }) {
  const styles =
    type === "feeling"
      ? "bg-[hsl(30,80%,90%)] text-[hsl(25,60%,40%)]"
      : "bg-[hsl(210,60%,90%)] text-[hsl(210,60%,34%)]";
  return (
    <span className={`text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full inline-block ${styles}`}>
      {text}
    </span>
  );
}

function CardNote({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`mt-1 rounded-xl px-4 py-3 text-[0.82rem] italic leading-relaxed text-[hsl(242,35%,44%)] bg-[hsl(242,52%,97%)] border border-[hsl(242,52%,90%)] ${center ? "text-center" : ""}`}>
      {children}
    </div>
  );
}

function CardHighlight({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`mt-1 rounded-xl px-4 py-3 text-[0.82rem] italic leading-relaxed text-[hsl(210,45%,34%)] bg-[hsl(210,60%,95%)] border border-[hsl(210,60%,87%)] ${center ? "text-center" : ""}`}>
      {children}
    </div>
  );
}

// ─── CARD 1 ───────────────────────────────────────────────────────────────────
function Card1() {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {/* Ripple visual */}
      <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-[hsl(242,52%,84%,0.35)]" style={{ transform: "scale(1.7)" }} />
        <div className="absolute inset-0 rounded-full bg-[hsl(242,52%,84%,0.22)]" style={{ transform: "scale(2.3)" }} />
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(242,52%,88%)] to-[hsl(270,44%,84%)] flex items-center justify-center shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="hsl(242,52%,42%)" strokeWidth="1.8" />
            <path d="M12 8v4M12 16h.01" stroke="hsl(242,52%,42%)" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <h2 className="card-heading">Let's slow this down.</h2>

      <p className="card-body leading-[1.9]">
        When OCD shows up, feelings can feel like facts.<br />
        Anxiety feels urgent.<br />
        Thoughts feel dangerous.<br />
        <br />
        But feelings are signals —<br />
        not evidence.
      </p>
    </div>
  );
}

// ─── CARD 2 ───────────────────────────────────────────────────────────────────
function Card2() {
  return (
    <div className="flex flex-col gap-5">
      {/* Feeling orb visual */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-14 h-14 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-[hsl(270,44%,82%,0.4)]" style={{ transform: "scale(1.35)" }} />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(270,44%,78%)] to-[hsl(242,52%,72%)] shadow-md" />
          </div>
          <span className="text-[10px] tracking-widest text-[hsl(242,52%,42%)] font-semibold uppercase">Feeling</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-center">
        <h2 className="card-heading">What is a feeling?</h2>
        <p className="card-body leading-[1.85]">
          A feeling is a body reaction.<br />
          It can include anxiety, guilt, fear, or urgency.<br />
          <br />
          Feelings are real.<br />
          But they are not proof.
        </p>
      </div>

      <CardNote center>"Anxiety is loud. Facts are quiet."</CardNote>
    </div>
  );
}

// ─── CARD 3 ───────────────────────────────────────────────────────────────────
function Card3() {
  return (
    <div className="flex flex-col gap-5">
      {/* Stable circle visual */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(210,60%,62%)] to-[hsl(210,60%,52%)] shadow-md flex-shrink-0" />
          <span className="text-[10px] tracking-widest text-[hsl(210,60%,34%)] font-semibold uppercase">Fact</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-center">
        <h2 className="card-heading">What is a fact?</h2>
        <p className="card-body leading-[1.85]">
          A fact is something observable.<br />
          Something measurable.<br />
          Something that exists outside of fear.
        </p>
      </div>

      <CardHighlight center>A fact remains true even when anxiety changes.</CardHighlight>
    </div>
  );
}

// ─── CARD 4 ───────────────────────────────────────────────────────────────────
function Card4() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="card-heading text-center">A real example</h2>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl p-4 flex flex-col gap-2 bg-gradient-to-b from-[hsl(30,80%,97%)] to-[hsl(30,80%,93%)] border border-[hsl(30,60%,88%)]">
          <Label text="Feeling" type="feeling" />
          <p className="text-[0.82rem] leading-relaxed text-[hsl(25,45%,32%)] mt-1">
            "It feels like I might lose control."
          </p>
        </div>

        <div className="rounded-2xl p-4 flex flex-col gap-2 bg-gradient-to-b from-[hsl(210,60%,97%)] to-[hsl(210,60%,93%)] border border-[hsl(210,60%,86%)]">
          <Label text="Fact" type="fact" />
          <p className="text-[0.82rem] leading-relaxed text-[hsl(210,45%,32%)] mt-1">
            "I have never lost control before."
          </p>
        </div>
      </div>

      <CardNote center>Feeling = prediction. &nbsp;&nbsp; Fact = evidence.</CardNote>
    </div>
  );
}

// ─── CARD 5 ───────────────────────────────────────────────────────────────────
function Card5() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="card-heading text-center">A real example</h2>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl p-4 flex flex-col gap-2 bg-gradient-to-b from-[hsl(30,80%,97%)] to-[hsl(30,80%,93%)] border border-[hsl(30,60%,88%)]">
          <Label text="Feeling" type="feeling" />
          <p className="text-[0.82rem] leading-relaxed text-[hsl(25,45%,32%)] mt-1">
            "If I had this thought, it must mean something about me."
          </p>
        </div>

        <div className="rounded-2xl p-4 flex flex-col gap-2 bg-gradient-to-b from-[hsl(210,60%,97%)] to-[hsl(210,60%,93%)] border border-[hsl(210,60%,86%)]">
          <Label text="Fact" type="fact" />
          <p className="text-[0.82rem] leading-relaxed text-[hsl(210,45%,32%)] mt-1">
            Thoughts happen automatically.<br />
            They are not intentions.
          </p>
        </div>
      </div>

      <CardNote center>A thought is not an action.</CardNote>
    </div>
  );
}

// ─── CARD 6 ───────────────────────────────────────────────────────────────────
function Card6() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="card-heading text-center">A real example</h2>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl p-4 flex flex-col gap-2 bg-gradient-to-b from-[hsl(30,80%,97%)] to-[hsl(30,80%,93%)] border border-[hsl(30,60%,88%)]">
          <Label text="Feeling" type="feeling" />
          <p className="text-[0.82rem] leading-relaxed text-[hsl(25,45%,32%)] font-semibold mt-1">
            "It feels unsafe."
          </p>
        </div>

        <div className="rounded-2xl p-4 flex flex-col gap-2 bg-gradient-to-b from-[hsl(210,60%,97%)] to-[hsl(210,60%,93%)] border border-[hsl(210,60%,86%)]">
          <Label text="Fact" type="fact" />
          <p className="text-[0.82rem] leading-relaxed text-[hsl(210,45%,32%)] mt-1">
            "There is no actual evidence of danger right now."
          </p>
        </div>
      </div>

      <CardNote center>Fear does not equal threat.</CardNote>
    </div>
  );
}

// ─── CARD 7 ───────────────────────────────────────────────────────────────────
function Card7() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="card-heading text-center">What OCD does</h2>

      {/* Two overlapping circles visual */}
      <div className="flex justify-center items-center h-16">
        <div className="relative w-32 h-14 flex items-center justify-center">
          {/* Feeling circle (left) */}
          <div
            className="absolute w-14 h-14 rounded-full bg-[hsl(270,44%,76%)] opacity-75 flex items-center justify-center"
            style={{ left: "8px" }}
          >
            <span className="text-[8px] text-[hsl(242,52%,28%)] font-semibold tracking-wide leading-tight text-center">Feeling</span>
          </div>
          {/* Fact circle (right) */}
          <div
            className="absolute w-14 h-14 rounded-full bg-[hsl(210,60%,68%)] opacity-75 flex items-center justify-center"
            style={{ right: "8px" }}
          >
            <span className="text-[8px] text-[hsl(210,52%,24%)] font-semibold tracking-wide text-center">Fact</span>
          </div>
        </div>
      </div>

      <p className="card-body text-center leading-[1.9]">
        OCD blends feeling and fact together.<br />
        <br />
        It says:<br />
        <em className="text-[hsl(242,52%,38%)]">"Because it feels scary, it must be true."</em><br />
        <br />
        But fear is a sensation —<br />
        not a conclusion.
      </p>

      <CardNote center>You don't need to solve a feeling.</CardNote>
    </div>
  );
}

// ─── CARD 8 ───────────────────────────────────────────────────────────────────
function Card8() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="card-heading text-center">A different response</h2>

      {/* Separated circles with glow on Fact */}
      <div className="flex justify-center items-center gap-8 h-16">
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-[hsl(270,44%,78%)] opacity-70" />
          <span className="text-[8px] text-[hsl(242,52%,38%)] font-semibold tracking-wide uppercase">Feeling</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-12 h-12 rounded-full bg-[hsl(210,60%,60%)] opacity-85"
            style={{ boxShadow: "0 0 20px 8px hsl(210,60%,70%,0.45)" }}
          />
          <span className="text-[8px] text-[hsl(210,52%,30%)] font-semibold tracking-wide uppercase">Fact</span>
        </div>
      </div>

      <p className="card-body text-center leading-[1.9]">
        Instead of proving the thought wrong,<br />
        try separating it:<br />
        <br />
        <span className="block mt-1 italic text-[hsl(242,52%,40%)]">"This is anxiety."</span>
        <span className="block italic text-[hsl(242,52%,40%)]">"This is a feeling, not a fact."</span>
        <br />
        You don't need to eliminate fear.<br />
        You only need to recognise it.
      </p>

      <CardHighlight center>
        The goal is not certainty.<br />
        The goal is perspective.
      </CardHighlight>
    </div>
  );
}

// ─── COMPLETION ───────────────────────────────────────────────────────────────
function Completion() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 animate-fade-up">
      <div className="relative flex items-center justify-center w-24 h-24">
        <div className="absolute w-24 h-24 rounded-full border-2 border-[hsl(242,52%,72%)] animate-ring-expand" />
        <div
          className="absolute w-24 h-24 rounded-full border-2 border-[hsl(242,52%,72%)] animate-ring-expand"
          style={{ animationDelay: "0.4s" }}
        />
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(242,52%,94%)] to-[hsl(270,44%,92%)] flex items-center justify-center animate-check-pop shadow-md">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="hsl(242,52%,38%)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <p
        className="font-['Lora',Georgia,serif] text-xl text-[hsl(242,52%,32%)] text-center italic animate-fade-up"
        style={{ animationDelay: "0.3s" }}
      >
        Awareness builds freedom.
      </p>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function FeelingVsFact() {
  const [current, setCurrent] = useState(0);
  const [animState, setAnimState] = useState<"in" | "out">("in");
  const [done, setDone] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const progress = ((current + 1) / cards.length) * 100;

  function advance() {
    setAnimState("out");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (current >= cards.length - 1) {
        setDone(true);
      } else {
        setCurrent((c) => c + 1);
        setAnimState("in");
      }
    }, 310);
  }

  function goBack() {
    if (current === 0) return;
    setAnimState("out");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => c - 1);
      setAnimState("in");
    }, 310);
  }

  if (done) return <Completion />;

  const cardId = cards[current].id;
  const btnLabel = BUTTONS[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* ── Background gradient blobs ── */}
      <div
        className="pointer-events-none absolute w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(270,44%,84%,0.55) 0%, transparent 70%)",
          top: "-80px",
          left: "-60px",
        }}
      />
      <div
        className="pointer-events-none absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(210,60%,82%,0.45) 0%, transparent 70%)",
          bottom: "-100px",
          right: "-80px",
        }}
      />
      <div
        className="pointer-events-none absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(242,52%,82%,0.3) 0%, transparent 70%)",
          top: "35%",
          right: "5%",
        }}
      />

      {/* ── Progress bar ── */}
      <div className="w-full max-w-md mb-5 z-10">
        <div className="h-[2px] rounded-full bg-[hsl(242,52%,90%)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[hsl(242,52%,48%)] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[11px] text-[hsl(242,52%,52%)] tracking-wide font-medium uppercase">
            Feeling vs Fact
          </span>
          <span className="text-[11px] text-[hsl(242,52%,52%)]">
            {current + 1} / {cards.length}
          </span>
        </div>
      </div>

      {/* ── Card ── */}
      <div
        className={`
          w-full max-w-md z-10
          ${animState === "in" ? "animate-card-in" : "animate-card-out"}
        `}
        style={{ minHeight: "360px" }}
      >
        <div
          className="w-full rounded-[20px] p-7 flex flex-col justify-between"
          style={{
            background: "linear-gradient(145deg, hsl(0,0%,100%) 0%, hsl(242,52%,99%) 60%, hsl(270,44%,98%) 100%)",
            boxShadow: "0 8px 40px -8px hsl(242 52% 20% / 0.13), 0 2px 8px -2px hsl(242 52% 30% / 0.07)",
            minHeight: "360px",
          }}
        >
          {cardId === 1 && <Card1 />}
          {cardId === 2 && <Card2 />}
          {cardId === 3 && <Card3 />}
          {cardId === 4 && <Card4 />}
          {cardId === 5 && <Card5 />}
          {cardId === 6 && <Card6 />}
          {cardId === 7 && <Card7 />}
          {cardId === 8 && <Card8 />}
        </div>
      </div>

      {/* ── Navigation buttons ── */}
      <div className="flex items-center gap-4 mt-6 z-10">
        {/* Back button */}
        <button
          onClick={goBack}
          disabled={current === 0}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-[hsl(242,52%,80%)] bg-white text-[hsl(242,52%,42%)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:bg-[hsl(242,52%,96%)] hover:border-[hsl(242,52%,60%)] active:scale-95"
          aria-label="Go back"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Advance button */}
        <button
          onClick={advance}
          className="activity-btn"
        >
          {btnLabel}
        </button>
      </div>
    </div>
  );
}
