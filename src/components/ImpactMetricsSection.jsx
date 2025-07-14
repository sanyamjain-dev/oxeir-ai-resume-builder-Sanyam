
import { impactMetrics } from "../landing";

const ImpactMetricsSection = () => {
  return (
    <section
      id="impact"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Impact Metrics You Can Track
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              <metric.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">{metric.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            See Sample Impact Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsSection;
