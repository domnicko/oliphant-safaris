import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Lock, Loader2 } from "lucide-react";
import { useAuth } from "../../lib/AuthContext.jsx";

export default function AdminLogin() {
  const { isLoggedIn, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Already logged in — go straight to the dashboard
  if (isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const { error: signInError } = await signIn(email, password);

    setSubmitting(false);
    if (signInError) {
      setError("Incorrect email or password. Please try again.");
    }
    // On success, the isLoggedIn check above will redirect automatically
    // once the auth state updates.
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-savanna px-4">
      <div className="w-full max-w-sm rounded-sm bg-cream p-8 shadow-lg">
        <div className="flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-savanna/10 text-savanna">
            <Lock size={22} />
          </div>
        </div>
        <h1 className="mt-4 text-center text-2xl text-savanna">Admin Login</h1>
        <p className="mt-1 text-center text-sm text-stone">
          Oliphant Safaris content management
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-savanna">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-sand bg-white px-4 py-2.5 text-sm text-charcoal focus:border-ochre focus:outline-none"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-savanna">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-sm border border-sand bg-white px-4 py-2.5 text-sm text-charcoal focus:border-ochre focus:outline-none"
              autoComplete="current-password"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}