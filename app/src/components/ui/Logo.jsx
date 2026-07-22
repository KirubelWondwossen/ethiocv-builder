import { Link } from "react-router-dom";

function Logo({ link }) {
  return (
    <Link
      to={link}
      className="group inline-flex items-center gap-2 sm:gap-2.5 select-none"
    >
      <svg
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 sm:h-8.5 sm:w-8.5 shrink-0 transition-transform duration-200 group-hover:-rotate-6"
      >
        <rect width="34" height="34" rx="9" fill="#173A2E" />
        <g transform="rotate(-18 17 17)">
          <ellipse cx="17" cy="17" rx="7.5" ry="9.5" fill="#10b981" />
          <path
            d="M17 8.2C14.5 12 14.5 22 17 25.8"
            stroke="#173A2E"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>

      <span className="text-lg sm:text-2xl font-sans font-bold tracking-tight leading-none">
        <span className="text-[#173A2E]">Ethio</span>
        <span className="text-primary-500">CV</span>
      </span>
    </Link>
  );
}
export default Logo;
