import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse Sahitya Interiors' portfolio — residential homes, office spaces, modular kitchens, false ceilings and aluminium works across Hyderabad.",
  openGraph: {
    title: "Our Projects | Sahitya Interiors",
    description: "250+ spaces transformed across Hyderabad.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title="Projects That"
        italicTitle="Speak for Themselves"
        subtitle="250+ spaces transformed across Hyderabad — here are some of our favourites."
        breadcrumb="Projects"
      />
      <ProjectsGrid />
      <CTASection
        title="Want to Start Your Project?"
        subtitle="Call us or drop a message — we'll share more photos and get you a free estimate."
        buttonText="Get Free Estimate"
      />
    </>
  );
}
