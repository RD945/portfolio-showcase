import { FooterIntro } from "./FooterIntro";
import { FooterColumn } from "./FooterColumn";

export const FooterContent = () => {
  return (
    <div className="box-border caret-transparent gap-x-12 grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] outline-[3px] gap-y-8 md:gap-x-16 md:grid-cols-[4fr_auto_auto_auto]">
      <FooterIntro />
      <FooterColumn
        className="col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1]"
        title="Explore"
        links={[
          { href: "#top", label: "Home" },
          { href: "#work", label: "Work" },
          { href: "#about", label: "About" },
          { href: "#services", label: "Services" },
        ]}
      />
      <FooterColumn
        title="Services"
        links={[
          { href: "#services", label: "What we do" },
          { href: "#values", label: "What to expect" },
          { href: "#contact", label: "Start a project" },
        ]}
      />
      <FooterColumn
        title="Contact"
        links={[
          { href: "mailto:hello@scribble.studio", label: "hello@scribble.studio" },
          { href: "#contact", label: "Start a conversation" },
        ]}
      />
    </div>
  );
};
