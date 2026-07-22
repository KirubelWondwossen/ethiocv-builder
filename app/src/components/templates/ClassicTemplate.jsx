// import { sampleCV } from "./sampleCV";

// Private-sector style CV: prose sections, monochrome with a single emerald
// accent, no photo. Wrapped in @container so it adapts to panel width
// (react-resizable-panels), not viewport width.

const sampleCV = {
  personal: {
    fullName: "Abel Tesfaye",
    email: "abel.tesfaye@example.com",
    phone: "+251 912 345 678",
    address: "Bole, Addis Ababa, Ethiopia",

    // Government template fields (optional)
    age: 24,
    placeOfBirth: "Bahir Dar",
    dateOfBirth: "2002-05-12",
    dobEC: "1994-09-04",
    sex: "Male",
    nationality: "Ethiopian",
    maritalStatus: "Single",
  },

  objective:
    "Motivated and detail-oriented Software Engineer with experience building responsive web applications using React, JavaScript, and Tailwind CSS. Passionate about creating user-friendly interfaces and eager to contribute to innovative development teams.",

  education: [
    {
      institution: "Wachemo University",
      certificate: "Bachelor of Science",
      field: "Software Engineering",
      place: "Hossana, Ethiopia",
      yearEC: "2018 - 2022 E.C.",
    },
    {
      institution: "ALX Africa",
      certificate: "Professional Certificate",
      field: "Frontend Software Engineering",
      place: "Online",
      yearEC: "2024",
    },
  ],

  experience: [
    {
      company: "Tech Solutions PLC",
      role: "Frontend Developer Intern",
      startDate: "Jan 2025",
      endDate: "Jun 2025",
      description:
        "Developed responsive user interfaces using React and Tailwind CSS, collaborated with designers to improve user experience, and integrated REST APIs into production applications.",
    },
    {
      company: "Freelance",
      role: "Web Developer",
      startDate: "Jul 2025",
      endDate: "Present",
      description:
        "Built portfolio websites and small business applications, optimized website performance, and maintained client projects using modern JavaScript frameworks.",
    },
  ],

  skills: {
    technical: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Git",
      "GitHub",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
    ],
    soft: [
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Time Management",
      "Adaptability",
      "Critical Thinking",
    ],
  },

  languages: [
    {
      name: "Amharic",
      speaking: "Native",
    },
    {
      name: "English",
      speaking: "Professional",
    },
    {
      name: "Afaan Oromo",
      speaking: "Conversational",
    },
  ],

  references: [
    {
      name: "Samuel Bekele",
      relationship: "Senior Software Engineer",
      contact: "+251 911 111 111",
    },
    {
      name: "Martha Alemu",
      relationship: "University Lecturer",
      contact: "martha.alemu@university.edu",
    },
  ],
};

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
