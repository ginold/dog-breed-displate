import { useCallback, useState } from "react";
import { API_URL } from "../../constants";

/**
 * Generates the appropriate API URL for dog breed image.
 * @param breedName name of the dog breed. Can contain 2 parts.
 * @param random should the image be random or not
 * @returns string with the correct API URL
 */
export const getImgUrl = (
  breedName: string,
  random: boolean = false
): string => {
  let urlString: string = "";
  const breedNameSplit = breedName.split(" ");

  if (breedNameSplit.length === 2) {
    urlString = `${breedNameSplit[0]}/${breedNameSplit[1]}`;
  } else {
    urlString = breedName;
  }
  return `${API_URL}/breed/${urlString}/images${random ? "/random" : ""}`;
};

export const useDogImage = (breedName: string) => {
  const [imgURL, setImgURL] = useState<string | undefined>(undefined);

  /**
   * Get
   * */
  const getDogImage = useCallback(
    async (random: boolean = false) => {
      if (!breedName) return;

      setImgURL(undefined);
      const apiImageUrl = getImgUrl(breedName, random);
      const data = await fetch(apiImageUrl);
      const url = await data.json();
      setImgURL(random ? url.message : url.message[0]);
    },
    [breedName]
  );

  return [imgURL, getDogImage] as const;
};
