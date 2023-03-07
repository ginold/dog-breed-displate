import { Button, Divider, Image, Modal, Skeleton } from "antd";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import "./DogModal.scss";
import { useDogImage } from "./useDogImage";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  dogBreedName: string;
}

export const DogModal: FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  dogBreedName,
}) => {
  const [imgURL, getRandomDogImage] = useDogImage(dogBreedName);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    getRandomDogImage();
  }, [getRandomDogImage]);

  return (
    <Modal
      title="Dog breed details"
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
      footer={null}
      centered
      closable={false}
      className="dog-breed-modal"
    >
      <Divider>
        <h1 className="breed-name" data-testid="dog-modal-title">
          {dogBreedName}
        </h1>
      </Divider>
      <div className="dog-modal-content">
        <div className="dog-breed-image-container">
          {imgURL ? (
            <Image
              className="dog-breed-image"
              src={imgURL}
              data-testid="dog-breed-image"
            />
          ) : (
            <div data-testid="modal-image-placeholder">
              <Skeleton.Image active={true} />
            </div>
          )}
        </div>
        <p>
          By Little Learning Corner Dogs are my friends, I love them so. They
          come to me when I call, and they love to play ball. When I hear them
          bark, I know it’s time to go to the park.
        </p>
      </div>
      <div className="modal-footer">
        <Button key="back" onClick={closeModal}>
          Close
        </Button>
        <Button
          type="primary"
          loading={!imgURL}
          onClick={() => getRandomDogImage()}
        >
          Get random image!
        </Button>
      </div>
    </Modal>
  );
};
