import { createContext, useState } from "react";
export const CartContext = createContext([]);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cantidadTotal, setCantidadTotal] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);

  const addToCart = (cantidad, item) => {
    //Si la funcion 'isOncart' devuelve true, significa que en el carrito ya existe un producto con ese id
    //por lo tanto, solo se debe sumar la cantidad ingresada
    
    if (isOnCart(item.id)) {
      sumarCantidad(cantidad, item);
    } else {
      //Si la funcion 'isOncart' devuelve false, significa que en el carrito no existe un producto con ese id
      // por lo tanto se debe agregar ese nuevo producto al carrito, es decir que se setea la variable de estado "cart"
      setCart([
        ...cart,
        { ...item, cantidad, totalPrice: cantidad * item.price },
      ]);
    }
    setCantidadTotal(cantidadTotal + cantidad);
    setPrecioTotal(precioTotal + cantidad * item.price);
  };

  //Esta funcion devuelve true o false en caso de que el producto agregado se encuentre en el carrito.
  const isOnCart = (Id) => {
    return cart.some((item) => item.id === Id);
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
    setPrecioTotal(precioTotal);
  };

  const vaciarCarrito = () => {
    setCart([]);
    setCantidadTotal(0);
    setPrecioTotal(0);
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
        precioTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
