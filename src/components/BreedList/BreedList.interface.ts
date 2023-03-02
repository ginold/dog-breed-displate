export interface Breed {
  name: string;
  subbreed: string[];
}

export interface ApiBreedResponse {
  message: {
    [key: string]: string[];
  };
  status: string;
}
