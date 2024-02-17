import Checklist from "components/Checklists/checklist";
import { internationalTripItems } from "variables/checklistItems";

const Internationallist = () => {
  return (
    <Checklist
      title={"International Travel Essentials Checklist"}
      initialItems={internationalTripItems}
      description={
        "Streamline your weekend getaway packing with our curated travel essentials checklist. From must-have items to handy tips, ensure you're prepared for a stress-free adventure. Pack smarter, travel lighter, and make the most of every moment"
      }
    />
  );
};

export default Internationallist;
