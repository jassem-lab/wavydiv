import React from "react";
import Accordion from "./Accordion";

const AccordionApp = () => {
  return (
    <div>
      <div className="wrapper">
        <Accordion title="Why is the sky blue?">
          Sunlight reaches Earth's atmosphere and is scattered in all directions
          by all the gases and particles in the air. Blue light is scattered
          more than the other colors because it travels as shorter, smaller
          waves. This is why we see a blue sky most of the time.
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionApp;
