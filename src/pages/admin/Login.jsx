import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "sonner";
import auth from "@/firebase";
import { useAuth } from "@/context/AuthContext";
import apeirosLogo from "@/assets/apeiros-logo.png";

export default function Login() {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-sky-50 to-violet-100 p-4">
      <div className="pointer-events-none absolute -left-16 top-8 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-5xl items-center justify-center">
        <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-2xl backdrop-blur-xl md:grid-cols-2">
          <div className="hidden bg-gradient-to-br from-indigo-600 to-sky-500 p-10 text-white md:flex md:flex-col md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">Apeiros Admin</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">Grow smarter with your retail insights.</h2>
              <p className="mt-4 text-sm text-white/85">
                Secure admin access for analytics, lead tracking, and content control.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 text-sm">
              <p className="font-semibold">Secure Access</p>
              <p className="mt-1 text-white/80">Only authorized team members can sign in.</p>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="mb-8 text-center">
              <img src={apeirosLogo} alt="Apeiros logo" className="mx-auto mb-4 h-12 w-auto" />
              <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
              <p className="mt-2 text-sm text-slate-500">Sign in to continue to admin dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="admin@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:from-indigo-700 hover:to-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="mt-5 text-center">
              <Link
                to="#"
                onClick={handleForgotPassword}
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                {resetLoading ? "Sending reset email..." : "Forgot Password?"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
