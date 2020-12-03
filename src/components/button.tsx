import React from "react";

export const Button = ({ children, bg = "", size = "" }: any) => {
   return <button className={`btn ${bg} ${size}`}>{children}</button>;
};
