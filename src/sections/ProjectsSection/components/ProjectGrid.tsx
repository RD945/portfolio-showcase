import { ProjectCard } from "./ProjectCard";

export type ProjectGridProps = {
  gridVariant: string;
  projects: {
    projectUrl: string;
    projectLinkVariant: string;
    imageWrapperVariant: string;
    imageSources: {
      small: string;
      medium: string;
      large: string;
    };
    imageWidth: number;
    imageHeight: number;
    title: string;
    description: string;
    tagText: string;
  }[];
};

export const ProjectGrid = (props: ProjectGridProps) => {
  return (
    <div
      className={`items-start box-border caret-transparent gap-x-8 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] outline-[3px] gap-y-8 md:gap-x-12 reveal-group ${props.gridVariant}`}
    >
      {props.projects.map((project) => (
        <ProjectCard
          key={project.title}
          projectUrl={project.projectUrl}
          projectLinkVariant={project.projectLinkVariant}
          imageWrapperVariant={project.imageWrapperVariant}
          imageSources={project.imageSources}
          imageWidth={project.imageWidth}
          imageHeight={project.imageHeight}
          title={project.title}
          description={project.description}
          tagText={project.tagText}
        />
      ))}
    </div>
  );
};
