import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Compass,
  Image as ImageIcon,
  Quote,
  Mail,
  Megaphone,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { useAuth } from "../../lib/AuthContext.jsx";

const NAV_ITEMS = [
  { label: "Dashboard", to: "/admin", icon: LayoutDashboard, end: true },
  { label: "Safaris", to: "/admin/safaris", icon: Map },
  { label: "Experiences", to: "/admin/experiences", icon: Compass },
  { label: "Gallery", to: "/admin/gallery", icon: ImageIcon },
  { label: "Testimonials", to: "/admin/testimonials", icon: Quote },
  { label: "Enquiries", to: "/admin/enquiries", icon: Mail },
  { label: "Promotions", to: "/admin/promotions", icon: Megaphone },
];

export default function AdminLayout() {
  const { user, signOut } = useAuth();

  return (
    <div className="flex min-h-screen bg-sand-light">
      {/* Sidebar */}
      <aside className="flex w-64 shrink-0 flex-col bg-savanna text-cream">
        <div className="p-6">
          <p className="font-display text-xl font-semibold">
            Oliphant <span className="text-gold">Safaris</span>
          </p>
          <p className="mt-1 text-xs uppercase tracking-wide text-cream/60">
            Admin Panel
          </p>
        </div>

        <div className="px-3 pb-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-sm border border-cream/20 px-3 py-2 text-sm text-cream/90 hover:bg-cream/5 hover:text-cream"
          >
            <ExternalLink size={15} />
            View Public Site
          </a>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {NAV_ITEMS.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-cream/10 text-cream"
                    : "text-cream/70 hover:bg-cream/5 hover:text-cream"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-cream/10 p-4">
          <p className="truncate px-2 text-xs text-cream/50">{user?.email}</p>
          <button
            type="button"
            onClick={() => signOut()}
            className="mt-2 flex w-full items-center gap-2 rounded-sm px-2 py-2 text-sm text-cream/70 hover:bg-cream/5 hover:text-cream"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Page content */}
      <main className="flex-1 overflow-x-hidden p-8">
        <Outlet />
      </main>
    </div>
  );
}