import { Breadcrumbs, Heading, Link } from "govuk-react";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import CaseInformation from "./CaseInformation";
import Communications from "./Communications/Communications";
import useVictimPage from "./useVictimPage";
// import Templates from "./Templates/Templates";

export default function VictimPage() {
  const {
    navigate,
    victim,
    caseObject,
    fullName,
    victimCommunications,
    victimId,
  } = useVictimPage();

  return (
    <>
      {/* <BackLink
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/victims")}
      >
        Back
      </BackLink> */}
      <Breadcrumbs>
        <Link href="javascript:void(0);" onClick={() => navigate("/victims")}>
          All Victims
        </Link>
        <Link>{fullName}</Link>
      </Breadcrumbs>
      <Heading size="LARGE">{fullName}</Heading>
      <PersonalDetails victim={victim} />
      <CaseInformation caseObject={caseObject} victim={victim} />
      {/* <Templates caseObject={caseObject} victim={victim} /> */}
      <Communications
        victimCommunications={victimCommunications}
        victimId={victimId}
        caseTimeline={caseObject.timeline}
      />
    </>
  );
}
