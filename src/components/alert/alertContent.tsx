import React from "react";
import ReactDOM from "react-dom";

export interface AlertI {
   bg?: string;
   children?: any;
   content?: string;
   hide?: () => void;
   isShown?: boolean;
}

export const Alert = (props: AlertI) => {
   const { isShown, content, bg } = props;

   const alertWind = (
      <React.Fragment>
         <div className={`alertContent ${bg ? bg : ""}`}>{content}</div>
      </React.Fragment>
   );

   return isShown ? ReactDOM.createPortal(alertWind, document.body) : null;
};
