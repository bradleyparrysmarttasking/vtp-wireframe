// import { useState } from "react";

// import "./App.css";
import { useState } from "react";
import Heading from "./design_system/heading/src";
import Main from "./design_system/main/src";
// import SearchBox from "./design_system/search-box/src";
import CPS from "./assets/CPS.svg";

import Table from "./design_system/table/src";
import Cell from "./design_system/table/src/atoms/Cell";
import CellHeader from "./design_system/table/src/atoms/CellHeader";
import Row from "./design_system/table/src/atoms/Row";
import TableBody from "./design_system/table/src/atoms/TableBody";
import TableHeader from "./design_system/table/src/atoms/TableHeader";
import TopNav from "./design_system/top-nav/src";
import Breadcrumbs from "./design_system/breadcrumbs/src";
import SkipLink from "./design_system/skip-link/src";
import GridRow from "./design_system/grid-row/src";
import GridCol from "./design_system/grid-col/src";

type Victim = {
  fullName: string;
};

function App() {
  const [victims, setVictims] = useState<Victim[]>([{ fullName: "John Doe" }]);

  return (
    <>
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <TopNav
        company={
          <TopNav.Anchor href="https://example.com" target="new">
            <TopNav.IconTitle>CPS Test</TopNav.IconTitle>
          </TopNav.Anchor>
        }
        serviceTitle="Victim Centric View"
      />
      <Main>
        <Breadcrumbs>All Victims</Breadcrumbs>
        <Heading size="LARGE">All Victims</Heading>
        <GridRow>
          <GridCol setWidth="two-thirds">
            {/* <SearchBox>
              <SearchBox.Input placeholder="Search GOV.UK" />
              {/* <SearchBox.Button /> 
            </SearchBox> */}
          </GridCol>
        </GridRow>
        <Table
          head={
            <Row>
              <Cell>Full Name</Cell>
            </Row>
          }
          body={victims.map((victim) => {
            return (
              <Row>
                <Cell>{victim.fullName}</Cell>
              </Row>
            );
          })}
        />
      </Main>
    </>
  );
}

export default App;
