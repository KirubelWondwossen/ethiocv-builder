import { Link } from "react-router-dom";

export function NavBtns({ link, children, onClick }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className="rounded-full px-3 py-1.5 text-sm md:text-lg text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
    >
      {children}
    </a>
  );
}

export function NavBtnsLink({ link, children }) {
  return (
    <Link
      className="rounded-full px-3 py-1.5 text-sm md:text-lg text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900"
      to={link}
    >
      {children}
    </Link>
  );
}
