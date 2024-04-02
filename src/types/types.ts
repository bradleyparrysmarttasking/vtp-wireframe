export type Case = {
  id: string;
  description: string;
  type: string;
  timeline: { statusName: string; date: string }[];
  currentStage: string;
  urn: string;
};

export type Task = {
  id: string;
  victimId: string;
  description: string;
  startDate: string;
  endDate: string;
  complete: boolean;
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
  outstandingTasks: boolean;
  classification: string;
  caseIds: string[];
  caseUrns: string[];
  isVictim: boolean;
  vrrSubmitted: boolean;
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
  victimId: string;
};

export type Defendant = {
  id: string;
  caseId: string;
  victimIds: string[];
  fullName: string;
};

export type Contact = {
  id: string;
  victimId: string;
  fullName: string;
  phone: string;
  email: string;
  relation: string;
};
