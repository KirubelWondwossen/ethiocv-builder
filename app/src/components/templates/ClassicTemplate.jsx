import { sampleCV } from "./sampleCV";

// Private-sector style CV: prose sections, monochrome with a single emerald
// accent, no photo. Wrapped in @container so it adapts to panel width
// (react-resizable-panels), not viewport width.
export default function ClassicTemplate({ data = sampleCV }) {
  const {
    personal,
    objective,
    education,
    experience,
    skills,
    languages,
    references,
  } = data;

  return (
    <div className="@container w-full">
      <div className="mx-auto max-w-180 bg-white p-4 @sm:p-6 @lg:p-8 text-gray-900 font-sans text-xs @sm:text-sm leading-relaxed">
        <header className="border-b-2 border-emerald-700 pb-3 mb-5">
          <h1 className="text-lg @sm:text-xl @lg:text-2xl font-semibold wrap-break-words">
            {personal.fullName}
          </h1>
          <p className="text-gray-600 mt-1 flex flex-wrap gap-x-2">
            <span>{personal.phone}</span>
            <span className="hidden @sm:inline">·</span>
            <span className="break-all">{personal.email}</span>
            <span className="hidden @sm:inline">·</span>
            <span>{personal.address}</span>
          </p>
        </header>

        <Section title="Professional objective">
          <p>{objective}</p>
        </Section>

        <Section title="Education">
          {education.map((ed, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">
                {ed.certificate}, {ed.field}
              </p>
              <p className="text-gray-600">
                {ed.institution}, {ed.place} — {ed.yearEC}
              </p>
            </div>
          ))}
        </Section>

        <Section title="Experience">
          {experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-medium">
                {exp.role}, {exp.company}
              </p>
              <p className="text-gray-500 text-[11px] @sm:text-xs mb-1">
                {exp.startDate} — {exp.endDate}
              </p>
              <p>{exp.description}</p>
            </div>
          ))}
        </Section>

        <Section title="Skills">
          <p className="wrap-break-words">
            <span className="font-medium">Technical: </span>
            {skills.technical.join(", ")}
          </p>
          <p className="wrap-break-words">
            <span className="font-medium">Soft skills: </span>
            {skills.soft.join(", ")}
          </p>
        </Section>

        <Section title="Languages">
          <div className="flex flex-col @sm:flex-row @sm:flex-wrap gap-x-6 gap-y-1">
            {languages.map((lang, i) => (
              <p key={i}>
                {lang.name} — {lang.speaking}
              </p>
            ))}
          </div>
        </Section>

        <Section title="References">
          {references.map((ref, i) => (
            <p key={i} className="wrap-break-words">
              {ref.name}, {ref.relationship} — {ref.contact}
            </p>
          ))}
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-5">
      <h2 className="text-emerald-700 font-semibold uppercase text-[10px] @sm:text-xs tracking-wide mb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
