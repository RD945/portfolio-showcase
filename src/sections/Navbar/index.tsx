import { useEffect, useState } from "react";
import { BrandArea } from "./components/BrandArea";
import { DesktopNav } from "./components/DesktopNav";
import { MobileMenuButton } from "./components/MobileMenuButton";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      data-scrolled={isScrolled}
      className={`sticky items-center box-border caret-transparent flex justify-between outline-[3px] w-full z-[200] top-0 transition-all duration-300 ${isScrolled ? "bg-transparent px-3 py-2 md:px-4" : "bg-stone-100/90 px-0 py-0"}`}
    >
      <div
        className={`items-center box-border caret-transparent flex justify-between max-w-[1440px] min-h-[auto] min-w-[auto] outline-[3px] w-full mx-auto transition-all duration-300 ${isScrolled ? "h-[56px] rounded-2xl border border-stone-300/70 bg-stone-100/70 px-4 shadow-[0_8px_24px_rgba(41,37,36,0.12)] backdrop-blur-xl md:h-16 md:px-6" : "h-[60px] px-5 py-2 md:h-20 md:px-10 md:py-0"}`}
      >
        <BrandArea />
        <DesktopNav />
        <MobileMenuButton
          isOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((open) => !open)}
        />
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile primary navigation"
        hidden={!isMenuOpen}
        className="absolute top-full left-0 right-0 border-b border-stone-300 bg-stone-100/95 px-5 pb-5 pt-2 shadow-lg backdrop-blur md:hidden"
      >
        <ul className="flex flex-col gap-1">
          {[
            ["Work", "#work"],
            ["About", "#about"],
            ["Services", "#services"],
            ["Start a project", "#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="block rounded-lg px-3 py-3 text-base text-neutral-800 transition-colors hover:bg-stone-200 hover:text-sky-700 focus-visible:outline-2 focus-visible:outline-sky-600 focus-visible:outline-offset-2"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
