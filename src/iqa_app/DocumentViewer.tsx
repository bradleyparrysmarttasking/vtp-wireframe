import { Tabs } from "govuk-react";
import { useState } from "react";

export function DocumentViewer() {
  const [tabIndex, setHooksTabIndex] = useState(0);

  const handleTabChange = (newTabIndex) => setHooksTabIndex(newTabIndex);

  function hooksHandleClick({ event: e, index }) {
    return handleTabChange(index);
  }

  const tabs = [
    {
      label: "Document",
      content: "Tab content",
      href: "#document",
    },
    {
      label: "Another",
      content: "Another tab content",
      href: "#another",
    },
  ];

  return (
    <Tabs>
      <Tabs.Title>Content</Tabs.Title>
      <Tabs.List style={{ display: "flex" }}>
        {tabs.map((tab, index) => (
          <Tabs.Tab
            key={tab.href}
            onClick={(event) => hooksHandleClick({ event, index })}
            selected={tabIndex === index}
            // href={href}
            style={{ cursor: "pointer" }}
          >
            {tab.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.map((tab, index) => (
        <Tabs.Panel key={index} selected={tabIndex === index} id={index}>
          {tab.content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
