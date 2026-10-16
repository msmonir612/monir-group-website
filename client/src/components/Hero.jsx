
import { useTranslation } from "react-i18next";

function Hero() {
  const { t, i18n } = useTranslation();
  const isBangla = i18n.language?.startsWith("bn");

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#07162e] via-[#102b50] to-[#173d5c] text-white"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#d5a84b]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div>
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.25em] text-[#e5bb5e] sm:text-sm">
            {isBangla ? "স্বাগতম MONIR GROUP-এ" : "WELCOME TO MONIR GROUP"}
          </p>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            {isBangla
              ? "বিশ্বাসের সঙ্গে গড়ি আগামীর পথ"
              : "Building Tomorrow on Trust"}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {isBangla
              ? "ব্যবসা, শিক্ষা ও সামাজিক উদ্যোগকে এক ছাতার নিচে নিয়ে MONIR GROUP-এর সঙ্গে এগিয়ে চলুন।"
              : "Bringing business, education, and community initiatives together under one group to build a stronger future."}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#organizations"
              className="inline-flex items-center justify-center rounded-xl bg-[#d5a84b] px-6 py-3.5 font-extrabold text-[#07162e] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#e5bb5e]"
            >
              {isBangla ? "আমাদের প্রতিষ্ঠানসমূহ" : "Explore Our Organizations"}
              <span className="ml-2" aria-hidden="true">→</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              {isBangla ? "আমাদের সম্পর্কে" : "About Us"}
            </a>
          </div>
        </div>

        <div className="hidden lg:flex lg:justify-center">
          <div className="flex h-[400px] w-full max-w-sm flex-col justify-between rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-slate-300">
              <span>MONIR GROUP</span>
              <span className="text-[#e5bb5e]">Since Day One</span>
            </div>

            <div className="mx-auto grid h-52 w-52 place-items-center rounded-full border border-[#e5bb5e]/30 bg-[radial-gradient(circle_at_35%_30%,#f1d78f,#d5a84b_20%,#173d5c_57%,#07162e_75%)] text-5xl font-black text-white shadow-[0_0_70px_rgba(213,168,75,0.2)]">
              MG
            </div>

            <div>
              <p className="text-sm text-slate-300">
                {isBangla ? "আমাদের অঙ্গীকার" : "Our Commitment"}
              </p>
              <p className="mt-1 text-2xl font-extrabold">
                {isBangla ? "বিশ্বাস ও অগ্রগতি" : "Trust & Progress"}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                {isBangla
                  ? "একসঙ্গে এগিয়ে চলার প্রত্যয়"
                  : "Moving forward, together"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
