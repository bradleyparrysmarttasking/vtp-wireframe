import {
  BackLink,
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
  Box,
  Grid,
  Group,
  Loader,
  Paper,
  Popover,
  SimpleGrid,
  Stack,
  Text,
  Button as MantineButton,
} from "@mantine/core";
import { questionData } from "./questionData";
import {
  good,
  exemplar,
  fair,
  poor,
  LLMOutputDataEntry,
} from "./llmOutputData";
import { useEffect, useMemo, useState } from "react";
import { ScoreBadge } from "./ScoreBadge";
import { DocumentViewer } from "./DocumentViewer";
import { IconArrowLeft, IconCopy, IconInfoCircle } from "@tabler/icons-react";
import { useQuestions } from "./useQuestions";
import { ActionsSection } from "./ActionsSection";
import { useNavigate, useParams } from "react-router-dom";
import { cases } from "./CaseSelection";

function snakeToProperCase(snake: string): string {
  return snake
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export function Home() {
  const navigate = useNavigate();
  const { case: caseId } = useParams();
  const [fakeLoading, setFakeLoading] = useState(true);
  const {
    metNotMet,
    goodPractice,
    improvement,
    setMetNotMet,
    setGoodPractice,
    setImprovement,
    resetQuestions,
    actions,
    setActions,
  } = useQuestions();
  const [currentQuestion, setCurrentQuestion] = useState(10);
  const currentQuestionData = questionData[currentQuestion] ?? {
    question: "Question not found",
    guidance: <p>Guidance not found</p>,
    score: 0,
  };

  const currentCase = cases.find((c) => c.category === caseId);

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false);
    }, 2500);
  }, []);

  const questionScores: LLMOutputDataEntry[] = useMemo(() => {
    if (!caseId) return [];
    if (caseId === "exemplar") return exemplar;
    if (caseId === "good") return good;
    if (caseId === "fair") return fair;
    if (caseId === "poor") return poor;
    return good;
  }, [caseId]);

  const totalAverageScore =
    questionScores.reduce(
      (acc: number, question: LLMOutputDataEntry) =>
        acc +
        Object.values(question.ratings).reduce(
          (sum: number, rating: { score: number; rationale: string }) =>
            sum + rating.score,
          0
        ) /
          Object.values(question.ratings).length,
      0
    ) / questionScores.length;

  const currentQuestionScoreObject = questionScores[currentQuestion];

  const currentQuestionScore: any =
    Object.values(currentQuestionScoreObject.ratings).reduce(
      (sum: number, rating: { score: number; rationale: string }) =>
        sum + rating.score,
      0
    ) / Object.values(currentQuestionScoreObject.ratings).length;

  const documents = useMemo(() => {
    if (!caseId || !currentQuestionData.documents) return [];
    return currentQuestionData.documents(caseId);
  }, [caseId, currentQuestionData]);

  return (
    <Stack>
      <Box>
        <MantineButton
          leftIcon={<IconArrowLeft />}
          onClick={() => navigate("/create-iqa")}
          variant="subtle"
        >
          Back
        </MantineButton>
      </Box>
      <Group position="apart">
        <Stack spacing={0}>
          <Heading as="h1" size={24}>
            {currentCase?.urn} - Defendants:{" "}
            {currentCase?.defendants.join(", ")}
          </Heading>
          <Text fw={500} c="dimmed">
            Prosecutor: {currentCase?.prosecutor}
          </Text>
        </Stack>
        <Group>
          <Text fw={500}>Average AI Score:</Text>
          {fakeLoading ? (
            <Loader size="md" color="blue" />
          ) : (
            <ScoreBadge
              score={totalAverageScore}
              decimalPlaces={true}
              size="xl"
            />
          )}
        </Group>
      </Group>
      <QuestionStepper fakeLoading={fakeLoading} active={currentQuestion} />
      <Group position="apart" noWrap>
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
        color={"blue"}
        title={
          <Group position="apart" style={{ width: "100%" }}>
            <Text>AI Assistant</Text>
            {fakeLoading ? (
              <Loader size="md" color="blue" />
            ) : (
              <Group>
                <ScoreBadge
                  score={currentQuestionScore}
                  text={`Overall Question Score: `}
                  size="lg"
                  variant="filled"
                />
                <Text
                  size="lg"
                  c={
                    currentQuestionScore >= 3.5
                      ? "green"
                      : currentQuestionScore >= 2.25
                      ? "yellow"
                      : "red"
                  }
                >
                  {currentQuestionScore >= 3.5
                    ? "Met"
                    : currentQuestionScore >= 2.25
                    ? "Partially Met"
                    : "Not Met"}
                </Text>
              </Group>
            )}
          </Group>
        }
        styles={{
          label: {
            width: "100%",
          },
        }}
      >
        {!fakeLoading && (
          <SimpleGrid cols={2}>
            <Stack spacing={"xs"}>
              {Object.values(currentQuestionScoreObject.ratings).map(
                (
                  rating: { score: number; rationale: string },
                  index: number
                ) => (
                  <Stack spacing={0}>
                    <Group>
                      <Text fw={500} size={"xs"} td="underline">
                        {snakeToProperCase(
                          Object.keys(currentQuestionScoreObject.ratings)[index]
                        )}
                      </Text>
                      <ScoreBadge
                        score={rating.score}
                        size={"xs"}
                        variant="filled"
                      />
                    </Group>
                    <Text size={"xs"}>{rating.rationale}</Text>
                  </Stack>
                )
              )}
            </Stack>
            <Stack>
              <Stack spacing={0}>
                <Group noWrap position="apart">
                  <Text td="underline" fw={500}>
                    Areas of good practice
                  </Text>
                  <Group spacing={"xs"}>
                    <Text size="xs" c="dimmed">
                      Copy to answer
                    </Text>
                    <ActionIcon
                      radius="xl"
                      color="blue"
                      onClick={() => {
                        setGoodPractice(
                          "- " +
                            currentQuestionScoreObject.effective_practice.join(
                              "\n\n- "
                            )
                        );
                      }}
                    >
                      <IconCopy />
                    </ActionIcon>
                  </Group>
                </Group>
                <ul>
                  {currentQuestionScoreObject.effective_practice.map(
                    (strength: string) => (
                      <li key={strength}>{strength}</li>
                    )
                  )}
                </ul>
              </Stack>
              <Stack spacing={0}>
                <Group noWrap position="apart">
                  <Text td="underline" fw={500}>
                    Areas for improvement
                  </Text>
                  <Group spacing={"xs"}>
                    <Text size="xs" c="dimmed">
                      Copy to answer
                    </Text>
                    <ActionIcon
                      radius="xl"
                      color="blue"
                      onClick={() => {
                        setImprovement(
                          "- " +
                            currentQuestionScoreObject.improvement_opportunities.join(
                              "\n\n- "
                            )
                        );
                      }}
                    >
                      <IconCopy />
                    </ActionIcon>
                  </Group>
                </Group>
                <ul>
                  {currentQuestionScoreObject.improvement_opportunities.map(
                    (opportunity: string) => (
                      <li key={opportunity}>{opportunity}</li>
                    )
                  )}
                </ul>
              </Stack>
            </Stack>
          </SimpleGrid>
        )}
      </Alert>
      <GridRow>
        <GridCol setWidth="two-thirds">
          <Heading as="h3" size={16}>
            Relevant Case Material
          </Heading>
          <DocumentViewer documents={documents} />
        </GridCol>
        <GridCol setWidth="one-third">
          <Stack>
            <MultiChoice label="Question Response">
              <Radio
                inline
                name="group1"
                value="Met"
                checked={metNotMet === "Met"}
                onChange={() => setMetNotMet("Met")}
              >
                Met
              </Radio>
              <Radio
                inline
                name="group1"
                value="Not Met"
                checked={metNotMet === "Partially Met"}
                onChange={() => setMetNotMet("Partially Met")}
              >
                Partially Met
              </Radio>
              <Radio
                inline
                name="group1"
                value="Not Met"
                checked={metNotMet === "Not Met"}
                onChange={() => setMetNotMet("Not Met")}
              >
                Not Met
              </Radio>
            </MultiChoice>
            <TextArea
              input={{
                name: "group1",
                value: goodPractice,
                onChange: (event) => setGoodPractice(event.target.value),
              }}
            >
              Areas of good practice
            </TextArea>
            <TextArea
              input={{
                name: "group1",
                value: improvement,
                onChange: (event) => setImprovement(event.target.value),
              }}
            >
              Areas for improvement
            </TextArea>
            <ActionsSection actions={actions} setActions={setActions} />
            <Group position="apart">
              <Button
                buttonColour="#f3f2f1"
                //   buttonHoverColour="#ffdd00"
                //   buttonShadowColour="#f47738"
                buttonTextColour="#0b0c0c"
                onClick={() => {
                  resetQuestions();
                  setCurrentQuestion(
                    currentQuestion > 0 ? currentQuestion - 1 : 0
                  );
                }}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={() => {
                  resetQuestions();
                  setCurrentQuestion(
                    currentQuestion < questionData.length - 1
                      ? currentQuestion + 1
                      : currentQuestion
                  );
                }}
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
