import { Badge, Group, Loader, rem } from "@mantine/core";
import { Stepper } from "@mantine/core";
import { questionData } from "./questionData";
import { goodPracticeData } from "./llmOutputData";

export function QuestionStepper({
  fakeLoading,
  active,
}: {
  fakeLoading: boolean;
  active: number;
}) {
  return (
    <>
      <Group position="apart" px={0}>
        {questionData.map((question, index) => {
          const questionScoreObject = goodPracticeData[index];
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
                questionScore >= 4
                  ? "green"
                  : questionScore >= 3
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
          const questionScoreObject = goodPracticeData[index];
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
                    questionScore >= 4
                      ? "green"
                      : questionScore >= 3
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
