import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Aside = () => {
   return (
      <Router>
         <div className="sidebar">
            <h1 className="side-title">Componentes</h1>
            <ul className="list">
               <li>
                  <Link to="/">Button</Link>
               </li>
               <li>
                  <Link to="/about">Badge</Link>
               </li>
               <li>
                  <Link to="/user">Alert </Link>
               </li>
            </ul>
         </div>
      </Router>
   );
};
