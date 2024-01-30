/**
 * Builds a URL by replacing placeholders with provided values.
 *
 * @param path - The URL path with placeholders.
 * @param args - An object containing values to replace placeholders.
 * @returns The constructed URL.
 */
const urlBuilder = (
  path: string,
  args: Record<string, string> = {},
): string => {
  return path.replace(/:\w+/g, (match) => args[match.slice(1)] || match);
};

export default urlBuilder;
