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

  return (
    <nav
      aria-label="Scene navigation"
      className="md:hidden pointer-events-auto w-full"
    >
      <div className="flex items-center justify-center gap-2.5 py-2">
        {sections.map((section, index) => {
          const isActive = activeKey === section.key;
          return (
            <button
              key={section.num}
              type="button"
              onClick={() => onSelect(index)}
              className="p-1 outline-none focus:outline-none cursor-pointer bg-transparent border-none"
              aria-label={`Section ${section.num}`}
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
