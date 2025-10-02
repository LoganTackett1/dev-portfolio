export function About() {
  return (
    <section
      id="about"
      className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20"
    >
      <div
        id="about-card"
        className="rounded-3xl border border-gray-200 bg-white/20 backdrop-blur-[3px] shadow-md p-8"
      >
        <h2
          id="about-title"
          className="text-2xl font-semibold text-gray-900"
        >
          About
        </h2>
        <p
          id="about-blurb"
          className="mt-4 text-gray-700 leading-7"
        >
          I’m a recent B.S. in Computer Science graduate (September 2025) with a
          strong foundation in both computer science and mathematics. I enjoy
          building clean, user-friendly applications end-to-end—from intuitive
          frontends to efficient backends and cloud deployments. My background
          in mathematics (self-studied for four years in high school) has shaped
          how I approach problem-solving, and it directly inspired projects like
          my interactive Rubik’s Cube app and the rotating tesseract demo. I
          value clear UX, maintainable code, and reliable systems.
        </p>

        <div
          id="about-template"
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          <div id="about-template-left" className="space-y-3">
            <ul
              id="about-list"
              className="text-gray-800 text-sm space-y-2"
            >
              <li>
                <span className="font-medium">Name:</span> Logan Tackett
              </li>
              <li>
                <span className="font-medium">Role:</span> Junior Software
                Engineer
              </li>
              <li>
                <span className="font-medium">Focus:</span> Full-stack
                development &amp; Cloud
              </li>
            </ul>
          </div>
          <div id="about-template-right" className="space-y-2">
            <div
              id="about-summary"
              className="rounded-xl border border-gray-200 bg-white p-4"
            >
              <p className="text-sm text-gray-700">
                As a recent graduate, I bring strong fundamentals in CS and math
                together with practical project experience. I build full-stack
                apps that are clean, reliable, and ready to scale.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio source link */}
        <p
          id="about-source"
          className="mt-6 text-xs text-gray-500"
        >
          This portfolio site is open source — view the code on{" "}
          <a
            href="https://github.com/LoganTackett1/dev-portfolio"
            target="_blank"
            className="text-blue-600 underline hover:text-blue-800"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
