"use client";

import React, { useRef, useState } from "react";
import {
  Download,
  Award,
  FileText,
  CheckCircle,
  Smartphone,
  Mail,
  Trash2,
  Plus,
} from "lucide-react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { Button } from "@/components/ui/Button";

// --- TYPES ---
interface SubjectGrade {
  id: string;
  subject: string;
  grade: string;
  remarks: string;
}

interface ActivityCheck {
  id: string;
  activity: string;
  grade: string;
}

// --- INITIAL DATA ---
const INITIAL_SUBJECTS: SubjectGrade[] = [
  {
    id: "1",
    subject: "Quran Memorisation",
    grade: "A",
    remarks: "Excellent progress in Hifz based on individual pace.",
  },
  {
    id: "2",
    subject: "Arabic Language",
    grade: "A-",
    remarks: "Strong vocabulary and reading comprehension.",
  },
  {
    id: "3",
    subject: "Islamic Studies",
    grade: "B+",
    remarks: "Good understanding of Fiqh basics.",
  },
  {
    id: "4",
    subject: "Mathematics",
    grade: "A",
    remarks: "Solid grasp of core concepts and problem solving.",
  },
  {
    id: "5",
    subject: "Science",
    grade: "B",
    remarks: "Participates well in experiments and theory.",
  },
  {
    id: "6",
    subject: "English / Literature",
    grade: "A",
    remarks: "Creative writing skills have improved significantly.",
  },
];

const INITIAL_ACTIVITIES: ActivityCheck[] = [
  { id: "1", activity: "Attendance", grade: "95%" },
  { id: "2", activity: "Memorization", grade: "A" },
  { id: "3", activity: "Explanation", grade: "B+" },
  { id: "4", activity: "Assignments", grade: "A-" },
];

export default function CertificateGeneratorPage() {
  const [activeTab, setActiveTab] = useState<"certificate" | "report">(
    "certificate",
  );

  // --- CERTIFICATE STATE ---
  const [certData, setCertData] = useState({
    studentName: "Student Name",
    courseName: "Islamic Studies & Quran",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    instructorName: "Ustadh Abdullah",
    achievementText:
      "Demonstrating excellence and dedication throughout the program.",
  });

  // --- REPORT CARD STATE ---
  const [reportData, setReportData] = useState({
    studentName: "Student Name",
    gradeLevel: "Grade 3",
    term: "Term 1 - 2026",
    teacherComments:
      "Mashallah, a very diligent and well-mannered student. Shows great promise in both religious and secular studies.",
    principalName: "Principal Name",
  });
  const [subjects, setSubjects] = useState<SubjectGrade[]>(INITIAL_SUBJECTS);
  const [activities, setActivities] =
    useState<ActivityCheck[]>(INITIAL_ACTIVITIES);

  // --- REFS ---
  const certificateRef = useRef<HTMLDivElement>(null);
  const reportCardRef = useRef<HTMLDivElement>(null);

  // --- HANDLERS ---
  const handleDownload = (
    ref: React.RefObject<HTMLDivElement | null>,
    fileName: string,
  ) => {
    if (ref.current) {
      htmlToImage
        .toPng(ref.current, { backgroundColor: "#ffffff", pixelRatio: 2 })
        .then((dataUrl) => {
          download(dataUrl, fileName);
        })
        .catch((err) => console.error("Failed to download", err));
    }
  };

  const updateSubject = (
    id: string,
    field: keyof SubjectGrade,
    value: string,
  ) => {
    setSubjects((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    );
  };

  const addSubject = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setSubjects([
      ...subjects,
      { id: newId, subject: "New Subject", grade: "-", remarks: "-" },
    ]);
  };

  const removeSubject = (id: string) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const updateActivity = (id: string, value: string) => {
    setActivities((prev) =>
      prev.map((a) => (a.id === id ? { ...a, grade: value } : a)),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-midnight selection:bg-gold/20 flex flex-col items-center py-10 px-4 gap-8">
      {/* HEADER / CONTROLS */}
      <div className="w-full max-w-6xl bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4 z-50 flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-2">
          <Button
            onClick={() => setActiveTab("certificate")}
            variant={activeTab === "certificate" ? "primary" : "secondary"}
            className={`gap-2 ${activeTab === "certificate" ? "bg-midnight text-cream border-midnight" : "text-midnight border-gray-300"}`}
          >
            <Award size={18} /> Certificate
          </Button>
          <Button
            onClick={() => setActiveTab("report")}
            variant={activeTab === "report" ? "primary" : "secondary"}
            className={`gap-2 ${activeTab === "report" ? "bg-midnight text-cream border-midnight" : "text-midnight border-gray-300"}`}
          >
            <FileText size={18} /> Report Card
          </Button>
        </div>

        <div className="flex gap-2">
          {activeTab === "certificate" ? (
            <Button
              onClick={() =>
                handleDownload(
                  certificateRef,
                  `Certificate-${certData.studentName}.png`,
                )
              }
              className="bg-gold text-midnight hover:bg-gold/90 border-gold gap-2"
            >
              <Download size={18} /> Download Certificate
            </Button>
          ) : (
            <Button
              onClick={() =>
                handleDownload(
                  reportCardRef,
                  `Report-${reportData.studentName}.png`,
                )
              }
              className="bg-gold text-midnight hover:bg-gold/90 border-gold gap-2"
            >
              <Download size={18} /> Download Report
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-350">
        {/* SIDEBAR EDITORS */}
        <div className="w-full lg:w-1/3 space-y-6">
          {activeTab === "certificate" && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4">
              <h2 className="font-cinzel text-xl font-bold border-b pb-2">
                Certificate Details
              </h2>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                  Student Name
                </label>
                <input
                  type="text"
                  value={certData.studentName}
                  onChange={(e) =>
                    setCertData({ ...certData, studentName: e.target.value })
                  }
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                  Course Name
                </label>
                <input
                  type="text"
                  value={certData.courseName}
                  onChange={(e) =>
                    setCertData({ ...certData, courseName: e.target.value })
                  }
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                  Achievement Text
                </label>
                <textarea
                  rows={3}
                  value={certData.achievementText}
                  onChange={(e) =>
                    setCertData({
                      ...certData,
                      achievementText: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                  Date Issued
                </label>
                <input
                  type="text"
                  value={certData.date}
                  onChange={(e) =>
                    setCertData({ ...certData, date: e.target.value })
                  }
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                  Instructor Name
                </label>
                <input
                  type="text"
                  value={certData.instructorName}
                  onChange={(e) =>
                    setCertData({ ...certData, instructorName: e.target.value })
                  }
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
            </div>
          )}

          {activeTab === "report" && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-4 max-h-200 overflow-y-auto">
              <h2 className="font-cinzel text-xl font-bold border-b pb-2">
                Report Details
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                    Student Name
                  </label>
                  <input
                    type="text"
                    value={reportData.studentName}
                    onChange={(e) =>
                      setReportData({
                        ...reportData,
                        studentName: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                    Grade / Level
                  </label>
                  <input
                    type="text"
                    value={reportData.gradeLevel}
                    onChange={(e) =>
                      setReportData({
                        ...reportData,
                        gradeLevel: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                    Term / Year
                  </label>
                  <input
                    type="text"
                    value={reportData.term}
                    onChange={(e) =>
                      setReportData({ ...reportData, term: e.target.value })
                    }
                    className="w-full p-2 border rounded text-sm"
                  />
                </div>
              </div>

              <div className="border-t pt-4">
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">
                  Performance Check
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {activities.map((act) => (
                    <div key={act.id}>
                      <label className="text-[10px] uppercase font-bold text-gray-400 block mb-1">
                        {act.activity}
                      </label>
                      <input
                        type="text"
                        value={act.grade}
                        onChange={(e) => updateActivity(act.id, e.target.value)}
                        className="w-full p-1 border rounded text-sm text-center font-bold"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                    Subjects
                  </label>
                  <button
                    onClick={addSubject}
                    className="text-xs bg-gray-100 hover:bg-gray-200 p-1 rounded flex items-center gap-1"
                  >
                    <Plus size={12} /> Add
                  </button>
                </div>
                <div className="space-y-3">
                  {subjects.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-3 border rounded bg-gray-50 text-xs space-y-2 relative group"
                    >
                      <button
                        onClick={() => removeSubject(sub.id)}
                        className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 size={14} />
                      </button>
                      <input
                        type="text"
                        value={sub.subject}
                        onChange={(e) =>
                          updateSubject(sub.id, "subject", e.target.value)
                        }
                        className="w-full p-1 border rounded"
                        placeholder="Subject Name"
                      />
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={sub.grade}
                          onChange={(e) =>
                            updateSubject(sub.id, "grade", e.target.value)
                          }
                          className="w-20 p-1 border rounded text-center"
                          placeholder="Grade"
                        />
                        <input
                          type="text"
                          value={sub.remarks}
                          onChange={(e) =>
                            updateSubject(sub.id, "remarks", e.target.value)
                          }
                          className="flex-1 p-1 border rounded"
                          placeholder="Remarks"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                  Teacher Comments
                </label>
                <textarea
                  rows={3}
                  value={reportData.teacherComments}
                  onChange={(e) =>
                    setReportData({
                      ...reportData,
                      teacherComments: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1 text-gray-500">
                  Principal Name
                </label>
                <input
                  type="text"
                  value={reportData.principalName}
                  onChange={(e) =>
                    setReportData({
                      ...reportData,
                      principalName: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded text-sm"
                />
              </div>
            </div>
          )}
        </div>

        {/* PREVIEW AREA */}
        <div className="flex-1 flex justify-center items-start overflow-hidden pt-4">
          {/* --- 1. CERTIFICATE DESIGN (STRICT TEMPLATE MATCH) --- */}
          {activeTab === "certificate" && (
            <div
              ref={certificateRef}
              className="w-210.5 h-148.75 relative bg-[#fdfbf7] shadow-2xl overflow-hidden flex flex-col font-sans text-midnight"
            >
              {/* --- TOP RIGHT DECORATION --- */}
              <div className="absolute top-0 right-0 w-125 h-87.5 z-0 pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 500 350"
                  preserveAspectRatio="none"
                >
                  {/* Gold Border Layer (Behind) */}
                  <path
                    d="M 0 0 L 500 0 L 500 280 Q 200 280 0 0 Z"
                    fill="#D4AF37"
                    transform="translate(8, 8)"
                    opacity="0.9"
                  />
                  {/* Black Main Layer */}
                  <path
                    d="M 0 0 L 500 0 L 500 270 Q 200 270 0 0 Z"
                    fill="#1a1a1a"
                  />
                </svg>
                {/* Bismillah Calligraphy */}
                <div className="absolute top-8 right-12 text-white/90 transform -rotate-6">
                  <div className="text-4xl font-serif leading-relaxed tracking-wider opacity-90 drop-shadow-md">
                    ﷽
                  </div>
                </div>
              </div>

              {/* --- MAIN CONTENT --- */}
              <div className="relative z-10 flex-1 flex flex-col p-12 pt-12">
                {/* HEADER SECTION */}
                <div className="flex flex-col items-start gap-4 mb-6 pt-2">
                  {/* Logo Container */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-midnight/90 text-gold flex items-center justify-center font-cinzel text-3xl font-bold rounded-tl-xl rounded-br-xl shadow-lg border-2 border-gold">
                      R
                    </div>
                    <div className="h-10 w-px bg-gold/50 mx-2"></div>
                    <div>
                      <h2 className="font-cinzel text-xl font-bold tracking-widest text-midnight uppercase leading-none mb-1">
                        Rawdatul <span className="text-gold">Atfaal</span>
                      </h2>
                      <p className="text-[.6rem] uppercase tracking-[0.3em] text-gray-400 font-bold">
                        Kids Academy
                      </p>
                    </div>
                  </div>

                  {/* Main Header Title */}
                  <div className="border-b-[3px] border-double border-gold/20 pb-2 pr-12 mt-2">
                    <h1 className="font-cinzel text-4xl text-midnight font-normal uppercase tracking-[0.15em]">
                      Certificate
                      <span className="text-gold block">of Completion</span>
                    </h1>
                  </div>
                </div>

                {/* RECIPIENT SECTION */}
                <div className="mt-2 mb-2">
                  <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2 pl-1">
                    Proudly Presented To
                  </p>
                  <h2 className="font-playfair text-6xl text-[#b8860b] italic font-bold mb-4 drop-shadow-sm">
                    {certData.studentName}
                  </h2>
                </div>

                {/* BODY TEXT */}
                <div className="text-gray-700 text-sm leading-7 max-w-2xl font-medium pl-1">
                  <p className="mb-2">
                    has successfully completed the{" "}
                    <strong className="text-midnight text-lg font-cinzel mx-1 border-b border-gold/30">
                      {certData.courseName}
                    </strong>{" "}
                    course.
                  </p>
                  <p className="leading-relaxed mb-4">
                    {certData.achievementText}
                  </p>
                  <p className="italic text-gray-500 text-xs font-serif">
                    &quot;Seeking an increment from Allah in her knowledge and
                    wisdom, we pray to Allah for her to be among the righteous
                    and pious slaves, Ameen.&quot;
                  </p>
                </div>

                {/* FOOTER / SIGNATURES */}
                <div className="mt-auto flex items-end justify-between w-[95%] mb-2">
                  {/* Date */}
                  <div className="flex flex-col w-40">
                    <span className="font-bold text-midnight text-sm pl-2 mb-1 block font-playfair">
                      {certData.date}
                    </span>
                    <div className="w-full h-px bg-gray-400 mb-1"></div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                      Date
                    </span>
                  </div>

                  {/* Instructor Name (Center) */}
                  <div className="flex flex-col w-64 items-center text-center">
                    <span className="font-playfair italic text-xl text-midnight mb-1 block transform -rotate-2">
                      {certData.instructorName}
                    </span>
                    <div className="w-full h-px bg-gray-400 mb-1"></div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                      Director : {certData.instructorName}
                    </span>
                  </div>

                  {/* Signature (Right) */}
                  <div className="flex flex-col w-40 items-end text-right">
                    <div className="h-8 font-playfair italic text-2xl text-gray-400 mr-4 opacity-50">
                      Authorized
                    </div>
                    <div className="w-full h-px bg-gray-400 mb-1"></div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider self-start w-full text-center">
                      Signature
                    </span>
                  </div>
                </div>
              </div>

              {/* --- BOTTOM STRIP DECORATION --- */}
              <div className="absolute bottom-0 left-0 w-full h-5 bg-[#1a1a1a] z-20 border-t-[3px] border-[#D4AF37]"></div>
              <div className="absolute bottom-5 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          )}

          {/* --- 2. REPORT CARD DESIGN --- */}
          {activeTab === "report" && (
            <div
              ref={reportCardRef}
              className="w-148.75 min-h-210.5 bg-white text-midnight relative shadow-2xl flex flex-col pt-10 px-8 pb-8"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {/* Header */}
              <div className="flex border-b-4 border-gold pb-6 mb-6">
                <div className="w-20 h-20 bg-midnight text-gold flex items-center justify-center font-cinzel text-3xl font-bold rounded-sm mr-6">
                  R
                </div>
                <div className="flex-1">
                  <h1 className="font-cinzel text-2xl uppercase tracking-wider text-midnight font-bold">
                    Rawdatul Atfaal Kids Academy
                  </h1>
                  <p className="font-playfair italic text-gold text-lg mb-2">
                    Student Progress Report
                  </p>
                  <div className="flex gap-4 text-[10px] uppercase tracking-widest text-gray-500">
                    <div className="flex items-center gap-1">
                      <Smartphone size={12} /> +123 456 7890
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail size={12} /> info@rawdahkids.org
                    </div>
                  </div>
                </div>
              </div>

              {/* Student Info Grid */}
              <div className="bg-gray-50 border border-gray-200 p-4 grid grid-cols-2 gap-y-4 gap-x-8 text-sm mb-6 rounded-sm">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400">
                    Student Name
                  </span>
                  <span className="font-playfair font-bold text-lg">
                    {reportData.studentName}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400">
                    Grade / Level
                  </span>
                  <span className="font-bold">{reportData.gradeLevel}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400">
                    Academic Term
                  </span>
                  <span className="font-bold">{reportData.term}</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400">
                    Status
                  </span>
                  <span className="font-bold text-green-600 flex items-center gap-1">
                    <CheckCircle size={12} /> Active
                  </span>
                </div>
              </div>

              {/* Performance Checks (Activities) */}
              <div className="bg-midnight/5 border-l-4 border-gold p-4 mb-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-midnight mb-3">
                  Performance Overview
                </h3>
                <div className="grid grid-cols-4 gap-4 text-center divide-x divide-gray-300">
                  {activities.map((act) => (
                    <div key={act.id} className="px-2">
                      <span className="block text-[10px] uppercase font-bold text-gray-500 mb-1">
                        {act.activity}
                      </span>
                      <span className="block font-cinzel font-bold text-xl text-midnight">
                        {act.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grades Table */}
              <div className="flex-1 mb-8">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-midnight text-cream text-xs uppercase tracking-widest font-cinzel">
                      <th className="p-3 border-b-2 border-gold">Subject</th>
                      <th className="p-3 border-b-2 border-gold text-center w-20">
                        Grade
                      </th>
                      <th className="p-3 border-b-2 border-gold">
                        Teacher&apos;s Remarks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {subjects.map((sub, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                      >
                        <td className="p-3 font-semibold text-midnight">
                          {sub.subject}
                        </td>
                        <td className="p-3 text-center font-bold text-lg text-gold bg-midnight/5">
                          {sub.grade}
                        </td>
                        <td className="p-3 text-gray-600 italic text-xs">
                          {sub.remarks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Comments & Signatures */}
              <div className="mt-auto border-t-2 border-gold/20 pt-6">
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-midnight mb-2">
                    Class Teacher&apos;s Comments:
                  </h3>
                  <div className="p-4 bg-ivory border border-gold/20 italic text-sm text-midnight/80 min-h-20">
                    &quot;{reportData.teacherComments}&quot;
                  </div>
                </div>

                <div className="flex justify-between items-end mt-12 px-6">
                  <div className="text-center">
                    <div className="border-t border-black w-40 pt-2 font-playfair font-bold">
                      {reportData.principalName}
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400">
                      Principal Signature
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="border-t border-black w-40 pt-2 font-playfair font-bold">
                      {new Date().toLocaleDateString()}
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400">
                      Date
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Strip */}
              <div className="mt-8 pt-4 border-t border-gray-100 text-center text-[10px] text-gray-400 uppercase tracking-widest">
                Values • Excellence • Adab
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
