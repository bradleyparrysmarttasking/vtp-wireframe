import {
  ActionIcon,
  Divider,
  Group,
  Popover,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import {
  IconFile,
  IconInfoCircle,
  IconLockOpen,
  IconProgress,
  IconUser,
} from "@tabler/icons-react";

export function CriteriaSection() {
  return (
    <Stack align="center" mb={30} spacing={"xl"}>
      <Group>
        <Text fw={700} td="underline" c="blue">
          Criteria For Algorithmic Case Selection
        </Text>
        <Popover position="bottom-end" withArrow width={800}>
          <Popover.Target>
            <ActionIcon radius="xl" color="blue">
              <IconInfoCircle />
            </ActionIcon>
          </Popover.Target>
          <Popover.Dropdown>
            <Text fw={500} td="underline" c="blue">
              Problem:
            </Text>
            <Text>
              The HMCPSI report raised the following issues with case selection:
            </Text>
            <ul>
              <li>
                Cases selected for IQA are often not live or sufficiently
                progressed, contrary to guidance.
              </li>
              <li>
                Some assessments include work not done by the prosecutor being
                evaluated, undermining the validity of the IQA.
              </li>
            </ul>
            <Text>
              The user Engagements raised the following additional issues with
              case selection:
            </Text>
            <ul>
              <li>
                Case selection for IQA reviews is often not random, leading to a
                preference for simpler cases. It was suggested that randomised
                selection could improve quality by ensuring a broader range of
                cases are reviewed, though this may require policy changes.
              </li>
              <li>
                Finding suitable cases that match themes is time-consuming.
              </li>
            </ul>
            <Text fw={500} td="underline" c="blue">
              Solution & Benefits:
            </Text>
            <Text>A case selection tool would:</Text>
            <ul>
              <li>
                save time as currently Legal Managers are going into cases to
                check if they meet the IQA requirements, only to realise they
                cannot perform an IQA on them.
              </li>
              <li>
                have set criteria to identify cases that meet the criteria e.g.
                sufficiently progress, completed by the prosecutor, certain
                themes etc.
              </li>
              <li>
                generate a randomised list of a set number for the Legal Manager
                to pick from. This will prevent cherry picking.
              </li>
            </ul>
          </Popover.Dropdown>
        </Popover>
      </Group>
      <Group position="apart" w="100%">
        <Stack align="center">
          <Text fw={500}>Case is Open</Text>
          <ThemeIcon color="blue" radius="xl" variant="light" size={60}>
            <IconLockOpen />
          </ThemeIcon>
        </Stack>
        <Divider orientation="vertical" />
        <Stack align="center">
          <Text fw={500}>Case is Sufficiently Progressed</Text>
          <ThemeIcon color="blue" radius="xl" variant="light" size={60}>
            <IconProgress />
          </ThemeIcon>
        </Stack>
        <Divider orientation="vertical" />
        <Stack align="center">
          <Text fw={500}>Case Prosecutor</Text>
          <ThemeIcon color="blue" radius="xl" variant="light" size={60}>
            <IconUser />
          </ThemeIcon>
        </Stack>
        <Divider orientation="vertical" />
        <Stack align="center">
          <Text fw={500}>Case Type</Text>
          <ThemeIcon color="blue" radius="xl" variant="light" size={60}>
            <IconFile />
          </ThemeIcon>
        </Stack>
      </Group>
    </Stack>
  );
}
