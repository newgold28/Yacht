export type ActiveTab = 'island' | 'fleet' | 'charter';

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  category: string;
  description: string;
  metric: string;
}

export interface VesselFeature {
  id: string;
  name: string;
  tag: string;
  specs: string;
  range: string;
  description: string;
  features: string[];
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  location: string;
  experience: string;
  initials: string;
  focus: string;
}

export type ModalType = 'contact' | 'vessel' | 'specialists' | 'explore' | 'learnMore' | 'hotspot' | null;
