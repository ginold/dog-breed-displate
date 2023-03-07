import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { ApiAllBreedsResponse } from "interfaces/interfaces";
import { API_URL } from "../../constants";
import { DogBreedList } from "./DogBreedList";
import { convertResponseToBreedList } from "./useDogBreedList";

const apiResponse: ApiAllBreedsResponse = {
  message: {
    border: ["collie"],
    african: [],
    french: ["bulldog", "croissant"],
  },
  status: "success",
};
const mappedBreeds = convertResponseToBreedList(apiResponse);

const server = setupServer();

beforeEach(async () => {
  server.use(
    rest.get(`${API_URL}/breeds/list/all`, (req, res, ctx) => {
      return res(ctx.json(apiResponse));
    })
  );
  render(<DogBreedList />);
  await waitForElementToBeRemoved(() => screen.queryByText("Loading"));
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Breed List tests", () => {
  it(`renders the list with ${mappedBreeds.length} buttons and properly formatted text`, async () => {
    const listItemButtons = screen.getAllByRole("button");
    expect(listItemButtons.length).toBe(mappedBreeds.length);

    mappedBreeds.forEach((breed) => {
      expect(screen.getByText(breed.name)).toBeInTheDocument();
    });
  });

  it("makes a modal appear when clicked on a list-item button", async () => {
    fireEvent.click(screen.getByText(mappedBreeds[0].name));
    await waitFor(() => {
      const modalTitle = screen.getByTestId("dog-modal-title");
      expect(modalTitle).toBeInTheDocument();
    });
    await waitFor(() => {
      const modalTitle = screen.getByTestId("dog-modal-title");
      expect(modalTitle).toHaveTextContent(mappedBreeds[0].name);
    });
  });
});
