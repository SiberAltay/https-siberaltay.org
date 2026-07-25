import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-panel"
    >
      {/* Tam ekran arkaplan görseli buraya gelecek: /public/hero-bg.jpg */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"
      />
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute inset-0 noise-vignette" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 font-mono text-xs tracking-[0.4em] text-cyan"
        >
          SİBER VATAN // SİSTEM MÜHENDİSLİĞİ TAKIMI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient text-6xl font-bold tracking-tight sm:text-8xl"
        >
          ALTAY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 max-w-xl text-balance text-base text-mist sm:text-lg"
        >
          Blue Team alanında uzmanlaşan, savunma odaklı siber güvenlik
          çalışmaları yürüten bir Siber Vatan takımı.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#hakkimizda"
            className="rounded-full border border-cyan/50 bg-cyan/10 px-6 py-3 text-sm font-medium text-cyan transition-colors hover:bg-cyan/20"
          >
            Bizi Tanıyın
          </a>
          <a
            href="#iletisim"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-white transition-colors hover:border-cyan/50"
          >
            İletişime Geç
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 z-10 text-mist"
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  );
}
