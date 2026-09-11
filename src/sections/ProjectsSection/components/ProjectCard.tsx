export type ProjectCardProps = {
  projectUrl: string;
  projectLinkVariant: string;
  imageWrapperVariant: string;
  imageUrl: string;
  title: string;
  description: string;
  tagText: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <article
      className="project-card box-border caret-transparent col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] min-h-[auto] min-w-[auto] outline-[3px] mb-5 md:mb-0"
      data-reveal
    >
      <a
        href={props.projectUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`View the ${props.title} website`}
        className={`project-card-link text-stone-600 bg-stone-200 box-border caret-transparent block max-w-full outline-[3px] w-full border border-stone-300 overflow-hidden mb-4 p-8 rounded-2xl border-solid md:p-16 hover:bg-stone-300 hover:outline-0 focus-visible:outline-2 focus-visible:outline-sky-600 focus-visible:outline-offset-4 ${props.projectLinkVariant}`}
      >
        <div
          className={`project-image-frame bg-stone-300 shadow-[rgb(255,255,255)_0px_0px_0px_10px,rgba(0,0,0,0.15)_0px_6px_24px_8px] box-border caret-transparent mb-[-60px] min-h-[100px] min-w-[100px] outline-[3px] border overflow-hidden rounded-lg border-solid border-black/10 md:-mb-20 ${props.imageWrapperVariant}`}
        >
          <img
            src={props.imageUrl}
            alt={props.title}
            width="1920"
            height="1080"
            loading="lazy"
            decoding="async"
            className="project-image box-border caret-transparent max-w-full outline-[3px] w-full"
          />
        </div>
      </a>
      <div className="items-start box-border caret-transparent gap-x-0 flex flex-col justify-between outline-[3px] gap-y-0 md:gap-x-16 md:flex-row md:gap-y-16">
        <div className="box-border caret-transparent max-w-[650px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <h3 className="text-xl box-border caret-transparent leading-[30px] outline-[3px] mb-2">
            {props.title}
          </h3>
          <p className="text-stone-500 text-[15px] box-border caret-transparent leading-[22.5px] outline-[3px] mb-4 md:text-base md:leading-6">
            {props.description}
          </p>
        </div>
        <span className="text-stone-600 text-xs items-center bg-stone-200 box-border caret-transparent gap-x-1.5 flex shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] uppercase z-[4] border border-stone-300 px-3.5 py-1 rounded-[10px] border-solid md:text-[13px] md:py-[5px]">
          {props.tagText}
        </span>
      </div>
    </article>
  );
};
