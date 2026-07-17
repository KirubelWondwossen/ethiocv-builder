import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";
import { TemplatesSection } from "../ui/TemplateCards";

function TemplateShowCase() {
  return (
    <Section className="mt-8 px-6 md:px-12 lg:px-20" sectionId={"templates"}>
      <div className="w-full flex flex-col items-center text-center">
        <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
          Templates
        </span>
        <SectionHeader>Choose a professional template</SectionHeader>
        <h3 className="text-gray-600 font-sans font-medium text-base sm:text-xl leading-relaxed max-w-xl mb-10 sm:mb-12">
          Designed for Ethiopian job seekers with clean layouts, bilingual
          support, and print-ready formatting.
        </h3>
        <TemplatesSection />
      </div>
    </Section>
  );
}

export default TemplateShowCase;
