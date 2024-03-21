import { createContext } from "react";
import {
  Case,
  Communication,
  Contact,
  Defendant,
  Task,
  Victim,
} from "../types/types";

interface IDataContext {
  victims: Victim[];
  setVictims?: React.Dispatch<React.SetStateAction<Victim[]>>;
  cases: Case[];
  setCases?: React.Dispatch<React.SetStateAction<Case[]>>;
  communications: Communication[];
  setCommunications?: React.Dispatch<React.SetStateAction<Communication[]>>;
  defendants: Defendant[];
  setDefendants?: React.Dispatch<React.SetStateAction<Defendant[]>>;
  contacts: Contact[];
  setContacts?: React.Dispatch<React.SetStateAction<Contact[]>>;
  tasks: Task[];
  setTasks?: React.Dispatch<React.SetStateAction<Task[]>>;
}

const DataContext = createContext<IDataContext>({
  victims: [],
  cases: [],
  communications: [],
  defendants: [],
  contacts: [],
  tasks: [],
});

export default DataContext;
