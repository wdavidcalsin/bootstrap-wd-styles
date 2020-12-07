import React, { Fragment } from "react";
import { Button } from "../components";
import { Badge } from "../components";
import { Alert } from "../components";
import { Aside } from "../components";
import { useAlert } from "../context/alert.context";

const btns = [
   { bg: "blue", size: "x" },
   { bg: "danger", size: "s" },
   { bg: "green", size: "m" },
   { bg: "green", size: "l" },
];

function Home() {
   const { toggle } = useAlert();

   return (
      <Fragment>
         <div className="content">
            <Aside />
            <section>
               <div className="button brd">
                  <div className="container">
                     {btns.map((item, index) => (
                        <Button
                           bg={item.bg}
                           size={item.size}
                           key={index}
                           disabled
                           type="submit"
                        >
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

               <div className="alert brd">
                  <div className="container">
                     <Button onClick={toggle} bg="blue" size="s">
                        Alert
                     </Button>
                     <Alert
                        // hide={toggle}
                        content="Mi nombre es willian david"
                        bg="green"
                     />
                  </div>
               </div>
            </section>
         </div>
      </Fragment>
   );
}

export default Home;
