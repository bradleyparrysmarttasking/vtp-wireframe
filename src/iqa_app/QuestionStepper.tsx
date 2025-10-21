import { Badge, Group, rem } from "@mantine/core";
import { Stepper } from "@mantine/core";
import { questionData } from "./questionData";

export function QuestionStepper({ active }: { active: number }) {
  return (
    <>
      <Group position="apart" px={3}>
        {questionData.map((question) => (
          <Badge
            color={
              question.score >= 4
                ? "green"
                : question.score >= 3
                ? "yellow"
                : "red"
            }
            size="lg"
          >
            {question.score}
          </Badge>
        ))}
      </Group>
      <Stepper
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
        {questionData.map((question) => (
          <Stepper.Step
            label={
              <Badge
                color={
                  question.score >= 4
                    ? "green"
                    : question.score >= 3
                    ? "yellow"
                    : "red"
                }
              >
                {question.score}
              </Badge>
            }
            //   description={question.question}
          />
        ))}
      </Stepper>
    </>
  );
}
