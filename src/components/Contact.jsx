export function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div id="contact-card" className="rounded-3xl border border-gray-200 bg-white/20 backdrop-blur-[3px] shadow-md p-8">
        <h2 id="contact-title" className="text-2xl font-semibold text-gray-900">Contact</h2>
        <p id="contact-note" className="mt-2 text-sm text-gray-500">/* replace with my info */</p>

        <div id="contact-grid" className="mt-6 grid gap-6 sm:grid-cols-2">
          <div id="contact-left" className="space-y-4">
            <a id="contact-email" href="mailto:you@example.com" className="block rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-400 hover:shadow transition">
              <div id="contact-email-label" className="text-xs uppercase tracking-wide text-gray-500">Email</div>
              <div id="contact-email-value" className="text-gray-800">you@example.com</div>
            </a>
            <a id="contact-linkedin" href="#" className="block rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-400 hover:shadow transition">
              <div id="contact-linkedin-label" className="text-xs uppercase tracking-wide text-gray-500">LinkedIn</div>
              <div id="contact-linkedin-value" className="text-gray-800">https://linkedin.com/in/your-handle</div>
            </a>
          </div>
          <form id="contact-form" className="space-y-4">
            <div id="contact-inputs" className="grid gap-4 sm:grid-cols-2">
              <input id="contact-name" name="name" placeholder="Your name" className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input id="contact-from" name="from" placeholder="Email or handle" className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <textarea id="contact-message" name="message" rows={4} placeholder="Message" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button id="contact-send" type="button" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800 transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
