import Checklist from "components/Checklists/checklist.js";
import { businessTripItems } from "variables/checklistItems.js";
import React from "react";
const Businesslist = () => {
  return (
    <>
      <Checklist
        title={"Business Travel Essentials Checklist"}
        initialItems={businessTripItems}
        description={
          "Prepare for your international adventure with our comprehensive travel essentials checklist. From passports to adapters, ensure a smooth journey across borders. Stay organized, stay informed, and make unforgettable memories wherever your travels take you"
        }
      />
    </>
  );
};

export default Businesslist;
