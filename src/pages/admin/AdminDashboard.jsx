import { useEffect, useState } from "react";
import { Map, Compass, Image as ImageIcon, Mail } from "lucide-react";
import { supabase } from "../../lib/supabaseClient.js";

const STAT_CARDS = [
  { key: "safaris", label: "Safaris", icon: Map },
  { key: "experiences", label: "Experiences", icon: Compass },
  { key: "gallery_images", label: "Gallery Photos", icon: ImageIcon },
  { key: "enquiries", label: "Enquiries", icon: Mail },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    Promise.all(
      STAT_CARDS.map(({ key }) =>
        supabase.from(key).select("*", { count: "exact", head: true })
      )
    ).then((results) => {
      if (!isMounted) return;
      const next = {};
      results.forEach((res, i) => {
        next[STAT_CARDS[i].key] = res.count ?? 0;
      });
      setCounts(next);
      setLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-savanna">Dashboard</h1>
      <p className="mt-1 text-sm text-stone">
        A quick overview of what's currently on your site.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAT_CARDS.map(({ key, label, icon: Icon }) => (
          <div key={key} className="rounded-sm bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-savanna/10 text-savanna">
              <Icon size={20} />
            </div>
            <p className="mt-4 text-3xl text-savanna">
              {loading ? "—" : counts[key]}
            </p>
            <p className="text-sm text-stone">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}