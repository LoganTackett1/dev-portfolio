import { useState, useRef, useEffect, useMemo } from "react";

function slugify(s) {
  return String(s || "card")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function BrainstormingCard({
  title,
  imageSrcLight,
  imageSrcDark,
  repoUrl,
  demoUrl,
  idPrefix,
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  const [sliderPos, setSliderPos] = useState(0);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  const pid = useMemo(() => idPrefix || slugify(title), [idPrefix, title]);

  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight);
  }, [open]);

  useEffect(() => {
    const handleMove = (e) => {
      if (!draggingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX ?? (e.touches && e.touches[0]?.clientX);
      if (x != null) {
        let newPos = ((x - rect.left) / rect.width) * 100;
        newPos = Math.max(0, Math.min(100, newPos));
        setSliderPos(newPos);
      }
    };

    const handleUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

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
          {/* Image comparison container */}
          <div
            id={`${pid}-media`}
            ref={containerRef}
            className="md:w-2/5 relative rounded-2xl border border-white/40 overflow-hidden select-none h-40 md:h-full"
          >
            <img
              src={imageSrcLight}
              alt=""
              draggable="false"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            <img
              src={imageSrcDark}
              alt=""
              draggable="false"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            />

            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white"
              style={{ left: `${sliderPos}%` }}
            >
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-gray-400 shadow cursor-col-resize"
                onMouseDown={() => (draggingRef.current = true)}
                onTouchStart={() => (draggingRef.current = true)}
                aria-label="Drag to compare light/dark"
                role="slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPos)}
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
              A collaborative brainstorming dashboard where users can create
              boards with custom titles and thumbnails, add cards with text or
              images, and share boards with friends or colleagues. Boards can be
              shared via email invitations with read/edit permissions or by
              generating secure share links. The interface is simple and
              interactive, with polish features like a draggable bar that lets
              you reveal the dark theme version of the app. <br />
              <span className="text-gray-900 font-medium">
                Built as a full-stack application using React (TypeScript,
                Tailwind) on the frontend, Go with MySQL on the backend, and
                hosted on AWS (S3 + Lightsail).
              </span>
            </p>

            {/* Demo info */}
            <div
              id={`${pid}-demo-info`}
              className="mt-3 p-2 rounded-lg bg-blue-50 text-xs text-gray-700 border border-blue-200"
            >
              Demo Board (Share link with edit permissions):{" "}
              <a
                href="https://simplebrainstorm.com/share/4c9cfe76f93885d8be48b3e6fc8e96b2"
                target="_blank"
                className="text-blue-600 underline"
              >
                Try it here
              </a>
              <br />
              Demo Credentials: <code>demo@example.com</code> /{" "}
              <code>mypassword</code>
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

      {/* Expandable details section */}
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
                  <strong>Authentication:</strong> JWT-based auth with bcrypt
                  password hashing, backed by a MySQL <code>users</code> table.
                </li>
                <li>
                  <strong>Sharing:</strong> Two approaches:
                  <ul className="list-disc list-inside ml-5">
                    <li>
                      Email invite → <code>board_access</code> table (foreign
                      keys link user & board, access level: read/edit).
                    </li>
                    <li>
                      Share link → <code>board_share</code> table (random token
                      + board ID + access level).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Scalability:</strong> Dockerized for consistent deploys.
                  (No horizontal scaling implemented yet.)
                </li>
                <li>
                  <strong>Stack:</strong> React + TypeScript + Tailwind,
                  React-Draggable, Go backend, MySQL database, hosted on AWS S3
                  & Lightsail.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}