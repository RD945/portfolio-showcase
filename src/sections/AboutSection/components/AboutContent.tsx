export const AboutContent = () => {
  return (
    <div
      className="box-border caret-transparent max-w-[650px] min-h-[auto] min-w-[auto] outline-[3px] w-full"
      data-reveal
    >
      <div className="box-border caret-transparent h-8 outline-[3px] w-full rounded-md md:h-12" />
      <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] mb-4 md:text-base md:leading-6">
        Scribble is a small, senior web studio for teams who want a website
        that does more than look good. We connect strategy, copy, design, and
        development from the first conversation to the final launch.
        <br />
        <br />
        You get a clear point of view, a practical process, and a website your
        team can actually use after we hand it over.
        <br />
        <br />
        No bloated process. No mystery handoffs. Just a sharper digital home
        for the next stage of your business.
      </p>
      <div className="box-border caret-transparent h-4 outline-[3px] w-full" />
      <a
        href="#contact"
        className="relative text-white bg-slate-900 shadow-[rgba(0,0,0,0.08)_0px_2px_5px_0px] box-border caret-transparent inline-block shrink-0 leading-6 outline-[3px] text-center w-full border border-slate-900 mb-2 px-6 py-2 rounded-xl border-solid md:static md:w-auto hover:text-stone-100 hover:bg-neutral-700 hover:outline-0 hover:border-neutral-700 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-sky-600 focus-visible:outline-offset-2"
      >
        Talk about your website
      </a>
    </div>
  );
};
