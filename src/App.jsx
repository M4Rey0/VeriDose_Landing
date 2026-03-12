import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import HowItWorks from "./components/HowItWorks";
import InteractiveMockup from "./components/InteractiveMockup";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import DemoForm from "./components/DemoForm";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <HowItWorks />
        <InteractiveMockup />
        <Results />
        <Testimonials />
        <FAQ />
        <DemoForm />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
