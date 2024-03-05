import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Case, Communication, Victim } from "../../types/types";

export default function useVictimPage({
  victims,
  cases,
  communications,
}: {
  victims: Victim[];
  cases: Case[];
  communications: Communication[];
}) {
  const { victimId } = useParams();
  const navigate = useNavigate();

  const victim = useMemo(() => {
    return victims.filter((victim) => {
      return victim.id === victimId;
    })[0];
  }, [victimId, victims]);

  const caseObject = useMemo(() => {
    return cases.filter((caseOb) => {
      return caseOb.id === victim.caseId;
    })[0];
  }, [victim, cases]);

  const victimCommunications = useMemo(() => [], []);

  const { fullName } = victim;
  return {
    navigate,
    victim,
    caseObject,
    fullName,
    victimCommunications,
    victimId,
  };
}
