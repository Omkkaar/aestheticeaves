import { ServiceItem, MetricItem, PortfolioItem, Testimonial, FAQItem } from './types';

// ==========================================
// BRAND & GLOBAL CONFIG
// ==========================================
export const BRAND_NAME = "Aesthetic Eaves";
export const BRAND_SUBTITLE = "Architects & Interior Designers";
export const CONTACT_PHONE = "9028774254";
export const CONTACT_EMAIL = "sales@aestheticeaves.com";
export const CONTACT_ADDRESS_LINE1 = "G-19, Ground Floor, Destination Center-1";
export const CONTACT_ADDRESS_LINE2 = "Nanded City, Sinhagad Road, Pune";
export const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Aesthetic+Eaves+Pune";
export const LOGO_SRC = "/assets/logo/logo.png";
export const WHATSAPP_MESSAGE = "Hello! I'm interested in your design services. Could we schedule a call?";

// ==========================================
// NAVIGATION
// ==========================================
export const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Process', href: '#process' },
  { name: 'Founder', href: '#founder' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Reviews', href: '#reviews' },
];

// ==========================================
// CTA TEXTS
// ==========================================
export const PRIMARY_CTA_TEXT = "Learn More about Our Design Process";
export const SECONDARY_CTA_TEXT = "Understand Our Design Process";

// ==========================================
// HERO SECTION
// ==========================================
export const HERO_BRAND_TITLE = "Aesthetic Eaves";
export const HERO_CTA_TEXT = PRIMARY_CTA_TEXT;

// YouTube Video IDs for Hero (Fetched from channel)
export const HERO_REELS = [
  { id: "vD0-g7x9nI8", poster: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" },
  { id: "J8m3D8V67XU", poster: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" }
];

// ==========================================
// SERVICES SECTION
// ==========================================
export const SERVICES_HEADING = "Our Core Expertise";
export const SERVICES: ServiceItem[] = [
  {
    title: "Architecture Design",
    features: [
      "Advisory consultancy",
      "Site & requirement review",
      "Design approach guidance",
      "Budget consideration logic",
      "Suggested professional way forward"
    ]
  },
  {
    title: "Interior Design",
    features: [
      "Personalized moodboards",
      "Smart space planning",
      "30+ design styles",
      "On-site woodwork logic",
      "Premium material guidance",
      "Budget & EMI planning"
    ]
  }
];

// ==========================================
// METRICS SECTION
// ==========================================
export const METRICS_HEADING = "Numbers That Speak Quality Itself";
export const METRICS: MetricItem[] = [
  { value: "50+", label: "Homes Designed & Executed" },
  { value: "10–15 Weeks", label: "Average Design to Execution" },
  { value: "100%", label: "On-Site Custom Craftsmanship" },
  { value: "Zero", label: "Factory Dependence" },
  { value: "5.0★", label: "Rated on Google" }
];

// ==========================================
// PORTFOLIO SECTION
// ==========================================
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, type: 'image', src: '/assets/portfolio/images/interior-01.jpg.jpg', alt: 'Living Room TV Unit with Cove Lighting' },
  { id: 2, type: 'image', src: '/assets/portfolio/images/interior-02.jpg.jpg', alt: 'Contemporary Lounge with Floral Wallpaper' },
  { id: 3, type: 'image', src: '/assets/portfolio/images/interior-03.jpg.jpeg', alt: '4-Story Modern Architecture Villa' },
  { id: 6, type: 'image', src: '/assets/portfolio/images/interior-06.jpg.jpg', alt: 'Minimalist Lounge with Chess Table' },
  { id: 7, type: 'image', src: '/assets/portfolio/images/interior-07.jpg.jpg', alt: 'Bespoke Chess Set Detail' },
  { id: 10, type: 'image', src: '/assets/portfolio/images/interior-10.jpg.jpg', alt: 'Sliding Gloss Wardrobe with Tan Inlay' },
  { id: 11, type: 'image', src: '/assets/portfolio/images/interior-11.jpg.jpg', alt: 'Beige Minimalist Bedroom Sanctuary' },
  { id: 12, type: 'image', src: '/assets/portfolio/images/interior-12.jpg.jpg', alt: 'Bedroom with Geometric Panelled Wall' },
  { id: 13, type: 'image', src: '/assets/portfolio/images/interior-13.jpg.jpg', alt: 'Back-lit Ganesha Mandir Unit' },
  { id: 14, type: 'image', src: '/assets/portfolio/images/interior-14.jpg.jpg', alt: 'Marble Feature Wall with Built-in Bench' },
  { id: 15, type: 'image', src: '/assets/portfolio/images/interior-15.jpg.jpg', alt: 'Dining Corner with Green Booth Seating' }
];

// Portfolio YouTube Video IDs (Fetched from official channel shorts)
export const PORTFOLIO_REELS: PortfolioItem[] = [
  { id: 101, type: 'video', src: 'M6Z-68N4q88', alt: 'BHK Interior Reveal' },
  { id: 102, type: 'video', src: 'QdE9S3yP4g4', alt: 'Luxury Master Bedroom' },
  { id: 103, type: 'video', src: 'zD6-U0k8R44', alt: 'Kitchen Space Planning' },
  { id: 104, type: 'video', src: 'N8V7B6_X8wM', alt: 'Villa Site Walkthrough' },
  { id: 105, type: 'video', src: 'X7wG3R8N2k0', alt: 'Ganesh Mandir Unit' },
  { id: 106, type: 'video', src: 'V8N9m2X7k08', alt: 'Modern Living Tour' },
  { id: 107, type: 'video', src: 'J2m8R7X5v01', alt: 'Bungalow Architecture' },
];

// ==========================================
// PROCESS SECTION
// ==========================================
export const PROCESS_STEPS = [
  "Know Our Design Process Call",
  "Requirement & Site Study",
  "Moodboard & Design Direction",
  "Concept & Space Planning",
  "Detailing & Material Finalisation",
  "Design Governance & Coordination",
  "Project Completion & handover"
];

// ==========================================
// WHY US SECTION
// ==========================================
export const WHY_US_POINTS = [
  "Design clarity before execution",
  "Intelligent space planning",
  "On-site craftsmanship control",
  "Premium material intelligence",
  "Client comfort & transparency",
  "Calm, professional guidance"
];

// ==========================================
// CONSULTATION FORM LINKS
// ==========================================
export const RAZORPAY_INTERIOR_URL = "https://pages.razorpay.com/pl_RXGjTh8qZkfAMR/view";
export const RAZORPAY_ARCHITECTURE_URL = "https://pages.razorpay.com/designdiscoverymeeting";

// ==========================================
// REVIEWS SECTION
// ==========================================
export const REVIEWS: Testimonial[] = [
  { id: 1, name: "Aditi S.", role: "Homeowner", text: "Aesthetic Eaves transformed our house into a home. The clarity in design and execution was unmatched.", rating: 5 },
  { id: 2, name: "Rahul M.", role: "Commercial Client", text: "Professional, timely, and incredibly talented. Omkar's attention to detail saved us so much time.", rating: 5 },
  { id: 3, name: "Sneha P.", role: "Interior Renovation", text: "No hidden costs, no surprises. Just pure design integrity. Highly recommended.", rating: 5 },
  { id: 4, name: "Vikram R.", role: "Villa Owner", text: "The on-site craftsmanship is superior to any factory-made furniture I have seen.", rating: 5 },
  { id: 5, name: "Priya K.", role: "Apartment Interior", text: "They respected our budget without compromising on the look.", rating: 5 },
];

// ==========================================
// FOUNDER SECTION
// ==========================================
export const FOUNDER_NAME = "Ar. Omkar Kulkarni";
export const FOUNDER_TITLE = "Principal Architect & Founder";
export const FOUNDER_EXPERIENCE_YEARS = "13+ Years";
export const FOUNDER_DESC_1 = "Ar. Omkar R. Kulkarni is the visionary force behind Aesthetic Eaves, bringing 13+ years of professional expertise to the practice.";
export const FOUNDER_DESC_2 = "Throughout his career, he has worked with some of the most reputed names in the industry, gaining invaluable experience in design, execution, and project leadership.";
export const FOUNDER_DESC_3 = "With years of expertise in design detailing and on-site execution, Omkar guides each project personally—ensuring interiors are both beautiful and technically perfect.";
export const FOUNDER_DESC_4 = "His approach blends space intelligence, craftsmanship, and client comfort, making every home a design journey, not just a project.";
export const FOUNDER_QUOTE = "“We don’t just design spaces. We design experiences that reflect the people living in them.”";
export const FOUNDER_IMAGE_SRC = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"; 
export const FOUNDER_IMAGE_FALLBACK = "https://picsum.photos/600/800?grayscale"; 

export const FOUNDER_EXPERTISE = [
  { title: "Architecture Design", desc: "Holistic site & budget planning." },
  { title: "Interior Detailing", desc: "Technical precision in every corner." },
  { title: "Site Governance", desc: "Hands-on execution leadership." },
  { title: "Material Intel", desc: "Curating long-lasting premium quality." }
];

// ==========================================
// FAQ SECTION
// ==========================================
export const FAQS: FAQItem[] = [
  {
    question: "Why is there a fee for the Know Our Design Process Call?",
    answer: "We work only with serious homeowners. The fee ensures dedicated time, professional expertise, and meaningful guidance — not free quotations."
  },
  {
    question: "What is the Interior Design timeline?",
    answer: "Our 3-month Interior Design service agreement ensures structured planning, smooth execution, and controlled timelines without delays."
  },
  {
    question: "What material quality do you use?",
    answer: "We recommend E0 waterproof boards for wet areas and E1 grade boards elsewhere. All finishes are bacteria-free, formaldehyde-free, and safe for indoor environments."
  },
  {
    question: "Is on-site execution involved or factory modular systems?",
    answer: "All interiors are executed through 100% on-site custom craftsmanship, ensuring precision and design integrity that factory systems often lack."
  },
  {
    question: "Can clients visit the site during execution?",
    answer: "Yes. One pre-scheduled weekly visit, accompanied by an AE designer, is permitted to ensure transparency and updates."
  },
  {
    question: "Do you offer EMI flexibility?",
    answer: "Yes. EMI options are available based on bank terms and credit card eligibility to make luxury design more accessible."
  },
  {
    question: "How do we begin?",
    answer: "Start with a one-on-one Know Our Design Process Call to understand your project scope, our process, and the next steps clearly."
  }
];

// ==========================================
// LEGAL DOCUMENTS
// ==========================================
export const PRIVACY_POLICY_URL = "https://www.termsfeed.com/live/27b24541-04c7-4183-bde0-c26e1445a1e2";

export const REFUND_POLICY = {
  title: "Refund Policy for Aesthetic Eaves",
  sections: [
    {
      heading: "1. General Refund Terms:",
      content: [
        "Refunds for Aesthetic Eaves' services are generally non-refundable once the design process has commenced.",
        "If a project is terminated by the client before the design work has started, a partial refund may be issued after deducting any administrative and consultation fees incurred up to that point.",
        "For any changes in the project scope requested by the client after the design has begun, additional charges may apply, and refunds will not be provided for work already completed."
      ]
    },
    {
      heading: "2. Refunds for Delayed Projects:",
      content: [
        "Aesthetic Eaves provides design and general supervision services only. Any delays in the project timeline are typically due to factors outside the control of Aesthetic Eaves, such as delays by contractors, vendors, suppliers, or OEMs.",
        "In cases where delays occur due to contractors, vendors, suppliers, or OEMs, Aesthetic Eaves will not be responsible for issuing refunds.",
        "Clients are responsible for their timely decisions, approvals, and actions that may impact the project's timeline. Aesthetic Eaves will not provide refunds for delays caused by clients' indecision or late approvals."
      ]
    },
    {
      heading: "3. No Refund for Change in Services:",
      content: [
        "Once the design phase has commenced, clients cannot switch to a different service package or downgrade their service without forfeiting the fees paid for the original service package."
      ]
    },
    {
      heading: "4. Disputes:",
      content: [
        "Any disputes regarding refunds will be handled as per the terms outlined in the service agreement signed by the client at the beginning of the project."
      ]
    },
    {
      heading: "5. Final Decision:",
      content: [
        "The final decision on all refund matters rests with Aesthetic Eaves and its Principal Architect, Ar. Omkar Ramesh Kulkarni."
      ]
    }
  ],
  footer: "This refund policy is intended to clarify the conditions under which refunds may be provided and to protect both the client and Aesthetic Eaves from misunderstandings or miscommunications regarding project timelines and responsibilities."
};

export const TERMS_AND_CONDITIONS = {
  title: "Terms & Conditions for Aesthetic Eaves",
  sections: [
    {
      heading: "1. General Overview",
      content: "These Terms & Conditions govern the use of architectural and interior design services provided by Aesthetic Eaves, led by Principal Architect Ar. Omkar Ramesh Kulkarni. By engaging our services, clients agree to the terms set forth below."
    },
    {
      heading: "2. Scope of Services",
      content: "Aesthetic Eaves offers a comprehensive range of architectural and interior design services, including but not limited to residential, commercial, and mixed-use projects. Our services encompass conceptual design, space planning, material selection, and the creation of detailed working drawings."
    },
    {
      heading: "3. Appointment of Contractors and Vendors",
      content: [
        "Aesthetic Eaves will assist in the selection and appointment of contractors, vendors, and Original Equipment Manufacturers (OEMs) on behalf of the client.",
        "The client acknowledges that these third parties are appointed solely for the execution of their project, and they will be responsible for their work quality, timelines, and adherence to safety protocols.",
        "Aesthetic Eaves will not be liable for any negligence, delays, accidents, or mishaps that occur on-site due to the actions or inactions of the appointed contractors, vendors, or OEMs."
      ]
    },
    {
      heading: "4. Design Process",
      content: [
        "All design concepts and plans developed by Aesthetic Eaves are the intellectual property of the firm and cannot be replicated or used for other purposes without prior written consent.",
        "Any changes to the design or scope of work must be communicated in writing and may result in additional costs or project timeline adjustments."
      ]
    },
    {
      heading: "5. Material Selection and Quality",
      content: "Aesthetic Eaves prioritizes the use of branded materials to ensure the highest quality in design execution. If the client opt for local materials, Aesthetic Eaves will not be held responsible for any quality issues arising from their use."
    },
    {
      heading: "6. Project Timeline",
      content: "While Aesthetic Eaves will make every effort to meet project timelines, the firm is not liable for delays caused by unforeseen circumstances, including but not limited to delays caused by third-party contractors, vendors, or OEMs."
    },
    {
      heading: "7. Payment Terms",
      content: [
        "Payment schedules will be outlined in the client agreement. Failure to adhere to the agreed payment schedule may result in project delays or the suspension of services.",
        "Any additional services or changes to the project scope will be billed separately and must be paid as per the terms outlined in the change order."
      ]
    },
    {
      heading: "8. Site Supervision",
      content: "Aesthetic Eaves will provide site supervision as part of its services to ensure that the design is executed as planned. However, site supervision does not extend to managing the day-to-day activities of contractors, vendors, or OEMs and it doesn't involve full time site supervision."
    },
    {
      heading: "9. Liability",
      content: [
        "Aesthetic Eaves will not be liable for any damages, losses, or injuries sustained on-site due to the actions or inactions of third-party contractors, vendors, or OEMs.",
        "The client agrees to indemnify and hold Aesthetic Eaves harmless from any claims arising from the work performed by third-party contractors, vendors, or OEMs."
      ]
    },
    {
      heading: "10. Termination of Services",
      content: "Either party may terminate the agreement by providing written notice. Termination fees may apply, depending on the stage of the project and the amount of work completed."
    },
    {
      heading: "11. Disputes",
      content: "Any disputes regarding refunds will be handled as per the terms outlined in the service agreement signed by the client at the beginning of the project."
    },
    {
      heading: "12. Governing Law",
      content: "These Terms & Conditions are governed by the laws of India and are subject to the jurisdiction of the courts in Pune, Maharashtra."
    }
  ],
  footer: "By engaging Aesthetic Eaves for your architectural and interior design needs, you acknowledge that you have read, understood, and agreed to these Terms & Conditions."
};