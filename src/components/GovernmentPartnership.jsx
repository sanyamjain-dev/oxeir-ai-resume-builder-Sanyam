import { CheckCircle } from "lucide-react";

const GovernmentPartnership = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          Government/NGO Partnerships
        </h2>
        <p className="text-xl text-gray-600 mb-12">We Align With:</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            "PMKVY 4.0 and Skill India Mission",
            "NSDC-Aligned Curriculum",
            "NGO Skill Upliftment Programs",
            "Atmanirbhar Bharat Placements",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Apply for Government Collaboration
          </button>
        </div>
      </div>
    </section>
  );
};

export default GovernmentPartnership;
