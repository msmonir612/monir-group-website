
import { useTranslation } from "react-i18next";
import ManagementSection from "../components/ManagementSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OrganizationCard from "../components/OrganizationCard";
import Footer from "../components/Footer";

function Home() {
  const { t, i18n } = useTranslation();
  const isBangla = i18n.language?.startsWith("bn");

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f5f7fb] font-sans text-[#172033]">
      <Header />

      <main>
        <Hero />
        
      {/* OWNERS & BOARD OF DIRECTORS */}
      <ManagementSection language={isBangla ? "bn" : "en"} />
        {/* ABOUT */}
        <section id="about" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b4862e]">
                {t("about.label")}
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#07162e] sm:text-4xl lg:text-5xl">
                {t("about.title")}
              </h2>
            </div>

            <div className="mt-10 grid items-stretch gap-8 lg:mt-14 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12">
              <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                {t("about.description")}
              </p>

              <div className="rounded-3xl bg-gradient-to-br from-[#07162e] to-[#173d5c] p-7 text-white shadow-xl shadow-slate-900/10 sm:p-10">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e5bb5e]">
                  {t("about.vision")}
                </span>

                <h3 className="mt-7 text-2xl font-extrabold leading-snug sm:text-3xl">
                  {t("about.visionTitle")}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {t("about.visionDescription")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR ORGANIZATION CARDS */}
        <section
          id="organizations"
          className="scroll-mt-20 bg-[#f5f7fb] py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#b4862e]">
                {t("organizations.label")}
              </span>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#07162e] sm:text-4xl lg:text-5xl">
                {t("organizations.title")}
              </h2>

              <p className="mt-4 leading-7 text-slate-600 sm:text-lg">
                {t("organizations.description")}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
              <OrganizationCard
                number="01"
                type={t("organizations.enterprise.type")}
                title={t("organizations.enterprise.title")}
                description={t("organizations.enterprise.description")}
                button={t("organizations.enterprise.button")}
                color="blue"
                link="/m-s-monir-enterprise"
              />

              <OrganizationCard
                number="02"
                type={t("organizations.academy.type")}
                title={t("organizations.academy.title")}
                description={t("organizations.academy.description")}
                button={t("organizations.academy.button")}
                color="green"
                link="/monir-academy"
              />

              <OrganizationCard
                number="03"
                type={t("organizations.association.type")}
                title={t("organizations.association.title")}
                description={t("organizations.association.description")}
                button={t("organizations.association.button")}
                color="red"
                link="/monir-friend-association"
              />

              <OrganizationCard
                number="04"
                type={t("organizations.agricultural.type")}
                title={t("organizations.agricultural.title")}
                description={t("organizations.agricultural.description")}
                button={t("organizations.agricultural.button")}
                color="gold"
                link="/agricultural-trading"
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-7 rounded-3xl bg-gradient-to-br from-[#07162e] to-[#102b50] p-7 text-white shadow-xl shadow-slate-900/10 sm:p-10 lg:flex-row lg:items-center lg:p-14">
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#e5bb5e]">
                  {t("contact.label")}
                </span>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                  {t("contact.title")}
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  {t("contact.description")}
                </p>
              </div>

              <a
                href="#organizations"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#d5a84b] px-6 py-3.5 font-extrabold text-[#07162e] transition hover:-translate-y-0.5 hover:bg-[#e5bb5e]"
              >
                {t("contact.button")}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
