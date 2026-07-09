import {
  Eye,
  FileDown,
  FileText,
  Languages,
  LayoutTemplate,
  ShieldCheck,
} from "lucide-react";
import Section from "../ui/Section";

const features = [
  {
    id: 1,
    title: "Build your CV in minutes",
    icon: FileText,
    description:
      "Create a professional CV using a simple step-by-step form. No design experience required.",
  },
  {
    id: 2,
    title: "Live preview",
    icon: Eye,
    description:
      "See your CV update instantly as you type and preview the final layout in real time.",
  },
  {
    id: 3,
    title: "Professional templates",
    icon: LayoutTemplate,
    description:
      "Choose from professionally designed templates, including Classic and Government styles.",
  },
  {
    id: 4,
    title: "English & Amharic support",
    icon: Languages,
    description:
      "Build your CV in English or Amharic with proper Ethiopic font support and localization.",
  },
  {
    id: 5,
    title: "High-quality PDF export",
    icon: FileDown,
    description:
      "Download a clean, print-ready PDF suitable for online applications and physical submissions.",
  },
  {
    id: 6,
    title: "Secure payments & downloads",
    icon: ShieldCheck,
    description:
      "Pay securely through Chapa and receive a protected download link for your generated CV.",
  },
];

function Features() {
  return (
    <Section sectionId="features" className="mt-8 px-6 md:px-12 lg:px-20">
      <div className="w-full flex flex-col items-center text-center">
        <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
          Features
        </span>

        <h2 className="text-gray-800 font-bold text-2xl sm:text-3xl mt-3 mb-3 max-w-2xl">
          Everything you need to create a professional CV
        </h2>

        <h3 className="text-gray-600 font-sans font-medium text-base sm:text-xl leading-relaxed max-w-xl mb-10 sm:mb-12">
          Designed for Ethiopian job seekers with bilingual support,
          professional templates, and high-quality PDF exports.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full">
          {features.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              description={el.description}
              icon={el.icon}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Features;

function Card({ title, description, icon: Icon }) {
  return (
    <div className="p-5 sm:p-6 bg-white border border-gray-200 flex flex-col rounded-2xl items-start gap-3 text-left transition-all duration-200 hover:border-primary-300 hover:shadow-md">
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100">
        <Icon size={22} className="text-primary-600" />
      </div>
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
