import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

// Generate time slots (9 AM to 6 PM, 30 min intervals)
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour < 18; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00 - ${hour.toString().padStart(2, '0')}:30`);
    if (hour < 17) {
      slots.push(`${hour.toString().padStart(2, '0')}:30 - ${(hour + 1).toString().padStart(2, '0')}:00`);
    }
  }
  return slots;
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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    selectedDate: '',
    selectedTime: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = generateTimeSlots();
  const availableDates = getAvailableDates();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Demo booking submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        selectedDate: '',
        selectedTime: ''
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 hero-gradient">
        <div className="container-wide px-4">
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
        <div className="container-wide px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl border border-border"
              >
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6" style={{ color: '#1b181f' }}>
                  {t('demo.formTitle')}
                </h2>
                
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{ color: '#146fb5' }} />
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#1b181f' }}>{t('demo.successTitle')}</h3>
                    <p style={{ color: '#4f4f4f' }}>{t('demo.successMessage')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                            onClick={() => handleChange('selectedDate', dateOption.date.toISOString())}
                            className={`p-3 rounded-lg border-2 transition-all text-sm font-medium ${
                              formData.selectedDate === dateOption.date.toISOString()
                                ? 'border-[#146fb5] bg-[#146fb5]/10'
                                : 'border-border hover:border-[#146fb5]/50'
                            }`}
                            style={{
                              color: formData.selectedDate === dateOption.date.toISOString() ? '#146fb5' : '#1b181f'
                            }}
                          >
                            <div className="font-bold">{dateOption.labelKey ? t(dateOption.labelKey) : dateOption.label}</div>
                            <div className="text-xs mt-1 opacity-70">{dateOption.formatted}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {formData.selectedDate && (
                      <div>
                        <label className="block text-sm font-medium mb-3" style={{ color: '#1b181f' }}>
                          <Clock className="w-4 h-4 inline mr-2" />
                          {t('demo.selectTime')}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                          {timeSlots.map((slot, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleChange('selectedTime', slot)}
                              className={`p-2 rounded-lg border transition-all text-sm ${
                                formData.selectedTime === slot
                                  ? 'border-[#146fb5] bg-[#146fb5]/10'
                                  : 'border-border hover:border-[#146fb5]/50'
                              }`}
                              style={{
                                color: formData.selectedTime === slot ? '#146fb5' : '#1b181f'
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
                      disabled={!formData.name || !formData.phone || !formData.email || !formData.selectedDate || !formData.selectedTime}
                    >
                      {t('demo.submit')}
                    </Button>
                  </form>
                )}
              </motion.div>

              {/* Info Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-gradient-to-br from-[#eaf2f8] to-white rounded-2xl p-6 sm:p-8 border border-[#146fb5]/20">
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
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#146fb5' }} />
                        <span style={{ color: '#4f4f4f' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-border shadow-md">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#1b181f' }}>
                    {t('demo.officeHours')}
                  </h3>
                  <p className="mb-2" style={{ color: '#4f4f4f' }}>
                    <strong>{t('demo.weekdays')}:</strong> 9:00 AM - 6:00 PM
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

