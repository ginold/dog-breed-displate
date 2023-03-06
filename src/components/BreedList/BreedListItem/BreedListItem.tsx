import { Button } from "antd";
import { Dispatch, FC, SetStateAction } from "react";
import "./BreedListItem.scss";

interface Props {
  breed: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalBreed: Dispatch<SetStateAction<string>>;
}

export const BreedListItem: FC<Props> = ({
  breed,
  setModalBreed,
  setIsModalOpen,
}) => {
  const handleClick = () => {
    setIsModalOpen(true);
    setModalBreed(breed);
  };

  return (
    <li className="breed-list-item" key={breed} data-breed={breed[0]}>
      <Button type="primary" shape="round" onClick={handleClick}>
        <span className="breed-name">{breed}</span>
      </Button>
    </li>
  );
};
