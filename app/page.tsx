import {
  Contact,
  CTA,
  Features,
  Footer,
  Header,
  Hero,
  Pricing,
  Testimonials,
} from "@/components/home-sections";

function HomePage() {
  return (
    <>
      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <Features />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Pricing Section */}
        <Pricing />

        {/* Contact Section */}
        <Contact />

        {/* Final CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default HomePage;
