/**
 * Gets note topics from the slugs.
 * Will only work with note collections.
 * @param {string[]} slugs - Slugs to parse
 * @returns array of strings representing unique topics
 */
export function getNoteTopics(slugs: string[]) {
  // First bit of the slug (ie, 'typescript/enums') is assumed to be the topic
  const topics = slugs.map((slug) => slug.split("/")[0]);
  const dedupedTopics = [...new Set(topics)];
  return dedupedTopics;
}

export function getNoteParam(slug: string) {
  // Get rid of the first bit of the slug
  return slug.split("/").slice(1).join("/");
}
