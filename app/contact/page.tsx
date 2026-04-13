import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Sahitya Interiors for a free interior design consultation in Hyderabad. Call +91 98765 43210 or fill in our form.",
  openGraph: {
    title: "Contact Sahitya Interiors",
    description: "Free consultation, no commitment. We reply within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Let's Create Your"
        italicTitle="Dream Space"
        subtitle="Free consultation, no commitment. We'll get back to you within 24 hours."
        breadcrumb="Contact"
      />
      <ContactSection />
    </>
  );
}
