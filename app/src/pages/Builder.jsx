import { useState } from "react";
import MainContainer from "../components/layouts/MainContainer";
import MainLayoutNavbar from "../components/layouts/MainLayoutNavbar";
import LabelInput from "../components/ui/LabelInput";
import SectionHeader from "../components/ui/SectionHeader";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ClassicTemplate from "../components/templates/ClassicTemplate";

const initialFormData = {
  personal: {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    placeOfBirth: "",
    dob: "",
    nationality: "",
    sex: "",
    maritalStatus: "",
  },
  objective: "",
  education: {
    year: "",
    institution: "",
    place: "",
    fieldOfStudy: "",
    certificate: "",
  },
  experience: {
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    description: "",
  },
  skills: { technical: "", soft: "" },
  language: { name: "", speaking: "", reading: "", writing: "" },
  reference: { name: "", relationship: "", contact: "" },
};

const stepLabels = [
  "Personal info",
  "Background",
  "Experience",
  "Final details",
];
const lastStep = stepLabels.length - 1;

function getPath(obj, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function setPath(obj, path, value) {
  const keys = path.split(".");
  const next = { ...obj };
  let curr = next;
  keys.slice(0, -1).forEach((key) => {
    curr[key] = { ...curr[key] };
    curr = curr[key];
  });
  curr[keys[keys.length - 1]] = value;
  return next;
}

function Builder() {
  const [pos, setPos] = useState(0);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => setPath(prev, name, value));
  };

  const field = (name) => ({
    name,
    value: getPath(formData, name) ?? "",
    onChange: handleChange,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to payment + PDF generation flow
    console.log("Submitting CV data", formData);
  };

  return (
    <MainContainer>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto w-full px-4 sm:px-4 lg:px-6 py-2">
          <MainLayoutNavbar />
        </div>
      </header>

      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-10 px-6 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="flex flex-col items-start gap-2 w-full flex-1 min-w-0">
          <UserForm onSubmit={handleSubmit}>
            <StepProgress pos={pos} />

            {pos === 0 && <PersonalInfo field={field} />}
            {pos === 1 && (
              <>
                <Objective field={field} />
                <Education field={field} />
              </>
            )}
            {pos === 2 && (
              <>
                <Experience field={field} />
                <Skills field={field} />
              </>
            )}
            {pos === 3 && (
              <>
                <Language field={field} />
                <Reference field={field} />
              </>
            )}

            <NextPrevButton
              pos={pos}
              setPos={setPos}
              isLast={pos === lastStep}
            />
          </UserForm>
        </div>

        <div className="w-full md:w-105 lg:w-120 shrink-0 md:sticky md:top-24 md:self-start">
          <ClassicTemplate />
        </div>
      </div>
    </MainContainer>
  );
}

function StepProgress({ pos }) {
  return (
    <div className="w-full flex items-center gap-2 mb-4">
      {stepLabels.map((label, i) => (
        <div key={label} className="flex-1 flex flex-col gap-1.5">
          <div
            className={`h-1.5 rounded-full transition-colors duration-300 ${
              i <= pos ? "bg-primary-500" : "bg-gray-200"
            }`}
          />
          <span
            className={`hidden sm:block text-xs font-medium truncate ${
              i === pos ? "text-primary-600" : "text-gray-400"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function NextPrevButton({ pos, setPos, isLast }) {
  return (
    <div className="flex items-center justify-between w-full mt-4 pt-4 border-t border-gray-100">
      <button
        type="button"
        onClick={() => setPos((p) => p - 1)}
        disabled={pos === 0}
        className="flex items-center gap-1 text-sm sm:text-base font-semibold px-3 py-2 rounded-lg text-gray-700
        hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200
        disabled:opacity-40 disabled:pointer-events-none"
      >
        <ChevronLeft size={20} />
        <span>Previous</span>
      </button>

      {isLast ? (
        <button
          type="submit"
          className="rounded-full bg-primary-500 px-5 py-2.5 text-sm sm:text-base font-medium
          text-white transition-colors hover:bg-primary-600 cursor-pointer"
        >
          Submit
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setPos((p) => p + 1)}
          className="flex items-center gap-1 text-sm sm:text-base font-semibold px-3 py-2 rounded-lg text-gray-700
          hover:bg-primary-100 hover:text-primary-600 transition-colors duration-200"
        >
          <span>Next</span>
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
}

function UserForm({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-1">
      {children}
    </form>
  );
}

function PersonalInfo({ field }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <SectionHeader className="text-start">Personal information</SectionHeader>

      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput
          label="First name"
          required
          {...field("personal.firstName")}
        />
        <LabelInput
          label="Middle name"
          required
          {...field("personal.middleName")}
        />
        <LabelInput
          label="Last name"
          required
          {...field("personal.lastName")}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput
          label="Email"
          type="email"
          required
          {...field("personal.email")}
        />
        <LabelInput
          label="Phone number"
          type="tel"
          required
          {...field("personal.phone")}
        />
      </div>

      <LabelInput label="Address" required {...field("personal.address")} />

      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput label="Age" type="number" {...field("personal.age")} />
        <LabelInput
          label="Place of birth"
          {...field("personal.placeOfBirth")}
        />
        <LabelInput
          label="Date of birth"
          type="date"
          {...field("personal.dob")}
        />
      </div>

      <LabelInput label="Nationality" {...field("personal.nationality")} />

      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput label="Sex" select {...field("personal.sex")}>
          <option value="" disabled>
            Choose your sex
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </LabelInput>
        <LabelInput
          label="Marital status"
          select
          {...field("personal.maritalStatus")}
        >
          <option value="" disabled>
            Choose your marital status
          </option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </LabelInput>
      </div>
    </div>
  );
}

function Objective({ field }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <SectionHeader className="text-start">Objective</SectionHeader>
      <LabelInput
        label="Professional summary"
        textarea
        rows={5}
        {...field("objective")}
      />
    </div>
  );
}

function Education({ field }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <SectionHeader className="text-start">Education</SectionHeader>
      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput label="Year" {...field("education.year")} />
        <LabelInput label="Institution" {...field("education.institution")} />
        <LabelInput label="Place" {...field("education.place")} />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput
          label="Field of study"
          {...field("education.fieldOfStudy")}
        />
        <LabelInput
          label="Certificate / level"
          {...field("education.certificate")}
        />
      </div>
    </div>
  );
}

function Experience({ field }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <SectionHeader className="text-start">Experience</SectionHeader>
      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput label="Company" {...field("experience.company")} />
        <LabelInput label="Job title / role" {...field("experience.role")} />
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput
          label="Start date"
          placeholder="e.g. Jan 2023"
          {...field("experience.startDate")}
        />
        <LabelInput
          label="End date"
          placeholder="e.g. Present"
          {...field("experience.endDate")}
        />
      </div>
      <LabelInput
        label="Description"
        textarea
        rows={5}
        {...field("experience.description")}
      />
    </div>
  );
}

function Skills({ field }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <SectionHeader className="text-start">Skills</SectionHeader>
      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput
          label="Technical skills"
          placeholder="e.g. Excel, AutoCAD, Data entry"
          {...field("skills.technical")}
        />
        <LabelInput
          label="Soft skills"
          placeholder="e.g. Communication, Teamwork"
          {...field("skills.soft")}
        />
      </div>
    </div>
  );
}

function Language({ field }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <SectionHeader className="text-start">Languages</SectionHeader>
      <LabelInput label="Language" {...field("language.name")} />
      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput label="Speaking" select {...field("language.speaking")}>
          <option value="" disabled>
            Speaking level
          </option>
          <option value="Basic">Basic</option>
          <option value="Fluent">Fluent</option>
          <option value="Native">Native</option>
        </LabelInput>
        <LabelInput label="Reading" select {...field("language.reading")}>
          <option value="" disabled>
            Reading level
          </option>
          <option value="Basic">Basic</option>
          <option value="Fluent">Fluent</option>
          <option value="Native">Native</option>
        </LabelInput>
        <LabelInput label="Writing" select {...field("language.writing")}>
          <option value="" disabled>
            Writing level
          </option>
          <option value="Basic">Basic</option>
          <option value="Fluent">Fluent</option>
          <option value="Native">Native</option>
        </LabelInput>
      </div>
    </div>
  );
}

function Reference({ field }) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <SectionHeader className="text-start">Reference</SectionHeader>
      <LabelInput label="Reference name" {...field("reference.name")} />
      <div className="flex flex-col sm:flex-row gap-3">
        <LabelInput
          label="Relationship / title"
          {...field("reference.relationship")}
        />
        <LabelInput label="Contact info" {...field("reference.contact")} />
      </div>
    </div>
  );
}

export default Builder;
