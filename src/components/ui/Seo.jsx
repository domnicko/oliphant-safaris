import { Helmet } from "react-helmet-async";

const SITE_NAME = "Oliphant Safaris";

/**
 * Sets the page <title> and meta description for the current route.
 * Usage: <Seo title="Safaris & Tours" description="Browse Kenya..." />
 * `title` is automatically suffixed with " | Oliphant Safaris".
 */
export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}