
import { Link } from "react-router-dom";

const EnterpriseHero = ({ language = "bn" }) => {
  const content = {
    bn: {
      trust: "বিশ্বাস · গুণগত মান · সেবা",
      heading: "আপনার বিশ্বস্ত",
      headingAccent: "ব্যবসায়িক সহযোগী",
      description:
        "চাল, ফিড, ভূসি, খুদ, কুড়া ও LPG গ্যাস সম্পর্কে জানুন। আপনার প্রয়োজনীয় পণ্য ও সেবা পেতে যোগাযোগ করুন আমাদের সঙ্গে।",
      productsButton: "আমাদের পণ্য দেখুন ↓",
      contactButton: "যোগাযোগ করুন",
      business: "MONIR GROUP-এর একটি প্রতিষ্ঠান",
      enterprise: "MONIR ENTERPRISE",
      retail: "খুচরা বিক্রয়কেন্দ্র",
      shopDescription:
        "মানসম্মত পণ্য, বিশ্বস্ত ব্যবসায়িক সম্পর্ক এবং ভালো সেবা—আমাদের লক্ষ্য।",
    },
    en: {
      trust: "TRUST · QUALITY · SERVICE",
      heading: "Your Trusted",
      headingAccent: "Business Partner",
      description:
        "Explore our rice, feed, rice bran, broken rice, rice husk and LPG gas products. Contact us for the products and services you need.",
      productsButton: "Explore Our Products ↓",
      contactButton: "Contact Us",
      business: "A MONIR GROUP Business",
      enterprise: "MONIR ENTERPRISE",
      retail: "Retail Shop",
      shopDescription:
        "Quality products, trusted business relationships, and excellent service are our goals.",
    },
  };

  const t = content[language] || content.bn;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-emerald-800 text-white"
    >
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-amber-300/30 bg-white/5 px-4 py-2 text-xs font-bold tracking-[0.2em] text-amber-300">
            {t.trust}
          </p>

          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t.heading}
            <span className="mt-2 block text-amber-300">
              {t.headingAccent}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            {t.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#products"
              className="rounded-xl bg-amber-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-amber-300"
            >
              {t.productsButton}
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              {t.contactButton}
            </a>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            {t.business}
          </p>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur sm:p-8">
            <div className="flex items-center justify-between gap-3 text-sm text-slate-300">
              <span>{t.enterprise}</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-emerald-300">
                {t.retail}
              </span>
            </div>

            <div className="my-10 flex items-center justify-center">
              <div className="flex h-48 w-48 items-center justify-center rounded-full border border-amber-200/30 bg-gradient-to-br from-amber-200/20 to-emerald-300/10 text-7xl shadow-[0_0_70px_rgba(251,191,36,0.12)]">
                🏪
              </div>
            </div>

            <h2 className="text-2xl font-extrabold">
              M/S MONIR ENTERPRISE
            </h2>

            <p className="mt-3 leading-7 text-slate-300">
              {t.shopDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero;
