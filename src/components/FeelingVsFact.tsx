import { useState, useEffect, useRef } from "react";

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

// ─── Reusable label pill ──────────────────────────────────────────────────────
function Label({ text, type }: { text: string; type: "feeling" | "fact" }) {
  const base = "text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-2 inline-block";
  const styles =
    type === "feeling"
      ? "bg-[hsl(30,80%,93%)] text-[hsl(25,60%,42%)]"
      : "bg-[hsl(210,60%,93%)] text-[hsl(210,60%,36%)]";
  return <span className={`${base} ${styles}`}>{text}</span>;
}

// ─── CARD 1 ───────────────────────────────────────────────────────────────────
function Card1() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Ripple visual */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[hsl(242,52%,80%,0.2)] animate-ripple" />
        <div
          className="absolute inset-0 rounded-full bg-[hsl(242,52%,80%,0.12)] animate-ripple"
          style={{ animationDelay: "1.1s" }}
        />
        <div
          className="absolute inset-0 rounded-full bg-[hsl(242,52%,80%,0.08)] animate-ripple"
          style={{ animationDelay: "2.2s" }}
        />
        <div className="w-10 h-10 rounded-full bg-[hsl(242,52%,88%)] flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm0-10h2v8h-2z" fill="hsl(242,52%,45%)" />
          </svg>
        </div>
      </div>

      <h2 className="card-heading text-center">Let's slow this down.</h2>

      <p className="card-body text-center leading-[1.9]">
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
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-5">
        {/* Glowing pulsing orb */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-1">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 rounded-full bg-[hsl(270,44%,80%)] opacity-30 animate-pulse-orb" style={{ transform: "scale(1.3)" }} />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(270,44%,78%)] to-[hsl(242,52%,72%)] animate-pulse-orb shadow-md" />
          </div>
          <span className="text-[10px] tracking-wider text-[hsl(242,52%,42%)] font-medium uppercase">Feeling</span>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="card-heading">What is a feeling?</h2>
          <p className="card-body leading-[1.85]">
            A feeling is a body reaction.<br />
            It can include anxiety, guilt, fear, or urgency.<br />
            <br />
            Feelings are real.<br />
            But they are not proof.
          </p>
        </div>
      </div>

      <div className="card-note">
        "Anxiety is loud. Facts are quiet."
      </div>
    </div>
  );
}

// ─── CARD 3 ───────────────────────────────────────────────────────────────────
function Card3() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-5">
        {/* Stable solid circle */}
        <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-1">
          <div className="w-14 h-14 rounded-full bg-[hsl(210,60%,62%)] shadow-md" />
          <span className="text-[10px] tracking-wider text-[hsl(210,60%,36%)] font-medium uppercase">Fact</span>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="card-heading">What is a fact?</h2>
          <p className="card-body leading-[1.85]">
            A fact is something observable.<br />
            Something measurable.<br />
            Something that exists outside of fear.
          </p>
        </div>
      </div>

      <div className="card-highlight">
        A fact remains true even when anxiety changes.
      </div>
    </div>
  );
}

// ─── CARD 4 ───────────────────────────────────────────────────────────────────
function Card4({ mounted }: { mounted: boolean }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="card-heading text-center">A real example</h2>

      <div className="grid grid-cols-2 gap-3">
        {/* Feeling side */}
        <div
          className="rounded-2xl p-4 flex flex-col gap-2"
          style={{ background: "hsl(30,80%,96%)" }}
        >
          <Label text="Feeling" type="feeling" />
          <p
            className={`text-sm leading-relaxed text-[hsl(25,45%,32%)] ${mounted ? "animate-gentle-shake" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            "It feels like I might lose control."
          </p>
        </div>

        {/* Fact side */}
        <div
          className="rounded-2xl p-4 flex flex-col gap-2"
          style={{ background: "hsl(210,60%,96%)" }}
        >
          <Label text="Fact" type="fact" />
          <p className="text-sm leading-relaxed text-[hsl(210,45%,32%)]">
            "I have never lost control before."
          </p>
        </div>
      </div>

      <div className="card-note text-center">
        Feeling = prediction. &nbsp; Fact = evidence.
      </div>
    </div>
  );
}

// ─── CARD 5 ───────────────────────────────────────────────────────────────────
function Card5({ mounted }: { mounted: boolean }) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="card-heading text-center">A real example</h2>

      <div className="grid grid-cols-2 gap-3">
        <div
          className="rounded-2xl p-4 flex flex-col gap-2"
          style={{ background: "hsl(30,80%,96%)" }}
        >
          <Label text="Feeling" type="feeling" />
          <p
            className={`text-sm leading-relaxed text-[hsl(25,45%,32%)] ${mounted ? "animate-blur-clear" : "opacity-0"}`}
            style={{ animationDuration: "0.5s", animationDelay: "0.3s" }}
          >
            "If I had this thought, it must mean something about me."
          </p>
        </div>

        <div
          className="rounded-2xl p-4 flex flex-col gap-2"
          style={{ background: "hsl(210,60%,96%)" }}
        >
          <Label text="Fact" type="fact" />
          <p className="text-sm leading-relaxed text-[hsl(210,45%,32%)]">
            Thoughts happen automatically.<br />
            They are not intentions.
          </p>
        </div>
      </div>

      <div className="card-note text-center">A thought is not an action.</div>
    </div>
  );
}

// ─── CARD 6 ───────────────────────────────────────────────────────────────────
function Card6({ mounted }: { mounted: boolean }) {
  const [factGrown, setFactGrown] = useState(false);
  useEffect(() => {
    if (mounted) {
      const t = setTimeout(() => setFactGrown(true), 1000);
      return () => clearTimeout(t);
    }
  }, [mounted]);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="card-heading text-center">A real example</h2>

      <div className="grid grid-cols-2 gap-3">
        <div
          className="rounded-2xl p-4 flex flex-col gap-2"
          style={{ background: "hsl(30,80%,96%)" }}
        >
          <Label text="Feeling" type="feeling" />
          <p
            className="text-sm leading-relaxed text-[hsl(25,45%,32%)] font-semibold transition-all duration-700"
            style={{ fontSize: factGrown ? "0.875rem" : "1rem" }}
          >
            "It feels unsafe."
          </p>
        </div>

        <div
          className="rounded-2xl p-4 flex flex-col gap-2"
          style={{ background: "hsl(210,60%,96%)" }}
        >
          <Label text="Fact" type="fact" />
          <p
            className="text-sm leading-relaxed text-[hsl(210,45%,32%)] transition-all duration-700"
            style={{ fontSize: factGrown ? "1rem" : "0.75rem", opacity: factGrown ? 1 : 0.5 }}
          >
            "There is no actual evidence of danger right now."
          </p>
        </div>
      </div>

      <div className="card-note text-center">Fear does not equal threat.</div>
    </div>
  );
}

// ─── CARD 7 ───────────────────────────────────────────────────────────────────
function Card7({ mounted }: { mounted: boolean }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="card-heading text-center">What OCD does</h2>

      {/* Overlapping circles */}
      <div className="flex justify-center items-center h-20 relative">
        <div
          className={`absolute w-16 h-16 rounded-full bg-[hsl(270,44%,78%)] opacity-70 flex items-end justify-center pb-1 transition-all duration-1000 ${mounted ? "animate-circles-sep-l" : ""}`}
          style={{ left: "calc(50% - 28px)" }}
        >
          <span className="text-[9px] text-[hsl(242,52%,28%)] font-semibold tracking-wide">Feeling</span>
        </div>
        <div
          className={`absolute w-16 h-16 rounded-full bg-[hsl(210,60%,72%)] opacity-70 flex items-end justify-center pb-1 transition-all duration-1000 ${mounted ? "animate-circles-sep-r" : ""}`}
          style={{ left: "calc(50% - 12px)" }}
        >
          <span className="text-[9px] text-[hsl(210,52%,28%)] font-semibold tracking-wide">Fact</span>
        </div>
      </div>

      <p className="card-body text-center leading-[1.9]">
        OCD blends feeling and fact together.<br />
        <br />
        It says:<br />
        <em className="text-[hsl(242,52%,38%)]">'Because it feels scary, it must be true.'</em><br />
        <br />
        But fear is a sensation —<br />
        not a conclusion.
      </p>

      <div className="card-note text-center">
        You don't need to solve a feeling.
      </div>
    </div>
  );
}

// ─── CARD 8 ───────────────────────────────────────────────────────────────────
function Card8() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="card-heading text-center">A different response</h2>

      {/* Separated circles with glow */}
      <div className="flex justify-center items-center gap-6 h-20 relative">
        <div className="flex flex-col items-center gap-1">
          <div className="w-14 h-14 rounded-full bg-[hsl(270,44%,78%)] opacity-70" />
          <span className="text-[9px] text-[hsl(242,52%,38%)] font-semibold tracking-wide uppercase">Feeling</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div
            className="w-14 h-14 rounded-full bg-[hsl(210,60%,65%)] opacity-80"
            style={{ boxShadow: "0 0 22px 6px hsl(210,60%,72%,0.45)" }}
          />
          <span className="text-[9px] text-[hsl(210,52%,32%)] font-semibold tracking-wide uppercase">Fact</span>
        </div>
      </div>

      <p className="card-body text-center leading-[1.9]">
        Instead of proving the thought wrong,<br />
        try separating it:<br />
        <br />
        <span className="block mt-1 italic text-[hsl(242,52%,40%)]">'This is anxiety.'</span>
        <span className="block italic text-[hsl(242,52%,40%)]">'This is a feeling, not a fact.'</span>
        <br />
        You don't need to eliminate fear.<br />
        You only need to recognize it.
      </p>

      <div className="card-highlight text-center">
        The goal is not certainty.<br />
        The goal is perspective.
      </div>
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
        <div className="w-16 h-16 rounded-full bg-[hsl(242,52%,94%)] flex items-center justify-center animate-check-pop">
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

// ─── CARD WRAPPER ─────────────────────────────────────────────────────────────
const BUTTONS = [
  "I'm listening.",
  "Okay… I understand.",
  "I see the difference.",
  "That makes sense.",
  "Okay…",
  "I'm starting to see it.",
  "So what do I do?",
  "I can let feelings be feelings.",
];

export default function FeelingVsFact() {
  const [current, setCurrent] = useState(0); // 0-indexed
  const [animState, setAnimState] = useState<"in" | "out">("in");
  const [mountedCard, setMountedCard] = useState(true);
  const [done, setDone] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const progress = ((current + 1) / cards.length) * 100;

  function advance() {
    setAnimState("out");
    setMountedCard(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (current >= cards.length - 1) {
        setDone(true);
      } else {
        setCurrent((c) => c + 1);
        setAnimState("in");
        setMountedCard(true);
      }
    }, 310);
  }

  if (done) return <Completion />;

  const cardId = cards[current].id;
  const btnLabel = BUTTONS[current];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* ── Floating blur blobs ── */}
      <div
        className="pointer-events-none absolute w-72 h-72 rounded-full animate-float-blob"
        style={{
          background: "hsl(270,44%,84%,0.35)",
          filter: "blur(60px)",
          top: "-60px",
          left: "-40px",
        }}
      />
      <div
        className="pointer-events-none absolute w-96 h-96 rounded-full animate-float-blob-2"
        style={{
          background: "hsl(210,60%,82%,0.3)",
          filter: "blur(70px)",
          bottom: "-80px",
          right: "-60px",
        }}
      />
      <div
        className="pointer-events-none absolute w-56 h-56 rounded-full animate-float-blob-3"
        style={{
          background: "hsl(242,52%,82%,0.22)",
          filter: "blur(50px)",
          top: "30%",
          right: "10%",
        }}
      />

      {/* ── Progress bar ── */}
      <div className="w-full max-w-md mb-6 z-10">
        <div className="h-[2px] rounded-full bg-[hsl(242,52%,88%)] overflow-hidden">
          <div
            className="h-full rounded-full bg-[hsl(242,52%,48%)] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[11px] text-[hsl(242,52%,55%)] tracking-wide font-medium uppercase">
            Feeling vs Fact
          </span>
          <span className="text-[11px] text-[hsl(242,52%,55%)]">
            {current + 1} / {cards.length}
          </span>
        </div>
      </div>

      {/* ── Card ── */}
      <div
        className={`
          w-full max-w-md bg-white rounded-[20px] p-7 z-10
          ${animState === "in" ? "animate-card-in" : "animate-card-out"}
        `}
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        {cardId === 1 && <Card1 />}
        {cardId === 2 && <Card2 />}
        {cardId === 3 && <Card3 />}
        {cardId === 4 && <Card4 mounted={mountedCard} />}
        {cardId === 5 && <Card5 mounted={mountedCard} />}
        {cardId === 6 && <Card6 mounted={mountedCard} />}
        {cardId === 7 && <Card7 mounted={mountedCard} />}
        {cardId === 8 && <Card8 />}
      </div>

      {/* ── Button ── */}
      <button
        onClick={advance}
        className="activity-btn mt-7 z-10"
      >
        {btnLabel}
      </button>
    </div>
  );
}
