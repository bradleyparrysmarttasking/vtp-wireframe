import { useNavigate, useParams } from "react-router-dom";
import { Victim } from "../types/types";
import { useMemo } from "react";
import { BackLink, Heading, Table, Tag } from "govuk-react";

export default function VictimPage({ victims }: { victims: Victim[] }) {
  const { victimId } = useParams();
  const navigate = useNavigate();
  const victim = useMemo(() => {
    return victims.filter((victim) => {
      return victim.id === victimId;
    })[0];
  }, [victimId, victims]);

  const { fullName, classification, outstandingTasks, preferredLanguage } =
    victim;
  const tagColor = classification === "Universal" ? "BLUE" : "GREEN";

  return (
    <>
      <BackLink
        style={{ cursor: "pointer" }}
        onClick={function noRefCheck() {
          navigate("/victims");
        }}
      >
        Back
      </BackLink>
      <Heading size="LARGE">{fullName}</Heading>
      <div
        style={{
          backgroundColor: "#f3f2f1",
          padding: "1em",
          marginBottom: "1em",
        }}
      >
        <Heading size="SMALL">Victim Information</Heading>
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
        </Table>
      </div>
      <Heading size="SMALL">Tasks</Heading>
      <Heading size="SMALL">Communications</Heading>
    </>
  );
}
