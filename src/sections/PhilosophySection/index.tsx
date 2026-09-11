import { SectionHeader } from "../../components/SectionHeader";
import { FeatureImage } from "./components/FeatureImage";

export const PhilosophySection = () => {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-title"
      className="relative bg-stone-200 box-border caret-transparent outline-[3px] z-0 py-[60px] md:py-20"
    >
      <div className="relative box-border caret-transparent flex-col justify-center max-w-[1440px] min-h-[50px] outline-[3px] w-full mx-auto px-5 md:px-10">
        <div className="relative items-stretch box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[2fr] grid-rows-[auto] justify-center outline-[3px] gap-y-8 ml-0 mr-auto md:gap-x-20 md:grid-cols-[1fr_1fr] md:ml-auto">
          <SectionHeader
            rootClassName="flex flex-col col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] justify-between max-w-[650px] min-h-[auto] min-w-[auto]"
            eyebrow="Why Scribble"
            eyebrowClassName="text-stone-500 box-border caret-transparent inline-block leading-[17.6px] outline-[3px] uppercase mb-4"
            title="A better website starts with better questions."
            titleId="philosophy-title"
            dividerClassName="box-border caret-transparent h-8 outline-[3px] w-full rounded-md md:h-12"
            description="We learn what you do, who needs it, and what gets in the way. Then we turn that insight into a website that is easy to understand, easy to use, and ready to earn its place in your business."
            descriptionClassName="text-base box-border caret-transparent leading-6 outline-[3px] mb-4 md:text-lg md:leading-[27px]"
            secondaryDividerClassName="box-border caret-transparent h-4 outline-[3px] w-full"
            linkHref="#services"
            linkText="See our process"
            linkClassName="relative text-white bg-slate-800 shadow-[rgba(0,0,0,0.08)_0px_2px_5px_0px] box-border caret-transparent inline-block shrink-0 leading-6 outline-[3px] text-center w-full border border-neutral-700 mb-2 px-6 py-2 rounded-xl border-solid md:static md:w-auto hover:text-stone-100 hover:bg-neutral-700 hover:outline-0 transition-transform duration-200 hover:-translate-y-0.5"
            isTwoColumn
          />
          <FeatureImage />
        </div>
      </div>
    </section>
  );
};
