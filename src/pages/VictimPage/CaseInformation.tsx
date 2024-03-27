import { H2, H3, Heading, Table } from "govuk-react";
import { Case, Victim } from "../../types/types";
import SectionBox from "./SectionBox";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Defendants from "./Defendants/Defendants";
// import VRR from "./VRR";

export default function CaseInformation({
  caseObjects,
  victim,
}: {
  caseObjects: Case[];
  victim: Victim;
}) {
  const { cms, enriched, contactApp, ddei, mg } = useContext(ThemeContext);
  const {
    policeInitialNeedsAssessment,
    wcuDetailedNeedsAssessment,
    hasMadeVPS,
    vpsDetails,
    missingSpecialMeasures,
    dashAssessment,
  } = victim;

  return (
    <SectionBox title={<H2>Cases</H2>}>
      {caseObjects.map((caseObject) => {
        const { type, description, urn } = caseObject;
        return (
          <>
            <H3>{urn}</H3>
            <div style={{ marginLeft: "3em" }}>
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
              {/* <Defendants victim={victim} /> */}
              <Table>
                <Table.Row style={cms}>
                  <Table.CellHeader setWidth="25%">Type</Table.CellHeader>
                  <Table.Cell setWidth="75%">{type}</Table.Cell>
                </Table.Row>
                <Table.Row style={cms}>
                  <Table.CellHeader>Description</Table.CellHeader>
                  <Table.Cell>{description}</Table.Cell>
                </Table.Row>

                <Table.Row style={enriched}>
                  <Table.CellHeader>
                    Police Initial Needs Assessment
                  </Table.CellHeader>
                  <Table.Cell>{policeInitialNeedsAssessment}</Table.Cell>
                </Table.Row>
                <Table.Row style={enriched}>
                  <Table.CellHeader>
                    Witness Care Unit Initial Needs Assessment
                  </Table.CellHeader>
                  <Table.Cell>{wcuDetailedNeedsAssessment}</Table.Cell>
                </Table.Row>
                <Table.Row style={enriched}>
                  <Table.CellHeader>DASH Assessment</Table.CellHeader>
                  <Table.Cell>{dashAssessment}</Table.Cell>
                </Table.Row>
                <Table.Row style={mg}>
                  <Table.CellHeader>
                    Victim Personal Statement (VPS) Submitted
                  </Table.CellHeader>
                  <Table.Cell>{hasMadeVPS}</Table.Cell>
                </Table.Row>
                {hasMadeVPS === "Yes" && (
                  <Table.Row style={mg}>
                    <Table.CellHeader>VPS Details</Table.CellHeader>
                    <Table.Cell>{vpsDetails}</Table.Cell>
                  </Table.Row>
                )}
              </Table>
            </div>
          </>
        );
      })}

      {/* <VRR /> */}
    </SectionBox>
  );
}
