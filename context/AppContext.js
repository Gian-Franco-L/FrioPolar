import { createContext, useContext } from "react";
import hookContext from "../hooks/hookContext"

export const AppContext = createContext()

export const useTask = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={hookContext()}>
      {children}
    </AppContext.Provider>
  );
}