import React from "react";
import { iProduct } from "../storeContext/types";

export interface iCartProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
  counter: number;
}

export interface iCartContextProps {
  children: React.ReactNode;
}

export interface iCartContextValue {
  addProductToCart: (id: number, list: iProduct[]) => void;
  removeProductFromCart: (id: number) => void;
  addCounter: (id: number) => void;
  subtractCounter: (id: number) => void;
  cartList: iCartProduct[];
  clearCart: () => void;
  getTotalPrice: () => string;
}
