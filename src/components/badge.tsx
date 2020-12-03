import React from "react";

export const Badge = ({ children, bg = "", size = "", href }: any) => {
   return <span className={`badge ${bg} ${size}`}>{children}</span>;
};
