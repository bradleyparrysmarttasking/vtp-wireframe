import { Button, Heading, Table, Tag } from "govuk-react";
import * as dayjs from "dayjs";
import SectionBox from "./SectionBox";

export default function PersonalDetails({ victim }) {
  const { classification, preferredLanguage, dob } = victim;
  //@ts-ignore
  const dayjsDob = dayjs(dob);
  const formattedDob = dayjsDob.format("DD/MM/YYYY");
  //@ts-ignore
  const age = dayjs().diff(dayjsDob, "year");
  const tagColor = classification === "Universal" ? "BLUE" : "GREEN";
  return (
    <SectionBox
      title={<Heading size="SMALL">Personal Details</Heading>}
      controls={<Button>Edit</Button>}
    >
      <Table>
        <Table.Row>
          <Table.CellHeader>Classification</Table.CellHeader>
          <Table.Cell>
            <Tag tint={tagColor}>{classification}</Tag>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Preferred Language</Table.CellHeader>
          <Table.Cell>{preferredLanguage}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Date of Birth</Table.CellHeader>
          <Table.Cell>{formattedDob}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.CellHeader>Age</Table.CellHeader>
          <Table.Cell>{age}</Table.Cell>
        </Table.Row>
      </Table>
    </SectionBox>
  );
}
