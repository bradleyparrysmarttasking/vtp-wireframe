import { faker } from "@faker-js/faker";

export const Victims = (inputObject) => {
  return {
    name: "Victim",
    numberOfRecords: 236,
    createFunction: ({ index }) => {
      const id = faker.string.uuid();

      const caseObject =
        inputObject.Case[index] ?? faker.helpers.arrayElement(inputObject.Case);
      const caseId = caseObject.id;

      const sex = faker.helpers.arrayElement(["male", "female"]);

      const fullName = faker.person.fullName({ sex });

      const outstandingTasks = faker.helpers.arrayElement([
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 3,
      ]);

      const classification =
        caseObject.type === "RASSO" ? "Enhanced" : "Universal";

      const preferredLanguage =
        faker.helpers.maybe(
          () =>
            faker.helpers.arrayElement([
              "Polish",
              "Bengali",
              "Romanian",
              "Urdu",
            ]),
          { probability: 0.2 }
        ) ?? "English";

      const dob = faker.date.birthdate();

      return {
        id,
        fullName,
        outstandingTasks,
        classification,
        preferredLanguage,
        dob,
        caseId,
      };
    },
  };
};
