import { motion } from "framer-motion";
import Reveal from "./Reveal";
import Counter from "./Counter";

const stats = [
  { value: 28, label: "Takım Üyesi" },
  { value: 2, label: "Proje" },
  { value: 2, label: "Tatbikat Çalışması" },
  { value: 3, label: "CTF Katılımı" },
  { value: 1, label: "Girişim" },
];

export default function Stats() {
  return (
    <section className="relative border-b border-line bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-center font-mono text-xs tracking-[0.4em] text-accent">
            RAKAMLARLA ALTAY
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 divide-x divide-line sm:grid-cols-3 md:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center px-2 py-4 text-center"
            >
              <Counter
                value={stat.value}
                className="font-mono text-4xl font-semibold text-ink sm:text-5xl"
              />
              <span className="mt-2 text-xs text-body sm:text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
