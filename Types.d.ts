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
