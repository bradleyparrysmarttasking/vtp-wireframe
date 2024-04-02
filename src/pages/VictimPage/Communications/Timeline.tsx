import localizedFormat from "dayjs/plugin/localizedFormat";
import * as dayjs from "dayjs";
import { Communication } from "../../../types/types";
import "./Timeline.css";
import { GridCol, GridRow, SearchBox, Select, Tag } from "govuk-react";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

dayjs.extend(localizedFormat);

function TimelineItem({
  title,
  detail,
  updater,
  documents,
  date,
  index,
  type,
}: Communication & { index: number }) {
  const { cms, enriched, contactApp, ddei } = useContext(ThemeContext);
  //@ts-ignore
  const timeString = dayjs(date).format("LLLL");
  return (
    <div
      key={index}
      className={"moj-timeline__item"}
      style={type === "VRR" ? contactApp : undefined}
    >
      <div className="moj-timeline__header">
        <h2 className="moj-timeline__title">{type}</h2>

        {type === "VRR" ? (
          <Tag tint={"PURPLE"}>VRR Update</Tag>
        ) : (
          <Tag tint={"GREEN"}>Communication</Tag>
        )}

        <p className="moj-timeline__byline" style={{ marginLeft: "0.5em" }}>
          updated by {updater}
        </p>
      </div>

      <p className="moj-timeline__date">
        <time>{timeString}</time>
      </p>
      <div className="moj-timeline__description">
        <p>{detail}</p>
        {documents.length > 0 && (
          <ul className="moj-timeline__documents">
            {documents.map((document) => {
              return (
                <li className="moj-timeline__document-item">
                  <a className="govuk-link" href="#">
                    <svg
                      className="moj-timeline__document-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 20"
                      width="20"
                      height="16"
                    >
                      <path d="M9 7V1.5L14.5 7H9zM2 0C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6l-6-6H2z" />
                    </svg>
                    {document}
                  </a>
                </li>
              );
            })}{" "}
          </ul>
        )}
      </div>
    </div>
  );
}

function CaseTimelineItem({
  statusName,
  date,
  index,
}: {
  statusName: string;
  date: string;
} & { index: number }) {
  //@ts-ignore
  const timeString = dayjs(date).format("LLLL");
  return (
    <div className="moj-timeline__item" key={index}>
      <div className="moj-timeline__header">
        <h2 className="moj-timeline__title">{statusName}</h2>
        <Tag>Case Update</Tag>
      </div>

      <p className="moj-timeline__date">
        <time>{timeString}</time>
      </p>
    </div>
  );
}

export default function Timeline({
  victimCommunications,
  caseTimeline,
}: {
  victimCommunications: Communication[];
  caseTimeline: any[];
}) {
  const { cms, enriched, contactApp, ddei } = useContext(ThemeContext);
  const validCaseTimeline = caseTimeline.filter((item: any) => item.date);
  const combined = [...validCaseTimeline, ...victimCommunications];
  const sorted = combined.sort((a: any, b: any) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  return (
    <div style={{ padding: "1em" }}>
      <GridRow style={{ marginBottom: "1em" }}>
        <GridCol setWidth="two-thirds">
          <SearchBox>
            {/*@ts-ignore*/}
            <SearchBox.Input
              placeholder="Search communications & case updates"
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />
            {/*@ts-ignore*/}
            <SearchBox.Button />
          </SearchBox>
        </GridCol>
        <GridCol setWidth="one-third">
          {/* @ts-ignore */}
          <Select>
            <option value="0">Case Updates & Comms</option>
            <option value="1">Case Updates</option>
            <option value="2">Comms</option>
          </Select>
        </GridCol>
      </GridRow>
      {sorted.length > 0 && (
        <div className="moj-timeline" style={ddei}>
          {sorted.map((obj, index) => {
            return obj.statusName ? (
              <CaseTimelineItem {...obj} index={index} />
            ) : (
              <TimelineItem {...obj} index={index} />
            );
          })}
        </div>
      )}
    </div>
  );
}
