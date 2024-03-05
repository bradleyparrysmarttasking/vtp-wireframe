import { Heading, Table } from "govuk-react";
import { Case } from "../../types/types";
import SectionBox from "./SectionBox";
// import VRR from "./VRR";

export default function CaseInformation({ caseObject }: { caseObject: Case }) {
  const { type, description } = caseObject;
  return (
    <SectionBox title={<Heading size="SMALL">Case Information</Heading>}>
      <Table>
        <Table.Row>
          <Table.CellHeader>Type</Table.CellHeader>
          <Table.Cell>{type}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Description</Table.CellHeader>
          <Table.Cell>{description}</Table.Cell>
        </Table.Row>
      </Table>
      {/* <VRR /> */}
    </SectionBox>
  );
}
