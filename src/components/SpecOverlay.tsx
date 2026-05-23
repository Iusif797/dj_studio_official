import { motion } from 'motion/react';
import { X, CornerDownRight, Compass, Layers, Radio, Award } from 'lucide-react';
import { playGlassTap } from './AudioPlayer';
import { translations } from '../translations';

interface SpecOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'en' | 'cs' | 'ru';
}

export default function SpecOverlay({ isOpen, onClose, lang = 'en' }: SpecOverlayProps) {
  if (!isOpen) return null;

  const t = translations[lang] || translations.en;

  const SPEC_DATA = [
    {
      category: t.specCat1,
      items: [
        { name: t.specCat1_1, detail: t.specCat1_1d },
        { name: t.specCat1_2, detail: t.specCat1_2d },
        { name: t.specCat1_3, detail: t.specCat1_3d },
        { name: t.specCat1_4, detail: t.specCat1_4d },
        { name: t.specCat1_5, detail: t.specCat1_5d },
      ]
    },
    {
      category: t.specCat2,
      items: [
        { name: t.specCat2_1, detail: t.specCat2_1d },
        { name: t.specCat2_2, detail: t.specCat2_2d },
        { name: t.specCat2_3, detail: t.specCat2_3d },
        { name: t.specCat2_4, detail: t.specCat2_4d },
      ]
    },
    {
      category: t.specCat3,
      items: [
        { name: t.specCat3_1, detail: t.specCat3_1d },
        { name: t.specCat3_2, detail: t.specCat3_2d },
        { name: t.specCat3_3, detail: t.specCat3_3d },
        { name: t.specCat3_4, detail: t.specCat3_4d },
      ]
    }
  ];

  return (
    <div 
      id="specifications-overlay" 
      className="fixed inset-0 z-40 bg-black/85 backdrop-blur-xl flex justify-end transition-opacity duration-500 overflow-y-auto"
    >
      {/* Background close click */}
      <div className="absolute inset-0" onClick={() => { playGlassTap(); onClose(); }} />

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 24, stiffness: 110 }}
        className="relative w-full max-w-2xl bg-[#0a0a0a] border-l border-white/10 h-full min-h-screen p-8 md:p-14 flex flex-col justify-between z-10"
      >
        <div>
          {/* Header */}
          <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-10">
            <div>
              <p className="font-mono text-[8px] tracking-[0.2em] text-[#ff7849] uppercase">{t.specTag}</p>
              <h2 className="font-serif text-3xl font-light text-white tracking-wide mt-1">{t.specTitle}</h2>
            </div>
            <button 
              onClick={() => { playGlassTap(); onClose(); }}
              className="p-2 border border-white/10 hover:border-white/20 text-white hover:text-white/75 transition-all outline-none focus:outline-none rounded-none cursor-pointer"
            >
              <X size={14} />
            </button>
          </div>

          {/* Interactive Specifications Grid */}
          <div className="space-y-12">
            {SPEC_DATA.map((group, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-mono text-[9px] tracking-[0.25em] text-white/50 uppercase flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#ff7849] rounded-full" />
                  {group.category}
                </h3>
                <div className="grid grid-cols-1 gap-y-3.5 pt-1">
                  {group.items.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="group flex flex-col md:flex-row md:justify-between border-b border-white/5 pb-2.5"
                    >
                      <span className="font-sans text-xs text-white/40 group-hover:text-white/70 transition-colors flex items-center gap-1">
                        <CornerDownRight size={10} className="opacity-40" />
                        {item.name}
                      </span>
                      <span className="font-mono text-xs text-white tracking-wide text-left md:text-right mt-1 md:mt-0 font-light">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info banner */}
        <div className="border-t border-white/10 pt-10 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center md:text-left">
            <Radio className="w-4 h-4 text-[#ff7849] mb-1.5 mx-auto md:mx-0" />
            <p className="font-mono text-[8px] text-white/40 uppercase">{t.specType}</p>
            <p className="font-serif text-xs text-white mt-0.5 font-light">{t.specTypeVal}</p>
          </div>
          <div className="text-center md:text-left">
            <Layers className="w-4 h-4 text-[#ff7849] mb-1.5 mx-auto md:mx-0" />
            <p className="font-mono text-[8px] text-white/40 uppercase">{t.specPl}</p>
            <p className="font-serif text-xs text-white mt-0.5 font-light">{t.specPlVal}</p>
          </div>
          <div className="text-center md:text-left">
            <Compass className="w-4 h-4 text-[#ff7849] mb-1.5 mx-auto md:mx-0" />
            <p className="font-mono text-[8px] text-white/40 uppercase">{t.specMon}</p>
            <p className="font-serif text-[11px] text-white mt-0.5 font-light font-sans leading-tight">{t.specMonVal}</p>
          </div>
          <div className="text-center md:text-left">
            <Award className="w-4 h-4 text-[#ff7849] mb-1.5 mx-auto md:mx-0" />
            <p className="font-mono text-[8px] text-white/40 uppercase">{t.specCab}</p>
            <p className="font-serif text-xs text-white mt-0.5 font-light font-mono leading-none">{t.specCabVal}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
