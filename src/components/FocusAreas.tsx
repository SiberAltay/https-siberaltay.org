import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, Bug, Eye, Lock, ServerCog, Siren } from "lucide-react";
import Reveal from "./Reveal";

const areas = [
  { icon: Eye, title: "Güvenlik İzleme", text: "Ağ ve sistem trafiğinin sürekli izlenmesi, anomali tespiti." },
  { icon: Siren, title: "Olay Müdahale", text: "Siber olaylara hızlı ve etkili müdahale süreçleri." },
  { icon: Activity, title: "Tehdit İstihbaratı", text: "Güncel tehditlerin analizi ve proaktif savunma." },
  { icon: Lock, title: "Güvenlik Sertleştirme", text: "Sistem ve altyapı bileşenlerinin güvenlik seviyesini artırma." },
  { icon: ServerCog, title: "SOC Operasyonları", text: "Güvenlik operasyon merkezi süreçlerinin geliştirilmesi." },
  { icon: Bug, title: "Zafiyet Yönetimi", text: "Zafiyetlerin tespiti, önceliklendirilmesi ve giderilmesi." },
];

function ParallaxCard({ area, index }: { area: (typeof areas)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.3, 1, 1, 0.3]);

  return (
    <motion.div ref={ref} style={{ scale, opacity }}>
      <Reveal delay={(index % 3) * 0.1}>
        <div className="group h-full rounded-2xl border border-line bg-panel-light/50 p-7 transition-colors hover:border-cyan/50">
          <area.icon className="text-cyan transition-transform duration-300 group-hover:scale-110" size={28} />
          <h3 className="mt-5 text-lg font-medium text-white">{area.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mist">{area.text}</p>
        </div>
      </Reveal>
    </motion.div>
  );
}

export default function FocusAreas() {
  return (
    <section id="odak-alanlari" className="relative bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-cyan">ODAK ALANLARI</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            Savunma hattının her katmanında çalışıyoruz
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <ParallaxCard key={area.title} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
