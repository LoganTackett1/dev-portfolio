import { useState } from "react";

export function Navbar() {
const [open, setOpen] = useState(false);

return (
    <header id="navbar" className="fixed flex justify-center top-0 left-0 right-0 z-20">
    <div
        id="navbar-shell"
        className="mx-auto max-w-6xl px-4 sm:px-6"
    >
        <div
        id="navbar-bar"
        className="flex h-14 items-center justify-between rounded-b-2xl bg-white/80 backdrop-blur border border-gray-200 shadow-sm"
        >
        <a id="navbar-brand" href="#top" className="flex items-center gap-2 px-3 py-2">
            <span id="navbar-logo" className="inline-block h-3 w-3 rounded-sm bg-blue-600"></span>
            <span id="navbar-title" className="text-sm font-medium text-gray-900">Logan Tackett</span>
        </a>

        <nav id="navbar-links" className="hidden md:flex items-center gap-6 pr-3">
            <a id="nav-home" href="#top" className="text-sm text-gray-700 hover:text-blue-700 transition-colors">Home</a>
            <a id="nav-about" href="#about" className="text-sm text-gray-700 hover:text-blue-700 transition-colors">About</a>
            <a id="nav-projects" href="#projects" className="text-sm text-gray-700 hover:text-blue-700 transition-colors">Projects</a>
            <a id="nav-contact" href="#contact" className="text-sm text-gray-700 hover:text-blue-700 transition-colors">Contact</a>
        </nav>

        <button
            id="navbar-toggle"
            className="md:hidden inline-flex items-center justify-center px-3 py-2 text-gray-700 hover:text-blue-700"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
        >
            <svg id="navbar-toggle-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
            </svg>
        </button>
        </div>

        <div
        id="navbar-mobile"
        className={`md:hidden mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white/90 backdrop-blur shadow-sm transition-[max-height,opacity] ${open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
        >
        <nav id="navbar-mobile-links" className="flex flex-col">
            <a id="mnav-home" onClick={() => setOpen(false)} href="#top" className="px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700">Home</a>
            <a id="mnav-about" onClick={() => setOpen(false)} href="#about" className="px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700">About</a>
            <a id="mnav-projects" onClick={() => setOpen(false)} href="#projects" className="px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700">Projects</a>
            <a id="mnav-contact" onClick={() => setOpen(false)} href="#contact" className="px-4 py-3 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700">Contact</a>
        </nav>
        </div>
    </div>
    </header>
);
}
