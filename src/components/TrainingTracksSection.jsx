import { CheckCircle, BookOpen } from "lucide-react";
import { trainingTracks } from "../landing";

const TrainingTracksSection = () => {
  return (
    <section
      id="training"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Corporate Training Tracks
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {trainingTracks.map((track, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${track.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {track.name}
              </h3>
              <p className="text-gray-600 mb-4">Ideal for: {track.idealFor}</p>
              <ul className="space-y-2 mb-6">
                {track.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Get Pricing
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingTracksSection;
