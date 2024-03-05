export type Case = {
  id: string;
  description: string;
  type: string;
};

export type Victim = {
  id: string;
  fullName: string;
  outstandingTasks: number;
  classification: string;
  preferredLanguage: string;
  caseId: string;
};

export type Communication = {
  title: string;
  updater: string;
  detail: string;
  time: string;
  documents: string[];
};
