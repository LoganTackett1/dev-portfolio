export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20"
    >
      <div
        id="contact-card"
        className="rounded-3xl border border-gray-200 bg-white/20 backdrop-blur-[3px] shadow-md p-8"
      >
        <h2
          id="contact-title"
          className="text-2xl font-semibold text-gray-900"
        >
          Contact
        </h2>
        <p
          id="contact-note"
          className="mt-2 text-sm text-gray-600"
        >
          I’m open to junior software engineering opportunities — feel free to
          reach out via email, LinkedIn, or GitHub.
        </p>

        <div
          id="contact-buttons"
          className="mt-6 flex flex-wrap gap-3"
        >
          <a
            id="contact-email"
            href="mailto:logantackettwork@gmail.com"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm md:text-base font-semibold text-white transition hover:bg-blue-700 active:bg-blue-800"
          >
            Email Me
          </a>

          <a
            id="contact-linkedin"
            href="https://www.linkedin.com/in/logan-tackett-764402383"
            target="_blank"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm md:text-base font-semibold text-gray-900 transition hover:border-blue-400 hover:text-blue-700"
          >
            LinkedIn
          </a>

          <a
            id="contact-github"
            href="https://github.com/LoganTackett1"
            target="_blank"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm md:text-base font-semibold text-gray-900 transition hover:border-blue-400 hover:text-blue-700"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
