import { createContext, useContext, useState } from "react";

interface AlertContextI {
   isShown: boolean;
   toggle: () => void;
   setIsShown?: any;
}

export const AlertContext = createContext({} as AlertContextI);

export const AlertProvider = ({ children }: any) => {
   const [isShown, setIsShown] = useState<boolean>(false);

   const toggle = () => setIsShown(!isShown);

   const value = {
      isShown,
      toggle,
      setIsShown,
   };

   return (
      <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
   );
};

export const useAlert = () => {
   const { isShown, toggle, setIsShown } = useContext(AlertContext);

   return { isShown, toggle, setIsShown };
};
