import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { UserRound } from "lucide-react";
import { teamMembers } from "../data/team";

const BUBBLE = 84;
const LOGO_BUBBLE = 128;
const SPACING = 108;

const palette: [string, string][] = [
  ["#1d4ed8", "#3b82f6"],
  ["#0e7490", "#22d3ee"],
  ["#4338ca", "#818cf8"],
  ["#0f766e", "#2dd4bf"],
  ["#7c3aed", "#a78bfa"],
  ["#b45309", "#f59e0b"],
  ["#be123c", "#fb7185"],
  ["#166534", "#4ade80"],
];

// İsim gizliliği: sadece ilk ve son harf görünür ("Berk Çiçek" -> "b****k").
function maskName(name: string) {
  const t = name.trim();
  if (!t) return "· · ·";
  const first = t[0].toLocaleLowerCase("tr");
  const last = t[t.length - 1].toLocaleLowerCase("tr");
  return `${first}****${last}`;
}

// Merkez etrafında petek düzeni: hücreler merkeze uzaklığa göre sıralanır,
// üye sayısı kadarı kullanılır.
function hexPositions(count: number) {
  const cells: { x: number; y: number }[] = [];
  const N = 3;
  for (let q = -N; q <= N; q++) {
    for (let r = Math.max(-N, -q - N); r <= Math.min(N, -q + N); r++) {
      if (q === 0 && r === 0) continue;
      cells.push({ x: SPACING * (q + r / 2), y: SPACING * 0.88 * r });
    }
  }
  cells.sort(
    (a, b) =>
      Math.hypot(a.x, a.y) - Math.hypot(b.x, b.y) ||
      Math.atan2(a.y, a.x) - Math.atan2(b.y, b.x),
  );
  return cells.slice(0, count);
}

interface BubbleProps {
  index: number;
  name: string;
  pos: { x: number; y: number };
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  active: boolean;
  onActivate: (index: number | null) => void;
}

function Bubble({ index, name, pos, mouseX, mouseY, active, onActivate }: BubbleProps) {
  const distance = useTransform([mouseX, mouseY] as const, ([x, y]: number[]) =>
    Math.hypot(x - pos.x, y - pos.y),
  );
  const scaleRaw = useTransform(distance, [0, BUBBLE, SPACING * 2.2], [1.32, 1.16, 1]);
  const scale = useSpring(scaleRaw, { stiffness: 260, damping: 22 });
  const [from, to] = palette[index % palette.length];

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}
    >
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          duration: 3.6 + (index % 5) * 0.5,
          delay: (index % 7) * 0.35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.button
          type="button"
          aria-label="Ekip üyesi"
          style={{ scale, width: BUBBLE, height: BUBBLE }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 + index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          onHoverStart={() => onActivate(index)}
          onHoverEnd={() => onActivate(null)}
          onFocus={() => onActivate(index)}
          onBlur={() => onActivate(null)}
          onTap={() => onActivate(active ? null : index)}
          className="relative flex cursor-pointer items-center justify-center rounded-full outline-none"
        >
          <span
            className="absolute inset-0 rounded-full opacity-90 shadow-[0_18px_36px_-18px_rgba(0,0,0,0.9)]"
            style={{ background: `radial-gradient(circle at 32% 28%, ${to}, ${from} 72%)` }}
          />
          <span className="absolute inset-0 rounded-full border border-white/20" />
          <UserRound className="relative z-10 text-white/85" size={30} strokeWidth={1.6} />

          <AnimatePresence>
            {active && (
              <motion.span
                initial={{ opacity: 0, y: 6, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute -bottom-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/80 px-3 py-1 font-mono text-xs tracking-widest text-white backdrop-blur"
              >
                {maskName(name)}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default function Team() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(10000);
  const mouseY = useMotionValue(10000);
  const [active, setActive] = useState<number | null>(null);
  const positions = hexPositions(teamMembers.length);

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-paper">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(29,78,216,0.28),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs tracking-[0.4em] text-blue-300"
        >
          EKİBİMİZ
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-serif text-3xl italic sm:text-4xl"
        >
          Perde arkasındaki takım
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/60"
        >
          Gizlilik bizim işimiz. Ekip üyelerimizin kimlikleri özel tutulur —
          balonların üzerine gelin, sadece maskelenmiş rumuzları görün.
        </motion.p>
      </div>

      <div
        ref={fieldRef}
        onMouseMove={(e) => {
          const rect = fieldRef.current?.getBoundingClientRect();
          if (!rect) return;
          mouseX.set(e.clientX - rect.left - rect.width / 2);
          mouseY.set(e.clientY - rect.top - rect.height / 2);
        }}
        onMouseLeave={() => {
          mouseX.set(10000);
          mouseY.set(10000);
        }}
        className="relative mx-auto mt-10 flex h-[560px] max-w-4xl items-center justify-center sm:h-[640px]"
      >
        <div className="relative scale-[0.58] sm:scale-75 lg:scale-100">
          {/* Merkez: Altay logosu */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-full"
              style={{ width: LOGO_BUBBLE, height: LOGO_BUBBLE }}
            >
              <span className="absolute -inset-3 rounded-full bg-accent/30 blur-xl" />
              <img
                src="/altaylogo.jpg"
                alt="Altay Takımı"
                className="relative h-full w-full rounded-full border border-white/25 object-cover shadow-[0_24px_48px_-20px_rgba(0,0,0,0.9)]"
              />
            </motion.div>
          </motion.div>

          {teamMembers.map((member, i) => (
            <Bubble
              key={i}
              index={i}
              name={member.name}
              pos={positions[i]}
              mouseX={mouseX}
              mouseY={mouseY}
              active={active === i}
              onActivate={setActive}
            />
          ))}
        </div>
      </div>

      <p className="relative mx-auto max-w-md px-6 text-center font-mono text-[11px] tracking-widest text-white/35">
        // isimler gizlilik gereği maskelenmiştir
      </p>
    </section>
  );
}
