import React, { createContext, useContext, useMemo, useState } from "react";

type FavouriteContextType = {
  favouriteIds: string[];
  addFavourite: (id: string) => void;
  removeFavourite: (id: string) => void;
};

type FavouriteContextProviderProps = {
  children: React.ReactNode;
};

const FavouriteContext = createContext<FavouriteContextType>({
  favouriteIds: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {}
});

export const useFavouriteContext = () => {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error(
      "useFavouriteContext can be used only with FavouriteContextProvider"
    );
  }
  return context;
};

export function FavouriteContextProvider({
  children
}: FavouriteContextProviderProps) {
  const [favouriteIds, setFavouriteIds] = useState<string[]>([]);

  const memoValueContext = useMemo(() => {
    const removeFavourite = (id: string) => {
      setFavouriteIds((currentFavIds) =>
        currentFavIds.filter((currentFavId) => currentFavId !== id)
      );
    };

    const addFavourite = (id: string) => {
      setFavouriteIds((currentFavIds) => [...currentFavIds, id]);
    };

    return {
      favouriteIds: favouriteIds,
      addFavourite: addFavourite,
      removeFavourite: removeFavourite
    };
  }, [favouriteIds]);

  return (
    <FavouriteContext.Provider value={memoValueContext}>
      {children}
    </FavouriteContext.Provider>
  );
}
