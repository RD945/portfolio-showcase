export const DesktopNav = () => {
  return (
    <nav
      aria-label="Primary navigation"
      className="relative items-center hidden md:flex md:justify-end md:gap-x-2"
    >
      <a href="#work" className="nav-link">
        Work
      </a>
      <a href="#about" className="nav-link">
        About
      </a>
      <a href="#services" className="nav-link">
        Services
      </a>
      <a href="#contact" className="nav-secondary">
        Start a project
      </a>
      <a href="#contact" className="nav-primary">
        Let&apos;s talk
      </a>
    </nav>
  );
};
