import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Refunds & cancellation" };

export default function RefundsPage() {
  return (
    <LegalPage
      title="Refunds & cancellation"
      lede="Placeholder policy for this demo. Replace it with the institute's official policy before launch."
    >
      <p>
        Digital course purchases are usually non-refundable once access has been granted.
      </p>
      <p>Live batches may allow cancellation for a short window before the first class.</p>
    </LegalPage>
  );
}
