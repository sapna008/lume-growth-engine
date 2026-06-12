import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { ensureLeadDatabaseStructure, saveBookDemoLead } from "@/lib/leadStore";

// Generate time slots (9 AM to 6 PM, 30 min intervals)
const generateTimeSlots = () => {
  const slots = [];
  for (let minutes = 9 * 60 + 30; minutes < 18 * 60; minutes += 30) {
    const startHour = Math.floor(minutes / 60);
    const startMinute = minutes % 60;
    const endMinutes = minutes + 30;
    const endHour = Math.floor(endMinutes / 60);
    const endMinute = endMinutes % 60;

    slots.push(
      `${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')} - ${endHour.toString().padStart(2, '0')}:${endMinute.toString().padStart(2, '0')}`
    );
  }
  return slots;
};

const MIN_HOURS_FROM_NOW = 3;

// For "Today" only show slots that start at least MIN_HOURS_FROM_NOW from now
const getTimeSlotsForDate = (selectedDateISO: string, allSlots: string[]): string[] => {
  if (!selectedDateISO) return [];
  const selected = new Date(selectedDateISO);
  const now = new Date();
  const isToday =
    selected.getFullYear() === now.getFullYear() &&
    selected.getMonth() === now.getMonth() &&
    selected.getDate() === now.getDate();
  if (!isToday) return allSlots;
  const cutoff = new Date(now.getTime() + MIN_HOURS_FROM_NOW * 60 * 60 * 1000);
  return allSlots.filter((slot) => {
    const [start] = slot.split(' - ');
    const [h, m] = start.split(':').map(Number);
    const slotStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m);
    return slotStart >= cutoff;
  });
};

const formatDateToDDMMYYYY = (isoDate: string): string => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}-${month}-${year}`;
};

// Get dates for today, tomorrow, and day after tomorrow
const getAvailableDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 3; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push({
      date: date,
      label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : 'Day After',
      formatted: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      labelKey: i === 0 ? 'demo.today' : i === 1 ? 'demo.tomorrow' : 'demo.dayAfter'
    });
  }
  return dates;
};

export default function BookDemo() {
  const { t } = useLanguage();
  useSEO('Book a Demo – See Lume in Action', 'Schedule a free Lume demo. See digital billing, customer insights & campaigns. For Indian retailers.');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    void ensureLeadDatabaseStructure();
  }, []);

  const timeSlots = generateTimeSlots();
  const availableDates = getAvailableDates();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSubmitted(false);

    try {
      const templateParams = {
        ...formData,
        date: formatDateToDDMMYYYY(formData.date),
      };

      await emailjs.send(
        'service_xiq2pva',
        'template_1bnulym',
        templateParams,
        'IelFQbwyOKxBpHWFm'
      );

      await saveBookDemoLead(formData);

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: ''
      });
    } catch (error) {
      console.error('Failed to send demo request via EmailJS:', error);
      setErrorMessage(t('demo.errorMessage') || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => {
      const next = { ...prev, [field]: value };
      if (field === 'date') {
        const allowed = getTimeSlotsForDate(value, timeSlots);
        if (allowed.length > 0 && prev.time && !allowed.includes(prev.time)) {
          next.time = '';
        }
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section hero-gradient">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6" style={{ color: '#1b181f' }}>
              {t('demo.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8" style={{ color: '#4f4f4f' }}>
              {t('demo.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-spacing bg-gradient-to-b from-white to-slate-50">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-xl border border-border"
              >
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6" style={{ color: '#1b181f' }}>
                  {t('demo.formTitle')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitted && (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold">{t('demo.successTitle')}</h3>
                          <p className="text-sm">{t('demo.successMessage')}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {errorMessage && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      {errorMessage}
                    </div>
                  )}

                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#1b181f' }}>
                        <User className="w-4 h-4 inline mr-2" />
                        {t('demo.name')}
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder={t('demo.namePlaceholder')}
                        className="w-full"
                      />
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#1b181f' }}>
                        <Phone className="w-4 h-4 inline mr-2" />
                        {t('demo.phone')}
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder={t('demo.phonePlaceholder')}
                        className="w-full"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1b181f' }}>
                        <Mail className="w-4 h-4 inline mr-2" />
                        {t('demo.email')}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder={t('demo.emailPlaceholder')}
                        className="w-full"
                      />
                    </div>

                    {/* Date Selection */}
                    <div>
                      <label className="block text-sm font-medium mb-3" style={{ color: '#1b181f' }}>
                        <Calendar className="w-4 h-4 inline mr-2" />
                        {t('demo.selectDate')}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {availableDates.map((dateOption, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => handleChange('date', dateOption.date.toISOString())}
                            className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                              formData.date === dateOption.date.toISOString()
                                ? 'border-[var(--brand)] bg-[rgb(var(--brand-rgb)/0.1)]'
                                : 'border-border hover:border-[rgb(var(--brand-rgb)/0.5)]'
                            }`}
                            style={{
                              color: formData.date === dateOption.date.toISOString() ? 'var(--brand)' : '#1b181f'
                            }}
                          >
                            <div className="font-bold">{dateOption.labelKey ? t(dateOption.labelKey) : dateOption.label}</div>
                            <div className="text-xs mt-1 opacity-70">{dateOption.formatted}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {formData.date && (
                      <div>
                        <label className="block text-sm font-medium mb-3" style={{ color: '#1b181f' }}>
                          <Clock className="w-4 h-4 inline mr-2" />
                          {t('demo.selectTime')}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                          {getTimeSlotsForDate(formData.date, timeSlots).map((slot, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleChange('time', slot)}
                              className={`p-2 rounded-lg border transition-all text-sm ${
                                formData.time === slot
                                  ? 'border-[var(--brand)] bg-[rgb(var(--brand-rgb)/0.1)]'
                                  : 'border-border hover:border-[rgb(var(--brand-rgb)/0.5)]'
                              }`}
                              style={{
                                color: formData.time === slot ? 'var(--brand)' : '#1b181f'
                              }}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      variant="cta"
                      className="w-full shadow-lg"
                      disabled={
                        loading ||
                        !formData.name ||
                        !formData.phone ||
                        !formData.email ||
                        !formData.date ||
                        !formData.time
                      }
                    >
                      {loading ? 'Sending...' : t('demo.submit')}
                    </Button>
                  </form>
              </motion.div>

              {/* Info Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-[var(--brand-tint)] to-white rounded-2xl p-5 sm:p-6 border border-[rgb(var(--brand-rgb)/0.2)]">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#1b181f' }}>
                    {t('demo.whatToExpect')}
                  </h3>
                  <ul className="space-y-3">
                    {[
                      t('demo.expect1'),
                      t('demo.expect2'),
                      t('demo.expect3'),
                      t('demo.expect4'),
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--brand)' }} />
                        <span style={{ color: '#4f4f4f' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-border shadow-md">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#1b181f' }}>
                    {t('demo.officeHours')}
                  </h3>
                  <p className="mb-2" style={{ color: '#4f4f4f' }}>
                    <strong>{t('demo.weekdays')}:</strong> 9:30 AM - 6:00 PM
                  </p>
                  <p style={{ color: '#4f4f4f' }}>
                    <strong>{t('demo.weekend')}:</strong> {t('demo.closed')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

