import { Button, H2, Heading, Table, Tag } from "govuk-react";
import dayjs from "dayjs";
import SectionBox from "../SectionBox";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

export default function PersonalDetails({ victim }) {
  const { cms, enriched, contactApp, ddei } = useContext(ThemeContext);
  const {
    classification,
    preferredLanguage,
    dob,
    // fullName,
    // outstandingTasks,
    // caseId,
    namePreference,
    contactPreference,
    mobile,
    landline,
    email,
    address,
    policeInitialNeedsAssessment,
    wcuDetailedNeedsAssessment,
    dashAssessment,
    isvaName,
    isvaContactDetails,
    intimidated,
    specialNeeds,
    vulnerable,
    // child,
    unacceptableBehaviour,
    highlyVulnerable,
    details,
    hasMadeVPS,
    vpsDetails,
    specialMeasuresGranted,
    missingSpecialMeasures,
    crisisHandlingPolicyActivated,
  } = victim;
  const { victimId } = useParams();
  const navigate = useNavigate();
  const dayjsDob = dayjs(dob);
  const formattedDob = dayjsDob.format("DD/MM/YYYY");
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
    <SectionBox
      title={<H2>Personal Details</H2>}
      controls={
        <Button
          onClick={() => navigate(`/victims/${victimId}/personal/update`)}
        >
          Edit
        </Button>
      }
    >
      <Table>
        <Table.Row style={enriched}>
          <Table.CellHeader setWidth="25%">Name Preference</Table.CellHeader>
          <Table.Cell setWidth="75%">{namePreference}</Table.Cell>
        </Table.Row>
        <Table.Row style={enriched}>
          <Table.CellHeader>Classification</Table.CellHeader>
          <Table.Cell>
            <Tag tint={tagColor}>{classification}</Tag>
          </Table.Cell>
        </Table.Row>
        <Table.Row style={enriched}>
          <Table.CellHeader>Preferred Language</Table.CellHeader>
          <Table.Cell>{preferredLanguage}</Table.Cell>
        </Table.Row>
        <Table.Row style={cms}>
          <Table.CellHeader>Date of Birth</Table.CellHeader>
          <Table.Cell>{formattedDob}</Table.Cell>
        </Table.Row>
        <Table.Row style={cms}>
          <Table.CellHeader>Age</Table.CellHeader>
          <Table.Cell>{age}</Table.Cell>
        </Table.Row>
        <Table.Row style={enriched}>
          <Table.CellHeader>Contact Preference</Table.CellHeader>
          <Table.Cell>{contactPreference}</Table.Cell>
        </Table.Row>
        <Table.Row style={cms}>
          <Table.CellHeader>Mobile</Table.CellHeader>
          <Table.Cell>{mobile}</Table.Cell>
        </Table.Row>
        <Table.Row style={cms}>
          <Table.CellHeader>Landline</Table.CellHeader>
          <Table.Cell>{landline}</Table.Cell>
        </Table.Row>
        <Table.Row style={cms}>
          <Table.CellHeader>Email</Table.CellHeader>
          <Table.Cell>{email}</Table.Cell>
        </Table.Row>
        <Table.Row style={cms}>
          <Table.CellHeader>Address</Table.CellHeader>
          <Table.Cell>{address}</Table.Cell>
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
            <Table.Row style={enriched}>
              <Table.CellHeader>Characteristic Details</Table.CellHeader>
              <Table.Cell>{details}</Table.Cell>
            </Table.Row>
          </>
        )}
        {crisisHandlingPolicyActivated && (
          <Table.Row style={enriched}>
            <Table.CellHeader>
              Crisis Handling Policy Activated
            </Table.CellHeader>
            <Table.Cell>
              <Tag tagColor={"RED"}>Yes</Tag>
            </Table.Cell>
          </Table.Row>
        )}
        {specialMeasuresGranted && (
          <Table.Row style={enriched}>
            <Table.CellHeader>Special Measures Granted</Table.CellHeader>
            <Table.Cell>{specialMeasuresGranted}</Table.Cell>
          </Table.Row>
        )}
        {isvaName && (
          <>
            <Table.Row style={enriched}>
              <Table.CellHeader>
                Independent Sexual Violence Advisor (ISVA)
              </Table.CellHeader>
              <Table.Cell>{isvaName}</Table.Cell>
            </Table.Row>
            <Table.Row style={enriched}>
              <Table.CellHeader>ISVA Contact Details</Table.CellHeader>
              <Table.Cell>{isvaContactDetails}</Table.Cell>
            </Table.Row>
          </>
        )}
      </Table>
    </SectionBox>
  );
}
