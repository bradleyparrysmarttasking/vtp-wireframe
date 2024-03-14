import { faker } from "@faker-js/faker";
// import { weightedRandom } from "../functions/weightedArray";

const statuses = [
  "CPS Post-Charge Review and Case Preparation",
  "Hearing",
  "Case Preparation",
  "Hold Hearings",
  "Verdict",
  "Sentence",
  "Finalisation",
  "Appeals Confiscations",
  // "Retention & Destruction",
];

const timelineList = [
  "Date of Offences",
  "Investigation",
  "Charge Decision",
  "CPS Post-Charge Review and Case Preparation",
  "Hearing",
  "Case Preparation",
  "Hold Hearings",
  "Verdict",
  "Sentence",
  "Finalisation",
  "Appeals Confiscations",
  "Retention & Destruction",
];

export const Cases = (inputObject) => {
  return {
    name: "Case",
    numberOfRecords: Math.round(236 * 1.1),
    createFunction: ({ index }) => {
      const id = faker.string.uuid();
      const description = faker.lorem.sentence();
      const type =
        faker.helpers.maybe(() => "RASSO", { probability: 0.2 }) ?? "Non RASSO";

      const offenceDate = faker.date.past({ years: 6 });

      const timeline = [
        { statusName: "Date of Offences", date: offenceDate },
        { statusName: "Investigation", date: null },
        { statusName: "Charge Decision", date: null },
        {
          statusName: "CPS Post-Charge Review and Case Preparation",
          date: null,
        },
        { statusName: "Hearing", date: null },
        { statusName: "Case Preparation", date: null },
        { statusName: "Hold Hearings", date: null },
        { statusName: "Verdict", date: null },
        { statusName: "Sentence", date: null },
        { statusName: "Finalisation", date: null },
        { statusName: "Appeals Confiscations", date: null },
        { statusName: "Retention & Destruction", date: null },
      ];

      const currentStage = faker.helpers.arrayElement(statuses);

      const stageIndex = timelineList.indexOf(currentStage);

      const sortedDates = faker.date
        .betweens({
          from: offenceDate,
          to: new Date().toISOString(),
          count: stageIndex,
        })
        .sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

      for (var i = 0; i < sortedDates.length; i++) {
        timeline[i + 1].date = sortedDates[i];
      }

      return {
        id,
        description,
        type,
        timeline,
        currentStage,
      };
    },
  };
};
