interface EventCardProps {
  category: string;
  title: string;
  imageUrl: string;
  date?: string;
  location?: string;
  description: string;
}
type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

type ContactUsFormData = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  service_needed: string;
  message: string;
};

type HeroSectionProps = {
  title: string;
  intro: string;
};

type WhoWeAreSectionProps = {
  heading: string;
  description: string;
};
interface ServicesSectionProps {
  heading: string;
  services: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

interface ProductsSectionProps {
  heading: string;
  products: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
}

type WhyChooseUsSectionProps = {
  heading: string;
  description: string;
};
interface CallToActionSectionProps {
  callToAction: string;
}
