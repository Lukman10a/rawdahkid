// PriceCardPage.tsx - A standalone page for capturing pricing details as an image
// Note: This file is created to display a static card layout for screenshots.
// Access via /pricing-card route (e.g., http://localhost:3000/en/pricing-card)

"use client";

import React, { useRef } from "react";
import { Users, User, Download } from "lucide-react";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { Button } from "@/components/ui/Button";

interface PricingCardProps {
  title: string;
  subtitle: string;
  priceGroup: string;
  pricePrivate: string;
  features: string[];
  isDark?: boolean;
  color?: string;
  bgClass?: string;
  refProp: React.RefObject<HTMLDivElement | null>;
  id: string;
}

const PricingCard = ({
  title,
  subtitle,
  priceGroup,
  pricePrivate,
  features,
  isDark,
  color = "text-gold",
  bgClass = "bg-white",
  refProp,
  id,
}: PricingCardProps) => (
  <div
    ref={refProp}
    id={id}
    className={`w-150 ${bgClass} ${isDark ? "text-cream" : "text-midnight"} border-4 border-gold shadow-2xl relative overflow-hidden flex flex-col`}
    style={{ fontFamily: "var(--font-sans)", height: "800px" }}
  >
    {/* Background Decorative Elements */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

    {/* HEADER */}
    <div
      className={`p-10 text-center relative z-10 ${isDark ? "bg-black/20" : "bg-midnight/5"}`}
    >
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-midnight font-bold font-cinzel text-xl border-2 border-white/20">
          R
        </div>
        <h1 className="font-cinzel text-xl tracking-widest uppercase">
          Rawdatul Atfaal Kids Academy
        </h1>
      </div>
      <p className={`font-playfair italic text-lg ${color}`}>
        Excellence in Online Education
      </p>
    </div>

    {/* CONTENT */}
    <div className="p-10 flex-1 flex flex-col relative z-10">
      <h2
        className={`font-cinzel text-3xl text-center border-b-2 border-gold/20 pb-4 mb-2 ${color}`}
      >
        {title}
      </h2>
      <p
        className={`text-center text-sm mb-10 uppercase tracking-widest ${isDark ? "text-cream/60" : "text-midnight/60"}`}
      >
        {subtitle}
      </p>

      <div className="grid grid-cols-1 gap-6 mb-10">
        <div
          className={`p-6 border ${isDark ? "border-gold/20 bg-white/5" : "border-midnight/10 bg-white"} rounded-sm relative`}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-midnight px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
            Most Popular
          </div>
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold/10 rounded-full text-gold">
                <Users size={20} />
              </div>
              <div>
                <h3
                  className={`font-bold uppercase tracking-wider text-sm ${isDark ? "text-gold" : "text-midnight"}`}
                >
                  Group Class
                </h3>
                <p
                  className={`text-xs ${isDark ? "text-cream/50" : "text-midnight/50"}`}
                >
                  Max 5 Students
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-baseline gap-1">
                <span className={`font-cormorant text-4xl font-bold ${color}`}>
                  {priceGroup}
                </span>
                <span
                  className={`text-xs uppercase ${isDark ? "text-cream/40" : "text-midnight/40"}`}
                >
                  / Month
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`p-6 border ${isDark ? "border-gold/20 bg-white/5" : "border-midnight/10 bg-white"} rounded-sm`}
        >
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gold/10 rounded-full text-gold">
                <User size={20} />
              </div>
              <div>
                <h3
                  className={`font-bold uppercase tracking-wider text-sm ${isDark ? "text-gold" : "text-midnight"}`}
                >
                  One-on-One
                </h3>
                <p
                  className={`text-xs ${isDark ? "text-cream/50" : "text-midnight/50"}`}
                >
                  Private Session
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-baseline gap-1">
                <span className={`font-cormorant text-4xl font-bold ${color}`}>
                  {pricePrivate}
                </span>
                <span
                  className={`text-xs uppercase ${isDark ? "text-cream/40" : "text-midnight/40"}`}
                >
                  / Month
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <h4
          className={`text-xs font-bold uppercase tracking-widest mb-4 border-b ${isDark ? "border-white/10" : "border-midnight/10"} pb-2`}
        >
          Includes:
        </h4>
        <ul
          className={`grid grid-cols-2 gap-3 text-sm font-sans ${isDark ? "text-cream/80" : "text-midnight/80"}`}
        >
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-gold mt-1">✦</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* FOOTER */}
    <div
      className={`p-6 text-center border-t border-gold/20 ${isDark ? "bg-black/20" : "bg-midnight/5"}`}
    >
      <p
        className={`font-cinzel text-sm font-bold ${isDark ? "text-cream" : "text-midnight"}`}
      >
        rawdahkids.org
      </p>
    </div>
  </div>
);

export default function PricingCardPage() {
  const islamicRef = useRef<HTMLDivElement>(null);
  const westernRef = useRef<HTMLDivElement>(null);
  const dualRef = useRef<HTMLDivElement>(null);
  const individualRef = useRef<HTMLDivElement>(null);

  const downloadImage = (
    ref: React.RefObject<HTMLDivElement | null>,
    name: string,
  ) => {
    if (ref.current) {
      htmlToImage
        .toPng(ref.current, {
          backgroundColor: ref.current.style.backgroundColor || "#ffffff",
        })
        .then((dataUrl) => {
          download(dataUrl, name);
        })
        .catch((err) => console.error("Failed to download image", err));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-7xl mx-auto mb-8 flex flex-wrap gap-4 justify-center sticky top-0 z-50 bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-sm border border-gray-200">
        <Button
          onClick={() =>
            downloadImage(islamicRef, "rawdah-islamic-pricing.png")
          }
          className="gap-2"
        >
          <Download size={16} /> Islamic Card
        </Button>
        <Button
          onClick={() =>
            downloadImage(westernRef, "rawdah-western-pricing.png")
          }
          className="gap-2"
        >
          <Download size={16} /> Western Card
        </Button>
        <Button
          onClick={() => downloadImage(dualRef, "rawdah-dual-pricing.png")}
          className="gap-2"
        >
          <Download size={16} /> Dual Card
        </Button>
        <Button
          onClick={() =>
            downloadImage(individualRef, "rawdah-individual-pricing.png")
          }
          className="gap-2"
        >
          <Download size={16} /> Individual Card
        </Button>
      </div>

      <div className="flex flex-wrap gap-12 justify-center pb-20">
        {/* 1. Islamic Course */}
        <PricingCard
          id="islamic-card"
          refProp={islamicRef}
          title="Islamic Sciences"
          subtitle="Explore the Depths of Faith"
          priceGroup="$100"
          pricePrivate="$150"
          bgClass="bg-ivory"
          features={[
            "Quran Memorisation",
            "Arabic Language",
            "Fiqh & Hadith",
            "Tawheed & Aqeedah",
            "Islamic History",
            "Character Building",
          ]}
        />

        {/* 2. Western (Core) Course */}
        <PricingCard
          id="western-card"
          refProp={westernRef}
          title="Western Academics"
          subtitle="Core Logic & Reasoning"
          priceGroup="$100"
          pricePrivate="$150"
          bgClass="bg-white"
          features={[
            "Mathematics",
            "Science",
            "English Literature",
            "Programming",
            "Critical Thinking",
            "Project Based Learning",
          ]}
        />

        {/* 3. Dual Course */}
        <PricingCard
          id="dual-card"
          refProp={dualRef}
          title="Dual Curriculum"
          subtitle="The Complete Education Bundle"
          priceGroup="$180"
          pricePrivate="$250"
          bgClass="bg-midnight"
          isDark={true}
          features={[
            "Full Islamic Bundle",
            "Full Western Bundle",
            "Priority Scheduling",
            "Progress Tracking",
            "Parent Portal",
            "Welcome Kit",
          ]}
        />

        {/* 4. Individual Courses (Table Design) */}
        <div
          ref={individualRef}
          id="individual-card"
          className="w-150 bg-white text-midnight border-4 border-gold shadow-2xl relative overflow-hidden flex flex-col"
          style={{ fontFamily: "var(--font-sans)", height: "800px" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="p-10 text-center relative z-10 bg-midnight/5">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-midnight font-bold font-cinzel text-xl border-2 border-white/20">
                R
              </div>
              <h1 className="font-cinzel text-xl tracking-widest uppercase">
                Rawdatul Atfaal Kids Academy
              </h1>
            </div>
            <p className="font-playfair italic text-lg text-gold">
              Individual Course Selection
            </p>
          </div>

          <div className="p-10 flex-1 relative z-10">
            <h2 className="font-cinzel text-3xl text-center border-b-2 border-gold/20 pb-4 mb-2 text-gold">
              Build Your Own Path
            </h2>
            <p className="text-center text-sm mb-10 uppercase tracking-widest text-midnight/60">
              Select Single Subjects
            </p>

            <div className="border border-midnight/10 rounded-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-midnight text-cream text-xs uppercase tracking-widest font-cinzel">
                  <tr>
                    <th className="p-4 font-bold">Subject</th>
                    <th className="p-4 text-right">Group/Mo</th>
                    <th className="p-4 text-right">1-on-1/Mo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-midnight/5 font-sans text-sm">
                  {[
                    { name: "Quran Memorisation", g: "$80", p: "$120" },
                    { name: "Arabic Language", g: "$80", p: "$120" },
                    { name: "Islamic Studies", g: "$80", p: "$120" },
                    { name: "Mathematics", g: "$80", p: "$120" },
                    { name: "Science", g: "$80", p: "$120" },
                    { name: "Programming", g: "$80", p: "$120" },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-ivory/50"}
                    >
                      <td className="p-4 font-medium">{row.name}</td>
                      <td className="p-4 text-right font-bold text-midnight/80">
                        {row.g}
                      </td>
                      <td className="p-4 text-right font-bold text-gold">
                        {row.p}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 bg-ivory p-4 rounded-sm border border-gold/20 text-center">
              <p className="font-playfair italic text-midnight/80">
                &quot;Customize your child&apos;s education with our flexible
                single-subject options.&quot;
              </p>
            </div>
          </div>

          <div className="p-6 text-center border-t border-gold/20 bg-midnight/5">
            <p className="font-cinzel text-sm font-bold text-midnight">
              rawdahkids.org
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
