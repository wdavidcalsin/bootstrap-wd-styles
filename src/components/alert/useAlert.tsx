import { useEffect, useState } from "react";

export const useAlert = () => {
   const [isShown, setIsShown] = useState<boolean>(false);

   const toggle = () => setIsShown(!isShown);

   useEffect(() => {
      const timer = setTimeout(() => setIsShown(false), 2000);
      return () => clearTimeout(timer);
   });

   return {
      isShown,
      toggle,
   };
};
