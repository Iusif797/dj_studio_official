type Section = {
  num: string;
  key: string;
  label?: string;
};

type MobileSceneNavProps = {
  sections: Section[];
  activeKey: string;
  onSelect: (index: number) => void;
};

export default function MobileSceneNav({ sections, activeKey, onSelect }: MobileSceneNavProps) {
  const activeIndex = sections.findIndex(s => s.key === activeKey);
  void activeIndex;

  return (
    <nav
      aria-label="Scene navigation"
      className="md:hidden pointer-events-auto w-full"
    >
      <div className="flex items-center justify-center gap-1 py-1.5">
        {sections.map((section, index) => {
          const isActive = activeKey === section.key;
          return (
            <button
              key={section.num}
              type="button"
              onClick={() => onSelect(index)}
              className="relative flex items-center justify-center w-7 h-9 outline-none focus:outline-none cursor-pointer bg-transparent border-none p-0"
              aria-label={`Section ${section.num}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-5 h-1.5 bg-[#ff7849]'
                    : 'w-1.5 h-1.5 bg-white/25'
                }`}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
