import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import VTPApp from "./VTPApp";
import IQAApp from "./IQAApp";

function App() {
  const { authStatus, signOut } = useAuthenticator((context) => [
    context.authStatus,
  ]);

  return (
    <>
      {authStatus === "configuring" ? null : authStatus === "authenticated" ? (
        // <VTPApp />
        <IQAApp />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/signin"
              element={<Authenticator hideSignUp={true} variation="modal" />}
            />
            <Route path="/*" element={<Navigate replace to={`/signin`} />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
