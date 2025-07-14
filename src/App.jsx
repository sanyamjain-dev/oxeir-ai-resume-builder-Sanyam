import "./App.css";
import { useState, useEffect } from "react";

import { impactStats } from "./landing";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/PartnerSection";
import TrainingTracksSection from "./components/TrainingTracksSection";
import CSRModelSection from "./components/CSRModelSection";
import ImpactMetricsSection from "./components/ImpactMetricsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import GovernmentPartnership from "./components/GovernmentPartnership";
import FAQSection from "./components/FAQSection";
import ContactFormSection from "./components/ContactFormSection";
import Footer from "./components/Footer";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    partnershipType: "corporate",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % impactStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      partnershipType: "corporate",
      message: "",
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    }); //We can use this data for emailJS for email
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection currentStat={currentStat} />

      {/* Why Partner Section */}
      <PartnerSection />

      {/* Training Tracks Section */}
      <TrainingTracksSection />

      {/* CSR Models Section */}
      <CSRModelSection />

      {/* Impact Metrics Section */}
      <ImpactMetricsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Government Partnerships Section */}
      <GovernmentPartnership />

      {/* FAQs Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <ContactFormSection
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        formData={formData}
        isSubmitted={isSubmitted}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
