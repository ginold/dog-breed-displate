import { Alert, Button, Spin, Pagination, Badge, Card } from "antd";
import { FC, ReactNode } from "react";
import "./BreedList.scss";
import { useBreedList } from "./useBreedList";

export const BreedList: FC = () => {
  const [breeds, error, loading] = useBreedList();

  const breedListElement = breeds.map(({ name, subbreed }) => {
    const ribbonText =
      subbreed.length > 0 ? `${subbreed.length} subbreeds!` : "";

    const ListItemWrapper: FC<{ children: ReactNode }> = ({ children }) => {
      return subbreed.length > 0 ? (
        <Badge.Ribbon text={ribbonText}> {children}</Badge.Ribbon>
      ) : (
        <>{children}</>
      );
    };

    return (
      <div className="breed-list-item" key={name}>
        <ListItemWrapper>
          <Card>
            <Button type="primary" ghost>
              {name}
            </Button>
          </Card>
        </ListItemWrapper>
      </div>
    );
  });

  return (
    <>
      <div className="list-container">
        {loading ? <Spin /> : breedListElement}
      </div>
      <Pagination defaultCurrent={1} total={breeds.length} />
      <div>
        {error && <Alert message="Oops! An error occured." type="error" />}
      </div>
    </>
  );
};
