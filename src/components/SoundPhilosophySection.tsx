type Lang = 'en' | 'cs' | 'ru';

type SoundPhilosophySectionProps = {
  lang: Lang;
};

export default function SoundPhilosophySection({ lang }: SoundPhilosophySectionProps) {

  const content = {
    en: {
      eyebrow: '03 // SOUND PHILOSOPHY & CURATION',
      title: 'Atmosphere, Vibe & Dynamic Energy',
      desc: 'Music is not just played — it is sculpted in real-time. Seamless transitions from deep organic textures to high-impact peak-time anthems that keep the floor locked.',
      styles: [
        {
          name: 'Afro-House & Organic',
          bpm: '120 BPM',
          desc: 'Warm percussive rhythms, vocal warmth, and deep hypnotic pulses. Ideal for rooftop sunsets and cocktail hours.',
        },
        {
          name: 'Melodic & Deep House',
          bpm: '124 BPM',
          desc: 'Driving basslines with emotive synth layers. The signature sound for Prague’s modern dance clubs and brand events.',
        },
        {
          name: 'Peak-Time & Commercial House',
          bpm: '128 BPM',
          desc: 'Uncompromising energy, crisp drops, and recognizable hooks that explode the main room dancefloor.',
        },
      ],
    },
    cs: {
      eyebrow: '03 // HUDEBNÍ FILOZOFIE',
      title: 'Atmosféra, vibe a dynamická energie',
      desc: 'Hudba se nehraje náhodně — je formována přímo na parketu. Plynulé přechody od hlubokých organických groovů po energické peak-time hymny.',
      styles: [
        {
          name: 'Afro-House & Organic',
          bpm: '120 BPM',
          desc: 'Hřejivé perkuse, emotivní vokály a hypnotické rytmy. Ideální pro rooftop západy slunce a welcome drinky.',
        },
        {
          name: 'Melodic & Deep House',
          bpm: '124 BPM',
          desc: 'Nosné basové linky a propracované syntezátory. Klíčový styl pro moderní pražské kluby a prestižní akce.',
        },
        {
          name: 'Peak-Time & Commercial House',
          bpm: '128 BPM',
          desc: 'Maximální energie, přesné dropy a chytlavé melodie, které udrží plný parket až do rána.',
        },
      ],
    },
    ru: {
      eyebrow: '03 // МУЗЫКАЛЬНАЯ ФИЛОСОФИЯ',
      title: 'Атмосфера, вайб и динамический контроль',
      desc: 'Музыка создается прямо на танцполе. Безупречные переходы от теплого афро-хауса к плотным прогрессивным басовым линиям и мощным клубным кульминациям.',
      styles: [
        {
          name: 'Afro-House & Organic',
          bpm: '120 BPM',
          desc: 'Живая полиритмия перкуссии, глубокий гипнотический бас и теплое звучание. Идеально для велкам-зон и закатных сессий.',
        },
        {
          name: 'Melodic & Deep House',
          bpm: '124 BPM',
          desc: 'Плотный качающий грув и атмосферные синты. Фирменный почерк на знаковых клубных вечеринках Праги.',
        },
        {
          name: 'Peak-Time & Commercial House',
          bpm: '128 BPM',
          desc: 'Взрывная энергетика прайм-тайма, филигранные дропы и драйв, который держит зал до самого рассвета.',
        },
      ],
    },
  }[lang];

  return (
    <section id="sound-philosophy" className="w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <span className="font-mono text-[9px] tracking-[0.3em] text-[#ff7849] uppercase font-semibold">
            {content.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            {content.title}
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-white/55 font-light leading-relaxed">
            {content.desc}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {content.styles.map((style, idx) => (
          <div
            key={style.name}
            className="p-6 sm:p-8 rounded-sm border border-white/10 bg-[#0a0a0d] hover:border-[#ff7849]/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] text-[#ff7849] tracking-wider uppercase font-semibold">
                  0{idx + 1} // STYLE
                </span>
                <span className="px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 font-mono text-[8px] text-white/60">
                  {style.bpm}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white font-light mb-3">
                {style.name}
              </h3>
              <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">
                {style.desc}
              </p>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}
