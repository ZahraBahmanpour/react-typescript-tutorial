import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { Product } from "../model/product";

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: Product) => void;
  decreaseCartQuantity: (id: Product) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  totalCartQuantity: number;
  cartItems: CartItem[];
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = { product: Product; quantity: number };
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const increaseCartQuantity = (product: Product) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.product.id === product.id)) {
        return currItems.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else return item;
        });
      } else {
        return [...currItems, { product, quantity: 1 }];
      }
    });
  };

  const decreaseCartQuantity = (product: Product) => {
    setCartItems((currItems) => {
      if (
        currItems.find((item) => item.product.id === product.id)?.quantity === 1
      ) {
        return currItems;
      } else {
        return currItems.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.product.id !== id);
    });
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.product.id === id)?.quantity || 0;
  };
  const totalCartQuantity = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        increaseCartQuantity,
        getItemQuantity,
        decreaseCartQuantity,
        removeFromCart,
        totalCartQuantity,
        openCart,
        closeCart,
        cartItems,
      }}
    >
      <ShoppingCart isOpen={isOpen} />
      {children}
    </ShoppingCartContext.Provider>
  );
}
