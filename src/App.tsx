import "./App.scss";
import { BreedList } from "components/BreedList/BreedList";
import { ConfigProvider } from "antd";
const logo: string = require("./assets/images/dog.svg").default;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "teal",
          colorPrimaryHover: "#014b4b",
        },
      }}
    >
      <header className="App-header">
        <h1>
          Dog<strong>Breeds</strong>
        </h1>
      </header>
      <main>
        <div className="wrapper">
          <aside>
            <img src={logo} alt="logo" id="logo" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            amet iste neque at, corrupti quasi laborum quam dolore est sequi
            laudantium? Temporibus consectetur repellat ducimus est nostrum
            maxime veritatis enim!
          </aside>
          <BreedList />
        </div>
      </main>
    </ConfigProvider>
  );
};

export default App;
