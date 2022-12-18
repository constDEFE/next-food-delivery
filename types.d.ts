export type Filter = "all" | "burger" | "pizza" | "bread";
export type Tab = "desc" | "review";
export type Sort = "default" | "a-z" | "z-a" | "high" | "low";

export interface Food {
  id: number;
  title: string;
  price: number;
  image1: string;
  image2: string;
  image3: string;
  category: string;
  description: string;
  reviews: Review[];
}

export interface CartItem extends Food {
  quantity: number;
  totalPrice: number;
}

export interface Testimonial {
  id: number;
  author: string;
  image: string;
  content: string;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalQuantity: number;
}

export interface Review {
  id: string;
  author: string;
  email: string;
  content: string;
}
