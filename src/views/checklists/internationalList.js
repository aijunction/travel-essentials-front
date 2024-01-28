import Checklist from "components/Checklists/checklist";
import { internationalTripItems } from "variables/checklistItems";

const Internationallist = () => {
  return <Checklist initialItems={internationalTripItems} />;
};

export default Internationallist;
