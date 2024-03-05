import localizedFormat from "dayjs/plugin/localizedFormat";
import * as dayjs from "dayjs";
import { Communication } from "../../../types/types";
import "./Timeline.css";

dayjs.extend(localizedFormat);

const dummyCommunications: Communication[] = [
  {
    title: "Initial Interview",
    updater: "John Doe",
    detail:
      "Conducted initial interview with the victim to gather information about the incident.",
    time: "2024-03-05T10:00:00",
    documents: ["interview_notes.pdf"],
  },
  {
    title: "Follow-up Call",
    updater: "Jane Smith",
    detail:
      "Followed up with the victim to provide updates on the case progress.",
    time: "2024-03-06T14:30:00",
    documents: [],
  },
  {
    title: "Case Review Meeting",
    updater: "Michael Johnson",
    detail:
      "Participated in a meeting to review the case and discuss further actions.",
    time: "2024-03-08T09:00:00",
    documents: ["meeting_agenda.pdf", "case_summary.docx"],
  },
];

function TimelineItem({
  title,
  detail,
  updater,
  documents,
  time,
  index,
}: Communication & { index: number }) {
  //@ts-ignore
  const timeString = dayjs(time).format("LLLL");
  return (
    <div className="moj-timeline__item" key={index}>
      <div className="moj-timeline__header">
        <h2 className="moj-timeline__title">{title}</h2>

        <p className="moj-timeline__byline">updated by {updater}</p>
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

export default function Timeline({
  victimCommunications,
}: {
  victimCommunications: Communication[];
}) {
  console.log({ dummyCommunications });
  return (
    <>
      {dummyCommunications.length > 0 && (
        <div className="moj-timeline">
          {dummyCommunications.map((communication, index) => {
            return <TimelineItem {...communication} index={index} />;
          })}
        </div>
      )}
    </>
  );
}
