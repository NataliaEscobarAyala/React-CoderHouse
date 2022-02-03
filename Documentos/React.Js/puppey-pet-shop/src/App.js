import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App({initial}) {
  
  return (
    <div className="ItemListContainer">
          <ItemListContainer stock={5} initial={1}/>
    </div>
  );
}

export default App;


