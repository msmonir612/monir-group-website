
import { Link } from "react-router-dom";

const ERPLoginButton = () => {
  return (
    <Link
      to="/m-s-monir-enterprise/login"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-800 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-emerald-900 focus:outline-none focus:ring-4 focus:ring-emerald-200"
    >
      ERP Login
      <span aria-hidden="true">→</span>
    </Link>
  );
};

export default ERPLoginButton;
