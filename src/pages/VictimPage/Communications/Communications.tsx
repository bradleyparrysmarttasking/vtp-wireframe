import { Button, H2 } from "govuk-react";
import SectionBox from "../SectionBox";
import Timeline from "./Timeline";

import { Case, Communication } from "../../../types/types";
import { useNavigate } from "react-router-dom";

export default function Communications({
  victimCommunications,
  victimId,
  caseObjects,
}: {
  victimCommunications: Communication[];
  victimId: string;
  caseObjects: Case[];
}) {
  const navigate = useNavigate();
  return (
    <SectionBox
      title={<H2>Communications Timeline</H2>}
      controls={
        <Button
          onClick={() => navigate(`/victims/${victimId}/communications/create`)}
        >
          Add Communication
        </Button>
      }
    >
      <Timeline
        victimCommunications={victimCommunications}
        caseTimeline={caseObjects[0].timeline}
      />
    </SectionBox>
  );
}
