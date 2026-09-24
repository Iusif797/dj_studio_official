import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Mail, Calendar, Music } from 'lucide-react';
import { BookingForm } from '../types';
import { playGlassTap } from './AudioPlayer';
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
    notes: '',
  });

  const [contact, setContact] = useState('');
  const [eventType, setEventType] = useState('club');
  const [message, setMessage] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    playGlassTap();

    setTimeout(() => {
      const bookings = JSON.parse(localStorage.getItem('beckerman_bookings') || '[]');
      bookings.push({
        name: formData.name,
        contact,
        eventDate: formData.eventDate,
        eventType,
        message,
        id: Math.random().toString(36).substring(2, 11),
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem('beckerman_bookings', JSON.stringify(bookings));
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    playGlassTap();
    setFormData({ name: '', email: '', agency: '', eventDate: '', venueName: '', venueCity: 'Prague', riderType: 'analogue-rotary', notes: '' });
    setContact('');
    setEventType('club');
    setMessage('');
    setIsSubmitted(false);
  };

  if (!isOpen) return null;

  const labels: Record<string, { name: string; contact: string; date: string; type: string; msg: string; typeOptions: Record<string, string> }> = {
    en: {
      name: 'Your name',
      contact: 'Phone or email',
      date: 'Event date',
      type: 'Event format',
      msg: 'Message (optional)',
      typeOptions: { club: 'Club / Bar', corporate: 'Corporate', private: 'Private / Wedding', other: 'Other' },
    },
    cs: {
      name: 'Vaše jméno',
      contact: 'Telefon nebo email',
      date: 'Datum akce',
      type: 'Formát akce',
      msg: 'Zpráva (volitelné)',
      typeOptions: { club: 'Klub / Bar', corporate: 'Firemní', private: 'Soukromá / Svatba', other: 'Jiné' },
    },
    ru: {
      name: 'Ваше имя',
      contact: 'Телефон или email',
      date: 'Дата мероприятия',
      type: 'Формат',
      msg: 'Сообщение (необязательно)',
      typeOptions: { club: 'Клуб / Бар', corporate: 'Корпоратив', private: 'Частное / Свадьба', other: 'Другое' },
    },
  };

  const L = labels[lang] || labels.en;

  return (
    <div id="booking-drawer" role="dialog" aria-modal="true" aria-labelledby="booking-title" className="fixed inset-0 z-[70] bg-black/85 backdrop-blur-md flex items-start lg:items-center justify-center p-0 sm:p-4 overflow-y-auto overscroll-contain">
      <div className="absolute inset-0" onClick={() => { playGlassTap(); onClose(); }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 16 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full min-h-[100svh] sm:min-h-0 max-w-lg bg-[#0a0a0d] border-x sm:border border-white/10 p-6 pt-14 sm:p-7 z-10 sm:my-8 shadow-[0_32px_100px_rgba(0,0,0,0.7)] rounded-none"
      >
        <button
          onClick={() => { playGlassTap(); onClose(); }}
          aria-label="Close"
          className="absolute z-20 top-4 right-4 w-9 h-9 flex items-center justify-center border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all bg-black/40 cursor-pointer"
        >
          <X size={14} />
        </button>

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
              <div className="space-y-2 pr-8">
                <span className="font-mono text-[8px] tracking-[0.3em] text-[#ff7849] uppercase block font-medium">{t.bookSub}</span>
                <h3 id="booking-title" className="font-serif text-2xl sm:text-3xl font-light text-white tracking-wide leading-none">{t.bookTitle}</h3>
                <p className="font-sans text-xs text-white/45 leading-relaxed">{t.bookDesc}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="booking-field">
                  <label className="booking-field__label">{L.name}</label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ru' ? 'Иван Петров' : lang === 'cs' ? 'Jan Novák' : 'John Doe'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="booking-field__control"
                  />
                </div>

                <div className="booking-field">
                  <label className="booking-field__label">{L.contact}</label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ru' ? '+420 777 000 000 / email@example.com' : '+420 777 000 000 / email@example.com'}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="booking-field__control"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="booking-field">
                    <label className="booking-field__label">{L.date}</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="booking-field__control [color-scheme:dark]"
                    />
                  </div>

                  <div className="booking-field">
                    <label className="booking-field__label">{L.type}</label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="booking-field__control bg-transparent cursor-pointer"
                    >
                      <option value="club" className="bg-[#0a0a0d]">{L.typeOptions.club}</option>
                      <option value="corporate" className="bg-[#0a0a0d]">{L.typeOptions.corporate}</option>
                      <option value="private" className="bg-[#0a0a0d]">{L.typeOptions.private}</option>
                      <option value="other" className="bg-[#0a0a0d]">{L.typeOptions.other}</option>
                    </select>
                  </div>
                </div>

                <div className="booking-field">
                  <label className="booking-field__label">{L.msg}</label>
                  <textarea
                    rows={3}
                    placeholder={lang === 'ru' ? 'Расскажите про площадку, время, формат...' : lang === 'cs' ? 'Místo, čas, formát akce...' : 'Venue, time, format...'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="booking-field__control resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full min-h-12 uppercase font-mono text-[10px] tracking-[0.2em] bg-white text-black hover:bg-[#ff7849] hover:text-white disabled:opacity-60 transition-all duration-300 py-3.5 font-medium cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? <span className="w-3.5 h-3.5 border border-black/30 border-t-black rounded-full animate-spin" /> : t.bookBtnSubmit}
                </button>

                <p className="text-center font-mono text-[7px] tracking-widest uppercase text-white/25">
                  {lang === 'ru' ? 'Отвечаю в течение 24 часов' : lang === 'cs' ? 'Odpověď do 24 hodin' : 'Reply within 24 hours'} · {lang === 'ru' ? 'Прага и Европа' : 'Prague & Europe'}
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-center py-8 space-y-5">
              <div className="flex justify-center">
                <span className="p-3 bg-[#ff7849]/10 border border-[#ff7849]/20 text-[#ff7849] rounded-full">
                  <CheckCircle size={28} />
                </span>
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-xl text-white font-light">{t.bookSuccessTitle}</h4>
                <p className="font-sans text-xs text-white/50 leading-relaxed max-w-sm mx-auto">{t.bookSuccessText}</p>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={handleReset} className="flex-1 min-h-11 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-colors uppercase font-mono text-[9px] tracking-wider py-3 cursor-pointer">
                  {t.bookBtnNew}
                </button>
                <button onClick={onClose} className="flex-1 min-h-11 bg-white text-black hover:bg-neutral-200 transition-colors uppercase font-mono text-[9px] tracking-wider py-3 cursor-pointer">
                  {t.bookBtnClose}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="border-t border-white/10 pt-4 mt-6 grid grid-cols-3 gap-2 text-center">
          <div className="space-y-1">
            <Mail className="w-3.5 h-3.5 mx-auto text-white/30" />
            <p className="font-mono text-[7px] text-white/40 uppercase tracking-widest">Contact</p>
            <p className="font-sans text-[8px] text-white/60">Direct</p>
          </div>
          <div className="space-y-1">
            <Calendar className="w-3.5 h-3.5 mx-auto text-white/30" />
            <p className="font-mono text-[7px] text-white/40 uppercase tracking-widest">Date</p>
            <p className="font-sans text-[8px] text-white/60">Flexible</p>
          </div>
          <div className="space-y-1">
            <Music className="w-3.5 h-3.5 mx-auto text-white/30" />
            <p className="font-mono text-[7px] text-white/40 uppercase tracking-widest">Sound</p>
            <p className="font-sans text-[8px] text-white/60">Pioneer CDJ-2000</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
