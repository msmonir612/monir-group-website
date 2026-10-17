
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AUTH_API =
  "http://localhost:5000/api/monir-enterprise/auth";

const Login = () => {
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [setupAvailable, setSetupAvailable] = useState(false);
  const [checkingSetup, setCheckingSetup] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);

  const [name, setName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [bootstrapKey, setBootstrapKey] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const checkSetup = async () => {
      try {
        const response = await fetch(`${AUTH_API}/setup-status`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Setup status check failed.");
        }

        setSetupAvailable(data.setupAvailable === true);
      } catch {
        setMessage(
          "Backend-এর সঙ্গে সংযোগ করা যাচ্ছে না। সার্ভার চালু আছে কি না পরীক্ষা করুন।"
        );
      } finally {
        setCheckingSetup(false);
      }
    };

    checkSetup();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("");

    if (role === "manager") {
      setMessage(
        "Manager Login API এখনো তৈরি করা হয়নি। আপাতত Admin Login ব্যবহার করুন।"
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${AUTH_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login ব্যর্থ হয়েছে।");
      }

      // Store the token for this browser session.
      sessionStorage.setItem("monirEnterpriseToken", data.token);
      sessionStorage.setItem(
        "monirEnterpriseAdmin",
        JSON.stringify(data.admin)
      );

      setMessage("Login সফল হয়েছে।");

      // Dashboard route must be created separately.
      window.location.assign("/m-s-monir-enterprise/erp/dashboard");
    } catch (error) {
      setMessage(error.message || "Login করা যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateAdmin = async (event) => {
    event.preventDefault();
    setMessage("");

    if (password.length < 12 || password.length > 72) {
      setMessage("Password অবশ্যই ১২ থেকে ৭২ অক্ষরের হতে হবে।");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Password এবং Confirm Password মিলছে না।");
      return;
    }

    if (!bootstrapKey.trim()) {
      setMessage("Admin setup key লিখুন।");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${AUTH_API}/setup-first-admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-bootstrap-key": bootstrapKey,
        },
        body: JSON.stringify({
          name,
          email,
          whatsappNumber,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Admin account তৈরি করা যায়নি।");
      }

      setSetupAvailable(false);
      setShowRegistration(false);
      setBootstrapKey("");
      setConfirmPassword("");
      setPassword("");

      setMessage(
        "প্রথম Admin Account তৈরি হয়েছে। এবার Admin Login করুন।"
      );
    } catch (error) {
      setMessage(error.message || "Admin account তৈরি করা যায়নি।");
    } finally {
      setLoading(false);
    }
  };

  const openRegistration = () => {
    setMessage("");
    setShowRegistration(true);
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-100 px-4 py-8 font-sans">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />

      <section className="relative z-10 w-full max-w-md rounded-3xl border border-white/80 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
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

        {showRegistration ? (
          <>
            <h2 className="mt-6 text-center text-xl font-extrabold text-slate-800">
              Create First Admin
            </h2>

            <p className="mt-2 text-center text-sm text-slate-500">
              প্রথম Admin account তৈরির জন্য প্রয়োজনীয় তথ্য দিন।
            </p>

            <form
              onSubmit={handleCreateAdmin}
              className="mt-6 space-y-4"
            >
              <div>
                <label htmlFor="admin-name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  id="admin-name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  minLength={2}
                  maxLength={100}
                  className="w-full rounded-xl border border-slate-300 bg-blue-50/80 px-4 py-3 text-sm outline-none focus:border-emerald-600"
                  placeholder="আপনার নাম"
                />
              </div>

              <div>
                <label htmlFor="admin-email" className="mb-2 block text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  id="admin-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  maxLength={254}
                  className="w-full rounded-xl border border-slate-300 bg-blue-50/80 px-4 py-3 text-sm outline-none focus:border-emerald-600"
                  placeholder="আপনার ইমেইল"
                />
              </div>

              <div>
                <label htmlFor="admin-whatsapp" className="mb-2 block text-sm font-semibold text-slate-700">
                  WhatsApp Number
                </label>
                <input
                  id="admin-whatsapp"
                  type="tel"
                  autoComplete="tel"
                  value={whatsappNumber}
                  onChange={(event) => setWhatsappNumber(event.target.value)}
                  required
                  pattern="^\+[1-9][0-9]{7,14}$"
                  title="দেশের কোডসহ লিখুন, যেমন +8801XXXXXXXXX"
                  className="w-full rounded-xl border border-slate-300 bg-blue-50/80 px-4 py-3 text-sm outline-none focus:border-emerald-600"
                  placeholder="+8801XXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="admin-password" className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  minLength={12}
                  maxLength={72}
                  className="w-full rounded-xl border border-slate-300 bg-blue-50/80 px-4 py-3 text-sm outline-none focus:border-emerald-600"
                  placeholder="কমপক্ষে ১২ অক্ষর"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="mb-2 block text-sm font-semibold text-slate-700">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-blue-50/80 px-4 py-3 text-sm outline-none focus:border-emerald-600"
                  placeholder="পাসওয়ার্ড আবার লিখুন"
                />
              </div>

              <div>
                <label htmlFor="bootstrap-key" className="mb-2 block text-sm font-semibold text-slate-700">
                  Admin Setup Key
                </label>
                <input
                  id="bootstrap-key"
                  type="password"
                  autoComplete="off"
                  value={bootstrapKey}
                  onChange={(event) => setBootstrapKey(event.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-blue-50/80 px-4 py-3 text-sm outline-none focus:border-emerald-600"
                  placeholder="আপনার setup key"
                />
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  এই Key শুধু আপনার নিজের কাছে রাখুন। কারও সঙ্গে শেয়ার করবেন না।
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-emerald-700 px-5 py-4 font-bold text-white shadow-md transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating Account..." : "Create Admin Account"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowRegistration(false);
                  setMessage("");
                }}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50"
              >
                Back to Login
              </button>
            </form>
          </>
        ) : (
          <>
            <p className="mt-5 text-center text-sm text-slate-600">
              Signing in as{" "}
              <span className="font-bold text-emerald-700">
                {role === "admin" ? "Admin" : "Manager"}
              </span>
            </p>

            <form onSubmit={handleLogin} className="mt-6 space-y-5">
              <div>
                <label htmlFor="login-email" className="mb-2 block text-sm font-semibold text-slate-700">
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
                <label htmlFor="login-password" className="mb-2 block text-sm font-semibold text-slate-700">
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
                disabled={loading}
                className="w-full rounded-xl bg-emerald-700 px-5 py-4 font-bold text-white shadow-md transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Please wait..."
                  : `Login as ${role === "admin" ? "Admin" : "Manager"}`}
              </button>
            </form>

            <div className="my-6 border-t border-slate-200" />

            {role === "admin" && (
              <div className="text-center">
                {checkingSetup ? (
                  <p className="text-xs text-slate-500">
                    Admin setup status যাচাই হচ্ছে...
                  </p>
                ) : setupAvailable ? (
                  <>
                    <p className="text-xs leading-5 text-slate-500">
                      প্রথম Admin account এখনো তৈরি করা হয়নি।
                    </p>
                    <button
                      type="button"
                      onClick={openRegistration}
                      className="mt-3 w-full rounded-xl border border-emerald-700 bg-white px-4 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
                    >
                      Create Admin Account
                    </button>
                  </>
                ) : (
                  <p className="text-xs leading-5 text-slate-500">
                    Admin Registration বর্তমানে বন্ধ।
                  </p>
                )}
              </div>
            )}

            {role === "manager" && (
              <div className="text-center">
                <p className="text-sm leading-6 text-slate-600">
                  Manager accounts are created and managed by Admin.
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Contact your Admin if you need account access.
                </p>
              </div>
            )}
          </>
        )}

        {message && !showRegistration && (
          <div
            role="alert"
            className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-800"
          >
            {message}
          </div>
        )}

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
