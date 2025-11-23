import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white ring-1 ring-black/5 shadow-sm hover:shadow-lg transition">
      <Link to={`/blog/${blog.slug}`} className="block">
        {blog.cover && (
          <img
            src={blog.cover}
            alt={blog.title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
        )}
        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {blog.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-bold tracking-wide uppercase text-sky-700 bg-sky-50 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          <h3 className=" text-md sm:text-sm font-extrabold text-gray-900 line-clamp-2">
            {blog.title}
          </h3>
          <p className="mt-2  text-md sm:text-sm font-semibold text-gray-600 line-clamp-2">
            {blog.excerpt}
          </p>
          <div className="mt-4 flex  text-md sm:text-sm font-semibold items-center gap-3 text-sm text-gray-500">
            {blog.avatar && (
              <img
                src={blog.avatar}
                className="h-7 w-7 rounded-full"
                alt={blog.author}
              />
            )}
            <span>{blog.author}</span>
            <span>•</span>
            <time dateTime={blog.publishedAt}>
              {new Date(blog.publishedAt).toLocaleDateString()}
            </time>
            <span>•</span>
            <span>{blog.readingMinutes} min read</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
