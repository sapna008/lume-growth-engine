import { useState } from "react";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "sonner";
import { Eye, EyeOff, Lock, Mail, ShieldCheck, BarChart3, Sparkles } from "lucide-react";
import auth from "@/firebase";
import { useAuth } from "@/context/AuthContext";
import apeirosLogo from "@/assets/apeiros-logo.png";

export default function Login() {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetLoading, setResetLoading] = useState(false);

  if (user) {
    return <Navigate to="/admin" replace />;
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      toast.success("Login successful");
    } catch (loginError) {
      setError(loginError.message || "Invalid credentials");
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email first");
      return;
    }

    setError("");
    setResetLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());
      toast.success("Password reset email sent");
    } catch (resetError) {
      setError(resetError.message || "Failed to send reset email");
      toast.error("Could not send reset email");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-sky-50 to-violet-100 px-4 py-8 sm:px-6">
      {/* Page background image behind the whole card (gradient above is the fallback) */}
      <img
        src="https://media.istockphoto.com/id/1428155311/vector/abstract-green-data-half-tone-plus-background-technology-vector-design.jpg?s=612x612&w=0&k=20&c=DRM5C3O-h-3VMOuljScFQy7YwL4j2rLbxOrP_dcA604="
        alt=""
        aria-hidden="true"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* Strong tinted wash so the (low-res) photo only faintly shows through */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-100/90 via-sky-50/90 to-violet-100/90" />
      <div className="pointer-events-none absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-16 top-8 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.12) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative grid w-full max-w-4xl overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-2xl backdrop-blur-xl md:grid-cols-2"
      >
        {/* Brand / value panel — gradient is the fallback shown if the image fails */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-600 to-sky-500 p-8 text-white md:flex md:flex-col md:justify-between lg:p-10">
          {/* Background image (hidden on load error so the gradient fallback shows) */}
          <img
            src="https://img.magnific.com/premium-vector/online-shopping-digital-technology-with-icon-blue-background-ecommerce-online-store-marketing_252172-219.jpg"
            alt=""
            aria-hidden="true"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
          {/* Readability overlay: indigo gradient over the image so white text stays legible */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-900/85 via-indigo-800/80 to-sky-700/75" />
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 45%)",
            }}
          />
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
              <Sparkles className="h-3.5 w-3.5" />
              Apeiros Admin
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(15,23,42,0.45)] lg:text-4xl">
              Grow smarter with your retail insights.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/90 drop-shadow-[0_1px_4px_rgba(15,23,42,0.4)]">
              Secure control center for analytics, lead tracking, and live content management.
            </p>
          </div>

          <ul className="relative mt-8 space-y-3">
            <li className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm">
              <BarChart3 className="h-5 w-5 shrink-0 text-white" />
              <span className="text-sm font-medium text-white/90">Real-time leads &amp; growth analytics</span>
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm">
              <ShieldCheck className="h-5 w-5 shrink-0 text-white" />
              <span className="text-sm font-medium text-white/90">Only authorized team members can sign in</span>
            </li>
          </ul>
        </div>

        {/* Login form */}
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="mb-7 text-center md:text-left">
            <img src={apeirosLogo} alt="Apeiros admin logo" className="mx-auto mb-4 h-11 w-auto md:mx-0" />
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Welcome back</h1>
            <p className="mt-2 text-sm text-slate-500">Sign in to continue to your admin dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="min-h-[48px] w-full rounded-xl border border-slate-300 bg-white pl-11 pr-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="admin@company.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="min-h-[48px] w-full rounded-xl border border-slate-300 bg-white pl-11 pr-12 py-3 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error ? (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:from-indigo-700 hover:to-sky-600 hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="mt-5 text-center md:text-left">
            <button
              type="button"
              onClick={handleForgotPassword}
              disabled={resetLoading}
              className="text-sm font-medium text-indigo-600 transition hover:text-indigo-700 disabled:opacity-60"
            >
              {resetLoading ? "Sending reset email..." : "Forgot password?"}
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
