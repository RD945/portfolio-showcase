export type FooterColumnProps = {
  className?: string;
  title: string;
  links: {
    href: string;
    label: string;
  }[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] outline-[3px] ${props.className ?? ""}`}
    >
      <h3 className="text-stone-500 text-sm font-medium box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] uppercase mb-6">
        {props.title}
      </h3>
      {props.links.map((link) => (
        <a
          key={`${link.href}-${link.label}`}
          href={link.href}
          className="text-sm border-l-slate-900 border-r-slate-900 border-t-slate-900 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] mb-1 border-b-transparent border-b hover:border-b-stone-600 hover:outline-0 focus-visible:outline-2 focus-visible:outline-sky-600 focus-visible:outline-offset-2"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
