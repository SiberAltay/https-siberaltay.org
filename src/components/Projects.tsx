import { Lock } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const projects = [
  {
    name: "AltayLab — Cenk Project",
    text: "Proje bilgileri gizlilik kapsamında paylaşılmamaktadır.",
    status: "Aktif",
    access: "Private",
  },
  {
    name: "KerneLab Project",
    text: "Proje bilgileri gizlilik kapsamında paylaşılmamaktadır.",
    status: "Aktif",
    access: "Private",
  },
];

export default function Projects() {
  return (
    <section id="projeler" className="relative bg-paper py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.4em] text-accent">ÇALIŞMALARIMIZ</p>
          <h2 className="mt-4 font-serif text-3xl italic text-accent sm:text-4xl">
            Projelerimiz
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-line">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.1}>
              <motion.div
                whileHover="hover"
                className="group flex flex-col justify-between gap-6 border-b border-line py-10 transition-colors hover:bg-panel/40 sm:flex-row sm:items-center sm:gap-4 sm:px-4"
              >
                <div>
                  <h3 className="font-serif text-3xl uppercase tracking-tight text-ink transition-colors group-hover:text-accent sm:text-5xl lg:text-6xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm text-body sm:text-base">{project.text}</p>
                </div>

                <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                  <span className="inline-flex overflow-hidden rounded-full text-xs">
                    <span className="bg-ink px-3 py-1 text-paper">Durum</span>
                    <span className="bg-accent/10 px-3 py-1 text-accent">{project.status}</span>
                  </span>
                  <span className="inline-flex overflow-hidden rounded-full text-xs">
                    <span className="bg-ink px-3 py-1 text-paper">Erişim</span>
                    <span className="bg-accent/10 px-3 py-1 text-accent">{project.access}</span>
                  </span>
                  <motion.span
                    variants={{ hover: { scale: 1.15 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mt-1 text-ink"
                  >
                    <Lock size={20} />
                  </motion.span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
