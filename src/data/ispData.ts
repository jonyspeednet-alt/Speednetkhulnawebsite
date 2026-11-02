import { PackageItem, ServiceItem, OfficeBranch, CoverageAreaNode } from '../types';

export const ISP_PACKAGES: PackageItem[] = [
  {
    id: 'super-50',
    name: 'Starter 50',
    speed: 50,
    speedUnit: 'Mbps',
    price: 525,
    billingCycle: 'Month',
    category: 'starter',
    summary: 'Essential fiber for everyday HD streaming & browsing.',
    tag: 'Budget Friendly'
  },
  {
    id: 'nextgen-65',
    name: 'Home 65',
    speed: 65,
    speedUnit: 'Mbps',
    price: 630,
    billingCycle: 'Month',
    category: 'home',
    summary: 'Family connection with bufferless 4K YouTube & smart TV.',
    tag: 'Family Choice'
  },
  {
    id: 'hyper-80',
    name: 'Turbo 80',
    speed: 80,
    speedUnit: 'Mbps',
    price: 785,
    billingCycle: 'Month',
    category: 'pro',
    isPopular: true,
    tag: 'Most Popular',
    summary: 'Ultra-fast symmetric fiber for gamers, streamers & multi-device homes.'
  },
  {
    id: 'turbo-100',
    name: 'Speed Pro 100',
    speed: 100,
    speedUnit: 'Mbps',
    price: 1050,
    billingCycle: 'Month',
    category: 'pro',
    tag: 'Pro Freelancer',
    summary: 'Symmetric 100 Mbps real-time fiber with low latency gaming.'
  },
  {
    id: 'velocity-150',
    name: 'Ultra 150',
    speed: 150,
    speedUnit: 'Mbps',
    price: 1200,
    billingCycle: 'Month',
    category: 'ultra',
    tag: 'Power User',
    summary: 'High-throughput fiber for studios, developers & 8K streaming.'
  },
  {
    id: 'swift-200',
    name: 'Gigabit Max 200',
    speed: 200,
    speedUnit: 'Mbps',
    price: 1730,
    billingCycle: 'Month',
    category: 'ultra',
    tag: 'Ultimate Speed',
    summary: 'Full optical fiber with real public static IP & 99.99% SLA.'
  }
];

export const ISP_SERVICES: ServiceItem[] = [
  {
    id: 'enterprise-fiber',
    title: 'Enterprise Dedicated Leased Line',
    subtitle: '1:1 Symmetric Optical Bandwidth',
    badge: 'Corporate & Banking',
    description: 'Guaranteed 1:1 symmetrical bandwidth with dedicated fiber routing, public IP pool, redundant dual upstream BGP transit, and a strict 99.99% uptime Service Level Agreement (SLA).',
    features: [
      'Dedicated 1:1 non-shared bandwidth',
      'Dual-path ring redundancy & auto-failover',
      'Under 1-hour MTTR on-site NOC dispatch',
      'Dedicated BGP routing with static IPv4/IPv6'
    ],
    icon: 'Building2',
    specs: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Latency', value: '< 2 ms' },
      { label: 'Packet Loss', value: '0.00%' }
    ]
  },
  {
    id: 'home-ftth',
    title: 'Ultra-Fast Home FTTH Broadband',
    subtitle: 'Direct Optical Fiber To The Home',
    badge: 'Residential & Villa',
    description: 'Next-generation FTTH fiber optic drop directly into your living room. Flawless 4K HDR entertainment, lag-free competitive esports gaming, and unmetered BDIX & YouTube streaming.',
    features: [
      'Uncapped optical fiber speed with no FUP limit',
      'Optimized low-ping routing to Singapore & European servers',
      'Free dual-band Wi-Fi router setup & alignment',
      'All government regulatory VAT (5%) included'
    ],
    icon: 'Home',
    specs: [
      { label: 'Max Speed', value: '1 Gbps' },
      { label: 'BDIX Routing', value: '100+ Mbps' },
      { label: 'FUP Limit', value: 'None' }
    ]
  },
  {
    id: 'campus-wifi',
    title: 'Managed Wi-Fi & SME Campus LAN',
    subtitle: 'High-Density Wireless Deployment',
    badge: 'Offices & Hotels',
    description: 'Turnkey mesh Wi-Fi and managed enterprise routing for universities, hotels, shopping complexes, and corporate floors. Seamless zero-handoff roaming with cloud network monitoring.',
    features: [
      'Zero-handoff seamless Wi-Fi roaming across halls',
      'Isolated guest network with SMS/Voucher portal',
      'Bandwidth shaping per department or room',
      'Centralized 24/7 cloud controller dashboard'
    ],
    icon: 'Wifi',
    specs: [
      { label: 'Concurrent Users', value: '500+' },
      { label: 'Coverage', value: 'Dead-Zone Free' },
      { label: 'Management', value: 'Cloud Monitored' }
    ]
  },
  {
    id: 'cdn-ftp',
    title: 'Gigabit Content Hub & Local FTP',
    subtitle: 'Ultra-High Speed Local Cache',
    badge: '100+ Mbps Speed',
    description: 'Direct peering with Bangladesh Internet Exchange (BDIX) and local CDN edge nodes. Instantaneous access to gigabytes of 4K content, operating systems, games, and software mirrors.',
    features: [
      'Blazing fast downloads up to 100+ MB/s',
      'Direct peering with Google, Netflix, and Akamai CDNs',
      'Daily curated library of games, software & media',
      'Zero international bandwidth consumption'
    ],
    icon: 'Server',
    specs: [
      { label: 'Cache Port', value: '10 Gbps' },
      { label: 'FTP Speed', value: '100+ Mbps' },
      { label: 'Buffering', value: '0s' }
    ]
  },
  {
    id: 'dark-fiber',
    title: 'Dark Fiber & Point-to-Point Lease',
    subtitle: 'Private Optical Interconnect',
    badge: 'Telecom & ISP',
    description: 'High-strand unlit optical fiber lease connecting branch offices, data centers, and industrial hubs across Khulna Division with virtually unlimited throughput capacity.',
    features: [
      'Private dedicated single-mode optical fiber core',
      'Complete protocol transparency & custom encryption',
      'Multi-kilometer continuous fusion-spliced routes',
      '24/7 OTDR testing & fiber patrol team'
    ],
    icon: 'Zap',
    specs: [
      { label: 'Throughput', value: 'Unlimited' },
      { label: 'Security', value: 'Air-Gapped' },
      { label: 'Protection', value: 'Armored Cable' }
    ]
  }
];

export const ISP_OFFICES: OfficeBranch[] = [
  {
    id: 'noc-office',
    name: 'Central NOC & Headquarters',
    type: 'Central NOC & Technical Hub',
    address: '83/3, Gagan Babu Road (Ground Floor & 1st Floor), Khulna',
    phones: ['01910 365533', '01750 557757'],
    email: 'noc@speednetkhulna.com',
    landmark: 'Gagan Babu Road Main Junction',
    isNOC: true,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14704.53676440263!2d89.5447144!3d22.8251214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0051e06d9d11ab%3A0x6a1f81cf874fa772!2sGagan%20Babu%20Rd%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd'
  },
  {
    id: 'corporate-office',
    name: 'Corporate Sales & Care Office',
    type: 'Corporate Relations & Sales',
    address: '30, KDA Approach Road (Beside Save N Safe), Khulna',
    phones: ['09639333111', '01910 365533'],
    email: 'corporate@speednetkhulna.com',
    landmark: 'KDA Approach Road, Near Save N Safe',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.625345719702!2d89.548487!3d22.819772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a005164f7b49cf5%3A0xb3ad24268e31a89c!2sKDA%20Approach%20Rd%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd'
  },
  {
    id: 'sonadanga-office',
    name: 'Sonadanga Customer Branch',
    type: 'Retail Billing & Quick Dispatch',
    address: 'Sonadanga Residential Area, Main Road, Khulna',
    phones: ['01910 384433'],
    landmark: 'Near Sonadanga Bus Terminal & Residential Moor',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14704.148560195155!2d89.531201!3d22.827725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a00517865cbb661%3A0xe104cf4c13a070eb!2sSonadanga%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd'
  },
  {
    id: 'gollamari-office',
    name: 'Gollamari Regional Branch',
    type: 'South Khulna Operation Center',
    address: 'Sohan Mansion, Mohammad Nagar, Gollamari, Khulna',
    phones: ['01970 365500'],
    landmark: 'Adjacent to Khulna University & Mohammad Nagar Moor',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14707.039234850383!2d89.529871!3d22.808795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0051a84f3c706d%3A0xd3b3ecdc8c68aa9c!2sGollamari%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd'
  },
  {
    id: 'boyra-office',
    name: 'Boyra & Khalishpur Branch',
    type: 'North Khulna Operation Center',
    address: '71-73, Haque Tower, Mujgunni Main Road (Opposite Abu Naser Hospital), Khalishpur, Khulna',
    phones: ['01970 365511'],
    landmark: 'Opposite Shahid Sheikh Abu Naser Specialized Hospital',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14699.986616428489!2d89.537651!3d22.854226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0050ee6be3ce7d%3A0xa10212fefc2ad871!2sBoyra%2C%20Khulna!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd'
  }
];

// Connected Optical Network Coverage Areas with Assigned Managers
export const COVERAGE_AREAS: CoverageAreaNode[] = [
  {
    id: 'speednet-noc',
    name: 'SpeedNet Central NOC Hub',
    nameBn: 'স্পিড নেট সেন্ট্রাল এনওসি হেডকোয়ার্টার',
    district: 'Khulna Headquarters',
    zoneType: 'core',
    x: 600,
    y: 320,
    managerName: 'Central NOC Information & Technical Desk',
    managerPhone: '01910 365533',
    address: '৮৩/৩, গগন বাবু রোড (নিচতলা ও ১ম তলা), খুলনা',
    subAreas: ['Gagan Babu Road', 'Sir Iqbal Road', 'Khulna Sadar', 'Picture Palace Mor', 'Station Road', 'Ferryghat']
  },
  {
    id: 'sonadanga',
    name: 'Sonadanga Residential Area',
    nameBn: 'সোনাডাঙ্গা আবাসিক এলাকা',
    district: 'Khulna West',
    zoneType: 'core',
    x: 380,
    y: 350,
    managerName: 'Sonadanga Customer Care & Helpdesk',
    managerPhone: '01910 384433',
    address: 'মেইন রোড, সোনাডাঙ্গা আবাসিক এলাকা (ফেজ-১ ও ২), খুলনা',
    subAreas: ['Sonadanga Residential Phase 1 & 2', 'Bus Terminal Area', 'Medical College Road', 'Mojid Shoroni', 'Choto Boyra Link']
  },
  {
    id: 'boyra',
    name: 'Boyra & Mujgunni',
    nameBn: 'বয়রা ও মুজগুন্নী',
    district: 'Khulna North',
    zoneType: 'core',
    x: 390,
    y: 260,
    managerName: 'Boyra Customer Service & Support',
    managerPhone: '01970 365511',
    address: 'হক টাওয়ার, মুজগুন্নী মেইন রোড (আবু নাসের হাসপাতালের সামনে), খুলনা',
    subAreas: ['Boyra Main Road', 'Abu Naser Hospital Zone', 'Mujgunni Residential', 'Police Line Mor', 'Boyra Bazar']
  },
  {
    id: 'khalishpur',
    name: 'Khalishpur Housing',
    nameBn: 'খালিশপুর হাউজিং ও শিল্পাঞ্চল',
    district: 'Khulna North',
    zoneType: 'core',
    x: 430,
    y: 200,
    managerName: 'Khalishpur Customer Support Desk',
    managerPhone: '01970 365512',
    address: 'রোড নং ০৫, খালিশপুর হাউজিং এস্টেট, খুলনা',
    subAreas: ['Khalishpur Housing Estate', 'BIDC Road', 'Goalpara Power Plant Area', 'Newsprint Mills Zone', 'Chitrali Mor']
  },
  {
    id: 'shibbari',
    name: 'Shibbari & Royal Mor',
    nameBn: 'শিববাড়ি ও রয়েল মোড়',
    district: 'Khulna Central',
    zoneType: 'core',
    x: 520,
    y: 340,
    managerName: 'Shibbari Central Information Desk',
    managerPhone: '01750 557757',
    address: 'শিববাড়ি মোড় ও রয়েল চত্বর মেইন হাব, খুলনা',
    subAreas: ['Shibbari Mor', 'Royal Mor', 'KDA Avenue', 'Zilla School Road', 'Sher-e-Bangla Road', 'Shona Danga Link']
  },
  {
    id: 'nirala',
    name: 'Nirala Residential Area',
    nameBn: 'নিরালা আবাসিক এলাকা ও কেডিএ',
    district: 'Khulna Central',
    zoneType: 'core',
    x: 550,
    y: 410,
    managerName: 'Nirala Corporate & Customer Care Desk',
    managerPhone: '09639333111',
    address: '৩০, কেডিএ অ্যাপ্রোচ রোড, নিরালা মোড় সংলগ্ন, খুলনা',
    subAreas: ['Nirala Residential Area', 'KDA Approach Road', 'Farid Mor', 'Shaheed Minar Road', 'Rupsha Strand Link']
  },
  {
    id: 'gollamari',
    name: 'Gollamari & Khulna University',
    nameBn: 'গল্লামারী ও খুলনা বিশ্ববিদ্যালয় এলাকা',
    district: 'Khulna South',
    zoneType: 'core',
    x: 410,
    y: 460,
    managerName: 'Gollamari Customer Support & Care',
    managerPhone: '01970 365500',
    address: 'সোহান ম্যানশন, মোহাম্মদ নগর, গল্লামারী মোড়, খুলনা',
    subAreas: ['Khulna University Campus', 'Gollamari Mor', 'Mohammad Nagar', 'Batiaghata Bridge Link', 'Zero Point Link']
  },
  {
    id: 'daulatpur',
    name: 'Daulatpur & Religate',
    nameBn: 'দৌলতপুর ও রেলিগেট',
    district: 'Khulna Outer',
    zoneType: 'metro',
    x: 450,
    y: 130,
    managerName: 'Daulatpur Area Support Desk',
    managerPhone: '01910 365538',
    address: 'দৌলতপুর বাজার মেইন পয়েন্ট, বিএল কলেজ রোড, খুলনা',
    subAreas: ['Daulatpur Bazar', 'BL College Area', 'Religate Point', 'Muhsin Mor', 'Doulatpur Thana Road']
  },
  {
    id: 'rupsha',
    name: 'Rupsha Ghat & Stand Road',
    nameBn: 'রূপসা ঘাট ও স্ট্যান্ড রোড',
    district: 'East Khulna',
    zoneType: 'metro',
    x: 640,
    y: 430,
    managerName: 'Rupsha Area Customer Service Desk',
    managerPhone: '01970 365519',
    address: 'রূপসা ফেরিঘাট সংলগ্ন ট্রাফোর্ড মার্কেট, খুলনা',
    subAreas: ['Rupsha Ferry Ghat', 'Stand Road', 'Trafford Market', 'Rupsha Bridge Approach', 'East Rupsha Ghat']
  },
  {
    id: 'dighalia',
    name: 'Dighalia & Gazirhat',
    nameBn: 'দিঘলিয়া ও গাজীরহাট',
    district: 'Khulna District',
    zoneType: 'metro',
    x: 580,
    y: 230,
    managerName: 'Dighalia Customer Support Desk',
    managerPhone: '01750 557757',
    address: 'দিঘলিয়া থানা মোড়, মেইন বাস স্ট্যান্ড, খুলনা',
    subAreas: ['Dighalia Thana Sadar', 'Gazirhat Bazar', 'Main Bus Stand', 'Riverghat Area', 'Barakpur Link']
  },
  {
    id: 'bagerhat',
    name: 'Bagerhat Sadar Hub',
    nameBn: 'বাগেরহাট সদর ও দশানী',
    district: 'Bagerhat',
    zoneType: 'regional',
    x: 730,
    y: 480,
    managerName: 'Bagerhat Regional Service & Support',
    managerPhone: '01910 365544',
    address: 'পুরাতন কোর্ট রোড, দশানী মোড়, বাগেরহাট',
    subAreas: ['Bagerhat Sadar Town', 'Dashani Mor', 'Old Court Road', 'Khan Jahan Ali Shrine Road', 'Chowrasta Commercial Hub']
  },
  {
    id: 'jessore',
    name: 'Jessore Hub (Rupdia & Sadar)',
    nameBn: 'যশোর হাব (রুপদিয়া ও সদর)',
    district: 'Jessore',
    zoneType: 'regional',
    x: 270,
    y: 220,
    managerName: 'Jessore Regional Information Desk',
    managerPhone: '01910 365577',
    address: 'রুপদিয়া বাজার ও এমকে রোড, যশোর',
    subAreas: ['Jessore Sadar Town', 'Rupdia Bazar', 'MK Road', 'Chowrasta Commercial Hub', 'Rail Station Area']
  },
  {
    id: 'satkhira',
    name: 'Satkhira Hub (Debhata & Town)',
    nameBn: 'সাতক্ষীরা হাব (দেবহাটা ও সদর)',
    district: 'Satkhira',
    zoneType: 'regional',
    x: 220,
    y: 490,
    managerName: 'Satkhira Customer Support Desk',
    managerPhone: '01970 365588',
    address: 'পলাশপোল মেইন রোড, সাতক্ষীরা',
    subAreas: ['Satkhira Sadar Town', 'Polashpol Main Road', 'Debhata Link', 'New Market Mor', 'Brak Road']
  }
];

export const FTP_SERVERS = [
  {
    name: 'Speed Net Ultra 4K Media Hub',
    url: 'ftp://media.speednetbd.com',
    webUrl: 'http://10.16.100.10',
    description: 'সর্বশেষ 4K HDR মুভি, টিভি সিরিজ, এনিমেশন ও ডকুমেন্টারি (১০০+ Mbps)',
    category: 'Movies & Series'
  },
  {
    name: 'Circle FTP & Software Mirror',
    url: 'http://circleftp.net',
    webUrl: 'http://circleftp.net',
    description: 'লেটেস্ট পিসি গেমস, উইন্ডোজ/লিনাক্স আইএসও, সফটওয়্যার ও প্যাচ (গিগাবিট স্পিড)',
    category: 'Software & Games'
  },
  {
    name: 'Speed Net Live TV & OTT Cache',
    url: 'http://tv.speednetbd.com',
    webUrl: 'http://tv.speednetbd.com',
    description: '১০০+ লাইভ টিভি চ্যানেল ও স্পোর্টস স্ট্রিমিং বাফারিংলেস',
    category: 'Live TV'
  }
];

export const FAQ_LIST = [
  {
    q: 'What documents are required to get a new fiber broadband connection?',
    a: 'You will need a copy of your National ID (NID) or Passport, one passport-size photograph, and the installation address. When you submit the online form, our installation technician will contact you within 24 hours to schedule setup and test optical signals.'
  },
  {
    q: 'Is government VAT included in the monthly package price?',
    a: 'Yes, 100% of our published package prices include all government regulatory 5% VAT. There are no hidden fees or unexpected surcharges.'
  },
  {
    q: 'How do I know if optical fiber is available at my building?',
    a: 'Speed Net maintains comprehensive optical rings spanning Khulna Sadar, Sonadanga, Boyra, Khalishpur, Gollamari, Daulatpur, and beyond. Check our connected Coverage Map on this page or call our 24/7 hotline at 09639333111 or NOC helpline 01910 365533 for immediate line verification.'
  },
  {
    q: 'What download speeds can I expect from the BDIX and FTP servers?',
    a: 'All Speed Net subscribers enjoy 100+ Mbps up to gigabit speeds on our local FTP servers, BDIX connected portals, Google CDN, and YouTube caching servers with zero buffering.'
  },
  {
    q: 'What payment methods do you accept for monthly bill payments?',
    a: 'You can pay seamlessly via bKash, Nagad, Rocket, credit/debit card gateway, or in-person at any of our 5 physical branch offices across Khulna.'
  },
  {
    q: 'What should I do if my optical LOS light turns red on the router/ONU?',
    a: 'A red LOS (Loss of Signal) light means the optical fiber patch cable might be bent, unplugged, or there is a physical cable disruption outside. First, ensure the yellow fiber patch cord is firmly plugged in without tight bends. If the red light persists, contact our NOC at 01910 365533 and our field team will be dispatched immediately.'
  }
];
