import { Hotspot, VesselFeature, Specialist } from '../types';

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'hs-1',
    x: 48,
    y: 58,
    title: 'Sub-Sea Panoramic Observation Lounge',
    category: 'Vessel Architecture',
    description: 'Submerged acoustic glass viewing rotunda with 360° underwater lighting and hydrophone reef listening system.',
    metric: '12m Submerged Glass Dome'
  },
  {
    id: 'hs-2',
    x: 63,
    y: 52,
    title: 'Private Lagoon Helicopter Pad',
    category: 'Air & Tender Access',
    description: 'Carbon-reinforced hydraulic helideck transitioning seamlessly into a moonlit plunge pool upon touchdown.',
    metric: 'Twin-Engine IFR Certified'
  },
  {
    id: 'hs-3',
    x: 78,
    y: 55,
    title: 'Ocean Master Penthouse Suite',
    category: 'Ultra-Luxury Quarters',
    description: 'Private cantilevered aft deck with retractable skylight for open-ocean stargazing and private chef dining.',
    metric: '220 m² Private Deck'
  },
  {
    id: 'hs-4',
    x: 34,
    y: 59,
    title: 'Hybrid Silent Keel Propulsion',
    category: 'Zero-Emission Cruising',
    description: 'Hydrogen-electric silent drive enabling completely zero-wake, silent approach into untouched coral lagoons.',
    metric: '100% Silent Electric Range'
  }
];

export const VESSEL_FEATURES: VesselFeature[] = [
  {
    id: 'vf-1',
    name: 'Hydrofoil Carbon Composite Hull',
    tag: 'Hull & Navigation',
    specs: '68m Length • 18m Beam',
    range: '4,800 Nautical Miles',
    description: 'Aerodynamic twin-hull ocean cruiser engineered with military-grade carbon composite, gliding above open ocean swells at 28 knots with zero roll.',
    features: ['Active Gyro-Stabilization', 'Zero-Wake Lagoon Cruising', 'Transoceanic Autonomy']
  },
  {
    id: 'vf-2',
    name: 'Secluded Lagoon Anchorage System',
    tag: 'Island Mooring',
    specs: 'Zero-Anchor GPS Dynamic Positioning',
    range: 'Infinite Atoll Holding',
    description: 'Preserves delicate coral reef ecosystems using GPS dynamic thrust positioning rather than seabed-damaging anchor chains.',
    features: ['Reef-Safe Thrusters', 'Acoustic Sonar Mapping', 'Autonomous Night Holding']
  },
  {
    id: 'vf-3',
    name: 'Private Island Watercraft & Submersible',
    tag: 'Expedition Tenders',
    specs: '3-Person Deep Sub + 2 Limousine Tenders',
    range: '300m Subsea Depth',
    description: 'On-board private exploration fleet ready to transport guests between the superyacht and private white-sand atoll coves.',
    features: ['Electric Jet Tenders', 'Deep-Reef Submersible', 'Full Dive & Seabob Station']
  },
  {
    id: 'vf-4',
    name: 'Michelin-Calibrated Ocean Galley',
    tag: 'Island Gastronomy',
    specs: 'Private Sommelier & Master Chefs',
    range: 'Farm-to-Atoll Dining',
    description: 'Dedicated culinary brigade curating fresh deep-sea catches and private island tropical harvests paired with grand cru vintages.',
    features: ['Bespoke Atoll Beach Banquets', 'Caviar & Oyster Bar', '2,400 Bottle Wine Cellar']
  }
];

export const SPECIALISTS: Specialist[] = [
  {
    id: 'spec-1',
    name: 'Capt. Henrik Lindqvist',
    role: 'Master Mariner & Expedition Commander',
    location: 'Monaco & Polynesia',
    experience: '22 yrs',
    initials: 'HL',
    focus: 'Uncharted Atoll Navigation, Oceanic Weather Routing'
  },
  {
    id: 'spec-2',
    name: 'Chef Camille Laurent',
    role: 'Private Island Executive Chef',
    location: 'Paris & Maldives',
    experience: '18 yrs',
    initials: 'CL',
    focus: '3-Star Michelin Marine Gastronomy, Atoll Foraging'
  },
  {
    id: 'spec-3',
    name: 'Dr. Sofia Ramos',
    role: 'Lead Marine Biologist & Dive Master',
    location: 'Bora Bora & Galapagos',
    experience: '14 yrs',
    initials: 'SR',
    focus: 'Pelagic Coral Safari, Night Bioluminescence Dives'
  },
  {
    id: 'spec-4',
    name: 'Alexander Sterling',
    role: 'Head of Private Island Concierge',
    location: 'Seychelles & London',
    experience: '15 yrs',
    initials: 'AS',
    focus: 'Bespoke Island Itineraries, High-Security Seclusion'
  }
];

export const TAB_CONTENT = {
  island: {
    title: 'Private Island Sanctuary',
    description: 'Exclusive access to pristine, uninhabited private atolls surrounded by turquoise barrier reefs, complete with bespoke overwater pavillions.',
    stats: [
      { label: 'Island Seclusion', value: '100% Private Access' },
      { label: 'Coral Atoll Coast', value: '14 km Virgin Coast' }
    ]
  },
  fleet: {
    title: 'Superyacht Fleet',
    description: 'Ultra-modern 68-meter black carbon yachts equipped with zero-emission silent electric drives, private helipads, and deep-sea submersibles.',
    stats: [
      { label: 'Cruising Speed', value: '28 Knots Smooth' },
      { label: 'Staterooms', value: '6 Ocean Penthouse' }
    ]
  },
  charter: {
    title: 'Bespoke Charters',
    description: 'Our commitment to world-class hospitality ensures that every voyage to your private island is both exquisitely seamless and utterly unforgettable.',
    stats: [
      { label: 'Crew-to-Guest Ratio', value: '3 : 1 Ultra-Dedicated' },
      { label: 'Voyage Flexibility', value: 'Custom Itinerary' }
    ]
  }
};
