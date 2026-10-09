import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="home">

      <div className="container hero-grid">

        <div className="hero-content">

          <div className="eyebrow">
            {t("hero.eyebrow")}
          </div>

          <h1>
            {t("hero.title1")}
            <br />
            <span>
              {t("hero.title2")}
            </span>
          </h1>

          <p>
            {t("hero.description")}
          </p>

          <div className="hero-buttons">

            <a
              href="#organizations"
              className="btn btn-primary"
            >
              {t("hero.organizations")}
            </a>

            <a
              href="#about"
              className="btn btn-outline"
            >
              {t("hero.about")}
            </a>

          </div>

        </div>


        <div className="hero-visual">

          <div className="visual-card">

            <div className="visual-top">
              <span>MONIR GROUP</span>
              <span>2026</span>
            </div>

            <div className="visual-circle">
              MG
            </div>

            <div className="visual-bottom">

              <strong>
                {t("hero.title2")}
              </strong>

              <span>
                {t("hero.business")} •{" "}
                {t("hero.education")} •{" "}
                {t("hero.community")}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;