import { Heading, Table } from "govuk-react";
import { Case, Victim } from "../../types/types";
import SectionBox from "./SectionBox";
// import VRR from "./VRR";

export default function CaseInformation({
  caseObject,
  victim,
}: {
  caseObject: Case;
  victim: Victim;
}) {
  const {
    policeInitialNeedsAssessment,
    wcuDetailedNeedsAssessment,
    hasMadeVPS,
    vpsDetails,
    missingSpecialMeasures,
    dashAssessment,
  } = victim;
  const { type, description } = caseObject;
  return (
    <SectionBox title={<Heading size="SMALL">Case Information</Heading>}>
      <Table>
        <Table.Row>
          <Table.CellHeader setWidth="25%">Type</Table.CellHeader>
          <Table.Cell setWidth="75%">{type}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Description</Table.CellHeader>
          <Table.Cell>{description}</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.CellHeader>Police Initial Needs Assessment</Table.CellHeader>
          <Table.Cell>{policeInitialNeedsAssessment}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>
            Witness Care Unit Initial Needs Assessment
          </Table.CellHeader>
          <Table.Cell>{wcuDetailedNeedsAssessment}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>DASH Assessment</Table.CellHeader>
          <Table.Cell>{dashAssessment}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>
            Victim Personal Statement (VPS) Submitted
          </Table.CellHeader>
          <Table.Cell>{hasMadeVPS}</Table.Cell>
        </Table.Row>
        {hasMadeVPS === "Yes" && (
          <Table.Row>
            <Table.CellHeader>VPS Details</Table.CellHeader>
            <Table.Cell>{vpsDetails}</Table.Cell>
          </Table.Row>
        )}
      </Table>
      {/* <VRR /> */}
    </SectionBox>
  );
}
