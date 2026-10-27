import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      lede="Placeholder policy for this demo. Replace it with the institute's official policy before launch."
    >
      <p>
        In this demo, the contact form and sign-in screens do not send data to a server. Saved
        courses and study plans stay in your own browser.
      </p>
      <p>
        A live version should state what is collected (phone number, email, payment details),
        why it is collected, and how long it is kept.
      </p>
    </LegalPage>
  );
}
