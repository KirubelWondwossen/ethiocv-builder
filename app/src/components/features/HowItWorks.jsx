import {
  FilePenLine,
  LayoutTemplate,
  MonitorSmartphone,
  Download,
} from "lucide-react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    number: "01",
    icon: FilePenLine,
    title: "Fill in your information",
    description:
      "Enter your personal details, education, work experience, skills, and references using our guided form.",
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Choose a template",
    description:
      "Select between the Classic or Government CV template and choose your preferred language.",
  },
  {
    number: "03",
    icon: MonitorSmartphone,
    title: "Preview your CV",
    description:
      "Watch your CV update instantly as you edit. Make changes until everything looks perfect.",
  },
  {
    number: "04",
    icon: Download,
    title: "Download PDF",
    description:
      "Complete the secure payment and download your professionally formatted PDF instantly.",
  },
];

function HowItWorks() {
  return (
    <Section
      className="mt-8 px-6 md:px-12 lg:px-20 py-2"
      sectionId="how-it-works"
    >
      <div className="w-full flex flex-col items-center text-center">
        <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
          How it works
        </span>

        <SectionHeader>
          Create your professional CV in four simple steps
        </SectionHeader>

        <h3 className="text-gray-600 font-sans font-medium text-base sm:text-xl leading-relaxed max-w-xl mb-12 sm:mb-16">
          From entering your information to downloading a print-ready PDF, the
          process is quick and straightforward.
        </h3>

        <div className="w-full flex flex-col gap-10 sm:gap-12">
          {steps.map((step, i) => (
            <StepRow key={step.number} {...step} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default HowItWorks;

function StepRow({ number, icon: Icon, title, description, reverse }) {
  return (
    <div
      className={`flex flex-col md:items-center gap-4 md:gap-10 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2 flex">
        <div className="w-full p-5 sm:p-6 bg-white border border-gray-200 flex flex-col items-start gap-3 rounded-2xl text-left transition-all duration-200 hover:border-primary-300 hover:shadow-md">
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100">
            <Icon size={22} className="text-primary-600" />
          </div>
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-center">
        <span className="text-6xl sm:text-7xl md:text-8xl font-black text-primary-300 leading-none select-none">
          {number}
        </span>
      </div>
    </div>
  );
}
