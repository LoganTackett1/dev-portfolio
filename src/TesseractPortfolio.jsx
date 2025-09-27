import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "./tesseract/index.css";
import { FOUR } from "./tesseract/tesseract";

export default function TesseractPortfolio() {
  return (
    <div className="relative min-h-screen text-white">
      <BackgroundCanvas />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const cubeRef = useRef(null);
  const rafRef = useRef(0);
  const intervalRef = useRef(0);
  const wAngleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const setSize = () => {
      const min = Math.min(window.innerWidth, window.innerHeight);
      canvas.width = min;
      canvas.height = min;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // === Build cube via your FOUR API ===
    const cube = FOUR.create4DCube();
    cubeRef.current = cube;

    // === Scroll handling (jQuery-style percentage scrolled) ===
    const amountScrolled = () => {
      const winheight = $(window).height();
      const docheight = $(document).height();
      const scrollTop = $(window).scrollTop();
      const trackLength = docheight - winheight;
      const pct = trackLength > 0 ? scrollTop / trackLength : 0;
      return pct;
    };

    const navbar = document.getElementById("navbar");
    let currPercScroll = amountScrolled();
    let camAngle = currPercScroll * -Math.PI;

    const onScroll = () => {
      if (navbar) {
        const navY = navbar.getBoundingClientRect().y;
        if (navY <= 10) navbar.classList.add("sticky-true");
        else navbar.classList.remove("sticky-true");
      }
      currPercScroll = amountScrolled();
      camAngle = currPercScroll * -Math.PI;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // === Animation (reuse your math functions) ===
    const wDelta = 0.003;
    const tick = () => {
      // 4D → 3D (rotate on w-axis), camera = 3
      FOUR.update3DMap(cube, wAngleRef.current, 3);
      // Tilt toward camera with scroll (X-axis tilt via centering matrix)
      const matrix = FOUR.getCenteringMatrix([
        0,
        Math.cos(camAngle),
        Math.sin(camAngle),
      ]);
      FOUR.update2DMap(cube, matrix, 3.7);
      FOUR.drawCube(ctx, canvas, cube);
      wAngleRef.current += wDelta;
    };

    // Your original uses setInterval(~60fps). We'll keep that for parity
    intervalRef.current = window.setInterval(tick, 16);

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("scroll", onScroll);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      id="tesseract"
      ref={canvasRef}
      className="fixed inset-0 -z-10 block"
      aria-hidden
    />
  );
}

/**********************
 * UI using your CSS   *
 **********************/
function Navbar() {
  // Keep legacy IDs so your CSS behavior works without rewrites
  return (
    <header id="navbar" className="relative z-20">
      <div id="navbar-container" className="navbar-container">
        <button id="navbar-button" className="navbar-button" onClick={() => {
          const navContainer = document.getElementById("navbar-container");
          const btn = document.getElementById("navbar-button");
          navContainer?.classList.toggle("nav-off");
          btn?.classList.toggle("nav-off");
        }}>
          ☰
        </button>
        <nav className="navbar-links">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <h1 className="hero-title">Logan Tackett</h1>
      <p className="hero-sub">Full‑stack dev • Go • React • ML‑adjacent UI</p>
      <a className="hero-cta" href="#projects">See projects</a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>
        I build end‑to‑end apps with crisp UX. This portfolio reuses my original
        tesseract canvas math (FOUR) inside React without changing that code.
      </p>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul className="projects">
        <li>Brainstorming Dashboard (Go + React + MySQL + S3)</li>
        <li>Screen‑reader micro‑SaaS (browser extension)</li>
        <li>Rubik’s Cube 3D (Three.js + solver hooks)</li>
        <li>Resume Optimizer (AI‑assisted tailoring)</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>
        Email <a href="mailto:you@example.com">you@example.com</a>
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Logan Tackett
    </footer>
  );
}
