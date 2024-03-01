import React, { useMemo, useState } from "react";
import {
  Table,
  GridRow,
  GridCol,
  Heading,
  SearchBox,
  Link,
  Pagination,
  SectionBreak,
  PhaseBanner,
  Tag,
} from "govuk-react";

import { Victim } from "../types/types";
import { useNavigate } from "react-router-dom";

function TableRow({ victim }: { victim: Victim }) {
  const navigate = useNavigate();
  const { fullName, classification, outstandingTasks } = victim;
  const tagColor = classification === "Universal" ? "BLUE" : "GREEN";
  return (
    <Table.Row>
      <Table.Cell>
        <Link
          href={""}
          onClick={() => navigate(`/victims/${victim.id}`)}
          noVisitedState
        >
          {fullName}
        </Link>
      </Table.Cell>
      <Table.Cell>
        <Tag tint={tagColor}>{classification}</Tag>
      </Table.Cell>
      <Table.Cell>{outstandingTasks}</Table.Cell>
    </Table.Row>
  );
}

function AllVictims({ victims }: { victims: Victim[] }) {
  const [search, setSearch] = useState("");

  const filteredVictims = useMemo(() => {
    return victims.filter((victim) => {
      if (!search) return true;
      return victim.fullName.toLowerCase().includes(search);
    });
  }, [victims, search]);

  return (
    <>
      <PhaseBanner level="alpha">This system is in development</PhaseBanner>
      {/* <Breadcrumbs>All Victims</Breadcrumbs> */}
      <SectionBreak level="MEDIUM" visible={false} />
      <Heading size="LARGE">All Victims</Heading>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <SearchBox>
            {/*@ts-ignore*/}
            <SearchBox.Input
              placeholder="Search victims"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/*@ts-ignore*/}
            <SearchBox.Button />
          </SearchBox>
        </GridCol>
      </GridRow>
      <SectionBreak level="MEDIUM" visible={false} />
      <Table
        head={
          <Table.Row>
            <Table.CellHeader>Full Name</Table.CellHeader>
            <Table.CellHeader>Classification</Table.CellHeader>
            <Table.CellHeader>Outstanding Tasks</Table.CellHeader>
          </Table.Row>
        }
        body={filteredVictims.slice(0, 20).map((victim) => {
          return <TableRow victim={victim} />;
        })}
      />
      <Pagination>
        <Pagination.Anchor href="#prev" pageTitle="1 of 3" previousPage>
          Previous page
        </Pagination.Anchor>
        <Pagination.Anchor href="#next" nextPage pageTitle="3 of 3">
          Next page
        </Pagination.Anchor>
      </Pagination>
    </>
  );
}

export default AllVictims;
