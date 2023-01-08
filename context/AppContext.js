import { createContext, useContext } from "react";
import { hookContext } from "../hooks/hookContext"

export const AppContext = createContext()

export const useTask = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const asd = "hola"
  return (
    <AppContext.Provider value={{asd}}>
      {children}
    </AppContext.Provider>
  );
}