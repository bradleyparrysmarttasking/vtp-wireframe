export type Case = {
  id: string;
  description: string;
  type: string;
  timeline: { statusName: string; date: string }[];
  currentStage: string;
};

export type Victim = {
  id: string;
  victimId: string;
  fullName: string;
  namePreference: string;
  preferredLanguage: string;
  dob: string;
  contactPreference: string;
  mobile: string;
  landline: string;
  email: string;
  address: string;
  policeInitialNeedsAssessment: string;
  wcuDetailedNeedsAssessment: string;
  dashAssessment: string;
  isvaName: string;
  isvaContactDetails: string;
  intimidated: boolean;
  specialNeeds: boolean;
  vulnerable: boolean;
  child: boolean;
  unacceptableBehaviour: boolean;
  highlyVulnerable: boolean;
  missingSpecialMeasures: boolean;
  crisisHandlingPolicyActivated: boolean;
  details: string;
  hasMadeVPS: string;
  vpsDetails: string;
  specialMeasuresGranted: string;
  outstandingTasks: number;
  classification: string;
  caseId: string;
};

export type Communication = {
  id: string;
  type: string;
  title: string;
  updater: string;
  detail: string;
  date: string;
  documents?: string[];
  caseId: string;
};
