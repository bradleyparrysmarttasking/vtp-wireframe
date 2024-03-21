import { useContext, useEffect, useMemo, useState } from "react";
import {
  Table,
  GridRow,
  GridCol,
  Heading,
  SearchBox,
  Link,
  Pagination,
  SectionBreak,
  // PhaseBanner,
  Tag,
  Checkbox,
} from "govuk-react";

import { Victim } from "../../types/types";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";

const PAGE_SIZE = 20;

function TableRow({ victim }: { victim: Victim }) {
  const navigate = useNavigate();
  const { fullName, classification, victimId } = victim;
  const tagColor = classification === "Universal" ? "BLUE" : "GREEN";

  const {
    intimidated,
    specialNeeds,
    vulnerable,
    unacceptableBehaviour,
    highlyVulnerable,
  } = victim;
  // const filteredCharateristics = [
  //   { value: intimidated, title: "Intimidated" },
  //   { value: specialNeeds, title: "Special Needs" },
  //   { value: vulnerable, title: "Vulnerable" },
  //   // { value: age < 18, title: "Child" },
  //   {
  //     value: unacceptableBehaviour,
  //     title: "Unacceptable Behaviour",
  //   },
  //   { value: highlyVulnerable, title: "Highly Vulnerable" },
  // ].filter((char) => char.value);

  return (
    <Table.Row>
      <Table.Cell>
        <b>{victimId}</b>
      </Table.Cell>
      <Table.Cell>
        <Link
          href="javascript:void(0);"
          onClick={() => navigate(`/home/victims/${victim.id}`)}
          noVisitedState
        >
          {fullName}
        </Link>
      </Table.Cell>
    </Table.Row>
  );
}

function AllWitnesses() {
  const { victims } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [checked, setChecked] = useState(true);

  const filteredVictims = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return victims.filter((victim) => {
      if (checked && victim.isVictim === true) return false;
      if (!search) return true;
      return (
        victim.fullName.toLowerCase().includes(lowerSearch) ||
        victim.victimId.toLowerCase().includes(lowerSearch)
      );
    });
  }, [victims, search, checked]);

  const totalPages = useMemo(() => {
    return Math.ceil(filteredVictims.length / PAGE_SIZE);
  }, [filteredVictims]);

  useEffect(() => {
    setPage(0);
  }, [filteredVictims]);

  return (
    <>
      {/* <PhaseBanner level="alpha">This system is in development</PhaseBanner> */}
      {/* <SectionBreak level="MEDIUM" visible={false} /> */}
      <Heading size="LARGE">All Witnesses</Heading>
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
        {/* <GridCol setWidth="one-third">
          <Checkbox
            sizeVariant="SMALL"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            style={{
              opacity: 100,
              height: 30,
              width: 30,
              marginRight: "0.5em",
            }}
          >
            Victims Only
          </Checkbox>
        </GridCol> */}
      </GridRow>
      <SectionBreak level="MEDIUM" visible={false} />
      {filteredVictims.length > 0 && (
        <Table
          head={
            <Table.Row>
              <Table.CellHeader setWidth="20%">ID</Table.CellHeader>
              <Table.CellHeader setWidth="80%">Full Name</Table.CellHeader>
            </Table.Row>
          }
          body={filteredVictims
            .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
            .map((victim) => {
              return <TableRow victim={victim} />;
            })}
        />
      )}
      <Pagination>
        {page !== 0 && (
          <Pagination.Anchor
            href="#prev"
            pageTitle={`Page ${page} of ${totalPages}`}
            previousPage
            onClick={() => setPage(page - 1)}
          >
            Previous page
          </Pagination.Anchor>
        )}
        {page + 1 < totalPages && (
          <Pagination.Anchor
            href="#next"
            nextPage
            pageTitle={`Page ${page + 2} of ${totalPages}`}
            onClick={() => setPage(page + 1)}
          >
            Next page
          </Pagination.Anchor>
        )}
      </Pagination>
    </>
  );
}

export default AllWitnesses;
