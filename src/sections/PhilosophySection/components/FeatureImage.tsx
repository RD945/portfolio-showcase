export const FeatureImage = () => {
  return (
    <div
      className="box-border caret-transparent h-[225px] min-h-[auto] min-w-[auto] -order-last outline-[3px] overflow-hidden rounded-lg md:h-[550px] md:order-none"
      data-reveal
    >
      <img
        src="/assets/site/philosophy.webp"
        alt="A creative team collaborating around a table"
        width="900"
        height="1100"
        loading="lazy"
        decoding="async"
        className="box-border caret-transparent inline-block h-full max-w-full object-cover outline-[3px] w-full"
      />
    </div>
  );
};
