import { faker } from "@faker-js/faker";
import { NUM_COMMS } from "../seedData.js";
// import { weightedRandom } from "../functions/weightedArray";

export const Communications = (inputObject) => {
  return {
    name: "Communication",
    numberOfRecords: NUM_COMMS,
    createFunction: ({ index }) => {
      const id = faker.string.uuid();

      const caseObject =
        inputObject.Case[index] ?? faker.helpers.arrayElement(inputObject.Case);
      const { id: caseId } = caseObject;
      const victim = faker.helpers.arrayElement(
        inputObject.Victim.filter((victim) => victim.caseIds.includes(caseId))
      );
      const { id: victimId, vrrSubmitted } = victim;

      const type = faker.helpers.arrayElement([
        "Letter",
        "Email",
        "Meeting",
        "Phone",
        vrrSubmitted ? "VRR" : "Letter",
      ]);
      const title = faker.lorem.words();
      const updater = "Joe Bloggs";
      const detail = faker.lorem.paragraph();

      const documents = type === "Letter" ? ["letter.pdf"] : [];

      const date = faker.date.between({
        from: caseObject.timeline[0].date,
        to: new Date().toISOString(),
      });

      return {
        id,
        type,
        title,
        updater,
        detail,
        date,
        documents,
        caseId,
        victimId,
      };
    },
  };
};
