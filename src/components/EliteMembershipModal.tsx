import { useState, FormEvent } from 'react';
import { 
  Crown, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Wifi, 
  UserCheck, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  PhoneCall,
  Send
} from 'lucide-react';

interface EliteMembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConnection?: () => void;
}

export default function EliteMembershipModal({ 
  isOpen, 
  onClose,
  onBookConnection 
}: EliteMembershipModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    area: 'Sonadanga',
    requirement: '100 Mbps VIP Dedicated Line',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [vipPassCode, setVipPassCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setVipPassCode('ELITE-' + Math.floor(10000 + Math.random() * 90000));
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      area: 'Sonadanga',
      requirement: '100 Mbps VIP Dedicated Line',
    });
    onClose();
  };

  const elitePerks = [
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: 'Dedicated 1:1 Optical Core',
      desc: 'Zero bandwidth sharing or contention. Full committed throughput 24 hours a day.'
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      title: '15-Min Priority Tech Dispatch',
      desc: 'Immediate VIP field technician on-site response guarantee across Khulna.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: '99.99% Enterprise SLA',
      desc: 'Dual-homed fiber routing with automated sub-millisecond fault-failover.'
    },
    {
      icon: <Wifi className="w-5 h-5 text-amber-400" />,
      title: 'Free Dual-Band Wi-Fi 6 ONT',
      desc: 'Complimentary high-gain Wi-Fi 6 optical router provided with optical power calibration.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-amber-400" />,
      title: 'Dedicated VIP Account Manager',
      desc: 'Direct priority phone line to your dedicated relationship officer, bypassing queues.'
    },
    {
      icon: <Globe className="w-5 h-5 text-amber-400" />,
      title: 'Static Public IPv4 Included',
      desc: 'Complimentary dedicated public IP for CCTV, gaming servers, and remote desktop access.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto font-display">
      
      {/* Blurred Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog with Gold / Amber Glass Glow */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900/90 border border-amber-500/40 shadow-2xl shadow-amber-500/10 text-white backdrop-blur-2xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Top Gold Shimmer Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500"></div>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-800 flex items-start justify-between gap-4 bg-gradient-to-b from-amber-500/10 to-transparent">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>SpeedNet Elite VIP Club</span>
              <Sparkles className="w-3 h-3 text-yellow-300" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
              Exclusive Privilege for High-Demand Users
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Engineered for executives, competitive esports athletes, software studios, and high-bandwidth households demanding zero latency and unconditional 24/7 priority.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          
          {/* Perks Grid */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-400" />
              <span>Elite VIP Membership Privileges</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {elitePerks.map((perk, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-amber-500/20 hover:border-amber-400/50 transition-all flex items-start gap-3.5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {perk.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VIP Reservation Form / Success State */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Reserve Elite VIP Membership</span>
                  </div>
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/30">
                    VIP Fast-Track
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">Contact Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="01XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">Khulna Coverage Area</label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none cursor-pointer"
                    >
                      <option value="Sonadanga">Sonadanga Residential Area</option>
                      <option value="Gollamari">Gollamari & KU Area</option>
                      <option value="Boyra">Boyra & Mujgunni</option>
                      <option value="Gagon Babu Road">Gagon Babu Road (NOC Zone)</option>
                      <option value="Khalishpur">Khalishpur Housing</option>
                      <option value="Shibbari">Shibbari & Royal Mor</option>
                      <option value="Nirala">Nirala Residential</option>
                      <option value="Daulatpur">Daulatpur & Religate</option>
                      <option value="Other Khulna">Other Khulna Area</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">Desired Bandwidth</label>
                    <select
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white focus:border-amber-400 focus:outline-none cursor-pointer"
                    >
                      <option value="80 Mbps VIP Dedicated Line">80 Mbps VIP Dedicated Line</option>
                      <option value="100 Mbps VIP Dedicated Line">100 Mbps VIP Dedicated Line</option>
                      <option value="150 Mbps VIP Dedicated Line">150 Mbps VIP Dedicated Line</option>
                      <option value="200 Mbps Gigabit VIP Line">200 Mbps Gigabit VIP Line</option>
                      <option value="Custom Leased Circuit">Custom Enterprise Leased Circuit</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>Instant priority call within 30 minutes</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Reserving...</span>
                    ) : (
                      <>
                        <span>Submit VIP Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-black text-white font-heading">
                    Elite VIP Priority Pass Issued!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you <strong className="text-amber-400">{formData.fullName}</strong>. Your application has been routed directly to our Senior Technical Account Director.
                  </p>
                </div>

                <div className="inline-block p-3 rounded-xl bg-slate-900 border border-amber-500/40 font-mono text-xs text-amber-300">
                  Priority VIP Pass ID: <span className="font-black text-white">{vipPassCode}</span>
                </div>

                <div className="pt-2 flex items-center justify-center gap-3">
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors cursor-pointer"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
