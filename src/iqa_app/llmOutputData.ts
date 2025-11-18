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

export const exemplar: LLMOutputDataEntry[] = [
  // Question 1
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
      "Consider additional context regarding victim support.",
      "Expand on the rationale for not seeking out further physical evidence.",
      "Reference DRS and case theory compliance with best practice.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "Exceptional decision-making with all decisions justified by clear evidence.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "Case analysis is comprehensive, identifying all key evidence and linking it to the charges.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "All potential risks are identified and managed according to best practice.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale:
          "All rationales for charging and investigative actions are clearly explained.",
      },
      procedural_accuracy: {
        score: 5,
        rationale:
          "All procedure is completed accurately, with excellent record-keeping.",
      },
    },
  },
  // Question 2
  {
    question: "Question 2",
    summary:
      "A complex fraud case involving multiple transactions. The investigation showcased highly detailed financial analysis, with full coordination between all relevant agencies. The prosecutor ensured every decision was fully evidenced and clearly explained.",
    effective_practice: [
      "Comprehensive analysis of bank records and financial flows.",
      "Early consultation with specialist investigators.",
      "Clear timeline of events and logical case progression.",
    ],
    improvement_opportunities: [
      "Detail steps taken to ensure victim is safeguarded.",
      "Expand on communication with multi-agency partners.",
      "Reference to documentation of the rationale for charging decisions.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "Charging was fully justified and all decisions were supported with clear, logical explanations.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "Full analysis of all relevant evidence. Excellent linkage of facts to decisions taken.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "All potential financial and personal risks identified and robustly managed.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale:
          "Every step in the investigation and charging document is explained to a high standard.",
      },
      procedural_accuracy: {
        score: 5,
        rationale:
          "All forms completed without error and proper procedure was evident throughout.",
      },
    },
  },
  // Question 3
  {
    question: "Question 3",
    summary:
      "An assault case with clear BWV and third-party accounts. The investigation and prosecution consistently adhered to best practice standards, with very clear explanations and full safeguarding.",
    effective_practice: [
      "Prompt attendance and preservation of evidence.",
      "Use of BWV to clarify sequence of events.",
      "Complete and clear safeguarding of the victim.",
    ],
    improvement_opportunities: [
      "Consider additional contextual information from witness interviews.",
      "Expand on rationale for any procedural decisions.",
      "Clarify use of evidence in decision-making where possible.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "All decisions supported by clear and cogent reasoning, with full victim support.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "Comprehensive and coherent analysis of incident and all evidence.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Risks to all parties identified and fully addressed, including child safeguarding.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale:
          "Case theory, decisions, and rationale are described clearly in all documents.",
      },
      procedural_accuracy: {
        score: 5,
        rationale:
          "Procedures correctly followed at all stages, from arrest to charge.",
      },
    },
  },
  // Question 4
  {
    question: "Question 4",
    summary:
      "A drugs supply investigation with effective use of surveillance and forensic testing. Every action and decision was justified and documented to the highest standards.",
    effective_practice: [
      "Efficient coordination with drugs unit and forensic labs.",
      "Full exploitation of surveillance evidence.",
      "Exemplary rationale given for prosecution path chosen.",
    ],
    improvement_opportunities: [
      "Provide more detailed analysis of forensic returns.",
      "Highlight partnership with support services for vulnerable individuals.",
      "Reference ongoing safeguarding and investigative opportunities.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "All operational and strategic decisions are thoroughly justified.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "Thorough analysis of evidence and clear case theory presented.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Risks identified and managed using an inter-agency approach.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale: "All written explanations meet best practice exemplars.",
      },
      procedural_accuracy: {
        score: 5,
        rationale: "All record-keeping and process steps are exemplary.",
      },
    },
  },
  // Question 5
  {
    question: "Question 5",
    summary:
      "Domestic abuse case with strong partnership working and clear risk management. All evidence and documentation meet exemplary standards.",
    effective_practice: [
      "Use of MARAC and safeguarding procedures.",
      "Clear explanations throughout the investigation.",
      "Strong victim support including referrals and follow-up.",
    ],
    improvement_opportunities: [
      "List further steps to engage with the victim long-term.",
      "Reference information-sharing protocols followed.",
      "Provide more explicit rationale for investigative decisions.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "Every decision was justified clearly with reference to multi-agency guidance.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "Advanced analysis of all evidence and vulnerability presented.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "All risks anticipated and robustly managed through partnership working.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale: "Documentation is clear and comprehensive at every stage.",
      },
      procedural_accuracy: {
        score: 5,
        rationale: "Adherence to procedure and policy is flawless throughout.",
      },
    },
  },
  // Question 6
  {
    question: "Question 6",
    summary:
      "Robbery with extensive evidence including CCTV, witness and forensic analysis. Prosecution approach, rationale, and all decisions are fully justified.",
    effective_practice: [
      "Immediate scene attendance and securing of evidence.",
      "Utilisation of all possible forensic opportunities.",
      "Excellent engagement with witnesses and support services.",
    ],
    improvement_opportunities: [
      "Include more formal structured interviews.",
      "Provide additional analysis of possible defence arguments.",
      "Highlight all lines of enquiry considered and documented.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "Every decision clearly reasoned based on evidence and best practice.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "All evidence analysed fully with a clear and logical case theory.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Risk to all parties assessed and risk management is exemplary.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale:
          "Case documentation explains reasoning and decisions clearly.",
      },
      procedural_accuracy: {
        score: 5,
        rationale: "All processes followed correctly and in exemplary detail.",
      },
    },
  },
  // Question 7
  {
    question: "Question 7",
    summary:
      "Sexual offence allegation with best practice approach to victim care, evidence capture and investigation planning. All risk and investigative decisions are model examples.",
    effective_practice: [
      "Full support and referral for victims.",
      "Detailed evidence gathering and scene preservation.",
      "Proactive investigative and risk management strategy.",
    ],
    improvement_opportunities: [
      "Reference further safeguarding beyond case closure.",
      "Provide more detail on rationale for investigative options considered.",
      "Highlight multi-agency working outcomes in more depth.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "Every decision shows exemplary consideration of safeguarding and evidence.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "Thorough analysis underpinning all investigative and charging choices.",
      },
      risk_identification: {
        score: 5,
        rationale: "Risks identified and addressed proactively throughout.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale:
          "Documentation and explanations are comprehensive and model examples.",
      },
      procedural_accuracy: {
        score: 5,
        rationale:
          "No procedural errors; all stages evidenced with best practice.",
      },
    },
  },
  // Question 8
  {
    question: "Question 8",
    summary:
      "Cybercrime investigation, excellent coordination with outside agencies. Investigative and risk management practices are model examples.",
    effective_practice: [
      "Partnership working with external cyber units.",
      "Detailed chain of evidence from start to finish.",
      "Clear case control and documentation at every stage.",
    ],
    improvement_opportunities: [
      "Expand on preventative advice provided post-case.",
      "Provide further detail about victim communication.",
      "Discuss the rationale for evidence prioritisation.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "Every decision is made logically and transparently using all available information.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "Case theory and evidence analysis is thorough and exemplary.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Cyber risk and personal risk are both evaluated comprehensively.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale:
          "Written explanations are accessible and logically structured.",
      },
      procedural_accuracy: {
        score: 5,
        rationale:
          "Procedural standards are maintained at all times at an exemplar level.",
      },
    },
  },
  // Question 9
  {
    question: "Question 9",
    summary:
      "Public order offence; full evidence and statement coverage, and exemplary prosecution rationale. Paperwork and risk management are as required for an exemplar case.",
    effective_practice: [
      "Comprehensive and clear evidence presentation.",
      "Effective use of digital evidence.",
      "Strong partnership working in case management.",
    ],
    improvement_opportunities: [
      "Discuss rationale for crowd management strategy.",
      "Expand on engagement with community partners.",
      "Highlight rationale for disposal and outcome options.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "Decisions throughout reflect the highest standard of public order policing.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "All aspects of incident analysed and integrated into the prosecution theory.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Risks assessed and responses implemented at the earliest opportunity.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale: "All reports and reasoning set out with exemplary clarity.",
      },
      procedural_accuracy: {
        score: 5,
        rationale:
          "Documentation and processes are beyond reproach at all points.",
      },
    },
  },
  // Question 10
  {
    question: "Question 10",
    summary:
      "Harassment/Stalking allegation with outstanding safeguarding actions and evidence collation. Prosecution guidance and procedures are model for future work.",
    effective_practice: [
      "Excellent victim safeguarding action and documentation.",
      "Engagement with all possible witnesses and evidence sources.",
      "Logical, clearly written rationale for charging decisions.",
    ],
    improvement_opportunities: [
      "Suggest further improvements around long-term safety planning.",
      "Provide more detail on proactive victim communication.",
      "Highlight rationale for investigative sequencing.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "All decisions strongly justified and informed by victim care best practice.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "Case theory supported by all relevant evidence and logical progression.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Risk assessment and safety planning reflects all relevant factors.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale: "Explanations are comprehensive and accessible.",
      },
      procedural_accuracy: {
        score: 5,
        rationale: "Procedural steps documented at every stage with no errors.",
      },
    },
  },

  {
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "The decision-making process is clear and well-reasoned, with strong justification for the charges based on the evidence presented, including corroboration from BWV and witness statements.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "The case analysis is thorough, identifying key evidence and establishing a coherent case theory that supports the charges of assault and coercive behaviour.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Risks are clearly identified, particularly regarding the victim's vulnerability and the presence of children during the incident, with appropriate safeguarding actions noted.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale:
          "The explanations provided are highly clear and coherent, effectively communicating the rationale behind decisions and actions taken.",
      },
      procedural_accuracy: {
        score: 5,
        rationale:
          "All procedural documentation is complete and compliant, with accurate entries in the DRS and IMD reflecting the case specifics.",
      },
    },
    effective_practice: [
      "Clear case narrative detailing the incident and police response.",
      "Well-documented RLE that includes comprehensive investigative actions.",
      "Strong justification for phone seizure and forensic analysis based on controlling behaviour.",
      "Coherent case theory that aligns with the evidence collected.",
      "Correct procedural detail in the DRS, ensuring compliance with CPS standards.",
    ],
    improvement_opportunities: [
      "Consider providing more detailed descriptions of the children's emotional state and any immediate support provided.",
      "Enhance the rationale for the specific charges being pursued, linking them more explicitly to the evidence.",
      "Include a more detailed analysis of potential defence arguments and how they might be countered.",
      "Document any follow-up actions taken post-disclosure to ensure ongoing safeguarding measures are in place.",
    ],
    question: "Question 11",
    summary:
      "This case involves a straightforward theft allegation where the defendant was caught on CCTV. The investigation was conducted promptly with clear evidence collection. The prosecutor made appropriate charging decisions based on the available evidence and witness statements.",
  },
  // Question 12
  {
    question: "Question 12",
    summary:
      "Possession with intent to supply drugs. All elements of the evidential test are addressed and explained. Investigation and risk assessment are model examples.",
    effective_practice: [
      "Early and comprehensive intelligence gathering.",
      "Effective links established with community agencies.",
      "Excellent rationale for charging and disposal route.",
    ],
    improvement_opportunities: [
      "Reference continuing risk management post-charge.",
      "Expand on support provided to vulnerable persons involved.",
      "Provide rationale for any evidence not used at trial.",
    ],
    ratings: {
      decision_making: {
        score: 5,
        rationale:
          "All decisions justified with reference to evidence and procedural best practice.",
      },
      case_analysis: {
        score: 5,
        rationale:
          "All key evidence and supporting information reviewed thoroughly.",
      },
      risk_identification: {
        score: 5,
        rationale:
          "Risks to the public and those involved were all identified and mitigated.",
      },
      clarity_of_explanation: {
        score: 5,
        rationale:
          "Explanations for each step in the case are exemplary and clear.",
      },
      procedural_accuracy: {
        score: 5,
        rationale: "No procedural issues or errors, with robust documentation.",
      },
    },
  },
];

export const good: LLMOutputDataEntry[] = [
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

export const fair: LLMOutputDataEntry[] = [
  // Question 1
  {
    question: "Question 1",
    summary:
      "A straightforward theft case with CCTV evidence. Investigation was adequate, but some opportunities for deeper evidence collection and documentation were missed.",
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "The decision to charge is reasonable but not all options or evidence were fully explored.",
      },
      case_analysis: {
        score: 3,
        rationale:
          "The case analysis identifies major elements, but is superficial and omits some inconsistencies.",
      },
      risk_identification: {
        score: 3,
        rationale:
          "Basic risks are acknowledged, but not fully explored or mitigated in planning.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale:
          "The explanations are present but lack detail and specificity in relation to the evidence.",
      },
      procedural_accuracy: {
        score: 3,
        rationale:
          "Most forms and documentation are complete but gaps remain, especially with unused material.",
      },
    },
    effective_practice: [
      "CCTV was obtained and viewed early in the investigation.",
      "Key witness statements taken promptly.",
      "Decision to charge was clearly outlined in the file.",
    ],
    improvement_opportunities: [
      "Provide further rationale for investigative decisions and charging.",
      "Document all attempts to obtain additional evidence such as fingerprints.",
      "Reference safeguarding or victim contact where relevant.",
    ],
  },
  // Question 2
  {
    question: "Question 2",
    summary:
      "A complex fraud involving financial records. There was basic analysis, but communication with external agencies could be improved.",
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "Charge decision followed basic principles, but specialist consultation was lacking.",
      },
      case_analysis: {
        score: 3,
        rationale:
          "Main evidence traced, but some records and rationale for including/excluding suspects is missing.",
      },
      risk_identification: {
        score: 2,
        rationale:
          "Risks such as ongoing offending or vulnerability are under-considered.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale:
          "Some steps documented, but justification for actions is often unclear.",
      },
      procedural_accuracy: {
        score: 3,
        rationale:
          "Documentation is present but lacks attention to financial investigation protocol.",
      },
    },
    effective_practice: [
      "Basic bank records obtained.",
      "Attempt was made to map transactions over time.",
      "Victim was contacted about outcome.",
    ],
    improvement_opportunities: [
      "Consult with specialist financial investigators.",
      "Document rationale for limiting financial enquiry scope.",
      "Clarify steps taken to prevent further fraud.",
    ],
  },
  // Question 3
  {
    question: "Question 3",
    summary:
      "An assault case with BWV. While safeguarding was referenced, the analysis and documentation remain at a basic level.",
    ratings: {
      decision_making: {
        score: 2,
        rationale:
          "Limited explanation for decisions and alternative actions were not considered.",
      },
      case_analysis: {
        score: 3,
        rationale:
          "BWV used to clarify sequence, but not all evidence linked and inconsistencies unaddressed.",
      },
      risk_identification: {
        score: 3,
        rationale:
          "Some reference to risk but assessment not fully structured.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale: "Minimal explanations with little case-specific reflection.",
      },
      procedural_accuracy: {
        score: 3,
        rationale:
          "RLE and unused material recorded but several items omitted.",
      },
    },
    effective_practice: [
      "Prompt evidence gathering (BWV).",
      "Basic safeguarding acknowledged.",
      "Timeline included in file.",
    ],
    improvement_opportunities: [
      "Address inconsistencies in BWV evidence.",
      "Enhance safeguarding documentation.",
      "Provide clearer rationale for charging.",
    ],
  },
  // Question 4
  {
    question: "Question 4",
    summary:
      "A public order offence. Evidence is present, but there is limited explanation of why all parties were not interviewed.",
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "Decision to proceed is logical but not all options are justified.",
      },
      case_analysis: {
        score: 3,
        rationale: "Summary of main facts included but omits context.",
      },
      risk_identification: {
        score: 2,
        rationale: "Risks to public and individual safety not fully assessed.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale: "Explains charge but rationale is sparse.",
      },
      procedural_accuracy: {
        score: 3,
        rationale:
          "Key forms completed but rationale for omitted interviews missing.",
      },
    },
    effective_practice: [
      "Review of available CCTV for public incident.",
      "Basic case progression notes in file.",
      "Contact with complainant documented.",
    ],
    improvement_opportunities: [
      "Interview all key parties or justify omissions.",
      "Expand on public risk assessment.",
      "Add rationale behind case progression.",
    ],
  },
  // Question 5
  {
    question: "Question 5",
    summary:
      "A simple drug possession matter. The case is handled efficiently but there’s no exploration of wider issues or supporting evidence.",
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "Appropriate outcome chosen, but options like diversion not discussed.",
      },
      case_analysis: {
        score: 2,
        rationale:
          "Basic analysis of seized drugs, missing links to previous offences.",
      },
      risk_identification: {
        score: 2,
        rationale: "Minimal reference to safeguarding or context.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale: "Short explanation, needs supporting information.",
      },
      procedural_accuracy: {
        score: 3,
        rationale: "Necessary forms completed, evidence handled appropriately.",
      },
    },
    effective_practice: [
      "Evidence quickly processed and analysed.",
      "Case outcome communicated in timely manner.",
    ],
    improvement_opportunities: [
      "Expand on possible diversion or education options.",
      "Reference safeguarding, especially for youth.",
      "Document learning from repeat offending risks.",
    ],
  },
  // Question 6
  {
    question: "Question 6",
    summary:
      "A burglary with little evidence besides a single witness. Scope for exploring alternative suspects is missed.",
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "Decision to charge relies on weak evidence, alternatives not explored.",
      },
      case_analysis: {
        score: 2,
        rationale:
          "Single line of enquiry followed, contrary evidence ignored.",
      },
      risk_identification: {
        score: 2,
        rationale: "Little mention of threat to victim’s safety.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale: "Documentation lacks specific rationale.",
      },
      procedural_accuracy: {
        score: 3,
        rationale: "File completed but with several omissions on DRS.",
      },
    },
    effective_practice: [
      "Prompt attendance at scene.",
      "Basic witness account included.",
    ],
    improvement_opportunities: [
      "Pursue additional suspects or provide reasons.",
      "Assess ongoing risk to property/victims.",
      "Record more on evidence limits.",
    ],
  },
  // Question 7
  {
    question: "Question 7",
    summary:
      "Case of domestic abuse with vulnerable victim. Some attempts at safeguarding, but not fully reflected in records.",
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "Decisive action on offence, but rationale and engagement with specialist services is basic.",
      },
      case_analysis: {
        score: 3,
        rationale: "Details on abuse included, but historical context missing.",
      },
      risk_identification: {
        score: 3,
        rationale: "References risk to victim, misses full DV assessment.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale:
          "Narrative is understandable but omits rationale for actions.",
      },
      procedural_accuracy: {
        score: 3,
        rationale:
          "RLE and case file completed, only short safety plan documented.",
      },
    },
    effective_practice: [
      "Immediate safeguarding steps taken.",
      "Victim contacted and offered support.",
    ],
    improvement_opportunities: [
      "Record all safeguarding steps fully.",
      "Engage with specialist services for high risk cases.",
      "Include review of prior incidents.",
    ],
  },
  // Question 8
  {
    question: "Question 8",
    summary:
      "Road traffic offence. Efficient evidence handling but procedural documentation is minimal.",
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "Correct charging outcome, limited rationale for not considering alternatives.",
      },
      case_analysis: {
        score: 2,
        rationale:
          "Basic summary of facts, limited comparison with previous conduct.",
      },
      risk_identification: {
        score: 2,
        rationale: "Limited reference to ongoing traffic or community risks.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale: "Resolution explained, but process not justified.",
      },
      procedural_accuracy: {
        score: 2,
        rationale: "File lacks DRS detail and officer statements.",
      },
    },
    effective_practice: ["Key evidence (CCTV, ANPR) gathered and retained."],
    improvement_opportunities: [
      "Expand risk assessment for persistent offenders.",
      "Reference to traffic safety considerations.",
      "Improve documentation standards for case files.",
    ],
  },
  // Question 9
  {
    question: "Question 9",
    summary:
      "Fraud by false representation. Key evidence present but rationale for charge and risk documentation is basic.",
    ratings: {
      decision_making: {
        score: 3,
        rationale:
          "Followed basic criteria for charge, but more analysis of intent needed.",
      },
      case_analysis: {
        score: 3,
        rationale:
          "Important evidence described but lacks assessment of sufficiency and impact.",
      },
      risk_identification: {
        score: 3,
        rationale: "References victim loss, but not wider risks.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale: "Reasoning laid out but lacks detail.",
      },
      procedural_accuracy: {
        score: 3,
        rationale:
          "All forms completed, supporting documentation missing in places.",
      },
    },
    effective_practice: [
      "Relevant account taken from the victim.",
      "Clear timeline of fraudulent activity constructed.",
    ],
    improvement_opportunities: [
      "Develop reasoning for charge selection.",
      "Expand on safeguarding and community risk.",
      "Ensure all evidence attached to file.",
    ],
  },
  // Question 10
  {
    question: "Question 10",
    summary:
      "A simple assault with clear evidence but little risk assessment. Documentation partially complete.",
    ratings: {
      decision_making: {
        score: 3,
        rationale: "Correct charge applied, but rationale under-detailed.",
      },
      case_analysis: {
        score: 2,
        rationale: "Evidence described but links to charge and DRS missing.",
      },
      risk_identification: {
        score: 2,
        rationale: "Risks identified in general terms only.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale: "Explanations are brief and not case-specific.",
      },
      procedural_accuracy: {
        score: 2,
        rationale: "Some forms omitted, unused material not described.",
      },
    },
    effective_practice: [
      "BWV and medical notes referenced.",
      "File handled within time limits.",
    ],
    improvement_opportunities: [
      "Document rationale for investigative strategy.",
      "Complete DRS and unused schedule.",
      "Clarify risk assessment for victim.",
    ],
  },
  {
    question: "Question 11",
    summary:
      "A case involving domestic violence and child abuse. The investigation was conducted but there are significant gaps in the risk assessment and safeguarding considerations.",
    ratings: {
      decision_making: {
        score: 2,
        rationale:
          "The decision-making process is weak, with limited case-specific reasoning and significant omissions in justifying the scope of enquiries and the rationale for the case theory.",
      },
      case_analysis: {
        score: 2,
        rationale:
          "The case analysis is weak, lacking detailed evaluation of evidence and failing to address inconsistencies or provide a coherent case theory.",
      },
      risk_identification: {
        score: 3,
        rationale:
          "Some risks are identified, particularly regarding the children present during the incident, but there are significant gaps in the risk assessment and safeguarding considerations.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale:
          "The explanations provided are vague and lack clarity, with minimal case-specific detail to support the narrative.",
      },
      procedural_accuracy: {
        score: 3,
        rationale:
          "There is partial compliance with procedural requirements, but noticeable gaps exist in the documentation of unused material and the rationale for limited enquiries.",
      },
    },
    effective_practice: [
      "The brief BWV and CAD checks demonstrate minimal but correct procedural awareness at an early stage.",
    ],
    improvement_opportunities: [
      "Provide a more detailed chronology of events to enhance the narrative.",
      "Expand the rationale for the lines of enquiry to justify the investigative actions taken.",
      "Conduct neighbour enquiries and house-to-house checks to gather additional evidence.",
      "Include a structured risk assessment that addresses the safeguarding of children present during the incident.",
      "Enhance the case theory with a thorough analysis of inconsistencies and evidential sufficiency.",
    ],
  },
  // Question 12
  {
    question: "Question 12",
    summary:
      "An arson case. Investigation included fire scene assessment, but analysis of motive and safeguarding documentation is lacking.",
    ratings: {
      decision_making: {
        score: 4,
        rationale:
          "Appropriate charge for severity and risk, but some further options could have been considered.",
      },
      case_analysis: {
        score: 3,
        rationale:
          "Fire scene conclusions cited but links to evidence and expert reports are not fully explained.",
      },
      risk_identification: {
        score: 3,
        rationale:
          "Risks to life/property noted, safeguarding post-incident not fully explored.",
      },
      clarity_of_explanation: {
        score: 3,
        rationale: "Situation explained but lacks detail on decision process.",
      },
      procedural_accuracy: {
        score: 3,
        rationale:
          "Most forms completed, supporting evidence inconsistently included.",
      },
    },
    effective_practice: [
      "Coordination with fire investigators.",
      "Quick evidence gathering from scene witnesses.",
    ],
    improvement_opportunities: [
      "Expand on suspect motive analysis.",
      "Document safeguarding actions in more detail.",
      "Include full expert findings in case file.",
    ],
  },
];

export const poor: LLMOutputDataEntry[] = [
  {
    question: "Question 1",
    summary:
      "A case involving assault with incomplete and generic documentation. The rationale behind investigative steps is not clear, and safeguarding issues are barely referenced.",
    ratings: {
      decision_making: {
        score: 2,
        rationale:
          "Decisions are broadly referenced but specific justifications are missing.",
      },
      case_analysis: {
        score: 1,
        rationale:
          "Little to no analysis linking the facts to evidential requirements.",
      },
      risk_identification: {
        score: 1,
        rationale:
          "Minimal identification of risks; safeguarding is not explored.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale:
          "Explanations are brief and do not clarify investigative reasoning.",
      },
      procedural_accuracy: {
        score: 2,
        rationale: "Some required forms are missing or incomplete.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Clearly outline investigative steps and rationale.",
      "Improve consideration of safeguarding for vulnerable parties.",
    ],
  },
  {
    question: "Question 2",
    summary:
      "A domestic abuse case with only generic documentation. Analysis is very limited and context for decisions is absent.",
    ratings: {
      decision_making: {
        score: 1,
        rationale: "No specific justification for charging decisions provided.",
      },
      case_analysis: {
        score: 2,
        rationale: "Facts are stated without any evaluative commentary.",
      },
      risk_identification: {
        score: 1,
        rationale:
          "Risks to the victim are mentioned in passing, not explored.",
      },
      clarity_of_explanation: {
        score: 1,
        rationale: "Sentence fragments rather than clear narrative.",
      },
      procedural_accuracy: {
        score: 2,
        rationale: "Some forms are present, but information is superficial.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Add context and justification for decisions.",
      "Detail potential and identified risks in the summary.",
    ],
  },
  {
    question: "Question 3",
    summary:
      "This case concerns low-value shoplifting. Investigation details are vague, with procedural steps not clearly explained.",
    ratings: {
      decision_making: {
        score: 2,
        rationale:
          "Outcome reached but rationale for key decisions not articulated.",
      },
      case_analysis: {
        score: 1,
        rationale: "No evidence of analysis of CCTV or witness accounts.",
      },
      risk_identification: {
        score: 1,
        rationale:
          "Risk factors for reoffending or vulnerability not discussed.",
      },
      clarity_of_explanation: {
        score: 1,
        rationale: "Written feedback lacks clarity on sequence of actions.",
      },
      procedural_accuracy: {
        score: 2,
        rationale: "Inadequate disclosure of investigatory actions in the DRS.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Describe the investigative actions and evidence clearly.",
      "Discuss any risk factors or vulnerabilities involved.",
    ],
  },
  {
    question: "Question 4",
    summary:
      "A case involving burglary. Evidence handling is not sufficiently documented. No clear links between evidence and charging.",
    ratings: {
      decision_making: {
        score: 1,
        rationale:
          "Decision to charge is stated without reference to threshold tests.",
      },
      case_analysis: {
        score: 1,
        rationale:
          "No connection made between forensic findings and offences charged.",
      },
      risk_identification: {
        score: 1,
        rationale: "Victim or community risk not acknowledged.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale:
          "Reasons for charging are unclear and lacking substantiation.",
      },
      procedural_accuracy: {
        score: 2,
        rationale: "Case file is missing key documentation from forensics.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Link evidence to decision-making explicitly.",
      "Acknowledge and document risk factors in the report.",
    ],
  },
  {
    question: "Question 5",
    summary:
      "Minor public disorder incident. Prosecution decision is poorly justified, and no rationales are provided for evidence choices.",
    ratings: {
      decision_making: {
        score: 2,
        rationale: "Charging rationale is implied, not stated.",
      },
      case_analysis: {
        score: 2,
        rationale:
          "The chain of evidence and incident sequence are not explained.",
      },
      risk_identification: {
        score: 1,
        rationale: "No reflection on risks to those involved.",
      },
      clarity_of_explanation: {
        score: 1,
        rationale: "Written record is disjointed and lacks key narrative.",
      },
      procedural_accuracy: {
        score: 2,
        rationale: "Standard forms referenced but with errors and omissions.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Provide narrative coherence and rationale for decisions.",
      "List and detail evidence gathered and considered.",
    ],
  },
  {
    question: "Question 6",
    summary:
      "Harassment allegation reviewed. The report lacks key context, omits assessment of communication evidence, and is procedurally incomplete.",
    ratings: {
      decision_making: {
        score: 1,
        rationale:
          "Decision justification is absent, evidential links missing.",
      },
      case_analysis: {
        score: 1,
        rationale: "Summary is vague, with no analytical content.",
      },
      risk_identification: {
        score: 1,
        rationale:
          "Risk to victim is not explored nor protective measures considered.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale: "Chronology is incomplete and unsubstantiated.",
      },
      procedural_accuracy: {
        score: 2,
        rationale: "Key safeguarding documentation not included.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Include analysis of communication evidence in case file.",
      "Assess and document safeguarding considerations.",
    ],
  },
  {
    question: "Question 7",
    summary:
      "Investigation into criminal damage. Report is purely factual and misses analytical value; risks and evidence gaps unaddressed.",
    ratings: {
      decision_making: {
        score: 2,
        rationale:
          "Determination reached without evidence of testing alternatives.",
      },
      case_analysis: {
        score: 1,
        rationale:
          "No discussion of the value of the evidence or conflicting versions.",
      },
      risk_identification: {
        score: 1,
        rationale:
          "No mention of potential risk to victims or wider community.",
      },
      clarity_of_explanation: {
        score: 1,
        rationale:
          "The case chronology is unclear, with abrupt changes and missing details.",
      },
      procedural_accuracy: {
        score: 2,
        rationale:
          "Some procedural requirements fulfilled, but documentation is sparse.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Add detailed chronology and risk analysis.",
      "Explicitly address gaps or conflicts in the evidence.",
    ],
  },
  {
    question: "Question 8",
    summary:
      "Case of controlling/coercive behaviour. Key evidence omitted from documentation and risks to involved parties insufficiently assessed.",
    ratings: {
      decision_making: {
        score: 1,
        rationale:
          "Basis for charge is unsubstantiated; little exploration of alternatives.",
      },
      case_analysis: {
        score: 2,
        rationale:
          "Case file is descriptive but lacks any critical or analytical input.",
      },
      risk_identification: {
        score: 1,
        rationale: "No assessment of ongoing risk to the victim.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale: "Sequence of events is incomplete and lacks explanation.",
      },
      procedural_accuracy: {
        score: 1,
        rationale:
          "Major omissions in procedural documentation including missing forms.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Detail the rationale for each charge and evidential step.",
      "Document ongoing or potential risk to persons involved.",
    ],
  },
  {
    question: "Question 9",
    summary:
      "Simple assault case. Key decisions and risk assessments are not included, and the chronology of events is ambiguous.",
    ratings: {
      decision_making: {
        score: 2,
        rationale:
          "No reference to standards applied or alternatives considered.",
      },
      case_analysis: {
        score: 1,
        rationale: "No connection drawn between evidence and the narrative.",
      },
      risk_identification: {
        score: 1,
        rationale: "Risks to all parties are unacknowledged.",
      },
      clarity_of_explanation: {
        score: 1,
        rationale: "Summary lacks order and leaves logical gaps.",
      },
      procedural_accuracy: {
        score: 2,
        rationale: "Some procedural steps referenced but lacking in depth.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Present a clear chronology of the incident.",
      "Explicitly discuss any risk assessments made.",
    ],
  },
  {
    question: "Question 10",
    summary:
      "Theft from a person. Reasoning for decisions and risk consideration are insufficient, with minimal evidential explanation.",
    ratings: {
      decision_making: {
        score: 1,
        rationale:
          "Charge is outlined but not justified or contextually linked.",
      },
      case_analysis: {
        score: 2,
        rationale:
          "Some evidence referenced, but impact and interpretation not discussed.",
      },
      risk_identification: {
        score: 1,
        rationale: "No documentation of safeguarding or victim impact.",
      },
      clarity_of_explanation: {
        score: 1,
        rationale: "Decision process is ambiguous and lacks detail.",
      },
      procedural_accuracy: {
        score: 2,
        rationale:
          "Evidence logs incomplete; procedural steps inconsistently documented.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Include full reasoning for case decisions.",
      "Enhance the discussion of evidence and victim safeguarding.",
    ],
  },
  {
    question: "Question 11",
    summary:
      "A case involving a theft allegation where the defendant was caught on CCTV. The investigation was conducted promptly with clear evidence collection. The prosecutor made appropriate charging decisions based on the available evidence and witness statements.",
    ratings: {
      decision_making: {
        score: 1,
        rationale:
          "The documents lack any meaningful case-specific decision-making or justification for the lines of enquiry pursued.",
      },
      case_analysis: {
        score: 1,
        rationale:
          "There is minimal case-specific analysis present, with no clear evaluation of evidence or case theory.",
      },
      risk_identification: {
        score: 0,
        rationale:
          "No identification of risks or vulnerabilities is present in the documents.",
      },
      clarity_of_explanation: {
        score: 1,
        rationale:
          "The explanations provided are vague and lack detail, making it difficult to understand the case-specific reasoning.",
      },
      procedural_accuracy: {
        score: 2,
        rationale:
          "There is some procedural documentation present, but it is weak and lacks significant detail.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Provide a detailed case narrative that outlines the investigation's progression and key findings.",
      "Include specific lines of enquiry pursued and the rationale behind them to demonstrate thorough investigative practices.",
      "Document any identified risks or vulnerabilities related to the case to ensure safeguarding and public interest considerations are addressed.",
      "Enhance the clarity of explanations regarding the decision-making process and case analysis to improve understanding.",
      "Ensure that the DRS entries are comprehensive and accurately reflect all actions taken during the disclosure process.",
    ],
  },
  {
    question: "Question 12",
    summary:
      "A case of arson with limited procedural accuracy and cursory rationale for decisions. Motive and safeguarding actions are not analysed.",
    ratings: {
      decision_making: {
        score: 2,
        rationale:
          "Decision to charge is mentioned but lacks analysis of alternatives.",
      },
      case_analysis: {
        score: 1,
        rationale:
          "Links between the fire scene investigation and the final charge are missing.",
      },
      risk_identification: {
        score: 1,
        rationale:
          "Post-incident risk and safeguarding measures are not considered.",
      },
      clarity_of_explanation: {
        score: 2,
        rationale: "Summary is incomplete, omitting reasoning for key steps.",
      },
      procedural_accuracy: {
        score: 1,
        rationale:
          "Major safeguarding and expert reports are missing from the file.",
      },
    },
    effective_practice: [],
    improvement_opportunities: [
      "Detail the rationale for charging and evidence review.",
      "Assess and document all safeguarding considerations.",
    ],
  },
];
