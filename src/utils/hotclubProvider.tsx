import { createContext, useState, useContext } from "react";

interface HotClubContextType {
  hotClub: string;
  setHotClub: (value: string) => void;
  rootShouldRenderEmptyState: boolean;
  toggleRootShouldRenderEmptyState: () => void;
}

const defaultHotClubContext = {
  hotClub: "Hot Club",
  setHotClub: () => {},
  rootShouldRenderEmptyState: false,
  toggleRootShouldRenderEmptyState: () => {},
};

export const HotClubContext = createContext<HotClubContextType>(
  defaultHotClubContext,
);

export const HotClubProvider = ({ children }: any) => {
  const [hotClub, setHotClub] = useState("Hot Club");
  const [rootShouldRenderEmptyState, setRootShouldRenderEmptyState] =
    useState(false);

  console.log("Hot Club Provider", HotClubContext);

  const toggleRootShouldRenderEmptyState = () => {
    console.log("Toggling root empty state");
    setRootShouldRenderEmptyState((prev) => !prev);
  };

  return (
    <HotClubContext.Provider
      value={{
        hotClub,
        setHotClub,
        rootShouldRenderEmptyState,
        toggleRootShouldRenderEmptyState,
      }}
    >
      {children}
    </HotClubContext.Provider>
  );
};
