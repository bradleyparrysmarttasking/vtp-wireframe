import React, { useContext, useEffect, useMemo, useState } from "react";
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
  H1,
} from "govuk-react";

import { Victim } from "../../types/types";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import ThemeContext from "../../context/ThemeContext";

const PAGE_SIZE = 20;

function TableRow({ victim, hasTask }: { victim: Victim; hasTask: any }) {
  const navigate = useNavigate();
  const { ddei, enriched } = useContext(ThemeContext);
  const { fullName, classification, outstandingTasks, victimId, vrrSubmitted } =
    victim;
  const tagColor = classification === "Universal" ? "BLUE" : "GREEN";

  const {
    // intimidated,
    // specialNeeds,
    // vulnerable,
    // unacceptableBehaviour,
    // highlyVulnerable,
    caseUrns,
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
      <Table.Cell style={enriched}>
        <b>{victimId}</b>
      </Table.Cell>
      <Table.Cell style={ddei}>
        <Link
          href="javascript:void(0);"
          onClick={() => navigate(`/home/victims/${victim.id}`)}
          noVisitedState
        >
          {fullName}
        </Link>
        {hasTask ? (
          <div
            style={{
              height: 10,
              width: 10,
              backgroundColor: "#e06666",
              borderRadius: "50%",
              display: "inline-block",
              marginLeft: "0.5em",
            }}
          ></div>
        ) : (
          ""
        )}
        {vrrSubmitted ? (
          <div
            style={{
              height: 10,
              width: 10,
              backgroundColor: "#d5a6bd",
              borderRadius: "50%",
              display: "inline-block",
              marginLeft: "0.5em",
            }}
          ></div>
        ) : (
          ""
        )}
      </Table.Cell>
      {/* <Table.Cell>
        <div style={{ display: "flex", gap: "1em" }}>
          {filteredCharateristics.map((char) => (
            <Tag>{char.title}</Tag>
          ))}
        </div>
        <div></div>
      </Table.Cell> */}
      <Table.Cell style={ddei}>{caseUrns.join(", ")}</Table.Cell>
      <Table.Cell style={enriched}>
        {classification && (
          <>
            <Tag tint={tagColor}>{classification}</Tag>
            <div></div>
          </>
        )}
      </Table.Cell>
    </Table.Row>
  );
}

function AllVictims() {
  const { victims, tasks } = useContext(DataContext);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [checked, setChecked] = useState(true);
  const [actions, setActions] = useState(false);

  const taskObject = useMemo(() => {
    //@ts-ignore
    return Object.groupBy(tasks, (task) => task.victimId);
  }, [tasks]);

  console.log({ taskObject });

  const filteredVictims = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return victims
      .filter((victim) => {
        if (checked && victim.isVictim === false) return false;
        if (actions && !taskObject[victim.id] && !victim.vrrSubmitted)
          return false;
        if (!search) return true;
        return (
          victim.fullName.toLowerCase().includes(lowerSearch) ||
          victim.victimId.toLowerCase().includes(lowerSearch) ||
          victim.caseUrns.join(" ").toLowerCase().includes(lowerSearch)
        );
      })
      .sort((a: any, b: any) => {
        return a.fullName === b.fullName ? 0 : a.fullName > b.fullName ? 1 : -1;
      });
  }, [victims, search, checked, actions]);

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
      <H1>Victims & Witnesses</H1>
      <GridRow>
        <GridCol setWidth="one-half">
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
        <GridCol setWidth="one-half" style={{ display: "flex", gap: 5 }}>
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
          <Checkbox
            sizeVariant="SMALL"
            checked={actions}
            onChange={(e) => setActions(e.target.checked)}
            style={{
              opacity: 100,
              height: 30,
              width: 30,
              marginRight: "0.5em",
            }}
          >
            Action / VRR
          </Checkbox>
        </GridCol>
      </GridRow>
      <SectionBreak level="MEDIUM" visible={false} />
      {filteredVictims.length > 0 && (
        <Table
          head={
            <Table.Row>
              <Table.CellHeader setWidth="20%">ID</Table.CellHeader>
              <Table.CellHeader setWidth="35%">Full Name</Table.CellHeader>
              {/* <Table.CellHeader setWidth="50%">
                Characteristics
              </Table.CellHeader> */}
              <Table.CellHeader setWidth="25%">Case URNs</Table.CellHeader>
              <Table.CellHeader setWidth="20%">Classification</Table.CellHeader>
            </Table.Row>
          }
          body={filteredVictims
            .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
            .map((victim) => {
              return (
                <TableRow victim={victim} hasTask={taskObject[victim.id]} />
              );
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

export default AllVictims;
