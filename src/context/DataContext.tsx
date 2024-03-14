import { createContext } from "react";
import { Case, Communication, Victim } from "../types/types";

interface IDataContext {
  victims: Victim[];
  setVictims?: React.Dispatch<React.SetStateAction<Victim[]>>;
  cases: Case[];
  setCases?: React.Dispatch<React.SetStateAction<Case[]>>;
  communications: Communication[];
  setCommunications?: React.Dispatch<React.SetStateAction<Communication[]>>;
}

const DataContext = createContext<IDataContext>({
  victims: [],
  cases: [],
  communications: [],
});

export default DataContext;
