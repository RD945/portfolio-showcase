import { ServicesIntro } from "./components/ServicesIntro";
import { ServicesList } from "./components/ServicesList";

export const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative box-border caret-transparent outline-[3px] z-0 py-[60px] md:py-20"
    >
      <div className="relative box-border caret-transparent flex-col justify-center max-w-[1440px] min-h-[50px] outline-[3px] w-full mx-auto px-5 md:px-10">
        <div className="services-kicker text-stone-600 box-border caret-transparent inline-block leading-[17.6px] outline-[3px] uppercase mb-4" data-reveal>
          How Scribble helps
        </div>
        <div className="relative items-stretch box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[2fr] grid-rows-[auto] justify-center outline-[3px] gap-y-8 ml-0 mr-auto md:gap-x-20 md:grid-cols-[1fr_1fr] md:ml-auto">
          <ServicesIntro />
          <ServicesList />
        </div>
      </div>
    </section>
  );
};
