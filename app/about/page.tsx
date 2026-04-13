import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import AboutStory from "@/components/sections/AboutStory";
import ValuesSection from "@/components/sections/ValuesSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sahitya Interiors has been transforming homes and offices across Hyderabad for 10+ years. Learn about our story, values, and the team behind our beautiful spaces.",
  openGraph: {
    title: "About Us | Sahitya Interiors",
    description:
      "10+ years of crafting beautiful, functional spaces across Hyderabad.",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="Built on Trust,"
        italicTitle="Designed with Heart"
        subtitle="A decade of crafting beautiful, functional spaces across Hyderabad."
        breadcrumb="About"
      />
      <AboutStory />
      <ValuesSection />
      <CTASection
        title="Let's Build Something Beautiful Together"
        subtitle="Get in touch for a free consultation and estimate."
        buttonText="Contact Us Today"
      />
    </>
  );
}
