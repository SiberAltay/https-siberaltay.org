import { BookOpen } from "lucide-react";
import { GithubIcon, InstagramIcon, XIcon } from "./BrandIcons";
import Reveal from "./Reveal";

const socials = [
  { href: "https://instagram.com/siber_altay", label: "Instagram", icon: InstagramIcon },
  { href: "https://x.com/Siber_Altay", label: "X", icon: XIcon },
  { href: "https://github.com/SiberAltay", label: "GitHub", icon: GithubIcon },
  { href: "https://siberaltay.gitbook.io", label: "Gitbook", icon: BookOpen },
];

export default function Footer() {
  return (
    <footer id="iletisim" className="relative bg-paper pb-10 pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="font-serif text-3xl italic text-accent sm:text-4xl">
              Bize Ulaşın
            </h2>
            <p className="max-w-md text-sm text-body">
              Siber Vatan projesi kapsamında Blue Team alanında uzmanlaşan
              sistem mühendisliği takımı.
            </p>

            <div className="flex items-center gap-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-line p-3 text-body transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col items-center gap-5 border-t border-line pt-10">
          <span className="font-mono text-xs tracking-[0.3em] text-ink">ALTAY</span>
          <a
            href="https://www.sibervatan.org/"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-80"
          >
            <img
              src="/sibervatan_siyah.png"
              alt="Siber Vatan"
              className="h-6 w-auto"
            />
          </a>
          <p className="font-mono text-xs text-body">
            © {new Date().getFullYear()} Altay Takımı — Siber Vatan
          </p>
        </div>
      </div>
    </footer>
  );
}
