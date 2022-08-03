import { createContext, ReactNode, useContext, useState } from "react";

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = { id: number; quantity: number };
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
      } else {
        return [...currItems, { id, quantity: 1 }];
      }
    });
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  return (
    <ShoppingCartContext.Provider
      value={{ increaseCartQuantity, getItemQuantity }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
