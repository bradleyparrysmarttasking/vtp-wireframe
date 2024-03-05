import { Button, Heading } from "govuk-react";
import SectionBox from "../SectionBox";
import Timeline from "./Timeline";

import { Communication } from "../../../types/types";
import { useNavigate } from "react-router-dom";

export default function Communications({
  victimCommunications,
  victimId,
}: {
  victimCommunications: Communication[];
  victimId: string;
}) {
  const navigate = useNavigate();
  return (
    <SectionBox
      title={<Heading size="SMALL">Victim Communications</Heading>}
      controls={
        <Button
          onClick={() => navigate(`/victims/${victimId}/communications/create`)}
        >
          Add Communication
        </Button>
      }
    >
      <Timeline victimCommunications={victimCommunications} />
    </SectionBox>
  );
}
