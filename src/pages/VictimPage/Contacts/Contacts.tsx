import { Button, H2, H3, Table } from "govuk-react";
import { Case, Victim } from "../../../types/types";
import { useContext } from "react";
import DataContext from "../../../context/DataContext";
import { useParams } from "react-router-dom";
import ThemeContext from "../../../context/ThemeContext";

export default function Contacts({
  caseObjects,
  victim,
}: {
  caseObjects: Case[];
  victim: Victim;
}) {
  const { victimId } = useParams();
  const { contacts } = useContext(DataContext);
  const { cms, enriched, contactApp, ddei } = useContext(ThemeContext);

  const filteredContacts = contacts.filter(
    (contact) => contact.victimId === victimId
  );

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <H2>Contacts</H2>
        <Button>Add New</Button>
      </div>
      {filteredContacts.length > 0 && (
        <div style={enriched}>
          <H3>Additional Contacts</H3>
          <Table
            head={
              <Table.Row>
                <Table.CellHeader setWidth="20%">Full Name</Table.CellHeader>
                <Table.CellHeader setWidth="20%">Relation</Table.CellHeader>
                <Table.CellHeader setWidth="20%">Phone</Table.CellHeader>
                <Table.CellHeader setWidth="20%">Email</Table.CellHeader>
              </Table.Row>
            }
            body={filteredContacts.map((contact) => {
              return (
                <Table.Row>
                  <Table.Cell>{contact.fullName}</Table.Cell>
                  <Table.Cell>{contact.relation}</Table.Cell>
                  <Table.Cell>{contact.phone}</Table.Cell>
                  <Table.Cell>{contact.email}</Table.Cell>
                </Table.Row>
              );
            })}
          />
        </div>
      )}
    </>
  );
}
