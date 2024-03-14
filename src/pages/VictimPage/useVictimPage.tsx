import { useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";

export default function useVictimPage() {
  const { victims, cases, communications } = useContext(DataContext);
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

  const victimCommunications = useMemo(() => {
    return communications.filter((comm) => {
      return comm.caseId === victim.caseId;
    });
  }, [victim, communications]);

  console.log({ victimCommunications });

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
