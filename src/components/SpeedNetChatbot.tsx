import { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Bot, 
  Sparkles, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  ChevronRight,
  Film,
  Building2,
  Package,
  CreditCard,
  Zap,
  Info
} from 'lucide-react';
import { ISP_PACKAGES, COVERAGE_AREAS, ISP_OFFICES } from '../data/ispData';
import { ChatMessage, PackageItem } from '../types';

interface SpeedNetChatbotProps {
  onSelectPackage?: (pkg: PackageItem) => void;
  onBookClick?: () => void;
}

export default function SpeedNetChatbot({ 
  onSelectPackage, 
  onBookClick 
}: SpeedNetChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: "আসসালামু আলাইকুম! স্পিড নেট অ্যাসিস্ট্যান্ট (Assistant)-এ আপনাকে স্বাগতম।\n\nআমি আপনাকে বিল পরিশোধ, নতুন ফাইবার লাইন গ্রহণ, লাইভ এফটিপি ও মুভি সার্ভার লিংক, আপনার এলাকার এরিয়া ম্যানেজার ও শাখা অফিসের কাস্টমার কেয়ার সংক্রান্ত সার্বিক তথ্য দিয়ে সাহায্য করতে পারি।",
      timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickActionChips = [
    { label: '💳 বিল পে করার নিয়ম', query: 'bill' },
    { label: '🔌 নতুন কানেকশন কীভাবে নিব?', query: 'connection' },
    { label: '🎬 FTP সার্ভার লিংক', query: 'ftp' },
    { label: '📍 এলাকার ম্যানেজার ও নম্বর', query: 'area_list' },
    { label: '📦 ইন্টারনেট প্যাকেজসমূহ', query: 'packages' },
    { label: '🏢 শাখা অফিসের সাপোর্ট নম্বর', query: 'offices' },
  ];

  const handleCopy = (text: string, type: 'link' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'link') {
      setCopiedLink(text);
      setTimeout(() => setCopiedLink(null), 2000);
    } else {
      setCopiedPhone(text);
      setTimeout(() => setCopiedPhone(null), 2000);
    }
  };

  const getWhatsAppUrl = (phone: string, text?: string) => {
    const clean = phone.replace(/[^0-9]/g, '');
    const intl = clean.startsWith('880') 
      ? clean 
      : clean.startsWith('0') 
        ? '880' + clean.slice(1) 
        : '880' + clean;
    const msg = encodeURIComponent(text || 'Hello SpeedNet Support! I need assistance.');
    return `https://wa.me/${intl}?text=${msg}`;
  };

  const processBanglaQuery = (input: string): { 
    text: string; 
    links?: { title: string; url: string }[];
    contactCard?: ChatMessage['contactCard'];
    suggestedAction?: ChatMessage['suggestedAction'];
  } => {
    const q = input.toLowerCase();

    // 1. বিল পরিশোধ (Bill Payment)
    if (q.includes('bill') || q.includes('বিল') || q.includes('pay') || q.includes('পে') || q.includes('টাকা') || q.includes('পরিশোধ') || q.includes('bkash') || q.includes('বিকাশ') || q.includes('নগদ') || q.includes('rocket')) {
      return {
        text: `💳 স্পিড নেট বিল পরিশোধের সহজ নিয়মাবলী:\n\n১. বিকাশ অ্যাপ (bKash):\n• বিকাশ অ্যাপে 'Pay Bill' অপশনে যান\n• 'Internet' অপশনে 'Speed Net Khulna' সিলেক্ট করুন\n• আপনার কাস্টমার আইডি (Customer ID) দিয়ে পিন দিলে তাৎক্ষণিক রিসিট পাবেন।\n\n২. নগদ ও রকেট (Nagad / Rocket):\n• সরাসরি পে-বিল অপশনে আমাদের বিলার কোড দিন\n\n৩. ভিসা/মাস্টারকার্ড ও অনলাইন গেটওয়ে:\n• স্পিড নেট সেলফ কেয়ার পোর্টাল থেকে সরাসরি বিল দিন\n\n৪. সরাসরি শাখা অফিসে:\n• যেকোনো শাখা কাউন্টারে ক্যাশ বিল জমা দেওয়া যায়\n\n📌 সরকারি নিয়মানুযায়ী সকল প্যাকেজে ৫% ভ্যাট অন্তর্ভুক্ত, কোনো গোপন চার্জ নেই।`
      };
    }

    // 2. নতুন কানেকশন নেওয়ার নিয়ম (New Connection)
    if (q.includes('connection') || q.includes('কানেকশন') || q.includes('সংযোগ') || q.includes('নতুন') || q.includes('নিতে চাই') || q.includes('আবেদন') || q.includes('কী লাগবে') || q.includes('লাইন')) {
      return {
        text: `🔌 নতুন অপটিক্যাল ফাইবার সংযোগের সহজ ধাপসমূহ:\n\n📋 প্রয়োজনীয় কাগজপত্র:\n• জাতীয় পরিচয়পত্র (NID) বা পাসপোর্টের ফটোকপি\n• ১ কপি পাসপোর্ট সাইজ ছবি\n\n⚡ সংযোগ গ্রহণের প্রক্রিয়া:\n১. নিচে 'অনলাইনে সংযোগের আবেদন করুন' বাটনে ক্লিক করে ফর্ম পূরণ করুন\n২. আমাদের টিম আপনার লোকেশনে ফাইবার সিগন্যাল যাচাই করবে\n৩. সর্বোচ্চ ২৪ ঘণ্টার মধ্যে ফ্রি রাউটার সেটআপ সহ লাইন চালু করা হবে।\n\n📞 জরুরি হেল্পলাইন: 01910 365533`,
        suggestedAction: {
          type: 'book',
          label: 'অনলাইনে সংযোগের আবেদন করুন'
        }
      };
    }

    // 3. FTP সার্ভার লিংক (FTP Server Links)
    if (q.includes('ftp') || q.includes('এফটিপি') || q.includes('মুভি') || q.includes('ডাউনলোড') || q.includes('সার্ভার') || q.includes('movie') || q.includes('link') || q.includes('লিংক')) {
      return {
        text: `🎬 স্পিড নেট লাইভ হাই-স্পিড FTP সার্ভার লিংক:\n\nআমাদের ফাইবার নেটওয়ার্কে ১০০+ Mbps থেকে গিগাবিট ফুল স্পিডে বাফারিং ছাড়া ডাউনলোড ও লাইভ স্ট্রিমিং উপভোগ করুন:\n\n১. 4K Media Hub (10.16.100.10)\nসর্বশেষ 4K HDR মুভি, বাংলা, হিন্দি ও ইংলিশ ড্রামা সিরিজ।\n\n২. Circle FTP & Software Mirror\nলেটেস্ট পিসি গেমস, সফটওয়্যার, উইন্ডোজ/লিনাক্স আইএসও ও প্যাচ।\n\n৩. Speed Net Live TV & Sports Cache\n১০০+ লাইভ টিভি চ্যানেল ও সরাসরি খেলাধুলা।`,
        links: [
          { title: '🎬 4K Media Hub (10.16.100.10)', url: 'http://10.16.100.10' },
          { title: '🎮 Circle FTP Games & Software', url: 'http://circleftp.net' },
          { title: '📺 Speed Net Live TV', url: 'http://tv.speednetbd.com' }
        ]
      };
    }

    // 4. এলাকা ভিত্তিক অ্যাসাইনড ম্যানেজার ও মোবাইল নম্বর অনুসন্ধান
    const matchedArea = COVERAGE_AREAS.find(a => 
      q.includes(a.name.toLowerCase()) || 
      q.includes(a.nameBn.toLowerCase()) || 
      q.includes(a.district.toLowerCase()) ||
      (q.includes('noc') || q.includes('এনওসি') || q.includes('সেন্ট্রাল') || q.includes('হেড')) && a.id === 'speednet-noc' ||
      (q.includes('sonadanga') || q.includes('সোনাডাঙ্গা')) && a.id === 'sonadanga' ||
      (q.includes('boyra') || q.includes('বয়রা')) && a.id === 'boyra' ||
      (q.includes('khalishpur') || q.includes('খালিশপুর')) && a.id === 'khalishpur' ||
      (q.includes('shibbari') || q.includes('শিববাড়ি') || q.includes('রয়েল')) && a.id === 'shibbari' ||
      (q.includes('nirala') || q.includes('নিরালা')) && a.id === 'nirala' ||
      (q.includes('gollamari') || q.includes('গল্লামারী')) && a.id === 'gollamari' ||
      (q.includes('daulatpur') || q.includes('দৌলতপুর')) && a.id === 'daulatpur' ||
      (q.includes('rupsha') || q.includes('রূপসা')) && a.id === 'rupsha' ||
      (q.includes('dighalia') || q.includes('দিঘলিয়া')) && a.id === 'dighalia' ||
      (q.includes('bagerhat') || q.includes('বাগেরহাট')) && a.id === 'bagerhat' ||
      (q.includes('jessore') || q.includes('যশোর')) && a.id === 'jessore' ||
      (q.includes('satkhira') || q.includes('সাতক্ষীরা')) && a.id === 'satkhira'
    );

    if (matchedArea) {
      return {
        text: `📍 ${matchedArea.nameBn} - কাস্টমার সাপোর্ট ও হেল্পডেস্ক:\n\nআপনার এলাকায় দ্রুত সংযোগ ও সরাসরি টেকনিক্যাল সাপোর্টের জন্য নিচে কল অথবা WhatsApp বাটনে চাপ দিন:`,
        contactCard: {
          areaName: matchedArea.nameBn,
          managerName: matchedArea.managerName,
          managerPhone: matchedArea.managerPhone,
          address: matchedArea.address
        },
        suggestedAction: {
          type: 'call',
          label: `কল করুন: ${matchedArea.managerPhone}`,
          value: matchedArea.managerPhone
        }
      };
    }

    // 4b. সাধারণ এলাকা জানতে চাইলে তালিকা প্রদর্শন
    if (q.includes('area') || q.includes('এলাকা') || q.includes('ম্যানেজার') || q.includes('manager') || q.includes('কভারেজ') || q.includes('এলাকার') || q.includes('ডেস্ক') || q.includes('কেয়ার')) {
      const areaList = COVERAGE_AREAS.slice(0, 8).map(a => `• ${a.nameBn}: ${a.managerName} (${a.managerPhone})`).join('\n');
      return {
        text: `📍 খুলনার প্রধান অঞ্চলগুলোর কাস্টমার কেয়ার ও সাপোর্ট ডেস্ক:\n\n${areaList}\n\nআপনার নির্দিষ্ট এলাকার নাম লিখুন (যেমন: সোনাডাঙ্গা, বয়রা, খালিশপুর, গল্লামারী, শিববাড়ি, নিরালা, রূপসা, দৌলতপুর, বাগেরহাট, যশোর, সাতক্ষীরা) তাহলে আমি তাৎক্ষণিক সংশ্লিষ্ট তথ্য ও কাস্টমার কেয়ারের নম্বর দেব।`
      };
    }

    // 5. প্যাকেজসমূহ ও মূল্য (Packages & Prices)
    if (q.includes('package') || q.includes('প্যাকেজ') || q.includes('speed') || q.includes('স্পিড') || q.includes('দাম') || q.includes('খরচ') || q.includes('রেট') || q.includes('price')) {
      const pkgList = ISP_PACKAGES.map(p => `• ${p.name}: ${p.speed} Mbps — ৳${p.price}/মাস (ভ্যাটসহ)`).join('\n');
      return {
        text: `📦 স্পিড নেট আনলিমিটেড ফাইবার ব্রডব্যান্ড প্যাকেজ তালিকা:\n\n${pkgList}\n\n✨ কোনো ডেটা লিমিটেশন নেই, আনলিমিটেড ৪K স্ট্রিমিং ও ১০০+ Mbps এফটিপি স্পিড অন্তর্ভুক্ত।\n⭐ সর্বাধিক জনপ্রিয়: Turbo 80 (৮০ Mbps - ৳৭৮৫/মাস)।`,
        suggestedAction: {
          type: 'selectPackage',
          label: 'জনপ্রিয় Turbo 80 প্যাকেজটি বুক করুন',
          value: 'hyper-80'
        }
      };
    }

    // 6. শাখা অফিসের সাপোর্ট নম্বরসমূহ (Branch Support Numbers)
    if (q.includes('office') || q.includes('অফিস') || q.includes('শাখা') || q.includes('support') || q.includes('সাপোর্ট') || q.includes('নম্বর') || q.includes('hotline') || q.includes('হটলাইন')) {
      const branchList = ISP_OFFICES.map(b => `🏢 ${b.name}:\n📍 ${b.address}\n📞 ${b.phones.join(', ')}`).join('\n\n');
      return {
        text: `🏢 স্পিড নেট খুলনা অফিস ও হটলাইন:\n\n📞 সেন্ট্রাল হটলাইন: 09639333111\n🚨 সেন্ট্রাল এনওসি হেল্পলাইন: 01910 365533\n\n${branchList}`
      };
    }

    // Default Fallback Response
    return {
      text: `আমি স্পিড নেটের সহকারী (Assistant)। আমি আপনাকে নিচের বিষয়গুলোতে সাহায্য করতে পারি:\n\n১. বিল পরিশোধের সঠিক নিয়ম (বিকাশ/নগদ/রকেট)\n২. নতুন ফাইবার কানেকশন নেওয়ার পদ্ধতি ও কাগজপত্র\n৩. হাই-স্পিড FTP সার্ভার লিংক\n৪. আপনার এলাকার এরিয়া ম্যানেজারের নাম ও সরাসরি মোবাইল নম্বর\n৫. ইন্টারনেট প্যাকেজ ও মাসিক ফি\n৬. খুলনার শাখা অফিসগুলোর ঠিকানা ও কাস্টমার কেয়ার নম্বর\n\nআপনি কী বিষয়ে জানতে চান নিচে মেসেজ লিখুন।`
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const result = processBanglaQuery(query);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: 'bot-' + Date.now(),
        sender: 'assistant',
        text: result.text,
        timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
        links: result.links,
        contactCard: result.contactCard,
        suggestedAction: result.suggestedAction
      }]);
    }, 350);
  };

  const handleAction = (action?: ChatMessage['suggestedAction']) => {
    if (!action) return;
    if (action.type === 'selectPackage') {
      const pkg = ISP_PACKAGES.find(p => p.id === action.value) || ISP_PACKAGES[2];
      if (onSelectPackage) onSelectPackage(pkg);
    } else if (action.type === 'book') {
      if (onBookClick) onBookClick();
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.type === 'call' && action.value) {
      window.location.href = `tel:${action.value.replace(/\s+/g, '')}`;
    }
  };

  // Helper function to render organized, beautifully spaced text sections
  const renderOrganizedContent = (text: string) => {
    const lines = text.split('\n');

    return (
      <div className="space-y-1.5">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) {
            return <div key={idx} className="h-1.5" />;
          }

          // Section Header with Icon/Emoji
          if (
            trimmed.startsWith('💳') || 
            trimmed.startsWith('🔌') || 
            trimmed.startsWith('🎬') || 
            trimmed.startsWith('📍') || 
            trimmed.startsWith('📦') || 
            trimmed.startsWith('🏢') || 
            trimmed.startsWith('📋') || 
            trimmed.startsWith('⚡')
          ) {
            return (
              <div 
                key={idx} 
                className="font-bold text-orange-300 text-xs sm:text-sm pb-1 mb-1 border-b border-orange-500/20 flex items-center gap-1.5"
              >
                <span>{trimmed}</span>
              </div>
            );
          }

          // Step or Sub-item header
          if (
            trimmed.startsWith('১.') || 
            trimmed.startsWith('২.') || 
            trimmed.startsWith('৩.') || 
            trimmed.startsWith('৪.') || 
            trimmed.startsWith('৫.') ||
            trimmed.startsWith('🔹')
          ) {
            return (
              <div key={idx} className="text-white font-semibold pl-1 text-xs sm:text-sm mt-1">
                {trimmed}
              </div>
            );
          }

          // Bullet item
          if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
            return (
              <div key={idx} className="flex items-start gap-1.5 text-slate-300 pl-3 text-xs leading-relaxed">
                <span className="text-orange-400 font-bold shrink-0">•</span>
                <span>{trimmed.replace(/^[•-]\s*/, '')}</span>
              </div>
            );
          }

          // Callout or Special notice
          if (
            trimmed.startsWith('📌') || 
            trimmed.startsWith('✨') || 
            trimmed.startsWith('⭐') || 
            trimmed.startsWith('📞') ||
            trimmed.startsWith('🚨')
          ) {
            return (
              <div key={idx} className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-200 text-xs font-medium my-1.5 backdrop-blur-md flex items-start gap-1.5">
                <span>{trimmed}</span>
              </div>
            );
          }

          return (
            <p key={idx} className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              {trimmed}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Mini English Launcher Button: Assistant */}
      <div className="fixed bottom-6 right-6 z-50 font-display">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white pl-3 pr-4 py-2.5 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all cursor-pointer active:scale-95 border border-white/30 backdrop-blur-md"
            aria-label="Open Assistant"
            title="Assistant - SpeedNet 24/7 Smart Support"
          >
            {/* Live Green Pulse Indicator */}
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>

            {/* Mini Bot Logo */}
            <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>

            {/* Mini English Front Label: Assistant */}
            <div className="flex items-center gap-1 font-bold text-xs tracking-wide">
              <span>Assistant</span>
              <Sparkles className="w-3 h-3 text-amber-300" />
            </div>
          </button>
        )}
      </div>

      {/* Card Blur Shade Bangla Chatbot Modal Window */}
      {isOpen && (
        <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[430px] h-[610px] max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-2xl bg-slate-900/90 text-slate-100 flex flex-col animate-in zoom-in-95 duration-200 font-display">
          
          {/* Card Blur Header: Assistant */}
          <div className="p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-orange-950/90 border-b border-orange-500/30 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 border border-white/20 shrink-0">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-black text-white tracking-wide font-heading">
                    Assistant
                  </h3>
                  <span className="text-[11px] text-orange-400 font-bold bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded-full">
                    স্পিড নেট
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <div className="text-[11px] text-orange-200/80 font-medium">
                  ২৪/৭ লাইভ খুলনা ব্রডব্যান্ড হেল্পডেস্ক
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700/60"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area with Organized Card Blur Bubbles */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 backdrop-blur-md bg-slate-950/50">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';

              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-7 h-7 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs border border-white/20">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[88%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-lg ${
                    isAssistant 
                      ? 'bg-slate-900/90 backdrop-blur-xl text-slate-100 border border-slate-700/80' 
                      : 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-orange-600/20'
                  }`}>
                    
                    {/* Organized Text Formatter */}
                    {isAssistant ? renderOrganizedContent(msg.text) : <div className="whitespace-pre-wrap">{msg.text}</div>}

                    {/* Area Contact Card with Direct Call & WhatsApp Buttons */}
                    {msg.contactCard && (
                      <div className="mt-3.5 p-3.5 rounded-xl bg-slate-950/95 border border-orange-500/40 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-orange-400">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>এলাকা: {msg.contactCard.areaName}</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-emerald-400">
                            {msg.contactCard.managerPhone}
                          </span>
                        </div>

                        <div className="text-xs text-white">
                          <strong className="text-slate-400">সার্ভিস ডেস্ক:</strong> {msg.contactCard.managerName}
                        </div>
                        <div className="text-xs text-slate-300">
                          <strong className="text-slate-400">ঠিকানা:</strong> {msg.contactCard.address}
                        </div>

                        {/* Direct Action Icons Bar: Call, WhatsApp, Copy */}
                        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                          <div className="flex items-center gap-2">
                            {/* Call Button */}
                            <a
                              href={`tel:${msg.contactCard.managerPhone.replace(/\s+/g, '')}`}
                              className="px-2.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-[11px] font-bold flex items-center gap-1 transition-colors shadow-xs"
                            >
                              <Phone className="w-3.5 h-3.5" />
                              <span>কল</span>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                              href={getWhatsAppUrl(msg.contactCard.managerPhone, `Hello! I need internet connection in ${msg.contactCard.areaName}.`)}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold flex items-center gap-1 transition-colors shadow-xs"
                            >
                              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.771.82 2.791.82 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.766-5.767-5.766zm3.374 8.204c-.146.411-.74.757-1.026.8-.27.042-.622.062-1.785-.419-.942-.39-1.547-1.341-1.595-1.404-.047-.063-.379-.504-.379-.961 0-.458.239-.684.324-.778.086-.094.188-.117.251-.117.063 0 .125.001.179.004.058.003.136-.022.212.162.079.189.271.662.295.71.024.048.04.105.008.168-.032.063-.048.102-.095.157-.048.055-.101.122-.144.164-.048.046-.098.096-.042.193.056.096.248.409.533.663.366.326.675.427.771.475.096.048.152.04.208-.024.056-.064.24-.279.304-.375.064-.096.128-.08.216-.048.088.032.559.263.655.311.096.048.16.072.184.112.024.04.024.232-.122.643z"/>
                              </svg>
                              <span>WhatsApp</span>
                            </a>
                          </div>

                          <button
                            onClick={() => handleCopy(msg.contactCard!.managerPhone, 'phone')}
                            className="px-2 py-1.5 rounded bg-slate-800 text-[11px] text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                          >
                            {copiedPhone === msg.contactCard.managerPhone ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                            <span>কপি</span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Direct FTP Server Clickable Link Cards */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-3.5 space-y-2 pt-2 border-t border-slate-800">
                        <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                          <Film className="w-3.5 h-3.5" />
                          <span>সার্ভার লিংক ভিজিট করুন:</span>
                        </div>
                        {msg.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/80 hover:bg-orange-950/50 border border-slate-800 hover:border-orange-500/50 text-xs text-orange-300 hover:text-orange-200 transition-all group"
                          >
                            <span className="font-semibold truncate">{link.title}</span>
                            <ExternalLink className="w-3.5 h-3.5 shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Interactive Action Button */}
                    {msg.suggestedAction && (
                      <div className="mt-3.5 pt-2 border-t border-slate-800/80">
                        <button
                          onClick={() => handleAction(msg.suggestedAction)}
                          className="w-full py-2.5 px-3.5 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 font-bold text-xs flex items-center justify-between transition-colors border border-orange-500/30 cursor-pointer shadow-xs"
                        >
                          <span>{msg.suggestedAction.label}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    <div className="text-[10px] mt-2 text-right font-mono text-slate-400">
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-9">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-bounce [animation-delay:0.4s]"></span>
                <span>উত্তর প্রস্তুত হচ্ছে...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Chips Carousel */}
          <div className="p-2.5 bg-slate-950/80 border-t border-slate-800/90 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0 backdrop-blur-md">
            {quickActionChips.map((chip, cIdx) => (
              <button
                key={cIdx}
                onClick={() => handleSend(chip.label)}
                className="px-3 py-1.5 rounded-xl bg-slate-800/80 hover:bg-orange-600/30 hover:border-orange-500 text-slate-200 text-xs font-semibold whitespace-nowrap border border-slate-700/80 transition-all cursor-pointer shrink-0"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-slate-950 border-t border-slate-800/90 backdrop-blur-md">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="বিল, নতুন সংযোগ, এফটিপি বা আপনার এলাকা লিখুন..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-xs sm:text-sm text-white outline-none transition-all placeholder-slate-400"
              />

              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white disabled:opacity-40 transition-all cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
