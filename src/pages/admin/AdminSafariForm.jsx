import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, Trash2, Loader2, Save, Upload } from "lucide-react";
import {
  getSafariById,
  createSafari,
  updateSafari,
  uploadSafariFile,
} from "../../lib/adminSafaris.js";

const CATEGORIES = [
  "Kenya Safaris",
  "Tanzania Safaris",
  "Beach Holiday",
  "Beach & Safari",
  "Luxury Safaris",
  "Family Safaris",
  "Honeymoon Safaris",
  "Budget Safaris",
  "Photography Safaris",
];

const emptyForm = {
  name: "",
  slug: "",
  destination: "",
  duration: "",
  categories: [],
  startingPrice: "",
  image: "",
  shortDescription: "",
  overview: "",
  accommodation: "",
  importantInfo: "",
  isFeatured: false,
};

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminSafariForm() {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [highlightsText, setHighlightsText] = useState("");
  const [includedText, setIncludedText] = useState("");
  const [excludedText, setExcludedText] = useState("");
  const [galleryText, setGalleryText] = useState("");
  const [itinerary, setItinerary] = useState([{ day: 1, title: "", description: "" }]);
  const [slugTouched, setSlugTouched] = useState(isEditing); // don't auto-slug when editing
  const [imageFile, setImageFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);

  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEditing) return;
    getSafariById(id)
      .then((data) => {
        setForm({
          name: data.name,
          slug: data.slug,
          destination: data.destination,
          duration: data.duration,
          categories: data.categories && data.categories.length > 0 ? data.categories : [],
          startingPrice: data.startingPrice || "",
          image: data.image,
          shortDescription: data.shortDescription,
          overview: data.overview,
          accommodation: data.accommodation,
          importantInfo: data.importantInfo,
          isFeatured: data.isFeatured || false,
        });
        setHighlightsText((data.highlights || []).join("\n"));
        setIncludedText((data.included || []).join("\n"));
        setExcludedText((data.excluded || []).join("\n"));
        setGalleryText((data.gallery || []).join("\n"));
        setItinerary(
          data.itinerary && data.itinerary.length > 0
            ? data.itinerary
            : [{ day: 1, title: "", description: "" }]
        );
      })
      .catch((err) => setError(`Failed to load safari: ${err.message}`))
      .finally(() => setLoading(false));
  }, [id, isEditing]);

  const handleNameChange = (value) => {
    setForm((prev) => ({
      ...prev,
      name: value,
      slug: slugTouched ? prev.slug : slugify(value),
    }));
  };

  const toggleCategory = (category) => {
    setForm((prev) => {
      const current = prev.categories || [];
      const next = current.includes(category)
        ? current.filter((c) => c !== category)
        : [...current, category];
      return { ...prev, categories: next };
    });
  };

  const updateItineraryDay = (index, field, value) => {
    setItinerary((prev) =>
      prev.map((day, i) => (i === index ? { ...day, [field]: value } : day))
    );
  };

  const addItineraryDay = () => {
    setItinerary((prev) => [...prev, { day: prev.length + 1, title: "", description: "" }]);
  };

  const removeItineraryDay = (index) => {
    setItinerary((prev) =>
      prev.filter((_, i) => i !== index).map((day, i) => ({ ...day, day: i + 1 }))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim() || !form.slug.trim()) {
      setError("Name and slug are required.");
      return;
    }
    if (!form.categories || form.categories.length === 0) {
      setError("Please select at least one category.");
      return;
    }
    if (!form.image && !imageFile) {
      setError("Please upload a main photo for this safari.");
      return;
    }

    const payload = {
      ...form,
      highlights: highlightsText.split("\n").map((s) => s.trim()).filter(Boolean),
      included: includedText.split("\n").map((s) => s.trim()).filter(Boolean),
      excluded: excludedText.split("\n").map((s) => s.trim()).filter(Boolean),
      gallery: galleryText.split("\n").map((s) => s.trim()).filter(Boolean),
      itinerary: itinerary.filter((d) => d.title.trim() || d.description.trim()),
    };

    setSaving(true);
    try {
      if (imageFile) {
        setUploadingImage(true);
        payload.image = await uploadSafariFile(imageFile);
        setUploadingImage(false);
      }

      if (isEditing) {
        await updateSafari(id, payload);
      } else {
        await createSafari(payload);
      }
      navigate("/admin/safaris");
    } catch (err) {
      setError(`Failed to save: ${err.message}`);
      setSaving(false);
      setUploadingImage(false);
    }
  };

  const handleImageFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setImageFile(selected);
    setImagePreviewUrl(URL.createObjectURL(selected));
  };

  const inputClass =
    "w-full rounded-sm border border-sand bg-white px-3 py-2 text-sm text-charcoal focus:border-ochre focus:outline-none";
  const labelClass = "mb-1.5 block text-sm font-medium text-savanna";

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-3 py-24 text-stone">
        <Loader2 size={28} className="animate-spin text-ochre" />
        <p className="text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Link to="/admin/safaris" className="inline-flex items-center gap-1 text-sm text-stone hover:text-savanna">
        <ArrowLeft size={14} />
        Back to Safaris
      </Link>
      <h1 className="mt-3 text-2xl text-savanna">
        {isEditing ? "Edit Safari" : "Add New Safari"}
      </h1>

      {error && (
        <p className="mt-4 rounded-sm bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="mt-6 space-y-8">
        {/* Basic info */}
        <div className="rounded-sm bg-white p-6 shadow-sm">
          <h2 className="text-lg text-savanna">Basic Information</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={labelClass}>Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => handleNameChange(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Slug (used in the page URL)</label>
              <input
                type="text"
                required
                value={form.slug}
                onChange={(e) => {
                  setSlugTouched(true);
                  setForm((prev) => ({ ...prev, slug: e.target.value }));
                }}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Destination</label>
              <input
                type="text"
                value={form.destination}
                onChange={(e) => setForm((prev) => ({ ...prev, destination: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Duration</label>
              <input
                type="text"
                placeholder="e.g. 5 Days / 4 Nights"
                value={form.duration}
                onChange={(e) => setForm((prev) => ({ ...prev, duration: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>
                Categories <span className="font-normal text-stone">(select all that apply)</span>
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {CATEGORIES.map((c) => (
                  <label
                    key={c}
                    className="flex items-center gap-2 rounded-sm border border-sand bg-white px-3 py-2 text-sm text-charcoal"
                  >
                    <input
                      type="checkbox"
                      checked={form.categories.includes(c)}
                      onChange={() => toggleCategory(c)}
                      className="h-4 w-4 rounded border-sand text-ochre focus:ring-ochre"
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className={labelClass}>Starting Price (optional)</label>
              <input
                type="text"
                placeholder="Leave blank for 'Price on request'"
                value={form.startingPrice}
                onChange={(e) => setForm((prev) => ({ ...prev, startingPrice: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass}>Main Photo</label>
              {(imagePreviewUrl || form.image) && (
                <div className="mb-3 aspect-video w-full overflow-hidden rounded-sm bg-sand-light">
                  <img
                    src={imagePreviewUrl || form.image}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <label className="flex cursor-pointer items-center justify-center gap-2 rounded-sm border border-dashed border-sand bg-sand-light px-4 py-6 text-sm text-savanna hover:bg-sand">
                <Upload size={18} />
                {imageFile
                  ? imageFile.name
                  : form.image
                  ? "Upload a new photo to replace this one"
                  : "Click to upload a photo"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="hidden"
                />
              </label>
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-center gap-2 text-sm text-savanna">
                <input
                  type="checkbox"
                  checked={form.isFeatured}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, isFeatured: e.target.checked }))
                  }
                  className="h-4 w-4 rounded border-sand text-ochre focus:ring-ochre"
                />
                Show on Homepage (featured safari)
              </label>
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div className="rounded-sm bg-white p-6 shadow-sm">
          <h2 className="text-lg text-savanna">Descriptions</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className={labelClass}>Short Description (used on cards)</label>
              <textarea
                rows={2}
                value={form.shortDescription}
                onChange={(e) => setForm((prev) => ({ ...prev, shortDescription: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Overview (used on the detail page)</label>
              <textarea
                rows={4}
                value={form.overview}
                onChange={(e) => setForm((prev) => ({ ...prev, overview: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Highlights (one per line)</label>
              <textarea
                rows={4}
                value={highlightsText}
                onChange={(e) => setHighlightsText(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Accommodation</label>
              <textarea
                rows={2}
                value={form.accommodation}
                onChange={(e) => setForm((prev) => ({ ...prev, accommodation: e.target.value }))}
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Included / Excluded */}
        <div className="rounded-sm bg-white p-6 shadow-sm">
          <h2 className="text-lg text-savanna">What's Included / Excluded</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Included (one per line)</label>
              <textarea
                rows={6}
                value={includedText}
                onChange={(e) => setIncludedText(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Excluded (one per line)</label>
              <textarea
                rows={6}
                value={excludedText}
                onChange={(e) => setExcludedText(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className={labelClass}>Important Information</label>
            <textarea
              rows={2}
              value={form.importantInfo}
              onChange={(e) => setForm((prev) => ({ ...prev, importantInfo: e.target.value }))}
              className={inputClass}
            />
          </div>
        </div>

        {/* Itinerary */}
        <div className="rounded-sm bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-savanna">Itinerary</h2>
            <button
              type="button"
              onClick={addItineraryDay}
              className="inline-flex items-center gap-1 text-sm font-semibold text-ochre hover:text-ochre-dark"
            >
              <Plus size={16} />
              Add Day
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {itinerary.map((day, index) => (
              <div key={index} className="rounded-sm border border-sand p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-savanna">Day {day.day}</p>
                  {itinerary.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItineraryDay(index)}
                      className="text-red-500 hover:text-red-600"
                      aria-label={`Remove day ${day.day}`}
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
                <div className="mt-2 space-y-2">
                  <input
                    type="text"
                    placeholder="Day title"
                    value={day.title}
                    onChange={(e) => updateItineraryDay(index, "title", e.target.value)}
                    className={inputClass}
                  />
                  <textarea
                    rows={2}
                    placeholder="Day description"
                    value={day.description}
                    onChange={(e) => updateItineraryDay(index, "description", e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="rounded-sm bg-white p-6 shadow-sm">
          <h2 className="text-lg text-savanna">Gallery Images</h2>
          <p className="mt-1 text-xs text-stone">One image URL per line.</p>
          <textarea
            rows={4}
            value={galleryText}
            onChange={(e) => setGalleryText(e.target.value)}
            className={`mt-2 ${inputClass}`}
          />
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" disabled={saving} className="btn-primary disabled:opacity-60">
            {saving ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                {uploadingImage ? "Uploading photo..." : "Saving..."}
              </>
            ) : (
              <>
                <Save size={16} />
                {isEditing ? "Save Changes" : "Create Safari"}
              </>
            )}
          </button>
          <Link to="/admin/safaris" className="text-sm text-stone hover:text-savanna">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}