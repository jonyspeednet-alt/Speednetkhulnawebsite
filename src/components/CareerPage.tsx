import { useState, FormEvent } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  X, 
  Sparkles, 
  Award, 
  HeartHandshake, 
  TrendingUp, 
  Zap,
  Phone,
  Mail,
  User,
  FileText
} from 'lucide-react';

interface CareerPageProps {
  onNavigateHome: () => void;
}

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export default function CareerPage({ onNavigateHome }: CareerPageProps) {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  
  // Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [experienceYears, setExperienceYears] = useState('1-3');
  const [resumeLink, setResumeLink] = useState('');
  const [coverNote, setCoverNote] = useState('');

  const jobPositions: JobPosition[] = [
    {
      id: 'job-1',
      title: 'Senior Optical Fiber Splicing Specialist',
      department: 'Field Operations & Transmission',
      location: 'Khulna Sadar & Regional Hubs',
      type: 'Full-time',
      experience: '2+ Years in Optical Fiber Splicing',
      salary: 'Competitive + Field Allowance',
      description: 'Lead our core optical fiber deployment, emergency fusion splicing, OTDR fault diagnosis, and optical power budget alignment across Khulna city.',
      responsibilities: [
        'Perform high-precision fusion splicing for 24/48/96-core armored optical cables',
        'Operate OTDR, visual fault locators (VFL), and optical power meters to identify fiber attenuation',
        'Lead rapid emergency restoration for underground and aerial cable cuts',
        'Maintain detailed fiber allocation and patch panel documentation'
      ],
      requirements: [
        'Minimum 2 years of hands-on experience in telecommunications or ISP fiber splicing',
        'Diploma in Electrical, Telecommunication, or equivalent vocational training',
        'Proficiency with Fujikura / Sumitomo fusion splicers',
        'Valid driving license / willingness to travel within Khulna Division'
      ]
    },
    {
      id: 'job-2',
      title: '24/7 NOC Network Support Engineer',
      department: 'Network Operations Center (NOC)',
      location: 'Gagan Babu Road, Khulna',
      type: 'Full-time (Rotational Shift)',
      experience: '1-3 Years in ISP Network Support',
      salary: 'Negotiable based on experience',
      description: 'Monitor SpeedNet backbone routers, optical peering links, and subscriber OLTs. Resolve Layer 2/3 network incidents and provide technical escalation support.',
      responsibilities: [
        'Proactively monitor core routers, switches, and GPON OLT infrastructure via Zabbix & Grafana',
        'Diagnose PPPoE authentication, IP routing, and DNS configuration issues',
        'Liaise with upstream IIG and NTTN providers during transmission anomalies',
        'Handle tier-2 customer escalation tickets with swift turnaround times'
      ],
      requirements: [
        'B.Sc / Diploma in CSE, EEE, or relevant discipline',
        'Familiarity with MikroTik RouterOS (MTCNA preferred), Cisco IOS, and GPON technology',
        'Strong understanding of TCP/IP, VLANs, BGP, OSPF, and Subnetting',
        'Excellent verbal communication skills in Bangla and English'
      ]
    },
    {
      id: 'job-3',
      title: 'Corporate Sales & Enterprise Account Executive',
      department: 'Business Development & Sales',
      location: 'KDA Approach Road, Khulna',
      type: 'Full-time',
      experience: '1+ Years in B2B / SME Sales',
      salary: 'Fixed Base + Attractive Sales Commission',
      description: 'Drive corporate leased-line, dedicated IP, and SME broadband acquisitions. Manage relationships with commercial enterprises, educational institutions, and hospitals.',
      responsibilities: [
        'Identify and prospect corporate clients, software firms, banks, and educational institutions',
        'Prepare tailored business proposals, SLAs, and technical bandwidth quotes',
        'Achieve monthly and quarterly corporate bandwidth revenue targets',
        'Conduct client site visits and maintain long-term account health'
      ],
      requirements: [
        'Bachelor’s degree in Business, Marketing, or relevant discipline',
        'Demonstrated track record in B2B corporate sales in IT / ISP or telecom sector',
        'Strong negotiation, presentation, and relationship-building abilities',
        'Proactive and target-driven mindset'
      ]
    },
    {
      id: 'job-4',
      title: 'FTTH Deployment & Field Support Technician',
      department: 'Customer Delivery & Field Dispatch',
      location: 'Sonadanga / Boyra / Khalishpur',
      type: 'Full-time',
      experience: '1+ Years (Freshers with passion welcome)',
      salary: 'Competitive + Performance Incentive',
      description: 'Execute new subscriber fiber drops, ONU/ONT termination, Wi-Fi router setup, and in-home optical signal optimization for residential customers.',
      responsibilities: [
        'Pull and secure drop cables from distribution boxes (TJ/FDB) to customer premises',
        'Terminate optical connectors and test signal levels with optical power meters',
        'Configure subscriber dual-band Wi-Fi routers and perform speed verification',
        'Provide friendly in-person orientation to customers on bill payment and self-care'
      ],
      requirements: [
        'HSC or Diploma in Engineering',
        'Basic understanding of fiber cables, RJ-45 crimping, and home Wi-Fi setup',
        'Polite, customer-centric attitude and strong work ethic',
        'Motorcycle or bicycle for local area commute is an advantage'
      ]
    },
    {
      id: 'job-5',
      title: 'Customer Care & Information Desk Representative',
      department: 'Customer Experience & Helpdesk',
      location: 'Central Khulna / Shibbari',
      type: 'Full-time',
      experience: 'Entry-level to 1 Year',
      salary: 'Competitive + Health Allowance',
      description: 'Be the welcoming voice of SpeedNet. Assist callers with subscription inquiries, billing clarifications, package upgrades, and service requests.',
      responsibilities: [
        'Handle inbound hotline calls and online chat inquiries politely and efficiently',
        'Log support tickets accurately in the CRM and route to field technicians',
        'Explain internet package features, billing options (bKash/Nagad), and promotions',
        'Follow up with subscribers after service resolution to ensure complete satisfaction'
      ],
      requirements: [
        'Graduation or ongoing degree in any discipline',
        'Pleasant voice, active listening, and clear telephone etiquette',
        'Proficiency in computer typing and basic web browsing',
        'Problem-solving mindset and patience under pressure'
      ]
    }
  ];

  const handleOpenApply = (job: JobPosition) => {
    setSelectedJob(job);
    setIsApplyModalOpen(true);
    setSubmittedCode(null);
  };

  const handleSubmitApplication = (e: FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantPhone) return;

    const randomId = 'SN-APP-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedCode(randomId);

    // Reset form fields
    setTimeout(() => {
      setApplicantName('');
      setApplicantPhone('');
      setApplicantEmail('');
      setResumeLink('');
      setCoverNote('');
    }, 500);
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-display min-h-screen">
      
      {/* 1. Career Hero Banner */}
      <section className="relative py-20 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-medium">
            <button 
              onClick={onNavigateHome}
              className="hover:text-orange-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-orange-400 font-semibold">Careers</span>
          </div>

          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wide">
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span>Join SpeedNet Engineering & Operations Team</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading leading-tight">
              Build your future with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300">
                SpeedNet Khulna
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              We are expanding our optical network across Khulna Division. Explore exciting career opportunities with competitive compensation, professional training, and rapid growth.
            </p>
          </div>

          {/* Why Join Us Perks */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-heading">Fast-Track Growth</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Merit-based promotions with annual salary reviews and skill certification support.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-heading">Bonuses & Benefits</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Two festival bonuses, performance incentives, overtime allowance, and health support.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-heading">Cutting-Edge Tech</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Hands-on work with modern GPON OLTs, high-capacity Cisco/MikroTik core, and OTDRs.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white font-heading">Supportive Culture</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Collaborative, friendly work atmosphere with respect, transparency, and team camaraderie.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Current Open Positions (Portrait Format Cards) */}
      <section className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
              {jobPositions.length} Open Opportunities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
              Explore Our Open Positions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Find your ideal role below and submit your application online in just two minutes.
            </p>
          </div>

          {/* PORTRAIT FORMAT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {jobPositions.map((job) => (
              <div 
                key={job.id}
                className="flex flex-col justify-between rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all p-6 sm:p-7 relative overflow-hidden group"
              >
                {/* Top Glowing Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-400"></div>

                <div className="space-y-4">
                  {/* Department & Employment Type Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 border border-orange-200 text-[11px] font-bold uppercase font-mono">
                      {job.department}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold font-mono">
                      {job.type}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading leading-snug group-hover:text-orange-600 transition-colors">
                    {job.title}
                  </h3>

                  {/* Portrait Vertical Meta Details */}
                  <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="font-semibold text-slate-800">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-800">{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Award className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="font-bold text-emerald-700">{job.salary}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Portrait Key Responsibilities Card */}
                  <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Key Responsibilities:</div>
                    <ul className="space-y-1.5">
                      {job.responsibilities.slice(0, 3).map((resp, rIdx) => (
                        <li key={rIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Portrait Key Requirements Card */}
                  <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Requirements:</div>
                    <ul className="space-y-1.5">
                      {job.requirements.slice(0, 3).map((req, qIdx) => (
                        <li key={qIdx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleOpenApply(job)}
                    className="w-full py-3.5 px-5 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-600/20 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <span>Apply for Position</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Direct Application Modal */}
      {isApplyModalOpen && selectedJob && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto font-display">
          <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-slate-950 to-orange-950 text-white flex items-center justify-between border-b border-orange-500/30">
              <div className="space-y-1">
                <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                  Job Application Form
                </div>
                <h3 className="text-lg sm:text-xl font-black font-heading text-white">
                  {selectedJob.title}
                </h3>
                <div className="text-xs text-slate-300">
                  {selectedJob.department} • {selectedJob.location}
                </div>
              </div>

              <button
                onClick={() => setIsApplyModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {submittedCode ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-black text-slate-900 font-heading">Application Submitted!</h4>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you for applying to SpeedNet. Our HR and technical screening desk will review your submission and contact you soon.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-center max-w-xs mx-auto">
                    <div className="text-[11px] text-orange-800 font-semibold uppercase">Application Tracking ID</div>
                    <div className="text-lg font-mono font-black text-orange-600 mt-1">{submittedCode}</div>
                  </div>

                  <button
                    onClick={() => {
                      setIsApplyModalOpen(false);
                      setSubmittedCode(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abdullah Al Mamun"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-orange-500 focus:bg-white text-xs sm:text-sm text-slate-900 outline-none transition-all"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 01700 000000"
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-orange-500 focus:bg-white text-xs sm:text-sm text-slate-900 outline-none transition-all"
                        />
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="name@email.com"
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-orange-500 focus:bg-white text-xs sm:text-sm text-slate-900 outline-none transition-all"
                        />
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        Relevant Experience
                      </label>
                      <select
                        value={experienceYears}
                        onChange={(e) => setExperienceYears(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-orange-500 focus:bg-white text-xs sm:text-sm text-slate-900 outline-none transition-all cursor-pointer"
                      >
                        <option value="fresher">Fresher / Less than 1 Year</option>
                        <option value="1-3">1 to 3 Years</option>
                        <option value="3-5">3 to 5 Years</option>
                        <option value="5+">5+ Years</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                        CV / Portfolio Link
                      </label>
                      <div className="relative">
                        <input
                          type="url"
                          placeholder="Google Drive or LinkedIn link"
                          value={resumeLink}
                          onChange={(e) => setResumeLink(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-orange-500 focus:bg-white text-xs sm:text-sm text-slate-900 outline-none transition-all"
                        />
                        <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                      Short Note / Key Skills
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe why you are a great fit for SpeedNet..."
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-orange-500 focus:bg-white text-xs sm:text-sm text-slate-900 outline-none transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application Online</span>
                    </button>
                    <div className="text-[11px] text-slate-400 text-center mt-2">
                      Your information is kept strictly confidential by SpeedNet HR Desk.
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
