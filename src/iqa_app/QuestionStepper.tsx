import { Badge, Group, Loader, rem } from "@mantine/core";
import { Stepper } from "@mantine/core";
import { questionData } from "./questionData";
import {
  exemplar,
  fair,
  good,
  LLMOutputDataEntry,
  poor,
} from "./llmOutputData";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

export function QuestionStepper({
  fakeLoading,
  active,
}: {
  fakeLoading: boolean;
  active: number;
}) {
  const { case: caseId } = useParams();

  const questionScores: LLMOutputDataEntry[] = useMemo(() => {
    if (!caseId) return [];
    if (caseId === "exemplar") return exemplar;
    if (caseId === "good") return good;
    if (caseId === "fair") return fair;
    if (caseId === "poor") return poor;
    return good;
  }, [caseId]);

  return (
    <>
      <Group position="apart" px={0}>
        {questionData.map((question, index) => {
          const questionScoreObject = questionScores[index];
          const questionScore =
            Object.values(questionScoreObject.ratings).reduce(
              (sum: number, rating: { score: number; rationale: string }) =>
                sum + rating.score,
              0
            ) / Object.values(questionScoreObject.ratings).length;
          if (fakeLoading) {
            return <Loader size="sm" color="blue" mx="md" key={index} />;
          }
          return (
            <Badge
              color={
                questionScore >= 3.5
                  ? "green"
                  : questionScore >= 2.25
                  ? "yellow"
                  : "red"
              }
              size="lg"
            >
              {questionScore.toFixed(1)}
            </Badge>
          );
        })}
      </Group>
      <Stepper
        px={5}
        styles={{
          stepBody: {
            display: "none",
          },

          step: {
            padding: 0,
          },

          stepIcon: {
            borderWidth: rem(4),
          },

          separator: {
            marginLeft: rem(-2),
            marginRight: rem(-2),
            // height: rem(10),
          },
        }}
        active={active}
      >
        {questionData.map((question, index) => {
          const questionScoreObject = questionScores[index];
          const questionScore =
            Object.values(questionScoreObject.ratings).reduce(
              (sum: number, rating: { score: number; rationale: string }) =>
                sum + rating.score,
              0
            ) / Object.values(questionScoreObject.ratings).length;
          return (
            <Stepper.Step
              label={
                <Badge
                  color={
                    questionScore >= 3.5
                      ? "green"
                      : questionScore >= 2.25
                      ? "yellow"
                      : "red"
                  }
                >
                  {questionScore.toFixed(1)}
                </Badge>
              }
              //   description={question.question}
            />
          );
        })}
      </Stepper>
    </>
  );
}
