export const HeroIntro = () => {
  return (
    <div className="relative z-10 box-border caret-transparent max-w-[1120px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <h1
        id="hero-title"
        className="hero-heading box-border caret-transparent max-w-[1120px] outline-[3px] mb-8"
      >
        Websites that help{" "}
        <span className="hero-heading-accent">good businesses</span>{" "}
        <span className="hero-heading-underline">get chosen.</span>
      </h1>
      <div className="box-border caret-transparent max-w-[650px] outline-[3px] w-full mx-auto">
        <p className="text-xl box-border caret-transparent leading-[27px] opacity-[0.64] outline-[3px] mb-4 md:text-2xl md:leading-[32.4px]">
          Scribble plans, designs, and builds clear websites for teams ready to
          grow.
        </p>
      </div>
    </div>
  );
};
