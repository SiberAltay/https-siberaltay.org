import Reveal from "./Reveal";
import { ShieldCheck, Radar, Users } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Blue Team Odaklı",
    text: "Saldırı tespiti, olay müdahalesi ve savunma sistemleri üzerine derinlemesine çalışmalar yürütüyoruz.",
  },
  {
    icon: Radar,
    title: "Siber Vatan Kapsamında",
    text: "Ulusal siber güvenlik ekosistemine katkı sağlamak amacıyla Siber Vatan projesi altında faaliyet gösteriyoruz.",
  },
  {
    icon: Users,
    title: "Takım Ruhu",
    text: "Bilgiyi paylaşan, birlikte üreten ve sürekli gelişen bir sistem mühendisliği topluluğuyuz.",
  },
];

export default function About() {
  return (
    <section id="hakkimizda" className="relative overflow-hidden bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-cyan">HAKKIMIZDA</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
            Altay Takımı, Siber Vatan projesi kapsamında kurulan bir
            <span className="text-gradient"> Blue Team </span>
            siber güvenlik ekibidir.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">
            Sistem mühendisliği disiplini içerisinde; tehdit tespiti, izleme,
            güvenlik operasyonları ve savunma stratejileri geliştirme
            konularında uzmanlık çalışmaları yürütüyoruz.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-line bg-panel/60 p-6 transition-colors hover:border-cyan/40">
                <point.icon className="text-cyan" size={26} />
                <h3 className="mt-4 text-lg font-medium text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist">
                  {point.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
