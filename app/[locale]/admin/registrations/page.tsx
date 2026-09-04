"use client";

import { useMemo, useState } from "react";

type Registration = {
  id: string;
  email: string;
  full_name: string;
  phone_e164: string;
  city: string | null;
  country_code: string | null;
  child_name: string;
  child_age: number;
  programme_interest: string;
  class_format: string;
  selected_courses: string[];
  additional_info: string | null;
  created_at: string;
};

export default function RegistrationsPage() {
  const [token, setToken] = useState("");
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState<Registration[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadRegistrations() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/registrations", {
        headers: { "x-admin-token": token },
        cache: "no-store",
      });
      const body = await response.json();
      if (!response.ok)
        throw new Error(body.message || "Unable to load registrations");
      setRows(body.registrations);
    } catch (loadError) {
      setError(
        loadError instanceof Error
          ? loadError.message
          : "Unable to load registrations",
      );
      setRows([]);
    } finally {
      setLoading(false);
    }
  }

  async function downloadCsv() {
    setError("");
    const response = await fetch("/api/admin/registrations?format=csv", {
      headers: { "x-admin-token": token },
    });
    if (!response.ok) {
      setError("Unable to download registrations. Check your admin token.");
      return;
    }
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "registrations.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return rows;
    return rows.filter((row) =>
      [
        row.full_name,
        row.email,
        row.child_name,
        row.city,
        row.programme_interest,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query, rows]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-cinzel text-midnight dark:text-cream">
            Registrations
          </h1>
          <p className="text-midnight/60 dark:text-cream/60 mt-1">
            View enrolment details and download your records.
          </p>
        </div>
        <button
          onClick={downloadCsv}
          disabled={!rows.length}
          className="px-5 py-3 bg-gold text-midnight rounded font-bold disabled:opacity-40"
        >
          Download CSV
        </button>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          void loadRegistrations();
        }}
        className="flex flex-wrap gap-3 rounded-lg border border-midnight/10 dark:border-white/10 p-4"
      >
        <input
          type="password"
          value={token}
          onChange={(event) => setToken(event.target.value)}
          placeholder="Admin registrations token"
          className="min-w-65 flex-1 rounded border border-midnight/20 dark:border-white/20 bg-transparent px-4 py-3"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-3 border border-gold text-gold rounded font-semibold disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load registrations"}
        </button>
      </form>

      {error && (
        <p className="rounded border border-red-500/40 bg-red-500/10 p-4 text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      {rows.length > 0 && (
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search parent, child, email, city, or programme"
          className="w-full rounded border border-midnight/20 dark:border-white/20 bg-transparent px-4 py-3"
        />
      )}

      <div className="overflow-x-auto rounded-lg border border-midnight/10 dark:border-white/10">
        <table className="w-full min-w-275 text-left">
          <thead className="bg-ivory dark:bg-[#12221b]">
            <tr>
              {[
                "Registered",
                "Parent",
                "Contact",
                "Child",
                "Programme",
                "Format",
                "Courses",
                "Notes",
              ].map((heading) => (
                <th key={heading} className="px-4 py-3 text-sm font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row) => (
              <tr
                key={row.id}
                className="border-t border-midnight/10 dark:border-white/10 align-top"
              >
                <td className="px-4 py-4 text-sm">
                  {new Date(row.created_at).toLocaleString()}
                </td>
                <td className="px-4 py-4">
                  <div className="font-semibold">{row.full_name}</div>
                  <div className="text-sm opacity-70">{row.email}</div>
                </td>
                <td className="px-4 py-4 text-sm">
                  {row.phone_e164}
                  <br />
                  {row.city || ""} {row.country_code || ""}
                </td>
                <td className="px-4 py-4">
                  <div className="font-semibold">{row.child_name}</div>
                  <div className="text-sm opacity-70">Age {row.child_age}</div>
                </td>
                <td className="px-4 py-4 text-sm">{row.programme_interest}</td>
                <td className="px-4 py-4 text-sm">{row.class_format}</td>
                <td className="px-4 py-4 text-sm">
                  {row.selected_courses?.join(", ") || "-"}
                </td>
                <td className="px-4 py-4 text-sm">
                  {row.additional_info || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!filteredRows.length && (
          <p className="p-8 text-center opacity-60">
            Enter your token and load registrations.
          </p>
        )}
      </div>
    </div>
  );
}
