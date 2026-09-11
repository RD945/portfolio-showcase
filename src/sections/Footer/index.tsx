import { FooterContent } from "./components/FooterContent";
import { FooterLogo } from "./components/FooterLogo";
import { FooterCopyright } from "./components/FooterCopyright";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bg-stone-100 bg-[linear-gradient(rgb(245,242,237),rgb(221,240,255))] box-border caret-transparent min-h-[620px] outline-[3px] z-0 pt-12 pb-6 md:min-h-[700px] md:pb-4"
    >
      <div className="box-border caret-transparent flex-col h-full justify-center max-w-[1440px] outline-[3px] w-full mx-auto px-5 md:px-10">
        <FooterContent />
        <FooterLogo />
        <FooterCopyright />
      </div>
    </footer>
  );
};
