import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useAlert } from "../context/alert.context";

export interface AlertI {
   bg?: string;
   children?: any;
   content?: string;
   hide?: () => void;
}

export const Alert = (props: AlertI) => {
   const { isShown, toggle, setIsShown } = useAlert();

   const { content, bg } = props;

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsShown(false);
         console.log("holas");
      }, 2000);
      return () => clearTimeout(timer);
   });

   const alertWind = (
      <React.Fragment>
         <div className={`alertContent ${bg ? bg : ""}`}>
            <button className="btn no-styles" onClick={toggle}>
               <CloseCircleOutlined />
            </button>
            {content}
         </div>
      </React.Fragment>
   );

   return isShown ? ReactDOM.createPortal(alertWind, document.body) : null;
};
