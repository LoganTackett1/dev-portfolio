import { useState, useRef, useEffect, useMemo } from "react";

function slugify(s) {
  return String(s || "card")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function SimulationCard({
  title,
  imageSrc,
  repoUrl,
  demoUrl,
  idPrefix,
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const pid = useMemo(() => idPrefix || slugify(title), [idPrefix, title]);

  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
  }, [open]);

  return (
    <article
      id={`${pid}-project-card`}
      className="rounded-3xl border border-white/40 bg-white/20 backdrop-blur-[3px] shadow-md overflow-hidden transition hover:shadow-lg"
    >
      <div id={`${pid}-top`} className="p-6">
        <div
          id={`${pid}-row`}
          className="flex flex-col md:flex-row gap-5 h-[340px] md:h-[300px] relative"
        >
          <div
            id={`${pid}-media`}
            className="md:w-2/5 rounded-2xl border border-white/40 overflow-hidden select-none h-40 md:h-full"
          >
            <img
              src={imageSrc}
              alt={`${title} preview`}
              draggable="false"
              className="w-full h-full object-cover pointer-events-none"
            />
          </div>

          <div id={`${pid}-body`} className="md:w-3/5 flex flex-col">
            <h3
              id={`${pid}-title`}
              className="text-lg font-semibold text-gray-900"
            >
              {title}
            </h3>

            <p id={`${pid}-desc`} className="mt-2 text-sm text-gray-800">
              A data-driven simulation platform built to analyze and visualize
              probabilistic outcomes for slot and sports betting models. Users
              can configure betting parameters, run large-scale simulations,
              and view real-time metrics including RTP, variance, and win rate.
              <br />
              <span className="text-gray-900 font-medium">
                Built with ASP.NET Core (C#) and MongoDB on the backend,
                React + Vite + Tailwind on the frontend, and deployed on Render
                using Docker for the backend and static hosting for the
                frontend.
              </span>
            </p>

            <div
              id={`${pid}-tip`}
              className="mt-3 p-2 rounded-lg bg-blue-50 text-xs text-gray-700 border border-blue-200"
            >
              Designed as a cohesive full-stack application emphasizing efficient data handling, real-time interaction, and maintainable architecture across the MongoDB, .NET, and React layers.
            </div>

            <div
              id={`${pid}-actions`}
              className="mt-auto flex items-center gap-3 pt-3"
            >
              {repoUrl && (
                <a
                  id={`${pid}-repo`}
                  href={repoUrl}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-blue-400 hover:text-blue-700 transition"
                >
                  GitHub
                </a>
              )}
              {demoUrl && (
                <a
                  id={`${pid}-demo`}
                  href={demoUrl}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-blue-400 hover:text-blue-700 transition"
                >
                  Live App
                </a>
              )}

              <button
                id={`${pid}-expand`}
                onClick={() => setOpen((v) => !v)}
                className="ml-auto inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 active:bg-blue-800 transition"
                aria-expanded={open}
                aria-controls={`${pid}-tech-wrap`}
              >
                {open ? "Hide Details" : "Behind the Scenes"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id={`${pid}-bottom`}
        style={{ maxHeight: open ? contentHeight : 0 }}
        className="transition-[max-height] duration-500 ease-in-out overflow-hidden"
        aria-hidden={!open}
      >
        <div
          id={`${pid}-tech-wrap`}
          ref={contentRef}
          className="p-6 border-t border-white/50 bg-white/30 backdrop-blur-[3px]"
        >
          <div id={`${pid}-tech`}>
            <div
              id={`${pid}-tech-title`}
              className="text-xs uppercase tracking-wide text-gray-600"
            >
              Behind the Scenes
            </div>
            <div id={`${pid}-tech-list`} className="mt-2 text-sm text-gray-900">
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Backend:</strong> ASP.NET Core 9 service exposing REST
                  endpoints for simulation runs, defaults, and history.
                </li>
                <li>
                  <strong>Database:</strong> MongoDB Atlas handles persistent
                  storage for historical simulation data with flexible schemas.
                </li>
                <li>
                  <strong>Frontend:</strong> React + Vite + Tailwind, providing
                  dynamic, component-based interaction and live data visualization.
                </li>
                <li>
                  <strong>Simulation logic:</strong> Implements configurable
                  randomization models to calculate RTP and variance for slot
                  and sports simulations.
                </li>
                <li>
                  <strong>Deployment:</strong> Backend Dockerized and hosted on
                  Render, frontend served as a Render static site.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}