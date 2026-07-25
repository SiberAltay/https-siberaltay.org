import { motion } from "framer-motion";

const items = Array.from({ length: 8 }, () => "sibervatan.org");

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-line bg-paper py-3">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center gap-10 whitespace-nowrap"
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-10 text-xs text-body">
            <span className="font-mono tracking-wide">{item}</span>
            <span className="text-accent">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
