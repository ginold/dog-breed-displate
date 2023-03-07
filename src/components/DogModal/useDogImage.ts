import { ApiDogImageResponse } from "interfaces/interfaces";
import { useCallback, useState } from "react";
import { API_URL } from "../../constants";

/**
 * Generates the appropriate API URL for a random dog breed image.
 * @param breedName name of the dog breed. Can contain 2 parts.
 * @returns string with the correct API URL
 */
export const createImgApiUrl = (breedName: string): string => {
  let urlString: string = "";
  const breedNameSplit = breedName.split(" ");

  if (breedNameSplit.length === 2) {
    urlString = `${breedNameSplit[0]}/${breedNameSplit[1]}`;
  } else {
    urlString = breedName;
  }
  return `${API_URL}/breed/${urlString}/images/random`;
};

export const useDogImage = (breedName: string) => {
  const [imgURL, setImgURL] = useState<string | undefined>(undefined);

  /**
   * Gets a random dog image for the specified breed,
   * sets the imgUrl with the response from the API.
   * */
  const getRandomDogImage = useCallback(() => {
    if (!breedName) return;

    setImgURL(undefined);

    fetch(createImgApiUrl(breedName))
      .then((data) => data.json())
      .then((data: ApiDogImageResponse) => setImgURL(data.message))
      .catch(console.log);
  }, [breedName]);

  return [imgURL, getRandomDogImage] as const;
};
