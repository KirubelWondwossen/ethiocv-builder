import Logo from "../ui/Logo";

import { useState } from "react";

const navLinks = [
  { text: "Features", link: "#features" },
  { text: "CV Templates", link: "#templates" },
  { text: "How it works", link: "#how-it-works" },
  { text: "Pricing", link: "#pricing" },
  { text: "FAQ", link: "#faq" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Main"
      className="relative flex h-13 w-full items-center gap-3 rounded-full bg-white px-4 py-0.5 font-sans shadow-sm"
    >
      <Logo />

      {/* Desktop links */}
      <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
        {navLinks.map((el) => (
          <NavBtns key={el.link} link={el.link}>
            {el.text}
          </NavBtns>
        ))}
      </div>

      <div className="ml-auto hidden items-center gap-2 md:flex">
        {/* <a
          href="#login"
          className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
        >
          Sign in
        </a> */}

        <a
          href="#signup"
          className="rounded-full bg-primary-500 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-primary-600"
        >
          Build CV
        </a>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-gray-100 md:hidden"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          {open ? (
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          ) : (
            <path
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-nav"
          className="absolute top-full left-0 mt-2 flex w-full flex-col gap-1 rounded-2xl bg-white p-3 shadow-sm md:hidden"
        >
          {navLinks.map((el) => (
            <NavBtns
              key={el.link}
              link={el.link}
              onClick={() => setOpen(false)}
            >
              {el.text}
            </NavBtns>
          ))}

          <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-2">
            <a
              href="#login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
            >
              Sign in
            </a>

            <a
              href="#signup"
              className="rounded-lg bg-primary-500 px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-primary-600"
            >
              Build CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavBtns({ link, children, onClick }) {
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

export default Navbar;
