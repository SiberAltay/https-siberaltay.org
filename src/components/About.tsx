import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

function Rack({ x, y, begin }: { x: number; y: number; begin: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="64" height="84" rx="6" stroke="rgba(147,197,253,0.35)" />
      {[10, 34, 58].map((rowY, i) => (
        <g key={rowY}>
          <rect x="8" y={rowY} width="48" height="16" rx="3" stroke="rgba(147,197,253,0.25)" />
          <line x1="14" y1={rowY + 8} x2="34" y2={rowY + 8} stroke="rgba(147,197,253,0.2)" />
          <circle cx="49" cy={rowY + 8} r="2" fill="#93c5fd">
            <animate
              attributeName="opacity"
              values="0.15;1;0.15"
              dur="1.8s"
              begin={`${begin}${i * 0.4}s`}
              repeatCount="indefinite"
            />
          </circle>
        </g>
      ))}
    </g>
  );
}

const wires = [
  { d: "M94 82 C150 110 160 162 208 206", dur: "2.6s", begin: "0s" },
  { d: "M100 342 C152 318 166 258 208 214", dur: "3.1s", begin: "0.6s" },
  { d: "M326 94 C272 122 256 166 212 206", dur: "2.9s", begin: "0.3s" },
  { d: "M318 334 C270 306 254 258 212 214", dur: "3.4s", begin: "0.9s" },
];

function ServerSchema() {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden
    >
      <Rack x={30} y={40} begin="0" />
      <Rack x={36} y={300} begin="0.5" />
      <Rack x={326} y={52} begin="0.2" />
      <Rack x={318} y={292} begin="0.8" />

      {wires.map((wire) => (
        <path
          key={wire.d}
          d={wire.d}
          stroke="rgba(147,197,253,0.28)"
          strokeWidth="1"
          strokeDasharray="3 7"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-40"
            dur="1.6s"
            repeatCount="indefinite"
          />
        </path>
      ))}

      {wires.map((wire) => (
        <circle key={`pulse-${wire.d}`} r="2.5" fill="#93c5fd">
          <animateMotion
            path={wire.d}
            dur={wire.dur}
            begin={wire.begin}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.15;0.85;1"
            dur={wire.dur}
            begin={wire.begin}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const planeX = useTransform(scrollYProgress, [0, 1], ["-20vw", "80vw"]);
  const planeRotate = useTransform(scrollYProgress, [0, 1], [-8, 6]);

  return (
    <section id="hakkimizda" ref={ref} className="relative overflow-hidden bg-paper py-28">
      <motion.img
        src="/plane.webp"
        alt=""
        style={{ x: planeX, rotate: planeRotate }}
        animate={{ y: [0, -10, 0] }}
        transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
        className="pointer-events-none absolute left-0 top-16 hidden w-64 opacity-90 sm:block lg:w-80"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,420px)_1fr]">
          <Reveal>
            <TiltCard className="group mx-auto w-full max-w-[420px]">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-ink shadow-[0_32px_64px_-32px_rgba(18,19,22,0.6)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,78,216,0.22),transparent_65%)]" />
                <ServerSchema />
                <img
                  src="/logomavi.png"
                  alt="Altay Takımı"
                  className="absolute left-1/2 top-1/2 z-10 w-[52%] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
                />
              </div>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-mono text-xs tracking-[0.4em] text-accent">HAKKIMIZDA</p>
            <h2 className="mt-4 font-serif text-3xl italic text-accent sm:text-4xl">
              Hakkımızda
            </h2>
            <p className="mt-4 max-w-2xl text-lg font-medium text-ink">
              Altay Takımı, Siber Vatan projesi kapsamında kurulan bir Blue
              Team siber güvenlik ekibidir.
            </p>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-body">
              <p>
                Yavuzlar Web Güvenliği ve Yazılım Takımı, Siber Vatan programı
                kapsamında Altay Takımı, siber vatan bünyesinde blue team ve
                yazılım geliştirme odaklı çalışan bir takımdır. Misyonumuz, her
                bir takım üyesini kendi alanında yetkin bir düzeye yükseltmek ve
                ülkemizin siber güvenlik sektöründeki yetenekli insan gücünü,
                Türkçe kaynakları ve yerli projeleri artırmak amacıyla
                çalışmaktır.
              </p>
              <p>
                Siber güvenlik alanındaki bilgi birikimimizi kullanarak
                çalışmakta ve ülkemizi uluslararası düzeyde güvenli bir dijital
                geleceğe taşıma hedefiyle yoğun çaba harcamaktayız.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
