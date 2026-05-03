export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: "work" | "education";
  highlights: string[];
  location?: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Web Developer Intern",
    company: "Mary Josette Academy",
    period: "Jan. 2026 – Apr. 2026",
    type: "work",
    location: "Philippines",
    highlights: [
      "Migrated a legacy Vanilla JS Finance Management System to the T3 Stack, writing a custom ETL script to transfer 5 years of student records from Firebase to SQLite with zero data loss.",
      "Built and secured finance module APIs — paginated REST endpoints with Excel export cut response time by ~60%, while Better Auth handled role-based access control and input validation across all student financial records.",
    ],
  },
  {
    role: "BS Information Technology",
    company: "Bulacan State University – Sarmiento Campus",
    period: "Aug. 2022 – Present",
    type: "education",
    location: "Bulacan, Philippines",
    highlights: [
      "Specialization: Web and Mobile Application Development",
      "Dean's List Awardee — A.Y. 2024–2025 & 2025–2026",
      "Latin Honors — Magna Cum Laude",
    ],
  },
];
