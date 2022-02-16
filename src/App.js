import ItemListContainer from "./components/ItemListContainer";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <div className="ItemListContainer">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}>
          Inicio
        </Route>
        <Route
          path="producto/:itemId"
          element={<ItemDetailContainer/>}
        ></Route>
        <Route
          path="categoria/:catId"
          element={<ItemListContainer />}
        ></Route>
        <Route
         path="/cart"
         element={<ItemDetail />}>
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
