export function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div id="about-card" className="rounded-3xl border border-gray-200 bg-white/20 backdrop-blur-[3px] shadow-md p-8">
        <h2 id="about-title" className="text-2xl font-semibold text-gray-900">About</h2>
        <p id="about-blurb" className="mt-4 text-gray-700 leading-7">
          I’m a recent BS in Computer Science graduate who builds end-to-end, user-friendly software and learns in public. 
          In high school I spent four years self-studying mathematics, which inspired projects like my Rubik’s Cube app and 
          the rotating tesseract featured here (now embedded in React). I focus on clear UX, readable code, and simple, 
          reliable systems—from frontend to APIs and basic cloud deploys.
        </p>

        <div id="about-template" className="mt-8 grid gap-4 sm:grid-cols-2">
          <div id="about-template-left" className="space-y-3">
            <ul id="about-list" className="text-gray-800 text-sm space-y-2">
              <li><span className="font-medium">Name:</span> Logan Tackett</li>
              <li><span className="font-medium">Role:</span> Software Engineer</li>
              <li><span className="font-medium">Focus:</span> Full-stack, Cloud</li>
            </ul>
          </div>
          <div id="about-template-right" className="space-y-2">
            <div id="about-summary" className="rounded-xl border border-gray-200 bg-white p-4">
              <p className="text-sm text-gray-700">
                I ship features, write clean code, and build reliable apps end-to-end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
