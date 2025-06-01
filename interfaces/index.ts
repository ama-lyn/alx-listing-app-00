// Props expected by the Card component
export interface CardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  price: number;
  onClick?: () => void;
}

// Props expected by the Button component
export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit';
}
