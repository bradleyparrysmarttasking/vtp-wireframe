import { Stack, Text } from "@mantine/core";

export const questionData = [
  {
    question: "Question 1",
    guidance: <p>Guidance for question 1</p>,
    score: 3,
  },
  {
    question: "Question 2",
    guidance: <p>Guidance for question 2</p>,
    score: 5,
  },
  {
    question: "Question 3",
    guidance: <p>Guidance for question 3</p>,
    score: 2,
  },
  {
    question: "Question 4",
    guidance: <p>Guidance for question 4</p>,
    score: 4,
  },
  {
    question: "Question 5",
    guidance: <p>Guidance for question 5</p>,
    score: 1,
  },
  {
    question: "Question 6",
    guidance: <p>Guidance for question 6</p>,
    score: 5,
  },
  {
    question: "Question 7",
    guidance: <p>Guidance for question 7</p>,
    score: 3,
  },
  {
    question: "Question 8",
    guidance: <p>Guidance for question 8</p>,
    score: 2,
  },
  {
    question: "Question 9",
    guidance: <p>Guidance for question 9</p>,
    score: 4,
  },
  {
    question: "Question 10",
    guidance: <p>Guidance for question 10</p>,
    score: 1,
  },
  {
    question:
      "11. The prosecutor has drafted a good quality Disclosure Record Sheet (DRS) and Disclosure Management Document (DMD) (where appropriate) so that the rationale for disclosure decisions and our disclosure strategy is clear and understandable.",
    guidance: (
      <Stack maw={500}>
        <Text td="underline" fw={500} c="blue">
          Issues to address
        </Text>
        <ul>
          <li>DRS not used, where appropriate</li>
          <li>DRS incomplete - key entries missing</li>
          <li>DRS inaccurate</li>
          <li>DMD not used, where appropriate</li>
          <li>DMD not reviews/updated, where appropriate</li>
          <li>DMD not shared</li>
          <li>Where DRS/DMD not required, inadequate file endorsements</li>
        </ul>
        <Text td="underline" fw={500} c="blue">
          Guidance
        </Text>
        <Text>
          This question is concerned with the recording of disclosure decisions.
        </Text>
        <Text>
          Managers should refer to the "Disclosure Record Sheets: Key Issues"
          document for DRS. In relation to DMD, they should have regard to
          templated provided on the intranet, as well as available guidance.
        </Text>
      </Stack>
    ),
    score: 2,
    documents: [
      // {
      //   key: "documents/Disclosure_Management_Document.pdf",
      //   label: "Disclosure Management Document",
      // },
      // {
      //   key: "documents/Disclosure_Record_Sheet.pdf",
      //   label: "Disclosure Record Sheet",
      // },
      {
        key: "documents/DMD_Good.pdf",
        label: "DMD",
      },
      {
        key: "documents/DRS_Good.pdf",
        label: "DRS",
      },
    ],
  },
  {
    question: "Question 12",
    guidance: <p>Guidance for question 12</p>,
    score: 3,
  },
];
