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

type ContactusFormData = {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  service_needed: string;
  message: string;
}
