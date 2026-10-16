
import { useState } from "react";
import { Link } from "react-router-dom";

const EnterpriseHeader = ({
  language = "bn",
  onLanguageChange,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems =
    language === "bn"
      ? [
          ["হোম", "#home"],
          ["পণ্যসমূহ", "#products"],
          ["আমাদের সম্পর্কে", "#about"],
          ["যোগাযোগ", "#contact"],
        ]
      : [
          ["Home", "#home"],
          ["Products", "#products"],
          ["About Us", "#about"],
          ["Contact", "#contact"],
        ];

  const isBangla = language === "bn";

  const toggleLanguage = () => {
    onLanguageChange?.(isBangla ? "en" : "bn");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          to="/m-s-monir-enterprise"
          className="flex min-w-0 items-center gap-3"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-800 text-2xl font-black text-white">
            M
          </div>

          <div className="min-w-0">
            <p className="text-sm font-extrabold leading-tight text-emerald-900 sm:text-lg">
              M/S MONIR ENTERPRISE
            </p>
            <p className="text-xs text-slate-500">
              {isBangla
                ? "MONIR GROUP-এর একটি প্রতিষ্ঠান"
                : "A MONIR GROUP Business"}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-slate-600 transition hover:text-emerald-700"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
            aria-label="Change language"
          >
            {isBangla ? "EN" : "বাংলা"}
          </button>

          <Link
            to="/m-s-monir-enterprise/login"
            className="hidden rounded-lg bg-emerald-800 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-900 sm:inline-flex"
          >
            {isBangla ? "লগইন" : "Login"}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
              >
                {label}
              </a>
            ))}

            <Link
              to="/m-s-monir-enterprise/login"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-emerald-800 px-4 py-3 text-center font-bold text-white"
            >
              {isBangla ? "লগইন" : "Login"}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default EnterpriseHeader;
