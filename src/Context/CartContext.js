import { createContext, useState } from "react";
export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const addToCart = (cantidad, item) => {
    if (isOnCart(item.id)) {
      sumarCantidad(cantidad, item);
    } else {
      setCart([
        ...cart,
        { ...item, cantidad, totalPrice: cantidad * item.price },
      ]);
      setCantidadTotal(cantidadTotal + cantidad);
    }
    console.log(cart);
  };

  const isOnCart = (Id) => {
    return cart.some((item) => item.Id === Id);
  };

  const sumarCantidad = (cantidad, item) => {
    const copia = [...cart];

    copia.forEach((producto) => {
      if (producto.Id === item.Id) {
        producto.cantidad += cantidad;
      }
    });
    setCart(copia);
  };

  const sumaTotales = () => {
    const copia = [...cart];
    const precioTotal = copia.reduce(
      (acumulador, item) => acumulador + item.totalPrice,
      0
    );
    const cantidadTotal = copia.reduce(
      (acumulador, item) => acumulador + item.cantidad,
      0
    );
    setCantidadTotal(cantidadTotal);
  };

  const vaciarCarrito = () => {
    setCart([]);
    setCantidadTotal(0);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((producto) => producto.id !== id));

    const filtproduct = cart.filter((producto) => producto.id === id);

    setCantidadTotal(cantidadTotal - filtproduct[0].cantidad);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        vaciarCarrito,
        deleteItem,
        sumaTotales,
        cantidadTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
