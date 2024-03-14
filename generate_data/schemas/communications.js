import { faker } from "@faker-js/faker";
// import { weightedRandom } from "../functions/weightedArray";

export const Communications = (inputObject) => {
  return {
    name: "Communication",
    numberOfRecords: Math.round(236 * 2),
    createFunction: ({ index }) => {
      const id = faker.string.uuid();
      const type = faker.helpers.arrayElement([
        "Letter",
        "Email",
        "Meeting",
        "Phone",
      ]);
      const title = faker.lorem.words();
      const updater = "Joe Bloggs";
      const detail = faker.lorem.paragraph();

      const documents = type === "Letter" ? ["letter.pdf"] : [];

      const caseObject = faker.helpers.arrayElement(inputObject.Case);
      const caseId = caseObject.id;

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
      };
    },
  };
};
