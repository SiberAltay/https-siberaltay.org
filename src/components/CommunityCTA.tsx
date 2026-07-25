import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";

export default function CommunityCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.4]);

  return (
    <section
      id="topluluk"
      ref={ref}
      className="relative flex h-[80svh] w-full items-center justify-center overflow-hidden bg-panel"
    >
      {/* Tam ekran arkaplan görseli buraya gelecek: /public/community-bg.jpg */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 bg-[url('/community-bg.jpg')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-cyan">TOPLULUĞA KATIL</p>
          <h2 className="text-gradient mx-auto mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Siber güvenlik yolculuğuna Altay ile devam et
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-mist">
            Çalışmalarımızı, yayınlarımızı ve etkinliklerimizi sosyal
            medya hesaplarımızdan takip edebilirsin.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
