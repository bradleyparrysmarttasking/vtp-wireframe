import { useState } from "react";
import {
  Main,
  Table,
  Breadcrumbs,
  SkipLink,
  GridRow,
  GridCol,
  TopNav,
  Heading,
  SearchBox,
  Link,
  PhaseBanner,
  Footer,
} from "govuk-react";

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
            <TopNav.IconTitle>CPS</TopNav.IconTitle>
          </TopNav.Anchor>
        }
        serviceTitle="Victim Centric View"
      />
      <Main>
        <PhaseBanner level="alpha">This system is in development</PhaseBanner>
        <Breadcrumbs>All Victims</Breadcrumbs>
        <Heading size="LARGE">All Victims</Heading>
        <GridRow>
          <GridCol setWidth="two-thirds">
            <SearchBox>
              <SearchBox.Input placeholder="Search victims" />
              <SearchBox.Button />
            </SearchBox>
          </GridCol>
        </GridRow>
        <Table
          head={
            <Table.Row>
              <Table.CellHeader>Full Name</Table.CellHeader>
            </Table.Row>
          }
          body={victims.map((victim) => {
            return (
              <Table.Row>
                <Table.Cell>
                  <Link href="#">{victim.fullName}</Link>
                </Table.Cell>
              </Table.Row>
            );
          })}
        />
        <Footer />
      </Main>
    </>
  );
}

export default App;
