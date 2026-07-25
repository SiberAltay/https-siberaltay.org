import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const illustrationScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative w-full bg-paper">
      <div className="px-[1cm] py-6 sm:py-8">
        <div className="relative aspect-[2000/1056] w-full overflow-hidden">
          <motion.img
            src="/hero_desktop.webp"
            alt=""
            style={{ scale: illustrationScale }}
            className="pointer-events-none absolute inset-0 h-full w-full object-contain"
          />

          {/* hero_desktop.webp'deki çelenk boşluğuna oturan logo */}
          <motion.img
            src="/logomavi.png"
            alt="Altay Takımı"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="absolute z-10 object-contain"
            style={{
              left: "50%",
              top: "13%",
              width: "8%",
              x: "-50%",
              y: "-50%",
            }}
          />

          <motion.div
            style={{ opacity: contentOpacity }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex items-center gap-3 font-serif text-xs italic tracking-[0.3em] text-accent sm:text-sm"
            >
              <img
                src="/sibervatan_siyah.png"
                alt="Siber Vatan"
                className="h-5 w-auto sm:h-6"
              />
              <span>— SİSTEM MÜHENDİSLİĞİ TAKIMI</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 max-w-4xl font-serif text-3xl font-semibold uppercase leading-[1.12] tracking-tight text-accent sm:text-5xl lg:text-6xl"
            >
              Siber Vatan için
              <br />
              Beraber Çalışalım
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 text-accent"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={18} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
