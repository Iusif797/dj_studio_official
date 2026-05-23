export interface DJMixerState {
  masterVolume: number; // 0-100
  bassEQ: number; // -12 to +6 dB
  midEQ: number; // -12 to +6 dB
  trebleEQ: number; // -12 to +6 dB
  filterFreq: number; // 200 - 15000 Hz
  activeEffect: 'none' | 'delay' | 'reverb' | 'gate';
  synthPlaying: boolean;
  bpm: number;
}

export interface BookingForm {
  name: string;
  email: string;
  agency: string;
  eventDate: string;
  venueName: string;
  venueCity: string;
  notes?: string;
  riderType: 'analogue-rotary' | 'digital-pioneer' | 'hybrid-live';
}

export interface SpecGroup {
  category: string;
  items: {
    name: string;
    detail: string;
  }[];
}


