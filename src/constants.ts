import { Service, Project, Testimonial, FAQ } from './types';

export const BUSINESS_INFO = {
  name: 'CM Acoustic LLC',
  legalName: 'CM Acoustic LLC',
  license: 'ROC356053',
  phone: '(480) 417-8443',
  email: 'info@cmacousticceiling.com',
  address: '104 N 86th Pl, Mesa, AZ 85207',
  serviceArea: 'Mesa, Phoenix Metro, Maricopa County, AZ',
  hours: 'Mon-Fri: 7:00 AM - 5:00 PM, Sat: By Appointment',
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Acoustical Ceiling Systems',
    slug: 'acoustical-ceiling-systems',
    description: 'High-quality suspended and acoustical ceiling systems for commercial interiors.',
    icon: 'Construction',
    features: ['Suspended Ceilings', 'Drop Ceiling Systems', 'T-Bar Grid Installation', 'Acoustic Ceiling Tiles'],
    longDescription: 'Professional installation of suspended and acoustical ceiling systems for commercial spaces, including offices, schools, retail stores, healthcare facilities, and industrial buildings. We provide clean, durable, and functional ceiling solutions designed for performance, aesthetics, and sound control.',
    image: '/images/services/ceiling.jpg',
  },
  {
    id: '2',
    title: 'Ceiling Tile Installation & Replacement',
    slug: 'ceiling-tile-installation-replacement',
    description: 'Expert ceiling tile installation and replacement for clean, modern commercial spaces.',
    icon: 'Shield',
    features: ['New Tile Installation', 'Damaged Tile Replacement', 'Water Damage Restoration', 'Grid & Tile Upgrades'],
    longDescription: 'We install and replace commercial ceiling tiles with precision, helping businesses maintain a professional appearance while improving acoustics and functionality. Whether for new construction, renovations, or damaged tile replacement, our team delivers efficient and reliable service.',
    image: '/images/services/ceiling-repair.jpg',
  },
  {
    id: '3',
    title: 'Acoustic Ceiling Baffles',
    slug: 'acoustic-ceiling-baffles',
    description: 'Modern acoustic baffle systems that improve sound performance and visual appeal.',
    icon: 'Zap',
    features: ['Suspended Acoustic Baffles', 'Decorative Ceiling Baffles', 'Open Ceiling Treatments', 'Custom Layout Design'],
    longDescription: 'Enhance sound control and modern design with custom acoustic ceiling baffles. Ideal for open ceilings, offices, schools, restaurants, and large commercial spaces, baffles reduce echo while adding a sleek architectural finish.',
    image: '/images/services/baffle.jpg',
  },
  {
    id: '4',
    title: 'Acoustic Wall Panels',
    slug: 'acoustic-wall-panels',
    description: 'Acoustic wall panels designed to reduce noise and elevate interior spaces.',
    icon: 'Building2',
    features: ['Decorative Wall Panels', 'Sound-Absorbing Systems', 'Fabric-Wrapped Panels', 'Custom Wall Treatments'],
    longDescription: 'Our acoustic wall panel solutions help reduce noise and improve speech clarity in commercial interiors. We install decorative and functional wall panels for offices, conference rooms, schools, restaurants, and other spaces where sound control matters.',
    image: '/images/services/acoustic.jpg',
  },
  {
    id: '5',
    title: 'Ceiling Repair & Retrofit Services',
    slug: 'ceiling-repair-retrofit',
    description: 'Reliable ceiling repairs and retrofit solutions for commercial properties.',
    icon: 'Hammer',
    features: ['Tile Replacement', 'Grid Repair & Leveling', 'Water Damage Repair', 'Partial Ceiling Remodels'],
    longDescription: 'We provide professional ceiling repairs, retrofits, and upgrades for existing commercial spaces. From replacing damaged tiles and repairing grid systems to updating outdated ceiling layouts, we help restore safety, appearance, and performance.',
    image: '/images/services/ceiling-project.jpg',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Mesa Corporate Office',
    category: 'Commercial',
    location: 'Mesa, AZ',
    service: 'Acoustic Ceiling Grid',
    description: 'Full installation of 15,000 sq ft of high-NRC acoustic ceilings for a modern tech office.',
    image: '/images/projects/mesa-office.jpg',
  },
  {
    id: 'p2',
    title: 'Gilbert Luxury Residence',
    category: 'Residential',
    location: 'Gilbert, AZ',
    service: 'Drywall & Custom Texture',
    description: 'Level 5 drywall finish and custom ceiling details for a new 5,000 sq ft custom home.',
    image: '/images/projects/gilbert-home.jpg',
  },
  {
    id: 'p3',
    title: 'Phoenix Retail Center',
    category: 'Commercial',
    location: 'Phoenix, AZ',
    service: 'Tenant Improvement',
    description: 'Drywall partitions and suspended ceilings for a multi-unit retail development.',
    image: '/images/projects/phoenix-retail.jpg',
  },
  {
    id: 'p4',
    title: 'Scottsdale Medical Plaza',
    category: 'Commercial',
    location: 'Scottsdale, AZ',
    service: 'Acoustic Panels',
    description: 'Installation of specialized acoustic wall panels and clouds in patient waiting areas.',
    image: '/images/projects/scottsdale-medical.jpg',
  },
  {
    id: 'p5',
    title: 'Chandler School Renovation',
    category: 'Commercial',
    location: 'Chandler, AZ',
    service: 'Ceiling Tile Replacement',
    description: 'Comprehensive replacement of aging ceiling tiles across 20 classrooms during summer break.',
    image: '/images/projects/chandler-school.jpg',
  },
  {
    id: 'p6',
    title: 'Tempe Loft Conversion',
    category: 'Residential',
    location: 'Tempe, AZ',
    service: 'Exposed Grid System',
    description: 'Industrial-style exposed grid and acoustic baffles for a modern loft renovation.',
    image: '/images/projects/tempe-loft.jpg',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'R. Miller',
    role: 'Facility Manager',
    company: 'Corporate office in Mesa',
    content: 'CM Acoustic LLC did an incredible job on our office renovation. Their team was professional, on time, and the ceiling grid is perfectly level. Highly recommend for any commercial work in Mesa.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Office Operations Manager in Phoenix',
    content: 'We hired CM Acoustic for a commercial office project with acoustic ceilings and wall panels. The work was clean, on schedule, and the finished result gave the space a polished, modern feel.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'David Thompson',
    role: 'General Contractor',
    company: 'Retail build-out in Scottsdale',
    content: 'As a GC, I need subcontractors I can rely on. CM Acoustic is my go-to for all ceiling and drywall needs. Their attention to detail and adherence to schedules is top-notch.',
    rating: 5,
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'What is your service area in Arizona?',
    answer: 'We primarily serve Mesa, Phoenix, Scottsdale, Gilbert, Chandler, Tempe, and the surrounding Maricopa County area.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are a fully licensed, bonded, and insured contractor in the state of Arizona. Our license number is ROC356053.',
  },
  {
    question: 'How long does a typical acoustic ceiling installation take?',
    answer: 'The timeline depends on the square footage and complexity, but most commercial office spaces can be completed within 3-7 business days.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Absolutely! We provide free, no-obligation estimates for both residential and commercial projects. Just give us a call or fill out our contact form.',
  },
  {
    question: 'Can you match existing drywall textures?',
    answer: 'Yes, our team is highly skilled at matching a wide variety of textures, from knockdown and orange peel to custom hand-applied finishes.',
  },
  {
    question: 'Do you handle both commercial and residential projects?',
    answer: 'Yes, we have specialized crews for both large-scale commercial tenant improvements and high-end residential drywall and ceiling work.',
  },
];
