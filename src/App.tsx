import { useEffect } from "react";
import { Navbar } from "./sections/Navbar";
import { MainContent } from "./sections/MainContent";
import { Footer } from "./sections/Footer";

export const App = () => {
  useEffect(() => {
    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (revealElements.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="text-slate-900 text-base not-italic normal-nums font-normal accent-auto bg-stone-100 box-border caret-transparent block tracking-[normal] leading-5 list-outside list-disc min-h-full outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-inter">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};
