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
    <span className={`text-[10px] font-medium tracking-widest uppercase px-3 py-1 rounded-full inline-block ${styles}`}>
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
      {/* Pause / slow-down visual: two soft vertical bars */}
      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(242,52%,94%)] to-[hsl(270,44%,92%)] shadow-sm flex-shrink-0">
        <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
          {/* Two breathing bars = "slow down" */}
          <rect x="12" y="10" width="8" height="28" rx="4" fill="hsl(242,52%,58%)" opacity="0.85"/>
          <rect x="28" y="10" width="8" height="28" rx="4" fill="hsl(270,44%,60%)" opacity="0.75"/>
        </svg>
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
      {/* Feeling visual: heart with emotion waves */}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(270,44%,94%)] to-[hsl(30,80%,94%)] shadow-sm flex-shrink-0">
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
            {/* Heart shape */}
            <path d="M24 38s-14-9.5-14-19a9 9 0 0118 0 9 9 0 0118 0c0 9.5-14 19-14 19z" fill="hsl(330,60%,72%)" opacity="0.85"/>
            {/* Small waves below to represent feeling/sensation */}
            <path d="M16 43 Q20 40 24 43 Q28 46 32 43" stroke="hsl(270,44%,60%)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7"/>
          </svg>
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
      {/* Fact visual: magnifying glass / observable evidence */}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(210,60%,94%)] to-[hsl(210,60%,90%)] shadow-sm flex-shrink-0">
          <svg width="42" height="42" viewBox="0 0 48 48" fill="none">
            {/* Magnifying glass */}
            <circle cx="20" cy="20" r="11" stroke="hsl(210,60%,45%)" strokeWidth="2.5" fill="hsl(210,60%,92%)" />
            <line x1="28.5" y1="28.5" x2="38" y2="38" stroke="hsl(210,60%,40%)" strokeWidth="3" strokeLinecap="round"/>
            {/* Checkmark inside lens */}
            <path d="M15 20l3.5 3.5L25 16" stroke="hsl(210,60%,45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
          <p className="text-[0.82rem] leading-relaxed text-[hsl(25,45%,32%)] mt-1">
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

      {/* Visual: tangled knot / blending illustration */}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(270,44%,94%)] to-[hsl(210,60%,93%)] shadow-sm flex-shrink-0">
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
            {/* Two overlapping circles representing blended feeling/fact */}
            <circle cx="18" cy="24" r="11" fill="hsl(270,44%,72%)" opacity="0.65"/>
            <circle cx="30" cy="24" r="11" fill="hsl(210,60%,62%)" opacity="0.65"/>
            {/* Overlap blend region hint */}
            <path d="M24 15 Q30 24 24 33 Q18 24 24 15" fill="hsl(242,52%,68%)" opacity="0.4"/>
            {/* Small X in center = confusion */}
            <path d="M22 22l4 4M26 22l-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.9"/>
          </svg>
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

      {/* Visual: two separated circles, fact glowing = clarity */}
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(210,60%,94%)] to-[hsl(242,52%,94%)] shadow-sm flex-shrink-0">
          <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
            {/* Feeling circle (faded, left) */}
            <circle cx="14" cy="24" r="9" fill="hsl(270,44%,74%)" opacity="0.5"/>
            <text x="14" y="27.5" textAnchor="middle" fontSize="5" fill="hsl(242,52%,32%)" fontFamily="Inter,sans-serif" opacity="0.8">feel</text>
            {/* Gap arrow between them */}
            <path d="M25 24h4" stroke="hsl(242,52%,60%)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M27 21.5l2.5 2.5-2.5 2.5" stroke="hsl(242,52%,60%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Fact circle (bright, right, glowing) */}
            <circle cx="37" cy="24" r="9" fill="hsl(210,60%,58%)" opacity="0.85" filter="url(#glow)"/>
            <defs>
              <filter id="glow"><feGaussianBlur stdDeviation="2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <text x="37" y="27.5" textAnchor="middle" fontSize="5" fill="white" fontFamily="Inter,sans-serif" opacity="0.95">fact</text>
          </svg>
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
