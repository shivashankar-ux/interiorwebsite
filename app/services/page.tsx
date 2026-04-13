import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ServicesDetail from "@/components/sections/ServicesDetail";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Sahitya Interiors offers residential interiors, office interiors, modular kitchen, false ceiling, aluminium works, and wardrobe design in Hyderabad.",
  openGraph: {
    title: "Our Services | Sahitya Interiors",
    description: "Complete interior solutions in Hyderabad under one roof.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Offer"
        title="Complete Interior"
        italicTitle="Solutions"
        subtitle="From homes to offices — everything under one roof, delivered with care."
        breadcrumb="Services"
      />
      <ServicesDetail />
      <CTASection
        title="Not Sure Where to Start?"
        subtitle="Call us for a free consultation. We'll help you figure out what your space needs."
        buttonText="Talk to Our Designer"
      />
    </>
  );
}
