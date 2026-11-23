import { useState } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  async function copy(text) {
    setCopied(false);
    setError("");

    if (typeof navigator === "undefined" || !navigator.clipboard?.writeText) {
      setError("Clipboard access is unavailable in this browser.");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setError("Could not copy the profile link. Check your browser permissions.");
    }
  }

  return { copy, copied, error };
}
