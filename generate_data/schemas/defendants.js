import { faker } from "@faker-js/faker";
import { NUM_DEFENDANTS } from "../seedData.js";

/*
type Victim = {
  id: string;
  fullName: string;
  outstandingTasks: number;
  classification: string;
  caseId: string;

  namePreference: string;
  contactPreference: "Mobile" | "Landline" | "Email" | "Letter";
  preferredLanguage: string;
  mobile: string;
  landline: string;
  email: string;
  address: string;
  policeInitialNeedsAssessment: string;
  wcuDetailedNeedsAssessment: string;
  dashAssessment: string;
  isvaName: string;
  isvaContactDetails: string;

  intimidated: boolean;
  specialNeeds: boolean;
  vulnerable: boolean;
  child: boolean;
  unacceptableBehaviour: boolean;
  highlyVulnerable: boolean;

  details: string;

  hasMadeVPS: "Yes" | "No";
  vpsDetails: string;

  specialMeasuresGranted: string;

  
};
*/

function generateUKMobileNumber() {
  // UK mobile phone numbers start with 07 and are followed by 9 digits
  const prefix = "07";
  const randomDigits = Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(9, "0");
  return prefix + randomDigits;
}

function generateUKLandlineNumber() {
  // UK landline phone numbers start with 01 or 02 and are followed by 9 digits
  const prefixes = ["01", "02"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomDigits = Math.floor(Math.random() * 1000000000)
    .toString()
    .padStart(9, "0");
  return prefix + randomDigits;
}

export const Defendants = (inputObject) => {
  return {
    name: "Defendant",
    numberOfRecords: NUM_DEFENDANTS,
    createFunction: ({ index }) => {
      const id = faker.string.uuid();

      const caseObject =
        inputObject.Case[index] ?? faker.helpers.arrayElement(inputObject.Case);
      const caseId = caseObject.id;

      const caseVictims = inputObject.Victim.filter(
        (victim) => victim.caseId === caseId
      );

      const victimIds = faker.helpers
        .arrayElements(caseVictims, { min: 1 })
        .map((victim) => victim.id);

      const sex = faker.helpers.arrayElement(["male", "female"]);

      const firstName = faker.person.firstName({ sex });
      const lastName = faker.person.lastName();
      const fullName = `${firstName} ${lastName}`;

      return {
        id,
        caseId,
        victimIds,
        fullName,
      };
    },
  };
};
