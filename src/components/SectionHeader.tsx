export type SectionHeaderProps = {
  rootClassName: string;
  eyebrow: string;
  eyebrowClassName: string;
  title: string;
  titleId?: string;
  dividerClassName: string;
  description?: string;
  descriptionClassName?: string;
  secondaryDividerClassName?: string;
  linkHref?: string;
  linkText?: string;
  linkClassName?: string;
  isTwoColumn?: boolean;
};

export const SectionHeader = (props: SectionHeaderProps) => {
  if (props.isTwoColumn) {
    return (
      <div
        className={`box-border caret-transparent outline-[3px] ${props.rootClassName}`}
        data-reveal
      >
        <div className="box-border caret-transparent outline-[3px] max-w-[500px] min-h-[auto] min-w-[auto] w-full">
          <div className={props.eyebrowClassName}>{props.eyebrow}</div>
          <h2
            id={props.titleId}
            className="text-3xl box-border caret-transparent tracking-[-1px] leading-[37.5px] outline-[3px] mb-4 md:text-5xl md:leading-[60px]"
          >
            {props.title}
          </h2>
          <div className={props.dividerClassName}></div>
        </div>
        <div className="box-border caret-transparent outline-[3px] max-w-[500px] min-h-[auto] min-w-[auto] w-full">
          {props.description ? (
            <p className={props.descriptionClassName}>{props.description}</p>
          ) : null}
          {props.secondaryDividerClassName ? (
            <div className={props.secondaryDividerClassName}></div>
          ) : null}
          {props.linkHref && props.linkText && props.linkClassName ? (
            <a
              href={props.linkHref}
              className={`${props.linkClassName} focus-visible:outline-2 focus-visible:outline-sky-600 focus-visible:outline-offset-2`}
            >
              {props.linkText}
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`box-border caret-transparent outline-[3px] ${props.rootClassName}`}
      data-reveal
    >
      <div className={props.eyebrowClassName}>{props.eyebrow}</div>
      <h2
        id={props.titleId}
        className="text-3xl box-border caret-transparent tracking-[-1px] leading-[37.5px] outline-[3px] mb-4 md:text-5xl md:leading-[60px]"
      >
        {props.title}
      </h2>
      <div className={props.dividerClassName}></div>
    </div>
  );
};
