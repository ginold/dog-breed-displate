import { API_URL } from "../../constants";
import { useEffect, useState } from "react";
import { ApiAllBreedsResponse, Breed } from "interfaces/interfaces";

export const useDogBreedList = () => {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);

  useEffect(() => {
    (async function fetchAllBreeds() {
      setloading(true);
      try {
        const data = await fetch(`${API_URL}/breeds/list/all`);
        const breedData: ApiAllBreedsResponse = await data.json();
        setBreeds(convertResponseToBreedList(breedData));
        setError(false);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setloading(false);
      }
    })();
  }, []);

  return [breeds, error, loading] as const;
};

/**
 * Converts the Api Response to a more readable Breed array.
 * @param response ApiAllBreedsResponse
 * @returns breedList Breed[]
 */
export const convertResponseToBreedList = (
  response: ApiAllBreedsResponse
): Breed[] => {
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
