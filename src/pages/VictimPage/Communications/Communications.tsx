import { Button, Heading } from "govuk-react";
import SectionBox from "../SectionBox";
import Timeline from "./Timeline";

import { Communication } from "../../../types/types";
import { useNavigate } from "react-router-dom";

export default function Communications({
  victimCommunications,
  victimId,
  caseTimeline,
}: {
  victimCommunications: Communication[];
  victimId: string;
  caseTimeline: any[];
}) {
  const navigate = useNavigate();
  return (
    <SectionBox
      title={
        <Heading size="SMALL">Case Timeline & Victim Communications</Heading>
      }
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
        caseTimeline={caseTimeline}
      />
    </SectionBox>
  );
}
