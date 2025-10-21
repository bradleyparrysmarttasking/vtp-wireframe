import { Badge, BadgeProps, Text } from "@mantine/core";

export function ScoreBadge({
  score,
  text = "",
  decimalPlaces = false,
  ...props
}: { score: number; text?: string; decimalPlaces?: boolean } & BadgeProps) {
  const color = score >= 4 ? "green" : score >= 3 ? "yellow" : "red";
  return (
    <Badge color={color} {...props}>
      {text}
      {decimalPlaces ? score.toFixed(1) : score}
    </Badge>
  );
}
