const removeLeadingAndTrailingSlashes = (path: string) =>
  path.replace(/(^\/+)|(\/+$)/g, "");

/**
 * @param {string} baseUrl
 * @param  {...string} paths
 * @returns {string}
 */
export default function urlJoin(baseUrl: string, ...paths: string[]): string {
  const { origin, pathname } = new URL(baseUrl);
  const allPaths = [pathname, ...paths];
  return (
    new URL(
      allPaths.map((p) => removeLeadingAndTrailingSlashes(p)).join("/"),
      origin
    ).toString() + "/"
  );
}
