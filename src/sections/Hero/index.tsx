import { HeroIntro } from "./components/HeroIntro";

export const Hero = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative items-center bg-stone-100 bg-[radial-gradient(circle_at_50%_100%,rgb(221,240,255)_19%,rgb(245,242,237)_66%)] border-b-stone-300 border-l-slate-900 border-r-slate-900 border-t-slate-900 box-border caret-transparent flex min-h-[720px] h-auto justify-center mt-[-60px] outline-[3px] text-center z-0 overflow-hidden pt-28 pb-24 border-b md:min-h-[800px] md:mt-[-80px] md:pt-[100px] md:pb-0"
    >
      <div className="static items-center box-border caret-transparent flex flex-col justify-start max-w-[1440px] min-h-[50px] min-w-[auto] outline-[3px] w-full mx-auto px-5 md:relative md:px-10">
        <HeroIntro />
      </div>
    </section>
  );
};
