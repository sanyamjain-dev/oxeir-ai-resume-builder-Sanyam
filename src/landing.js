import {
  Users,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Building,
  GraduationCap,
  BarChart3,
  FileText,
} from "lucide-react";

const impactMetrics = [
  { icon: Users, text: "Number of learners trained" },
  { icon: TrendingUp, text: "Average SkillScore uplift" },
  { icon: Award, text: "Course completion & certification rate" },
  { icon: Target, text: "Placement/freelance gig success" },
  {
    icon: FileText,
    text: "Testimonials, video logs, learning analytics",
  },
  { icon: BarChart3, text: "Real-time impact dashboard" },
];
const impactStats = [
  { number: "50K+", label: "Learners Trained", icon: Users },
  { number: "85%", label: "SkillScore Uplift", icon: TrendingUp },
  { number: "500+", label: "Corporate Partners", icon: Building },
  { number: "92%", label: "Placement Success", icon: Award },
];

const trainingTracks = [
  {
    name: "Digital Fluency FastTrack",
    idealFor: "Entry-level employees",
    features: ["Tools & Communication", "Remote Work", "Automation Basics"],
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "AI Basics for Workforce",
    idealFor: "Managers, operations staff",
    features: ["AI Literacy", "Productivity Tools", "Future of Work"],
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Freelance to Entrepreneur",
    idealFor: "HR transition programs",
    features: ["Freelancing Skills", "Finance Management", "Client Relations"],
    color: "from-green-500 to-green-600",
  },
  {
    name: "Tech Skilling Modules",
    idealFor: "Tech teams",
    features: ["Web Development", "Python", "No-Code", "Cloud Fundamentals"],
    color: "from-orange-500 to-orange-600",
  },
];

const csrModels = [
  {
    icon: GraduationCap,
    title: "Bootcamp Sponsorship",
    description: "Fund 1-2 week live training + certification for job seekers",
    color: "bg-blue-500",
  },
  {
    icon: Target,
    title: "Placement-Linked Track",
    description: "Pay only when learners are placed (outcome-linked grants)",
    color: "bg-green-500",
  },
  {
    icon: BarChart3,
    title: "SkillScore Tracker CSR",
    description:
      "Fund access to SkillScore + career roadmap for underserved communities",
    color: "bg-purple-500",
  },
  {
    icon: BookOpen,
    title: "Campus Enablement",
    description: "Deploy DemoJustSkillPay LMS in colleges/institutes",
    color: "bg-orange-500",
  },
];

const testimonials = [
  {
    text: "We sponsored 5,000 learners with measurable impact using SkillScore.",
    company: "TechCorp India",
  },
  {
    text: "Our internal HR teams are now upskilled in AI basics within a month.",
    company: "Future Enterprises",
  },
  {
    text: "DemoJustSkillPay allowed us to align our CSR with skilling mandates and real outcomes.",
    company: "Impact Industries",
  },
];

const faqs = [
  {
    question: "Can you customize the LMS for our employees?",
    answer: "Yes. We offer white-label LMS with analytics + co-branding.",
  },
  {
    question: "How do you track skill upliftment?",
    answer: "Using our SkillScore™ AI engine and learner dashboards.",
  },
  {
    question: "Do you provide offline workshops for CSR learners?",
    answer: "Yes, with hybrid delivery options (online + local facilitator).",
  },
  {
    question: "Can we measure placement outcomes?",
    answer: "Yes. We provide reports on placed candidates, gig earnings, etc.",
  },
  {
    question: "What is the minimum sponsorship amount?",
    answer: "We offer models starting from ₹50,000 onwards.",
  },
  {
    question: "Will we get impact reports for CSR audits?",
    answer: "Yes. You receive a verified impact dashboard + learner snapshots.",
  },
];

export {
  impactStats,
  trainingTracks,
  csrModels,
  testimonials,
  faqs,
  impactMetrics,
};
