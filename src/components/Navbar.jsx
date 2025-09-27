export function Navbar() {
  return (
    <header id="navbar" className="w-full h-[30px] top-[0] fixed z-10 text-black">
      <div id="navbar-container" className="navbar-container">
        <nav className="navbar-links flex justify-center gap-[4px]">
          <a href="#top">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}