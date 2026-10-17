
import { useEffect, useState } from "react";

const menuGroups = [
  {
    title: { bn: "প্রধান মেনু", en: "MAIN MENU" },
    items: [
      ["dashboard", "ড্যাশবোর্ড", "Dashboard", "⌂"],
      ["sales", "বিক্রি / POS", "Sales / POS", "🛒"],
      ["purchase", "ক্রয়", "Purchase", "🧾"],
      ["inventory", "ইনভেন্টরি", "Inventory", "📦"],
      ["lpg", "LPG ব্যবস্থাপনা", "LPG Management", "🔥"],
      ["customers", "কাস্টমার", "Customers", "👥"],
      ["suppliers", "সাপ্লায়ার", "Suppliers", "🚚"],
      ["products", "পণ্যের তালিকা", "Products", "📦"],
      ["rice", "চাল", "Rice", "🌾"],
      ["feed", "ফিড", "Feed", "🌱"],
      ["bhushi", "ভূসি", "Bhushi", "🌾"],
      ["khud", "খুদ", "Khud", "🌾"],
      ["kura", "কুড়া", "Kura", "🌾"],
      ["lpg-gas", "LPG গ্যাস", "LPG Gas", "🔥"],
    ],
  },
  {
    title: { bn: "হিসাব ও রিপোর্ট", en: "ACCOUNTS & REPORTS" },
    items: [
      ["accounts", "হিসাব", "Accounts", "৳"],
      ["investors", "ইনভেস্টর হিসাব", "Investor Accounts", "🤝"],
      ["loans-taken", "হাওলাত নেওয়া", "Loans Taken", "↙"],
      ["loans-given", "হাওলাত দেওয়া", "Loans Given", "↗"],
      ["reports", "রিপোর্ট", "Reports", "📊"],
      ["employees", "কর্মচারী", "Employees", "👷"],
      ["settings", "সেটিংস", "Settings", "⚙"],
    ],
  },
];

const summaryCards = [
  {
    title: { bn: "মোট বিক্রি", en: "Total Sales" },
    icon: "🛒",
    color: "bg-emerald-600",
  },
  {
    title: { bn: "মোট ক্রয়", en: "Total Purchase" },
    icon: "📦",
    color: "bg-blue-600",
  },
  {
    title: { bn: "মোট স্টক", en: "Total Stock Items" },
    icon: "🏬",
    color: "bg-violet-600",
  },
  {
    title: { bn: "মোট কাস্টমার", en: "Total Customers" },
    icon: "👥",
    color: "bg-orange-500",
  },
  {
    title: { bn: "LPG বিক্রি", en: "Total LPG Sales" },
    icon: "🔥",
    color: "bg-red-500",
  },
];

const quickActions = [
  {
    id: "sales",
    icon: "🛒",
    label: { bn: "নতুন বিক্রি", en: "New Sale" },
    color: "bg-emerald-600",
  },
  {
    id: "purchase",
    icon: "📥",
    label: { bn: "নতুন ক্রয়", en: "New Purchase" },
    color: "bg-blue-600",
  },
  {
    id: "products",
    icon: "📦",
    label: { bn: "পণ্য যোগ", en: "Add Product" },
    color: "bg-orange-500",
  },
  {
    id: "customers",
    icon: "👤",
    label: { bn: "কাস্টমার", en: "Customer" },
    color: "bg-violet-600",
  },
  {
    id: "lpg",
    icon: "🔥",
    label: { bn: "LPG বিক্রি", en: "LPG Sale" },
    color: "bg-red-500",
  },
  {
    id: "reports",
    icon: "📊",
    label: { bn: "রিপোর্ট", en: "Generate Report" },
    color: "bg-teal-600",
  },
];

const translations = {
  bn: {
    welcome: "স্বাগতম",
    subtitle: "মানসম্মত পণ্য, সবার জন্য",
    productsLine: "চাল · ফিড · ভূসি · খুদ · কুড়া · LPG গ্যাস",
    search: "যেকোনো কিছু খুঁজুন...",
    admin: "অ্যাডমিন",
    administrator: "সিস্টেম অ্যাডমিনিস্ট্রেটর",
    today: "আজকের তারিখ",
    quickActions: "দ্রুত কাজ",
    overview: "ব্যবসার সারাংশ",
    noData: "প্রকৃত হিসাবের তথ্য সংযুক্ত হলে এখানে দেখা যাবে।",
    chart: "বিক্রির সারাংশ",
    chartDescription: "বিক্রির API যুক্ত হলে এখানে চার্ট দেখা যাবে।",
    ledger: "সাম্প্রতিক লেনদেন",
    ledgerDescription: "লেনদেনের তথ্য এখনো সংযুক্ত করা হয়নি।",
    purchases: "সাম্প্রতিক ক্রয়",
    purchaseDescription: "ক্রয়ের তথ্য যুক্ত হলে এখানে দেখা যাবে।",
    lpgManagement: "LPG ব্যবস্থাপনা",
    lpgDescription: "সিলিন্ডার স্টক ও বোতল ফেরতের হিসাব এখানে দেখা যাবে।",
    lowStock: "কম স্টকের সতর্কতা",
    lowStockDescription: "স্টকের তথ্য যুক্ত হলে কম স্টকের পণ্য দেখাবে।",
    finance: "ইনভেস্টর ও হাওলাতের হিসাব",
    investorTitle: "ইনভেস্টর হিসাব",
    investorDescription: "আলাদা চুক্তি, বিনিয়োগ ও লাভের হিসাব।",
    takenTitle: "হাওলাত নেওয়া",
    takenDescription: "সুদবিহীন ঋণ ও অবশিষ্ট দেনা।",
    givenTitle: "হাওলাত দেওয়া",
    givenDescription: "সুদবিহীন ঋণ ও অবশিষ্ট পাওনা।",
    open: "খুলুন",
    back: "ড্যাশবোর্ডে ফিরুন",
    coming: "এই বিভাগের ফর্ম ও প্রকৃত হিসাবের API পরবর্তী ধাপে যুক্ত হবে।",
    investorNote:
      "প্রত্যেক ইনভেস্টরের চুক্তি, মূলধন, চুক্তি অনুযায়ী লাভ, ফেরত ও পাওনা আলাদাভাবে সংরক্ষণ করা হবে।",
    loanNote:
      "হাওলাত সুদবিহীন হবে। মূল টাকা, তারিখ, আংশিক পরিশোধ ও অবশিষ্ট দেনা বা পাওনা সংরক্ষণ করা হবে।",
    help: "সাহায্য প্রয়োজন?",
    helpText: "আপনার দোকানের অ্যাডমিনের সঙ্গে যোগাযোগ করুন।",
    footer: "M/S MONIR ENTERPRISE | ERP সিস্টেম",
    noFinancialData:
      "হিসাবের API যুক্ত না হওয়া পর্যন্ত প্রকৃত আর্থিক তথ্য দেখানো হবে না।",
    logout: "লগআউট",
    menu: "মেনু খুলুন",
  },
  en: {
    welcome: "Welcome to",
    subtitle: "Quality Products, For Everyone",
    productsLine: "Rice · Feed · Bhushi · Khud · Kura · LPG Gas",
    search: "Search anything...",
    admin: "Admin",
    administrator: "System Administrator",
    today: "Today's Date",
    quickActions: "Quick Actions",
    overview: "Business Overview",
    noData: "Real business data will appear here after the API is connected.",
    chart: "Sales Overview",
    chartDescription: "The sales chart will appear when the sales API is connected.",
    ledger: "Recent Ledger",
    ledgerDescription: "Transaction data has not been connected yet.",
    purchases: "Recent Purchases",
    purchaseDescription: "Purchase data will appear here when connected.",
    lpgManagement: "LPG Management",
    lpgDescription: "Cylinder stock and empty cylinder returns will appear here.",
    lowStock: "Low Stock Alert",
    lowStockDescription: "Low-stock products will appear when inventory is connected.",
    finance: "Investor & Loan Accounts",
    investorTitle: "Investor Accounts",
    investorDescription: "Separate agreements, investments and profit records.",
    takenTitle: "Loans Taken",
    takenDescription: "Interest-free loans and outstanding amounts payable.",
    givenTitle: "Loans Given",
    givenDescription: "Interest-free loans and outstanding amounts receivable.",
    open: "Open",
    back: "Back to Dashboard",
    coming: "Forms and working APIs for this section will be added in the next steps.",
    investorNote:
      "Each investor's agreement, capital, agreed profit, repayments and outstanding balance will be recorded separately.",
    loanNote:
      "Loans will be interest-free. Principal, dates, partial repayments and remaining balances will be recorded.",
    help: "Need Help?",
    helpText: "Please contact your shop administrator.",
    footer: "M/S MONIR ENTERPRISE | ERP System",
    noFinancialData:
      "Real financial figures will not be shown until the accounting API is connected.",
    logout: "Logout",
    menu: "Open menu",
  },
};

export default function Dashboard() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("monirEnterpriseLanguage");
    return savedLanguage === "en" ? "en" : "bn";
  });

  const [active, setActive] = useState("dashboard");
  const [mobileMenu, setMobileMenu] = useState(false);

  const t = translations[language];
  const isBangla = language === "bn";
  const allItems = menuGroups.flatMap((group) => group.items);
  const current = allItems.find(([id]) => id === active);

  useEffect(() => {
    localStorage.setItem("monirEnterpriseLanguage", language);
    document.documentElement.lang = language;
  }, [language]);

  const go = (id) => {
    setActive(id);
    setMobileMenu(false);
  };

  const logout = () => {
    sessionStorage.removeItem("monirEnterpriseToken");
    sessionStorage.removeItem("monirEnterpriseAdmin");
    window.location.assign("/m-s-monir-enterprise/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
      <header className="sticky top-0 z-40 flex min-h-[80px] flex-wrap items-center justify-between gap-3 bg-[#062b55] px-4 py-3 text-white shadow-lg sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label={t.menu}
            aria-expanded={mobileMenu}
            className="rounded-lg bg-white/10 px-4 py-3 text-2xl lg:hidden"
          >
            ☰
          </button>

          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-4xl font-black text-amber-400">MG</span>
            <div className="hidden border-r border-white/20 pr-4 md:block">
              <p className="text-lg font-extrabold">MONIR GROUP</p>
              <p className="text-sm text-blue-100">
                Together for a Better Tomorrow
              </p>
            </div>
          </div>

          <div className="min-w-0 border-l border-white/20 pl-3">
            <p className="truncate text-lg font-extrabold sm:text-2xl">
              🏪 M/S MONIR ENTERPRISE
            </p>
            <p className="mt-1 text-sm text-blue-100 sm:text-base">
              Rice | Feed | Bhushi | Khud | Kura | LPG Gas
            </p>
          </div>
        </div>

        <div className="hidden max-w-xs flex-1 lg:block">
          <input
            aria-label={t.search}
            placeholder={`⌕  ${t.search}`}
            className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-lg text-white outline-none placeholder:text-blue-100 focus:bg-white/15"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex rounded-xl border border-white/20 bg-white/10 p-1">
            <button
              type="button"
              onClick={() => setLanguage("bn")}
              aria-pressed={isBangla}
              className={`rounded-lg px-3 py-2 text-base font-bold transition sm:px-4 ${
                isBangla
                  ? "bg-white text-[#062b55]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              🇧🇩 বাংলা
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              aria-pressed={!isBangla}
              className={`rounded-lg px-3 py-2 text-base font-bold transition sm:px-4 ${
                !isBangla
                  ? "bg-white text-[#062b55]"
                  : "text-white hover:bg-white/10"
              }`}
            >
              🇬🇧 English
            </button>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-base font-bold">{t.admin}</p>
            <p className="text-sm text-blue-100">{t.administrator}</p>
          </div>

          <button
            type="button"
            onClick={logout}
            title={t.logout}
            aria-label={t.logout}
            className="rounded-lg px-3 py-2 text-xl hover:bg-white/10"
          >
            ↪
          </button>
        </div>
      </header>

      {mobileMenu && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
        />
      )}

      <div className="flex min-h-[calc(100vh-80px)]">
        <aside
          className={`fixed bottom-0 top-[80px] z-30 w-72 overflow-y-auto bg-gradient-to-b from-[#073768] to-[#031e3d] p-4 text-white shadow-xl transition-transform lg:sticky lg:top-[80px] lg:h-[calc(100vh-80px)] lg:translate-x-0 ${
            mobileMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {menuGroups.map((group) => (
            <div key={group.title.en} className="mb-6">
              <p className="mb-3 px-3 text-sm font-bold tracking-widest text-blue-200/80">
                {group.title[language]}
              </p>

              {group.items.map(([id, bn, en, icon]) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => go(id)}
                  className={`mb-1 flex min-h-12 w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-lg transition ${
                    active === id
                      ? "bg-blue-500 font-bold text-white shadow-md"
                      : "text-blue-50 hover:bg-white/10"
                  }`}
                >
                  <span className="w-7 shrink-0 text-center text-xl">
                    {icon}
                  </span>
                  <span>{isBangla ? bn : en}</span>
                </button>
              ))}
            </div>
          ))}

          <div className="mt-5 rounded-xl border border-blue-400/30 bg-blue-950/50 p-4 text-base leading-7 text-blue-100">
            <p className="font-bold text-white">{t.help}</p>
            <p>{t.helpText}</p>
          </div>
        </aside>

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-7">
          {active === "dashboard" ? (
            <>
              <div className="grid grid-cols-1 gap-5 2xl:grid-cols-[minmax(0,1fr)_340px]">
                <section className="relative flex min-h-[230px] items-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#063e34] via-[#075b49] to-[#718c50] p-6 text-white shadow-md sm:min-h-[270px] sm:p-9">
                  <div className="relative z-10 max-w-3xl">
                    <p className="text-xl font-semibold text-emerald-100 sm:text-2xl">
                      {t.welcome}
                    </p>
                    <h1 className="mt-2 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                      M/S MONIR ENTERPRISE
                    </h1>
                    <p className="mt-3 text-xl font-bold sm:text-2xl">
                      {t.subtitle}
                    </p>
                    <p className="mt-5 text-base font-semibold leading-7 text-emerald-50 sm:text-lg">
                      🌾 {t.productsLine}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute -right-4 -top-6 text-[180px] opacity-10 sm:text-[230px]">
                    🌾
                  </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <p className="text-lg font-bold text-[#063568]">
                    📅 {t.today}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-700">
                    {new Date().toLocaleDateString(
                      language === "bn" ? "bn-BD" : "en-GB",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>

                  <div className="mt-5 border-t border-slate-200 pt-5">
                    <h2 className="mb-4 text-xl font-extrabold text-[#063568]">
                      ⚡ {t.quickActions}
                    </h2>
                    <div className="grid grid-cols-2 gap-3">
                      {quickActions.map((action) => (
                        <button
                          key={action.id}
                          type="button"
                          onClick={() => go(action.id)}
                          className={`${action.color} min-h-14 rounded-xl px-3 py-3 text-base font-bold text-white shadow-sm transition hover:brightness-110 active:scale-[0.98] sm:text-lg`}
                        >
                          <span className="mr-1">{action.icon}</span>
                          {action.label[language]}
                        </button>
                      ))}
                    </div>
                  </div>
                </section>
              </div>

              <section className="mt-6">
                <h2 className="mb-4 text-2xl font-extrabold sm:text-3xl">
                  {t.overview}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                  {summaryCards.map((card) => (
                    <article
                      key={card.title.en}
                      className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6"
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white ${card.color}`}
                      >
                        {card.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-slate-600 sm:text-xl">
                        {card.title[language]}
                      </h3>
                      <p className="mt-3 text-3xl font-extrabold text-[#08366b] sm:text-4xl">
                        —
                      </p>
                      <p className="mt-2 text-base leading-6 text-slate-500">
                        {t.noData}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">
                  <h2 className="text-xl font-extrabold text-[#063568] sm:text-2xl">
                    📈 {t.chart}
                  </h2>
                  <div className="mt-5 flex min-h-52 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-lg leading-8 text-slate-500">
                    {t.chartDescription}
                  </div>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <h2 className="text-xl font-extrabold text-[#063568] sm:text-2xl">
                    📒 {t.ledger}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-slate-500">
                    {t.ledgerDescription}
                  </p>
                </section>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
                {[
                  ["📦", t.purchases, t.purchaseDescription],
                  ["🔥", t.lpgManagement, t.lpgDescription],
                  ["⚠️", t.lowStock, t.lowStockDescription],
                ].map(([icon, title, description]) => (
                  <section
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <h2 className="text-xl font-extrabold text-[#063568] sm:text-2xl">
                      {icon} {title}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-500">
                      {description}
                    </p>
                  </section>
                ))}
              </div>

              <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h2 className="text-2xl font-extrabold text-[#063568] sm:text-3xl">
                  🤝 {t.finance}
                </h2>
                <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {[
                    [
                      "investors",
                      t.investorTitle,
                      t.investorDescription,
                      "bg-emerald-50",
                    ],
                    [
                      "loans-taken",
                      t.takenTitle,
                      t.takenDescription,
                      "bg-blue-50",
                    ],
                    [
                      "loans-given",
                      t.givenTitle,
                      t.givenDescription,
                      "bg-violet-50",
                    ],
                  ].map(([id, title, description, color]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => go(id)}
                      className={`${color} min-h-40 rounded-2xl border border-slate-200 p-5 text-left transition hover:border-blue-400 hover:shadow-md sm:p-6`}
                    >
                      <h3 className="text-xl font-extrabold">{title}</h3>
                      <p className="mt-3 text-lg leading-8 text-slate-600">
                        {description}
                      </p>
                      <p className="mt-4 text-lg font-bold text-blue-700">
                        {t.open} →
                      </p>
                    </button>
                  ))}
                </div>
              </section>

              <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-base leading-7 text-amber-900">
                ⚠️ {t.noFinancialData}
              </p>
            </>
          ) : (
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-base font-bold text-blue-700">
                M/S MONIR ENTERPRISE ERP
              </p>
              <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                {current ? current[isBangla ? 1 : 2] : "ERP"}
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                {t.coming}
              </p>

              {(active === "investors" ||
                active === "loans-taken" ||
                active === "loans-given") && (
                <div className="mt-6 rounded-xl bg-blue-50 p-5 text-lg leading-8 text-blue-950 sm:p-6">
                  {active === "investors" ? t.investorNote : t.loanNote}
                </div>
              )}

              <button
                type="button"
                onClick={() => go("dashboard")}
                className="mt-6 min-h-12 rounded-xl bg-[#063568] px-6 py-3 text-lg font-bold text-white hover:bg-blue-900"
              >
                ← {t.back}
              </button>
            </section>
          )}

          <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 py-5 text-base text-slate-500">
            <span>{t.footer}</span>
            <span>MONIR GROUP · Together We Grow</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
