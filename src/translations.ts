export interface TranslationSet {
  // Navigation & Branding
  brandSub: string;
  brandStatus: string;
  brandBpm: string;
  navTitle: string;
  navIntro: string;
  navAtmosphere: string;
  navSets: string;
  navLive: string;
  navResidencies: string;
  navRider: string;
  navConsole: string;
  bottomCoordinates: string;
  bottomScrollIntro: string;
  btnAudioRider: string;
  btnBookSet: string;
  btnBookSystem: string;

  // Scene 1: Intro
  introSub: string;
  introTitle1: string;
  introTitle2: string;
  introDesc: string;
  metricEvents: string;
  metricEventsVal: string;
  metricStyle: string;
  metricStyleVal: string;
  metricLoc: string;
  metricLocVal: string;
  btnExploreAtmosphere: string;

  // Hotspots / Scenes Data
  hotspotIsolatorsName: string;
  hotspotIsolatorsTitle: string;
  hotspotIsolatorsDesc: string;
  hotspotIsolatorsMetric1: string;
  hotspotIsolatorsMetric1Val: string;
  hotspotIsolatorsMetric2: string;
  hotspotIsolatorsMetric2Val: string;
  btnNextToSets: string;

  hotspotSetsName: string;
  hotspotSetsTitle: string;
  hotspotSetsDesc: string;
  hotspotSetsMetric1: string;
  hotspotSetsMetric1Val: string;
  hotspotSetsMetric2: string;
  hotspotSetsMetric2Val: string;
  btnNextToPerformance: string;

  hotspotScratchName: string;
  hotspotScratchTitle: string;
  hotspotScratchDesc: string;
  hotspotScratchMetric1: string;
  hotspotScratchMetric1Val: string;
  hotspotScratchMetric2: string;
  hotspotScratchMetric2Val: string;
  btnNextToResidencies: string;

  hotspotNetworkName: string;
  hotspotNetworkTitle: string;
  hotspotNetworkDesc: string;
  hotspotNetworkMetric1: string;
  hotspotNetworkMetric1Val: string;
  hotspotNetworkMetric2: string;
  hotspotNetworkMetric2Val: string;
  btnNextToRider: string;

  // Scene 5: Residencies
  resName: string;
  resTitle: string;
  resDesc: string;
  resMetric1: string;
  resMetric1Val: string;
  resMetric2: string;
  resMetric2Val: string;
  btnNextToRiderSpec: string;

  // Scene 6: Rider
  riderName: string;
  riderTitle: string;
  riderDesc: string;
  riderMetric1: string;
  riderMetric1Val: string;
  riderMetric2: string;
  riderMetric2Val: string;
  btnNextToConsole: string;

  // Scene 7: Console
  consoleSub: string;
  consoleTitle: string;
  consoleDesc: string;
  consoleActive: string;
  consoleSec1: string;
  consoleSec1Val: string;
  consoleSec2: string;
  consoleSec3: string;
  consoleEqBass: string;
  consoleEqMid: string;
  consoleEqTreble: string;
  consolePitchTitle: string;
  consolePitchDeep: string;
  consolePitchHard: string;

  // Technical Rider Spec Modal
  specTag: string;
  specTitle: string;
  specCat1: string;
  specCat1_1: string;
  specCat1_1d: string;
  specCat1_2: string;
  specCat1_2d: string;
  specCat1_3: string;
  specCat1_3d: string;
  specCat1_4: string;
  specCat1_4d: string;
  specCat1_5: string;
  specCat1_5d: string;
  specCat2: string;
  specCat2_1: string;
  specCat2_1d: string;
  specCat2_2: string;
  specCat2_2d: string;
  specCat2_3: string;
  specCat2_3d: string;
  specCat2_4: string;
  specCat2_4d: string;
  specCat3: string;
  specCat3_1: string;
  specCat3_1d: string;
  specCat3_2: string;
  specCat3_2d: string;
  specCat3_3: string;
  specCat3_3d: string;
  specCat3_4: string;
  specCat3_4d: string;
  specType: string;
  specTypeVal: string;
  specPl: string;
  specPlVal: string;
  specMon: string;
  specMonVal: string;
  specCab: string;
  specCabVal: string;

  // Booking Modal
  bookSub: string;
  bookTitle: string;
  bookDesc: string;
  bookLabelName: string;
  bookPlaceholderName: string;
  bookLabelAgency: string;
  bookPlaceholderAgency: string;
  bookLabelEmail: string;
  bookPlaceholderEmail: string;
  bookLabelDate: string;
  bookPlaceholderDate: string;
  bookLabelVenue: string;
  bookPlaceholderVenue: string;
  bookLabelCity: string;
  bookPlaceholderCity: string;
  bookLabelRider: string;
  bookRiderOption1: string;
  bookRiderOption2: string;
  bookRiderOption3: string;
  bookLabelNotes: string;
  bookPlaceholderNotes: string;
  bookBtnSubmit: string;
  bookBtnSubmitting: string;
  bookSuccessTitle: string;
  bookSuccessText: string;
  bookSuccessLoc: string;
  bookSuccessRider: string;
  bookSuccessRiderType1: string;
  bookSuccessRiderType2: string;
  bookSuccessRiderType3: string;
  bookBtnNew: string;
  bookBtnClose: string;
  bookFooterRider: string;
  bookFooterRiderText: string;
  bookFooterSound: string;
  bookFooterSoundText: string;
  bookFooterFormat: string;
  bookFooterFormatText: string;
  btnBookSetBeckerman: string;
  btnDetailsRider: string;
  btnNextToLiveConsole: string;
  btnNextToTechnicalRider: string;
  cueBtn1: string;
  cueBtn2: string;
  labelClubResidencies: string;
  labelCorporatePartnerships: string;
  labelPitchFader: string;
  labelRiderAudioCabling: string;
  labelRiderMainConsole: string;
  pitchDeepGroove: string;
  pitchHardTechno: string;
  sceneLiveConsoleTitle: string;
  sceneResidenciesDesc: string;
  sceneResidenciesTitle: string;
  sceneTechnicalRiderDesc: string;
  sceneTechnicalRiderTitle: string;
  simDesc: string;
  simSec1Title: string;
  simSec2Title: string;
  simSec3Title: string;
  simSec4TitleLP: string;
  simSec4TitleVol: string;
  simSec5Title: string;
  simSynthesizerLabel: string;
  valClubResidencies: string;
  valCorporatePartnerships: string;
}

export const translations: Record<'en' | 'cs' | 'ru', TranslationSet> = {
  en: {
    brandSub: "PRAGUE CLUB, EVENT & CORPORATE DJ",
    brandStatus: "RESIDENT DJ // 500+ SHOWS",
    brandBpm: "TECH-HOUSE & SYNT MELODICS",
    navTitle: "NAVIGATION CHANNELS",
    navIntro: "DJ BECKERMAN",
    navAtmosphere: "VIBE & ATMO",
    navSets: "RELEASES & SETS",
    navLive: "LIVE PLATTER",
    navResidencies: "RESIDENCIES",
    navRider: "TECH RIDER",
    navConsole: "LIVE CONSOLE",
    bottomCoordinates: "PRAGUE NIGHTLIFE // HIGH-DEFINITION PIONEER CDJ-3000 CORE",
    bottomScrollIntro: "SCROLL TO EXPLORE THE DJ DESK",
    btnAudioRider: "AUDIO RIDER",
    btnBookSet: "BOOK SET",
    btnBookSystem: "BOOK SYSTEM",

    introSub: "PROFESSIONAL PRAHA NIGHTLIFE EXPERIENCES",
    introTitle1: "DJ BECKERMAN",
    introTitle2: "The Sound of Prague",
    introDesc: "Premium club sets, private events and massive corporate shows in the heart of Europe. One of Prague's leading DJs with a distinctive musical style merging deep Melodic Techno and high-energy Tech House.",
    metricEvents: "EXPERIENCE",
    metricEventsVal: "500+ SHOWS",
    metricStyle: "MAIN STYLE",
    metricStyleVal: "MELODIC & TECH-HOUSE",
    metricLoc: "HEADQUARTERS",
    metricLocVal: "PRAGUE, CZECHIA",
    btnExploreAtmosphere: "FEEL THE VIBE & SOUND",

    hotspotIsolatorsName: "01 / ATMOSPHERE, VIBE & DYNAMIC RATIO",
    hotspotIsolatorsTitle: "Precision Control of Atmosphere",
    hotspotIsolatorsDesc: "Beckerman's sonic concept merges heavy, driving progressive basslines with bright shimmering synthesis passes. Utilizing the flagship 6-channel Pioneer DJM-V10 mixer, every frequency band is shaped manually for complete dancefloor absorption.",
    hotspotIsolatorsMetric1: "EQ ISOLATION",
    hotspotIsolatorsMetric1Val: "3-BAND PRO",
    hotspotIsolatorsMetric2: "FREQUENCY GAIN",
    hotspotIsolatorsMetric2Val: "6 CHANNELS",
    btnNextToSets: "PROCEED TO RELEASES & SETS",

    hotspotSetsName: "02 / FEATURED MIXSETS & PERFORMANCE",
    hotspotSetsTitle: "High-Definition Sound Pressure",
    hotspotSetsDesc: "Experience the peak energy of curated live sets. Beautifully moving analog VU decibel needles reflect the raw power of the master output, guaranteeing pristine dynamic resolution without digital clipping—from poolside house to dark basement techno.",
    hotspotSetsMetric1: "AUDIENCE REACH",
    hotspotSetsMetric1Val: "50k+ LISTENERS",
    hotspotSetsMetric2: "AUDIO STACK",
    hotspotSetsMetric2Val: "32-BIT HIGH-RES",
    btnNextToPerformance: "TAKE PART IN PERFORMANCE",

    hotspotScratchName: "03 / SCRATCH & JOG CONTROL MATRIX",
    hotspotScratchTitle: "Exquisite Real-Time Turntablism",
    hotspotScratchDesc: "The core stage is driven by three flagship Pioneer CDJ-3000 decks. Spin the interactive virtual jog wheel platter below or adjust the pitch fader to feel the immediate physical feedback and responsive timing of professional hardware.",
    hotspotScratchMetric1: "GROOVE TEMPO",
    hotspotScratchMetric1Val: "124 BPM",
    hotspotScratchMetric2: "CORE DECK SET",
    hotspotScratchMetric2Val: "3 DECK MATRIX",
    btnNextToResidencies: "EXPLORE RESIDENCIES & SHOWS",

    hotspotNetworkName: "04 / CLUB INFRASTRUCTURE & NETWORK",
    hotspotNetworkTitle: "Prague's Elite Sound Integration",
    hotspotNetworkDesc: "A high-speed link fuses the players together and routes pure balanced analogue signals via premium gold-plated Neutrik XLR pathways straight to state-of-the-art club PAs in Prague for unmatched physical punch.",
    hotspotNetworkMetric1: "TOP PRAGUE CLUBS",
    hotspotNetworkMetric1Val: "DUPLEX, ROXY, EPIC",
    hotspotNetworkMetric2: "COUPLED INTERFACE",
    hotspotNetworkMetric2Val: "NEUTRIK PRO XLR",
    btnNextToRider: "CHECK TECHNICAL RIDER",

    resName: "05 / MAJOR CLUB RESIDENCIES & BRANDS",
    resTitle: "Geography & Artistic Trust",
    resDesc: "From long-running residencies at Prague's legendary venues—Duplex, Roxy, Epic, and Retro Music Hall—to curated high-end events for global giants including Heineken, Forbes, Netlify, and Porsche. Audiophile sonic curation provided with uncompromising energy.",
    resMetric1: "RESIDENCIES",
    resMetric1Val: "Duplex, Roxy, Radost FX",
    resMetric2: "BRAND PARTNERS",
    resMetric2Val: "Porsche, Forbes, Heineken",
    btnNextToRiderSpec: "PROCEED TO TECHNICAL RIDER ESPECS",

    riderName: "06 / PREMIUM SOUND RIDER SPECIFICATION",
    riderTitle: "Technical Rider",
    riderDesc: "Impeccable signal precision. Performances are executed strictly on industry-standard, clean flagship equipment (3x CDJ-3000 coupled with the DJM-V10 mixer) wired with top-grade balanced Neutrik Pro XLR gold lines to eliminate jitters.",
    riderMetric1: "MAIN CONSOLE",
    riderMetric1Val: "3x CDJ-3000 & DJM-V10",
    riderMetric2: "INTERRES CONNECTOR",
    riderMetric2Val: "Neutrik XLR Gold Line",
    btnNextToConsole: "TEST THE LIVE CONSOLE",

    consoleSub: "PIONEER HIGH-PERFORMANCE DIGITAL STUDIO WORKSTATION",
    consoleTitle: "Live Control Station",
    consoleDesc: "Ultra-responsive interactive DJ layout. Fire up the live sequenced Tech-House/Melodic synth stems and sweep frequencies via the virtual digital isolators—hear direct phase filtering and watch mechanical VU peak meters bounce in real time!",
    consoleActive: "CLASS-A ACTIVE",
    consoleSec1: "1. Sound Activator & Tempo",
    consoleSec1Val: "SEQUENCER SYNTH",
    consoleSec2: "LIVE VU DECIBELS",
    consoleSec3: "3. Melodic Master Isolator (Channel EQ)",
    consoleEqBass: "BASS",
    consoleEqMid: "MID",
    consoleEqTreble: "TREBLE",
    consolePitchTitle: "Tempo Shift / Pitch Fader",
    consolePitchDeep: "-8% (DEEP GROOVE)",
    consolePitchHard: "+8% (HARD TECHNO)",

    specTag: "BECKERMAN — DIGITAL TECH RIDER & SPEC",
    specTitle: "EQUIPMENT SPECIFICATIONS",
    specCat1: "Digital Mixing Console (DJ Desk Core)",
    specCat1_1: "Mixer Chassis",
    specCat1_1d: "Flagship 6-channel Pioneer DJM-V10 mixer with 64-bit/96kHz DSP audio processing core",
    specCat1_2: "Magnetic Faders",
    specCat1_2d: "Studio Magvel Fader Pro with mechanical tension custom control and non-contact sensors",
    specCat1_3: "Master Isolator",
    specCat1_3d: "Ultra-precise 3-band Master Isolator with adjustable crossover curve and Boost Send FX",
    specCat1_4: "DAC & Amplifiers",
    specCat1_4d: "32-bit audiophile ESS Technology SABRE digital-to-analog converters on all master paths",
    specCat1_5: "Dynamic Range",
    specCat1_5d: "20Hz - 40,000Hz (highly detailed high-resolution club sound field expansion)",
    specCat2: "Media Players & Sampling",
    specCat2_1: "Media Players",
    specCat2_1d: "3x Pioneer CDJ-3000 multiplayer decks with MPU processors and hardware 3-Band Waveform analysis",
    specCat2_2: "Touch Performance",
    specCat2_2d: "10.1-inch high-contrast display supporting Touch Preview, Touch Cue and Stack Waveform",
    specCat2_3: "Synchronization Link",
    specCat2_3d: "Custom Pro DJ Link Gigabit network layer coupled over a pro Netgear Switch core",
    specCat2_4: "Interfering Cabling",
    specCat2_4d: "Oxygen-free premium coaxial and optical AudioQuest Carbon digital pathways",
    specCat3: "Acoustics & Stage Layout",
    specCat3_1: "DJ Booth monitor",
    specCat3_1d: "Dual-matched twin Funktion-One PSM318 systems with integrated standalone subwoofers",
    specCat3_2: "Vibration Isolators",
    specCat3_2d: "Alpha GEL heavy decoupling dampers under playing decks to neutralize sub-bass resonance rumble",
    specCat3_3: "Main Area Stack",
    specCat3_3d: "Flagship multi-way active Funktion-One Dance Stack DS1 Extreme system integration",
    specCat3_4: "Sound Distributor",
    specCat3_4d: "State-of-the-art electronic multi-route BSS Audio Soundweb London digital scheduler",
    specType: "MIXER TYPE",
    specTypeVal: "Digital DJM-V10",
    specPl: "MEDIA PLAYERS",
    specPlVal: "3x Pioneer CDJ-3000",
    specMon: "MONITOR SYSTEM",
    specMonVal: "Funktion-One PSM318",
    specCab: "CABLES CORE",
    specCabVal: "AudioQuest Carbon OPT",

    bookSub: "SHOW & TOUR BOOKING",
    bookTitle: "Book DJ BECKERMAN",
    bookDesc: "Coordinate official dates, private sessions, and exclusive club shows in Prague with the state-of-the-art digital touring audio rig and maximum energy.",
    bookLabelName: "Representative (Full Name)",
    bookPlaceholderName: "Alexander Werner",
    bookLabelAgency: "Agency / Club / Client",
    bookPlaceholderAgency: "Duplex Club Prague",
    bookLabelEmail: "Direct Email Address",
    bookPlaceholderEmail: "booking@duplex.cz",
    bookLabelDate: "Intended Event Date",
    bookPlaceholderDate: "August 28, 2026",
    bookLabelVenue: "Venue Name",
    bookPlaceholderVenue: "Duplex Club (Main Floor)",
    bookLabelCity: "Event City (Prague Only)",
    bookPlaceholderCity: "Prague, Czech Republic",
    bookLabelRider: "Audio Rider Configuration",
    bookRiderOption1: "Pioneer CDJ-3000 + DJM-V10 Rider",
    bookRiderOption2: "Pioneer CDJ-3000 + DJM-900NXS2 Setup",
    bookRiderOption3: "Hybrid Live Performance Layout",
    bookLabelNotes: "Additional Technical & Hospitality Requirements",
    bookPlaceholderNotes: "e.g., Requesting custom installation of Funktion-One PSM318 booth monitors and direct stage access",
    bookBtnSubmit: "Send Booking Request",
    bookBtnSubmitting: "Registering request...",
    bookSuccessTitle: "Booking Request Registered",
    bookSuccessText: "Beckerman's tour management team will reach out to your entity at the address below within 24 hours to coordinate contract terms and rider specs.",
    bookSuccessLoc: "Show Location:",
    bookSuccessRider: "Rider Option Selected:",
    bookSuccessRiderType1: "PIONEER HIGH-PERF CDJ-3000 + DJM-V10 RIDER",
    bookSuccessRiderType2: "STANDARD PIONEER CDJ-3000 + DJM-900NXS2",
    bookSuccessRiderType3: "HYBRID LIVE PERFORMANCE SYNTH SYSTEM",
    bookBtnNew: "Submit Another Request",
    bookBtnClose: "Close Panel",
    bookFooterRider: "Rider",
    bookFooterRiderText: "Provided on-site",
    bookFooterSound: "Sound Setup",
    bookFooterSoundText: "Pristine Analog XLR",
    bookFooterFormat: "Audience Format",
    bookFooterFormatText: "Club / Festival / VIP",
    btnBookSetBeckerman: "Book Performance",
    btnDetailsRider: "View Technical Specs",
    btnNextToLiveConsole: "Proceed to Live Console",
    btnNextToTechnicalRider: "Proceed to Technical Rider",
    cueBtn1: "KICK DRUM DROP",
    cueBtn2: "OFFBEAT PERCUSSION",
    labelClubResidencies: "Club Residencies",
    labelCorporatePartnerships: "Corporate Partners",
    labelPitchFader: "Pitch / Tempo Fader",
    labelRiderAudioCabling: "Audio Cabling",
    labelRiderMainConsole: "Main Console Setup",
    pitchDeepGroove: "-8% (Deep Groove)",
    pitchHardTechno: "+8% (Hard Techno)",
    sceneLiveConsoleTitle: "Interactive Performance Hub",
    sceneResidenciesDesc: "From legendary clubs in Prague like Duplex, Roxy, Epic and Retro Music Hall, to high-end bespoke events for global corporate giants like Heineken, Porsche, Forbes and Netlify. Audiophile curation with uncompromising dynamic energy.",
    sceneResidenciesTitle: "Geography & Artistic Trust",
    sceneTechnicalRiderDesc: "Impeccable signal precision. Performances are executed strictly on clean industry-standard flagship equipment wired with premium balanced Neutrik Pro XLR gold lines to eliminate signal jitter and interference.",
    sceneTechnicalRiderTitle: "Technical Rider Specs",
    simDesc: "Play around with the live sequencer. Toggle synthesized stems, isolate frequencies with rotary knobs, and watch analog VU needles react in real-time.",
    simSec1Title: "Sound Activator & Tempo",
    simSec2Title: "Live VU Decibels",
    simSec3Title: "Melodic Master Isolator (Channel EQ)",
    simSec4TitleLP: "LP Cutoff Filter Sweep",
    simSec4TitleVol: "Master Volume Output",
    simSec5Title: "Interactive Hot-Cue Pads",
    simSynthesizerLabel: "Sequencer Synth",
    valClubResidencies: "Duplex, Roxy, Epic, Radost FX",
    valCorporatePartnerships: "Porsche, Heineken, Forbes, Netlify"
  },
  cs: {
    brandSub: "PRUŽNÝ PRAŽSKÝ KLUBOVÝ, EVENTOVÝ A FIREMNÍ DJ",
    brandStatus: "REZIDENTNÍ DJ // 500+ VYSTOUPENÍ",
    brandBpm: "TECH-HOUSE A MELODICKÝ SYNTH",
    navTitle: "NAVIGAČNÍ KANÁLY",
    navIntro: "DJ BECKERMAN",
    navAtmosphere: "ATMOSFÉRA A ZVUK",
    navSets: "RELESY A SETY",
    navLive: "ŽIVÝ TALÍŘ",
    navResidencies: "REZIDENCE",
    navRider: "TECHNICKÝ RIDER",
    navConsole: "ŽIVÁ KONZOLE",
    bottomCoordinates: "PRAŽSKÝ NOČNÍ ŽIVOT // ŠPIČKOVÝ SYSTÉM PIONEER CDJ-3000",
    bottomScrollIntro: "PROCHÁZEJTE PRO PROZKOUMÁNÍ DIOD",
    btnAudioRider: "ZVUKOVÝ RIDER",
    btnBookSet: "REZERVACE SETU",
    btnBookSystem: "REZERVOVAT SHOW",

    introSub: "PROFESIONÁLNÍ ZÁŽITKY Z PRAŽSKÉHO NOČNÍHO ŽIVOTA",
    introTitle1: "DJ BECKERMAN",
    introTitle2: "Zvuk Prahy",
    introDesc: "Exkluzivní klubové sety, soukromé akce a prestižní firemní show v srdci Evropy. Jeden z předních pražských draků s unikátním hudebním stylem spojujícím hluboké Melodic Techno a dynamický Tech House.",
    metricEvents: "ZKUŠENOSTI",
    metricEventsVal: "500+ AKCÍ",
    metricStyle: "HLAVNÍ STYL",
    metricStyleVal: "MELODIC & TECH-HOUSE",
    metricLoc: "PŮSOBIŠTĚ",
    metricLocVal: "PRAHA, ČESKO",
    btnExploreAtmosphere: "POCÍTIT ATMOSFÉRU A ZVUK",

    hotspotIsolatorsName: "01 / ATMOSFÉRA, EMPATIE A DYNAMICA",
    hotspotIsolatorsTitle: "Precizní ovládání klubové atmosféry",
    hotspotIsolatorsDesc: "Beckermanův zvukový koncept míchá husté, progresivní basové linie s jasnými tóny syntezátorů. Použitím špičkového 6kanálového mixu Pioneer DJM-V10 se každé frekvenční pásmo tvaruje ručně pro plné pohlcení tanečního parketu.",
    hotspotIsolatorsMetric1: "EQ IZOLACE",
    hotspotIsolatorsMetric1Val: "3-BAND PRO",
    hotspotIsolatorsMetric2: "FREKVENČNÍ ZISK",
    hotspotIsolatorsMetric2Val: "6 KANÁLŮ",
    btnNextToSets: "POKRAČOVAT NA SETY A RELEASY",

    hotspotSetsName: "02 / VYBRANÉ MIXSETY A KVALITA",
    hotspotSetsTitle: "Akustický tlak s vysokým rozlišením",
    hotspotSetsDesc: "Zažijte vrcholnou energii živých setů. Pohyblivé analogové VU ručičky odrážejí plnou sílu hlavního výstupu a zaručují čistý zvuk bez digitálního zkreslení – od jemného plážového house po hluboké klubové techno.",
    hotspotSetsMetric1: "DOSAH PUBLIKA",
    hotspotSetsMetric1Val: "50k+ POSLUCHAČŮ",
    hotspotSetsMetric2: "ZVUKOVÝ SESTAV",
    hotspotSetsMetric2Val: "32-BIT HIGH-RES",
    btnNextToPerformance: "ZÚČASTNIT SE VYSTOUPENÍ",

    hotspotScratchName: "03 / SCRATCH & JOG KONTROLNÍ MATRICE",
    hotspotScratchTitle: "Špičková real-time manipulace",
    hotspotScratchDesc: "Hlavní performance je poháněna třemi vlajkovými loděmi Pioneer CDJ-3000. Roztočte interaktivní talíř níže nebo upravte pitch fader, abyste ucítili okamžitou fyzickou odezvu a přesnost profesionálního vybavení.",
    hotspotScratchMetric1: "TEMPO RYTMUS",
    hotspotScratchMetric1Val: "124 BPM",
    hotspotScratchMetric2: "SCÉNICKÁ SESTAVA",
    hotspotScratchMetric2Val: "3 DECK MATRIX",
    btnNextToResidencies: "PROZKOUMAT REZIDENCE A SHOW",

    hotspotNetworkName: "04 / KLUBOVÁ INFRASTRUKTURA A SÍŤ",
    hotspotNetworkTitle: "Elitní integrace zvuku v Praze",
    hotspotNetworkDesc: "Vysokorychlostní propojení spojuje přehrávače dohromady a směruje čistý vyvážený analogový signál přes prémiové zlacené XLR trasy Neutrik přímo do špičkových klubových aparatur v Praze pro nekompromisní ráz.",
    hotspotNetworkMetric1: "ŠPIČKOVÉ PRAŽSKÉ KLUBY",
    hotspotNetworkMetric1Val: "DUPLEX, ROXY, EPIC",
    hotspotNetworkMetric2: "PROPOJENÉ ROZHRANÍ",
    hotspotNetworkMetric2Val: "NEUTRIK PRO XLR",
    btnNextToRider: "ZKONTROLOVAT TECHNICKÝ RIDER",

    resName: "05 / VÝZNAMNÉ KLUBOVÉ REZIDENCE A ZNAČKY",
    resTitle: "Geografie a umělecká důvěra",
    resDesc: "Od dlouhodobých rezidencí v legendárních pražských klubech — Duplex, Roxy, Epic a Retro Music Hall — po exkluzivní akce pro globální korporace včetně společností Heineken, Forbes, Netlify a Porsche. Zvuková selekce s nekompromisní energií.",
    resMetric1: "REZIDENCE",
    resMetric1Val: "Duplex, Roxy, Radost FX",
    resMetric2: "PARTNEŘI ZNAČKY",
    resMetric2Val: "Porsche, Forbes, Heineken",
    btnNextToRiderSpec: "POKRAČOVAT NA SPECIFIKACI RIDERU",

    riderName: "06 / PRÉMIOVÁ SPECIFIKACE ZVUKOVÉHO RIDERU",
    riderTitle: "Technický rider",
    riderDesc: "Bezchybná přesnost signálu. Vystoupení probíhají výhradně na čistém standardním vlajkovém vybavení Pioneer (3x CDJ-3000 + mixážní pult DJM-V10) s použitím symetrických kabelů Neutrik Pro XLR zlacené řady pro eliminaci rušení.",
    riderMetric1: "REŽIJNÍ KONZOLE",
    riderMetric1Val: "3x CDJ-3000 & DJM-V10",
    riderMetric2: "ZAPOJENÍ & PORTY",
    riderMetric2Val: "Neutrik XLR Gold Line",
    btnNextToConsole: "OTESTOVAT ŽIVOU KONZOLI",

    consoleSub: "ŠPIČKOVÁ DIGITÁLNÍ STUDIOVÁ STANICE PIONEER",
    consoleTitle: "Živá ovládací konzole",
    consoleDesc: "Vysoce reaktivní interaktivní DJ rozhraní. Spusťte živé smyčky pro Tech-House/Melodický syntezátor a ovládejte frekvence přes virtuální EQ izolátory – uslyšíte okamžitý řez pásma a uvidíte poskakování ručiček VU metrů v reálném čase!",
    consoleActive: "TŘÍDA-A AKTIVNÍ",
    consoleSec1: "1. Aktivace zvuku & Rychlost",
    consoleSec1Val: "SPOUŠTĚČ SYNTU",
    consoleSec2: "ŽIVÉ VU DECI-BELERY",
    consoleSec3: "3. Melodický Master Izolátor (EQ Kanálu)",
    consoleEqBass: "BASS",
    consoleEqMid: "MID",
    consoleEqTreble: "TREBLE",
    consolePitchTitle: "Změna tempa / Pitch Fader",
    consolePitchDeep: "-8% (Hluboký Groove)",
    consolePitchHard: "+8% (Tvrdé Techno)",

    specTag: "BECKERMAN — DIGITÁLNÍ TECH RIDER & SPEC",
    specTitle: "SPECIFIKACE VYBAVENÍ",
    specCat1: "Digitální mixážní konzole (Srdce DJ pultu)",
    specCat1_1: "Šasi mixu",
    specCat1_1d: "Vlajkový 6kanálový mixážní pult Pioneer DJM-V10 s 64bitovým DSP audio procesorem o frekvenci 96kHz",
    specCat1_2: "Magnetické faders",
    specCat1_2d: "Studiové fadery Magvel Fader Pro s nastavitelným odporem tahu a bezkontaktními optickými senzory",
    specCat1_3: "Master izolátor",
    specCat1_3d: "Vysoce precizní 3pásmový Master Isolator s volitelnou křivkou frekvence a funkcí Boost Send FX",
    specCat1_4: "DAC & Předzesilovače",
    specCat1_4d: "32bitové audiofilské převodníky ESS Technology SABRE DAC na všech hlavních cestách",
    specCat1_5: "Frekvenční rozsah",
    specCat1_5d: "20 Hz – 40 000 Hz (vysoce detailní klubový zvuk s plnou prostorovou hloubkou)",
    specCat2: "Přehrávače & Samplery",
    specCat2_1: "Multimediální přehrávače",
    specCat2_1d: "3x Pioneer CDJ-3000 s MPU procesorem a hardwarovou podporou 3pásmového Waveformu",
    specCat2_2: "Dotykové rozhraní",
    specCat2_2d: "10.1palcový kontrastní LCD podporující Touch Preview, Touch Cue a skládaný Waveform",
    specCat2_3: "Synchronizační linka",
    specCat2_3d: "Páteřní síťová vrstva Pro DJ Link přes gigabitový přepínač Netgear Pro",
    specCat2_4: "Propojovací kabely",
    specCat2_4d: "Bezolovnaté digitální kabely AudioQuest Carbon z nejčistší mědi",
    specCat3: "Akustika & Uspořádání scény",
    specCat3_1: "DJ odposlech (booth)",
    specCat3_1d: "Duální odposlechový systém Funktion-One PSM318 s dedikovanými basovými kabiny",
    specCat3_2: "Tlumení vibrací",
    specCat3_2d: "Tlumiče Alpha GEL pod přehrávači pro eliminaci nežádoucích zpětných rezonancí těžkých basů",
    specCat3_3: "Celkový PA aparát",
    specCat3_3d: "Vlajková sestava Funktion-One Dance Stack DS1 Extreme pro nekompromisní tlak do sálu",
    specCat3_4: "Procesor systému",
    specCat3_4d: "Distributor zvuku a procesor řízení tras BSS Audio Soundweb London",
    specType: "TYP MIXU",
    specTypeVal: "Digitální DJM-V10",
    specPl: "PŘEHRÁVAČE",
    specPlVal: "3x Pioneer CDJ-3000",
    specMon: "ODPOSLECHY",
    specMonVal: "Funktion-One PSM318",
    specCab: "KABELÁŽ CORE",
    specCabVal: "AudioQuest Carbon OPT",

    bookSub: "REZERVACE & BOOKING",
    bookTitle: "Rezervovat vystoupení",
    bookDesc: "Zajistěte si oficiální termín, soukromé setkání nebo exkluzivní klubový set v Praze s kompletním moderním digitálním setapem a maximální energií.",
    bookLabelName: "Zástupce (Celé Jméno)",
    bookPlaceholderName: "Alexander Werner",
    bookLabelAgency: "Agentura / Klub / Klient",
    bookPlaceholderAgency: "Duplex Club Praha",
    bookLabelEmail: "Přímý email",
    bookPlaceholderEmail: "booking@duplex.cz",
    bookLabelDate: "Požadované datum",
    bookPlaceholderDate: "28. srpna 2026",
    bookLabelVenue: "Název klubu / scény",
    bookPlaceholderVenue: "Duplex Club (Main Floor)",
    bookLabelCity: "Město konání (Pouze Praha kontext)",
    bookPlaceholderCity: "Praha, Česká republika",
    bookLabelRider: "Konfigurace audio rideru",
    bookRiderOption1: "Pioneer CDJ-3000 + DJM-V10 Rider",
    bookRiderOption2: "Pioneer CDJ-3000 + DJM-900NXS2 Setup",
    bookRiderOption3: "Hybridní Live Performance Sestava",
    bookLabelNotes: "Dodatečné technické a produkční požadavky",
    bookPlaceholderNotes: "Příklad: Požadujeme instalaci odposlechů Funktion-One PSM318 a přímý přístup k pódiu",
    bookBtnSubmit: "Odeslat poptávku",
    bookBtnSubmitting: "Registrace poptávky...",
    bookSuccessTitle: "Rezervační požadavek odeslán",
    bookSuccessText: "Management tour DJ Beckerman se s vámi spojí na uvedené adrese do 24 hodin, aby potvrdil finanční, smluvní a technické podmínky rideru.",
    bookSuccessLoc: "Místo konání:",
    bookSuccessRider: "Zvolený audio-rider:",
    bookSuccessRiderType1: "ŠPIČKOVÝ PIONEER CDJ-3000 + DJM-V10 RIDER",
    bookSuccessRiderType2: "KLASICKÝ PIONEER CDJ-3000 + DJM-900NXS2 SET",
    bookSuccessRiderType3: "HYBRIDNÍ LIVE PERF SYNTEZÁTOROVÁ SESTAVA",
    bookBtnNew: "Další poptávka",
    bookBtnClose: "Zavřít panel",
    bookFooterRider: "Rider",
    bookFooterRiderText: "Zajištěn na místě",
    bookFooterSound: "Zapojení zvuku",
    bookFooterSoundText: "Čisté symetrické XLR",
    bookFooterFormat: "Formát události",
    bookFooterFormatText: "Klub / Festival / Speciální akce",
    btnBookSetBeckerman: "Rezervovat Vystoupení",
    btnDetailsRider: "Zobrazit Specifikaci",
    btnNextToLiveConsole: "Pokračovat na Živou Konzoli",
    btnNextToTechnicalRider: "Pokračovat na Zvukový Rider",
    cueBtn1: "KICK DRUM SYNTH",
    cueBtn2: "SYNTH PERKUSE",
    labelClubResidencies: "Klubové Rezidence",
    labelCorporatePartnerships: "Firemní Partneři",
    labelPitchFader: "Rychlost Pitch Fader",
    labelRiderAudioCabling: "Zvuková Kabeláž",
    labelRiderMainConsole: "Hlavní Režijní Setap",
    pitchDeepGroove: "-8% (Hluboký Groove)",
    pitchHardTechno: "+8% (Tvrdé Techno)",
    sceneLiveConsoleTitle: "Interaktivní Ovládací Konzole",
    sceneResidenciesDesc: "Od dlouhodobých rezidencí v legendárních pražských klubech jako Duplex, Roxy, Epic a Retro Music Hall po exkluzivní akce pro globální korporace včetně Heineken, Forbes, Netlify a Porsche. Zvuková selekce s nekompromisní energií.",
    sceneResidenciesTitle: "Geografie a Umělecká Důvěra",
    sceneTechnicalRiderDesc: "Bezchybná přesnost signálu. Vystoupení probíhají výhradně na čistém standardním vlajkovém vybavení s použitím symetrických kabelů Neutrik Pro XLR zlaté série pro eliminaci rušení.",
    sceneTechnicalRiderTitle: "Specifikace Technického Rideru",
    simDesc: "Vyzkoušejte si živý sekvencer. Spouštějte syntetické smyčky, izolujte frekvence otočnými knoflíky a sledujte, jak analogové VU ručičky reagují v reálném čase.",
    simSec1Title: "Aktivace Zvuku & Rychlost",
    simSec2Title: "Živé VU Decibely",
    simSec3Title: "Melodický Master Izolátor (EQ Kanálu)",
    simSec4TitleLP: "LP Frekvenční Filtr Sweep",
    simSec4TitleVol: "Hlavní Hlasitost Master",
    simSec5Title: "Interaktivní Hot-Cue Pady",
    simSynthesizerLabel: "Spouštěč Syntu",
    valClubResidencies: "Duplex, Roxy, Epic, Radost FX",
    valCorporatePartnerships: "Porsche, Heineken, Forbes, Netlify"
  },
  ru: {
    brandSub: "ПРАЖСКИЙ КЛУБНЫЙ, ИВЕНТ И КОРПОРАТИВНЫЙ DJ",
    brandStatus: "РЕЗИДЕНТ DJ // 500+ ВЫСТУПЛЕНИЙ",
    brandBpm: "TECH-HOUSE И МЕЛОДИЧНЫЙ СИНТЕЗАТОР",
    navTitle: "НАВИГАЦИОННЫЕ КАНАЛЫ",
    navIntro: "DJ BECKERMAN",
    navAtmosphere: "АТМОСФЕРА И ЗВУК",
    navSets: "СЕТЫ И РЕЛИЗЫ",
    navLive: "ЖИВАЯ ДЕКА",
    navResidencies: "РЕЗИДЕНЦИИ",
    navRider: "ТЕХНИЧЕСКИЙ РАЙДЕР",
    navConsole: "ЖИВАЯ КОНСОЛЬ",
    bottomCoordinates: "ПРАЖСКАЯ НОЧНАЯ ЖИЗНЬ // ВЕДУЩИЙ СЕ-ТАП PIONEER CDJ-3000",
    bottomScrollIntro: "ПРОКРУТИТЕ ДЛЯ ИЗУЧЕНИЯ ДИДЖЕЙСКОГО ПУЛЬТА",
    btnAudioRider: "АУДИО-РАЙДЕР",
    btnBookSet: "ЗАБРОНИРОВАТЬ СЕТ",
    btnBookSystem: "ЗАБРОНИРОВАТЬ ШОУ",

    introSub: "ПРОФЕССИОНАЛЬНЫЙ ПРАЖСКИЙ КЛУБНЫЙ ИВЕНТ-ДИДЖЕЙ",
    introTitle1: "DJ BECKERMAN",
    introTitle2: "Звук Праги",
    introDesc: "Премиальные клубные сеты, частные вечеринки и масштабные корпоративные шоу в самом сердце Европы. Один из ведущих диджеев Праги с уникальным музыкальным стилем на стыке глубокого Melodic Techno и взрывного Tech House.",
    metricEvents: "ОПЫТ ВЫСТУПЛЕНИЙ",
    metricEventsVal: "500+ СОБЫТИЙ",
    metricStyle: "ОСНОВНОЙ СТИЛЬ",
    metricStyleVal: "MELODIC & TECH-HOUSE",
    metricLoc: "ШТАБ-КВАРТИРА",
    metricLocVal: "ПРАГА, ЧЕХИЯ",
    btnExploreAtmosphere: "ПОЧУВСТВОВАТЬ АТМОСФЕРУ И ЗВУК",

    hotspotIsolatorsName: "01 / ATMOSPHERE, VIBE & DYNAMIC RATIO",
    hotspotIsolatorsTitle: "Прецизионный контроль атмосферы",
    hotspotIsolatorsDesc: "Музыкальный концепт Beckerman соединяет плотные прогрессивные басовые линии со сверкающими синтезаторными пассами. С помощью 6-канального пульта Pioneer DJM-V10 каждая частота выстраивается вручную для максимального погружения танцпола.",
    hotspotIsolatorsMetric1: "EQ ИЗОЛЯЦИЯ",
    hotspotIsolatorsMetric1Val: "3-BAND PRO",
    hotspotIsolatorsMetric2: "МИКШИРОВАНИЕ",
    hotspotIsolatorsMetric2Val: "6 КАНАЛОВ",
    btnNextToSets: "ПЕРЕЙТИ К СЕТАМ И РЕЛИЗАМ",

    hotspotSetsName: "02 / FEATURED MIXSETS & PERFORMANCE",
    hotspotSetsTitle: "Живое звуковое давление",
    hotspotSetsDesc: "Ощутите пиковые моменты сетов. Светодиодные шкалы децибел наглядно отражают мощь выходного сигнала, гарантируя безупречный баланс звука без клиппинга — от мягкого пляжного хауса до мощных клубных техно-вибраций.",
    hotspotSetsMetric1: "СЛУШАТЕЛЕЙ",
    hotspotSetsMetric1Val: "50k+ ЧЕЛОВЕК",
    hotspotSetsMetric2: "ЗВУЧАНИЕ",
    hotspotSetsMetric2Val: "32-BIT HD AUDIO",
    btnNextToPerformance: "ПРИНЯТЬ УЧАСТИЕ В ПЕРФОРМАНСЕ",

    hotspotScratchName: "03 / SCRATCH & JOG CONTROL MATRIX",
    hotspotScratchTitle: "Ювелирный перформанс в реальном времени",
    hotspotScratchDesc: "Выступление ведется на трех флагманах CDJ-3000. Вращайте джог на интерактивной виртуальной деке ниже или измените питч темпа, чтобы почувствовать обратную связь и идеальный отклик профессионального оборудования.",
    hotspotScratchMetric1: "ГРУВ-РИТМ",
    hotspotScratchMetric1Val: "124 BPM",
    hotspotScratchMetric2: "СЦЕНИЧЕСКИЙ СЕ-ТАП",
    hotspotScratchMetric2Val: "3 ДЕКИ РЯДОМ",
    btnNextToResidencies: "КЛУБНЫЕ РЕЗИДЕНЦИИ & ШОУ",

    hotspotNetworkName: "04 / CLUB INFRASTRUCTURE & NETWORK",
    hotspotNetworkTitle: "Синхронизация с топовыми площадками",
    hotspotNetworkDesc: "Высокоскоростной линк объединяет деки и отправляет аналоговый сигнал по золотым XLR трактам прямо на передовые акустические системы (Duplex Prague, Roxy, Retro Music Hall, Radost FX) для передачи чистейшей энергии.",
    hotspotNetworkMetric1: "КЛУБЫ ПРАГИ",
    hotspotNetworkMetric1Val: "DUPLEX, ROXY, EPIC",
    hotspotNetworkMetric2: "КАБЕЛИ МАТРИЦЫ",
    hotspotNetworkMetric2Val: "NEUTRIK PRO XLR",
    btnNextToRider: "ПЕРЕЙТИ К ТЕХНИЧЕСКОМУ РАЙДЕРУ",

    resName: "05 / MAJOR CLUB RESIDENCIES & BRANDS",
    resTitle: "География & Доверие",
    resDesc: "От резидентства в легендарных клубах Праги — Duplex, Roxy, Epic и Retro Music Hall — до масштабных мероприятий для глобальных гигантов, таких как Heineken, Netlify, Forbes и Porsche. Музыкальное сопровождение премиум-класса с полной энергоотдачей.",
    resMetric1: "КЛУБНЫЕ РЕЗИДЕНЦИИ",
    resMetric1Val: "Duplex, Roxy, Radost FX",
    resMetric2: "БРЕНД-ПАРТНЕРСТВО",
    resMetric2Val: "Porsche, Forbes, Heineken",
    btnNextToRiderSpec: "ПЕРЕЙТИ К ТЕХНИЧЕСКОМУ РАЙДЕРУ",

    riderName: "06 / PREMIUM SOUND RIDER SPECIFICATION",
    riderTitle: "Технический райдер",
    riderDesc: "Безукоризненная точность сигнала. Выступления проводятся на флагманском оборудовании Pioneer (3x CDJ-3000 + DJM-V10) с использованием балансных кабелей Neutrik Pro XLR золотого сечения для устранения искажений и джиттера.",
    riderMetric1: "ОСНОВНАЯ КОНСОЛЬ",
    riderMetric1Val: "3x CDJ-3000 & DJM-V10",
    riderMetric2: "КОММУТАЦИЯ & ПОРТЫ",
    riderMetric2Val: "Neutrik XLR Gold Line",
    btnNextToConsole: "ПРОТЕСТИРОВАТЬ ЖИВУЮ КОНСОЛЬ",

    consoleSub: "ВЫСОКОПРОИЗВОДИТЕЛЬНАЯ ЦИФРОВАЯ СТАНЦИЯ PIONEER",
    consoleTitle: "Консоль Управления",
    consoleDesc: "Сверхбыстрая интерактивная диджейская станция. Запустите живой хаус/техно синтезатор и управляйте частотами через цифровые EQ-изоляторы — вы услышите мгновенный срез звука и увидите неоновое мерцание пиковых VU-метров!",
    consoleActive: "КЛАСС-А АКТИВЕН",
    consoleSec1: "1. Активатор Звука & Темп",
    consoleSec1Val: "СИНТЕЗАТОР ШОУ",
    consoleSec2: "ЖИВЫЕ КЛУБНЫЕ СТРЕЛКИ VU",
    consoleSec3: "3. Мелодический Мастер-Изолятор (Канал EQ)",
    consoleEqBass: "BASS",
    consoleEqMid: "MID",
    consoleEqTreble: "TREBLE",
    consolePitchTitle: "Шаг темпа / Pitch Fader",
    consolePitchDeep: "-8% (ГЛУБОКИЙ ГРУВ)",
    consolePitchHard: "+8% (ХАРД ТЕХНО)",

    specTag: "BECKERMAN — ЦИФРОВОЙ ТЕХНИЧЕСКИЙ РАЙДЕР И СПЕЦИФИКАЦИЯ",
    specTitle: "ХАРАКТЕРИСТИКИ ОБОРУДОВАНИЯ",
    specCat1: "Цифровой микшерный тракт (Диджейский Пульт)",
    specCat1_1: "Конфигурация",
    specCat1_1d: "Флагманский 6-канальный процессор Pioneer DJM-V10 с обработкой 64-бит/96кГц DSP",
    specCat1_2: "Регуляторы громкости",
    specCat1_2d: "Магнитные фейдеры Magvel Fader Pro с регулировкой натяжения и бесконтактным датчиком",
    specCat1_3: "Мастер-Изолятор",
    specCat1_3d: "Сверхточный 3-полосный изолятор с переключаемой кривой кроссовера и Boost FX",
    specCat1_4: "ЦАП / Предусилители",
    specCat1_4d: "32-битные аудиофильские конвертеры ESS Technology SABRE DAC на всех каналах",
    specCat1_5: "Частотный диапазон",
    specCat1_5d: "20 Гц – 40 000 Гц (профессиональный клубный хай-рез звук высокой плотности)",
    specCat2: "Плееры & Семплеры (Сет-контроль)",
    specCat2_1: "Медиаплееры CDJ",
    specCat2_1d: "3x Pioneer CDJ-3000 с процессором MPU и поддержкой Waveform 3-Band",
    specCat2_2: "Сенсорный контроль",
    specCat2_2d: "10.1-дюймовый высококонтрастный экран с отображением Touch Preview и Touch Cue",
    specCat2_3: "Синхронизация",
    specCat2_3d: "Кастомный модуль Pro DJ Link через гигабитный коммутатор Netgear Pro",
    specCat2_4: "Аудио-коммутация",
    specCat2_4d: "Высокоскоростные коаксиальные и оптические кабели AudioQuest Carbon",
    specCat3: "Акустический дизайн & Сцена",
    specCat3_1: "Мониторинг диджея",
    specCat3_1d: "Двухполосные спаренные системы Funktion-One PSM318 с раздельными сабвуферами",
    specCat3_2: "Виброизоляция",
    specCat3_2d: "Амортизационные гелевые демпферы Alpha GEL против рокота мощных басов в клубе",
    specCat3_3: "Порталы в зале",
    specCat3_3d: "Финальный многополосный стэк Funktion-One Dance Stack DS1 Extreme",
    specCat3_4: "Процессинг сцены",
    specCat3_4d: "Цифровой распределитель звукового поля BSS Audio Soundweb London",
    specType: "ТИП МИКШЕРА",
    specTypeVal: "Цифровой DJM-V10",
    specPl: "МЕДИАПЛЕЕРЫ",
    specPlVal: "3x Pioneer CDJ-3000",
    specMon: "МОНИТОРИНГ",
    specMonVal: "Funktion-One PSM318",
    specCab: "КАБЕЛИ",
    specCabVal: "AudioQuest Carbon OPT",

    bookSub: "БРОНИРОВАНИЕ ВЫСТУПЛЕНИЙ",
    bookTitle: "Бронирование BECKERMAN",
    bookDesc: "Организация официальных выступлений, приватных сессий и клубных резиденций в Праге с передовым цифровым сетапом и мощным живым звуком.",
    bookLabelName: "Представитель (ФИО)",
    bookPlaceholderName: "Александр Вернер",
    bookLabelAgency: "Агентство / Клуб",
    bookPlaceholderAgency: "Клуб Duplex Прага",
    bookLabelEmail: "Электронная почта",
    bookPlaceholderEmail: "booking@duplex.cz",
    bookLabelDate: "Желаемая дата",
    bookPlaceholderDate: "28 Августа 2026",
    bookLabelVenue: "Название площадки",
    bookPlaceholderVenue: "Duplex Club (Главная сцена)",
    bookLabelCity: "Город проведения (Только Прага)",
    bookPlaceholderCity: "Прага, Чехия",
    bookLabelRider: "Конфигурация аудио-райдера",
    bookRiderOption1: "Райдер Pioneer CDJ-3000 + DJM-V10",
    bookRiderOption2: "Райдер Pioneer CDJ-3000 + DJM-900NXS2",
    bookRiderOption3: "Гибридный Live Performance сетап",
    bookLabelNotes: "Дополнительные требования (акустика, трансфер, спецэффекты)",
    bookPlaceholderNotes: "Пример: Требуется инсталляция порталов Funktion-One Res 5T и три раздельные линии мониторинга сцены",
    bookBtnSubmit: "Отправить официальный запрос",
    bookBtnSubmitting: "Регистрация запроса...",
    bookSuccessTitle: "Запрос зарегистрирован",
    bookSuccessText: "Менеджер тура BECKERMAN свяжется с вашим агентством по указанному адресу электронной почты в течение 24 часов для подтверждения технического райдера.",
    bookSuccessLoc: "Локация шоу:",
    bookSuccessRider: "Избранный райдер:",
    bookSuccessRiderType1: "АНАЛОГОВЫЙ/ЦИФРОВОЙ ВЫСОКОКЛАССНЫЙ CDJ-3000 + DJM-V10 RIDER",
    bookSuccessRiderType2: "СТАНДАРТНЫЙ НАБОР PIONEER CDJ-3000 + DJM-900NXS2",
    bookSuccessRiderType3: "ГИБРИДНАЯ LIVE PERFORMANCE СИНТЕЗ КАНАЛ СИСТЕМА",
    bookBtnNew: "Новое бронирование",
    bookBtnClose: "Свернуть",
    bookFooterRider: "Райдер",
    bookFooterRiderText: "Предоставляется",
    bookFooterSound: "Звук",
    bookFooterSoundText: "Балансный XLR тракт",
    bookFooterFormat: "Формат",
    bookFooterFormatText: "Клуб / Фестиваль / Корпоратив",
    btnBookSetBeckerman: "Забронировать Выступление",
    btnDetailsRider: "Посмотреть Спецификацию",
    btnNextToLiveConsole: "Перейти к Живой Консоли",
    btnNextToTechnicalRider: "Перейти к Техническому Райдеру",
    cueBtn1: "КЛУБНАЯ БОЧКА",
    cueBtn2: "ПЕРКУССИЯ В ДОЛЮ",
    labelClubResidencies: "Клубные Резиденции",
    labelCorporatePartnerships: "Корпоративные Партнеры",
    labelPitchFader: "Pitch / Темп Фейдер",
    labelRiderAudioCabling: "Аудио Коммутация",
    labelRiderMainConsole: "Основная Консоль",
    pitchDeepGroove: "-8% (Глубокий Грув)",
    pitchHardTechno: "+8% (Хард Техно)",
    sceneLiveConsoleTitle: "Интерактивная Консоль",
    sceneResidenciesDesc: "От резидентства в легендарных клубах Праги — Duplex, Roxy, Epic и Retro Music Hall — до масштабных мероприятий для глобальных гигантов, таких как Heineken, Netlify, Forbes и Porsche. Музыкальное сопровождение премиум-класса с полной энергоотдачей.",
    sceneResidenciesTitle: "География и Доверие",
    sceneTechnicalRiderDesc: "Безукоризненная точность сигнала. Выступления проводятся исключительно на чистом флагманском оборудовании с использованием балансных кабелей Neutrik Pro XLR золотого сечения для устранения искажений.",
    sceneTechnicalRiderTitle: "Спецификация Технического Райдера",
    simDesc: "Попробуйте себя в роли диджея. Запускайте синтезированные дорожки, изолируйте частоты с помощью поворотных ручек и следите за поведением стрелок VU-метров в реальном времени.",
    simSec1Title: "Активатор Звука & Темп",
    simSec2Title: "Живые Клубные Стрелки VU",
    simSec3Title: "Мелодический Мастер-Изолятор (Канал EQ)",
    simSec4TitleLP: "LP Фильтр Частотного Среза",
    simSec4TitleVol: "Мастер-Громкость Выхода",
    simSec5Title: "Интерактивные Hot-Cue Пэды",
    simSynthesizerLabel: "Синтезатор Шоу",
    valClubResidencies: "Duplex, Roxy, Epic, Radost FX",
    valCorporatePartnerships: "Porsche, Heineken, Forbes, Netlify"
  }
};
