import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  Users,
  MapPin,
  Compass,
  Wallet,
  ChevronDown,
  ChevronUp,
  Trash2,
  Loader2,
} from "lucide-react";
import { getAllEnquiriesAdmin, deleteEnquiry } from "../../lib/adminEnquiries.js";

function DetailRow({ icon: Icon, label, value }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-2 text-sm">
      <Icon size={14} className="mt-0.5 shrink-0 text-ochre" />
      <span className="text-stone">
        <span className="font-medium text-savanna">{label}:</span> {value}
      </span>
    </div>
  );
}

function EnquiryCard({ enquiry, onDelete, deleting }) {
  const [expanded, setExpanded] = useState(false);
  const date = new Date(enquiry.created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="rounded-sm bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold text-savanna">{enquiry.name}</p>
            <span className="rounded-full bg-sand-light px-2 py-0.5 text-xs font-semibold text-savanna">
              {enquiry.form_type === "enquiry" ? "Safari Enquiry" : "Contact"}
            </span>
          </div>
          <p className="mt-1 text-xs text-stone">{date}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-sm p-2 text-savanna hover:bg-sand-light"
            aria-label={expanded ? "Collapse" : "Expand"}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button
            type="button"
            onClick={() => onDelete(enquiry.id, enquiry.name)}
            disabled={deleting}
            className="rounded-sm p-2 text-red-500 hover:bg-red-50 disabled:opacity-50"
            aria-label={`Delete enquiry from ${enquiry.name}`}
          >
            {deleting ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
          </button>
        </div>
      </div>

      <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
        <DetailRow icon={Mail} label="Email" value={enquiry.email} />
        <DetailRow icon={Phone} label="Phone" value={enquiry.phone} />
      </div>

      {expanded && (
        <div className="mt-4 space-y-2 border-t border-sand pt-4">
          <div className="grid gap-1.5 sm:grid-cols-2">
            <DetailRow icon={Calendar} label="Travel Dates" value={enquiry.travel_dates} />
            <DetailRow icon={Users} label="Travelers" value={enquiry.travelers} />
            <DetailRow icon={MapPin} label="Destination" value={enquiry.destination} />
            <DetailRow icon={Compass} label="Safari Type" value={enquiry.safari_type} />
            <DetailRow icon={MapPin} label="Accommodation" value={enquiry.accommodation} />
            <DetailRow icon={Wallet} label="Budget" value={enquiry.budget} />
          </div>
          {enquiry.message && (
            <div className="mt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-stone">Message</p>
              <p className="mt-1 text-sm text-stone">{enquiry.message}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    setLoading(true);
    getAllEnquiriesAdmin()
      .then(setEnquiries)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete the enquiry from "${name}"? This can't be undone.`)) return;
    setDeletingId(id);
    try {
      await deleteEnquiry(id);
      setEnquiries((prev) => prev.filter((e) => e.id !== id));
    } catch (err) {
      alert(`Failed to delete: ${err.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-savanna">Enquiries</h1>
      <p className="mt-1 text-sm text-stone">{enquiries.length} total</p>

      {loading ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-stone">
          <Loader2 size={28} className="animate-spin text-ochre" />
          <p className="text-sm">Loading...</p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {enquiries.map((enquiry) => (
            <EnquiryCard
              key={enquiry.id}
              enquiry={enquiry}
              onDelete={handleDelete}
              deleting={deletingId === enquiry.id}
            />
          ))}
          {enquiries.length === 0 && (
            <p className="py-16 text-center text-sm text-stone">
              No enquiries yet. Submissions from the Contact and Plan Your Safari
              forms will appear here once those forms are connected to save to
              this table.
            </p>
          )}
        </div>
      )}
    </div>
  );
}