import { IChart } from '../../src'

export const nodeInfo_old = {
  ci_whatisit_preexisting_11:{
    dialog:"You have a pre existing",
    clip:"ci_whatisit_preexisting",
    playbarPercentage:0.1
  },
  ci_2:{
    dialog:"this is ci_2",
    clip:"ci_2",
    playbarPercentage:0.2
  },
  ci_3:{
    dialog:"this is ci_3",
    clip:"ci_3",
    playbarPercentage:0.3
  }
}

export const dialogReference = {
  LABEL_CI_what_is_it:'dialog for LABEL_CI_what_is_it',
  ci_whatisit_CI_def_10:'dialog for ci_whatisit_CI_def_10'
}

export const nodeInfo = {
    "LABEL_CI_what_is_it": {
        "progressTitle": "Critical Illness Insurance: What Is It?",
        "playbarPercentage": 0.25000000000000006,
        "next": "ci_whatisit_CI_def_10"
    },

    "ci_whatisit_CI_def_10": {
        "clip": "ci_whatisit_ci_def",
        "playbarPercentage": 0.27272727272727276,
        "next": "ci_whatisit_preexisting_11"

    },

    "ci_whatisit_preexisting_11": {
        "clip": "ci_whatisit_preexisting",
        "playbarPercentage": 0.29545454545454547,
        "next": "ci_whatisit_specifieddisease_12"
    },

    "ci_whatisit_specifieddisease_12": {
        "playbarPercentage": 0.3181818181818182,
        "next": "ci_whatisit_elements_13"
    },

    "ci_whatisit_elements_13": {
        "clip": "ci_whatisit_elements",
        "playbarPercentage": 0.3409090909090909,
        "next": "ci_whatisit_GI_14"
    },

    "ci_whatisit_GI_14": {
        "clip": "ci_whatisit_maximum",
        "playbarPercentage": 0.3636363636363636,
        "next": "ci_whatisit_dependents_15"
    },

    "ci_whatisit_dependents_15": {
        "clip": "ci_whatisit_dependents",
        "playbarPercentage": 0.3863636363636363,
        "next": "ci_whatisit_how_paid_16"
    },

    "ci_whatisit_how_paid_16": {
        "clip": "ci_whatisit_choosebenefit_dependents",
        "playbarPercentage": 0.409090909090909,
        "next": "backNext17"
    },

    "backNext17": {
        "form": "backNext",
        "clip": "ci_whatisit_wrapup",
        "title": "What Is Covered?",
        "subtitle": "Learn how critical illness insurance works.",
        "playbarPercentage": 0.4318181818181817,
        "next": "Critical_Illness_Insurance__What_Is_Covered__18"
    }
  }
/*
    link1: {
      id: 'link1',
      from: {
        nodeId: 'node1',
        portId: 'port2',
      },
      to: {
        nodeId: 'node2',
        portId: 'port1',
      },
      properties: {
        label: 'example link label',
      },
    },
*/




export const chartSimple: IChart = {
  offset: {
    x: 0,
    y: 0,
  },
  scale: 1,
  nodes: {
    ci_whatisit_preexisting_11: {
      id: 'ci_whatisit_preexisting_11',
      type: 'output-only',
      readonly:true,
      position: {
        x: 300,
        y: 100,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'output',
          properties: {
            value: 'yes',
          },
        },
        port2: {
          id: 'port2',
          type: 'output',
          properties: {
            value: 'no',
          },
        },
      },
    },
    ci_2: {
      id: 'ci_2',
      type: 'input-output',
      position: {
        x: 300,
        y: 300,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
        },
        port2: {
          id: 'port2',
          type: 'output',
        },
      },
    },
    ci_3: {
      id: 'ci_3',
      type: 'input-output',
      position: {
        x: 100,
        y: 600,
      },
      ports: {
        port1: {
          id: 'port1',
          type: 'input',
        },
        port2: {
          id: 'port2',
          type: 'output',
        },
      },
    }
  },
  links: {
  },
  selected: {},
  hovered: {},
}


/*
{

    "begin": {

        "progressTitle": "Benefits Enrollment: Welcome!",

        "playbarPercentage": 0,

        "next": "switch_custom_intro_played"

    },

    "switch_custom_intro_played": {

        "switch": {

            "data": "customIntroPlayed",

            "cases": {

                "true": {

                    "next": "check_disclaimer_1"

                },

                "false": {

                    "next": "play_custom_intro_1"

                }

            }

        }

    },

    "play_custom_intro_1": {

        "clip": "intro_welcome_message",

        "playbarPercentage": 0.0005,

        "next": "set_form_as_played_1"

    },

    "set_form_as_played_1": {

        "calculate": {

            "result": "customIntroPlayed",

            "set": "true"

        },

        "next": "check_disclaimer_1"

    },

    "check_disclaimer_1": {

 

        "playbarPercentage": 0.0006,

        "next": "switch_disclaimer_played"

    },

    "switch_disclaimer_played": {

        "switch": {

            "data": "disclaimerAccepted",

            "cases": {

                "true": {

                    "next": "move_to_tutorial_check"

                },

                "false": {

                    "next": "display_disclaimer_1"

                }

            }

        }

    },

    "display_disclaimer_1": {

        "form": "disclaimer",

        "clip": "intro_disclaimer",

        "playbarPercentage": 0.0006,

        "next": "set_form_as_played_2"

    },

    "set_form_as_played_2": {

        "calculate": {

            "result": "disclaimerAccepted",

            "set": "true"

        },

        "next": "move_to_tutorial_check"

    },

    "move_to_tutorial_check": {

        "progressTitle": "Benefits Enrollment: Tutorial",

        "playbarPercentage": 0.0007,

        "next": "switch_tutorial_played"

    },

    "switch_tutorial_played": {

        "switch": {

            "data": "tutorialPlayed",

            "cases": {

                "true": {

                    "next": "LABEL_CI_intro"

                },

                "false": {

                    "next": "intro_walkthru_hi_1"

                }

            }

        }

    },

    "intro_walkthru_hi_1": {

        "clip": "intro_walkthru_hi",

        "playbarPercentage": 0.001,

        "next": "intro_walkthru_tour_2"

    },

 

    "intro_walkthru_tour_2": {

        "clip": "intro_walkthru_tour",

        "playbarPercentage": 0.002,

        "next": "set_form_as_played_3"

    },

    "set_form_as_played_3": {

        "calculate": {

            "result": "tutorialPlayed",

            "set": "true"

        },

        "next": "intro_walkthru_title_3"

    },

    "intro_walkthru_title_3": {

        "clip": "intro_walkthru_title",

        "playbarPercentage": 0.003,

        "next": "intro_walkthru_playbar_4"

    },

    "intro_walkthru_playbar_4": {

        "clip": "intro_walkthru_playbar",

        "playbarPercentage": 0.004,

        "next": "intro_walkthru_icon_5"

    },

 

    "intro_walkthru_icon_5": {

        "playbarPercentage": 0.005,

        "next": "intro_walkthru_menu_6"

    },

    "intro_walkthru_menu_6": {

        "clip": "intro_walkthru_menu",

        "playbarPercentage": 0.006,

        "next": "intro_walkthru_plandetails_7"

    },

 

 

    "intro_walkthru_plandetails_7": {

        "playbarPercentage": 0.007,

        "next": "intro_walkthru_enroll_8"

    },

 

    "intro_walkthru_enroll_8": {

        "playbarPercentage": 0.008,

        "next": "intro_walkthru_questionmark_9"

    },

 

    "intro_walkthru_questionmark_9": {

        "playbarPercentage": 0.009,

        "next": "intro_walkthru_moveon_10"

    },

    "intro_walkthru_moveon_10": {

        "clip": "intro_walkthru_moveon",

        "playbarPercentage": 0.010,

        "next": "LABEL_CI_intro"

    },

    "LABEL_Menu": {

        "progressTitle": "Critical Illness Insurance: Menu",

        "playbarPercentage": 0.0105,

        "next": "check_disclaimer_2"

    },

    "check_disclaimer_2": {

 

        "playbarPercentage": 0.011,

        "next": "switch_disclaimer_played_2"

    },

    "switch_disclaimer_played_2": {

        "switch": {

            "data": "disclaimerAccepted",

            "cases": {

                "true": {

                    "next": "switch_basicSetup_form_played_1"

                },

                "false": {

                    "next": "display_disclaimer_2"

                }

            }

        }

    },

    "display_disclaimer_2": {

        "form": "disclaimer",

        "clip": "intro_disclaimer",

        "playbarPercentage": 0.012,

        "next": "set_form_as_played_5"

    },

    "set_form_as_played_5": {

        "calculate": {

            "result": "disclaimerAccepted",

            "set": "true"

        },

        "next": "switch_basicSetup_form_played_1"

    },

    "switch_basicSetup_form_played_1": {

        "switch": {

            "data": "basicSetupPlayed",

            "cases": {

                "true": {

                    "next": "MENU_main_menu_display_1"

                },

                "false": {

                    "next": "gather_personal_info_2"

                }

            }

        }

    },

    "gather_personal_info_2": {

        "form": "basicSetup",

        "clip": "phrases_about_thanks",

        "next": "set_form_as_played_6",

        "playbarPercentage": 0.020408163

    },

    "set_form_as_played_6": {

        "calculate": {

            "result": "basicSetupPlayed",

            "set": "true"

        },

        "next": "LABEL_CI_intro"

    },

 

 

 

    "MENU_main_menu_display_1": {

        "clip": "intro_nav_select_no_all",

        "title": "Where would you like to go?",

        "menu": [{

            "label": "Introduction",

            "next": "LABEL_CI_intro"

        }, {

            "label": "Learn about it.",

            "next": "LABEL_CI_what_is_it"

        }, {

            "label": "Why enroll?",

            "next": "LABEL_CI_why_need"

        }, {

            "label": "Review plan details.",

            "next": "LABEL_CI_full_chart"

        }, {

            "label": "Help me decide.",

            "next": "LABEL_CI_calculator"

        }],

        "playbarPercentage": 0.022727272727272728,

        "next": "LABEL_CI_intro"

    },

 

    "LABEL_CI_intro": {

        "progressTitle": "Critical Illness Insurance: Introduction",

        "playbarPercentage": 0.045454545454545456,

        "next": "switch_basicSetup_form_played_2"

    },

    "switch_basicSetup_form_played_2": {

        "switch": {

            "data": "basicSetupPlayed",

            "cases": {

                "true": {

                    "next": "ci_intro_lets_talk_2"

                },

                "false": {

                    "next": "gather_personal_info_3"

                }

            }

        }

    },

    "gather_personal_info_3": {

        "form": "basicSetup",

        "clip": "phrases_about_thanks",

        "next": "set_form_as_played_4",

        "playbarPercentage": 0.05

    },

    "set_form_as_played_4": {

        "calculate": {

            "result": "basicSetupPlayed",

            "set": "true"

        },

        "next": "ci_intro_lets_talk_2"

    },

    "ci_intro_lets_talk_2": {

        "clip": "ci_intro_lets_talk",

        "playbarPercentage": 0.06818181818181818,

        "next": "ci_intro_added_expense_3"

    },

    "ci_intro_added_expense_3": {

        "clip": "ci_intro_added_expense",

        "playbarPercentage": 0.09090909090909091,

        "next": "footnote_4"

    },

    "footnote_4": {

        "footnote": "source: http://www.nerdwallet.com/blog/health/2014/03/26/medical-bankruptcy/",

        "next": "ci_intro_3of5_5",

        "playbarPercentage": 0.11363636363636365

    },

    "ci_intro_3of5_5": {

        "clip": "ci_intro_3of5",

        "playbarPercentage": 0.13636363636363638,

        "next": "footnote_6"

    },

    "footnote_6": {

        "footnote": "",

        "next": "ci_intro_burden_7",

        "playbarPercentage": 0.15909090909090912

    },

    "ci_intro_burden_7": {

        "clip": "ci_intro_burden",

        "playbarPercentage": 0.18181818181818185,

        "next": "ci_intro_alleviate_burden_8"

    },

    "ci_intro_alleviate_burden_8": {

        "clip": "ci_intro_alleviate_burden",

        "playbarPercentage": 0.20454545454545459,

        "next": "backNext9"

    },

    "backNext9": {

        "form": "backNext",

        "clip": "ci_intro_done",

        "title": "What Is It?",

        "subtitle": "Learn the basic elements of<br>critical illness insurance.",

        "playbarPercentage": 0.22727272727272732,

        "next": "LABEL_CI_what_is_it"

    },

    "LABEL_CI_what_is_it": {

        "progressTitle": "Critical Illness Insurance: What Is It?",

        "playbarPercentage": 0.25000000000000006,

        "next": "ci_whatisit_CI_def_10"

    },

    "ci_whatisit_CI_def_10": {

        "clip": "ci_whatisit_ci_def",

        "playbarPercentage": 0.27272727272727276,

        "next": "ci_whatisit_preexisting_11"

    },

    "ci_whatisit_preexisting_11": {

        "clip": "ci_whatisit_preexisting",

        "playbarPercentage": 0.29545454545454547,

        "next": "ci_whatisit_specifieddisease_12"

    },

 

    "ci_whatisit_specifieddisease_12": {

        "playbarPercentage": 0.3181818181818182,

        "next": "ci_whatisit_elements_13"

    },

    "ci_whatisit_elements_13": {

        "clip": "ci_whatisit_elements",

        "playbarPercentage": 0.3409090909090909,

        "next": "ci_whatisit_GI_14"

    },

    "ci_whatisit_GI_14": {

        "clip": "ci_whatisit_maximum",

        "playbarPercentage": 0.3636363636363636,

        "next": "ci_whatisit_dependents_15"

    },

 

    "ci_whatisit_dependents_15": {

        "clip": "ci_whatisit_dependents",

        "playbarPercentage": 0.3863636363636363,

        "next": "ci_whatisit_how_paid_16"

    },

 

 

 

 

 

 

 

    "ci_whatisit_how_paid_16": {

        "clip": "ci_whatisit_choosebenefit_dependents",

        "playbarPercentage": 0.409090909090909,

        "next": "backNext17"

    },

    "backNext17": {

        "form": "backNext",

        "clip": "ci_whatisit_wrapup",

        "title": "What Is Covered?",

        "subtitle": "Learn how critical illness insurance works.",

        "playbarPercentage": 0.4318181818181817,

        "next": "Critical_Illness_Insurance__What_Is_Covered__18"

    },

    "Critical_Illness_Insurance__What_Is_Covered__18": {

        "progressTitle": "Critical Illness Insurance: What Is Covered?",

        "playbarPercentage": 0.4545454545454544,

        "next": "ci_covered_catchup_18"

    },

   "ci_covered_catchup_18": {

        "clip": "ci_covered_catchup",

        "playbarPercentage": 0.4772727272727271,

        "next": "ci_covered_diagnosed_19"

    },

    "ci_covered_diagnosed_19": {

        "clip": "ci_covered_diagnosed",

        "playbarPercentage": 0.49999999999999983,

        "next": "ci_covered_claim_20"

    },

    "ci_covered_claim_20": {

        "clip": "ci_covered_claim",

        "playbarPercentage": 0.5227272727272726,

        "next": "ci_covered_portion_or_full_21"

    },

    "ci_covered_portion_or_full_21": {

        "clip": "ci_covered_portion_or_full",

        "playbarPercentage": 0.54,

        "next": "set_up_ci_table_data_1"

    },

    "set_up_ci_table_data_1": {

        "calculate": {

            "result": "compareTableDataKey",

            "set": "ciTableData"

        },

        "next": "ciComparisonTable_99"

    },

    "ciComparisonTable_99": {

        "medicalEducationTable": "up",

        "title": "Review your plan options.",

        "playbarPercentage": 0.549,

        "next": "footnote_100"

    },

    "footnote_100": {

        "footnoteTextColor": "#000000",

        "footnote": "",

        "next": "ci_covered_chart_101",

        "playbarPercentage": 0.55

    },

    "ci_covered_chart_101": {

        "clip": "can_covered_chart_multi_tier",

        "playbarPercentage": 0.552,

        "next": "footnote_102"

    },

 

    "footnote_102": {

        "footnote": "",

        "next": "ciComparisonTable_103",

        "playbarPercentage": 0.554

    },

    "ciComparisonTable_103": {

        "medicalEducationTable": "down",

        "playbarPercentage": 0.56,

        "next": "backNext23"

    },

    "backNext23": {

        "form": "backNext",

        "clip": "ci_covered_wrapup",

        "title": "Why Do I Need It?",

        "subtitle": "Learn why you should consider<br>critical illness insurance.",

        "playbarPercentage": 0.57,

        "next": "LABEL_CI_why_need"

    },

    "LABEL_CI_why_need": {

        "progressTitle": "Critical Illness Insurance: Why Do I Need It?",

        "playbarPercentage": 0.6136363636363634,

        "next": "footnote_24"

    },

    "footnote_24": {

        "footnote": "source: Heart Disease and Stroke Statistics, 2012 Update, American Heart Association.<BR>source: American Heart Association, American Stroke Association; Frequently Asked Questions for Get With The Guidelines-Stroke and AST",

        "next": "ci_whyneed_didyouknow_25",

        "playbarPercentage": 0.6363636363636361

    },

    "ci_whyneed_didyouknow_25": {

        "clip": "ci_whyneed_didyouknow",

        "playbarPercentage": 0.6590909090909088,

        "next": "footnote_26"

    },

    "footnote_26": {

        "footnote": "",

        "next": "footnote_27",

        "playbarPercentage": 0.6818181818181815

    },

    "footnote_27": {

        "footnote": "source: http://www.criticalillnessinsuranceinfo.org/critical-illness-insurance-news/tag/american-association-for-critical-illness-insurance",

        "next": "ci_whyneed_claims_doubled_28",

        "playbarPercentage": 0.7045454545454543

    },

    "ci_whyneed_claims_doubled_28": {

        "clip": "ci_whyneed_claims_doubled",

        "playbarPercentage": 0.727272727272727,

        "next": "footnote_29"

    },

    "footnote_29": {

        "footnote": "",

        "next": "ci_whyneed_family_history_30",

        "playbarPercentage": 0.7499999999999997

    },

    "ci_whyneed_family_history_30": {

        "clip": "ci_whyneed_family_history",

        "playbarPercentage": 0.7727272727272724,

        "next": "ci_whyneed_group_enroll_31"

    },

    "ci_whyneed_group_enroll_31": {

        "clip": "ci_whyneed_group_enroll",

        "playbarPercentage": 0.7954545454545451,

        "next": "ci_whyneed_offset_costs_32"

    },

 

    "ci_whyneed_offset_costs_32": {

        "clip": "ci_whyneed_offset_costs",

        "playbarPercentage": 0.8181818181818178,

        "next": "backNext33"

    },

    "backNext33": {

        "form": "backNext",

        "clip": "ci_whyneed_done",

        "title": "Is It Right For Me?",

        "subtitle": "Match your personal goals<br>to plan benefits.",

        "playbarPercentage": 0.8409090909090905,

        "next": "LABEL_CI_calculator"

    },

    "LABEL_CI_calculator": {

        "progressTitle": "Critical Illness Insurance: Is It Right For Me?",

        "playbarPercentage": 0.8636363636363632,

        "next": "criticalIllnessInsuranceDetails34"

    },

    "criticalIllnessInsuranceDetails34": {

        "form": "criticalIllnessInsuranceDetails",

       "clip": "ci_right4u_questions",

        "title": "A Few Questions",

        "subtitle": "Please check all that apply.",

        "playbarPercentage": 0.8863636363636359,

        "next": "Check_for_does_not_apply_decision"

    },

    "Check_for_does_not_apply_decision": {

        "switch": {

            "data": "cINoneApply",

            "cases": {

                "true": {

                    "next": "ci_right4u_other_plans_36"

                },

                "false": {

                    "next": "spouse_or_dependents_calculation"

                }

            }

        }

    },

    "spouse_or_dependents_calculation": {

        "calculate": {

            "result": "spouseOrDependents",

            "calculation": "children || (singleMarried != \"single.\")"

        },

        "next": "right_for_who_decision_1"

    },

    "right_for_who_decision_1": {

        "switch": {

            "data": "spouseOrDependents",

            "cases": {

                "true": {

                    "next": "ci_right4u_yes_family"

                },

                "false": {

                    "next": "ci_right4u_yes"

                }

            }

        }

    },

    "ci_right4u_yes": {

        "clip": "ci_right4u_yes",

        "next": "LABEL_CI_full_chart",

        "playbarPercentage": 0.89

    },

    "ci_right4u_yes_family": {

        "clip": "ci_right4u_yes_family",

        "next": "LABEL_CI_full_chart",

        "playbarPercentage": 0.895

    },

    "LABEL_CI_full_chart": {

        "progressTitle": "Critical Illness Insurance: Compare Plan Options",

        "playbarPercentage": 0.92,

        "next": "adjustTable20"

    },

    "adjustTable20": {

        "calculate": {

            "result": "Tier1",

            "set": "show"

        },

        "next": "adjustTable21"

    },

    "adjustTable21": {

        "calculate": {

            "result": "Tier2",

            "set": "show"

        },

        "next": "adjustTable22"

    },

 

 

    "adjustTable22": {

       "next": "adjustTable23"

    },

 

    "adjustTable23": {

        "next": "adjustTable24"

    },

 

    "adjustTable24": {

        "next": "adjustTable25"

    },

    "adjustTable25": {

        "calculate": {

            "result": "benefit1",

            "set": "show"

        },

        "next": "adjustTable26"

    },

    "adjustTable26": {

        "calculate": {

            "result": "benefit2",

            "set": "show"

        },

        "next": "adjustTable27"

    },

    "adjustTable27": {

       "calculate": {

            "result": "benefit3",

            "set": "show"

        },

        "next": "adjustTable28"

    },

    "adjustTable28": {

        "calculate": {

            "result": "benefit4",

            "set": "show"

        },

        "next": "adjustTable29"

    },

    "adjustTable29": {

        "calculate": {

            "result": "benefit5",

            "set": "show"

        },

        "next": "set_up_ci_table_data_2"

    },

    "set_up_ci_table_data_2": {

        "calculate": {

            "result": "compareTableDataKey",

            "set": "ciTableData"

        },

        "next": "footnote_200"

    },

    "footnote_200": {

        "footnoteTextColor": "#000000",

        "footnote": "",

        "next": "ciComparisonTable_201",

        "playbarPercentage": 0.955

    },

    "ciComparisonTable_201": {

        "form": "medicalComparisonTableInteractive",

        "clip": "can_right4u_show_full_chart_multi",

        "title": "Review your plan options.",

        "playbarPercentage": 0.957,

        "next": "footnote_202"

    },

 

    "footnote_202": {

        "footnote": "",

        "next": "set_up_calculator",

        "playbarPercentage": 0.959

    },

 

 

 

 

 

 

    "set_up_calculator": {

        "setupCalculator": {

            "calculatorKey": "calculator",

            "nameSpace": "ciCalculator"

        },

        "next": "calculatorIntroForm"

    },

    "calculatorIntroForm": {

        "title": "Who am I covering?",

        "clip": "calc_input_coverage",

        "next": "calculatorResults",

        "form": "calculator",

        "data": {

            "calculatorScreenIndex": 0

        },

        "playbarPercentage": 0.96

    },

    "calculatorResults": {

        "title": "Determine the right coverage for me.",

        "clip": "calc_results_vol_only_EEplus",

        "next": "tear_down_calculator",

        "form": "calculator",

        "data": {

            "calculatorScreenIndex": 1

        },

        "playbarPercentage": 0.97

    },

    "tear_down_calculator": {

        "clearCalculator": "true",

        "next": "notifyStandAlone"

    },

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

    "ci_right4u_other_plans_36": {

        "clip": "ci_right4u_consider_alt",

        "playbarPercentage": 0.985,

        "next": "notifyStandAlone"

    },

    "notifyStandAlone": {

        "completeProjectModule": "true",

        "next": "3238_38"

    },

 

 

 

 

 

 

 

 

 

 

    "3238_38": {

        "clip": "right4u_enroll_now_standalone_no_id_multi",

        "title": "Enroll now? Or watch again?",

        "menu": [{

            "label": "Introduction",

            "next": "LABEL_CI_intro"

        }, {

            "label": "Learn about it.",

            "next": "LABEL_CI_what_is_it"

        }, {

            "label": "Why enroll?",

            "next": "LABEL_CI_why_need"

        }, {

            "label": "Review plan details.",

            "next": "LABEL_CI_full_chart"

        }, {

            "label": "Help me decide.",

            "next": "LABEL_CI_calculator"

        }],

        "playbarPercentage": 0.99

    }

}
*/
