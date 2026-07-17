import { sampleCV } from "./sampleCV";

// International/diaspora style CV: two-column sidebar layout on wide
// panels, stacking to a single column on narrow ones (@container-based,
// so it responds to the actual panel width from react-resizable-panels).
export default function DiasporaTemplate({ data = sampleCV }) {
  const { personal, objective, education, experience, skills, languages } =
    data;

  return (
    <div className="@container w-full">
      <div className="mx-auto max-w-180 bg-white text-gray-900 font-sans text-xs @sm:text-sm leading-relaxed grid grid-cols-1 @md:grid-cols-3">
        <aside className="@md:col-span-1 bg-emerald-800 text-white p-5 @sm:p-6">
          <div className="w-12 h-12 @sm:w-14 @sm:h-14 rounded-full bg-emerald-600 mb-4" />
          <h1 className="text-base @sm:text-lg font-semibold leading-tight mb-4 wrap-break-words">
            {personal.fullName}
          </h1>

          <SidebarSection title="Contact">
            <p className="text-emerald-100 text-[11px] @sm:text-xs break-all">
              {personal.phone}
            </p>
            <p className="text-emerald-100 text-[11px] @sm:text-xs break-all">
              {personal.email}
            </p>
            <p className="text-emerald-100 text-[11px] @sm:text-xs wrap-break-words">
              {personal.address}
            </p>
          </SidebarSection>

          <SidebarSection title="Skills">
            {skills.technical.map((s, i) => (
              <p
                key={i}
                className="text-emerald-100 text-[11px] @sm:text-xs mb-0.5 wrap-break-words"
              >
                {s}
              </p>
            ))}
          </SidebarSection>

          <SidebarSection title="Languages">
            {languages.map((lang, i) => (
              <p
                key={i}
                className="text-emerald-100 text-[11px] @sm:text-xs mb-0.5"
              >
                {lang.name} — {lang.speaking}
              </p>
            ))}
          </SidebarSection>
        </aside>

        <main className="@md:col-span-2 p-5 @sm:p-6">
          <Section title="Summary">
            <p>{objective}</p>
          </Section>

          <Section title="Experience">
            {experience.map((exp, i) => (
              <div key={i} className="mb-3">
                <p className="font-medium">{exp.role}</p>
                <p className="text-gray-500 text-[11px] @sm:text-xs mb-1 wrap-break-words">
                  {exp.company} · {exp.startDate} — {exp.endDate}
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>{exp.description}</li>
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Education">
            {education.map((ed, i) => (
              <div key={i} className="mb-2">
                <p className="font-medium">
                  {ed.certificate}, {ed.field}
                </p>
                <p className="text-gray-500 text-[11px] @sm:text-xs wrap-break-words">
                  {ed.institution} · {ed.yearEC}
                </p>
              </div>
            ))}
          </Section>
        </main>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-4">
      <h2 className="text-emerald-800 font-semibold text-[10px] @sm:text-xs uppercase tracking-wide mb-2 border-b border-emerald-200 pb-1">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SidebarSection({ title, children }) {
  return (
    <div className="mb-5">
      <h3 className="text-emerald-200 font-semibold text-[10px] @sm:text-xs uppercase tracking-wide mb-1.5">
        {title}
      </h3>
      {children}
    </div>
  );
}
