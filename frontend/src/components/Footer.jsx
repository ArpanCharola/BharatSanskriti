// src/components/Footer.jsx
import { Link } from "react-router-dom"; 

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-8 lg:px-16 w-full">
      <div className="grid md:grid-cols-3 gap-8 w-full">
        
        {/* Branding */}
        <div className="w-full">
          <h2 className="text-2xl font-bold text-accent">Bharat Sanskriti</h2>
          <p className="mt-2 text-sm text-gray-300">
            Celebrating India’s rich cultural heritage, traditions, and monuments.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-accent mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/states" className="hover:text-accent">States and UTs</Link></li>
            <li><Link to="/heritages" className="hover:text-accent">Heritage</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full">
          <h3 className="text-lg font-semibold text-accent mb-3">Contact Us</h3>
          <p>Email: <a href="mailto:info@bharatsanskriti.in" className="hover:text-accent">info.bharatsanskriti@gmail.com</a></p>
          <p>Phone: +91 98765 43210</p>
          <p>Follow us:</p>
          <div className="flex gap-3 mt-2">
            <a href="#" className="hover:text-accent">🌐</a>
            <a href="#" className="hover:text-accent">📷</a>
            <a href="#" className="hover:text-accent">🐦</a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm text-gray-400 w-full">
        © {new Date().getFullYear()} Bharat Sanskriti. All Rights Reserved.
      </div>
    </footer>
  );
}
