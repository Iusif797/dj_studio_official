import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Award, Cpu, Shield } from 'lucide-react';
import { BookingForm } from '../types';
import { playGlassTap, playRotaryClick } from './AudioPlayer';
import { translations } from '../translations';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'en' | 'cs' | 'ru';
}

export default function ReservationModal({ isOpen, onClose, lang = 'en' }: BookingModalProps) {
  const t = translations[lang] || translations.en;

  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    email: '',
    agency: '',
    eventDate: '',
    venueName: '',
    venueCity: 'Prague',
    riderType: 'analogue-rotary',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    playGlassTap();
    
    setTimeout(() => {
      // Local storage persistence for booking inquiries
      const bookings = JSON.parse(localStorage.getItem('beckerman_bookings') || '[]');
      bookings.push({
        ...formData,
        id: Math.random().toString(36).substring(2, 11),
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('beckerman_bookings', JSON.stringify(bookings));

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1400);
  };

  const handleReset = () => {
    playGlassTap();
    setFormData({
      name: '',
      email: '',
      agency: '',
      eventDate: '',
      venueName: '',
      venueCity: 'Prague',
      riderType: 'analogue-rotary',
      notes: ''
    });
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  return (
    <div id="booking-drawer" className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto overscroll-contain">
      {/* Background overlay close */}
      <div className="absolute inset-0" onClick={() => { playGlassTap(); onClose(); }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 20 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl bg-[#090909] border border-white/10 p-4 sm:p-6 md:p-10 z-10 my-4 sm:my-8"
      >
        {/* Close button with luxury feel */}
        <button 
          onClick={() => { playGlassTap(); onClose(); }}
          className="absolute top-6 right-6 p-2 border border-white/10 hover:border-white/20 text-white/50 hover:text-white transition-all outline-none focus:outline-none rounded-none cursor-pointer"
        >
          <X size={12} />
        </button>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="order-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="space-y-1">
                <span className="font-mono text-[8px] tracking-[0.3em] text-[#ff7849] uppercase block font-medium">{t.bookSub}</span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-white tracking-wide">{t.bookTitle}</h3>
                <p className="font-sans text-xs text-white/40 leading-relaxed max-w-sm">
                  {t.bookDesc}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Agent Name and Agency */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group border-b border-white/10 focus-within:border-white/30 pb-1.5 transition-all">
                    <label className="font-mono text-[8px] tracking-[0.1em] text-white/40 group-focus-within:text-[#ff7849] uppercase block mb-1">{t.bookLabelName}</label>
                    <input 
                      type="text"
                      required
                      placeholder={t.bookPlaceholderName}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-white font-light placeholder-white/20 focus:ring-0 px-0 py-0.5"
                    />
                  </div>

                  <div className="relative group border-b border-white/10 focus-within:border-white/30 pb-1.5 transition-all">
                    <label className="font-mono text-[8px] tracking-[0.1em] text-white/40 group-focus-within:text-[#ff7849] uppercase block mb-1">{t.bookLabelAgency}</label>
                    <input 
                      type="text"
                      required
                      placeholder={t.bookPlaceholderAgency}
                      value={formData.agency}
                      onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-white font-light placeholder-white/20 focus:ring-0 px-0 py-0.5"
                    />
                  </div>
                </div>

                {/* Email and Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group border-b border-white/10 focus-within:border-white/30 pb-1.5 transition-all">
                    <label className="font-mono text-[8px] tracking-[0.1em] text-white/40 group-focus-within:text-[#ff7849] uppercase block mb-1">{t.bookLabelEmail}</label>
                    <input 
                      type="email"
                      required
                      placeholder={t.bookPlaceholderEmail}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-white font-light placeholder-white/20 focus:ring-0 px-0 py-0.5"
                    />
                  </div>

                  <div className="relative group border-b border-white/10 focus-within:border-white/30 pb-1.5 transition-all">
                    <label className="font-mono text-[8px] tracking-[0.1em] text-white/40 group-focus-within:text-[#ff7849] uppercase block mb-1">{t.bookLabelDate}</label>
                    <input 
                      type="text"
                      required
                      placeholder={t.bookPlaceholderDate}
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-white font-light placeholder-white/20 focus:ring-0 px-0 py-0.5"
                    />
                  </div>
                </div>

                {/* Venue Name and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative group border-b border-white/10 focus-within:border-white/30 pb-1.5 transition-all">
                    <label className="font-mono text-[8px] tracking-[0.1em] text-white/40 group-focus-within:text-[#ff7849] uppercase block mb-1">{t.bookLabelVenue}</label>
                    <input 
                      type="text"
                      required
                      placeholder={t.bookPlaceholderVenue}
                      value={formData.venueName}
                      onChange={(e) => setFormData({ ...formData, venueName: e.target.value })}
                      className="w-full bg-transparent border-none outline-none text-xs text-white font-light placeholder-white/20 focus:ring-0 px-0 py-0.5"
                    />
                  </div>

                  <div className="relative group border-b border-white/10 focus-within:border-white/30 pb-1.5 transition-all opacity-85">
                    <label className="font-mono text-[8px] tracking-[0.1em] text-white/40 group-focus-within:text-[#ff7849] uppercase block mb-1">{t.bookLabelCity}</label>
                    <input 
                      type="text"
                      readOnly
                      required
                      placeholder={t.bookPlaceholderCity}
                      value={formData.venueCity}
                      className="w-full bg-transparent border-none outline-none text-xs text-[#ff7849] font-medium placeholder-white/20 focus:ring-0 px-0 py-0.5 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Option: Mixer Rider Type */}
                <div className="space-y-2">
                  <label className="font-mono text-[8px] tracking-[0.1em] text-white/45 uppercase block">{t.bookLabelRider}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'flagship-v10', name: 'Digital Studio', desc: 'V10 & CDJ-3000' },
                      { id: 'digital-pioneer', name: 'Standard CDJ', desc: 'CDJ-3000 & DJM' },
                      { id: 'hybrid-live', name: 'Hybrid Synth', desc: 'DJS-1000 & Live' }
                    ].map((fin) => (
                      <button
                        key={fin.id}
                        type="button"
                        onClick={() => { playRotaryClick(); setFormData({ ...formData, riderType: fin.id as any }); }}
                        className={`text-left p-2.5 border transition-all rounded-none ${formData.riderType === fin.id ? 'border-[#ff7849] bg-[#ff7849]/5' : 'border-white/5 bg-black/40 hover:border-white/20'}`}
                      >
                        <p className={`text-[10px] font-mono uppercase tracking-wider ${formData.riderType === fin.id ? 'text-[#ff7849]' : 'text-white'}`}>{fin.name}</p>
                        <p className="text-[8px] text-white/30 mt-0.5">{fin.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special requests */}
                <div className="relative group border-b border-white/10 focus-within:border-white/30 pb-1 transition-all">
                  <label className="font-mono text-[8px] tracking-[0.1em] text-white/40 group-focus-within:text-[#ff7849] uppercase block mb-1">{t.bookLabelNotes}</label>
                  <textarea 
                    rows={1}
                    placeholder={t.bookPlaceholderNotes}
                    value={formData.notes || ''}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-transparent border-none outline-none text-xs text-white font-light placeholder-white/20 focus:ring-0 px-0 py-0.5 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full uppercase font-mono text-xs tracking-[0.2em] bg-white text-black hover:bg-[#ff7849] hover:text-white transition-all duration-500 py-3.5 font-normal rounded-none cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-3.5 h-3.5 border border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    t.bookBtnSubmit
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-6 space-y-5"
            >
              <div className="flex justify-center">
                <div className="p-3 bg-white/5 border border-white/10 rounded-none text-[#ff7849] animate-pulse">
                  <CheckCircle size={32} />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-xl md:text-2xl text-white font-light tracking-wide">{t.bookSuccessTitle}</h4>
                <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm mx-auto">
                  {t.bookSuccessText}
                </p>
              </div>

              <div className="border border-white/5 bg-black/40 p-3.5 font-mono text-[9px] text-white/40 tracking-wider inline-block text-left uppercase">
                <div className="flex justify-between gap-8 border-b border-white/5 pb-1 mb-1">
                  <span>{t.bookSuccessLoc}</span>
                  <span className="text-white/60">{formData.venueCity.toUpperCase()}</span>
                </div>
                <div className="flex justify-between gap-8">
                  <span>{t.bookSuccessRider}</span>
                  <span className="text-[#ff7849]">
                    {formData.riderType === 'flagship-v10' ? t.bookSuccessRiderType1 : formData.riderType === 'digital-pioneer' ? t.bookSuccessRiderType2 : t.bookSuccessRiderType3}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 border border-white/10 hover:border-white/20 text-white/40 hover:text-white/80 transition-colors uppercase font-mono text-[9px] tracking-wider py-2.5 rounded-none cursor-pointer"
                >
                  {t.bookBtnNew}
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-white text-black hover:bg-neutral-200 transition-colors uppercase font-mono text-[9px] tracking-wider py-2.5 rounded-none cursor-pointer"
                >
                  {t.bookBtnClose}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Brand core values */}
        <div className="border-t border-white/10 pt-5 mt-6 grid grid-cols-3 gap-2 text-center">
          <div className="space-y-1">
            <Award className="w-3.5 h-3.5 mx-auto text-white/30" />
            <p className="font-mono text-[8px] text-white/40 uppercase">{t.bookFooterRider}</p>
            <p className="font-sans text-[8px] text-white mt-0.5">{t.bookFooterRiderText}</p>
          </div>
          <div className="space-y-1">
            <Cpu className="w-3.5 h-3.5 mx-auto text-white/30" />
            <p className="font-mono text-[8px] text-white/40 uppercase">{t.bookFooterSound}</p>
            <p className="font-sans text-[8px] text-white mt-0.5">{t.bookFooterSoundText}</p>
          </div>
          <div className="space-y-1">
            <Shield className="w-3.5 h-3.5 mx-auto text-white/30" />
            <p className="font-mono text-[8px] text-white/40 uppercase">{t.bookFooterFormat}</p>
            <p className="font-sans text-[8px] text-white mt-0.5">{t.bookFooterFormatText}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
