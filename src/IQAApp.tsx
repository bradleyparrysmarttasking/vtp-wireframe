import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Footer, Main, SkipLink, TopNav } from "govuk-react";
import CPS from "./logos/CPS";
import DataContext from "./context/DataContext";
import { Home } from "./iqa_app/Home";
import WarningModal from "./pages/WarningModal/WarningModal";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { MantineProvider } from "@mantine/core";
import { DocumentUpload } from "./components/DocumentUploads/DocumentUpload";
import { CaseSelection } from "./iqa_app/CaseSelection";

function IQAApp() {
  const { signOut } = useAuthenticator((context) => [context.authStatus]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <DataContext.Provider value={null}>
        {/* <WarningModal signOut={signOut} /> */}
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <TopNav
          company={
            <TopNav.Anchor href="#" target="new">
              <TopNav.IconTitle icon={<CPS />}>CPS</TopNav.IconTitle>
            </TopNav.Anchor>
          }
          serviceTitle="Submit IQA"
        />
        <Main /* @ts-ignore */
          style={{
            minHeight: "calc(100vh - 1em - 62px - 111px)",
            paddingTop: "1em",
          }}
        >
          <Router>
            <Routes>
              <Route path="/create-iqa/" element={<CaseSelection />} />
              <Route path="/submit-iqa/:case" element={<Home />} />
              <Route
                path="/"
                element={<Navigate replace to={"/submit-iqa"} />}
              />
              <Route
                path="/signin"
                element={<Navigate replace to={"/submit-iqa"} />}
              />
              <Route path="/document-upload" element={<DocumentUpload />} />
            </Routes>
          </Router>
        </Main>
        <Footer />
      </DataContext.Provider>
    </MantineProvider>
  );
}

export default IQAApp;
