import {
  Button,
  DateField,
  GridCol,
  GridRow,
  H1,
  H2,
  Heading,
  HintText,
  Input,
  Label,
  LabelText,
  Panel,
} from "govuk-react";
import { useState } from "react";

const formQuestions = [
  { question: "Victim/Witness Surname" },
  { question: "Victim/Witness First Names" },
  { question: "Victim/Witness Date of Birth", type: "date" },
  { question: "Court Number" },
  { question: "Area Code" },
  { question: "Case Status" },
];

const mockSearchResults = [
  {
    urn: "13UJ494219",
    defendants: "Emile Ullrich",
    victims: "Ivory Gerhold, Marquis Ferry",
    otherWitnesses: "Cristobal Frami, Terrence Sanford",
  },
  {
    urn: "20FT769117",
    defendants: "Emile Ullrich",
    victims: "Ivory Gerhold, Marquis Ferry",
    otherWitnesses: "Cristobal Frami, Terrence Sanford",
  },
];

export default function ImportCase() {
  const [showResults, setShowResults] = useState(false);
  const [importSuccessful, setImportSuccessful] = useState(false);
  return (
    <>
      <H1>Import Case Witnesses</H1>
      <GridRow>
        <GridCol setWidth="two-thirds">
          {!showResults && !importSuccessful && (
            <>
              <H2>Search Cases</H2>
              {formQuestions.map((questionObject) => {
                const { question, type } = questionObject;
                switch (type) {
                  case "date":
                    return (
                      <DateField style={{ marginBottom: "1em" }}>
                        {question}
                      </DateField>
                    );
                  default:
                    return (
                      <Label style={{ marginBottom: "1em" }}>
                        <LabelText>{question}</LabelText>
                        <Input />
                      </Label>
                    );
                }
              })}
              <Button onClick={() => setShowResults(true)}>Search</Button>
            </>
          )}
        </GridCol>
      </GridRow>

      {showResults && !importSuccessful && (
        <>
          <H2>Results</H2>
          {mockSearchResults.map((searchResultObject) => {
            const { urn, defendants, victims, otherWitnesses } =
              searchResultObject;
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "1fr 1fr auto",
                  gridTemplateAreas: `"left top right" "left middle right" "left bottom right"`,
                  borderTop: "#efefef 1px solid",
                  marginBottom: "0.5em",
                  paddingTop: "1em",
                }}
              >
                <div
                  style={{
                    gridArea: "left",
                    fontSize: "1.5em",
                    padding: 5,
                  }}
                >
                  <b>{urn}</b>
                </div>
                <div style={{ gridArea: "top", padding: 5 }}>
                  <b>Defendants:</b> {defendants}
                </div>
                <div style={{ gridArea: "middle", padding: 5 }}>
                  <b>Victims:</b> {victims}
                </div>
                <div style={{ gridArea: "bottom", padding: 5 }}>
                  <b>Other Witnesses:</b> {otherWitnesses}
                </div>
                <div
                  style={{
                    gridArea: "right",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div>
                    <Button
                      style={{ margin: "0.5em" }}
                      onClick={() => setImportSuccessful(true)}
                    >
                      Import
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
      {importSuccessful && (
        <>
          <Panel title="Successfully Imported" />
          <Button
            onClick={() => {
              setImportSuccessful(false);
              setShowResults(false);
            }}
          >
            Back To Search
          </Button>
        </>
      )}
    </>
  );
}
