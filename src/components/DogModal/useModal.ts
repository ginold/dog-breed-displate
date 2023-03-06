import { useState } from "react";

export const useDogModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalBreed, setModalBreed] = useState<string>("");

  return [isModalOpen, setIsModalOpen, modalBreed, setModalBreed] as const;
};
