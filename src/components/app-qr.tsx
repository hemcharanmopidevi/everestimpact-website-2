"use client";

import QRCode from "qrcode";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Platform = "ios" | "android";

export function AppQr() {
  const [platform, setPlatform] = useState<Platform>("android");
  const [qr, setQr] = useState("");

  useEffect(() => {
    const url = `${window.location.origin}/app?platform=${platform}`;
    QRCode.toDataURL(url, {
      margin: 1,
      width: 240,
      color: { dark: "#1F1B3B", light: "#ffffff" },
    }).then(setQr);
  }, [platform]);

  return (
    <div className="flex items-start gap-4">
      <div className="size-28 shrink-0 rounded-md bg-white p-1.5">
        {qr ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={qr}
            alt={`QR code to download the ${platform === "ios" ? "Apple" : "Android"} app`}
            className="size-full"
          />
        ) : (
          <div className="size-full animate-pulse bg-slate-100" />
        )}
      </div>
      <div>
        <div role="group" aria-label="Phone type" className="inline-flex rounded-md border border-night-contour p-0.5 text-sm">
          {(["android", "ios"] as const).map((p) => (
            <button
              key={p}
              type="button"
              aria-pressed={platform === p}
              onClick={() => setPlatform(p)}
              className={cn(
                "rounded-[4px] px-3 py-1.5 font-medium transition",
                platform === p ? "bg-night-foreground text-night" : "text-night-muted hover:text-night-foreground"
              )}
            >
              {p === "ios" ? "iPhone" : "Android"}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm leading-snug text-night-muted">
          Scan with your phone camera to get the app.
        </p>
      </div>
    </div>
  );
}
