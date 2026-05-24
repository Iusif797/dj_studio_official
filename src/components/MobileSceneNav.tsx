type Section = {
  num: string;
  key: string;
};

type MobileSceneNavProps = {
  sections: Section[];
  activeKey: string;
  onSelect: (index: number) => void;
};

export default function MobileSceneNav({ sections, activeKey, onSelect }: MobileSceneNavProps) {
  return (
    <nav
      aria-label="Scene navigation"
      className="fixed bottom-[10.25rem] left-3 right-3 z-[45] md:hidden pointer-events-auto"
    >
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar bg-black/80 border border-white/10 backdrop-blur-md px-2 py-2">
        {sections.map((section, index) => {
          const isActive = activeKey === section.key;
          return (
            <button
              key={section.num}
              type="button"
              onClick={() => onSelect(index)}
              className={`shrink-0 min-w-[2.25rem] font-mono text-[9px] tracking-wider px-2 py-1.5 border transition-colors ${
                isActive
                  ? 'border-[#ff7849] text-[#ff7849] bg-[#ff7849]/10'
                  : 'border-white/10 text-white/45 hover:text-white/75'
              }`}
            >
              {section.num}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
