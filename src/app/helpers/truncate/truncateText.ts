export const truncateText = (text: string | null, limit: number) => {
  // Check if text is null or undefined
  if (text == null) {
    return "";
  }

  const words = text.split(" ");
  if (words.length <= limit) {
    return text;
  }

  return words.slice(0, limit).join(" ") + "...";
};
