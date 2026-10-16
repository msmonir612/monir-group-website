
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    setMessage("");

    if (!email.trim() || !password) {
      setMessage("ইমেইল ও পাসওয়ার্ড লিখুন।");
      return;
    }

    // Backend authentication এখনো সংযুক্ত করা হয়নি।
    setMessage(
      "Login API এখনো সংযুক্ত হয়নি। Backend সংযোগের পর যাচাই সম্পন্ন হবে।"
    );
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-100 px-4 py-8 font-sans">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

      <section className="relative z-10 w-full max-w-md rounded-3xl border border-white/80 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
        {/* Brand */}
        <div className="mb-7 flex items-center justify-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-800 text-3xl font-black text-white shadow-lg">
            M
          </div>

          <div className="min-w-0">
            <h1 className="text-xl font-extrabold leading-tight text-emerald-800 sm:text-2xl">
              M/S MONIR
              <br />
              ENTERPRISE
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Login to your ERP Account
            </p>
          </div>
        </div>

        {/* Login role tabs */}
        <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1.5">
          <button
            type="button"
            onClick={() => {
              setRole("admin");
              setMessage("");
            }}
            className={`rounded-lg px-3 py-3 text-sm font-bold transition ${
              role === "admin"
                ? "bg-emerald-700 text-white shadow-md"
                : "text-slate-600 hover:bg-white"
            }`}
          >
            Admin Login
          </button>

          <button
            type="button"
            onClick={() => {
              setRole("manager");
              setMessage("");
            }}
            className={`rounded-lg px-3 py-3 text-sm font-bold transition ${
              role === "manager"
                ? "bg-emerald-700 text-white shadow-md"
                : "text-slate-600 hover:bg-white"
            }`}
          >
            Manager Login
          </button>
        </div>

        <p className="mt-5 text-center text-sm text-slate-600">
          Signing in as{" "}
          <span className="font-bold text-emerald-700">
            {role === "admin" ? "Admin" : "Manager"}
          </span>
        </p>

        {/* Login form */}
        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          <div>
            <label
              htmlFor="login-email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email
            </label>

            <input
              id="login-email"
              type="email"
              autoComplete="username"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your registered email"
              required
              className="w-full rounded-xl border border-slate-300 bg-blue-50/80 px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
            />
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-xl border border-slate-300 bg-blue-50/80 px-4 py-3.5 pr-20 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-emerald-700 hover:text-emerald-900"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="mt-3 text-right">
              <Link
                to="/m-s-monir-enterprise/forgot-password"
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-900 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {message && (
            <div
              role="alert"
              className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-800"
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-700 px-5 py-4 font-bold text-white shadow-md transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200 active:scale-[0.99]"
          >
            Login as {role === "admin" ? "Admin" : "Manager"}
          </button>
        </form>

        {/* Account setup information */}
        <div className="my-6 border-t border-slate-200" />

        {role === "admin" ? (
          <div className="text-center">
            <p className="text-xs leading-5 text-slate-500">
              Admin account setup must be completed securely.
            </p>

            <button
              type="button"
              disabled
              className="mt-3 w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-400"
            >
              Create Admin Account
            </button>

            <p className="mt-4 text-xs leading-5 text-slate-500">
              A verification code will be sent to your registered email
              after email verification is connected.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm leading-6 text-slate-600">
              Manager accounts are created and managed by Admin.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              Contact your Admin if you need account access.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-7 border-t border-slate-200 pt-5 text-center">
          <Link
            to="/m-s-monir-enterprise"
            className="text-sm font-semibold text-emerald-700 hover:underline"
          >
            ← Back to Shop Website
          </Link>

          <p className="mt-3 text-xs text-slate-400">
            M/S MONIR ENTERPRISE · MONIR GROUP
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;
