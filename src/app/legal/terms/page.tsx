import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Terms & conditions" };

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & conditions"
      lede="Placeholder terms for this demo. Replace them with the institute's official wording before launch."
    >
      <p>
        Course access, payments and refunds in a live deployment are governed by Everest
        Impact&apos;s official terms.
      </p>
      <ul>
        <li>Accounts are personal and cannot be transferred.</li>
        <li>Course validity starts on the date of purchase.</li>
        <li>Course content may not be shared, redistributed or resold.</li>
        <li>Live class schedules can change, with notice given in advance.</li>
      </ul>
    </LegalPage>
  );
}
