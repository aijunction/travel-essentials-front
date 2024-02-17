import Checklist from "components/Checklists/checklist";
import { adventureTripItems } from "variables/checklistItems";

const Adventurelist = () => {
  return (
    <Checklist
      title={"Adventure Travel Essentials Checklist"}
      initialItems={adventureTripItems}
      description={
        "Embark on your next adventure fully equipped with our ultimate travel essentials checklist. From rugged gear to safety essentials, gear up for thrilling experiences in the great outdoors. Don't just travel – conquer every trail, summit, and terrain with confidence"
      }
    />
  );
};

export default Adventurelist;
