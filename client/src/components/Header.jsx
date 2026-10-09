import { useState } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = () => {
    const newLanguage =
      i18n.language === "bn" ? "en" : "bn";

    i18n.changeLanguage(newLanguage);

    localStorage.setItem(
      "monir-language",
      newLanguage
    );
  };

  return (
    <header className="header">
      <div className="container header-inner">

        <a href="#home" className="logo">
          <div className="logo-mark">
            MG
          </div>

          <div>
            <div className="logo-name">
              MONIR GROUP
            </div>

            <div className="logo-tagline">
              Building Together
            </div>
          </div>
        </a>


        <nav
          className={`nav ${
            menuOpen ? "nav-open" : ""
          }`}
        >

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.home")}
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.about")}
          </a>

          <a
            href="#organizations"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.organizations")}
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.contact")}
          </a>

        </nav>


        <div className="header-actions">

          <button
            className="language-button"
            onClick={changeLanguage}
          >
            {i18n.language === "bn"
              ? "English"
              : "বাংলা"}
          </button>

          <button
            className="menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            ☰
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;