import { Tabs } from "govuk-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const screen = pathname.split("/")[2];

  console.log({ screen });

  function hooksHandleClick(href) {
    /* eslint-disable-next-line no-undef */
    // const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
    // if (mql.matches) {
    //   e.preventDefault();
    // }
    navigate(`/home/${href}`);
  }

  return (
    <>
      <Tabs.List style={{ display: "flex", marginBottom: "1em" }}>
        {[
          {
            content: "Victims & Witnesses",
            href: "victims",
          },
          {
            content: "Import Case Witnesses",
            href: "case-search",
          },
        ].map(({ content, href }, index) => (
          <Tabs.Tab
            key={href}
            onClick={(event) => hooksHandleClick(href)}
            selected={href === screen}
            // href={href}
            style={{ cursor: "pointer" }}
          >
            {content}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {children}
    </>
  );
}
