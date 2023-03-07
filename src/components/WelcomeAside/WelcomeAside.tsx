import "./WelcomeAside.scss";
const logo: string = require("../../assets/svg/dog.svg").default;

export const WelcomeAside = () => {
  return (
    <aside>
      <img src={logo} alt="logo" id="logo" data-testid="logo" />
      <h2>Hello, Dog Lover!</h2>
      <p className="intro-text">
        You wanna see pictures of your favorite dog breeds? You came to the
        right place! just click on any button with a dog breed and you will be
        welcomed by an amazing modal with a random picture of the specific dog
        breed!
      </p>
    </aside>
  );
};
