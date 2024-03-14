import { createContext, useEffect, useState } from "react";
import { iCartContextProps, iCartContextValue, iCartProduct } from "./types";

import { toast } from "react-toastify";
import { iProduct } from "../storeContext/types";

export const CartContext = createContext({} as iCartContextValue);

export const CartProvider = ({ children }: iCartContextProps) => {
  const [cartList, setCartList] = useState<iCartProduct[]>([]);
  const [productCounter, setProductCounter] = useState<number>(1);

  useEffect(() => {
    (() => {
      const cart = localStorage.getItem("@CART");

      if (cart !== "undefined") {
        const parsedData = JSON.parse(cart || "");
        if (parsedData) {
          setCartList(parsedData);
        }
      }
    })();
  }, []);

  const checkIfProductIsInCart = (id: number): boolean => {
    const product: iCartProduct | undefined = cartList.find(
      (product) => product.id === id
    );

    if (!product) {
      return false;
    }

    return true;
  };

  const addProductToCart = async (
    id: number,
    list: iProduct[]
  ): Promise<void> => {
    const checkProduct: boolean = checkIfProductIsInCart(id);
    const product: iProduct | undefined = list.find(
      (product) => product.id === id
    );

    if (checkProduct) {
      addCounter(id);
    } else {
      if (product) {
        const treatedData = {
          id: product.id,
          title: product.title,
          price: product.price,
          images: product.images,
          counter: 1,
        };
        const updatedCartList = [...cartList, treatedData];
        setCartList(() => updatedCartList);
        localStorage.setItem("@CART", JSON.stringify(updatedCartList));
      }
    }
  };

  const removeProductFromCart = async (id: number): Promise<void> => {
    const checkProduct: boolean = checkIfProductIsInCart(id);

    if (checkProduct) {
      const filterList: iCartProduct[] = cartList.filter(
        (product) => product.id !== id
      );
      const updatedCartList = [...filterList];
      setCartList(() => [...filterList]);
      localStorage.setItem("@CART", JSON.stringify(updatedCartList));
    }
  };

  const addCounter = (id: number): void => {
    setProductCounter(productCounter + 1);
    const updatedCartList: iCartProduct[] = cartList.map((item) =>
      item.id === id ? { ...item, counter: item.counter + 1 } : item
    );
    setCartList(updatedCartList);
    localStorage.setItem("@CART", JSON.stringify(updatedCartList));
  };

  const subtractCounter = (id: number): void => {
    setProductCounter(productCounter - 1);
    const updatedCartList: iCartProduct[] = cartList.map((item) =>
      item.id === id && item.counter > 1
        ? { ...item, counter: item.counter - 1 }
        : item
    );

    setCartList(updatedCartList);
    localStorage.setItem("@CART", JSON.stringify(updatedCartList));
  };

  const getTotalPrice = (): string => {
    const getTotalSum: number[] = cartList.map(
      (product) => product.counter * product.price
    );

    const total: number = getTotalSum.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );

    return total.toFixed(2);
  };

  const clearCart = (): void => {
    cartList.map((product) => (product.counter = 0));
    setCartList([]);
    toast.success("Produtos removidos com sucesso");
  };

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        removeProductFromCart,
        addCounter,
        subtractCounter,
        cartList,
        clearCart,
        getTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};
