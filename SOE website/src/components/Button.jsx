import { Link } from "react-router-dom";

function Button({ children, to, variant = "primary" }) {
  const base =
    "inline-block px-6 py-3 rounded-full font-semibold transition duration-300";

  const styles =
    variant === "secondary"
      ? "border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
      : "bg-blue-900 text-white hover:bg-blue-800 hover:scale-105 shadow-lg";

  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

export default Button;