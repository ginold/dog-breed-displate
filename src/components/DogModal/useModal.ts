import { useState } from "react";

/**
 * Hook for managing Dog Modal's states and dog breed to be displayed.
 * */
export const useDogModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalDogBreed, setModalDogBreed] = useState<string>("");

  return [
    isModalOpen,
    setIsModalOpen,
    modalDogBreed,
    setModalDogBreed,
  ] as const;
};
