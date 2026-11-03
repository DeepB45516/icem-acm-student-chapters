/**
 * Application routing and base path resolution utilities.
 * Handles subfolder deployments (e.g. /icem-acm/ on cPanel) vs root deployments (Vercel/local).
 */

export function getBasePath() {
  if (
    typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }
  if (typeof window !== "undefined") {
    if (window.location.pathname.startsWith("/icem-acm")) {
      return "/icem-acm";
    }
  }
  return "";
}

export function resolvePath(path = "") {
  if (!path) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = getBasePath();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (base && !normalizedPath.startsWith(base)) {
    return `${base}${normalizedPath}`;
  }

  return normalizedPath;
}
