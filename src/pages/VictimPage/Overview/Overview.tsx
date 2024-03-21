import { Button, H2, Table, Tag } from "govuk-react";
import Templates from "../Templates/Templates";
import { Case, Task, Victim } from "../../../types/types";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import dayjs from "dayjs";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

function generate({
  victim,
  caseObject,
}: {
  victim: Victim;
  caseObject: Case;
}) {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `${victim.fullName}`,
                bold: true,
              }),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, "example.docx");
    console.log("Document created successfully");
  });
}

export default function Overview({
  caseObjects,
  victim,
  victimTasks,
}: {
  caseObjects: Case[];
  victim: Victim;
  victimTasks: Task[];
}) {
  const { cms, enriched, contactApp, ddei } = useContext(ThemeContext);
  const {
    classification,
    dob,
    intimidated,
    specialNeeds,
    vulnerable,
    // child,
    unacceptableBehaviour,
    highlyVulnerable,
    details,
  } = victim;
  const dayjsDob = dayjs(dob);
  const age = dayjs().diff(dayjsDob, "year");
  const tagColor = classification === "Universal" ? "BLUE" : "GREEN";

  const filteredCharateristics = [
    { value: intimidated, title: "Intimidated" },
    { value: specialNeeds, title: "Special Needs" },
    { value: vulnerable, title: "Vulnerable" },
    { value: age < 18, title: "Child" },
    {
      value: unacceptableBehaviour,
      title: "Unacceptable Behaviour",
    },
    { value: highlyVulnerable, title: "Highly Vulnerable" },
  ].filter((char) => char.value);

  return (
    <div>
      <H2>Overview</H2>
      {victimTasks.length > 0 && (
        <div
          style={{
            // display: "flex",
            padding: "1em",
            border: "red solid 3px",
            // justifyContent: "space-between",
            marginBottom: "0.5em",
          }}
        >
          <div style={{ color: "red", marginBottom: "0.5em", ...enriched }}>
            <b>Tasks</b>
          </div>
          <div
            style={{
              display: "flex",
              // padding: "1em",
              // border: "red solid 3px",
              justifyContent: "space-between",
              // marginBottom: "0.5em",
            }}
          >
            <div>
              <b>{victimTasks[0].description}</b>
            </div>
            <div>{dayjs(victimTasks[0].startDate).format("DD/MM/YYYY")}</div>
            <div style={{ display: "flex", gap: "0.5em" }}>
              <Button
                onClick={() => generate({ victim, caseObject: caseObjects[0] })}
                style={{ margin: 0 }}
              >
                Download Template
              </Button>
              <Button style={{ margin: 0 }}>Create Communication</Button>
            </div>
          </div>
        </div>
      )}
      <Table>
        <Table.Row style={enriched}>
          <Table.CellHeader>Classification</Table.CellHeader>
          <Table.Cell>
            <Tag tint={tagColor}>{classification}</Tag>
          </Table.Cell>
        </Table.Row>

        {filteredCharateristics.length > 0 && (
          <>
            <Table.Row style={ddei}>
              <Table.CellHeader>Characteristics</Table.CellHeader>
              <Table.Cell>
                <div style={{ display: "flex", gap: "1em" }}>
                  {filteredCharateristics.map((char) => (
                    <Tag>{char.title}</Tag>
                  ))}
                </div>
              </Table.Cell>
            </Table.Row>
          </>
        )}
      </Table>
      <div
        style={{
          backgroundColor: "#efefef",
          padding: "5em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "solid 1px #dddddd",
          marginBottom: "0.5em",
        }}
      >
        <b>Case Status App iFrame</b>
      </div>
    </div>
  );
}
