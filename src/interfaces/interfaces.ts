export interface Breed {
  name: string;
}

export interface ApiAllBreedsResponse {
  message: {
    [key: string]: string[];
  };
  status: string;
}

export interface ApiDogImageResponse {
  message: string;
  status: string;
}
