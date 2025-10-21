import {
  Button,
  Details,
  GridCol,
  GridRow,
  Heading,
  InsetText,
  MultiChoice,
  Radio,
  TextArea,
} from "govuk-react";
import "./iqa_css.css";
import { QuestionStepper } from "./QuestionStepper";
import {
  ActionIcon,
  Alert,
  Badge,
  Group,
  Paper,
  Popover,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { questionData } from "./questionData";
import { useState } from "react";
import { ScoreBadge } from "./ScoreBadge";
import { DocumentViewer } from "./DocumentViewer";
import { IconInfoCircle } from "@tabler/icons-react";

export function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(10);
  const currentQuestionData = questionData[currentQuestion] ?? {
    question: "Question not found",
    guidance: <p>Guidance not found</p>,
    score: 0,
  };

  const averageScore =
    questionData.reduce((acc, question) => acc + question.score, 0) /
    questionData.length;

  const color =
    currentQuestionData.score >= 4
      ? "green"
      : currentQuestionData.score >= 3
      ? "yellow"
      : "red";

  return (
    <Stack>
      <Group position="apart">
        <Heading as="h1" size={24}>
          16GH1510125 - Defendant John Doe
        </Heading>
        <Group>
          <Text fw={500}>Average AI Score:</Text>
          <ScoreBadge score={averageScore} decimalPlaces={true} size="xl" />
        </Group>
      </Group>
      <QuestionStepper active={currentQuestion} />
      <Group position="apart">
        <Heading as="h2" size={24}>
          {currentQuestionData.question}
        </Heading>
        <Popover position="bottom-end" withArrow>
          <Popover.Target>
            <ActionIcon radius="xl" color="blue">
              <IconInfoCircle />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown>{currentQuestionData.guidance}</Popover.Dropdown>
        </Popover>
      </Group>
      {/* <Details summary="Guidance">{currentQuestionData.guidance}</Details> */}
      <Alert
        color={color}
        title={
          <Group position="apart" style={{ width: "100%" }}>
            <Text>AI Assistant</Text>
            <ScoreBadge
              score={currentQuestionData.score}
              text={`Question Score: `}
              size="lg"
              variant="filled"
            />
          </Group>
        }
        styles={{
          label: {
            width: "100%",
          },
        }}
      >
        <SimpleGrid cols={2}>
          <Stack spacing={0}>
            <Text td="underline" fw={500}>
              Areas of good practice
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </Text>
          </Stack>
          <Stack spacing={0}>
            <Text td="underline" fw={500}>
              Areas for improvement
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </Text>
          </Stack>
        </SimpleGrid>
      </Alert>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <Heading as="h3" size={16}>
            Relevant Case Material
          </Heading>
          <DocumentViewer />
        </GridCol>
        <GridCol setWidth="one-third">
          <Stack>
            <MultiChoice label="Question Response">
              <Radio inline name="group1">
                Met
              </Radio>
              <Radio inline name="group1">
                Not Met
              </Radio>
            </MultiChoice>
            <TextArea
              input={{
                name: "group1",
              }}
            >
              Areas of good practice
            </TextArea>
            <TextArea
              input={{
                name: "group1",
              }}
            >
              Areas for improvement
            </TextArea>
            <Group position="apart">
              <Button
                buttonColour="#f3f2f1"
                //   buttonHoverColour="#ffdd00"
                //   buttonShadowColour="#f47738"
                buttonTextColour="#0b0c0c"
                onClick={() =>
                  setCurrentQuestion(
                    currentQuestion > 0 ? currentQuestion - 1 : 0
                  )
                }
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() =>
                  setCurrentQuestion(
                    currentQuestion < questionData.length - 1
                      ? currentQuestion + 1
                      : currentQuestion
                  )
                }
                disabled={currentQuestion === questionData.length - 1}
              >
                Next
              </Button>
            </Group>
          </Stack>
        </GridCol>
      </GridRow>
    </Stack>
  );
}
