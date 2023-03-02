import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { ApiBreedResponse, Breed } from "./BreedList.interface";

/**
 * Converts the Api Response to a more readable Breed array.
 * @param response ApiBreedResponse
 * @returns mappedBreeds Breed[]
 */
const convertResponseToBreedList = (response: ApiBreedResponse): Breed[] => {
  const mappedBreeds: Breed[] = [];
  for (const [key, value] of Object.entries(response.message)) {
    const breed: Breed = { name: key, subbreed: value };
    mappedBreeds.push(breed);
  }
  return mappedBreeds;
};

interface UseBreedList {
  (): [Breed[], boolean, boolean];
}

export const useBreedList: UseBreedList = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    const abortController = new AbortController();

    (async function fetchAllBreeds() {
      setloading(true);
      try {
        const data = await fetch(`${API_URL}/breeds/list/all`);
        const breedData: ApiBreedResponse = await data.json();
        setBreeds(convertResponseToBreedList(breedData));
      } catch (error) {
        console.warn(error);
        setError(true);
      } finally {
        setloading(false);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return [breeds, error, loading];
};
