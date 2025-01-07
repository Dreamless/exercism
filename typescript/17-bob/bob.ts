export function hey(message: string): string {
  const normalizedMessage = message.trim();
  const isUpperCase = normalizedMessage === normalizedMessage.toUpperCase() &&
                              /[A-Z]/.test(normalizedMessage);

  if (normalizedMessage === "") {
    return "Fine. Be that way!";
  }

  if (isUpperCase && normalizedMessage.endsWith("?")) {
    return "Calm down, I know what I'm doing!";
  }

  if (isUpperCase) {
    return "Whoa, chill out!";
  }

  if (normalizedMessage.endsWith("?")) {
    return "Sure.";
  }

  return "Whatever.";
}
