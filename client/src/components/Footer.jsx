
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { i18n } = useTranslation();
  const isBangla = i18n.language?.startsWith("bn");

  return (
    <footer className="bg-[#06152d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:items-center lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#d5a84b] font-extrabold text-[#07162e]">
              MG
            </span>
            <span className="text-xl font-extrabold tracking-wide">
              MONIR GROUP
            </span>
          </Link>

          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
            {isBangla
              ? "বিশ্বাস, দায়িত্বশীলতা ও সম্মিলিত অগ্রগতির পথে আমাদের যাত্রা।"
              : "Our journey is built on trust, responsibility, and shared progress."}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-300 md:justify-end">
          <a className="transition hover:text-[#e5bb5e]" href="#home">
            {isBangla ? "হোম" : "Home"}
          </a>
          <a className="transition hover:text-[#e5bb5e]" href="#about">
            {isBangla ? "আমাদের সম্পর্কে" : "About"}
          </a>
          <a className="transition hover:text-[#e5bb5e]" href="#organizations">
            {isBangla ? "প্রতিষ্ঠানসমূহ" : "Organizations"}
          </a>
          <a className="transition hover:text-[#e5bb5e]" href="#contact">
            {isBangla ? "যোগাযোগ" : "Contact"}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} MONIR GROUP.{" "}
            {isBangla ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}
          </p>
          <Link to="/" className="transition hover:text-[#e5bb5e]">
            {isBangla ? "MONIR GROUP-এর মূল পাতা" : "MONIR GROUP Home"}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
