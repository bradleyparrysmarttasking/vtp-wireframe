import { faker } from "@faker-js/faker";
import { NUM_WITNESSES, PERCENTAGE_VICTIMS } from "../seedData.js";

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

const victimIdBase = "W00000";

export const Victims = (inputObject) => {
  return {
    name: "Victim",
    numberOfRecords: NUM_WITNESSES,
    createFunction: ({ index }) => {
      const id = faker.string.uuid();

      const isVictim =
        faker.helpers.maybe(() => true, {
          probability: PERCENTAGE_VICTIMS,
        }) ?? false;

      const victimId =
        victimIdBase.slice(
          0,
          victimIdBase.length - (index + 1).toString().length
        ) +
        (index + 1);

      const count = faker.helpers.maybe(() => 2, { probability: 0.1 }) ?? 1;

      const vrrSubmitted = isVictim
        ? faker.helpers.maybe(() => true, { probability: 0.1 }) ?? false
        : false;

      const caseObjects = inputObject.Case[index]
        ? [inputObject.Case[index]]
        : faker.helpers.arrayElements(inputObject.Case, {
            min: count,
            max: count,
          });

      const caseIds = caseObjects.map((caseObject) => caseObject.id);
      const caseUrns = caseObjects.map((caseObject) => caseObject.urn);

      const sex = faker.helpers.arrayElement(["male", "female"]);

      const firstName = faker.person.firstName({ sex });
      const lastName = faker.person.lastName();
      const fullName = `${firstName} ${lastName}`;

      const outstandingTasks =
        faker.helpers.maybe(() => true, { probability: 0.15 }) ?? false;

      const classification = isVictim
        ? caseObjects[0].type === "RASSO"
          ? "Enhanced"
          : "Universal"
        : "";

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

      const namePreference = fullName;
      const contactPreference = faker.helpers.arrayElement([
        "Mobile",
        "Landline",
        "Email",
        "Letter",
      ]);
      const mobile = "+44" + generateUKMobileNumber().slice(1);
      const landline = "+44" + generateUKLandlineNumber().slice(1);
      const email = faker.internet.email({
        firstName,
        lastName,
      });
      const address = faker.location.streetAddress({ useFullAddress: true });
      const policeInitialNeedsAssessment = faker.lorem.paragraph();
      const wcuDetailedNeedsAssessment = faker.lorem.paragraph();
      const dashAssessment = faker.lorem.paragraph();
      const isvaName =
        caseIds[0].type === "RASSO" ? faker.person.fullName() : "";
      const isvaContactDetails =
        caseIds[0].type === "RASSO"
          ? "+44" + generateUKMobileNumber().slice(1)
          : "";

      const intimidated =
        faker.helpers.maybe(() => true, {
          probability: 0.3,
        }) ?? false;
      const specialNeeds =
        faker.helpers.maybe(() => true, {
          probability: 0.05,
        }) ?? false;
      const vulnerable =
        faker.helpers.maybe(() => true, {
          probability: 0.3,
        }) ?? false;

      const child = false;

      const unacceptableBehaviour =
        faker.helpers.maybe(() => true, {
          probability: 0.1,
        }) ?? false;
      const highlyVulnerable =
        faker.helpers.maybe(() => true, {
          probability: 0.1,
        }) ?? false;

      const details = faker.lorem.paragraph();
      const hasMadeVPS =
        faker.helpers.maybe(() => "Yes", {
          probability: 0.4,
        }) ?? "No";
      const vpsDetails = faker.lorem.paragraph();
      const specialMeasuresGranted =
        faker.helpers.maybe(() => faker.lorem.paragraph(), {
          probability: 0.5,
        }) ?? "";
      const missingSpecialMeasures =
        (vulnerable || intimidated) && !specialMeasuresGranted;

      const crisisHandlingPolicyActivated = highlyVulnerable;

      return {
        id,
        victimId,
        fullName,
        outstandingTasks,
        classification,
        preferredLanguage,
        dob,
        caseIds,
        namePreference,
        contactPreference,
        mobile,
        landline,
        email,
        address,
        policeInitialNeedsAssessment,
        wcuDetailedNeedsAssessment,
        dashAssessment,
        isvaName,
        isvaContactDetails,
        intimidated,
        specialNeeds,
        vulnerable,
        child,
        unacceptableBehaviour,
        highlyVulnerable,
        details,
        hasMadeVPS,
        vpsDetails,
        specialMeasuresGranted,
        missingSpecialMeasures,
        crisisHandlingPolicyActivated,
        isVictim,
        caseUrns,
        vrrSubmitted,
      };
    },
  };
};
