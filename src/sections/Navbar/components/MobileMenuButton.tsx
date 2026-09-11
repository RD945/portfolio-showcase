export type MobileMenuButtonProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const MobileMenuButton = ({
  isOpen,
  onToggle,
}: MobileMenuButtonProps) => {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      onClick={onToggle}
      className="relative text-2xl box-border caret-transparent block float-right h-[55px] min-h-[44px] min-w-[44px] outline-[3px] w-[60px] z-[900] -mr-2.5 right-0 top-0 md:hidden md:min-h-0 md:min-w-0 focus-visible:outline-2 focus-visible:outline-sky-600 focus-visible:outline-offset-2"
    >
      <span
        aria-hidden="true"
        className={`absolute bg-stone-600 box-border h-0.5 w-7 mx-auto top-5 inset-x-0 transition-transform duration-200 md:bg-neutral-900 md:h-px md:w-8 md:top-[18px] ${isOpen ? "translate-y-2 rotate-45" : ""}`}
      />
      <span
        aria-hidden="true"
        className={`absolute bg-stone-600 box-border h-0.5 w-7 mx-auto top-7 inset-x-0 transition-opacity duration-200 md:bg-neutral-900 md:h-px md:w-8 ${isOpen ? "opacity-0" : ""}`}
      />
      <span
        aria-hidden="true"
        className={`absolute bg-stone-600 box-border h-0.5 w-7 mx-auto top-9 inset-x-0 transition-transform duration-200 md:bg-neutral-900 md:h-px md:w-8 md:top-[38px] ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
      />
    </button>
  );
};
