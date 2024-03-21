import { appendFileSync, unlinkSync, writeFileSync, readFileSync } from "fs";
import {
  Victims,
  Cases,
  Communications,
  Defendants,
  Contacts,
  Tasks,
} from "./schemas/index.js";

const schemasList = [
  Cases,
  Victims,
  Communications,
  Defendants,
  Contacts,
  Tasks,
];

const frozenSchemas = [
  // "Victims"
];

const inputObject = {};

schemasList.forEach((schema) => {
  const { numberOfRecords, createFunction, name } = schema(inputObject);

  if (frozenSchemas.includes(name)) {
    const dataFile = JSON.parse(
      readFileSync(
        `/Users/bradleyparry/Documents/Tools/vtp-wireframe-cra/src/dummy_data/${name}.json`,
        "utf8"
      )
    );
    inputObject[name] = dataFile.data;
  } else {
    inputObject[name] = [];

    const allRecords = { data: [] };

    try {
      // unlinkSync(
      //   `/Users/bradleyparry/Documents/Tools/vtp-wireframe-cra/src/dummy_data/${name}.csv`
      // );
      unlinkSync(
        `/Users/bradleyparry/Documents/Tools/vtp-wireframe-cra/src/dummy_data/${name}.json`
      );
    } catch (err) {
      console.error(err);
    }

    // const titles = Object.keys(createFunction()).join(",") + "\n";

    // try {
    //   appendFileSync(
    //     `/Users/bradleyparry/Documents/Tools/vtp-wireframe-cra/src/dummy_data/${name}.csv`,
    //     titles
    //   );
    // } catch (err) {
    //   console.error(err);
    // }

    Array.from({ length: numberOfRecords }).forEach((value, index) => {
      const createObject = { index };

      const record = createFunction(createObject);

      allRecords.data.push(record);

      inputObject[name].push(record);

      // const rows = [record].reduce((string, record) => {
      //   const row = Object.values(record).join(",") + "\n";
      //   string += row;
      //   return string;
      // }, "");

      try {
        // appendFileSync(
        //   `/Users/bradleyparry/Documents/Tools/vtp-wireframe-cra/src/dummy_data/${name}.csv`,
        //   rows
        // );
        writeFileSync(
          `/Users/bradleyparry/Documents/Tools/vtp-wireframe-cra/src/dummy_data/${name}.json`,
          JSON.stringify(allRecords),
          "utf8",
          () => {}
        );
      } catch (err) {
        console.error(err);
      }

      try {
        readFileSync(
          `/Users/bradleyparry/Documents/Tools/vtp-wireframe-cra/src/dummy_data/${name}.json`,
          "utf8",
          function readFileCallback(err, data) {
            if (err) {
              console.log(err);
            } else {
              const obj = JSON.parse(data); //now it an object
              console.log(obj);
            }
          }
        );
      } catch (e) {
        console.log(e);
      }
    });
  }
});
