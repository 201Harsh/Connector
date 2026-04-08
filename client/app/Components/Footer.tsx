import {
  FaInstagram,
  FaLinkedinIn,
  FaRegHandshake,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sky-600 font-bold text-2xl tracking-tight">
              <FaRegHandshake className="text-cyan-500 text-3xl" />
              <span>Connector</span>
            </div>
            <p className="text-slate-500 text-sm">
              Connecting businesses with the right talent, seamlessly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-sky-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 Connector Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sky-600">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-sky-600">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-sky-600">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
