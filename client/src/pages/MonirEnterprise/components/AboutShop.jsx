
const AboutShop = ({ language = "bn" }) => {
  const content = {
    bn: {
      eyebrow: "আমাদের দোকান সম্পর্কে",
      title: "M/S MONIR ENTERPRISE সম্পর্কে",
      paragraph1:
        "M/S MONIR ENTERPRISE হলো MONIR GROUP-এর একটি ব্যবসায়িক প্রতিষ্ঠান। আমাদের পণ্যের মধ্যে রয়েছে চাল, ফিড, ভূসি, খুদ, কুড়া ও LPG গ্যাস।",
      paragraph2:
        "ক্রেতাদের প্রয়োজন বোঝা, ব্যবসায়িক স্বচ্ছতা বজায় রাখা এবং দীর্ঘমেয়াদি আস্থার সম্পর্ক গড়ে তোলা আমাদের লক্ষ্য।",
      commitment: "আমাদের অঙ্গীকার",
      commitmentTitle: "বিশ্বাসের সঙ্গে ব্যবসা",
      commitmentText:
        "পণ্য সম্পর্কে সঠিক তথ্য, ক্রেতাদের সঙ্গে পরিষ্কার যোগাযোগ এবং দায়িত্বশীল ব্যবসায়িক সেবা দেওয়ার চেষ্টা করি আমরা।",
      products: "পণ্য",
      productsText: "বিভিন্ন পণ্যের বিভাগ",
      service: "সেবা",
      serviceText: "ক্রেতার প্রয়োজনকে গুরুত্ব",
    },
    en: {
      eyebrow: "ABOUT OUR SHOP",
      title: "About M/S MONIR ENTERPRISE",
      paragraph1:
        "M/S MONIR ENTERPRISE is a business under MONIR GROUP. Our products include rice, animal feed, bhushi, broken rice, rice bran, and LPG gas.",
      paragraph2:
        "Our goal is to understand customer needs, maintain business transparency, and build long-term relationships based on trust.",
      commitment: "OUR COMMITMENT",
      commitmentTitle: "Business Built on Trust",
      commitmentText:
        "We strive to provide accurate product information, clear communication with customers, and responsible business service.",
      products: "Products",
      productsText: "A variety of product categories",
      service: "Service",
      serviceText: "Customer needs come first",
    },
  };

  const t = content[language === "en" ? "en" : "bn"];

  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-extrabold tracking-[0.25em] text-emerald-700">
            {t.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
            {t.title}
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            {t.paragraph1}
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            {t.paragraph2}
          </p>
        </div>

        <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-xs font-extrabold tracking-[0.25em] text-amber-300">
            {t.commitment}
          </p>

          <h3 className="mt-5 text-3xl font-black">
            {t.commitmentTitle}
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            {t.commitmentText}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-bold text-amber-300">
                {t.products}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {t.productsText}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-bold text-amber-300">
                {t.service}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {t.serviceText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShop;
