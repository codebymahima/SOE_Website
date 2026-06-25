import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Faculty", path: "/faculty" },
    { name: "Research", path: "/research" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-950 font-bold"
      : "text-slate-700 hover:text-blue-950 transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold text-blue-950">
          School Of Engineering
        </Link>

        <div className="hidden lg:flex gap-6 text-sm font-medium">
          {links.map((link) => (
            <NavLink key={link.name} to={link.path} className={linkClass}>
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl text-blue-950"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 hover:text-blue-950 font-medium"
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;