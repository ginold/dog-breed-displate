import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { ApiBreedResponse, Breed } from "./BreedList.interface";

/**
 * Converts the Api Response to a more readable Breed array.
 * @param response ApiBreedResponse
 * @returns breedList Breed[]
 */
const convertResponseToBreedList = (response: ApiBreedResponse): Breed[] => {
  let breeds: Breed[] = [];

  for (const [breedName, breedSubames] of Object.entries(response.message)) {
    if (breedSubames.length >= 1) {
      breeds = [
        ...breeds,
        ...breedSubames.map((breedSubname) => ({
          name: `${breedName} ${breedSubname}`,
        })),
      ];
    } else {
      breeds.push({ name: breedName });
    }
  }
  return breeds;
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
