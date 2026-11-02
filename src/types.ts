export interface PackageItem {
  id: string;
  name: string;
  speed: number;
  speedUnit: string;
  price: number;
  billingCycle: string;
  isPopular?: boolean;
  tag?: string;
  category: 'starter' | 'home' | 'pro' | 'ultra';
  summary?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  icon: string;
  specs: { label: string; value: string }[];
}

export interface OfficeBranch {
  id: string;
  name: string;
  type: string;
  address: string;
  phones: string[];
  email?: string;
  landmark?: string;
  mapEmbedUrl: string;
  isNOC?: boolean;
}

export interface CoverageAreaNode {
  id: string;
  name: string;
  nameBn: string;
  district: string;
  zoneType: 'core' | 'metro' | 'regional';
  x: number;
  y: number;
  managerName: string;
  managerPhone: string;
  address: string;
  subAreas?: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  links?: { title: string; url: string }[];
  suggestedAction?: {
    type: 'selectPackage' | 'book' | 'call' | 'area';
    label: string;
    value?: string;
  };
  contactCard?: {
    areaName: string;
    managerName: string;
    managerPhone: string;
    address: string;
  };
}
