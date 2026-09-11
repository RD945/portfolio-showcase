import { SectionHeader } from "../../components/SectionHeader";
import { ProjectGrid } from "./components/ProjectGrid";

export const ProjectsSection = () => {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative box-border caret-transparent outline-[3px] z-0 py-[60px] md:py-20"
    >
      <div className="relative box-border caret-transparent flex-col justify-center max-w-[1440px] min-h-[50px] outline-[3px] w-full mx-auto px-5 md:px-10">
        <SectionHeader
          rootClassName="max-w-[650px] w-full"
          eyebrow="Selected Work"
          eyebrowClassName="text-stone-600 box-border caret-transparent inline-block leading-[17.6px] outline-[3px] uppercase mb-4"
          title="Four distinct websites, built around the work."
          titleId="work-title"
          dividerClassName="box-border caret-transparent h-6 outline-[3px] w-6 rounded-md md:h-8 md:w-full"
        />
        <ProjectGrid
          gridVariant="mb-8 md:grid-cols-[1.2fr_1fr] md:gap-y-12 md:mb-16"
          projects={[
            {
              projectUrl: "https://flow-rd945s-projects.vercel.app",
              projectLinkVariant:
                "bg-[linear-gradient(rgba(236,232,227,0)_19%,rgb(255,186,120))]",
              imageWrapperVariant: "-mr-10 md:-mr-20",
              imageUrl: "/assets/site/flow.png",
              title: "Flow",
              description:
                "A CRM and customer-relationship workspace that keeps customer context, conversations, follow-ups, tasks, and next steps together in one place.",
              tagText: "CRM Platform",
            },
            {
              projectUrl: "https://forma-rd945s-projects.vercel.app",
              projectLinkVariant:
                "bg-[linear-gradient(rgba(236,232,227,0)_19%,rgb(238,211,192))]",
              imageWrapperVariant: "-ml-10 md:-ml-20",
              imageUrl: "/assets/site/forma.png",
              title: "FORMA",
              description:
                "An architectural studio concept focused on thoughtful homes, natural materials, quieter living, and spaces shaped around everyday life.",
              tagText: "Architecture Studio",
            },
          ]}
        />
        <ProjectGrid
          gridVariant="justify-items-stretch mb-16 md:grid-cols-[1fr_1.2fr] md:gap-y-0"
          projects={[
            {
              projectUrl: "https://auralis-rd945s-projects.vercel.app",
              projectLinkVariant:
                "bg-[linear-gradient(rgba(236,232,227,0)_19%,rgb(0,47,37))]",
              imageWrapperVariant: "-mr-10 md:-mr-20",
              imageUrl: "/assets/site/auralis.png",
              title: "Auralis",
              description:
                "A premium product launch and ecommerce-style website for wireless headphones, from high-resolution audio to product editions and pricing.",
              tagText: "Product Launch",
            },
            {
              projectUrl: "https://sitecraft-rd945s-projects.vercel.app",
              projectLinkVariant:
                "bg-[linear-gradient(rgba(236,232,227,0)_19%,rgb(110,169,220))]",
              imageWrapperVariant: "-ml-10 md:-ml-20",
              imageUrl: "/assets/site/sitecraft.png",
              title: "Sitecraft",
              description:
                "A storefront for browsing and selecting ready-made website packages for businesses, portfolios, and ecommerce stores.",
              tagText: "Website Marketplace",
            },
          ]}
        />
        <div className="box-border caret-transparent max-w-[650px] outline-[3px] text-center w-full mx-auto">
          <a
            href="#contact"
            className="relative text-white bg-sky-700 bg-[linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0))] shadow-[rgba(0,0,0,0.08)_0px_2px_5px_0px] box-border caret-transparent inline-block shrink-0 leading-6 outline-[3px] w-full border border-sky-700 mb-2 px-6 py-2 rounded-xl border-solid md:static md:w-auto transition-transform duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:outline-0 focus-visible:outline-2 focus-visible:outline-sky-600 focus-visible:outline-offset-2"
          >
            Start your project
          </a>
        </div>
      </div>
    </section>
  );
};
