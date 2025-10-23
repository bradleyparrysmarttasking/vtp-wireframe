import { Box } from "@mantine/core";
import { Tabs } from "govuk-react";
import { useState } from "react";
import { DocumentFrame } from "./DocumentFrame";

export function DocumentViewer({ documents = [] }: { documents: any[] }) {
  const [tabIndex, setHooksTabIndex] = useState(0);

  const handleTabChange = (newTabIndex) => setHooksTabIndex(newTabIndex);

  function hooksHandleClick({ event: e, index }) {
    return handleTabChange(index);
  }

  //   const tabs = [
  //     {
  //       label: "Disclosure Management Document",
  //       content: "Tab content",
  //       href: "#document",
  //     },
  //     {
  //       label: "Disclosure Record Sheet",
  //       content: "Another tab content",
  //       href: "#another",
  //     },
  //   ];

  return (
    <Tabs>
      <Tabs.Title>Content</Tabs.Title>
      <Tabs.List style={{ display: "flex" }}>
        {documents.map((document, index) => (
          <Tabs.Tab
            key={document.key}
            onClick={(event) => hooksHandleClick({ event, index })}
            selected={tabIndex === index}
            // href={href}
            style={{ cursor: "pointer" }}
          >
            {document.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {documents.map((document, index) => (
        <Tabs.Panel key={index} selected={tabIndex === index} id={index}>
          <DocumentFrame document={document} />
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
