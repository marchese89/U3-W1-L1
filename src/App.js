import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent nome_button="Bottone" />
        <ImageComponent src="https://placedog.net/400" alt="dog" />
      </header>
    </div>
  );
}

export default App;
