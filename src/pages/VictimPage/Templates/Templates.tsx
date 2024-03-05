import SectionBox from "../SectionBox";
import { Button, Heading, Select } from "govuk-react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { Case, Victim } from "../../../types/types";
import { useState } from "react";

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

export default function Templates({
  caseObject,
  victim,
}: {
  caseObject: Case;
  victim: Victim;
}) {
  const [template, setTemplate] = useState("Welcome Letter");
  return (
    <SectionBox title={<Heading size="SMALL">Templates</Heading>}>
      <div
        style={{
          display: "flex",
          gap: "0.5em",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Select
          input={{
            name: "caseStage",
            onChange: function noRefCheck() {},
          }}
          label="Case Stage"
        >
          <option>Charge</option>
          <option>Disclosure</option>
          <option>First Hearing</option>
          <option>PTPH / Trial</option>
          <option>Sentence</option>
        </Select>
        <Select
          input={{
            name: "template",
            onChange: function noRefCheck(e) {
              setTemplate(e.target.value);
            },
          }}
          label="Template"
        >
          <option>Welcome Letter</option>
        </Select>
        <Button
          onClick={() =>
            generate({
              victim,
              caseObject,
            })
          }
        >
          Download Template
        </Button>
      </div>
    </SectionBox>
  );
}
