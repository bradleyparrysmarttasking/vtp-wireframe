// import { useState } from "react";

// import "./App.css";
import { useState } from "react";
// import Heading from "./design_system/heading/src";
// import Main from "./design_system/main/src";
import {
  Main,
  Table,
  Breadcrumbs,
  SkipLink,
  GridRow,
  GridCol,
  TopNav,
  Heading,
} from "govuk-react";
// import SearchBox from "./design_system/search-box/src";

// import TopNav from "./design_system/top-nav/src";

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
            <Table.Row>
              <Table.Cell>Full Name</Table.Cell>
            </Table.Row>
          }
          body={victims.map((victim) => {
            return (
              <Table.Row>
                <Table.Cell>{victim.fullName}</Table.Cell>
              </Table.Row>
            );
          })}
        />
      </Main>
    </>
  );
}

export default App;
