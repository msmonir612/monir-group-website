
const LPGSection = ({ language = "bn" }) => {
  const content = {
    bn: {
      eyebrow: "এলপিজি গ্যাস সেবা",
      title: "LPG গ্যাস ও সিলিন্ডার",
      description:
        "LPG গ্যাসের প্রাপ্যতা, সিলিন্ডার ফেরত এবং সংশ্লিষ্ট সেবা সম্পর্কে জানতে আমাদের সঙ্গে যোগাযোগ করুন।",
      contact: "যোগাযোগ করুন",
    },
    en: {
      eyebrow: "LPG GAS SERVICE",
      title: "LPG Gas & Cylinders",
      description:
        "Contact us to learn about LPG gas availability, cylinder returns, and related services.",
      contact: "Contact Us",
    },
  };

  const t = content[language === "en" ? "en" : "bn"];

  return (
    <section className="bg-emerald-950 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="text-xs font-extrabold tracking-[0.25em] text-amber-300">
            {t.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            {t.title}
          </h2>

          <p className="mt-4 max-w-2xl leading-8 text-emerald-100/80">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-4xl">
            🔥
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
          >
            {t.contact}
          </a>
        </div>
      </div>
    </section>
  );
};

export default LPGSection;
