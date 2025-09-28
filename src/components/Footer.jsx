export function Footer() {
  return (
    <footer id="footer" className="relative z-10 mt-20 mb-[20px]">
      <div id="footer-shell" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div id="footer-bar" className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur shadow-sm px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div id="footer-copy" className="text-sm text-gray-700">© {new Date().getFullYear()} Logan Tackett</div>
          <div id="footer-links" className="flex items-center gap-6">
            <a id="footer-top" href="#top" className="text-sm text-gray-700 hover:text-blue-700 transition-colors">Back to top</a>
            <a id="footer-contact" href="#contact" className="text-sm text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
