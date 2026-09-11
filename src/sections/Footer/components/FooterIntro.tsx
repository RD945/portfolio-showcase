export const FooterIntro = () => {
  return (
    <div
      className="box-border caret-transparent col-end-[span_2] col-start-[span_2] row-end-[span_1] row-start-[span_1] max-w-[400px] min-h-[auto] min-w-[auto] outline-[3px] w-full md:col-end-auto md:col-start-auto md:row-end-auto md:row-start-auto"
      data-reveal
    >
      <p className="group text-2xl font-medium box-border caret-transparent leading-[34px] tracking-[-0.02em] outline-[3px] mb-4 transition-all duration-500 hover:tracking-[-0.01em] md:text-4xl md:leading-[48px]">
        Websites for teams that are ready{" "}
        <span className="font-semibold text-sky-700 underline decoration-2 decoration-sky-400/80 underline-offset-4 transition-all duration-300 group-hover:text-sky-600 group-hover:decoration-sky-500 group-hover:[text-shadow:0_8px_20px_rgba(14,165,233,0.2)]">
          to grow
        </span>{" "}
        with clarity.
      </p>
      <p className="text-stone-500 text-sm box-border caret-transparent leading-[21px] outline-[3px] mb-3.5">
        &copy; Scribble. Strategy, design, and development for the web.
      </p>
    </div>
  );
};
