import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   bg?: string;
   size?: string;
   children?: any;
}

export const Button = (props: Props) => {
   const { bg, children, size, ...rest } = props;
   return (
      <button className={`btn ${bg} ${size}`} {...(rest as any)}>
         {children}
      </button>
   );
};
