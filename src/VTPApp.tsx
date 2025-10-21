import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AllVictims from "./pages/AllVictims/AllVictims";
import {
  Victim,
  Case,
  Communication,
  Defendant,
  Contact,
  Task,
} from "./types/types";
import initialVictimData from "./dummy_data/Victim.json";
import initialCaseData from "./dummy_data/Case.json";
import initialCommunicationData from "./dummy_data/Communication.json";
import initialDefendantData from "./dummy_data/Defendant.json";
import initialContactData from "./dummy_data/Contact.json";
import initialTaskData from "./dummy_data/Task.json";
import { Button, Footer, Main, SkipLink, TopNav } from "govuk-react";
import VictimPage from "./pages/VictimPage/VictimPage";
import CPS from "./logos/CPS";
import CreateCommunication from "./pages/VictimPage/Communications/CreateCommunication";
import PersonalDetailsForm from "./pages/VictimPage/PersonalDetails/PersonalDetailsForm";
import DataContext from "./context/DataContext";
import ThemeContext from "./context/ThemeContext";
import AllWitnesses from "./pages/AllWitnesses/AllWitnesses";
import ImportCase from "./pages/ImportCase/ImportCase";
import Home from "./pages/Home";
import WarningModal from "./pages/WarningModal/WarningModal";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";

const themeObject = {
  cms: { backgroundColor: "#c9daf8" },
  ddei: { backgroundColor: "#9fc5e8" },
  enriched: { backgroundColor: "#d9ead3" },
  contactApp: { backgroundColor: "#d9d2e9" },
  mg: { backgroundColor: "#f4cccc" },
};

function VTPApp() {
  const [showDataSource, setShowDataSource] = useState(false);
  const [victims, setVictims] = useState<Victim[]>(initialVictimData.data);
  const [cases, setCases] = useState<Case[]>(initialCaseData.data);
  const [communications, setCommunications] = useState<Communication[]>(
    initialCommunicationData.data
  );
  const [defendants, setDefendants] = useState<Defendant[]>(
    initialDefendantData.data
  );
  const [contacts, setContacts] = useState<Contact[]>(initialContactData.data);
  const [tasks, setTasks] = useState<Task[]>(initialTaskData.data);

  const { authStatus, signOut } = useAuthenticator((context) => [
    context.authStatus,
  ]);

  return (
    <DataContext.Provider
      value={{
        victims,
        setVictims,
        cases,
        setCases,
        communications,
        setCommunications,
        defendants,
        setDefendants,
        contacts,
        setContacts,
        tasks,
        setTasks,
      }}
    >
      <ThemeContext.Provider
        value={
          showDataSource
            ? themeObject
            : {
                cms: {},
                ddei: {},
                enriched: {},
                contactApp: {},
                mg: {},
              }
        }
      >
        <WarningModal signOut={signOut} />
        <div style={{ minHeight: "100vh" }}>
          <button
            style={{ position: "fixed", top: 5, right: 10 }}
            onClick={() =>
              setShowDataSource((showDataSource) => !showDataSource)
            }
          >
            Toggle Data Sources
          </button>
          {showDataSource && (
            <div
              style={{
                position: "fixed",
                top: 40,
                right: 10,
                backgroundColor: "white",
                padding: "1em",
                borderRadius: "1em",
                border: "1px solid #dddddd",
                zIndex: 400,
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                <div
                  style={{
                    ...themeObject.cms,
                    height: "1em",
                    width: "1em",
                  }}
                ></div>
                <div>CMS</div>
                <div
                  style={{
                    ...themeObject.ddei,
                    height: "1em",
                    width: "1em",
                  }}
                ></div>
                <div>DDEI Available</div>
                <div
                  style={{
                    ...themeObject.contactApp,
                    height: "1em",
                    width: "1em",
                  }}
                ></div>
                <div>Contact App</div>
                <div
                  style={{
                    ...themeObject.enriched,
                    height: "1em",
                    width: "1em",
                  }}
                ></div>
                <div>Enrichment Needed</div>
                <div
                  style={{
                    ...themeObject.mg,
                    height: "1em",
                    width: "1em",
                  }}
                ></div>
                <div>MG Form</div>
              </div>
            </div>
          )}
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
                <Route
                  path="/home/victims"
                  element={
                    <Home>
                      <AllVictims />
                    </Home>
                  }
                />
                <Route
                  path="/home/witnesses"
                  element={
                    <Home>
                      <AllWitnesses />
                    </Home>
                  }
                />
                <Route
                  path="/home/case-search"
                  element={
                    <Home>
                      <ImportCase />
                    </Home>
                  }
                />
                <Route
                  path="/home/victims/:victimId"
                  element={<VictimPage />}
                />
                <Route
                  path="/home/victims/:victimId/communications/create"
                  element={<CreateCommunication />}
                />
                <Route
                  path="/home/victims/:victimId/personal/update"
                  element={<PersonalDetailsForm />}
                />
                <Route
                  path="/"
                  element={<Navigate replace to={"/home/victims"} />}
                />
                <Route
                  path="/signin"
                  element={<Navigate replace to={"/home/victims"} />}
                />
              </Routes>
            </Router>
          </Main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </DataContext.Provider>
  );
}

export default VTPApp;
