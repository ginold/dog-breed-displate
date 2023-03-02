import "./App.scss";
import { BreedList } from "components/BreedList/BreedList";
const logo: string = require("./assets/images/logo.svg").default;

const App = () => {
  return (
    <main className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <BreedList />
      </header>
    </main>
  );
};

export default App;
