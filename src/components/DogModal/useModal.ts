import { useState } from "react";

/**
 * Hook for managing Dog Modal's statea and breed to be displayed.
 * */
export const useDogModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalBreed, setModalBreed] = useState<string>("");

  return [isModalOpen, setIsModalOpen, modalBreed, setModalBreed] as const;
};
