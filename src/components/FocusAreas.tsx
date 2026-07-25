import { Boxes, MonitorCheck, Cpu, TerminalSquare } from "lucide-react";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const areas = [
  {
    icon: Boxes,
    title: "Active Directory",
    text: "Dizin hizmetleri güvenliği, yetkilendirme yapıları ve AD ortamlarına yönelik savunma çalışmaları.",
  },
  {
    icon: TerminalSquare,
    title: "Linux",
    text: "Linux sistemlerde sıkılaştırma, izleme ve güvenli yapılandırma pratikleri üzerine derinlemesine çalışma.",
  },
  {
    icon: MonitorCheck,
    title: "SOC",
    text: "Güvenlik operasyon merkezi süreçleri; günlük analizi, alarm yönetimi ve olay tespiti.",
  },
  {
    icon: Cpu,
    title: "Sistem Yazılımları",
    text: "Alt seviye sistem bileşenlerinin analizi ve güvenlik açısından değerlendirilmesi.",
  },
];

export default function FocusAreas() {
  return (
    <section id="odak-alanlari" className="relative bg-paper py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-accent">ODAK ALANLARI</p>
          <h2 className="mt-4 font-serif text-3xl italic text-accent sm:text-4xl">
            Uzmanlıklarımız
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {areas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 2) * 0.12}>
              <TiltCard className="group h-full">
                <div className="h-full rounded-lg border border-line bg-surface p-8 transition-shadow group-hover:border-ink/30 group-hover:shadow-[0_20px_40px_-26px_rgba(18,19,22,0.35)]">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <area.icon
                        className="text-accent transition-transform duration-300 group-hover:scale-110"
                        size={24}
                      />
                    </div>
                    <span className="font-mono text-xs text-body/40">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-medium text-ink">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{area.text}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
