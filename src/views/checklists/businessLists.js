import Checklist from "components/Checklists/checklist.js";
import { businessTripItems } from "variables/checklistItems.js";
import React from "react";
const Businesslist = () => {
  return (
    <>
      <Checklist initialItems={businessTripItems} />{" "}
    </>
  );
};

export default Businesslist;
