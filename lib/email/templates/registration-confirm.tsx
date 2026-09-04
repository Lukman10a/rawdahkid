import * as React from "react";

export type RegistrationConfirmProps = {
  parentName: string;
  childName: string;
  programmeInterest: string;
  classFormat: string;
};

export function RegistrationConfirmEmail({
  parentName,
  childName,
  programmeInterest,
  classFormat,
}: RegistrationConfirmProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#1a1a1a" }}>
      <h1 style={{ color: "#C9A86A" }}>Welcome to Rawdah Kids, {parentName}!</h1>
      <p>
        Your registration for <strong>{childName}</strong> has been received.
      </p>
      <p>
        Programme: <strong>{programmeInterest}</strong> — {classFormat}
      </p>
      <p>What&apos;s next:</p>
      <ul>
        <li>Our admissions team will review your details within 24 hours.</li>
        <li>You&apos;ll receive payment instructions and class schedule.</li>
        <li>Book a free consultation call: https://calendly.com/markazulbayaan</li>
      </ul>
      <p style={{ color: "#666", fontSize: "12px" }}>
        Questions? Reply to admissions@rawdahkids.org — we&apos;re happy to help.
      </p>
    </div>
  );
}
