import { ArrowRight, Check } from "lucide-react";
import CalssicTemplatePlaceholder from "./CalssicTemplatePlaceholder";
import GovtTemplatePlaceholder from "./GovtTemplatePlaceholder";
import DiasporaTemplatePlaceholder from "./DiasporaTemplatePlaceholder";

const templates = [
  {
    key: "classic",
    name: "Classic Template",
    tagline: "Clean and modern layout",
    Placeholder: CalssicTemplatePlaceholder,
    features: [
      "Clean typography",
      "Modern spacing",
      "Excellent readability",
      "Works for most industries",
    ],
    buttonLabel: "Use Classic",
  },
  {
    key: "government",
    name: "Government Template",
    tagline: "Built for civil service applications",
    Placeholder: GovtTemplatePlaceholder,
    features: [
      "Civil service format",
      "E.C. calendar date fields",
      "Structured, tabular layout",
      "Formal government standards",
    ],
    buttonLabel: "Use Government",
  },
  {
    key: "diaspora",
    name: "Diaspora Template",
    tagline: "International, ATS-friendly format",
    Placeholder: DiasporaTemplatePlaceholder,
    features: [
      "ATS-friendly structure",
      "Achievement-focused bullets",
      "Two-column layout",
      "Built for international roles",
    ],
    buttonLabel: "Use Diaspora",
  },
];

function TemplateCard({
  name,
  tagline,
  Placeholder,
  features,
  buttonLabel,
  onSelect,
}) {
  return (
    <div
      className="h-full p-5 sm:p-6 bg-white border border-gray-200 flex flex-col rounded-2xl
      items-start gap-4 text-left transition-all duration-200
      hover:border-primary-300 hover:shadow-md"
    >
      <div className="w-full aspect-3/4 rounded-xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
        <Placeholder />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
        <h4 className="font-medium text-sm text-gray-500">{tagline}</h4>
      </div>

      <ul className="w-full flex flex-col gap-2 font-medium text-gray-700 text-sm sm:text-base">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start w-full gap-2">
            <Check className="text-primary-500 shrink-0 mt-0.5" size={18} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onSelect}
        className="mt-auto w-full flex gap-1.5 items-center justify-center rounded-2xl bg-primary-500 px-5 py-2.5 text-sm sm:text-base font-medium
          text-white transition-colors hover:bg-primary-600 cursor-pointer"
      >
        <span>{buttonLabel}</span>
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

export function TemplatesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
      {templates.map((template) => (
        <TemplateCard
          key={template.key}
          {...template}
          onSelect={() => {
            // e.g. navigate('/builder', { state: { template: template.key } })
          }}
        />
      ))}
    </div>
  );
}

export default TemplateCard;
