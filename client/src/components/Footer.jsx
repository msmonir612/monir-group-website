import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">

      <div className="container footer-inner">

        <div>

          <strong>
            MONIR GROUP
          </strong>

          <p>
            {t("footer.tagline")}
          </p>

        </div>


        <div>
          © {new Date().getFullYear()}{" "}
          MONIR GROUP.{" "}
          {t("footer.rights")}
        </div>

      </div>

    </footer>
  );
}

export default Footer;