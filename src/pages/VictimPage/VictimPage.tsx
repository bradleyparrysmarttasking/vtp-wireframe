import {
  Breadcrumbs,
  Button,
  H1,
  Heading,
  HintText,
  Link,
  Tabs,
} from "govuk-react";
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import CaseInformation from "./CaseInformation";
import Communications from "./Communications/Communications";
import useVictimPage from "./useVictimPage";
import { useState } from "react";
import Defendants from "./Defendants/Defendants";
import Overview from "./Overview/Overview";
import Contacts from "./Contacts/Contacts";
// import Templates from "./Templates/Templates";

export default function VictimPage() {
  const {
    navigate,
    victim,
    caseObjects,
    fullName,
    victimCommunications,
    victimId,
    victimTasks,
    cms,
    enriched,
    contactApp,
    ddei,
  } = useVictimPage();

  const [tabIndex, setHooksTabIndex] = useState(0);

  const handleTabChange = (newTabIndex) => setHooksTabIndex(newTabIndex);

  function hooksHandleClick({ event: e, index }) {
    return handleTabChange(index);
  }

  return (
    <>
      <Breadcrumbs>
        <Link
          href="javascript:void(0);"
          onClick={() => navigate("/home/victims")}
        >
          Victims & Witnesses
        </Link>
        <Link>{fullName}</Link>
      </Breadcrumbs>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "1em" }}>
          {/* @ts-ignore */}
          <H1 style={ddei}>{fullName}</H1>
          <HintText style={enriched}>{victim.victimId}</HintText>
        </div>
        {!victim.isVictim && (
          <div>
            <Button style={{ margin: 0 }}>Make Victim</Button>
          </div>
        )}
      </div>
      <Tabs>
        <Tabs.Title>Content</Tabs.Title>
        <Tabs.List style={{ display: "flex" }}>
          {[
            {
              content: "Overview",
              href: "#overview",
            },
            {
              content: "Personal Details",
              href: "#first-panel",
            },
            {
              content: "Cases",
              href: "#second-panel",
            },
            {
              content: "Communications",
              href: "#third-panel",
            },
            {
              content: "Contacts",
              href: "#contacts",
            },
          ].map(({ content, href }, index) => (
            <Tabs.Tab
              key={href}
              onClick={(event) => hooksHandleClick({ event, index })}
              selected={tabIndex === index}
              // href={href}
              style={{ cursor: "pointer" }}
            >
              {content}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {[
          {
            content: (
              <Overview
                caseObjects={caseObjects}
                victim={victim}
                victimTasks={victimTasks}
              />
            ),
            id: "overview",
          },
          {
            content: <PersonalDetails victim={victim} />,
            id: "first-panel",
          },
          {
            content: (
              <CaseInformation caseObjects={caseObjects} victim={victim} />
            ),
            id: "second-panel",
          },
          {
            content: (
              <Communications
                victimCommunications={victimCommunications}
                victimId={victimId}
                caseObjects={caseObjects}
              />
            ),
            id: "third-panel",
          },
          {
            content: <Contacts caseObjects={caseObjects} victim={victim} />,
            id: "contacts",
          },
        ].map(({ content, id }, index) => (
          <Tabs.Panel key={id} selected={tabIndex === index} id={id}>
            {content}
          </Tabs.Panel>
        ))}

        {/* <Templates caseObject={caseObject} victim={victim} /> */}
      </Tabs>
    </>
  );
}
