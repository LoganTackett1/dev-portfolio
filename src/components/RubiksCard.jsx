import { useState, useRef, useEffect, useMemo } from "react";

function slugify(s) {
  return String(s || "card")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function RubiksCard({
  title,
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

  // Always use fixed iframe source
  const iframeSrc = "https://logantackett1.github.io/rubiks-threejs/?zoom=35";

  return (
    <article
      id={`${pid}-project-card`}
      className="rounded-3xl border border-white/40 bg-white/20 backdrop-blur-[3px] shadow-md overflow-hidden transition hover:shadow-lg"
    >
      <div id={`${pid}-top`} className="p-6">
        <div
          id={`${pid}-row`}
          className="flex flex-col md:flex-row gap-5 h-[360px] md:h-[300px] relative"
        >
          {/* Interactive cube embed */}
          <div id={`${pid}-media`} className="md:w-2/5">
            <div
              id={`${pid}-iframe-wrap`}
              className="relative w-full h-40 md:h-full rounded-2xl border border-white/40 overflow-hidden"
            >
              <iframe
                id={`${pid}-iframe`}
                src={iframeSrc}
                title={`${title} Live Embed`}
                loading="lazy"
                className="absolute w-[200%] h-[200%] -left-[50%] -top-[50%] border-0"
              />
            </div>
          </div>

          {/* Body */}
          <div id={`${pid}-body`} className="md:w-3/5 flex flex-col">
            <h3
              id={`${pid}-title`}
              className="text-lg font-semibold text-gray-900"
            >
              {title}
            </h3>

            <p id={`${pid}-desc`} className="mt-2 text-sm text-gray-800">
              A fully interactive 3D Rubik’s Cube you can play with directly in
              the browser — the cube is not an image, it’s the real thing.
              Works smoothly on both desktop and mobile with support for reset,
              scramble, and automatic solve (using the Kociemba algorithm via
              <code> cubejs</code>). <br />
              <span className="text-gray-900 font-medium">
                Built with Three.js for rendering and cubejs for solving logic,
                deployed as a static app with GitHub Pages.
              </span>
            </p>

            {/* Tip box */}
            <div
              id={`${pid}-tip`}
              className="mt-3 p-2 rounded-lg bg-blue-50 text-xs text-gray-700 border border-blue-200"
            >
              Tip: Try dragging and rotating the cube — it’s live and
              interactive. For full features like scramble and solve see the Live App.
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

      {/* Expandable details */}
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
                  <strong>Interaction model:</strong> Each cube face is paired
                  with an invisible plane. When a user clicks and drags, the
                  drag vector is tracked relative to the plane they selected.
                  This relationship between <em>cube face</em>,{" "}
                  <em>interaction plane</em>, and <em>drag vector</em> defines
                  which pieces rotate and in what direction until the drag
                  action completes.
                </li>
                <li>
                  <strong>Rotations:</strong> Implemented using Euler angles and
                  quaternions to ensure smooth, consistent 3D movement.
                </li>
                <li>
                  <strong>Solving logic:</strong> Powered by the{" "}
                  <code>cubejs</code> npm package, which ports Kociemba’s
                  two-phase solving algorithm into JavaScript for fast and
                  accurate cube solutions.
                </li>
                <li>
                  <strong>Rendering:</strong> Three.js provides efficient
                  real-time 3D rendering, enabling smooth performance across
                  both desktop and mobile devices.
                </li>
                <li>
                  <strong>Deployment:</strong> Deployed as a static site via
                  GitHub Pages for ease of access and reliability.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
