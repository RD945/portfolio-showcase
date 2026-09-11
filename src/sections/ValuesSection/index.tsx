import { ValuesIntro } from "./components/ValuesIntro";
import { ValuesGrid } from "./components/ValuesGrid";

export const ValuesSection = () => {
  return (
    <section
      id="values"
      aria-labelledby="values-title"
      className="relative box-border caret-transparent outline-[3px] z-0 py-20 md:py-[120px]"
    >
      <div className="relative box-border caret-transparent flex-col justify-center max-w-[1440px] min-h-[50px] outline-[3px] w-full mx-auto px-5 md:px-10">
        <div className="relative items-stretch box-border caret-transparent gap-x-12 grid flex-col auto-cols-[1fr] grid-cols-[2fr] grid-rows-[auto] justify-center outline-[3px] gap-y-6 ml-0 mr-auto md:gap-x-32 md:grid-cols-[1fr_2fr] md:gap-y-32 md:ml-auto">
          <ValuesIntro />
          <ValuesGrid />
        </div>
      </div>
    </section>
  );
};
