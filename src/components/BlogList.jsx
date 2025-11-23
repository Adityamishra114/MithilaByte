import React, { useEffect, useMemo, useState } from "react";
import BlogCard from "../components/BlogCard";
import { blogs as BLOGS } from "../../data";

export default function BlogList() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("all");

  const tags = useMemo(() => {
    const set = new Set();
    BLOGS.forEach((b) => b.tags.forEach((t) => set.add(t)));
    return ["all", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return BLOGS.filter((b) => {
      const byTag = tag === "all" || b.tags.includes(tag);
      const byQ =
        !needle ||
        b.title.toLowerCase().includes(needle) ||
        b.excerpt.toLowerCase().includes(needle) ||
        b.tags.some((t) => t.toLowerCase().includes(needle));
      return byTag && byQ;
    });
  }, [q, tag]);

  return (
    <section className="mt-[calc(var(--header-height,80px)+24px)] font-publicSans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <header className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Insights & Engineering Notes
          </h1>
          <p className="mt-3 text-3xl sm:text-xl font-semibold text-gray-600">
            Deep dives on LLMs, RAG pipelines, evaluation, and production ML.
          </p>
        </header>

        {/* Controls */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4">
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
            placeholder="Search by title, tag, or keywords…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <select
            className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          >
            {tags.map((t) => (
              <option key={t} value={t}>
                {t.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((b) => (
            <BlogCard key={b.id} blog={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
