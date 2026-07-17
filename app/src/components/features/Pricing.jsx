import { ArrowRight, CircleCheck } from "lucide-react";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

const features = [
  "Classic Template",
  "Government Template",
  "English & Amharic Support",
  "High-Quality PDF Export",
  "Secure 7-Day Download Link",
];

function Pricing() {
  return (
    <Section
      className="mt-8 px-6 md:px-12 lg:px-20 justify-center"
      sectionId={"pricing"}
    >
      <div className="w-full flex flex-col items-center text-center">
        <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
          Single Price
        </span>
        <SectionHeader>Professional CV</SectionHeader>
        <h3 className="text-gray-600 font-sans font-medium text-base sm:text-xl leading-relaxed max-w-xl mb-8 sm:mb-10">
          One flat price, no subscriptions, no hidden fees.
        </h3>

        <div className="w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-sm p-6 sm:p-8 flex flex-col items-center">
          <h4 className="font-sans font-bold text-4xl sm:text-5xl text-gray-800">
            ETB XXX{" "}
            <span className="text-lg sm:text-xl font-medium text-gray-500">
              / CV
            </span>
          </h4>
          <p className="text-sm text-gray-500 mt-1 mb-6">One-time payment</p>

          <div className="w-full border-t border-gray-100 mb-6" />

          <ul className="w-full flex flex-col gap-3 font-medium text-gray-700 text-sm sm:text-base mb-8">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start w-full gap-2 text-left">
                <CircleCheck
                  className="text-primary-500 shrink-0 mt-0.5"
                  size={18}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="w-full flex gap-1.5 items-center justify-center
              rounded-2xl bg-primary-500 px-5 py-2.5 sm:py-3 text-sm sm:text-base font-medium
              text-white transition-colors hover:bg-primary-600 cursor-pointer"
          >
            <span>Create my CV</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Pricing;
