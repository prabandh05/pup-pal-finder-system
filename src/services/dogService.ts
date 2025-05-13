
import { Dog } from "@/types/dog";

const STORAGE_KEY = "rescue_dogs";

export const getDogs = (): Dog[] => {
  const storedDogs = localStorage.getItem(STORAGE_KEY);
  return storedDogs ? JSON.parse(storedDogs) : [];
};

export const addDog = (dog: Omit<Dog, "id" | "createdAt">): Dog => {
  const dogs = getDogs();
  
  const newDog: Dog = {
    ...dog,
    id: Date.now().toString(),
    createdAt: Date.now(),
  };
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newDog, ...dogs]));
  return newDog;
};

export const getDogById = (id: string): Dog | undefined => {
  const dogs = getDogs();
  return dogs.find(dog => dog.id === id);
};
