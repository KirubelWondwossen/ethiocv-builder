import { Heart } from "lucide-react";
import Logo from "../ui/Logo";

const footerLinks = [
  {
    title: "Product",
    links: [
      { text: "Home", href: "/" },
      { text: "Builder", href: "/builder" },
      { text: "Templates", href: "#templates" },
      { text: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "FAQ", href: "#faq" },
      { text: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Privacy Policy", href: "/privacy" },
      { text: "Terms of Service", href: "/terms" },
    ],
  },
];

function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col gap-4 pb-8">
          <Logo />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
            Build professional CVs in English and Amharic with beautifully
            designed templates made for Ethiopian job seekers.
          </p>
        </div>

        <div className="border-t border-gray-200" />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-10">
          {footerLinks.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h4 className="font-semibold text-sm text-gray-800">
                {col.title}
              </h4>

              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-sm text-gray-500 text-center sm:text-left">
          <span>© 2026 EthioCV Builder</span>

          <span className="flex items-center gap-1.5">
            Built with{" "}
            <Heart size={14} className="text-primary-500 fill-primary-500" /> in
            Ethiopia
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
