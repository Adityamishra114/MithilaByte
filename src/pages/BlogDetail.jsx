import React, { useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogs as BLOGS } from "../../data";

export default function BlogDetail() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
  const { slug } = useParams();
  const nav = useNavigate();

  const ctx = useMemo(() => {
    const idx = BLOGS.findIndex((x) => x.slug === slug);
    if (idx === -1) return null;
    return {
      post: BLOGS[idx],
      prev: BLOGS[idx - 1],
      next: BLOGS[idx + 1]
    };
  }, [slug]);

  if (!ctx) {
    nav("/blog", { replace: true });
    return null;
  }

  const { post, prev, next } = ctx;

  return (
    <article className="mt-[calc(var(--header-height,80px)+24px)] font-publicSans">
      {/* Hero */}
      <header className="bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
          <Link to="/blog" className="text-sky-700 font-semibold">
            &larr; Back to all posts
          </Link>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            {post.avatar && (
              <img
                src={post.avatar}
                className="h-8 w-8 rounded-full"
                alt={post.author}
              />
            )}
            <span className="text-lg sm:text-md font-semibold">{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishedAt } className="text-xl sm:text-lg font-semibold">
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
            <span>•</span>
            <span className="text-lg sm:text-md font-semibold">{post.readingMinutes} min read</span>
            <div className="hidden sm:block ml-auto text-md sm:text-sm font-semibold">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="ml-2  text-md sm:text-sm font-semibold uppercase text-sky-700 bg-sky-50 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {post.cover && (
            <div className="mt-6 overflow-hidden rounded-lg ring-1 ring-black/5">
              <img
                src={post.cover}
                alt=""
                className="w-full max-h-[420px] object-cover"
              />
            </div>
          )}
        </div>
      </header>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="prose prose-slate max-w-none text-xl sm:text-lg font-semibold ">
          {post.content.map((block, i) => (
            <MarkdownBlock key={i} text={block} />
          ))}
        </div>

        {/* Prev / Next */}
        <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            {prev && (
              <Link
                to={`/blog/${prev.slug}`}
                className="block rounded-md text-lg sm:text-md font-semibold bg-slate-50 hover:bg-slate-100 p-4 ring-1 ring-black/5"
              >
                <div className="text-xs text-gray-500">Previous</div>
                <div className="font-bold text-sm ">{prev.title}</div>
              </Link>
            )}
          </div>
          <div className="sm:text-right">
            {next && (
              <Link
                to={`/blog/${next.slug}`}
                className="block rounded-md text-lg sm:text-md font-semibold bg-slate-50 hover:bg-slate-100 p-4 ring-1 ring-black/5"
              >
                <div className="text-xs text-gray-500">Next</div>
                <div className="font-bold text-sm">{next.title}</div>
              </Link>
            )}
          </div>
        </nav>
      </section>
    </article>
  );
}

function MarkdownBlock({ text }) {
  if (text.startsWith("## ")) return <h2>{text.replace(/^## /, "")}</h2>;
  if (text.startsWith("# ")) return <h1>{text.replace(/^# /, "")}</h1>;
  if (text.startsWith("- ")) {
    const items = text
      .split("\n")
      .filter(Boolean)
      .map((s) => s.replace(/^- /, ""));
    return (
      <ul>
        {items.map((li, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: bold(li) }} />
        ))}
      </ul>
    );
  }
  return <p dangerouslySetInnerHTML={{ __html: bold(text) }} />;

  function bold(s) {
    return s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }
}
