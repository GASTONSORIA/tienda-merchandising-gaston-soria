import NavBar from './components/navbar/NavBar';
import ItemListContainer from './container/itemlistcontainer/ItemListContainer'
import ItemDetailContainer from './container/itemdetailcontainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola, soy ItemListContainer!"/>
      <ItemDetailContainer/>
    </div>
  );
}


export default App;