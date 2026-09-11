import { useState } from "react";

export type ServiceItemProps = {
  id: string;
  title: string;
  description: string;
};

export const ServiceItem = (props: ServiceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const headingId = `${props.id}-heading`;
  const contentId = `${props.id}-description`;

  return (
    <div
      className="service-item group bg-stone-200 box-border caret-transparent flex flex-col justify-between outline-[3px] w-full border border-stone-300 overflow-hidden mb-2 pt-0 px-6 rounded-xl border-solid"
      data-reveal
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="service-trigger items-start box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] outline-[3px] w-full py-5 text-left focus-visible:outline-2 focus-visible:outline-sky-600 focus-visible:outline-offset-[-2px]"
        onClick={() => setIsOpen((open) => !open)}
      >
        <h3
          id={headingId}
          className="service-title text-xl box-border caret-transparent leading-[30px] min-h-[auto] min-w-[auto] outline-[3px] mb-0"
        >
          {props.title}
        </h3>
        <span
          aria-hidden="true"
          className={`service-plus text-stone-700 text-2xl font-light leading-7 ml-4 transition-transform duration-300 md:ml-0 ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      <div
        id={contentId}
        role="region"
        aria-labelledby={headingId}
        aria-hidden={!isOpen}
        className={`service-content ${isOpen ? "service-content-open" : ""}`}
      >
        <div className="min-h-0">
          <p className="text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] pb-4 md:text-base md:leading-6">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
