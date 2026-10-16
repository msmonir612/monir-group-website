import monir from "../assets/monir.png";
import kofil from "../assets/kawser.png";
import rakib from "../assets/rokib.jpeg";

const managementMembers = [
  {
    id: 1,
    name: "মোঃ মাজারুল ইসলাম মনির",
    nameEn: "MD. MAZARUL ISLAM MONIR",
    position: "মালিক ও প্রতিষ্ঠাতা",
    positionEn: "Owner & Founder",
    phone: "01749315693",
    phone2: "01969859897",
    email: "msmonir511@gmail.com",
    image: monir,
  },
  {
    id: 2,
    name: "মোঃ রাকিবুল ইসলাম রাকিব",
    nameEn: "MD. RAKIBUL ISLAM RAKIB",
    position: "পরিচালক",
    positionEn: "Director",
    phone: "01918710990",
    phone2: "01918710990",
    email: "rakibulislam@gmail.com",
    image: rakib, 
  },
  {
    id: 3,
    name: "মোঃ কাউছার হোসেন কফিল",
    nameEn: "MD. KAUSAR HOSSEN KAFIL",
    position: "পরিচালক",
    positionEn: "Director",
    phone: "01964767311",
    phone2: "01964767311",
    email: "kausarhossen@gmail.com",
    image: kofil,
  },
];

const ManagementSection = ({ language = "bn" }) => {
  const isEnglish = language === "en";

  return (
    <section
      id="management"
      className="bg-slate-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
            {isEnglish ? "Our Leadership" : "আমাদের নেতৃত্ব"}
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            {isEnglish
              ? "Owners & Board of Directors"
              : "মালিক ও পরিচালনা পর্ষদ"}
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            {isEnglish
              ? "Meet the leadership team of MONIR GROUP."
              : "MONIR GROUP-এর মালিক ও পরিচালনা পর্ষদের সঙ্গে পরিচিত হোন।"}
          </p>
        </div>

        {/* THREE MANAGEMENT CARDS */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {managementMembers.map((member) => (
            <article
              key={member.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* PROFILE IMAGE */}
              <div className="flex h-56 items-center justify-center overflow-hidden bg-emerald-50">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={isEnglish ? member.nameEn : member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-emerald-800 text-4xl font-black text-white shadow-md">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* NAME AND POSITION */}
              <div className="p-5">
                <h3 className="break-words text-center text-lg font-extrabold text-slate-900">
                  {isEnglish ? member.nameEn : member.name}
                </h3>

                <p className="mt-2 text-center font-bold text-emerald-800">
                  {isEnglish
                    ? member.positionEn
                    : member.position}
                </p>

                {/* CONTACT INFORMATION */}
                <div className="mt-5 space-y-4 border-t border-slate-100 pt-4">
                  {/* MOBILE NUMBERS */}
                  {(member.phone || member.phone2) && (
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                        {isEnglish ? "Mobile Number" : "মোবাইল নম্বর"}
                      </p>

                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="block break-words text-sm font-semibold text-emerald-800 hover:text-emerald-600 hover:underline"
                        >
                          ☎ {member.phone}
                        </a>
                      )}

                      {member.phone2 &&
                        member.phone2 !== member.phone && (
                          <a
                            href={`tel:${member.phone2}`}
                            className="mt-2 block break-words text-sm font-semibold text-emerald-800 hover:text-emerald-600 hover:underline"
                          >
                            ☎ {member.phone2}
                          </a>
                        )}
                    </div>
                  )}

                  {/* EMAIL ADDRESS */}
                  {member.email && (
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                        {isEnglish ? "Email Address" : "ইমেইল ঠিকানা"}
                      </p>

                      <a
                        href={`mailto:${member.email}`}
                        className="block break-all text-sm text-slate-700 hover:text-emerald-800 hover:underline"
                      >
                        ✉ {member.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
