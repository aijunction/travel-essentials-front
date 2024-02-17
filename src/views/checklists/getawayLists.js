import Checklist from "components/Checklists/checklist";
import { adventureTripItems } from "variables/checklistItems";

const Adventurelist = () => {
  return (
    <Checklist
      initialItems={adventureTripItems}
      description={
        "Streamline your weekend getaway packing with our curated travel essentials checklist. From must-have items to handy tips, ensure you're prepared for a stress-free adventure. Pack smarter, travel lighter, and make the most of every moment"
      }
    />
  );
};

export default Adventurelist;
