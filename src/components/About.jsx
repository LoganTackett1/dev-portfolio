export function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div id="about-card" className="rounded-3xl border border-gray-200 bg-white/20 backdrop-blur-[3px] shadow-md p-8">
        <h2 id="about-title" className="text-2xl font-semibold text-gray-900">About</h2>
        <p id="about-blurb" className="mt-4 text-gray-700 leading-7">
          I build end-to-end software with clean UX and pragmatic engineering. This site embeds my original
          tesseract canvas (kept intact) inside React. I lean on Go, React, MySQL, and AWS.
        </p>

        <div id="about-template" className="mt-8 grid gap-4 sm:grid-cols-2">
          <div id="about-template-left" className="space-y-3">
            <p className="text-sm text-gray-500">/* replace with my details */</p>
            <ul id="about-list" className="text-gray-800 text-sm space-y-2">
              <li><span className="font-medium">Name:</span> Your Name</li>
              <li><span className="font-medium">Location:</span> City, State</li>
              <li><span className="font-medium">Role:</span> Software Engineer</li>
              <li><span className="font-medium">Focus:</span> Full-stack, AI/ML, Cloud</li>
            </ul>
          </div>
          <div id="about-template-right" className="space-y-2">
            <div id="about-summary" className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-700">
                I ship fast, keep code readable, and instrument systems for reliability. Comfortable owning frontend,
                backend, and infra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
