export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 pt-14 min-h-[calc(100vh-3.5rem)] flex items-center"
    >
      <div id="hero-shell" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          id="hero-content"
          className="flex flex-col items-center justify-center text-center gap-6"
        >
          <div
            id="hero-kicker"
            className="text-sm font-medium text-blue-700/90 tracking-wide"
          >
            Full-stack Developer • Early Career Engineer
          </div>

          <h1
            id="hero-title"
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-gray-900 drop-shadow"
          >
            I turn ideas into{" "}
            <span
              id="hero-highlight"
              className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent"
            >
              working software
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="max-w-2xl text-lg md:text-xl text-gray-700 leading-7 md:leading-8 drop-shadow-sm"
          >
            Pragmatic engineering, clean UX, and cloud-first deployment.{" "}
          </p>

          <div
            id="hero-cta-row"
            className="mt-2 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              id="hero-cta-projects"
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm md:text-base font-semibold text-white transition hover:bg-blue-700 active:bg-blue-800"
            >
              View Projects
            </a>
            <a
              id="hero-cta-contact"
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm md:text-base font-semibold text-gray-900 transition hover:border-blue-400 hover:text-blue-700"
            >
              Contact
            </a>
            <a
              id="hero-cta-resume"
              href="/dev-portfolio/resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm md:text-base font-semibold text-gray-900 transition hover:border-blue-400 hover:text-blue-700"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
