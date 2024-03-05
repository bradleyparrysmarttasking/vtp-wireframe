import { faker } from "@faker-js/faker";
import { weightedRandom } from "../functions/weightedArray";

export const Cases = (inputObject) => {
  return {
    name: "Case",
    numberOfRecords: Math.round(236 * 1.1),
    createFunction: ({ index }) => {
      const id = faker.string.uuid();
      const description = faker.lorem.sentence();
      const type =
        faker.helpers.maybe(() => "RASSO", { probability: 0.2 }) ?? "Non RASSO";

      // const

      return {
        id,
        description,
        type,
      };
    },
  };
};
