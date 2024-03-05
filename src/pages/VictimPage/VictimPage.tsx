import { Victim, Case, Communication } from "../../types/types";
import { BackLink, Breadcrumbs, Heading, Link } from "govuk-react";
import PersonalDetails from "./PersonalDetails";
import CaseInformation from "./CaseInformation";
import Communications from "./Communications/Communications";
import useVictimPage from "./useVictimPage";
import Templates from "./Templates/Templates";

export default function VictimPage(props: {
  victims: Victim[];
  cases: Case[];
  communications: Communication[];
}) {
  const {
    navigate,
    victim,
    caseObject,
    fullName,
    victimCommunications,
    victimId,
  } = useVictimPage(props);
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
      <CaseInformation caseObject={caseObject} />
      {/* <Templates caseObject={caseObject} victim={victim} /> */}
      <Communications
        victimCommunications={victimCommunications}
        victimId={victimId}
      />
    </>
  );
}
