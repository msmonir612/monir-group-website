import { useTranslation } from "react-i18next";

import Header from "../components/Header";
import Hero from "../components/Hero";
import OrganizationCard from "../components/OrganizationCard";
import Footer from "../components/Footer";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />

      <main>
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="container">
            <div className="section-heading">
              <span>{t("about.label")}</span>
              <h2>{t("about.title")}</h2>
            </div>

            <div className="about-grid">
              <p>{t("about.description")}</p>

              <div className="vision-box">
                <small>{t("about.vision")}</small>
                <h3>{t("about.visionTitle")}</h3>
                <p>{t("about.visionDescription")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOUR ORGANIZATION CARDS */}
        <section
          className="section organizations"
          id="organizations"
        >
          <div className="container">
            <div className="section-heading center">
              <span>{t("organizations.label")}</span>
              <h2>{t("organizations.title")}</h2>
              <p>{t("organizations.description")}</p>
            </div>

            <div className="organization-grid">
              {/* 01: Main Shop ERP */}
              <OrganizationCard
                number="01"
                type={t("organizations.enterprise.type")}
                title={t("organizations.enterprise.title")}
                description={t(
                  "organizations.enterprise.description"
                )}
                button={t("organizations.enterprise.button")}
                color="blue"
                link="/m-s-monir-enterprise"
              />

              {/* 02: Academy */}
              <OrganizationCard
                number="02"
                type={t("organizations.academy.type")}
                title={t("organizations.academy.title")}
                description={t(
                  "organizations.academy.description"
                )}
                button={t("organizations.academy.button")}
                color="green"
                link="/monir-academy"
              />

              {/* 03: Friend Association */}
              <OrganizationCard
                number="03"
                type={t("organizations.association.type")}
                title={t("organizations.association.title")}
                description={t(
                  "organizations.association.description"
                )}
                button={t("organizations.association.button")}
                color="red"
                link="/monir-friend-association"
              />

              {/* 04: Agricultural Trading ERP */}
              <OrganizationCard
                number="04"
                type={t("organizations.agricultural.type")}
                title={t("organizations.agricultural.title")}
                description={t(
                  "organizations.agricultural.description"
                )}
                button={t("organizations.agricultural.button")}
                color="gold"
                link="/agricultural-trading"
              />
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-box">
              <div>
                <span>{t("contact.label")}</span>
                <h2>{t("contact.title")}</h2>
                <p>{t("contact.description")}</p>
              </div>

              <button className="btn btn-primary">
                {t("contact.button")}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;