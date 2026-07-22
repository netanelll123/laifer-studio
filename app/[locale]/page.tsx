import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { CreativeProcess } from "@/components/sections/creative-process";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Services />
        <CreativeProcess />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
