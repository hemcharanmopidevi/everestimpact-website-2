export type Course = {
  id: string;
  slug: string;
  title: string;
  price: number;
  mrp: number;
  image: string;
  exam: string;
  language: string;
  validity: string;
  validityType: string;
  videos: number;
  description: string;
};

export type BrowseItem = {
  title: string;
  href: string;
  note: string;
  category?: string;
  icon: "live" | "recorded" | "test" | "rrb" | "free-test" | "free" | "links" | "result" | "youtube";
};

export const brand = {
  name: "Everest Impact",
  tagline: "SSC coaching in Hyderabad",
  logo: "/logo.png",
  city: "Hyderabad",
  about:
    "Everest Impact brings together Everest Coaching Point and Impact Coaching Centre, Hyderabad. We started with one aim: to take ordinary aspirants and help them become extraordinary public servants.",
};

export const sliders = [
  {
    id: "super-saturday",
    image: "/banner-super-saturday.png",
    link: "/test-series",
    alt: "Super Saturday: free live SSC CGL Tier-I mock test with GS explanation by Shankar Sir",
  },
  {
    id: "10",
    image:
      "https://appx-content-v2.classx.co.in/website_slider/2025-12-13-0_9597799620042444.jpg",
    link: "/courses/computers-course-for-ssc-cgl-tier-ii",
    alt: "Computers course for SSC CGL Tier-II",
  },
  {
    id: "7",
    image:
      "https://appx-content-v2.classx.co.in/website_slider/2026-09-15-0_9946619036606326.png",
    link: "/courses?category=Live%20Courses",
    alt: "Live courses now enrolling",
  },
  {
    id: "13",
    image:
      "https://appx-content-v2.classx.co.in/website_slider/2026-04-19-0_19847042440824658.jpg",
    link: "/courses",
    alt: "All Everest Impact courses",
  },
  {
    id: "9",
    image:
      "https://appx-content-v2.classx.co.in/website_slider/2026-10-16-0_9275426921327663.png",
    link: "/courses/ssc-cgl-chsl-2027-tier-1-recorded-6-months-validity",
    alt: "SSC CGL/CHSL 2027 Tier-I recorded course",
  },
];

export const browseItems: BrowseItem[] = [
  {
    title: "Live courses",
    href: "/courses?category=Live%20Courses",
    note: "Daily classes, doubts cleared in class",
    category: "Live Courses",
    icon: "live",
  },
  {
    title: "Recorded courses",
    href: "/courses?category=Recorded%20Courses",
    note: "The full syllabus on replay",
    category: "Recorded Courses",
    icon: "recorded",
  },
  {
    title: "Test series",
    href: "/courses?category=Test%20Series",
    note: "Timed mocks in the real exam pattern",
    category: "Test Series",
    icon: "test",
  },
  {
    title: "RRB & SI PC",
    href: "/courses?category=RRB",
    note: "Railway and police recruitment",
    icon: "rrb",
  },
  {
    title: "Free test series",
    href: "/test-series",
    note: "Super Saturday mocks, free every week",
    icon: "free-test",
  },
  {
    title: "Free course",
    href: "/courses?free=1",
    note: "Sample lessons before you commit",
    icon: "free",
  },
];

export const steps = [
  {
    id: "basics",
    title: "Build the basics",
    text: "Arithmetic, grammar and reasoning from zero. No earlier coaching needed.",
    href: "/courses/maths-ssc-october-live-batch-2026-6-months-validity",
    cta: "Maths live batch",
  },
  {
    id: "tier-1",
    title: "Finish the Tier-I syllabus",
    text: "Every Tier-I topic in recorded lessons you can replay as often as you need.",
    href: "/courses/ssc-cgl-chsl-2027-tier-1-recorded-6-months-validity",
    cta: "Tier-I recorded course",
  },
  {
    id: "tier-2",
    title: "Go deeper for Tier-II",
    text: "Sudarshanchakra 2.0 covers Tier-II Quant and English in live classes.",
    href: "/courses/cgl-tier-ii-2026-sudarshanchakra-20",
    cta: "Sudarshanchakra 2.0",
  },
  {
    id: "mocks",
    title: "Practise with mock tests",
    text: "Full-length mocks in the real exam pattern, plus a free test every Saturday.",
    href: "/test-series",
    cta: "Mock tests",
  },
  {
    id: "revise",
    title: "Revise weak topics",
    text: "Use your mock scores to decide what to revise, and plan it day by day.",
    href: "/planner",
    cta: "Study planner",
  },
  {
    id: "selected",
    title: "Get selected",
    text: "Our students have cleared CGL, CGST, Excise, Postal and Tax Assistant posts.",
    href: "/#results",
    cta: "See our results",
  },
];

export const courses: Course[] = [
  {
    id: "596",
    slug: "ssc-cgl-chsl-2027-tier-1-recorded-6-months-validity",
    title: "SSC CGL/CHSL 2027 Tier-I, recorded (6 months)",
    price: 4999,
    mrp: 8888,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-12-0_19526519991280078.png",
    exam: "Recorded Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 632,
    description:
      "Complete recorded Tier-I preparation for SSC CGL and CHSL 2027, with six months to work through it.",
  },
  {
    id: "597",
    slug: "ssc-cgl-chsl-2027-tier-1-recorded-4-months-validity",
    title: "SSC CGL/CHSL 2027 Tier-I, recorded (4 months)",
    price: 3499,
    mrp: 6999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-15-0_21767521996849315.png",
    exam: "Recorded Courses",
    language: "English",
    validity: "4",
    validityType: "MONTHS",
    videos: 500,
    description:
      "A focused recorded Tier-I batch for SSC CGL and CHSL, with four months of access.",
  },
  {
    id: "605",
    slug: "cgl-tier-ii-2026-sudarshanchakra-20",
    title: "CGL Tier-II 2026: Sudarshanchakra 2.0",
    price: 999,
    mrp: 6999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-14-0_4197332121606143.png",
    exam: "Live Courses",
    language: "English",
    validity: "4",
    validityType: "MONTHS",
    videos: 120,
    description: "The Sudarshanchakra 2.0 live programme for SSC CGL Tier-II 2026.",
  },
  {
    id: "606",
    slug: "cgl-tier-ii-2026-tier-i-recorded-sudarshanchakra-20",
    title: "CGL Tier-II 2026 + Tier-I recorded: Sudarshanchakra 2.0",
    price: 2999,
    mrp: 4999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-14-0_17949508063808683.png",
    exam: "Live Courses",
    language: "English",
    validity: "4",
    validityType: "MONTHS",
    videos: 240,
    description: "Tier-II live classes with the full Tier-I recorded course included.",
  },
  {
    id: "588",
    slug: "vijayosthu-cgl-rapid-mock-2026-2o",
    title: "Vijayosthu CGL Rapid Mock 2026 2.0",
    price: 99,
    mrp: 99,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-09-15-0_3750603443326114.png",
    exam: "Test Series",
    language: "English",
    validity: "3",
    validityType: "MONTHS",
    videos: 80,
    description: "Rapid mock tests for CGL aspirants, with solutions after every paper.",
  },
  {
    id: "591",
    slug: "ssc-cgl-chsl-live-batch-october-2026-12-months-validity",
    title: "SSC CGL/CHSL live batch, October 2026 (12 months)",
    price: 8888,
    mrp: 15999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-02-0_44759778344671497.png",
    exam: "Live Courses",
    language: "English",
    validity: "12",
    validityType: "MONTHS",
    videos: 0,
    description: "A full year of live classes for SSC CGL and CHSL, starting October 2026.",
  },
  {
    id: "581",
    slug: "ssc-gd-2027-live-batch-zero-to-gd-bilingual",
    title: "SSC GD 2027 live batch: Zero to GD (bilingual)",
    price: 5000,
    mrp: 12999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-08-24-0_011541848932745236.png",
    exam: "Live Courses",
    language: "Bilingual",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "From zero to SSC GD 2027, taught in English and Telugu.",
  },
  {
    id: "592",
    slug: "ssc-cgl-chsl-live-batch-october-2026-6-months-validity",
    title: "SSC CGL/CHSL live batch, October 2026 (6 months)",
    price: 5555,
    mrp: 12999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-02-0_5444061367089984.png",
    exam: "Live Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "Six months of live classes for SSC CGL and CHSL, starting October 2026.",
  },
  {
    id: "595",
    slug: "maths-ssc-october-live-batch-2026-6-months-validity",
    title: "Maths live batch for SSC, October 2026 (6 months)",
    price: 2999,
    mrp: 6999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-02-0_2927052389445556.png",
    exam: "Live Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "A dedicated Maths live batch for SSC aspirants.",
  },
  {
    id: "593",
    slug: "english-live-batch-october-2026-6-months-validity",
    title: "English live batch, October 2026 (6 months)",
    price: 2999,
    mrp: 7000,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-10-02-0_1622949511514925.png",
    exam: "Live Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "English live classes built around SSC question patterns.",
  },
  {
    id: "594",
    slug: "reasoning-october-ssc-live-batch-2026-6-months-validity",
    title: "Reasoning live batch for SSC, October 2026 (6 months)",
    price: 1999,
    mrp: 5999,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-08-27-0_009620156671559799.png",
    exam: "Live Courses",
    language: "English",
    validity: "6",
    validityType: "MONTHS",
    videos: 0,
    description: "Reasoning live classes for the October SSC batch.",
  },
  {
    id: "565",
    slug: "target-ssc-cgl-2026-special-course",
    title: "Target SSC CGL 2026: special course",
    price: 4000,
    mrp: 8000,
    image:
      "https://appx-content-v2.classx.co.in/paid_course3/2026-05-27-0_6664215565127225.png",
    exam: "Live Courses",
    language: "English",
    validity: "4",
    validityType: "MONTHS",
    videos: 300,
    description: "A special target course for SSC CGL 2026 aspirants.",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  detail?: string;
  image?: string;
};

export const expertTeam: TeamMember[] = [
  {
    id: "5",
    name: "B. Sreenivasulu Reddy",
    role: "Founder",
    detail: "Director & English Faculty",
    image: "/faculty/b-srinivasulu.jpg",
  },
  {
    id: "1",
    name: "Devaraj Burra",
    role: "Lead Instructor",
    detail: "Senior Faculty",
  },
  {
    id: "2",
    name: "Mallikharjunareddy Bodanapu",
    role: "Co-Founder",
  },
  {
    id: "3",
    name: "Satheesh Dannuri",
    role: "Co-Founder",
    detail: "Ex: Google, IIT KGP",
  },
  {
    id: "4",
    name: "Singam Srinivas Reddy",
    role: "Co-Founder",
    detail: "Ex: IBM Labs, AppliedAI, IITKGP",
  },
  {
    id: "9",
    name: "Shiva Shankar",
    role: "GS Faculty",
    detail: "GS Maestro",
    image: "/faculty/shiva-shankar.jpg",
  },
  {
    id: "6",
    name: "B. Rajkumar",
    role: "Maths Faculty",
    detail: "Senior Faculty",
    image: "/faculty/b-rajkumar.jpg",
  },
  {
    id: "7",
    name: "Jain",
    role: "Subject Expert",
    detail: "Senior Faculty",
    image: "/faculty/suparas-chand-jain.jpg",
  },
  {
    id: "8",
    name: "Kalyan",
    role: "Reasoning Faculty",
    detail: "Senior Faculty",
    image: "/faculty/kalyan.jpg",
  },
  {
    id: "10",
    name: "Basha",
    role: "Faculty",
    detail: "Senior Faculty",
    image: "/faculty/basha.jpg",
  },
  {
    id: "11",
    name: "Thanuja",
    role: "Faculty",
    detail: "Senior Faculty",
    image: "/faculty/thanuja.jpg",
  },
];

export type RecordResult = {
  id: string;
  name: string;
  exam: string;
  year: string;
  rank: number;
  interview?: string;
};

export const recordResults: RecordResult[] = [
  { id: "1", name: "Guttula Yasaswani Sri", exam: "CGST Inspector", year: "2023", rank: 1 },
  {
    id: "2",
    name: "Prashanth Banoth",
    exam: "SSC CGL",
    year: "2023",
    rank: 1,
    interview: "/videos",
  },
  { id: "3", name: "Khagga Nagaraju", exam: "Excise Inspector", year: "2023", rank: 3 },
  {
    id: "4",
    name: "Sai Sudheer Talapala",
    exam: "Postal Assistant",
    year: "2023",
    rank: 1,
    interview: "/videos",
  },
  { id: "5", name: "Rajaji Bathula", exam: "Tax Assistant", year: "2023", rank: 1 },
  {
    id: "6",
    name: "Srinivas Goturu",
    exam: "Excise Inspector",
    year: "2023",
    rank: 1,
    interview: "/videos",
  },
];

export type SuccessStory = {
  id: string;
  name: string;
  achievement: string;
};

export const successStories: SuccessStory[] = [
  { id: "1", name: "Singanamoni Saritha", achievement: "SI/Constable (2022)" },
  { id: "2", name: "Guttula Yasaswani Sri", achievement: "CGST Inspector" },
  { id: "3", name: "Prashanth Banoth", achievement: "CGST Inspector (2023)" },
  { id: "4", name: "Khagga Nagaraju", achievement: "Excise Inspector (2023)" },
  { id: "5", name: "Sai Sudheer Talapala", achievement: "Postal Assistant" },
  { id: "6", name: "Rajaji Bathula", achievement: "Tax Assistant (CBIC)" },
  { id: "7", name: "Srinivas Goturu", achievement: "Excise Inspector" },
  { id: "8", name: "Anusha Reddy", achievement: "SSC CGL (2023)" },
];

export const testimonials = [
  {
    name: "Prashanth Kumar",
    rating: 5,
    text: "Very useful app. Nice features. Prices are reasonable. Teaching is unique. Must choose Everest for SSC exams.",
  },
  {
    name: "Sahith Raja",
    rating: 5,
    text: "Excellent for all SSC exams. Top-notch faculty and explanations.",
  },
  { name: "Manoj Kumar", rating: 5, text: "Top-notch quality content for SSC CGL." },
  { name: "Y. Madhu", rating: 5, text: "Good faculty. This is the best source to clear SSC CGL." },
  { name: "Kanthi Bhukya", rating: 5, text: "Nice explanation." },
  { name: "Mahakali Kalyan", rating: 5, text: "Excellent teaching." },
  { name: "Sunil Kumar", rating: 5, text: "Good content." },
  { name: "B. Prem Kumar", rating: 5, text: "Good app." },
  { name: "Vijay Raghava", rating: 5, text: "Excellent." },
];

export const youtubeVideos = [
  {
    id: "1",
    title: "English grammar in one shot: 150 golden rules",
    length: "Marathon",
    href: "https://www.youtube.com",
  },
  {
    id: "2",
    title: "English vocabulary improvement course",
    length: "Series",
    href: "https://www.youtube.com",
  },
  {
    id: "3",
    title: "SSC preparation strategy: a topper interview",
    length: "Interview",
    href: "https://www.youtube.com",
  },
];

export const categoryLabel: Record<string, string> = {
  "Live Courses": "Live course",
  "Recorded Courses": "Recorded course",
  "Test Series": "Test series",
};

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}
