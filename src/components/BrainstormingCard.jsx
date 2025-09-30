import { useState, useRef, useEffect, useMemo } from "react";

function slugify(s) {
  return String(s || "card")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function BrainstormingCard({
  title,
  imageSrc,
  description,
  tech,
  repoUrl,
  demoUrl,
  loomUrl,
  idPrefix,
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const pid = useMemo(() => idPrefix || slugify(title), [idPrefix, title]);

  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
  }, [open, tech]);

  return (
    <article
      id={`${pid}-project-card`}
      className="rounded-3xl border border-white/40 bg-white/20 backdrop-blur-[3px] shadow-md overflow-hidden transition hover:shadow-lg"
    >
      <div id={`${pid}-top`} className="p-6">
        <div id={`${pid}-row`} className="flex flex-col md:flex-row gap-5 h-[320px] md:h-[300px]">
          <div id={`${pid}-media`} className="md:w-2/5">
            <img
              id={`${pid}-image`}
              src={imageSrc}
              alt=""
              className="w-full h-40 md:h-full object-cover rounded-2xl border border-white/40"
            />
          </div>

          <div id={`${pid}-body`} className="md:w-3/5 flex flex-col">
            <h3 id={`${pid}-title`} className="text-lg font-semibold text-gray-900">
              {title}
            </h3>

            <p
              id={`${pid}-desc`}
              className="mt-2 text-sm text-gray-800 overflow-hidden"
              style={{ maxHeight: "3.75rem" }}
            >
              {description}
            </p>

            <div id={`${pid}-actions`} className="mt-auto flex items-center gap-3 pt-3">
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
              {loomUrl && (
                <a
                  id={`${pid}-loom`}
                  href={loomUrl}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-900 hover:border-blue-400 hover:text-blue-700 transition"
                >
                  Loom Demo
                </a>
              )}

              <button
                id={`${pid}-expand`}
                onClick={() => setOpen((v) => !v)}
                className="ml-auto inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700 active:bg-blue-800 transition"
                aria-expanded={open}
                aria-controls={`${pid}-tech-wrap`}
              >
                {open ? "Hide Tech" : "Show Tech"}
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
            <div id={`${pid}-tech-title`} className="text-xs uppercase tracking-wide text-gray-600">
              Tech
            </div>
            <div id={`${pid}-tech-list`} className="mt-2 text-sm text-gray-900">
              {tech}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
