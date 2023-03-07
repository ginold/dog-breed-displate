import "./App.scss";
import { DogBreedList } from "components/DogBreedList/DogBreedList";
import { ConfigProvider } from "antd";
import { WelcomeAside } from "components/WelcomeAside/WelcomeAside";

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
          <WelcomeAside />
          <DogBreedList />
        </div>
      </main>
    </ConfigProvider>
  );
};

export default App;
