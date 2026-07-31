import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, InstagramIcon } from "./BrandIcons";

const links: { href: string; label: string; route?: boolean }[] = [
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#odak-alanlari", label: "Odak Alanları" },
  { href: "/#projeler", label: "Projeler" },
  { href: "/ekibimiz", label: "Ekibimiz", route: true },
  { href: "/#iletisim", label: "Zamazingo" },
];

const socials = [
  { href: "https://github.com/SiberAltay", label: "GitHub", icon: GithubIcon },
  { href: "https://instagram.com/siber_altay", label: "Instagram", icon: InstagramIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-50 w-full border-b border-line bg-paper"
    >
      <div className="grid w-full grid-cols-3 items-center px-5 py-4 sm:px-8">
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => {
            const className =
              "group relative text-sm text-body transition-colors hover:text-ink";
            const underline = (
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            );
            return link.route ? (
              <Link key={link.href} to={link.href} className={className}>
                {link.label}
                {underline}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className={className}>
                {link.label}
                {underline}
              </a>
            );
          })}
        </nav>

        <Link to="/" className="flex flex-col items-center justify-self-center">
          <img
            src="/altaylogo.jpg"
            alt="Altay Takımı"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="mt-1 font-mono text-[10px] font-medium tracking-[0.35em] text-ink">
            ALTAY
          </span>
        </Link>

        <div className="flex items-center justify-self-end">
          <div className="hidden items-center gap-5 md:flex">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-body transition-colors hover:text-ink"
              >
                <Icon size={17} />
              </a>
            ))}
            <a
              href="https://www.sibervatan.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink px-4 py-2 text-xs font-medium tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              sibervatan.org
            </a>
          </div>

          <button
            className="text-ink md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-t border-line bg-paper px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {links.map((link) =>
              link.route ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-body hover:text-ink"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-body hover:text-ink"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
