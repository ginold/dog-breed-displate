import { Button, Divider, Image, Modal, Skeleton, Space } from "antd";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import "./DogModal.scss";
import { useDogImage } from "./useDogImage";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  breedName: string;
}

export const DogModal: FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  breedName,
}) => {
  const [imgURL, getDogImage] = useDogImage(breedName);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    getDogImage();
  }, [getDogImage]);

  return (
    <Modal
      title="Dog breed details"
      open={isModalOpen}
      onOk={closeModal}
      onCancel={closeModal}
      footer={null}
      closeIcon={<></>}
      className="dog-breed-modal"
    >
      <Divider>
        <h1 className="breed-name">{breedName}</h1>
      </Divider>
      <Space direction="horizontal" align="center" size={20}>
        <div className="dog-breed-image-container">
          {imgURL ? (
            <Image className="dog-breed-image" width={200} src={imgURL} />
          ) : (
            <Skeleton.Image active={true} />
          )}
        </div>
        <p>
          By Little Learning Corner Dogs are my friends, I love them so. They
          come to me when I call, and they love to play ball. When I hear them
          bark, I know it’s time to go to the park.
        </p>
      </Space>
      <div className="modal-footer">
        <Button type="primary" onClick={() => getDogImage(true)}>
          Get random image!
        </Button>
        <Button key="back" onClick={closeModal}>
          Close
        </Button>
      </div>
    </Modal>
  );
};
