# Görsel Yerleri

Aşağıdaki dosyaları bu klasöre (`public/`) eklediğinde site otomatik olarak kullanacak:

- `logo.svg` (veya `.png`) — Navbar'daki takım logosu
- `hero-bg.jpg` — Ana (Hero) bölümün tam ekran arkaplan görseli
- `community-bg.jpg` — "Topluluğa Katıl" bölümünün tam ekran arkaplan görseli
- `favicon.svg` — Sekme ikonu (şu an Vite varsayılanı duruyor, değiştirilebilir)

Dosya adları farklıysa ilgili bileşenlerdeki (`src/components/Hero.tsx`,
`src/components/CommunityCTA.tsx`, `src/components/Navbar.tsx`) `url(...)`
ve `src=` referanslarını güncelle.
