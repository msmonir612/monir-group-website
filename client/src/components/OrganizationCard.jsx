
import { Link } from "react-router-dom";

const colorStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-700",
    label: "text-blue-700",
    button: "text-blue-700 group-hover:bg-blue-700 group-hover:text-white",
    border: "hover:border-blue-200",
  },
  green: {
    icon: "bg-emerald-50 text-emerald-700",
    label: "text-emerald-700",
    button: "text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white",
    border: "hover:border-emerald-200",
  },
  red: {
    icon: "bg-rose-50 text-rose-700",
    label: "text-rose-700",
    button: "text-rose-700 group-hover:bg-rose-700 group-hover:text-white",
    border: "hover:border-rose-200",
  },
  gold: {
    icon: "bg-amber-50 text-amber-700",
    label: "text-amber-700",
    button: "text-amber-700 group-hover:bg-amber-600 group-hover:text-white",
    border: "hover:border-amber-200",
  },
};

function OrganizationCard({
  number,
  type,
  title,
  description,
  button,
  color = "blue",
  link,
}) {
  const styles = colorStyles[color] || colorStyles.blue;

  return (
    <article
      className={`group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl sm:p-7 ${styles.border}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-sm font-extrabold ${styles.icon}`}
        >
          {number}
        </span>

        <span className={`text-right text-[10px] font-extrabold uppercase tracking-[0.16em] sm:text-xs ${styles.label}`}>
          {type}
        </span>
      </div>

      <h3 className="mt-7 break-words text-xl font-extrabold leading-snug text-[#07162e] sm:text-2xl">
        {title}
      </h3>

      <p className="mt-3 flex-1 break-words text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>

      <Link
        to={link}
        className={`mt-6 inline-flex w-fit items-center gap-2 rounded-lg px-3 py-2 text-sm font-extrabold transition ${styles.button}`}
      >
        {button}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}

export default OrganizationCard;
