export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  imageAlt: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  review: string;
  rating: number;
  initials: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  projectLocation: string;
  message: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface WhyPoint {
  title: string;
  description: string;
}
