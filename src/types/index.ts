export interface Product {
  id: string;
  name: string;
  price: `$${number}.${number}`;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  isVerified: boolean;
}
