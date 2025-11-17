import { useState } from "react";

type Action = {
  id: string;
  description: string;
  completed: boolean;
  dueDate: string;
};

export function useQuestions() {
  const [metNotMet, setMetNotMet] = useState<"Met" | "Not Met" | null>(null);
  const [goodPractice, setGoodPractice] = useState<string>("");
  const [improvement, setImprovement] = useState<string>("");
  const [actions, setActions] = useState<Action[]>([]);

  const resetQuestions = () => {
    setMetNotMet(null);
    setGoodPractice("");
    setImprovement("");
    setActions([]);
  };

  return {
    metNotMet,
    goodPractice,
    improvement,
    setMetNotMet,
    setGoodPractice,
    setImprovement,
    resetQuestions,
    actions,
    setActions,
  };
}
