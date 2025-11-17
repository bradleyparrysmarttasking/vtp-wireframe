export type LLMOutputDataEntry = {
  question: string;
  summary: string;
  effective_practice: string[];
  improvement_opportunities: string[];
  ratings: {
    decision_making: {
      score: number;
      rationale: string;
    };
    case_analysis: {
      score: number;
      rationale: string;
    };
    risk_identification: {
      score: number;
      rationale: string;
    };
    clarity_of_explanation: {
      score: number;
      rationale: string;
    };
    procedural_accuracy: {
      score: number;
      rationale: string;
    };
  };
};

export const goodPracticeData: LLMOutputDataEntry[] = [
  {
    question: "Question 1",
    summary:
      "This case involves a straightforward theft allegation where the defendant was caught on CCTV. The investigation was conducted promptly with clear evidence collection. The prosecutor made appropriate charging decisions based on the available evidence and witness statements.",
    effective_practice: [
      "Prompt collection of CCTV evidence which clearly identified the defendant.",
      "Thorough witness statements that corroborated the complainant's account.",
      "Clear documentation of the charging decision process.",
    ],
    improvement_opportunities: [
      "Consideration of obtaining additional witness statements from bystanders.",
      "More detailed analysis of the defendant's previous convictions if relevant.",
      "Enhanced documentation of the rationale for specific charge selection.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "Excellent decision-making demonstrated through timely and appropriate charging decisions based on strong evidence.",
      },
      case_analysis: {
        score: 4,
        rationale:
          "Good analysis of the case with effective use of CCTV and witness evidence, though some additional lines of enquiry could be explored.",
      },
      risk_identification: {
        score: 3,
        rationale:
          "Basic risk assessment was conducted, but could benefit from more comprehensive evaluation of potential risks.",
      },
      clarity_of_explanation: {
        score: 4,
        rationale:
          "Clear and well-structured documentation that effectively communicates the case details and decisions made.",
      },
      procedural_accuracy: {
        score: 5,
        rationale:
          "All procedures were followed accurately with complete and correct form completion.",
      },
    },
  },
  {
    question: "Question 2",
    summary:
      "A complex fraud case involving multiple transactions over several months. The investigation required extensive financial analysis and coordination with multiple agencies. The prosecutor demonstrated good understanding of the complexity but some areas needed more detailed exploration.",
    effective_practice: [
      "Comprehensive financial analysis and documentation of transactions.",
      "Effective coordination with financial investigation units.",
      "Clear identification of the fraud pattern and methodology.",
    ],
    improvement_opportunities: [
      "Earlier engagement with financial experts could have expedited the investigation.",
      "More detailed analysis of the defendant's financial background and assets.",
      "Consideration of additional charges related to money laundering.",
    ],
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "Reasonable decisions were made, but some opportunities for more comprehensive charging were missed.",
      },
      case_analysis: {
        score: 4,
        rationale:
          "Good analysis of the financial aspects, though deeper investigation into related offenses could strengthen the case.",
      },
      risk_identification: {
        score: 4,
        rationale:
          "Effective identification of financial risks and potential for further offenses, with appropriate safeguards considered.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale:
          "Documentation was adequate but could be more detailed in explaining complex financial transactions and decisions.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Procedures were generally followed correctly, with minor areas where additional detail would improve accuracy.",
      },
    },
  },
  {
    question: "Question 3",
    summary:
      "A case involving assault with intent to cause grievous bodily harm. The victim sustained serious injuries requiring hospital treatment. The investigation was thorough with medical evidence and witness accounts, though some aspects of the defendant's background could have been explored further.",
    effective_practice: [
      "Prompt collection of medical evidence and hospital records.",
      "Thorough witness interviews that provided multiple perspectives.",
      "Appropriate use of forensic evidence where available.",
    ],
    improvement_opportunities: [
      "More detailed investigation into the defendant's history of violence.",
      "Consideration of victim impact statements earlier in the process.",
      "Enhanced analysis of the relationship between victim and defendant if relevant.",
    ],
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "Sound decision-making with appropriate charges selected based on the severity of injuries and evidence available.",
      },
      case_analysis: {
        score: 3,
        rationale:
          "Adequate case analysis but could benefit from more comprehensive exploration of defendant's background and motivations.",
      },
      risk_identification: {
        score: 4,
        rationale:
          "Good identification of risks to the victim, with appropriate protective measures considered and documented.",
      },
      clarity_of_explanation: {
        score: 4,
        rationale:
          "Clear documentation of the case with logical flow and good explanation of charging decisions.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Accurate completion of forms and adherence to CPS procedures throughout the case.",
      },
    },
  },
  {
    question: "Question 4",
    summary:
      "A drug supply case involving surveillance and undercover operations. The investigation was well-coordinated with law enforcement partners. The prosecutor made appropriate decisions regarding disclosure and charging, though some aspects of the evidence chain could be strengthened.",
    effective_practice: [
      "Effective coordination with law enforcement agencies and surveillance teams.",
      "Thorough documentation of the evidence chain and operational procedures.",
      "Appropriate handling of sensitive operational material and disclosure considerations.",
    ],
    improvement_opportunities: [
      "More detailed analysis of the scale and scope of the drug supply operation.",
      "Consideration of additional charges related to conspiracy or organized crime.",
      "Enhanced documentation of the rationale for specific disclosure decisions.",
    ],
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "Good decision-making with appropriate charges and careful consideration of disclosure requirements.",
      },
      case_analysis: {
        score: 4,
        rationale:
          "Effective analysis of the operational evidence and drug supply network, with good understanding of the case complexity.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Excellent risk identification, particularly regarding operational security and potential risks to witnesses and officers.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale:
          "Documentation was functional but could be clearer in explaining complex operational procedures and decisions.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Procedures were followed correctly with appropriate attention to sensitive material handling requirements.",
      },
    },
  },
  {
    question: "Question 5",
    summary:
      "A case involving sexual offenses with a vulnerable victim. The investigation required sensitive handling and specialist support services. The prosecutor demonstrated good awareness of victim needs but some aspects of the investigation timeline could be improved.",
    effective_practice: [
      "Sensitive handling of the victim with appropriate support services engaged.",
      "Thorough collection of forensic evidence and medical examinations.",
      "Clear documentation of victim vulnerability and support measures.",
    ],
    improvement_opportunities: [
      "Faster progression of the investigation to reduce victim wait times.",
      "More comprehensive analysis of the defendant's previous behavior and patterns.",
      "Enhanced consideration of additional charges or alternative offenses.",
    ],
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "Decisions were appropriate but could have been made more promptly to better serve the victim's interests.",
      },
      case_analysis: {
        score: 4,
        rationale:
          "Good analysis of the case with effective understanding of victim vulnerability and evidence requirements.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Excellent identification and management of risks to the vulnerable victim, with appropriate safeguarding measures in place.",
      },
      clarity_of_explanation: {
        score: 4,
        rationale:
          "Clear and sensitive documentation that appropriately addresses the complex nature of the case.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Accurate completion of forms with appropriate attention to special measures and victim support requirements.",
      },
    },
  },
  {
    question: "Question 6",
    summary:
      "A burglary case with multiple linked offenses. The investigation identified a pattern of similar crimes and connected them to the defendant. The prosecutor made good use of the evidence but could have explored additional lines of enquiry.",
    effective_practice: [
      "Effective linking of multiple offenses through pattern analysis.",
      "Thorough collection of forensic evidence from multiple crime scenes.",
      "Good use of CCTV and other technical evidence across the series of offenses.",
    ],
    improvement_opportunities: [
      "Consideration of additional linked offenses that may not have been initially identified.",
      "More detailed analysis of the defendant's modus operandi and potential for further offenses.",
      "Enhanced coordination with other police forces if offenses occurred across jurisdictions.",
    ],
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "Good decision-making in linking offenses and selecting appropriate charges for the series of burglaries.",
      },
      case_analysis: {
        score: 3,
        rationale:
          "Adequate analysis but could benefit from more comprehensive exploration of all potential linked offenses.",
      },
      risk_identification: {
        score: 3,
        rationale:
          "Basic risk assessment conducted, though more detailed consideration of ongoing risk to potential victims could be beneficial.",
      },
      clarity_of_explanation: {
        score: 4,
        rationale:
          "Clear documentation of the linked offenses with good explanation of the pattern and evidence connections.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Accurate form completion with appropriate handling of multiple offense files and evidence.",
      },
    },
  },
  {
    question: "Question 7",
    summary:
      "A road traffic case involving dangerous driving causing serious injury. The investigation included collision reconstruction and expert analysis. The prosecutor made appropriate charging decisions with good consideration of the evidence.",
    effective_practice: [
      "Prompt engagement with collision investigation experts and reconstruction specialists.",
      "Thorough collection of witness statements from multiple sources including other road users.",
      "Clear documentation of the collision circumstances and expert findings.",
    ],
    improvement_opportunities: [
      "More detailed analysis of the defendant's driving history and previous convictions.",
      "Consideration of additional charges if alcohol or drugs were involved.",
      "Enhanced documentation of the impact on the victim and their recovery.",
    ],
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "Sound decision-making with appropriate charges selected based on expert evidence and collision analysis.",
      },
      case_analysis: {
        score: 4,
        rationale:
          "Good analysis of the collision circumstances with effective use of expert evidence and witness accounts.",
      },
      risk_identification: {
        score: 4,
        rationale:
          "Effective identification of risks, particularly regarding the defendant's driving behavior and potential for reoffending.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale:
          "Excellent clarity in documentation with clear explanation of technical evidence and expert findings.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Accurate completion of forms with appropriate handling of expert reports and technical evidence.",
      },
    },
  },
  {
    question: "Question 8",
    summary:
      "A case involving public order offenses during a protest. The investigation required careful consideration of rights to protest and evidence of specific offenses. The prosecutor balanced these considerations appropriately.",
    effective_practice: [
      "Careful consideration of the right to peaceful protest while identifying specific offenses.",
      "Thorough collection of video evidence from multiple sources including police body-worn cameras.",
      "Clear documentation of the distinction between lawful protest and unlawful behavior.",
    ],
    improvement_opportunities: [
      "More detailed analysis of the context and circumstances leading to the offenses.",
      "Consideration of whether charges were proportionate to the conduct.",
      "Enhanced documentation of the rationale for specific charge selection.",
    ],
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "Reasonable decisions made, though some charges could be reviewed for proportionality and public interest considerations.",
      },
      case_analysis: {
        score: 3,
        rationale:
          "Adequate analysis but could benefit from more comprehensive consideration of the protest context and public interest factors.",
      },
      risk_identification: {
        score: 2,
        rationale:
          "Limited risk assessment conducted, with minimal consideration of ongoing risks or public safety implications.",
      },
      clarity_of_explanation: {
        score: 4,
        rationale:
          "Clear documentation of the offenses and evidence, though more context about the protest circumstances would be helpful.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Procedures were followed correctly with appropriate form completion and evidence handling.",
      },
    },
  },
  {
    question: "Question 9",
    summary:
      "A case involving cybercrime and online fraud. The investigation required technical expertise and coordination with cybercrime units. The prosecutor demonstrated good understanding of the technical aspects though some areas needed more detailed exploration.",
    effective_practice: [
      "Effective coordination with cybercrime specialists and technical experts.",
      "Thorough collection of digital evidence including device analysis and online activity records.",
      "Clear documentation of the technical aspects of the offense and evidence collection.",
    ],
    improvement_opportunities: [
      "More comprehensive analysis of the defendant's online activity and digital footprint.",
      "Consideration of additional charges related to data protection or computer misuse.",
      "Enhanced documentation of the technical evidence chain and forensic procedures.",
    ],
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "Good decision-making with appropriate charges selected, though some additional offenses could be considered.",
      },
      case_analysis: {
        score: 4,
        rationale:
          "Effective analysis of the technical evidence with good understanding of the cybercrime aspects, though deeper investigation could strengthen the case.",
      },
      risk_identification: {
        score: 4,
        rationale:
          "Good identification of risks, particularly regarding potential for further offenses and impact on multiple victims.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale:
          "Documentation was adequate but could be clearer in explaining complex technical aspects to non-specialist readers.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Accurate completion of forms with appropriate handling of digital evidence and technical reports.",
      },
    },
  },
  {
    question: "Question 10",
    summary:
      "A case involving harassment and stalking with multiple incidents over an extended period. The investigation required careful documentation of the pattern of behavior. The prosecutor made appropriate decisions though some aspects of victim support could be enhanced.",
    effective_practice: [
      "Thorough documentation of the pattern of harassment incidents over time.",
      "Effective collection of evidence including messages, calls, and witness accounts.",
      "Clear identification of the impact on the victim and their daily life.",
    ],
    improvement_opportunities: [
      "Earlier engagement with victim support services and specialist stalking units.",
      "More comprehensive analysis of the defendant's behavior patterns and escalation risks.",
      "Consideration of restraining orders or other protective measures earlier in the process.",
    ],
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "Sound decision-making with appropriate charges that reflect the pattern and seriousness of the harassment.",
      },
      case_analysis: {
        score: 4,
        rationale:
          "Good analysis of the pattern of behavior with effective understanding of the cumulative impact on the victim.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Excellent risk identification with comprehensive assessment of ongoing risks to the victim and appropriate safeguarding measures.",
      },
      clarity_of_explanation: {
        score: 4,
        rationale:
          "Clear documentation of the harassment pattern with good explanation of the impact and evidence connections.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Accurate form completion with appropriate attention to the ongoing nature of the offenses and victim protection.",
      },
    },
  },
  {
    question: "Question 11",
    summary:
      "The case involves allegations of domestic violence, threats, and controlling behavior by the defendant against the complainant, with whom he has 10 children. The investigation has included witness statements, medical records, and video evidence. The prosecutor has made decisions based on the evidence available, including the initial charge of assault and subsequent charges after a review of the case. However, there are areas where the investigation could be strengthened, particularly regarding the collection of evidence from the complainant's phone and the involvement of the children in the investigation.",
    effective_practice: [
      "Thorough documentation of reasonable lines of enquiry and disclosure decisions.",
      "Inclusion of medical records and video evidence to support the complainant's claims.",
      "Clear identification of third-party material that may be relevant to the case.",
    ],
    improvement_opportunities: [
      "Consideration of obtaining the complainant's phone for further evidence.",
      "Engagement with the children to gather any relevant information, despite their young ages.",
      "More detailed rationale for decisions made regarding the disclosure of material.",
    ],
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "The prosecutor demonstrated sound decision-making by initially charging the defendant based on the evidence and later reviewing the case to authorize additional charges.",
      },
      case_analysis: {
        score: 4,
        rationale:
          "The prosecutor effectively analyzed the case by identifying relevant evidence and understanding the implications of the allegations, although further exploration of the complainant's phone could enhance the case.",
      },
      risk_identification: {
        score: 3,
        rationale:
          "While there was some recognition of vulnerabilities, particularly regarding the children, there could be more proactive measures taken to address safeguarding concerns.",
      },
      clarity_of_explanation: {
        score: 4,
        rationale:
          "The documentation was generally clear and well-structured, providing a logical flow of information regarding the case and decisions made.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "The forms were completed accurately, and there was adherence to CPS processes, although there were minor areas where additional detail could improve clarity.",
      },
    },
  },
  {
    question: "Question 12",
    summary:
      "A case involving arson with intent to endanger life. The investigation required fire investigation expertise and careful analysis of the circumstances. The prosecutor made appropriate charging decisions with good consideration of the evidence and potential risks to public safety.",
    effective_practice: [
      "Effective coordination with fire investigation specialists and forensic experts.",
      "Thorough collection of evidence including fire scene analysis and witness accounts.",
      "Clear documentation of the circumstances and potential risks to life and property.",
    ],
    improvement_opportunities: [
      "More detailed analysis of the defendant's motivations and previous behavior patterns.",
      "Consideration of additional charges if multiple properties or people were at risk.",
      "Enhanced documentation of the fire investigation findings and expert conclusions.",
    ],
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "Sound decision-making with appropriate charges selected based on the seriousness of the offense and evidence of intent.",
      },
      case_analysis: {
        score: 4,
        rationale:
          "Good analysis of the case with effective use of fire investigation evidence and understanding of the risks involved.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Excellent risk identification with comprehensive assessment of risks to life, property, and potential for further offenses.",
      },
      clarity_of_explanation: {
        score: 4,
        rationale:
          "Clear documentation of the case with good explanation of the fire investigation findings and charging decisions.",
      },
      procedural_accuracy: {
        score: 4,
        rationale:
          "Accurate completion of forms with appropriate handling of expert reports and fire investigation evidence.",
      },
    },
  },
];
