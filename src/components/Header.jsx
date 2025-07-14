import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              DemoJustSkillPay
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#training"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Training
            </a>
            <a
              href="#csr"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              CSR
            </a>
            <a
              href="#impact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Impact
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
