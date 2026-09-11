export const ContactCta = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative bg-stone-200 box-border caret-transparent outline-[3px] z-0 py-[60px] md:py-20"
    >
      <div className="relative box-border caret-transparent flex-col justify-center max-w-[1440px] min-h-[50px] outline-[3px] w-full mx-auto px-5 md:px-10">
        <div
          className="relative items-start bg-stone-100 box-border caret-transparent flex flex-col justify-center max-w-[900px] outline-[3px] border border-stone-300 pt-10 pb-6 px-[30px] rounded-xl border-solid mx-auto md:pl-10 md:pr-10 md:pb-8"
          data-reveal
        >
          <div className="text-stone-600 box-border caret-transparent leading-[17.6px] min-h-[auto] min-w-[auto] outline-[3px] uppercase mb-4">
            Start a project
          </div>
          <h2
            id="contact-title"
            className="text-[26px] box-border caret-transparent leading-[32.5px] min-h-[auto] min-w-[auto] outline-[3px] mb-4 md:text-[40px] md:leading-[50px]"
          >
            Have a website in mind?
          </h2>
          <p className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] outline-[3px] mb-4 md:text-xl md:leading-[30px]">
            Tell us what you are building, and we will come back with a clear
            next step.
          </p>
          <div className="box-border caret-transparent h-4 min-h-[auto] min-w-[auto] outline-[3px] w-full" />
          <a
            href="mailto:hello@scribble.studio"
            className="relative text-white bg-sky-700 bg-[linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0))] shadow-[rgba(0,0,0,0.08)_0px_2px_5px_0px] box-border caret-transparent block shrink-0 leading-6 min-h-[auto] min-w-[auto] outline-[3px] text-center w-full border border-sky-700 mb-2 px-6 py-2 rounded-xl border-solid md:static md:w-auto transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:outline-0 focus-visible:outline-2 focus-visible:outline-sky-600 focus-visible:outline-offset-2"
          >
            Email Scribble
          </a>
        </div>
      </div>
    </section>
  );
};
