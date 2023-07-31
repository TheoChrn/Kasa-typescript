import All from "./mocks/data.json";

interface Data {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export default Data;

export const getAll = async (): Promise<Data[]> => {
  return All as Data[];
};

export const getById = async (id: string): Promise<Data | undefined> => {
  return All.find((a) => a.id === id);
};
