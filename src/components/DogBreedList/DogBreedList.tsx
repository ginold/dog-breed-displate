import { Alert, Spin } from "antd";
import { DogModal } from "components/DogModal/DogModal";
import { useDogModal } from "components/DogModal/useModal";
import { FC, ReactNode } from "react";
import { DogBreedListItem } from "./DogBreedListItem/DogBreedListItem";
import { useDogBreedList } from "./useDogBreedList";
import "./DogBreedList.scss";

export const DogBreedList: FC = () => {
  const [breeds, error, loading] = useDogBreedList();
  const [isModalOpen, setIsModalOpen, modalBreed, setModalBreed] =
    useDogModal();

  const dogBreedListElement: ReactNode = breeds.map(({ name }) => {
    return (
      <DogBreedListItem
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
        {loading ? <Spin tip="Loading" size="large" /> : dogBreedListElement}
      </ul>
      {error && <Alert message="Oops! An error occured." type="error" />}
      <DogModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        dogBreedName={modalBreed}
      />
    </>
  );
};
