import { Alert, Spin } from "antd";
import { DogModal } from "components/DogModal/DogModal";
import { useDogModal } from "components/DogModal/useModal";
import { FC, ReactNode } from "react";
import "./BreedList.scss";
import { BreedListItem } from "./BreedListItem/BreedListItem";
import { useBreedList } from "./useBreedList";

export const BreedList: FC = () => {
  const [breeds, error, loading] = useBreedList();
  const [isModalOpen, setIsModalOpen, modalBreed, setModalBreed] =
    useDogModal();

  const breedListElement: ReactNode = breeds.map(({ name }) => {
    return (
      <BreedListItem
        key={name}
        breed={name}
        setIsModalOpen={setIsModalOpen}
        setModalBreed={setModalBreed}
      />
    );
  });

  return (
    <>
      <ul className="breed-list">
        {loading ? <Spin tip="Loading" size="large" /> : breedListElement}
      </ul>
      <div>
        {error && <Alert message="Oops! An error occured." type="error" />}
      </div>
      <DogModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        breedName={modalBreed}
      />
    </>
  );
};
