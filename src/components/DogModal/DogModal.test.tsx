import { render, screen, waitFor } from "@testing-library/react";
import { ApiDogImageResponse } from "interfaces/interfaces";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { DogModal } from "./DogModal";
import { createImgApiUrl } from "./useDogImage";

const apiResponse: ApiDogImageResponse = {
  message: "dog-image.png",
  status: "success",
};
const breed = { name: "border collie" };
const server = setupServer();
const url = createImgApiUrl(breed.name);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Dog Modal tests", () => {
  beforeEach(() => {
    server.use(
      rest.get(url, (req, res, ctx) => {
        return res(ctx.json(apiResponse));
      })
    );

    const setIsModalOpen = jest.fn();
    render(
      <DogModal
        breedName={breed.name}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={true}
      />
    );
  });

  it(`renders a modal with title "${breed.name}"`, () => {
    const title = screen.getByText(breed.name);
    expect(title).toBeInTheDocument();
  });

  it(`renders a placeholder image at first, then the loaded image`, async () => {
    const placeholder = screen.getByTestId("modal-image-placeholder");
    expect(placeholder).toBeInTheDocument();

    await waitFor(() => {
      const imageContainer = screen.getByTestId("dog-breed-image");
      expect(imageContainer).toBeInTheDocument();
    });
    await waitFor(() => {
      const imageContainer = screen.getByTestId("dog-breed-image");
      const image = imageContainer.querySelector("img");
      expect(image).toHaveAttribute("src", apiResponse.message);
    });
  });
});
