
const ContactSection = ({ language = "bn" }) => {
  const content = {
    bn: {
      eyebrow: "যোগাযোগ করুন",
      title: "আমাদের সঙ্গে যোগাযোগ করুন",
      description:
        "পণ্যের প্রাপ্যতা, দাম ও দোকান সম্পর্কে জানতে আমাদের সঙ্গে যোগাযোগ করুন।",
      proprietor: "প্রোপাইটর",
      shopPhone: "দোকানের ফোন নম্বর",
      email: "ইমেইল ঠিকানা",
      address: "দোকানের ঠিকানা",
      addressText: "দোকানের সঠিক ঠিকানা শিগগিরই যোগ করা হবে।",
      call: "কল করুন",
      sendEmail: "ইমেইল পাঠান",
      footer: "M/S MONIR ENTERPRISE — MONIR GROUP-এর একটি প্রতিষ্ঠান",
    },
    en: {
      eyebrow: "CONTACT US",
      title: "Get in Touch",
      description:
        "Contact us to learn about product availability, prices, and our shop.",
      proprietor: "Proprietor",
      shopPhone: "Shop Phone Number",
      email: "Email Address",
      address: "Shop Address",
      addressText: "The exact shop address will be added soon.",
      call: "Call Now",
      sendEmail: "Send Email",
      footer: "M/S MONIR ENTERPRISE — A MONIR GROUP Business",
    },
  };

  const t = content[language === "en" ? "en" : "bn"];

  const proprietors = ["01749315693", "01969859897"];
  const shopPhone = "01961024767";
  const emails = [
    "monirgroup2026@gamil.com",
    "msmonir511@gmail.com",
  ];

  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
          <div className="grid md:grid-cols-2">
            <div className="bg-slate-950 p-7 text-white sm:p-10">
              <p className="text-xs font-extrabold tracking-[0.25em] text-amber-300">
                {t.eyebrow}
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                {t.title}
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                {t.description}
              </p>

              <p className="mt-10 text-sm font-semibold text-amber-300">
                {t.footer}
              </p>
            </div>

            <div className="space-y-7 p-7 sm:p-10">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                  👤
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900">
                    {t.proprietor}
                  </h3>

                  <div className="mt-2 space-y-2">
                    {proprietors.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="block font-semibold text-emerald-800 hover:text-emerald-600"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                  ☎
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900">
                    {t.shopPhone}
                  </h3>

                  <a
                    href={`tel:${shopPhone}`}
                    className="mt-2 block font-semibold text-emerald-800 hover:text-emerald-600"
                  >
                    {shopPhone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                  ✉️
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900">
                    {t.email}
                  </h3>

                  <div className="mt-2 space-y-2">
                    {emails.map((email) => (
                      <a
                        key={email}
                        href={`mailto:${email}`}
                        className="block break-all text-sm font-medium text-emerald-800 hover:text-emerald-600"
                      >
                        {email}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                  📍
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    {t.address}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {t.addressText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
