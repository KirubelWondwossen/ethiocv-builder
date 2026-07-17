import { sampleCV } from "./sampleCV";

// Civil service style CV: numbered personal-info fields and a bordered
// education table. @container-based so the info grid collapses to one
// column and tables scroll horizontally at narrow panel widths, instead
// of squeezing columns unreadably thin.
export default function GovernmentTemplate({ data = sampleCV }) {
  const { personal, education, skills, languages } = data;

  return (
    <div className="@container w-full">
      <div className="mx-auto max-w-180 bg-white p-4 @sm:p-6 @lg:p-8 text-gray-900 font-sans text-xs @sm:text-sm leading-relaxed">
        <h1 className="text-center text-base @sm:text-lg font-semibold uppercase tracking-wide mb-6">
          Curriculum Vitae
        </h1>

        <Field n="1" label="Personal information">
          <InfoGrid
            rows={[
              ["Full name", personal.fullName],
              ["Age", personal.age],
              ["Sex", personal.sex],
              ["Place of birth", personal.placeOfBirth],
              ["Date of birth (E.C.)", personal.dobEC],
              ["Nationality", personal.nationality],
              ["Marital status", personal.maritalStatus],
              ["Phone", personal.phone],
            ]}
          />
        </Field>

        <Field n="2" label="Educational background">
          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full min-w-120 @lg:min-w-0 text-[11px] @sm:text-xs border border-gray-400 border-collapse mt-2">
              <thead>
                <tr className="bg-emerald-50">
                  <Th>Year (E.C.)</Th>
                  <Th>Institution</Th>
                  <Th>Place</Th>
                  <Th>Field of study</Th>
                  <Th>Certificate</Th>
                </tr>
              </thead>
              <tbody>
                {education.map((ed, i) => (
                  <tr key={i}>
                    <Td>{ed.yearEC}</Td>
                    <Td>{ed.institution}</Td>
                    <Td>{ed.place}</Td>
                    <Td>{ed.field}</Td>
                    <Td>{ed.certificate}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Field>

        <Field n="3" label="Qualifications">
          <p>
            {education[0]?.certificate} in {education[0]?.field}
          </p>
        </Field>

        <Field n="4" label="Language skills">
          <div className="overflow-x-auto -mx-1 px-1">
            <table className="w-full min-w-90 @lg:min-w-0 text-[11px] @sm:text-xs border border-gray-400 border-collapse mt-2">
              <thead>
                <tr className="bg-emerald-50">
                  <Th>Language</Th>
                  <Th>Speaking</Th>
                  <Th>Reading</Th>
                  <Th>Writing</Th>
                </tr>
              </thead>
              <tbody>
                {languages.map((lang, i) => (
                  <tr key={i}>
                    <Td>{lang.name}</Td>
                    <Td>{lang.speaking}</Td>
                    <Td>{lang.reading}</Td>
                    <Td>{lang.writing}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Field>

        <Field n="5" label="Skills">
          <p className="wrap-break-words">
            {[...skills.technical, ...skills.soft].join(", ")}
          </p>
        </Field>
      </div>
    </div>
  );
}

function Field({ n, label, children }) {
  return (
    <section className="mb-5">
      <h2 className="font-semibold text-xs @sm:text-sm mb-1">
        {n}. {label}
      </h2>
      {children}
    </section>
  );
}

function InfoGrid({ rows }) {
  return (
    <div className="grid grid-cols-1 @sm:grid-cols-2 gap-x-6 gap-y-1 mt-1">
      {rows.map(([label, value], i) => (
        <p key={i} className="wrap-break-words">
          <span className="text-gray-600">{label}: </span>
          <span className="font-medium">{value}</span>
        </p>
      ))}
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="border border-gray-400 px-2 py-1 text-left whitespace-nowrap">
      {children}
    </th>
  );
}
function Td({ children }) {
  return <td className="border border-gray-400 px-2 py-1">{children}</td>;
}
