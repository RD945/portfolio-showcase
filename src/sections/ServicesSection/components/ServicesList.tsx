import { ServiceItem } from "./ServiceItem";

export const ServicesList = () => {
  return (
    <div className="services-list box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] text-left">
      <ServiceItem
        id="website-strategy"
        title="Website Strategy"
        description="Get clear on your audience, offer, structure, and the actions your new website needs to support."
      />
      <ServiceItem
        id="ux-ui-design"
        title="UX and UI Design"
        description="Shape a confident visual direction and an intuitive experience that makes the right next step obvious."
      />
      <ServiceItem
        id="content-copy"
        title="Content and Copy"
        description="Find the words, messages, and page structure that help people understand your value quickly."
      />
      <ServiceItem
        id="web-development"
        title="Web Development"
        description="Build a responsive, accessible, fast website that your team can update without calling a developer."
      />
      <ServiceItem
        id="launch-support"
        title="Launch and Support"
        description="Test the details, make the handover simple, and stay close when you need help taking the site live."
      />
    </div>
  );
};
