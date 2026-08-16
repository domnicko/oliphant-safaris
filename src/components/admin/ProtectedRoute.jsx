import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAuth } from "../../lib/AuthContext.jsx";

/**
 * Wraps admin pages. Shows a loader while checking auth state, redirects
 * to /admin/login if not signed in, otherwise renders the protected content.
 */
export default function ProtectedRoute({ children }) {
  const { isLoading, isLoggedIn } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <Loader2 size={28} className="animate-spin text-ochre" />
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}