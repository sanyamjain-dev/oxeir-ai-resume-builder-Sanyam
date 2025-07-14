import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold">DemoJustSkillPay</span>
        </div>
        <p className="text-gray-400 mb-4">
          India's most inclusive AI-powered skillpay
        </p>
      </div>
    </footer>
  );
};

export default Footer;
