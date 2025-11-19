import { Box, Loader, Stack } from "@mantine/core";
import { Button, Heading, InsetText, Link, Table } from "govuk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CriteriaSection } from "./CriteriaSection";

type Case = {
  prosecutor: string;
  defendants: string[];
  urn: string;
  category: string;
  type: string;
};

export const cases: Case[] = [
  {
    prosecutor: "John Exemplar",
    defendants: ["Jane Doe", "Jim Doe"],
    urn: "1234567890",
    category: "exemplar",
    type: "Domestic Abuse",
  },
  {
    prosecutor: "Jane Good",
    defendants: ["Jim Doe", "John Doe"],
    urn: "1234567891",
    category: "good",
    type: "Domestic Abuse",
  },
  {
    prosecutor: "Jim Fair",
    defendants: ["John Doe", "Jane Doe"],
    urn: "1234567892",
    category: "fair",
    type: "Domestic Abuse",
  },
  {
    prosecutor: "John Bad",
    defendants: ["Jane Doe", "Jim Doe"],
    urn: "1234567893",
    category: "poor",
    type: "Domestic Abuse",
  },
];

function TableRow({
  case: { prosecutor, defendants, urn, category, type },
}: {
  case: Case;
}) {
  const navigate = useNavigate();

  return (
    <Table.Row>
      <Table.Cell>
        <b>{urn}</b>
      </Table.Cell>
      <Table.Cell>{prosecutor}</Table.Cell>
      <Table.Cell>{defendants.join(", ")}</Table.Cell>
      <Table.Cell>
        <Link
          href="javascript:void(0);"
          onClick={() => navigate(`/submit-iqa/${category}`)}
          noVisitedState
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Button style={{ width: "100%" }}>Start IQA</Button>
        </Link>
      </Table.Cell>
    </Table.Row>
  );
}

export function CaseSelection() {
  const [showList, setShowList] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateCaseShortlist = async () => {
    setLoading(true);
    setInterval(() => {
      setShowList(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <Stack>
      <Heading as="h1">Start An IQA</Heading>
      <InsetText>
        To ensure the IQA process covers a representative sample of cases, we
        use an algorithm to generate a shortlist for you to select from.
      </InsetText>
      <CriteriaSection />
      {!showList && !loading && (
        <Button onClick={generateCaseShortlist} disabled={loading}>
          {loading ? "Generating..." : "Generate Case Shortlist"}
        </Button>
      )}
      {loading && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Loader color="blue" size="xl" />
        </Box>
      )}
      {showList && (
        <div>
          <h1>Case List</h1>
          <Table
            head={
              <Table.Row>
                <Table.CellHeader setWidth="25%">ID</Table.CellHeader>
                <Table.CellHeader setWidth="25%">Prosecutor</Table.CellHeader>
                <Table.CellHeader setWidth="25%">Defendants</Table.CellHeader>
                <Table.CellHeader setWidth="25%"></Table.CellHeader>
              </Table.Row>
            }
            body={cases.map((c) => (
              <TableRow key={c.urn} case={c} />
            ))}
          />
        </div>
      )}
    </Stack>
  );
}
