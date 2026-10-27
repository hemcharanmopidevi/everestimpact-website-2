"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "everest-wishlist";

function read(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]") as string[];
  } catch {
    return [];
  }
}

export function useWishlist() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(read());
    const onStorage = () => setIds(read());
    window.addEventListener("storage", onStorage);
    window.addEventListener("wishlist-updated", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("wishlist-updated", onStorage);
    };
  }, []);

  const persist = useCallback((next: string[]) => {
    setIds(next);
    localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("wishlist-updated"));
  }, []);

  const has = useCallback((id: string) => ids.includes(id), [ids]);

  const toggle = useCallback(
    (id: string) => {
      const next = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
      persist(next);
    },
    [ids, persist]
  );

  return { ids, has, toggle };
}
