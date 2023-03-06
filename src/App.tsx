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
      <header>
        <h1>
          Dog<strong>Breeds</strong>
        </h1>
      </header>
      <main>
        <div className="wrapper">
          <aside>
            <img src={logo} alt="logo" id="logo" />
            <h2>Hello, Dog Lover!</h2>
            <p className="intro-text">
              You wanna see pictures of your favorite dog breeds? You came to
              the right place! just click on any button with a dog breed and you
              will be welcomed by an amazing modal with a random picture of the
              specific dog breed!
            </p>
          </aside>
          <BreedList />
        </div>
      </main>
    </ConfigProvider>
  );
};

export default App;
