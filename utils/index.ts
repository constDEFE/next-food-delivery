import { CartItem, CartState } from "../types";

export const getCachedItems = (): CartItem[] => {
  const items = localStorage.getItem("cartItems");

  return items ? JSON.parse(items) : [];
};

export const getCachedTotalPrice = (): number => {
  const totalPrice = localStorage.getItem("totalPrice");

  return totalPrice ? JSON.parse(totalPrice) : 0;
};

export const getCachedTotalQuantity = (): number => {
  const totalQuantity = localStorage.getItem("totalQuantity");

  return totalQuantity ? JSON.parse(totalQuantity) : 0;
};

export const getCachedCartState = (): CartState => {
  const items = getCachedItems();
  const totalPrice = getCachedTotalPrice();
  const totalQuantity = getCachedTotalQuantity();

  return {
    items,
    totalPrice,
    totalQuantity,
  };
};

export const cacheItems = (items: CartItem[], totalPrice: number, totalQuantity: number): void => {
  localStorage.setItem("cartItems", JSON.stringify(items));
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

export const capitalize = (string: string): string => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

export const getRandomId = (): string => {
  return window.crypto.randomUUID();
};
