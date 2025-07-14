import { csrModels } from "../landing";

const CSRModelSection = () => {
  return (
    <section id="csr" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          CSR Sponsorship Models
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {csrModels.map((model, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 ${model.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <model.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {model.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {model.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Partner with Us
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
            Get Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CSRModelSection;
