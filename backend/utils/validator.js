/*
 Validates if a string follows the format X->Y
 where X and Y are single uppercase letters.
 */
function isValidEdge(input) {
  if (typeof input !== "string") return false;

  const trimmed = input.trim();

  // Strict pattern: A->B
  const regex = /^[A-Z]->[A-Z]$/;

  if (!regex.test(trimmed)) return false;

  const [parent, child] = trimmed.split("->");

  // Reject self-loops
  if (parent === child) return false;

  return true;
}

module.exports = { isValidEdge };