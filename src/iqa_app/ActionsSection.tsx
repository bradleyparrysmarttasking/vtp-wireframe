import { ActionIcon, Group, Stack, Text } from "@mantine/core";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import { InputField } from "govuk-react";
import { useState } from "react";

type Action = {
  id: string;
  description: string;
  completed: boolean;
  dueDate: string;
};

export function ActionsSection({
  actions,
  setActions,
}: {
  actions: Action[];
  setActions: (actions: Action[]) => void;
}) {
  const [newAction, setNewAction] = useState<Action>({
    id: crypto.randomUUID(),
    description: "",
    completed: false,
    dueDate: "",
  });
  const addAction = (newAction: Action) => {
    setActions([...actions, newAction]);
    setNewAction({
      id: crypto.randomUUID(),
      description: "",
      completed: false,
      dueDate: "",
    });
  };
  const removeAction = (id: string) => {
    setActions(actions.filter((action) => action.id !== id));
  };
  return (
    <Stack>
      <Text fw={500} td="underline" c="blue">
        Prosecutor Actions
      </Text>
      {actions.map((action) => (
        <Group key={action.id} noWrap position="apart">
          <Stack spacing={0}>
            <Text td={action.completed ? "line-through" : "none"} fw={500}>
              {action.description}
            </Text>
            <Text c="dimmed">{action.dueDate}</Text>
          </Stack>
          <ActionIcon onClick={() => removeAction(action.id)} color="red">
            <IconTrash />
          </ActionIcon>
        </Group>
      ))}
      <Group>
        <InputField
          input={{
            name: "group0",
            value: newAction.description,
            onChange: (event) =>
              setNewAction({ ...newAction, description: event.target.value }),
          }}
        >
          Action description
        </InputField>
        <InputField
          input={{
            type: "date",
            value: newAction.dueDate,
            onChange: (event) =>
              setNewAction({ ...newAction, dueDate: event.target.value }),
          }}
        >
          Due date
        </InputField>
        <ActionIcon onClick={() => addAction(newAction)} color="green">
          <IconPlus />
        </ActionIcon>
      </Group>
    </Stack>
  );
}
