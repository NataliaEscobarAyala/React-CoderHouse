import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetail from "./components/ItemDetail";
import CartContextProvider from "./Context/CartContext";
import CartList from "./components/CartList";

function App() {
  return (
    <CartContextProvider>
      <div className="ItemListContainer">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}>
            Inicio
          </Route>
          <Route
            path="producto/:itemId"
            element={<ItemDetailContainer />}
          ></Route>
          <Route
            path="categoria/:catId"
            element={<ItemListContainer />}
          ></Route>
          <Route path="/cart" element={<CartList />}></Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
