import { faker } from "@faker-js/faker";
import { NUM_TASKS } from "../seedData.js";

export const Tasks = (inputObject) => {
  return {
    name: "Task",
    numberOfRecords: NUM_TASKS,
    createFunction: ({ index }) => {
      const id = faker.string.uuid();

      const victim = faker.helpers.arrayElement(inputObject.Victim);

      const victimId = victim.id;

      const description = faker.helpers.arrayElement([
        "Charges dropped",
        "Eligible for VRR",
      ]);

      const startDate = faker.date.past({ days: 7 });
      const endDate = null;

      const complete = false;

      return {
        id,
        victimId,
        description,
        startDate,
        endDate,
        complete,
      };
    },
  };
};
