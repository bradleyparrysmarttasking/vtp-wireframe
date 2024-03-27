import { Button, H2, H3, Heading, Table, Tag } from "govuk-react";
import * as dayjs from "dayjs";
import SectionBox from "../SectionBox";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../../context/DataContext";

export default function Defendants({ victim }) {
  const { caseId } = victim;
  const { victimId } = useParams();
  const { defendants } = useContext(DataContext);

  console.log({ defendants });

  const victimDefendants = defendants.filter((defendant) => {
    return defendant.victimIds.includes(victimId);
  });

  const otherCaseDefendants = defendants.filter((defendant) => {
    return (
      defendant.caseId === caseId && !defendant.victimIds.includes(victimId)
    );
  });

  console.log({ victimDefendants });

  return (
    <SectionBox title={<H3>Defendants</H3>}>
      {victimDefendants.length > 0 && (
        <>
          <H3>Victim Defendants</H3>
          <Table>
            {victimDefendants.map((def) => {
              return (
                <Table.Row>
                  <Table.Cell setWidth="75%">{def.fullName}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table>
        </>
      )}
      {otherCaseDefendants.length > 0 && (
        <>
          <H3>Other Defendants On Case</H3>
          <Table>
            {otherCaseDefendants.map((def) => {
              return (
                <Table.Row>
                  <Table.Cell setWidth="75%">{def.fullName}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table>
        </>
      )}
    </SectionBox>
  );
}
