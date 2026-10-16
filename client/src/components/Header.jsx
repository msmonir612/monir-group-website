
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isBangla = i18n.language?.startsWith("bn");

  const toggleLanguage = () => {
    i18n.changeLanguage(isBangla ? "en" : "bn");
  };

  const navItems = [
    { label: isBangla ? "হোম" : "Home", href: "#home" },
    { label: isBangla ? "আমাদের সম্পর্কে" : "About", href: "#about" },
    {
      label: isBangla ? "প্রতিষ্ঠানসমূহ" : "Organizations",
      href: "#organizations",
    },
    { label: isBangla ? "যোগাযোগ" : "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#07162e] text-lg font-extrabold text-[#d5a84b]">
            MG
          </span>

          <span>
            <span className="block text-lg font-extrabold tracking-wide text-[#07162e] sm:text-xl">
              MONIR GROUP
            </span>
            <span className="block text-xs text-slate-500">
              {isBangla ? "বিশ্বাস • ঐক্য • অগ্রগতি" : "Trust • Unity • Progress"}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-[#07162e] transition hover:bg-slate-100"
            aria-label="Change language"
          >
            {isBangla ? "EN" : "বাংলা"}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-[#07162e] lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
