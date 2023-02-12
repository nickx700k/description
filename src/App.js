import "./App.css";
import data from "./data/db.json";
import Cards from "./components/Cards.tsx";
import Moreinfo from "./components/Moreinfo.tsx";

function App() {
  return (
    <div className="App">
      <Moreinfo />
      {data?.Games.map((game) => (
        <Cards card={game} />
      ))}
    </div>
  );
}

export default App;
