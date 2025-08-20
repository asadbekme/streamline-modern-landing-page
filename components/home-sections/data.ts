import {
  BarChart3,
  Clock,
  Shield,
  Zap,
  Mail,
  MapPin,
  Phone,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export const navigationLinks = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export const features = [
  {
    name: "Lightning Fast",
    description:
      "Our platform is optimized for speed, ensuring your team can work without delays.",
    icon: Clock,
  },
  {
    name: "Secure",
    description:
      "We prioritize security, ensuring your data and information are protected at all times.",
    icon: Shield,
  },
  {
    name: "Intuitive",
    description:
      "Our user-friendly interface makes it easy for you to navigate and manage your projects.",
    icon: BarChart3,
  },
  {
    name: "Time-Saving",
    description:
      "Automation features that save your team hours of manual work every week.",
    icon: Zap,
  },
];

export const testimonials = [
  {
    quote:
      "StreamLine has completely transformed how our team works. We've cut our project delivery time in half!",
    name: "Sarah Johnson",
    position: "CTO, TechCorp",
    imageSrc: "/testimonials/testimonial1.jpg",
  },
  {
    quote:
      "The analytics features alone are worth the investment. We've gained insights we never had before.",
    name: "Michael Chen",
    position: "Product Manager, InnovateCo",
    imageSrc: "/testimonials/testimonial2.jpg",
  },
  {
    quote:
      "Customer support is exceptional. Any issues we've had were resolved within hours, not days.",
    name: "Emily Rodriguez",
    position: "Operations Director, GrowthLabs",
    imageSrc: "/testimonials/testimonial3.jpg",
  },
];

export const plans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfect for small teams just getting started.",
    price: "$29",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "5GB storage",
      "Email support",
    ],
  },
  {
    id: 2,
    name: "Pro",
    description: "For growing teams that need more.",
    price: "$79",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "20GB storage",
      "Priority support",
      "Advanced integrations",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    description: "For large organizations with specific needs.",
    price: "$199",
    features: [
      "Unlimited team members",
      "Custom analytics",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom integrations",
      "On-premise deployment option",
    ],
  },
];

export const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 000-0000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "i8U1o@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "123 Innovation Drive, San Francisco, CA 94103",
  },
];

export const footerLinks = [
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#terms", label: "Terms of Service" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  { href: "https://x.com", icon: Twitter, label: "Twitter" },
  { href: "https://www.instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com", icon: Linkedin, label: "LinkedIn" },
];
