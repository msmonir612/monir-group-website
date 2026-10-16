
const products = [
  {
    icon: "🌾",
    name: { bn: "চাল", en: "Rice" },
    description: {
      bn: "বিভিন্ন ধরনের চাল ও চালজাত পণ্য।",
      en: "Different varieties of rice and rice-based products.",
    },
  },
  {
    icon: "🐄",
    name: { bn: "ফিড", en: "Animal Feed" },
    description: {
      bn: "পশুখাদ্য ও ফিড পণ্য।",
      en: "Animal feed and related products.",
    },
  },
  {
    icon: "🌿",
    name: { bn: "ভূসি", en: "Bhushi" },
    description: {
      bn: "বিভিন্ন কাজে ব্যবহারের ভূসি।",
      en: "Bhushi products for various uses.",
    },
  },
  {
    icon: "🌾",
    name: { bn: "খুদ", en: "Broken Rice" },
    description: {
      bn: "চাল প্রক্রিয়াজাতকরণের খুদ।",
      en: "Broken rice produced during rice processing.",
    },
  },
  {
    icon: "🌱",
    name: { bn: "কুড়া", en: "Rice Bran" },
    description: {
      bn: "চালের কুড়া ও সংশ্লিষ্ট পণ্য।",
      en: "Rice bran and related products.",
    },
  },
  {
    icon: "🔥",
    name: { bn: "এলপিজি গ্যাস", en: "LPG Gas" },
    description: {
      bn: "এলপিজি গ্যাস ও সিলিন্ডার-সংক্রান্ত সেবা।",
      en: "LPG gas and cylinder-related services.",
    },
  },
];

const translations = {
  bn: {
    eyebrow: "আমাদের পণ্য",
    title: "আমাদের পণ্যসমূহ",
    description:
      "আমাদের দোকানে পাওয়া যায় এমন পণ্য সম্পর্কে জানুন। পণ্যের প্রাপ্যতা জানতে সরাসরি যোগাযোগ করুন।",
  },
  en: {
    eyebrow: "OUR PRODUCTS",
    title: "Our Products",
    description:
      "Explore the products available at our shop. Contact us directly to check product availability.",
  },
};

const ProductSection = ({ language = "bn" }) => {
  const lang = language === "en" ? "en" : "bn";
  const t = translations[lang];

  return (
    <section id="products" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-extrabold tracking-[0.25em] text-emerald-700">
            {t.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            {t.title}
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            {t.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article
              key={product.name.en}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-3xl transition group-hover:bg-emerald-100">
                  {product.icon}
                </div>

                <span className="text-xs font-bold text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                {product.name[lang]}
              </h3>

              <p className="mt-1 text-sm font-semibold text-emerald-700">
                {lang === "bn" ? product.name.en : product.name.bn}
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                {product.description[lang]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
