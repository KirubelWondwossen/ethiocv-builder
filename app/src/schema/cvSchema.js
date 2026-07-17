import { z } from "zod";

// Personal info — core fields required for every template; government-only
// fields (age, placeOfBirth, dobEC, sex, maritalStatus) are optional so
// Classic/Diaspora users never get blocked by fields they don't need,
// while still being fillable in advance in case of a template switch.
export const personalSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  address: z.string().min(2, "Address is required"),

  // Government-template fields — optional everywhere else
  age: z.coerce.number().int().positive().optional(),
  placeOfBirth: z.string().optional(),
  dateOfBirth: z.string().optional(), // ISO date, e.g. '1998-03-14'
  dobEC: z.string().optional(), // Ethiopian calendar date, e.g. '6/7/1990 E.C.'
  sex: z.enum(["Male", "Female"]).optional(),
  nationality: z.string().optional(),
  maritalStatus: z
    .enum(["Single", "Married", "Divorced", "Widowed"])
    .optional(),
});

const educationEntrySchema = z.object({
  yearEC: z.string().min(1, "Year is required"),
  institution: z.string().min(1, "Institution is required"),
  place: z.string().min(1, "Place is required"),
  field: z.string().min(1, "Field of study is required"),
  certificate: z.string().min(1, "Certificate/level is required"),
});

const experienceEntrySchema = z.object({
  company: z.string().min(1, "Company is required"),
  role: z.string().min(1, "Role is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"), // 'Present' allowed
  description: z.string().min(1, "Description is required"),
});

const languageEntrySchema = z.object({
  name: z.string().min(1, "Language name is required"),
  speaking: z.enum(["Basic", "Fluent", "Native"]),
  reading: z.enum(["Basic", "Fluent", "Native"]),
  writing: z.enum(["Basic", "Fluent", "Native"]),
});

const referenceEntrySchema = z.object({
  name: z.string().min(1, "Reference name is required"),
  relationship: z.string().min(1, "Relationship/title is required"),
  contact: z.string().min(1, "Contact info is required"),
});

const skillsSchema = z.object({
  technical: z.array(z.string()).default([]),
  soft: z.array(z.string()).default([]),
});

// Full CV schema — one shape shared across all three templates.
// Template components simply ignore fields they don't render.
export const cvSchema = z.object({
  templateKey: z.enum(["classic", "government", "diaspora"]),
  language: z.enum(["en", "am"]).default("en"),

  personal: personalSchema,
  objective: z
    .string()
    .min(10, "Write a short professional summary")
    .optional(),

  education: z
    .array(educationEntrySchema)
    .min(1, "Add at least one education entry"),
  experience: z.array(experienceEntrySchema).default([]),
  skills: skillsSchema,
  languages: z.array(languageEntrySchema).min(1, "Add at least one language"),
  references: z.array(referenceEntrySchema).default([]),
});

// Per-step schemas — use these with React Hook Form's resolver on each
// step, so validation errors only surface for the step currently in view.
export const stepSchemas = {
  personal: personalSchema,
  objective: cvSchema.shape.objective,
  education: cvSchema.shape.education,
  experience: cvSchema.shape.experience,
  skills: skillsSchema,
  languages: cvSchema.shape.languages,
  references: cvSchema.shape.references,
};

export default cvSchema;
