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
    <footer id="iletisim" className="relative border-t border-line bg-ink py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-8 text-center">
            <span className="font-mono text-sm tracking-[0.4em] text-white">ALTAY</span>
            <p className="max-w-md text-sm text-mist">
              Siber Vatan projesi kapsamında Blue Team alanında uzmanlaşan
              sistem mühendisliği takımı.
            </p>

            <div className="flex items-center gap-5">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-line p-3 text-mist transition-colors hover:border-cyan/50 hover:text-cyan"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <p className="font-mono text-xs text-mist/70">
              © {new Date().getFullYear()} Altay Takımı — Siber Vatan
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
