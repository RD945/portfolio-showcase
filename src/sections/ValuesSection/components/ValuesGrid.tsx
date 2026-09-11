import { ValueCard } from "./ValueCard";

export const ValuesGrid = () => {
  return (
    <div className="values-grid relative items-stretch box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[2fr] grid-rows-[auto] justify-center min-h-[auto] min-w-[auto] outline-[3px] gap-y-8 ml-0 mr-auto md:gap-x-20 md:grid-cols-[1fr_1fr] md:ml-auto reveal-group">
      <ValueCard
        number="01"
        title="Clear direction"
        description="You always know what we are solving, why it matters, and what happens next."
      />
      <ValueCard
        number="02"
        title="Useful design"
        description="Every visual choice earns its place by helping people understand, trust, or act."
      />
      <ValueCard
        number="03"
        title="Built to perform"
        description="Your website should be quick, accessible, measurable, and ready for real-world use."
      />
      <ValueCard
        number="04"
        title="Room to grow"
        description="We build a flexible foundation that can keep up as your business changes."
      />
    </div>
  );
};
