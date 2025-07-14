import { ArrowRight, Download, Calendar } from "lucide-react";
import { impactStats } from "../landing";

const HeroSection = ({ currentStat }) => {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="animate-pulse absolute top-20 left-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
        <div className="animate-pulse absolute bottom-20 right-1/4 w-16 h-16 bg-orange-200 rounded-full opacity-20"></div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-green-600 bg-clip-text text-transparent leading-tight">
          Empower Your Workforce & 
          <br />
          <span className="text-4xl md:text-6xl">Communities with DemoJustSkillPay</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Join hands with India's most inclusive AI-powered skilling platform.
          Upskill your team, fund future talent, and measure real impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer">
            Partner with Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer">
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Call
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center cursor-pointer">
            <Download className="w-5 h-5 mr-2" />
            Download Brochure
          </button>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-xl transform transition-all duration-500 hover:scale-105 ${
                currentStat === index ? "ring-4 ring-blue-300 scale-105" : ""
              }`}
            >
              <stat.icon className="w-8 h-8 text-blue-600 mb-2 mx-auto" />
              <div className="text-3xl font-bold text-gray-800">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
