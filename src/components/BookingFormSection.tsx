import { useState, useEffect, FormEvent } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  MapPin, 
  Package, 
  MessageSquare, 
  User, 
  ShieldCheck, 
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { ISP_PACKAGES, FAQ_LIST } from '../data/ispData';
import { PackageItem } from '../types';

interface BookingFormSectionProps {
  selectedPackage?: PackageItem | null;
  selectedArea?: string;
  selectedServiceName?: string;
}

export default function BookingFormSection({ 
  selectedPackage, 
  selectedArea,
  selectedServiceName 
}: BookingFormSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    packageId: selectedPackage ? selectedPackage.id : 'hyper-80',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, packageId: selectedPackage.id }));
    }
  }, [selectedPackage]);

  useEffect(() => {
    if (selectedArea) {
      setFormData(prev => ({ 
        ...prev, 
        address: prev.address ? `${prev.address}, ${selectedArea}` : `${selectedArea}, Khulna` 
      }));
    }
  }, [selectedArea]);

  useEffect(() => {
    if (selectedServiceName) {
      setFormData(prev => ({ 
        ...prev, 
        message: `Interested in Service: ${selectedServiceName}` 
      }));
    }
  }, [selectedServiceName]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.address.trim()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomTicket = 'SN-' + Math.floor(100000 + Math.random() * 900000);
      setTicketNumber(randomTicket);
    }, 850);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      address: '',
      packageId: 'hyper-80',
      message: '',
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200 font-display">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 text-orange-900 text-xs font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Fast Deployment • 24/7 Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Book Your Connection{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
              Today
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Submit your connection request below. Our field technician team will verify optical cable line viability and contact you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
            
            {isSuccess ? (
              <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                    Application Successfully Received!
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base font-normal">
                    The Speed Net Khulna deployment desk will reach out to you shortly via phone.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-emerald-200 max-w-sm mx-auto space-y-1">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    Your Tracking Ticket Reference:
                  </div>
                  <div className="text-3xl font-black text-emerald-700 font-mono tracking-widest">
                    {ticketNumber}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    (Standard dispatch within 24 hours with optical testing)
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-4 h-4 text-orange-600" />
                    <span>Subscriber Details</span>
                  </span>
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    Khulna Metro Offer
                  </span>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Phone & Package Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="01XXXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 text-slate-900 placeholder-slate-400 text-sm outline-none transition-all font-mono"
                      />
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                      Desired Package <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.packageId}
                        onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 text-slate-900 text-sm outline-none transition-all cursor-pointer font-mono"
                      >
                        {ISP_PACKAGES.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} ({pkg.speed} Mbps) - ৳{pkg.price}/mo
                          </option>
                        ))}
                      </select>
                      <Package className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* Complete Address */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                    Installation Address & Area <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="House / Holding, Road, Area (e.g. Sonadanga R/A, Khulna)"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                    />
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                    Special Inquiries or Instructions (Optional)
                  </label>
                  <div className="relative">
                    <textarea
                      rows={3}
                      placeholder="Add any specific questions or router preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 text-slate-900 placeholder-slate-400 text-sm outline-none transition-all resize-none"
                    ></textarea>
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-4" />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-base flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-600/20 cursor-pointer disabled:opacity-70 active:scale-98"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Submitting Request...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Connection Request</span>
                    </>
                  )}
                </button>

                <div className="text-center text-xs text-slate-500 flex items-center justify-center gap-2 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>No hidden installation costs • Free optical cable testing</span>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                    Frequently Asked Questions
                  </h3>
                  <div className="text-xs text-slate-500">
                    Helpful guides regarding Khulna fiber internet
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {FAQ_LIST.map((faq, index) => {
                  const isOpen = openFaqIndex === index;

                  return (
                    <div
                      key={index}
                      className={`rounded-xl border transition-all overflow-hidden ${
                        isOpen 
                          ? 'border-orange-300 bg-orange-50/40' 
                          : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-slate-900 cursor-pointer"
                      >
                        <span className="leading-snug">{faq.q}</span>
                        <ChevronDown 
                          className={`w-4 h-4 text-orange-600 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 animate-in fade-in duration-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Direct Support Card */}
              <div className="mt-6 p-4 rounded-2xl bg-slate-900 text-white flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs text-slate-300 font-semibold">Have more questions?</div>
                  <div className="text-sm font-black text-white">Call Central Hotline 24/7</div>
                </div>
                <a
                  href="tel:09639333111"
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow-xs transition-colors font-mono"
                >
                  09639333111
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
