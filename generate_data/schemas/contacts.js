import { faker } from "@faker-js/faker";
import { NUM_CONTACTS, NUM_DEFENDANTS } from "../seedData.js";

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

export const Contacts = (inputObject) => {
  return {
    name: "Contact",
    numberOfRecords: NUM_CONTACTS,
    createFunction: ({ index }) => {
      const id = faker.string.uuid();

      const victimObject =
        inputObject.Victim[index] ??
        faker.helpers.arrayElement(inputObject.Victim);
      const victimId = victimObject.id;

      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const fullName = `${firstName} ${lastName}`;

      const phone = generateUKMobileNumber();
      const email = faker.internet.email({
        firstName,
        lastName,
      });

      const relation = faker.helpers.arrayElement([
        "Friend",
        "Parent",
        "Sibling",
        "Spouse",
      ]);

      return {
        id,
        victimId,
        fullName,
        phone,
        email,
        relation,
      };
    },
  };
};
