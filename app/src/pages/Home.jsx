import Features from "../components/features/Features";
import Footer from "../components/features/Footer";
import Hero from "../components/features/Hero";
import HowItWorks from "../components/features/HowItWorks";
import Pricing from "../components/features/Pricing";
import TemplateShowCase from "../components/features/TemplateShowCase";
import MainContainer from "../components/layouts/MainContainer";
import Navbar from "../components/layouts/Navbar";

function Home() {
  return (
    <MainContainer>
      <header className="sticky top-0 z-50 backdrop-blur">
        <div className="mx-auto w-full px-4 sm:px-4 lg:px-6 py-2">
          <Navbar />
        </div>
      </header>

      <main className="mx-auto w-full px-3 py-8 sm:px-6 lg:px-6">
        <Hero />
        <Features />
        <TemplateShowCase />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </MainContainer>
  );
}

export default Home;
