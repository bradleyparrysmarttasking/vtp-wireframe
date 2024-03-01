import { useState } from "react";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {  } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import AllVictims from "./pages/AllVictims";
import { Victim } from "./types/types";

import initialVictimData from "./dummy_data/Victim.json";
import {
  Footer,
  Main,
  PhaseBanner,
  SectionBreak,
  SkipLink,
  TopNav,
} from "govuk-react";
import VictimPage from "./pages/VictimPage";

function App() {
  const [victims, setVictims] = useState<Victim[]>(initialVictimData.data);

  return (
    <>
      <>
        <SkipLink href="#main-content">Skip to main content</SkipLink>
        <TopNav
          company={
            <TopNav.Anchor href="https://example.com" target="new">
              <TopNav.IconTitle
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2257 800 60 75.853"
                  >
                    <g
                      id="Group_150"
                      data-name="Group 150"
                      transform="translate(-2297 750)"
                    >
                      <path
                        id="Path_1"
                        data-name="Path 1"
                        fill="white"
                        d="M24.023,124.925a9.149,9.149,0,0,0-4.009-1.06c-4.009,0-6.866,2.811-6.866,7.189,0,4.608,3.18,7.327,7,7.327a8.476,8.476,0,0,0,3.917-.968l1.06,2.4a11.352,11.352,0,0,1-5.161,1.336C13.24,141.146,9,136.722,9,131.008c0-5.3,4.194-9.908,11.014-9.908a11.192,11.192,0,0,1,5.253,1.475Z"
                        transform="translate(35.147 -15.294)"
                      />
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        fill="white"
                        d="M55.517,141.2H51.6V121.8h6.083c4.378,0,7.051,1.843,7.051,5.576,0,3.272-2.811,6.5-7.465,6.5h-.922v-2.4l.876-.092a3.62,3.62,0,0,0,3.641-3.871c0-1.982-1.29-3.134-3.594-3.134H55.517Z"
                        transform="translate(12.179 -15.671)"
                      />
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        fill="white"
                        d="M95.961,124.841a5.725,5.725,0,0,0-3.134-1.106c-1.613,0-2.535.922-2.535,2.074,0,1.29,1.336,2.258,3.641,4.055,2.627,2.074,4.009,3.733,4.009,6.083,0,2.442-2.35,5.253-6.728,5.253a8.593,8.593,0,0,1-5.714-1.935l1.429-2.212a6.475,6.475,0,0,0,3.963,1.567c1.613,0,3.041-.876,3.041-2.673,0-2.12-2.627-3.548-4.147-4.747-1.889-1.521-3.456-2.719-3.456-5.3,0-2.627,2.627-4.7,6.175-4.7a6.932,6.932,0,0,1,4.885,1.705Z"
                        transform="translate(-6.099 -15.347)"
                      />
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        fill="white"
                        d="M39.908,36.267l9.4-31.613,9.4,31.613Zm-19.816,0H1.29l9.4-31.613ZM60,36.221,50,2.627l4.654-.461L30.184.046,30,0,4.931,2.12h.046l4.977.461L0,36.221l.046.046H0a15.608,15.608,0,0,0,10.645,4.055A15.608,15.608,0,0,0,21.29,36.267h-.046l.046-.046L11.382,2.765,29.263,4.47,26.544,46.544h.046l-9.263,4.1H42.765l-9.493-4.194L30.507,4.47,48.571,2.765,38.664,36.221l.046.046h-.046A15.992,15.992,0,0,0,60,36.221l-.046.046Z"
                        transform="translate(40 50)"
                      />
                    </g>
                  </svg>
                }
              ></TopNav.IconTitle>
            </TopNav.Anchor>
          }
          serviceTitle="Victim Focused Case View"
        />
        <Main>
          <Router>
            <Routes>
              <Route
                path="/victims"
                element={<AllVictims victims={victims} />}
              />
              <Route
                path="/victims/:victimId"
                element={<VictimPage victims={victims} />}
              />
              <Route path="/" element={<Navigate replace to={"/victims"} />} />
            </Routes>
          </Router>
        </Main>
        <Footer />
      </>
    </>
  );
}

export default App;
