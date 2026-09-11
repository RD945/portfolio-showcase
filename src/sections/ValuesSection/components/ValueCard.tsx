export type ValueCardProps = {
  number: string;
  title: string;
  description: string;
};

export const ValueCard = (props: ValueCardProps) => {
  return (
    <article
      className="value-card group box-border caret-transparent max-w-[720px] min-h-[auto] min-w-[auto] outline-[3px] w-full"
      data-reveal
    >
      <div className="value-number text-stone-600 box-border caret-transparent inline-block leading-[17.6px] outline-[3px] uppercase mb-4">
        {props.number}
      </div>
      <h3 className="value-title text-lg box-border caret-transparent leading-[25.2px] outline-[3px] mb-2 md:text-[28px] md:leading-[39.2px]">
        {props.title}
      </h3>
      <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] mb-4 md:text-base md:leading-6">
        {props.description}
      </p>
    </article>
  );
};
