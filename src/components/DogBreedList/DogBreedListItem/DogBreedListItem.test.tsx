import { render, screen } from "@testing-library/react";
import { DogBreedListItem } from "./DogBreedListItem";

const name = "Border Collie";

it(`renders a list-item with text "${name}"`, () => {
  const setIsModalOpen = jest.fn();
  const setModalBreed = jest.fn();

  render(
    <DogBreedListItem
      breed={name}
      setIsModalOpen={setIsModalOpen}
      setModalBreed={setModalBreed}
    />
  );
  const buttonElement = screen.getByText(name);
  expect(buttonElement).toBeInTheDocument();
});
