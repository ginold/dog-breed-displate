export interface Breed {
  name: string;
}

export interface ApiBreedResponse {
  message: {
    [key: string]: string[];
  };
  status: string;
}
