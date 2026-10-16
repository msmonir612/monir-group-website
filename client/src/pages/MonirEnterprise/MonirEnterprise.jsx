
import { useState } from "react";

import EnterpriseHeader from "./components/EnterpriseHeader";
import EnterpriseHero from "./components/EnterpriseHero";
import ProductSection from "./components/ProductSection";
import AboutShop from "./components/AboutShop";
import LPGSection from "./components/LPGSection";
import ContactSection from "./components/ContactSection";
import EnterpriseFooter from "./components/EnterpriseFooter";

const MonirEnterprise = () => {
  const [language, setLanguage] = useState("bn");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <EnterpriseHeader
        language={language}
        onLanguageChange={setLanguage}
      />

      <main>
        <EnterpriseHero language={language} />
        <ProductSection language={language} />
        <AboutShop language={language} />
        <LPGSection language={language} />
        <ContactSection language={language} />
      </main>

      <EnterpriseFooter language={language} />
    </div>
  );
};

export default MonirEnterprise;
