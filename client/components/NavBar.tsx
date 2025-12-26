import { useState } from "react";
import { Link } from "react-router-dom";
import { Music, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Merch", href: "/merch" },
    // { label: "Register", href: "/register" },
    // { label: "Login", href: "/login" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <img src="/photos/logo.jpg"></img>
            </div>
            <span className="font-display font-bold text-lg text-secondary hidden sm:inline">
              Resonance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-secondary hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 hover:shadow-lg transition-all duration-200"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-secondary" />
            ) : (
              <Menu className="w-6 h-6 text-secondary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 pb-4">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/register"
                className="px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
