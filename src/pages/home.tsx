import React, { Fragment } from "react";
import { Button } from "../components";
import { range } from "lodash";
import { Badge } from "../components/badge";

const btns = [
   { bg: "blue", size: "x" },
   { bg: "danger", size: "s" },
   { bg: "green", size: "m" },
   { bg: "green", size: "l" },
];

function Home() {
   return (
      <Fragment>
         <div className="button brd">
            <div className="container">
               {btns.map((item, index) => (
                  <Button bg={item.bg} size={item.size} key={index}>
                     Click
                  </Button>
               ))}
            </div>
         </div>
         <div className="badge brd">
            <div className="container">
               {btns.map((item, index) => (
                  <Badge key={index} bg={item.bg} size={item.size}>
                     {index}
                  </Badge>
               ))}
            </div>
         </div>
      </Fragment>
   );
}

export default Home;