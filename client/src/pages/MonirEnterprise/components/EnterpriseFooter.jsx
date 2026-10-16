
import { Link } from "react-router-dom";

const EnterpriseFooter = ({ language = "bn" }) => {
  const content = {
    bn: {
      subtitle: "MONIR GROUP-এর একটি প্রতিষ্ঠান",
      description:
        "চাল, ফিড, ভূসি, খুদ, কুড়া ও LPG গ্যাসের জন্য আমাদের দোকানের সঙ্গে যোগাযোগ করুন।",
      quickLinks: "দ্রুত লিংক",
      home: "হোম",
      products: "পণ্যসমূহ",
      about: "আমাদের সম্পর্কে",
      contact: "যোগাযোগ",
      erp: "ERP",
      erpDescription:
        "অনুমোদিত কর্মীদের জন্য দোকানের ব্যবস্থাপনা সিস্টেম।",
      login: "ERP লগইন",
      groupHome: "MONIR GROUP-এর হোমপেজ",
      copyright: "M/S MONIR ENTERPRISE.",
      partOf: "MONIR GROUP-এর অংশ",
    },
    en: {
      subtitle: "A MONIR GROUP Business",
      description:
        "Contact our shop for rice, animal feed, bhushi, broken rice, rice bran, and LPG gas.",
      quickLinks: "Quick Links",
      home: "Home",
      products: "Products",
      about: "About Us",
      contact: "Contact",
      erp: "ERP",
      erpDescription:
        "Shop management system for authorized personnel.",
      login: "ERP Login",
      groupHome: "MONIR GROUP Home",
      copyright: "M/S MONIR ENTERPRISE.",
      partOf: "Part of MONIR GROUP",
    },
  };

  const t = content[language === "en" ? "en" : "bn"];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-800 text-xl font-black">
              M
            </div>

            <div>
              <h2 className="font-extrabold">
                M/S MONIR ENTERPRISE
              </h2>
              <p className="text-xs text-slate-400">
                {t.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            {t.description}
          </p>
        </div>

        <div>
          <h3 className="font-bold">{t.quickLinks}</h3>

          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-400">
            <a className="hover:text-emerald-300" href="#home">
              {t.home}
            </a>
            <a className="hover:text-emerald-300" href="#products">
              {t.products}
            </a>
            <a className="hover:text-emerald-300" href="#about">
              {t.about}
            </a>
            <a className="hover:text-emerald-300" href="#contact">
              {t.contact}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">{t.erp}</h3>

          <p className="mt-4 text-sm leading-7 text-slate-400">
            {t.erpDescription}
          </p>

          <Link
            to="/m-s-monir-enterprise/login"
            className="mt-4 inline-flex rounded-lg border border-emerald-700 px-4 py-2 text-sm font-bold text-emerald-300 transition hover:bg-emerald-900"
          >
            {t.login} →
          </Link>

          <div className="mt-4">
            <Link
              to="/"
              className="text-sm text-slate-400 hover:text-white"
            >
              ← {t.groupHome}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {t.copyright}
          </p>
          <p>{t.partOf}</p>
        </div>
      </div>
    </footer>
  );
};

export default EnterpriseFooter;
