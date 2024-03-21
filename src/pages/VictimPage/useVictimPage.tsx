import { useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataContext from "../../context/DataContext";
import ThemeContext from "../../context/ThemeContext";

export default function useVictimPage() {
  const { victims, cases, communications, tasks } = useContext(DataContext);
  const { cms, enriched, contactApp, ddei } = useContext(ThemeContext);
  const { victimId } = useParams();
  const navigate = useNavigate();

  const victim = useMemo(() => {
    return victims.filter((victim) => {
      return victim.id === victimId;
    })[0];
  }, [victimId, victims]);

  const caseObjects = useMemo(() => {
    return cases.filter((caseOb) => {
      return victim.caseIds.includes(caseOb.id);
    });
  }, [victim, cases]);

  const victimCommunications = useMemo(() => {
    return communications.filter((comm) => {
      return (
        victim.caseIds.includes(comm.caseId) && victim.id === comm.victimId
      );
    });
  }, [victim, communications]);

  const victimTasks = useMemo(() => {
    return tasks.filter((task) => task.victimId === victimId);
  }, [tasks, victimId]);

  const { fullName } = victim;
  return {
    navigate,
    victim,
    caseObjects,
    fullName,
    victimCommunications,
    victimId,
    victimTasks,
    cms,
    enriched,
    ddei,
  };
}
