import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AllVictims from "./pages/AllVictims/AllVictims";
import { Victim, Case, Communication } from "./types/types";
import initialVictimData from "./dummy_data/Victim.json";
import initialCaseData from "./dummy_data/Case.json";
import initialCommunicationData from "./dummy_data/Communication.json";
import { Footer, Main, SkipLink, TopNav } from "govuk-react";
import VictimPage from "./pages/VictimPage/VictimPage";
import CPS from "./logos/CPS";
import CreateCommunication from "./pages/VictimPage/Communications/CreateCommunication";
import PersonalDetailsForm from "./pages/VictimPage/PersonalDetails/PersonalDetailsForm";
import DataContext from "./context/DataContext";

function App() {
  const [victims, setVictims] = useState<Victim[]>(initialVictimData.data);
  const [cases, setCases] = useState<Case[]>(initialCaseData.data);
  const [communications, setCommunications] = useState<Communication[]>(
    initialCommunicationData.data
  );

  return (
    <DataContext.Provider
      value={{
        victims,
        setVictims,
        cases,
        setCases,
        communications,
        setCommunications,
      }}
    >
      <div style={{ minHeight: "100vh" }}>
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <TopNav
          company={
            <TopNav.Anchor href="https://example.com" target="new">
              <TopNav.IconTitle icon={<CPS />}>CPS</TopNav.IconTitle>
            </TopNav.Anchor>
          }
          serviceTitle="Victim Focused Case View"
        />
        <Main /* @ts-ignore */
          style={{
            minHeight: "calc(100vh - 1em - 62px - 111px)",
            paddingTop: "1em",
          }}
        >
          <Router>
            <Routes>
              <Route path="/victims" element={<AllVictims />} />
              <Route path="/victims/:victimId" element={<VictimPage />} />
              <Route
                path="/victims/:victimId/communications/create"
                element={<CreateCommunication />}
              />
              <Route
                path="/victims/:victimId/personal/update"
                element={<PersonalDetailsForm />}
              />
              <Route path="/" element={<Navigate replace to={"/victims"} />} />
            </Routes>
          </Router>
        </Main>
        <Footer />
      </div>
    </DataContext.Provider>
  );
}

export default App;
