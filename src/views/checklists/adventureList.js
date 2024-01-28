import Checklist from "components/Checklists/checklist";
import { adventureTripItems } from "variables/checklistItems";

const Adventurelist = () => {
  return <Checklist initialItems={adventureTripItems} />;
};

export default Adventurelist;
