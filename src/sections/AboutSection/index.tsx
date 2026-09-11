import { SectionHeader } from "../../components/SectionHeader";
import { AboutContent } from "./components/AboutContent";

export const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative bg-stone-200 box-border caret-transparent outline-[3px] z-0 py-[60px] md:py-20"
    >
      <div className="relative box-border caret-transparent flex-col justify-center max-w-[1440px] min-h-[50px] outline-[3px] w-full mx-auto px-5 md:px-10">
        <div className="relative items-stretch box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[2fr] grid-rows-[auto] justify-center outline-[3px] gap-y-8 ml-0 mr-auto md:gap-x-20 md:grid-cols-[1fr_1fr] md:ml-auto">
          <SectionHeader
            rootClassName="max-w-[500px] min-h-[auto] min-w-[auto] w-full"
            eyebrow="About Scribble"
            eyebrowClassName="text-stone-600 box-border caret-transparent inline-block leading-[17.6px] outline-[3px] uppercase mb-4"
            title="A focused web partner for ambitious teams."
            titleId="about-title"
            dividerClassName="box-border caret-transparent hidden h-8 outline-[3px] w-full rounded-md md:block md:h-12"
          />
          <AboutContent />
        </div>
      </div>
    </section>
  );
};
