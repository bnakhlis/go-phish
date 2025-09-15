/**
 * Copyright © 2016 OpenText Corporation All rights reserved.
 *
 * The stub data set for datum property values. Include this script before
 * iw_module_api
 */
(function () {
  if (!global) {
    // for server side javascript, global should already be defined for global scope variables
    var global = window;
  }

  global.iw.local = {
    stubs: [
      {
        id: "default_en-US_DrawerPastChanges",
        type: "DCR",
        name: "default_en-US_DrawerPastChanges",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/DrawerPastChanges/data/en-US/DrawerPastChanges",
          dcrContent: {
            Content: {
              DrawerPastChanges_HEAD_BACK: "Past changes to score",
              DrawerPastChanges_SCORE_UP: "{POINTS} point increase on {DATE}",
              DrawerPastChanges_SCORE_NONE: "No change on {DATE}",
              DrawerPastChanges_SCORE_DOWN: "{POINTS} point decrease on {DATE}",
              DrawerPastChanges_NO_CHANGES: "No changes to accounts",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_DrawerScoreChange",
        type: "DCR",
        name: "default_en-US_DrawerScoreChange",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/DrawerScoreChange/data/en-US/DrawerScoreChange",
          dcrContent: {
            Content: {
              DrawerScoreChange_TRIGGER: "See what could have changed",
              DrawerScoreChange_HEAD_BACK: "Credit score change",
              DrawerScoreChange_HEAD_CHANGE: "Points",
              DrawerScoreChange_HEAD_CURRENT: "Credit score",
              DrawerScoreChange_HEAD_PREVIOUS: "Old score",
              DrawerScoreChange_HEAD_UPDATED: "Updated {DATE}",
              DrawerScoreChange_TITLE: "What could have caused this change?",
              DrawerScoreChange_HISTORY_TITLE: "Payment History",
              DrawerScoreChange_HISTORY_ADDED:
                "{VALUE} late payment was reported on your <em>{NAME}</em> account",
              DrawerScoreChange_HISTORY_REMOVED:
                "{VALUE} late payment was removed from your <em>{NAME}</em> account",
              DrawerScoreChange_HISTORY_EMPTY:
                "Factor does not appear in sheet",
              DrawerScoreChange_USAGE_TITLE: "Credit Usage",
              DrawerScoreChange_USAGE_INCREASE:
                "{VALUE}% balance increase on your <em>{NAME}</em> account",
              DrawerScoreChange_USAGE_DECREASE:
                "{VALUE}% balance decrease on your <em>{NAME}</em> account",
              DrawerScoreChange_USAGE_EMPTY: "Factor does not appear in sheet",
              DrawerScoreChange_AGE_TITLE: "Age of Credit",
              DrawerScoreChange_AGE_INCREASE:
                "Your oldest account, <em>{NAME}</em>, aged by {VALUE}",
              DrawerScoreChange_AGE_DECREASE:
                "Your account age decreased by {VALUE}",
              DrawerScoreChange_AGE_EMPTY: "Factor does not appear",
              DrawerScoreChange_BALANCES_TITLE: "Balances Across All Accounts",
              DrawerScoreChange_BALANCES_INCREASE:
                "Your balance increased by {VALUE} on your <em>{NAME}</em> account",
              DrawerScoreChange_BALANCES_DECREASE:
                "Your balance decreased by {VALUE} on your <em>{NAME}</em> account",
              DrawerScoreChange_BALANCES_EMPTY: "Factor does not appear",
              DrawerScoreChange_CHECKS_TITLE: "Recent Credit Applications",
              DrawerScoreChange_CHECKS_ADDED:
                "{VALUE} hard inquiry reported by <em>{NAME}</em>",
              DrawerScoreChange_CHECKS_REMOVED:
                "{VALUE} hard inquiry from <em>{NAME}</em> was removed",
              DrawerScoreChange_CHECKS_EMPTY: "Factor does not appear",
              DrawerScoreChange_AVAILABLE_TITLE: "Available Credit",
              DrawerScoreChange_AVAILABLE_INCREASE:
                "Credit line increase of {VALUE} on <em>{NAME}</em> account",
              DrawerScoreChange_AVAILABLE_DECREASE:
                "Credit line decrease of {VALUE} on <em>{NAME}</em> account",
              DrawerScoreChange_AVAILABLE_EMPTY: "Factor does not appear",
              DrawerScoreChange_PAST_CHANGES_BUTTON: "View Past Changes",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Sidebar",
        type: "DCR",
        name: "default_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Dashboard",
              Sidebar_Dashboard_URL: "/dashboard",
              Sidebar_CreditReport: "Credit Report",
              Sidebar_CreditReport_URL: "/credit-report",
              Sidebar_Tools: "Tools",
              Sidebar_ProtectionSupport: "Protection Support",
              Sidebar_ProtectionSupport_URL: "/protection-support",
              Sidebar_CreditCompass: "Score Goals\u2122",
              Sidebar_CreditCompass_URL: "/credit-compass",
              Sidebar_ScoreSimulator: "Score Simulator",
              Sidebar_ScoreSimulator_URL: "/simulator",
              Sidebar_ScoreSimulator_Tooltip_Title: "Score Simulator",
              Sidebar_ScoreSimulator_Tooltip:
                "The VantageScore<sup>®</sup>  3.0 Simulator estimates how your score may change by varying one or more key variables. Your current score is displayed so that you can compare your actual score to your simulated score. The Simulator does not guarantee that your actual score will reach the simulated score range, nor does it guarantee that you will be approved or rejected for credit by any financial institution; it just provides an approximate indication of your credit-worthiness. Change any or all of these variables to calculate an estimated change to your score.",
              Sidebar_Education: "Credit Education",
              Sidebar_ScoreFactors: "Score Factors",
              Sidebar_ScoreFactors_URL: "/score-factors",
              Sidebar_Articles: "Articles",
              Sidebar_Articles_URL: "/articles",
              Sidebar_Blog: "Blog",
              Sidebar_Blog_URL: "/blog",
              Sidebar_FAQ: "FAQ",
              Sidebar_FAQ_URL: "/FAQ",
              Sidebar_Signup: "Sign Up",
              Sidebar_Home: "Home",
              Sidebar_Signup_URL: "/enroll-step-1",
              Sidebar_Login: "Login",
              Sidebar_Login_URL: "/login",
              Sidebar_Support: "Support",
              Sidebar_Privacy: "Privacy",
              Sidebar_Privacy_URL:
                "https://www.transunion.com/privacy/consumer-interactive",
              Sidebar_Terms: "Terms of Use",
              Sidebar_Terms_URL: "/legal?tab=Terms-and-Conditions",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_Sidebar",
        type: "DCR",
        name: "BMOUS_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BMOUS/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "RevviCard_en-US_Sidebar",
        type: "DCR",
        name: "RevviCard_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/RevviCard/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "CompassCard_en-US_Sidebar",
        type: "DCR",
        name: "CompassCard_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/CompassCard/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BoltCard_en-US_Sidebar",
        type: "DCR",
        name: "BoltCard_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BoltCard/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TotalCard_en-US_Sidebar",
        type: "DCR",
        name: "TotalCard_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TotalCard/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TotalSelectCard_en-US_Sidebar",
        type: "DCR",
        name: "TotalSelectCard_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TotalSelectCard/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Pocket360_en-US_Sidebar",
        type: "DCR",
        name: "Pocket360_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Pocket360/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TU1_en-US_Sidebar",
        type: "DCR",
        name: "TU1_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TU1/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_Sidebar",
        type: "DCR",
        name: "NavyFed_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Blog: "Blog",
              Sidebar_Blog_URL: "/blog",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Dashlane_en-US_Sidebar",
        type: "DCR",
        name: "Dashlane_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Dashlane/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Synchrony_en-US_Sidebar",
        type: "DCR",
        name: "Synchrony_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Synchrony/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "HomeFreeUSA_en-US_Sidebar",
        type: "DCR",
        name: "HomeFreeUSA_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/HomeFreeUSA/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUCI1_en-US_Sidebar",
        type: "DCR",
        name: "TUCI1_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUCI1/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
              Activation_Welcome: "Welcome to My TrueIdentity",
              Activation_Description_Line1:
                "Monitor your credit health and keep your identity safe. Rest easy with credit monitoring alerts. TransUnion credit report and score, and access to resources you need to protect your information.",
              Activation_Description_Line2:
                "Enter your activation code to get started. Please contact your service provider if you do not have a code.",
              Activation_Enter_Activation_Code: "Enter Activation Code",
              Activation_Activate_Now: "Activate Now",
              Activation_Code_Not_Found: "Activation code not found.",
              Activation_Code_Expired: "Activation code has expired.",
              Activation_Code_Used: "Activation code has already been used.",
              Activation_Text: "Already have an account?",
              Activation_Text_Login: "Log in",
              Activation_Text_Login_URL: "/login",
              Sidebar_Activate: "Activate",
              Sidebar_Activate_URL: "/",
              Welcome_Modal_Image: "TUCI1_WelcomeModal.png",
              Sidebar_Privacy_URL:
                "https://www.transunion.com/privacy/consumer-interactive",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUCI1_en-US_Activation_Features",
        type: "DCR",
        name: "TUCI1_en-US_Activation_Features",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/TUCI1/Activation_Features/data/en-US/Activation_Features",
          dcrContent: {
            Content: {
              AvcFeatures_Key_Feature_Heading: "My TrueIdentity Key Features",
              AvcFeatures_Credit_Report_Content:
                "TransUnion credit report and score",
              AvcFeatures_Credit_Report_Img: "WelcomePage1_Dashboard.svg",
              AvcFeatures_National_Score_Content:
                "Credit score factors and score trending",
              AvcFeatures_National_Score_Img: "WelcomePage1_Graph.svg",
              AvcFeatures_Identity_Protection_Content:
                "Access to identity protection support",
              AvcFeatures_Identity_Protection_Img:
                "WelcomePage1_Customer_Support.svg",
              AvcFeatures_Credit_Monitoring_Content:
                "Credit monitoring with alerts informing you of changes to your credit file",
              AvcFeatures_Credit_Monitoring_Img:
                "WelcomePage1_Notification.svg",
              AvcFeatures_Credit_Lock_Content: "TransUnion credit lock",
              AvcFeatures_Credit_Lock_Img: "WelcomePage1_Lock.svg",
              AvcFeatures_Quick_Tips_Content:
                "Quick tips & in-depth articles on credit health and identity protection",
              AvcFeatures_Quick_Tips_Img: "WelcomePage1_Education.svg",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUADM_en-US_Sidebar",
        type: "DCR",
        name: "TUADM_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUADM/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
              Sidebar_CreditReport: "Credit Report",
              Sidebar_CreditReport_URL: "/credit-report",
              Sidebar_Tools: "Tools",
              Sidebar_CreditCompass: "CreditCompass\u2122",
              Sidebar_CreditCompass_URL: "/credit-compass",
              Sidebar_ScoreSimulator: "Score Simulator",
              Sidebar_ScoreSimulator_URL: "/simulator",
              Sidebar_ScoreSimulator_Tooltip_Title: "Score Simulator",
              Sidebar_ScoreSimulator_Tooltip:
                "The VantageScore<sup>®</sup>  3.0 Simulator estimates how your score may change by varying one or more key variables. Your current score is displayed so that you can compare your actual score to your simulated score. The Simulator does not guarantee that your actual score will reach the simulated score range, nor does it guarantee that you will be approved or rejected for credit by any financial institution; it just provides an approximate indication of your credit-worthiness. Change any or all of these variables to calculate an estimated change to your score.",
              Sidebar_Education: "Credit Education",
              Sidebar_ScoreFactors: "Score Factors",
              Sidebar_ScoreFactors_URL: "/score-factors",
              Sidebar_Articles: "Articles",
              Sidebar_Articles_URL: "/articles",
              Sidebar_FAQ: "FAQ",
              Sidebar_FAQ_URL: "/FAQ",
              Sidebar_Signup: "Sign Up",
              Sidebar_Home: "Home",
              Sidebar_Signup_URL: "/enroll-terms-conditions",
              Sidebar_Login: "Login",
              Sidebar_Login_URL: "/login",
              Sidebar_Support: "Support",
              Sidebar_Privacy: "Privacy",
              Sidebar_Privacy_URL: "/legal?tab=Privacy-Policy",
              Sidebar_Terms: "Terms of Use",
              Sidebar_Terms_URL: "/legal?tab=Terms-and-Conditions",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Toolbar",
        type: "DCR",
        name: "default_en-US_Toolbar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Toolbar/data/en-US/Toolbar",
          dcrContent: {
            Content: {
              Toolbar_Alerts: "Alerts",
              Toolbar_Alerts_URL: "/alerts",
              Toolbar_Profile: "My Profile",
              Toolbar_Info: "My Information",
              Toolbar_Info_URL: "/my-profile?tab=My-Information",
              Toolbar_Account: "User Settings",
              Toolbar_Account_URL: "/my-profile?tab=User-Settings",
              Toolbar_Email: "Email Preference",
              Toolbar_Email_URL: "/my-profile?tab=Email-Preference",
              Toolbar_Password: "Password Settings",
              Toolbar_Password_URL: "/my-profile?tab=Password-Settings",
              Toolbar_Cancel: "Manage Account",
              Toolbar_Cancel_URL: "/my-profile?tab=Manage-Account",
              Toolbar_FinancialGoals: "Financial Goals",
              Toolbar_FinancialGoals_URL: "/my-profile?tab=Financial-Goals",
              Toolbar_Logout: "Logout",
              Toolbar_Logout_URL: "/logout",
              Toolbar_Support: "Support",
              Toolbar_FAQ: "FAQs",
              Toolbar_FAQ_URL: "/FAQ",
              Toolbar_Legal: "Legal Information",
              Toolbar_Legal_URL: "/legal",
              Toolbar_Login: "Login",
              Toolbar_Login_URL: "/login",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Footer",
        type: "DCR",
        name: "default_en-US_Footer",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Footer/data/en-US/Footer",
          dcrContent: {
            Content: {
              Footer_FAQTitle: "FAQs",
              Footer_FAQTitle_URL: "/FAQ",
              Footer_PrivacyTitle: "Privacy Policy",
              Footer_PrivacyTitle_URL:
                "https://www.transunion.com/privacy/consumer-interactive",
              Footer_TermsTitle: "Terms and Conditions",
              Footer_TermsTitle_URL: "/legal?tab=Terms-and-Conditions",
              Footer_Blog: "Credit Intel Blog",
              Footer_Blog_URL: "/blog",
              Footer_Legal:
                "This site is hosted and operated by TransUnion Interactive, Inc., a wholly owned subsidiary of TransUnion, LLC.",
              Footer_Copyright: "TransUnion Interactive. All Rights Reserved.",
              Footer_Privacy_ChoiceTitle: "Your Privacy Choices",
              Footer_Privacy_ChoiceTitleUrl:
                "https://www.transunion.com/optout",
              Footer_BlogTitle: "Blog",
              Footer_BlogUrl: "/blog",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUADM_en-US_Footer",
        type: "DCR",
        name: "TUADM_en-US_Footer",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUADM/Footer/data/en-US/Footer",
          dcrContent: {
            Content: {
              Footer_FAQTitle: "FAQs",
              Footer_FAQTitle_URL: "/FAQ",
              Footer_PrivacyTitle: "Privacy Policy",
              Footer_PrivacyTitle_URL:
                "https://www.transunion.com/privacy/consumer-interactive",
              Footer_TermsTitle: "Terms and Conditions",
              Footer_TermsTitle_URL: "/legal?tab=Terms-and-Conditions",
              Footer_Blog: "Credit Intel Blog",
              Footer_Blog_URL: "/blog",
              Footer_Privacy_ChoiceTitle: "Your Privacy Choices",
              Footer_Privacy_ChoiceTitleUrl:
                "https://www.transunion.com/optout",
              Footer_BlogTitle: "Blog",
              Footer_BlogUrl: "/blog",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUCI1_en-US_Footer",
        type: "DCR",
        name: "TUCI1_en-US_Footer",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUCI1/Footer/data/en-US/Footer",
          dcrContent: {
            Content: {
              Footer_AddInfo_Title: "Additional Information",
              Footer_AddInfo:
                "The VantageScore® Credit Score is provided to help you better understand how lenders view your credit report. It is not an endorsement or a determination of your qualification for a loan. Lenders use credit scores to help determine whether or not you are a good candidate for a loan and what interest rate you will pay. However, each lender has specific underwriting standards, so you should not assume that you will receive the same evaluation from each lender. As part of the underwriting process, they will incorporate additional information you provide and may obtain references. In addition, even if you are approved, the terms and conditions of loans vary from lender to lender. The information used to determine your credit score comes from one of the three major credit bureaus — TransUnion, Equifax and Experian. Credit reports are a compilation of credit information that is reported to the applicable bureau by the various lending institutions with which you have accounts. The information contained in your report reflects the latest information provided to the applicable bureau. If you recently made a payment, opened a new account, or authorized an inquiry, it may not yet be reflected in the credit report of any one of the bureaus you receive. Likewise, if the information is not included in the applicable credit report it will not be reflected in your credit score based on such report. Also, disputed items are not incorporated in the assessment of your credit score. Your credit score will change each time new information is captured in the credit report on which it is based. TransUnion Interactive is not connected in any way with Fair, Isaac and Company; the credit scores provided here are not so-called FICO scores. The VantageScore® Credit Score may not be identical in every respect to any consumer credit scores produced by any other company.",
              Footer_PrivacyTitle_URL:
                "https://www.transunion.com/privacy/consumer-interactive",
              Footer_Privacy_ChoiceTitle: "Your Privacy Choices",
              Footer_Privacy_ChoiceTitleUrl:
                "https://www.transunion.com/optout",
              Footer_BlogTitle: "Blog",
              Footer_BlogUrl: "/blog",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Signup",
        type: "DCR",
        name: "default_en-US_Signup",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Signup/data/en-US/Signup",
          dcrContent: {
            Content: {
              Signup_Title: "It's your credit information.<br>See it for FREE.",
              Signup_Content:
                "When you need the right information, come directly to a trusted source that can provide you with essentials for monitoring your credit.",
              Signup_Button: "Sign Up",
              Signup_Activate: "Activate Now",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_EnrollDuplicateUserName",
        type: "DCR",
        name: "default_en-US_EnrollDuplicateUserName",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/EnrollDuplicateUserName/data/en-US/EnrollDuplicateUserName",
          dcrContent: {
            Content: {
              EnrollDuplicateUserName_Title: "Missing Info: Duplicate User",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_EnrollFullSSN",
        type: "DCR",
        name: "default_en-US_EnrollFullSSN",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/EnrollFullSSN/data/en-US/EnrollFullSSN",
          dcrContent: {
            Content: {
              EnrollFullSSN_Title: "Missing Info: Full Social Security Number",
              EnrollFullSSN_Label: "Full SSN",
              EnrollFullSSN_Button: "Continue",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Enroll",
        type: "DCR",
        name: "default_en-US_Enroll",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Enroll/data/en-US/Enroll",
          dcrContent: {
            Content: {
              Enroll_Step1Title: "Step 1",
              Enroll_Step1Text: "Create Your Account",
              Enroll_Step2Title: "Step 2",
              Enroll_Step2Text: "Tell Us More About You",
              Enroll_Step3Title: "Step 3",
              Enroll_Step3Text: "Confirm Your Identity",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Enroll1",
        type: "DCR",
        name: "default_en-US_Enroll1",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Enroll1/data/en-US/Enroll1",
          dcrContent: {
            Content: {
              Enroll1_FirstName: "First Name",
              Enroll1_LastName: "Last Name",
              Enroll1_Phone: "Phone Number",
              Enroll1_Email: "Email (Username)",
              Enroll1_Password: "Password",
              Enroll1_Image: "Enroll1Image.svg",
              Enroll1_ImageCaption: "Let's build your credit story together",
              Enroll1_Tooltip:
                "By using your email, it will be easy to remember your login. It will also be used for timely credit moniting alerts and service and product messages.",
              Enroll1_Tips:
                "<b>Tips for creating a strong password</b><ul><li>Use at least 10 characters. The longer your password is, the better!</li><li>Avoid using personal information, such as your name, surname, date of birth, etc.</li><li>Don't use sequential letters or numbers, like 123 or abc</li><li>Passwords should be unique. Avoid re-using a password you use elsewhere</li></ul>",
              Enroll1_Privacy_Policy_Url:
                "https://www.transunion.com/privacy/consumer-interactive",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Enroll2",
        type: "DCR",
        name: "default_en-US_Enroll2",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Enroll2/data/en-US/Enroll2",
          dcrContent: {
            Content: {
              Enroll2_PersonalInformation: "Personal Information",
              Enroll2_SecurityQuestion: "Security Question",
              Enroll2_CurrentResidence: "Current Residence",
              Enroll2_MoreThan6Months:
                "Have you lived here more than 6 months?",
              Enroll2_DateOfBirth: "Date of Birth (MM / DD / YYYY)",
              Enroll2_Last4: "Last 4 Digits of Your SSN",
              Enroll2_Answer: "Answer",
              Enroll2_ZipCode: "Zip Code",
              Enroll2_State: "State",
              Enroll2_City: "City",
              Enroll2_Address: "Address",
              Enroll2_PreviousResidence: "Previous Residence",
              Enroll2_PreviousZipCode: "Zip Code",
              Enroll2_PreviousCity: "City",
              Enroll2_PreviousAddress: "Address",
              Enroll2_Image: "Enroll2Image.svg",
              Enroll2_ImageCaption:
                "A great credit score means more opportunities at your finger tips.",
              Enroll2_Legal:
                'By clicking on the "Continue" button below, I acknowledge that I have read the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, and that I agree to their terms, I understand that the Terms of Service contain an <a href="#">Arbitration Clause</a>.',
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Enroll3",
        type: "DCR",
        name: "default_en-US_Enroll3",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Enroll3/data/en-US/Enroll3",
          dcrContent: {
            Content: {
              Enroll3_Title:
                "For your protection, please verify your identity by answering these questions",
              Enroll3_TitleTooltip: "Tooltip content",
              Enroll3_ImageCaption:
                "The safety of your personal data is important to us and you can count on us to keep it secure!",
              Enroll3_Verify: "Verify My Identity",
              Enroll3_TitleOTP: "One Time Passcode Verification",
              Enroll3_OTPParaOne:
                "How would you like to receive the verification code? We'll use the phone number you entered in Step 1.",
              Enroll3_OTPParaTwo:
                "Standard text message and voice rates apply.",
              Enroll3_OTPSendText: "Send Me A Text Message",
              Enroll3_OTPCallPhone: "Call My Phone",
              Enroll3_OTPEnterPasscode: "Enter the passcode you received",
              Enroll3_Passcode: "Passcode",
              Enroll3_NewPasscodeText:
                "Please check your phone for a new passcode",
              Enroll3_ResendPasscodeLink: "Resend Code",
              Enroll3_RemberDevice: "Should we remember this device?",
              Enroll3_RememberDeviceParaOne:
                "We'll remember your device to make signing in easier next time.",
              Enroll3_RememberDeviceBtn: "Yes, Remember This Device",
              Enroll3_Image_showQuestionView: "Enroll3ShowQuestion.svg",
              Enroll3_Image_showOTPView: "Enroll3ShowOTP1.svg",
              Enroll3_Image_showPasscodeView: "Enroll3ShowOTP2.svg",
              Enroll3_Image_showSSOQuestions: "Enroll3ShowSSOQuestions.svg",
              Enroll3_Image_showRememberDeviceView:
                "Enroll3ShowRememberDevice.svg",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_EnrollConfirmation",
        type: "DCR",
        name: "default_en-US_EnrollConfirmation",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/EnrollConfirmation/data/en-US/EnrollConfirmation",
          dcrContent: {
            Content: {
              EnrollConfirmation_Title: "You're all set",
              EnrollConfirmation_Description:
                "We've set up your dashboard with the following tools and content to best serve your needs.",
              EnrollConfirmation_Title2: "Credit Snapshot",
              EnrollConfirmation_Description2:
                "An up-to-date overview of your current score and the key factors that you should be monitoring.",
              EnrollConfirmation_Title3: "Alerts",
              EnrollConfirmation_Description3:
                "A way keeping you informed and in the know when something changes in your credit score.",
              EnrollConfirmation_Title4: "Score Simulator",
              EnrollConfirmation_Description4:
                "A simple tool that allows you to see how everyday decisions may influence your credit score before you make them.",
              EnrollConfirmation_Title5: "Educational Blog Content",
              EnrollConfirmation_Description5:
                "Articles and resources to guide you with professional guidance around your needs.",
              EnrollConfirmation_Button: "Go to dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_EnrollCancellation",
        type: "DCR",
        name: "default_en-US_EnrollCancellation",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/EnrollCancellation/data/en-US/EnrollCancellation",
          dcrContent: {
            Content: {
              EnrollCancellation_Title: "Cancellation Confirmed",
              EnrollCancellation_Description:
                "Your MyCredit Guide cancellation has been processed.<br/>We're sorry to see you go.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Login",
        type: "DCR",
        name: "default_en-US_Login",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Login/data/en-US/Login",
          dcrContent: {
            Content: {
              Login_Head: "Login",
              Login_HeadWelcome: "Log in here if you already have an account.",
              Login_Username: "Username",
              Login_Password: "Password",
              Login_Forgot: "Forgot Username or Password?",
              Login_Continue: "Login",
              Login_NoAccount: "Don't have an account?",
              Login_Signup: "Sign Up",
              Login_timeoutText1: "You've been inactive for a while.",
              Login_timeoutText2:
                "For your security, we'll automatically sign you out in approximately <b>1</b> minute.",
              Login_timeoutText4:
                "You may choose 'Stay signed in' to continue or sign out if you're done.",
              Login_Error_CustomerNotFound: "Password Incorrect",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUCI1_en-US_Login",
        type: "DCR",
        name: "TUCI1_en-US_Login",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUCI1/Login/data/en-US/Login",
          dcrContent: {
            Content: {
              Login_Username: "Email (Username)",
              Login_Activate_Now: "Activate Now",
              Login_Activation_Text1:
                "You need an activation code to use this service.",
              Login_Activation_Text2:
                "Please contact your service provider if you do not have a code.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Legal",
        type: "DCR",
        name: "default_en-US_Legal",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Legal/data/en-US/Legal",
          dcrContent: {
            Content: {
              Legal_Title: "Legal Information",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Overview",
        type: "DCR",
        name: "default_en-US_Overview",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Overview/data/en-US/Overview",
          dcrContent: {
            Content: {
              Overview_Title: "Your Credit Overview",
              Overview_Factors_Title: "Factors impacting your score",
              Overview_Info:
                "Below are the factors impacting your credit score. Keep an eye on these to understand what is affecting your score the most!",
              Overview_PaymentHistory: "Payment History",
              Overview_CreditUsage: "Credit Usage",
              Overview_AgeOfCredit: "Age Of Credit",
              Overview_BalancesAcrossAccounts: "Balances Across All Accounts",
              Overview_RecentCreditApplications: "Recent Credit Applications",
              Overview_AvailableCredit: "Available Credit",
              Overview_HistoryTooltipTitle: "Payment History",
              Overview_HistoryTooltipContent:
                "The payment history displayed on your credit report tells lenders how well you've paid back what you've borrowed and is heavily factored into the calculation of your credit score. A history of on-time payments will help keep your score healthy, while late payments (30 days or more past-due) may lower your score.",
              Overview_UsageTooltipTitle: "Credit Usage",
              Overview_UsageTooltipContent:
                "Credit usage is calculated as the percentage of available credit you're using at any given time. A consistently high percentage will have a negative effect on your score. To maintain a healthy score, aim to keep your credit usage under 30%.",
              Overview_AgeTooltipTitle: "Age Of Credit",
              Overview_AgeTooltipContent:
                "Age of credit is the number of years you've had open credit accounts in your name. A high credit age showing a mix of different types of credit accounts will likely have a positive effect on your score. Before closing old accounts, consider how it may lower your credit age.",
              Overview_BalanceTooltipTitle: "Balances Across All Accounts",
              Overview_BalanceTooltipContent:
                "This number adds up the balance owed on each of your accounts. Think of this as the total amount you owe. Higher balances tend to have a negative effect on your score, while lower, manageable balances tend to affect your score positively.",
              Overview_ApplicationsTooltipTitle: "Recent Credit Applications",
              Overview_ApplicationsTooltipContent:
                "The number you see here represents hard inquiries, which happen when a lender requests your credit report to evaluate your credit application. It's important to know hard inquiries stay on your credit report for 2 years and having too many of them can negatively impact your score.",
              Overview_AvailableTooltipTitle: "Available Credit",
              Overview_AvailableTooltipContent:
                "Available credit represents how much more money you could borrow from all your current credit sources. Having more money available to borrow can have a positive impact on your score, while maxing out available credit sources can have a negative impact.",
              Overview_Recommended: "(Stay under)",
              Overview_LatePayments: "Late Payments",
              Overview_InLast2Years: "in last 2 years",
              Overview_3Percent: "Accounts for 3% of your score",
              Overview_5Percent: "Accounts for 5% of your score",
              Overview_11Percent: "Accounts for 11% of your score",
              Overview_20Percent: "Accounts for 20% of your score",
              Overview_21Percent: "Accounts for 21% of your score",
              Overview_40Percent: "Accounts for 40% of your score",
              Overview_VeryHighImpact: "Extremely high impact",
              Overview_HighImpact: "High impact",
              Overview_ModerateImpact: "Moderate impact",
              Overview_LowImpact: "Low impact",
              Overview_ButtonText: "Learn More About Score Factors",
              Overview_PercentOfCreditUsed: "% of credit used",
              Overview_PaymentHistory_Title:
                "late payments are on your credit report",
              Overview_PaymentHistory_BodyTitle: "Here's what we found",
              Overview_PaymentHistory_Updated: "Updated",
              Overview_PaymentHistory_HeaderTitle_Start: "You have",
              Overview_PaymentHistory_HeaderTitle_End: "of credit available",
              Overview_PaymentHistory_Copy1:
                "<h4>What to know</h4><ul><li>Payment History makes up 40% of your score.</li><li>Payment History is how consistently you've paid back what you owe and is the most important factor in many scores.</li><li>Even one payment that's 30 or 60 days late can significantly hurt your score.</li>A 90 day late payment can disqualify you from certain loans and get your account sent to collections.<li>Pay late accounts as soon as possible to minimize damage to your score. A late payment's ffect on your score fades over time.</li><li>Late payments can stay on your credit report for up to seven years, even if you eventually pay back what you missed.</li><li></li></ul>",
              Overview_PaymentHistory_Copy2:
                "<h4>How this is calculated</h4><ul><li>Lenders usually reports your payments to credit bureaus once a month. However, some lenders may update more frequently.</li><li>We look at your payment history sent to TransUnion and sum up any missed payments here.</li></ul>",
              Overview_PaymentHistory_Copy3:
                "See how a late payment could affect your score with our Score Simulator.",
              Overview_PaymentHistory_Copy4: "late payment",
              Overview_CreditUsage_Title:
                "You are using {creditPercentage}% of your available credit",
              Overview_CreditUsage_BodyTitle: "Here's what we found",
              Overview_CreditUsage_Copy1:
                "<h4>What to know</h4><ul><li>Credit usage makes up 20% of your score.</li><li>Credit usage is the percentage of available credit you're using at any given time.</li><li>Keeping your credit usage below 30% can help your score.</li><li>Usage on individual revolving accounts (like credit cards) is most important, but keep on an eye on your average too.</li><li>Revolving accounts are open lines of credit you have the flexibility to use until you reach the credit limit. Credit cards are the most common revolving account.</li><li>Installment accounts are basically a fixed amount of money you repay on a schedule. Mortgages are a common example.</li></ul>",
              Overview_CreditUsage_Copy2:
                "<h4>How this is calculated</h4><ul><li>Lenders usually report your balances and credit limits to credit bureaus once a month. However, some lenders may update more frequently.</li><li>We add up the balances on your revolving accounts, then divide by your total credit limit.</li></ul>",
              Overview_CreditUsage_Copy3:
                "See how opening a new credit card or increasing your credit limits could affect your score with our Score Simulator.",
              Overview_CreditUsage_Chart_Title:
                "You are using {creditPercentage}% of your credit limit",
              Overview_CreditUsage_Chart_StayBelow: "Stay below",
              Overview_Inquiries_Title:
                "You've had {inquiries} hard inquiries over the last 2 years",
              Overview_Inquiries_InquiryDate: "Inquiry date",
              Overview_Inquiries_BodyTitle: "Here's what we found",
              Overview_Inquiries_Copy1:
                "<h4>What to know</h4><ul><li>Recent credit checks makes up 5% of your score.</li><li>Recent credit checks looks at the number of hard inquiries on your credit report. Your amount of recently opened accounts is also considered.</li></li>A hard inquiry happens when a lender checks your credit report to evaluate a credit application. This will almost always lower your score by a few points.</li><li>Hard inquiries stay on your credit report for two years. Having too many can hurt your score.</li><li>Checking your own credit report is a soft inquiry which means it does not hurt your score.</li></ul>",
              Overview_Inquiries_Copy2:
                "<h4>How this is calculated</h4><ul><li>Lenders immediately report hard inquiries to credit bureaus. It can take them up to 30 days to show on your credit report.</li><li>VantageScore(R) 3.0 counts all hard inquiries per category in a 14-day period as a single inquiry. Other scoring models may be different.</li></ul>",
              Overview_Inquiries_Copy3:
                "See how opening a new credit card or increasing your credit limits could affect your score with our Score Simulator.",
              Overview_AgeOfCredit_Title: "is the age of your credit",
              Overview_AgeOfCredit_BodyTitle:
                "Here are the open accounts we found",
              Overview_AgeOfCredit_OldestAccount: "Oldest account",
              Overview_AgeOfCredit_NewestAccount: "Newest account",
              Overview_AgeOfCredit_Copy1:
                "<h4>What to know</h4><ul><li>Age of credit makes up 21% of your score.</li><li>Age of credit looks at the age of your oldest open account.</li><li>Having a variety of account types will likely have a positive effect on your score. Aim for a mix of revolving accounts (like credit cards) and installment accounts (like loans).</li><li>Instead of closing old credit cards, use them occasionally so they stay open and count toward your age of credit.</li><li>Keep in mind that credit card issuers may close out inactive accounts on their own.</li></ul>",
              Overview_AgeOfCredit_Copy2:
                "<h4>How this is calculated</h4><ul><li>Lenders typically report your new accounts to credit bureaus 30 to 60 days after you open them.</li><li>We look at your accounts that have been reported to TransUnion, then list the open ones here.</li></ul>",
              Overview_AgeOfCredit_Copy3:
                "See how closing your oldest credit card or getting a new one could affect your age of credit with our Score Simulator.",
              Overview_AvailableCredit_BodyTitle: "Here's what we found",
              Overview_AvailableCredit_Updated: "Updated",
              Overview_AvailableCredit_HeaderTitle_Start: "You have",
              Overview_AvailableCredit_HeaderTitle_End: "of credit available",
              Overview_AvailableCredit_Copy1:
                "<h4>What to know</h4><ul><li>Available credit makes up 3% of your score.</li><li>Available credit is how much credit you have available to use on revolving accounts.</li><li>Having a high amount of available credit may slightly improve your score.</li></ul>",
              Overview_AvailableCredit_Copy2:
                "<h4>How this is calculated</h4><ul><li>Lenders usually report your balances and credit limits to credit bureaus monthly. However, some lenders may update more frequently.</li><li>We add up how much total credit you have access to and how much you're using.</li></ul>",
              Overview_AvailableCredit_Copy3:
                "See how increasing a credit card's limit or paying down a balance could affect your score with our Score Simulator.",
              Overview_Balances_Title: "Here's what we found",
              Overview_Balances_BodyTitle: "Here's what we found",
              Overview_Balances_NoAccounts:
                "You do not have any debt or balances reported",
              Overview_Balances_Copy1:
                "<h4>What to know</h4><ul><li>Balances across all accounts makes up 11% of your score.</li><li>Balances across all accounts is the total amount you owe on all of your credit accounts.</li><li>Higher balances will likely hurt your score. Lower balances will likely help.</li><li>Higher balances can still hurt your score even if you're current on your accounts.</li><li>Manageable balances are important, but consistent, on-time payments are still the most helpful for your score.</li></ul>",
              Overview_Balances_Copy2:
                "<h4>How this is calculated</h4><ul><li>Lenders usually report your balances to credit bureaus once a month. However, some lenders may update more frequently.</li><li>We add up your balance for every account reported to TransUnion and show it here.</li></ul>",
              Overview_Balances_Copy3:
                "See how paying off a credit card balance or getting a new loan could affect your score with our Score Simulator.",
              Overview_ViewAll: "View All Accounts",
              Overview_ViewLess: "View Fewer Accounts",
              Overview_Factors_ViewAll: "View All Factors",
              Overview_Factors_ViewLess: "View Fewer Factors",
              Overview_Debt_TotalDebtAmount: "Total Debt",
              Overview_Debt_AutoInstallmentDebtAmount: "Auto",
              Overview_Debt_CreditCardDebtAmount: "Credit Card",
              Overview_Debt_CollectionDebtAmount: "Collections",
              Overview_Debt_NonAutoInstallDebtAmount: "Installment",
              Overview_Debt_RealEstateDebtAmount: "Real Estate",
              Overview_Debt_OtherDebtAmount: "Other",
              Overview_Head_Title_NoAccounts:
                "You currently don't have any accounts reported",
              Overview_NoAccounts:
                "Looks like you don't have any open accounts reported at the moment. If you've recently opened a new account, remember it can sometimes take over a month to show up on your credit.",
              Overview_TakeAction_Title: "Take action",
              Overview_CreditReport_Title: "TransUnion credit report",
              Overview_CreditReport_Body:
                "View of your full TransUnion Credit Report.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BoltCard_en-US_Overview",
        type: "DCR",
        name: "BoltCard_en-US_Overview",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BoltCard/Overview/data/en-US/Overview",
          dcrContent: {
            Content: {
              Overview_Factors_ViewAll: "View all factors",
              Overview_Factors_ViewLess: "View less factors",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "CompassCard_en-US_Overview",
        type: "DCR",
        name: "CompassCard_en-US_Overview",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/CompassCard/Overview/data/en-US/Overview",
          dcrContent: {
            Content: {
              Overview_Factors_ViewAll: "View all factors",
              Overview_Factors_ViewLess: "View less factors",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "RevviCard_en-US_Overview",
        type: "DCR",
        name: "RevviCard_en-US_Overview",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/RevviCard/Overview/data/en-US/Overview",
          dcrContent: {
            Content: {
              Overview_Factors_ViewAll: "View all factors",
              Overview_Factors_ViewLess: "View less factors",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TotalCard_en-US_Overview",
        type: "DCR",
        name: "TotalCard_en-US_Overview",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TotalCard/Overview/data/en-US/Overview",
          dcrContent: {
            Content: {
              Overview_Factors_ViewAll: "View all factors",
              Overview_Factors_ViewLess: "View less factors",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TotalSelectCard_en-US_Overview",
        type: "DCR",
        name: "TotalSelectCard_en-US_Overview",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TotalSelectCard/Overview/data/en-US/Overview",
          dcrContent: {
            Content: {
              Overview_Factors_ViewAll: "View all factors",
              Overview_Factors_ViewLess: "View less factors",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_CreditLock",
        type: "DCR",
        name: "default_en-US_US_CreditLock",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/CreditLock/data/en-US/CreditLock",
          dcrContent: {
            Content: {
              CreditLock_Widget_Link: "More Details",
              CreditLock_Widget_Link_Path: "/protection-support",
              CreditLock_Widget_Title: "Credit Lock",
              CreditLock_Widget_Tooltip_Title: "Credit Lock",
              CreditLock_Widget_Toggle_Option1: "Unlocked",
              CreditLock_Widget_Toggle_Option1_icon: "unlock",
              CreditLock_Widget_Toggle_Option2: "Locked",
              CreditLock_Widget_Toggle_Option2_icon: "lock",
              CreditLock_Widget_Tooltip_Content:
                "Credit Lock gives you the ability to lock & unlock your TransUnion credit report at the touch of a button — putting you in control of your credit. <br/><br/>Locking your credit report blocks creditors, lenders (when you apply for a loan), landlords and employers from looking at it, which may also serve as a critical step in preventing an identity thief from applying for credit in your name.",
              CreditLock_Widget_Unlocked_Content:
                "Your TransUnion credit report is currently unlocked.<i> Lock your report for protection when you're not planning on applying for new credit cards or loans.</em>",
              CreditLock_Widget_Locked_Content:
                "Your TransUnion credit report is currently locked.<i> Unlock your credit when you're applying for new credit cards or loans.</i>",
              CreditLock_Widget_Frozen_Content:
                "Our records show you have placed a TransUnion security freeze on your credit report which makes credit lock unavailable.  You can learn how to remove the security freeze <a href='https://www.transunion.com/credit-freeze' target='_blank'>here</a>.",
              CreditLock_Widget_Error_Content:
                "We apologize, but credit lock is unavailable at this moment. Please check back at a later time. ",
              CreditLock_Widget_Modal_Unlocked_Content:
                "<p>Locking your TransUnion Credit Report means that you will be:</p><ul><li>Prevent others from looking at your TransUnion Credit Report</li><li>Help stop ID thieves from obtaining credit in your name</li></ul><p><b>Note:</b> Changing your lock status may take up to 5 minutes to process.</p>",
              CreditLock_Widget_Modal_Unlocked_Button: "Lock Report",
              CreditLock_Widget_Modal_Locked_Content:
                "<p>Unlocking your TransUnion Credit Report means that you will be:</p><ul><li>Available for creditors, landlords & employers to view</li><li>Accessible to lenders should you apply for credit</li></ul><p><b>Note:</b> Changing your lock status may take up to 5 minutes to process.</p>",
              CreditLock_Widget_Modal_Locked_Button: "Unlock Report",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Simulator",
        type: "DCR",
        name: "default_en-US_Simulator",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Simulator/data/en-US/Simulator",
          dcrContent: {
            Content: {
              Simulator_Title: "Score Simulator",
              Simulator_Description:
                "Use our score simulator to see how different financial actions you take may impact your TransUnion score.",
              Simulator_Subtitle: "What would happen if I...",
              Simulator_BalancesTitle:
                "Update My Credit Card Balances & Limits",
              Simulator_DecreaseCreditBalance: "Lower my credit card debt by:",
              Simulator_IncreaseCreditBalance: "Raise my credit card debt by:",
              Simulator_PayOffAllCreditCards: "Pay off all credit card debt:",
              Simulator_IncreaseCreditCardLimit:
                "Raise the credit limit on one card by:",
              Simulator_AccountsTitle: "Open Or Close Accounts",
              Simulator_ObtainCreditCard:
                "Add a new credit card with a limit of:",
              Simulator_CloseOldestCard: "Close my oldest card",
              Simulator_OpenNewCardWithBalance:
                "Open a new card and transfer a balance of:",
              Simulator_LoanAdd: "Add new loan:",
              Simulator_LoanType: "Select loan type:",
              Simulator_LoanAmount: "Enter loan amount:",
              Simulator_ApplyForCreditCard: "Add a credit check by a bank(s):",
              Simulator_PaymentRoutineTitle: "Change My Payment Routine",
              Simulator_OnTimePayment:
                "Maintain a history of on-time payments for:",
              Simulator_AllAccountsPastDue:
                "Let all my accounts go past due for:",
              Simulator_OneAccountPastDue:
                "Let one monthly account go past due for:",
              Simulator_PleaseChooseMonths: "Please Choose...",
              Simulator_3Months: "3 Months",
              Simulator_6Months: "6 Months",
              Simulator_9Months: "9 Months",
              Simulator_1Year: "1 Year",
              Simulator_0Days: "0 Days",
              Simulator_30Days: "30 Days",
              Simulator_60Days: "60 Days",
              Simulator_90Days: "90 Days",
              Simulator_ObstacleTitle: "Encounter an Obstacle",
              Simulator_MoveOneAccountToCollection:
                "Allow one revolving account to go into collections",
              Simulator_Current: "Current",
              Simulator_Simulated: "Simulated",
              Simulator_Reset: "Reset",
              Simulator_SimulateScore: "Simulate Score",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Compass",
        type: "DCR",
        name: "default_en-US_Compass",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Compass/data/en-US/Compass",
          dcrContent: {
            Content: {
              Compass_CreditCompass: "Score Goals\u2122",
              Compass_Description: "Create a Goal for your Credit score!",
              Compass_CurrentScore: "Your Current Score is",
              Compass_Continue: "Continue",
              Compass_EnterGoal: "Enter your credit score goal",
              Compass_GoalRange:
                "The goal should be between your current score and 850.",
              Compass_Points: "points",
              Compass_ErrorUnavailable:
                "We're sorry, Score Goals\u2122 is unavailable at the moment. Please try again later.",
              Compass_InfoContent:
                "We hope you are finding Score Goals\u2122 helpful in your journey to financial wellness. As a heads up we are currently working on allowing you to track and save your goal along with new recommendations!",
              Compass_InfoTitle: "Hi there!",
              Compass_TipPaymentHistory:
                "Set up autopay so you never miss a payment, or bill pay reminders to receive notifications when your bills are due.",
              Compass_TipCreditUtilization:
                "Using less than 30% of your available credit is a good goal. But, keep in mind that using some available credit and paying it off monthly may be better than not using any credit at all.",
              Compass_TipDebtBalances:
                "Think about paying down your debt with a personal loan which can add to your credit mix and potentially help you save on interest. Learn more about what a personal loan is and how it works.",
              Compass_TipNewRecentAccounts:
                "If you feel you must absoultely open up a new account, check out our 5 things to consider if you're thinking about opening a new credit card right now.",
              Compass_SimulatorBannerTitle: "Simulate Your Credit Score",
              Compass_SimulatorBannerContent:
                "Now that you know what to do, test out your recommendations with our Score Simulator tool!",
              Compass_SimulatorBannerButton: "Explore Simulator",
              Compass_6Months: "6 Months",
              Compass_12Months: "12 Months",
              Compass_18Months: "18 Months",
              Compass_24Months: "24 Months",
              Compass_6Mo: "6 mo",
              Compass_12Mo: "12 mo",
              Compass_18Mo: "18 mo",
              Compass_24Mo: "24 mo",
              Compass_ErrorNotAvailable:
                "We're Sorry. Score Goal is not available right now.",
              Compass_GatheringRecommendations:
                "Gathering your recommendations...",
              Compass_GreatGoal: "That's a great goal,",
              Compass_ReachingYourGoal: "Reaching Your Goal",
              Compass_AverageTime:
                "On average, others like you were able to reach that goal score in",
              Compass_AverageTimeRange: "24+ months",
              Compass_Instructions:
                "Feel free to adjust the timeframe to see recommendations that are more or less aggressive in reaching your goal.",
              Compass_GoalDifficulty: "Goal Difficulty",
              Compass_GoalScore: "Goal Score",
              Compass_GetStarted: "Let's get started!",
              Compass_TrackYourProgress:
                "Now that you've set your goal, you can track your progress here.",
              Compass_TrackImage: "CreditAccountUsage.svg",
              Compass_Tooltip_Text:
                "The VantageScore<sup>®</sup> 3.0 and grade is based primarily on a 24-month review of your credit report. It ranges from 300 to 850, where a high score means low risk. Your credit report has information \u2013 such as your history of payment punctuality, the total amount of your available credit, the total amount and type of debt you have, the number of open and active accounts, and the longevity of your relationships with creditors. See the dates under your score to find out when your last score was received and when your next score refresh will be available.",
              Compass_OurRecommendations: "Our Recommendations",
              Compass_OthersLikeYou:
                "Others like you used the recomendations below to reach their goal score in",
              Compass_Disclaimer:
                "If this timeframe is different than what you chose, don't worry — we adjusted it to give you better recommendations.",
              Compass_OurRecommendations_Tooltip:
                "We derive recommendations by looking at the percentage of users with a similar credit profile as you in the VantageScore study that actually reached the goal score you selected within a given timeframe. We recommend a timeframe where the goal you're trying to reach was achieved by a relatively high number of consumers with a credit profile similar to yours. For shorter timeframes this goal was achieved by a relatively low number of consumers with a credit profile similar to yours.",
              Compass_Impact: "Impact",
              Compass_Info_Image: "HiThere.jpg",
              Compass_Loading_Image: "compass_loading.svg",
              Compass_Simulator_Image: "Compass_SimulatorCTA.svg",
              Compass_Simulator_Alt:
                "Woman viewing a user experience on her laptop with different credit scores",
              Compass_Loading_Alt: "Person standing on compass face",
              Compass_GoalChart_StartLabel: "Current Score:",
              Compass_GoalChart_EndLabel: "Points to Go:",
              Compass_GoalChart_StartDate: "Start Date:",
              Compass_GoalChart_StartingScore: "Starting Score:",
              Compass_GoalChart_EditGoalLink: "Edit Goal",
              Compass_GoalChart_StopTrackingLink: "Stop Tracking",
              Compass_GoalChart_StopTrackingModal_Heading:
                "Stop Tracking My Goal",
              Compass_GoalChart_StopTrackingModal_ActionText:
                "Stop Tracking Goal",
              Compass_GoalChart_StopTrackingModal_CancelText: "Keep Tracking",
              Compass_ViewAccountsLink: "View Accounts",
              Compass_SetGoal: "Set Your Credit Score Goal",
              Compass_PoweredBy:
                "Score Goals\u2122 is powered by VantageScore 3.0®",
              Compass_GoalSetter_Controls_EnterAGoal: "Enter a goal up to",
              Compass_GoalSetter_Controls_ErrorMessage:
                "Your goal score must be between your current score and",
              Compass_GoalSetter_Controls_GoalMax: "850",
              Compass_GoalSetter_Controls_Tooltip: "Choosing Your Score Goal",
              Compass_GoalSetter_Controls_CurrentScore: "Current Score:",
              Compass_GoalSetter_Controls_ContinueButton: "Continue",
              Compass_GoalSetter_Controls_Rating_Excellent_Header:
                "Excellent: 781 - 850",
              Compass_GoalSetter_Controls_Rating_Excellent_Body:
                "With a score between 781-850 you may qualify for credit cards and loans with favorable terms and competitive interest rates.",
              Compass_GoalSetter_Controls_Rating_Good_Header: "Good: 720 - 780",
              Compass_GoalSetter_Controls_Rating_Good_Body:
                "With a score between 720-780, you may qualify for credit cards and loans at competitive rates.",
              Compass_GoalSetter_Controls_Rating_Fair_Header: "Fair: 658 - 719",
              Compass_GoalSetter_Controls_Rating_Fair_Body:
                "With a score between 658-719, you may not receive the most favorable credit card and loan rates.",
              Compass_GoalSetter_Controls_Rating_NeedsWork_Header:
                "Needs Work: 300 - 657",
              Compass_GoalSetter_Controls_Rating_NeedsWork_Body:
                "With a score between 300-657, you may receive limited offers on credit cards, mortgages or loans.",
              Compass_TimeframeSetter_Controls_Title: "Reaching Your Goal",
              Compass_TimeframeSetter_Controls_Copy:
                "On average, others like you were able to reach that goal score in 18-24 months.",
              Compass_TimeframeSetter_Controls_Label: "Timeframe:",
              Compass_TimeframeSetter_Controls_Instructions:
                "You may adjust the timeframe to see recommendations that are more or less aggressive in reaching your goal.",
              Compass_TimeframeSetter_Controls_Difficulty:
                "Difficulty reaching this goal:",
              Compass_TimeframeSetter_Controls_SaveMyGoalButton: "Continue",
              Compass_TimeframeSetter_GoalDetails_Title: "Your Score Goal",
              Compass_TimeframeSetter_GoalDetails_FromCurrent:
                "from your current score",
              Compass_Recommendations_Loading:
                "Saving your goal and gathering your recommendations…",
              Compass_Recommendations_Loading_NoGoalSaving:
                "Gathering your recommendations…",
              Compass_StopTracking:
                " Are you sure you want to stop tracking your goal?<br />All of your current progress will be lost.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TU1_en-US_Compass",
        type: "DCR",
        name: "TU1_en-US_Compass",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TU1/Compass/data/en-US/Compass",
          dcrContent: {
            Content: {
              Compass_Info_Image: "HiThere.svg",
              Compass_GoalSetter_Controls_Rating_Good_Header:
                "Very Good: 720 - 780",
              Compass_GoalSetter_Controls_Rating_Good_Body:
                "With a score between 720-780, you may qualify for credit cards and loans at competitive rates.",
              Compass_GoalSetter_Controls_Rating_Fair_Header: "Good: 658 - 719",
              Compass_GoalSetter_Controls_Rating_Fair_Body:
                "With a score between 658-719, you may not receive the most favorable credit card and loan rates.",
              Compass_GoalSetter_Controls_Rating_NeedsWork_Header:
                "Fair: 601 - 657",
              Compass_GoalSetter_Controls_Rating_NeedsWork_Body:
                "With a score between 601-657, you may receive limited offers on credit cards, loans, and other forms of credit.<br><br><h2>Poor: 300 - 600</h2><p>With a score between 300-600, you may have difficulty getting approved for credit cards, loans, and other forms of credit.</p>",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_MyProfile",
        type: "DCR",
        name: "default_en-US_MyProfile",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/MyProfile/data/en-US/MyProfile",
          dcrContent: {
            Content: {
              MyProfile_Title: "My Profile",
              MyProfile_FirstName: "First Name",
              MyProfile_MiddleName: "Middle Name",
              MyProfile_LastName: "Last Name",
              MyProfile_Email: "Email Address",
              MyProfile_Address: "Address Line 1",
              MyProfile_City: "City",
              MyProfile_Zip: "Zip Code",
              MyProfile_UserName: "User Name",
              MyProfile_Secret_Answer: "Answer",
              MyProfile_Current_Password: "Current Password",
              MyProfile_New_Password: "New Password",
              MyProfile_Confirm_New_Password: "Confirm New Password",
              MyProfile_Tooltip:
                "By using your email, it will be easy to remember your login. It will also be used for timely credit monitoring alerts and service and product messages.",
              MyProfile_SaveAll: "Save All",
              MyProfile_Personal_Info: "Personal Information",
              MyProfile_Mailing_Address: "Mailing Address",
              MyProfile_My_Information: "My Information",
              MyProfile_User_Settings: "User Settings",
              MyProfile_Password_Settings: "Password Settings",
              MyProfile_Password: "Password",
              MyProfile_Email_Preference: "Email Preference",
              MyProfile_Cancel_Account: "Cancel Account",
              MyProfile_Manage_Account: "Manage Account",
              MyProfile_Financial_Goals: "Financial Goals",
              MyProfile_Financial_Goals_Banner_Header:
                "Personalize your Experience",
              MyProfile_Financial_Goals_Banner_Content:
                "Answer 2 quick questions to personalize your dashboard to your needs.",
              MyProfile_Financial_Goals_Banner_BtnTxt: "Answer questions",
              MyProfile_Financial_Goals_LastUpdated:
                "Last Updated: Februar 15, 2024",
              MyProfile_Financial_Goals_Answered_Header: "Your Financial Goals",
              MyProfile_Financial_Goals_Question1: "What brings you here?",
              MyProfile_Financial_Goals_Answer1:
                "Help protect my identity, Maintain my credit",
              MyProfile_Financial_Goals_Question2:
                "What financial goals you are hoping to achieve",
              MyProfile_Financial_Goals_Answer2: "Pay down debts",
              MyProfile_Financial_Goals_UpdateButtonText: "Update your answers",
              MyProfile_Email_Communication: "Email communication is ",
              MyProfile_Email_Preference_Text:
                "Use toggle below if you'd like to turn on and off all email communications. This includes email alerts for your credit report and account information",
              MyProfile_Email_Preference_SuccessMessage:
                "Successfully updated your email settings",
              MyProfile_Cancel_Modal_Text: "Yes, cancel my account",
              MyProfile_Cancel_Account_Text:
                "Use the button below to cancel your MyCredit Guide<sup>®</sup> account. Canceling your account will not affect your credit report, but you will lose the ability to view the historical data and trends over the course of your enrollment.",
              MyProfile_Privacy_Policy: "Privacy Policy",
              MyProfile_Tooltip_Text:
                "For your security, we do not allow changing your username at this time. If you need help, please contact us.",
              MyProfile_Modal_Line1:
                "If you cancel, you will lose all account data and access to these features:",
              MyProfile_Modal_Line2:
                "An up-to-date overview of your current score and the key factors that you should be monitoring.",
              MyProfile_Modal_Alerts: "Alerts",
              MyProfile_Modal_Alerts_DWM: "Credit and Dark Web Alerts",
              MyProfile_Modal_Line3:
                "Keeping you in the know when something changes on your credit report.",
              MyProfile_Modal_Line3_DWM:
                "Know when critical changes occur on your credit report or when your personal information has been exposed on the dark web.",
              MyProfile_Modal_Line4:
                "A simple tool that allows you see how everyday decisions may influence your credit score before you make them.",
              MyProfile_Modal_Cancel_Account: "Cancel your account?",
              MyProfile_Modal_Credit_Snapshot: "Credit Snapshot",
              MyProfile_Modal_Score_Simulator: "Score Simulator",
              MyProfile_Disclaimer_Message:
                "<b>Please Note:</b> Making changes to the information below will only change the information stored for MyCredit Guide<sup>®</sup>. Changes at the TransUnion Credit Bureau or your service provider will need to be made independently.",
              MyProfile_Modal_Credit_Lock: "Credit Lock",
              MyProfile_Modal_Line5:
                "If your report is locked at the time you cancel your account, it will be unlocked.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_UnsubscribeEmail",
        type: "DCR",
        name: "default_en-US_UnsubscribeEmail",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/UnsubscribeEmail/data/en-US/UnsubscribeEmail",
          dcrContent: {
            Content: {
              Unsubscribe_Email_Preference: "Email Preference",
              Unsubscribe_SaveAll: "Save All",
              Unsubscribe_Cancel: "Cancel",
              Unsubscribe_GoBack: "Go Back",
              Unsubscribe_Alerts_Communication: "Alerts communication is ",
              Unsubscribe_Marketing_Communication:
                "Marketing communication is ",
              Unsubscribe_All_Communication:
                "Unsubscribe from all email sent to",
              Unsubscribe_Email_Preference_Text:
                "Choose the types of emails you want to receive from us.",
              Unsubscribe_Marketing_communication_Text:
                "Receive emails regarding offers and surveys.",
              Unsubscribe_Alerts_communication_Text:
                "Receive email alerts regarding changes to my credit report and scores, and the dark web.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_PasswordReset",
        type: "DCR",
        name: "default_en-US_PasswordReset",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/PasswordReset/data/en-US/PasswordReset",
          dcrContent: {
            Content: {
              PasswordReset_Title: "Password Reset",
              PasswordReset_Description:
                "To protect your privacy, please update your password",
              PasswordReset_TemporaryPasswordTitle: "Enter Temporary Password",
              PasswordReset_NewPasswordTitle: "Create New Password",
              PasswordReset_Button: "Update Password",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_PasswordResetSuccess",
        type: "DCR",
        name: "default_en-US_PasswordResetSuccess",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/PasswordResetSuccess/data/en-US/PasswordResetSuccess",
          dcrContent: {
            Content: {
              PasswordResetSuccess_Title: "Password Reset Success",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Generic",
        type: "DCR",
        name: "default_en-US_Generic",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Generic/data/en-US/Generic",
          dcrContent: {
            Content: {
              Generic_Continue: "Continue",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Generic",
        type: "DCR",
        name: "default_en-US_Generic",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Generic/data/en-US/Generic",
          dcrContent: {
            Content: {
              Generic_Continue2: "Accept and Continue",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Error",
        type: "DCR",
        name: "default_en-US_Error",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Error/data/en-US/Error",
          dcrContent: {
            Content: {
              Error_MessageID: "Message ID:",
              Error_Title_required_enterprise_parameter:
                "We're having trouble with your request and apologize for the inconvenience.",
              Error_Content_required_enterprise_parameter:
                "<strong><b>What to do now</b></strong><br/> Please try again in a few minutes, and if you're still having trouble, reach out to customer service:",
              Error_Title_invalid_offer_id:
                "We're having trouble with your request and apologize for the inconvenience.",
              Error_Content_invalid_offer_id:
                "<strong><b>What to do now</b></strong><br/> Please try again in a few minutes, and if you're still having trouble, reach out to customer service:",
              Error_Title_score_thin:
                "Hi there, it looks like we're unable to provide you with a credit score at this moment.",
              Error_Content_score_thin:
                "<strong><b>What to do now</b></strong><br/> If you are new to credit and looking to build up your credit profile, we have several educational articles to guide you <a href='/cvd/#/articles?section=Credit%20Basics#Learn%20How%20To%20Get%20Credit'>here.</a>",
              Error_Title_score_dec:
                "Hi there, it looks like we're unable to provide you with a credit score at this moment.",
              Error_Content_score_dec:
                "<strong><b>What to do now</b></strong><br/> If you are new to credit and looking to build up your credit profile, we have several educational articles to guide you <a href='/cvd/#/articles?section=Credit%20Basics#Learn%20How%20To%20Get%20Credit'>here.</a>",
              Error_Content_Score_Info_score_dec:
                "This might be due to you not having enough of a credit history for us to calculate a score. <br> <br> There are various types of credit scores, and lenders use a variety of different types of credit scores to make lending decisions. The credit score used for this dashboard is VantageScore 3.0 model based on TransUnion data.",
              Error_Content_Score_Info_score_thin:
                "This might be due to you not having enough of a credit history for us to calculate a score. <br> <br> There are various types of credit scores, and lenders use a variety of different types of credit scores to make lending decisions. The credit score used for this dashboard is VantageScore 3.0 model based on TransUnion data.",
              Error_Content_Score_Contact_Us_score_dec:
                "If you feel that you do have established credit please contact us:",
              Error_Content_Score_Contact_Us_score_thin:
                "If you feel that you do have established credit please contact us:",
              Error_Title_login_locked:
                "We were unable to verify your identity.",
              Error_Content_login_locked:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_customer_locked:
                "We were unable to verify your identity.",
              Error_Content_customer_locked:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_too_many_login_attempt:
                "We were unable to verify your identity.",
              Error_Content_too_many_login_attempt:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_generic:
                "We're having trouble with your request and apologize for the inconvenience.",
              Error_Content_generic:
                "<strong><b>What to do now</b></strong><br/> Please try again in a few minutes, and if you're still having trouble, reach out to customer service:",
              Error_Title_invalid_client_identity:
                "We can't seem to match your TransUnion credit report with the information you entered.",
              Error_Content_invalid_client_identity:
                "<strong><b>What to do now</b></strong><br/> To update your account, please reach out to customer service:",
              Error_Title_unexpected_error:
                "We're having trouble with your request and apologize for the inconvenience.",
              Error_Content_unexpected_error:
                "<strong><b>What to do now</b></strong><br/> Please try again in a few minutes, and if you're still having trouble, reach out to customer service:",
              Error_Title_ssn_exists_active_online: "Account Exists",
              Error_Content_ssn_exists_active_online:
                "It looks like you've already enrolled.<br/> <br/> <strong><b>What to do now</b></strong><br/> Please <a style='text-decoration: underline;' href='/enroll-step-1/'> log in </a> now and complete your request.  If you forgot your login information, use the 'I forgot my username and password' link on the Member Login page. If you still are having trouble, please give us a call:",
              Error_Title_ssn_exists_pending_online: "Account Exists",
              Error_Content_ssn_exists_pending_online:
                'It looks like you\'ve already enrolled.<br/> <strong><b>What to do now</b></strong><br/> Please login now and complete your request.  If you forgot your login information, use the "I forgot my username and password" link on the Member Login page. If you still are having trouble, please give us a call:',
              Error_Title_ssn_exisits_active_online: "Account Exists",
              Error_Content_ssn_exisits_active_online:
                "It looks like you've already enrolled.<br/> <br/> <strong>What to do now</strong><br/> Please <a style='text-decoration: underline;' href='/enroll-step-1/'> log in </a> now and complete your request.  If you forgot your login information, use the 'I forgot my username and password' link on the Member Login page. If you still are having trouble, please give us a call:",
              Error_Title_ssn_exisits_pending_online: "Account Exists",
              Error_Content_ssn_exisits_pending_online:
                'It looks like you\'ve already enrolled.<br/> <strong>What to do now</strong><br/> Please login now and complete your request.  If you forgot your login information, use the "I forgot my username and password" link on the Member Login page. If you still are having trouble, please give us a call:',
              Error_Title_thin_file: "We were unable to verify your identity.",
              Error_Content_thin_file:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_age_restriction:
                "It looks like you may be new to credit or may not have enough of a credit history to generate a credit score.",
              Error_Content_age_restriction:
                "<strong><b>What to do now</b></strong><br/> If you're over 18, please give us a call:",
              Error_Title_no_active_enrollment:
                "It looks like your subscription was canceled",
              Error_Content_no_active_enrollment:
                "<strong><b>What to do now</b></strong><br/> If you'd like to re-enroll for free, <a style='text-decoration: underline;' href='/enroll-step-1/'>start here</a>",
              Error_Title_404:
                "We can't seem to find the page you're looking for!",
              Error_Content_404:
                "Here are some helpful links instead.<ul><li><a href='/'>Go Home</a></li></ul>",
              Error_Title_iv_failed: "We were unable to verify your identity.",
              Error_Content_iv_failed:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_missing_blackbox:
                "We were unable to verify your identity.",
              Error_Content_missing_blackbox:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_deceased:
                "Sorry, but the information you've provided doesn't match our records. We understand this is an inconvenience, but take the privacy of your personal information very seriously.",
              Error_Content_deceased:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service:",
              Error_Title_no_hit:
                "We can't seem to match your TransUnion credit report with the information you entered.",
              Error_Content_no_hit:
                "<strong><b>What to do now</b></strong><br/> To update your account, please reach out to customer service:",
              Error_Title_blacklisted_customer:
                "We were unable to verify your identity.",
              Error_Content_blacklisted_customer:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_bureau_unavailable:
                "We were unable to pull your credit report just now and apologize for the inconvenience.",
              Error_Content_bureau_unavailable:
                "<strong><b>What to do now</b></strong><br/> Please try again in an hour, and if you're still having trouble, please reach out to customer service:",
              Error_Title_iv_system: "We were unable to verify your identity.",
              Error_Content_iv_system:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_too_many_attempts:
                "Your account has been temporarily suspended.",
              Error_Content_too_many_attempts:
                "It looks like you are having trouble with your username and or password.<br/> <strong><b>What to do now</b></strong><br/> Please reach out to customer service to gain access:",
              Error_Title_timeout: "You've been logged out.",
              Error_Content_timeout:
                "In order to protect your privacy we automatically log you out after 15 minutes of inactivity. <br/><br/><strong><b>What to do now</b></strong><br/> Please <a style='text-decoration: underline;' href='/enroll-step-1/'>log in </a> again and pickup where you left off.",
              Error_Title_no_monitoring: "You've been logged out.",
              Error_Content_no_monitoring:
                "<strong><b>What to do now</b></strong><br/> Please try again in a few minutes, and if you're still having trouble, reach out to customer service:",
              Error_Title_canceled_allow_reenroll:
                "It looks like your subscription was canceled",
              Error_Content_canceled_allow_reenroll:
                "<strong><b>What to do now</b></strong><br/> If you'd like to re-enroll for free, <a style='text-decoration: underline;' href='/cvd/#/enroll-step-1/'>start here</a>",
              Error_Title_sso_auth_required:
                "We were unable to verify your identity.",
              Error_Content_sso_auth_required:
                "<strong>What to do now</strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_fulfillment_not_found:
                "We were unable to verify your identity.",
              Error_Content_fulfillment_not_found:
                "<strong>What to do now</strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_no_activefulfillment:
                "We were unable to verify your identity.",
              Error_Content_no_activefulfillment:
                "<strong>What to do now</strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_multiple_hits:
                "We were unable to verify your identity.",
              Error_Content_multiple_hits:
                "<strong>What to do now</strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_partner_cust_code_not_found:
                "Oops!  It looks like you potentially attempted to access your dashboard from a different link than which you enrolled.  Please go back and access via the original link.  ",
              Error_Content_partner_cust_code_not_found:
                "<strong>What to do now</strong><br/> If you are unable to access or find the original link, please contact customer service and have them <strong>deactivate</strong> your original account so you can access your score via this link.",
              Error_Title_insufficient_request_info:
                "We were unable to verify your identity.",
              Error_Content_insufficient_request_info:
                "<strong>What to do now</strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_name_zip_exists:
                "We were unable to verify your identity.",
              Error_Content_name_zip_exists:
                "<strong>What to do now</strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_site_not_found: "Site is currently unavailable.",
              Error_Content_site_not_found:
                "<strong>What to do now</strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Title_invalid_applicant_challenge:
                "We were unable to verify your identity.",
              Error_Content_invalid_applicant_challenge:
                "<strong><b>What to do now</b></strong><br/> Please reach out to customer service at the number below, and be prepared to answer a few questions about your credit history.",
              Error_Message_IncorrectInfo:
                "It looks like the information you've entered is incorrect, please try again.",
              Error_Title_sso_timeout:
                "Session Timeout: Your online session expired.",
              Error_Content_sso_timeout:
                "To protect your privacy, sessions are ended after 15 minutes of inactivity. We apologize for the inconvenience.<br/><b>What to do now</b>:<br/> Please access MyCredit Guide<sup>®</sup> again from your provider.",
              Error_Content_add_age_restriction:
                "<br/>If you're not yet 18 years of age, head on over to our credit education center to get a head start on healthy credit use.,",
              Error_Title_sso_deceased: "Cannot be fulfilled at this time",
              Error_Content_sso_deceased:
                "Thank you for your interest in MyCredit Guide<sup>®</sup>.<br/><br/>We are sorry to inform you that we are unable to fulfill your credit products at this time.  The information you provided does not match what we currently have in our records.<br/><br/><b>What to do now</b>:<br/><br/>We apologize for any inconvenience this has caused.  For help with your order, please contact any of our customer service representatives below . They will be able to walk you through the order process and grant you access to your credit data.",
              Error_Title_sso_saml_issue: "Issue with Your  Membership",
              Error_Content_sso_saml_issue:
                "Unfortunately, MyCredit Guide<sup>®</sup> has encountered an issue with your membership information. We apologize for the inconvenience.<br/><br/><b>What to do now</b>:<br/><br/> Please contact any of our customer service representatives:<br/>  ",
              Error_Title_enroll_flow_issue:
                "No Credit Bureau Record Found: The system could not retrieve your credit report from the credit bureau(s).",
              Error_Content_enroll_flow_issue:
                "The credit bureau(s) have not been able to locate a record matching the information given by your provider. If your personal information (name, Social Security Number, address) has changed recently, the bureau(s) may not have the most current information.<br/><br/><b>What to do now</b>: <br/><br/>Change your personal information in your Account (with your Provider) and try your request again.<br/><br/>See our <a style='text-decoration: underline;'>Credit Education Center </a>to learn more about Credit. Even if you aren't able to enroll, you have access to this valuable resource for credit guidance.",
              Error_Title_pcc_exist_error:
                "We're having trouble with your request and apologize for the inconvenience.",
              Error_Content_pcc_exist_error:
                "<strong><b>What to do now</b></strong><br/> Please try again in a few minutes, and if you're still having trouble, reach out to customer service:",
              Error_Title_PII_Saml:
                "We're having trouble with your request and apologize for the inconvenience.",
              Error_Content_PII_Saml:
                "<strong><b>What to do now</b></strong><br/> Please try again in a few minutes, and if you're still having trouble, reach out to customer service:",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUCI1_en-US_EnrollCancellation",
        type: "DCR",
        name: "TUCI1_en-US_EnrollCancellation",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/TUCI1/EnrollCancellation/data/en-US/EnrollCancellation",
          dcrContent: {
            Content: {
              EnrollCancellation_Title: "Cancellation Confirmed",
              EnrollCancellation_Description:
                "Your My TrueIdentity cancellation has been processed.<br/><br/>As a friendly reminder, if your credit report was locked at the time of cancellation, it is now unlocked.<br/><br/> If you are looking for alternative to keep it protected, consider placing a <a href='https://www.transunion.com/credit-freeze' target='_blank' aria-label='Free credit freeze'>free credit freeze</a>.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUCI1_en-US_CreditLock",
        type: "DCR",
        name: "TUCI1_en-US_US_CreditLock",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUCI1/CreditLock/data/en-US/CreditLock",
          dcrContent: {
            Content: {
              CreditLock_Widget_Link: "More Details",
              CreditLock_Widget_Link_Path: "/protection-support",
              CreditLock_Widget_Title: "Credit Lock",
              CreditLock_Widget_Tooltip_Title: "Credit Lock",
              CreditLock_Widget_Toggle_Option1: "Unlocked",
              CreditLock_Widget_Toggle_Option1_icon: "unlock",
              CreditLock_Widget_Toggle_Option2: "Locked",
              CreditLock_Widget_Toggle_Option2_icon: "lock",
              CreditLock_Widget_Tooltip_Content:
                "Credit Lock gives you the ability to lock & unlock your TransUnion credit report at the touch of a button — putting you in control of your credit. <br/><br/>Locking your credit report blocks creditors and lenders (when you apply for loans) from looking at it, which may also serve as a critical step in preventing an identity thief from applying for credit in your name.",
              CreditLock_Widget_Unlocked_Content:
                "Your TransUnion credit report is currently unlocked.<i> Lock your report for protection when you're not planning on applying for new credit cards or loans.</em>",
              CreditLock_Widget_Locked_Content:
                "Your TransUnion credit report is currently locked.<i> Unlock your credit when you're applying for new credit cards or loans.</i>",
              CreditLock_Widget_Frozen_Content:
                "Our records show you have placed a TransUnion security freeze on your credit report which makes credit lock unavailable.  You can learn how to remove the security freeze <a href='https://www.transunion.com/credit-freeze' target='_blank'>here</a>.",
              CreditLock_Widget_Error_Content:
                "We apologize, but credit lock is unavailable at this moment. Please check back at a later time. ",
              CreditLock_Widget_Modal_Unlocked_Content:
                "<p>Locking your TransUnion Credit Report means that you will be:</p><ul><li>Prevent others from looking at your TransUnion Credit Report</li><li>Help stop ID thieves from obtaining credit in your name</li></ul><p><b>Note:</b> Changing your lock status may take up to 5 minutes to process.</p>",
              CreditLock_Widget_Modal_Unlocked_Button: "Lock Report",
              CreditLock_Widget_Modal_Locked_Content:
                "<p>Unlocking your TransUnion Credit Report means that you will be:</p><ul><li>Available for creditors, landlords & employers to view</li><li>Accessible to lenders should you apply for credit</li></ul><p><b>Note:</b> Changing your lock status may take up to 5 minutes to process.</p>",
              CreditLock_Widget_Modal_Locked_Button: "Unlock Report",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUCI1_en-US_MyProfile",
        type: "DCR",
        name: "TUCI1_en-US_MyProfile",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUCI1/MyProfile/data/en-US/MyProfile",
          dcrContent: {
            Content: {
              MyProfile_Cancel_Account_Text:
                "Use the button below to cancel your Mission: Credit Confidence account. Canceling your account will not affect your credit report, but you will lose the ability to view the historical data and trends over the course of your enrollment. <br/><br/> If your credit report is <a href='/cvd/#/protection-support' target='_self' aria-label='Locked'>locked</a> at the time you cancel your account with My TrueIdentity, it will be unlocked",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUCI1_en-US_Error",
        type: "DCR",
        name: "TUCI1_en-US_Error",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUCI1/Error/data/en-US/Error",
          dcrContent: {
            Content: {
              Error_MessageID: "Message ID:",
              Error_Title_canceled_allow_reenroll:
                "It looks like your subscription was canceled",
              Error_Content_canceled_allow_reenroll:
                "<strong><b>What to do now</b></strong><br/> If you'd like to re-enroll for free, <a style='text-decoration: underline;' href='/cvd/?enterprise=TUCI1#/'>start here</a>",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Alerts",
        type: "DCR",
        name: "default_en-US_Alerts",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Alerts/data/en-US/Alerts",
          dcrContent: {
            Content: {
              Alerts_Header: "Alerts",
              Alerts_Tooltip:
                "MyCredit Guide<sup>®</sup> alerts you to changes to your credit report that could indicate potential signs of identity theft, fraud or inaccuracies that could damage your score. We will be monitoring for any critical changes such as new account, inquiries or address changes.",
              Alerts_All: "All Alerts",
              Alerts_Unread: "Unread",
              Alerts_New: "Newest",
              Alerts_Old: "Oldest",
              Alerts_ReportTitle: "See something that seems off?",
              Alerts_ReportButton: "Let's fix it!",
              Alerts_InquirerName: "Inquirer Name",
              Alerts_AlertName_SubscriberName: "Subscriber Name",
              Alerts_PhoneNumber: "Phone Number",
              Alerts_IndustryType: "Industry Type",
              Alerts_InquirerAddress: "Inquirer Address",
              Alerts_InquireeAddress: "Inquiree Address",
              Alerts_FirstName: "First Name",
              Alerts_MiddleName: "Middle Name",
              Alerts_LastName: "Last Name",
              Alerts_CourtName: "Court Name",
              Alerts_CreditorType: "Creditor Type",
              Alerts_CaseNumber: "Case Number",
              Alerts_AccountNumber: "Account Number",
              Alerts_InquiryIntent: "Inquiry Intent",
              Alerts_OriginalAmount: "Original Amount",
              Alerts_Status: "Status",
              Alerts_NoneTitle: "No alerts yet!",
              Alerts_AlertType: "Alert Type",
              Alerts_CreditLimit: "Credit Limit",
              Alerts_NoneTitle: "No alerts yet!",
              Alerts_NoneBody:
                "Check back here for more information on any changes to your credit report.",
              Alerts_NoDarkWebTitle: "No alerts yet!",
              Alerts_NoDarkWebBody:
                "Check back here for more information on any changes to your credit report.",
              Alerts_AlertName_ClosedDate: "Closed Date",
              Alerts_AlertName_ChangeBy: "Changed By",
              Alerts_AlertName_OldScore: "Old Score",
              Alerts_AlertName_Score: "Score",
              Alerts_AlertName_CreditLimit: "Credit Limit",
              Alerts_AlertName_DateReported: "Date Reported",
              Alerts_AlertName_DatePaid: "Date Paid",
              Alerts_AlertName_DateVerified: "Date Verified",
              Alerts_AlertName_Balance: "Balance",
              Alerts_AlertName_OpenDate: "Open Date",
              Alerts_AlertName_TradeBalance: "Trade Balance",
              Alerts_AlertName_NewForeclosureDate: "New Foreclosure Date",
              Alerts_AlertName_DerogatoryAmount: "Derogatory Amount",
              Alerts_AlertName_TotalBalance: "Total balance",
              Alerts_AlertName_NewChargeOffDate: "New Charge Off Date",
              Alerts_AlertName_NewInquiry: "New Inquiry",
              Alerts_AlertName_RecentChargeOffBalance:
                "Recent Charge Off Balance",
              Alerts_AlertName_Date: "Date",
              Alerts_NewInquiry_Title: "New Inquiry",
              Alerts_NewInquiry_Description:
                "A new inquiry has appeared on your credit report.",
              Alerts_Inquiry_Title: "New Inquiry",
              Alerts_Inquiry_Description:
                "A new inquiry has appeared on your credit report.",
              Alerts_NewAccount_Title: "New Account",
              Alerts_NewAccount_Description:
                "A new account has appeared on your credit report.",
              Alerts_NewBankruptcy_Title: "New Bankruptcy",
              Alerts_NewBankruptcy_Description:
                "A new bankruptcy has appeared on your credit report.",
              Alerts_NewPublicRecord_Title: "New Public Record",
              Alerts_NewPublicRecord_Description:
                "A new public record has appeared on your credit report.",
              Alerts_NewAddress_Title: "New Address",
              Alerts_NewAddress_Description:
                "A new address has appeared on your credit report.",
              Alerts_PublicRecordBankruptcy_Title: "Public Record Bankruptcy",
              Alerts_PublicRecordBankruptcy_Description:
                "A public record bankruptcy has appeared on your credit report.",
              Alerts_Settlement_Title: "Settlement",
              Alerts_Settlement_Description:
                "A settlement has appeared on your credit report.",
              Alerts_NameChange_Title: "Name Change",
              Alerts_NameChange_Description:
                "A new change has appeared on your credit report.",
              Alerts_BankruptcyChange_Title: "Bankruptcy Change",
              Alerts_BankruptcyChange_Description:
                "A bankruptcy change has appeared on your credit report.",
              Alerts_NewCollection_Title: "New Collection",
              Alerts_NewCollection_Description:
                "A new collection has appeared on your credit report.",
              Alerts_CollectionChange_Title: "Collection Change",
              Alerts_CollectionChange_Description:
                "A collection change has appeared on your credit report.",
              Alerts_NewSuitorJudgment_Title: "New Suit or Judgment",
              Alerts_NewSuitorJudgment_Description:
                "A new suit or judgement has appeared on your credit report.",
              Alerts_SuitorJudgmentChange_Title: "Suit or Judgment Change",
              Alerts_SuitorJudgmentChange_Description:
                "A suit or judgement change has appeared on your credit report.",
              Alerts_NewTaxLien_Title: "New Tax Lien",
              Alerts_NewTaxLien_Description:
                "A new tax lien has appeared on your credit report.",
              Alerts_TaxLienChange_Title: "Tax Lien Change",
              Alerts_TaxLienChange_Description:
                "A tax lien change has appeared on your credit report.",
              Alerts_FraudAlert_Title: "Fraud Alert",
              Alerts_FraudAlert_Description:
                "A fraud alert has appeared on your credit report. (Please note: the presence of a fraud alert may be repeatedly reported while it is still on your file.)",
              Alerts_NewEmployment_Title: "New Employment",
              Alerts_NewEmployment_Description:
                "New employment information has appeared on your credit report.",
              Alerts_DelinquentAccount_Title: "Delinquent Account",
              Alerts_DelinquentAccount_Description:
                "A delinquency has appeared on your credit report.",
              Alerts_Delinquent_Title: "Delinquent Account",
              Alerts_Delinquent_Description:
                "A delinquency has appeared on your credit report.",
              Alerts_ImprovedAccount_Title: "Improved Account",
              Alerts_ImprovedAccount_Description:
                "An improvement to one of your accounts has appeared on your credit report.",
              Alerts_VantageScoreDecrease_Title: "Credit Score Decrease",
              Alerts_VantageScoreDecrease_Description:
                "Your score has decreased by 10 or more points.",
              Alerts_VantageScoreIncrease_Title: "Credit Score Increase",
              Alerts_VantageScoreIncrease_Description:
                "Your score has increased by 10 or more points.",
              Alerts_LostStolenCard_Title: "Lost or Stolen Card",
              Alerts_LostStolenCard_Description:
                "An account has been identified as lost/stolen.",
              Alerts_LostOrStolenCard_Title: "Lost or Stolen Card",
              Alerts_LostOrStolenCard_Description:
                "An account has been identified as lost/stolen.",
              Alerts_ClosedTradeLines_Title: "Account Closed",
              Alerts_ClosedTradeLines_Description:
                "An account has been identified as Closed by the creditor or consumer.",
              Alerts_PaidTradelines_Title: "Account Paid Off",
              Alerts_PaidTradelines_Description:
                "An account has been identified as Paid. This account reflects a new balance of zero and includes a paid out date.",
              Alerts_AuthorizedUserTrades_Title:
                "Authorized User on New Account",
              Alerts_AuthorizedUserTrades_Description:
                "A new account has been added to your credit report and lists you as an authorized user.",
              Alerts_NumberofCollectionsExcludingMedical_Title:
                "New Non-Medical Collection",
              Alerts_NumberofCollectionsExcludingMedical_Description:
                "A non-medical account has been identified to be in collections and has been reported as delinquent for non-payment.",
              Alerts_NewForeclosure_Title: "New Foreclosure",
              Alerts_NewForeclosure_Description:
                "An acount has been identified as a Foreclosure.",
              Alerts_PaidCollections_Title: "Collection Account Paid Off",
              Alerts_PaidCollections_Description:
                "A collections account is now considered to have been paid out and balance is 0.",
              Alerts_IncreaseinCollectionBalances_Title:
                "Collections Balance Increase",
              Alerts_IncreaseinCollectionBalances_Description:
                "The total balance for accounts in collections has increased.",
              Alerts_DecreaseinCollectionBalances_Title:
                "Collections Balance Decrease",
              Alerts_DecreaseinCollectionBalances_Description:
                "The total balance for accounts in collections has decreased.",
              "Alerts_NewCharge-off_Title": "Account Charged Off",
              "Alerts_NewCharge-off_Description":
                "An account has been identified as Charged Off. This account was either charged off as a loss by the company with whom you had credit, or that the account was sent to a collection agency for payment.",
              Alerts_RetailCardGoesOverCreditLimit_Title:
                "Retail Card Over Limit",
              Alerts_RetailCardGoesOverCreditLimit_Description:
                "An existing retail card account indicates that the balance the creditor reported is higher than the credit limit associated with that account.",
              Alerts_BankCardGoesOverCreditLimit_Title: "Bank Card Over Limit",
              Alerts_BankCardGoesOverCreditLimit_Description:
                "An existing bankcard indicates that the balance the creditor reported is higher than the credit limit associated with that bankcard.",
              Alerts_NewAutoLease_Title: "New Auto Lease",
              Alerts_NewAutoLease_Description:
                "A new auto lease account has been added to your report.",
              "Alerts_VantageScore3.0DecreaseBy20_Title":
                "Credit Score Decrease",
              "Alerts_VantageScore3.0DecreaseBy20_Description":
                "Your score has decreased by 20 or more points.",
              "Alerts_VantageScore3.0IncreaseBy20_Title":
                "Credit Score Increase",
              "Alerts_VantageScore3.0IncreaseBy20_Description":
                "Your score has increased by 20 or more points.",
              Alerts_BankCardandRetailCardCreditLimitChange_Title:
                "Card Limit Changed",
              Alerts_BankCardandRetailCardCreditLimitChange_Description: " ",
              Alerts_NoDescription: "No description available.",
              Alerts_Credit: "Credit",
              Alerts_DateFound: "Date Found",
              Alerts_Error: "There was an error loading your alerts",
              Alerts_Protection: "Protection",
              Alerts_YourCompromisedData: "Your compromised data:",
              Alerts_NewTrade_Title: "New Trade",
              Alerts_NewTrade_Description:
                "A new account has appeared on your credit report.",
              Alerts_NewUnconfirmedAddress_Title: "New Unconfirmed Address",
              Alerts_NewUnconfirmedAddress_Description:
                "A new address has appeared on your credit report.",
              Alerts_Deceased_Title: "Deceased",
              Alerts_Deceased_Description:
                "You have been reported as being deceased.",
              Alerts_LiensAndJudgments_Title: "Liens And Judgments",
              Alerts_LiensAndJudgments_Description:
                "A lien or judgment has appeared on your credit report.",
              Alerts_SuitOrJudgmentChange_Title: "Suit Or Judgment Change",
              Alerts_SuitOrJudgmentChange_Description:
                "A suit or judgment change has appeared on your credit report.",
              Alerts_NewSuitOrJudgment_Title: "New Suit Or Judgment",
              Alerts_NewSuitOrJudgment_Description:
                "A new suit or judgment has appeared on your credit report.",
              Alerts_TradelineBankruptcy_Title: "Tradeline Bankruptcy",
              Alerts_TradelineBankruptcy_Description:
                "One of your accounts has been involved in a bankruptcy.",
              Alerts_FraudOrVictimStatement_Title: "Fraud or Victim Statement",
              Alerts_FraudOrVictimStatement_Description:
                "A fraud alert or victim statement has appeared on your credit report.",
              Alerts_SkipCannotLocate_Title: "Cannot Locate",
              Alerts_SkipCannotLocate_Description:
                "A creditor reports that they cannot locate you.",
              Alerts_CardOverLimit_Title: "Card Over Limit",
              Alerts_CardOverLimit_Description:
                "One of your cards is over its credit limit.",
              Alerts_MajorDerogatory_Title: "Major Derogatory Account",
              Alerts_MajorDerogatory_Description:
                "A derogatory account has appeared on your credit report.",
              Alerts_ChangeAddress_Title: "Change Address",
              Alerts_ChangeAddress_Description:
                "An address change has appeared on your credit report.",
              Alerts_ChangeOfAddress_Title: "Change Of Address",
              Alerts_ChangeOfAddress_Description:
                "An address change has appeared on your credit report.",
              Alerts_AccountInformation_Title: "Account Information",
              Alerts_AccountInformation_Description:
                "Your Equifax credit report indicates there has been a change to this account.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Dashboard",
        type: "DCR",
        name: "default_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_Title: "MyCredit Guide<sup>®</sup>",
              Dashboard_NiceWork: ", nice work!",
              Dashboard_ViewYour: "View your:",
              Dashboard_BlogWidget_Title: "From Our Credit Guide Blog",
              Dashboard_BlogWidget_ViewMore: "View More",
              Dashboard_BlogWidget_MinRead: "min read",
              Dashboard_BlogWidget_PersonalizationTitleInitial:
                "Let's learn more about you",
              Dashboard_BlogWidget_PersonalizationTextInitial:
                "Tell us your needs and financial goals to customize your experience.",
              Dashboard_BlogWidget_PersonalizationTitleUpdate:
                "Are your goals up-to-date?",
              Dashboard_BlogWidget_PersonalizationTextUpdate:
                "Stay focused on new goals by updating your profile.",
              Dashboard_BlogWidget_PersonalizationLink: "Update my goals",
              Dashboard_BlogWidget_PersonalizationImage:
                "PersonalizationGuidingContent.svg",
              Dashboard_BlogWidget_PersonalizationImageAltText:
                "Icon of a person recommending dashboard profile customization",
              Dashboard_CreditScoreTab: "Credit Score",
              Dashboard_ScoreHistoryTab: "Score History",
              Dashboard_NextUpdateMessage: "Next available update on",
              Dashboard_WhereYouStand: "Where You Stand Nationally",
              Dashboard_WhereYouStand_Tooltip:
                "This percentage figure shows how the score based on your TransUnion credit file compares to others' in the US. So, for example, a score of 810 with a population comparison percentage of 88% means it's higher than 88% of other Americans' scores.",
              Dashboard_SetAGoalHeader: "Set A Goal For Your Score!",
              Dashboard_SetAGoalText:
                "Score Goals\u2122 will point you in the right direction with personalized recommendations to help you achieve your goal.",
              Dashboard_SetAGoal_Button: "Set A Goal",
              Dashboard_SimulateHeader: "Simulate Your Credit Score",
              Dashboard_SimulateText:
                "See how specific credit choices may affect your credit score",
              Dashboard_Simulate_Link: "Start Simulating",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#003b73",
              Dashboard_EmailConfirmationNotification_Text:
                "<b>Email up-to-date?</b> Don't miss out on important alerts about your credit report and score",
              Dashboard_EmailConfirmationNotification_CTAText:
                "View Current Email",
              Dashboard_EmailConfirmationNotification_CTAAction: "/my-profile",
              Dashboard_EmailConfirmationNotification_Icon: "mail",
              Dashboard_DynamicCompass_NotSet_Title: "Set A Score Goal Today",
              Dashboard_DynamicCompass_NotSet_Content:
                "With a higher score you could get access to better credit offers and even increase your approval odds.",
              Dashboard_DynamicCompass_NotSet_ButtonText: "Get Started",
              Dashboard_DynamicCompass_Set_Title: "Let's get started!",
              Dashboard_DynamicCompass_Set_Content:
                "Now that you've set your goal, you can track progress here.",
              Dashboard_DynamicCompass_Set_Image: "get_started.svg",
              Dashboard_DynamicCompass_Set_ScoreTitle: "Goal Score",
              Dashboard_DynamicCompass_Set_GoalStart: "Start Date",
              Dashboard_DynamicCompass_Set_CurrentScore: "Current Score:",
              Dashboard_DynamicCompass_Set_PointsRemaining: "Points to Go:",
              Dashboard_DynamicCompass_Set_Increase_Title:
                "Keep up the great work!",
              Dashboard_DynamicCompass_Set_Increase_Content:
                "Every point earned is a step in the right direction.",
              Dashboard_DynamicCompass_Set_Increase_Image: "goal_set.svg",
              Dashboard_DynamicCompass_Set_Decrease_Title:
                "A little set back is ok!",
              Dashboard_DynamicCompass_Set_Decrease_Content:
                "Use your recommendations below to get back on track.",
              Dashboard_DynamicCompass_Set_Decrease_Image: "set_back.svg",
              Dashboard_DynamicCompass_Set_Congratulations_Title:
                "You achieved your goal!",
              Dashboard_DynamicCompass_Set_Congratulations_Content:
                "You did it! All the hard work has paid off over last <b>{monthDiff}</b> <b>months</b>.",
              Dashboard_DynamicCompass_Set_Congratulations_Image:
                "congrats_banner.svg",
              Dashboard_DynamicCompass_Default_Title:
                "No goal updates right now",
              Dashboard_DynamicCompass_Default_Content:
                "Keep using our recommendations and check back later.",
              Dashboard_DynamicCompass_NoGoalSaving_Title: "Great goal!",
              Dashboard_DynamicCompass_NoGoalSaving_Content:
                "Use our recommendations to help make it happen.",
              Dashboard_DynamicCompass_NoGoalSaving_Image: "compass_cta.svg",
              Dashboard_ScoreTab_1Month: "1 Month",
              Dashboard_ScoreTab_6Month: "6 Month",
              Dashboard_ScoreTab_1Year: "1 Year",
              Dashboard_DynamicCompass_Default_Image:
                "Dashboard_CompassCTA.svg",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Ranking",
        type: "DCR",
        name: "default_en-US_Ranking",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Ranking/data/en-US/Ranking",
          dcrContent: {
            Content: {
              Ranking_Header: "Where You Stand Nationally",
              Ranking_Tooltip: "Where You Stand Nationally Tooltip Text",
              Ranking_Comparison: "Your credit score ranks higher than ",
              Ranking_Group: "of Americans.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_SSOTerms",
        type: "DCR",
        name: "default_en-US_SSOTerms",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/SSOTerms/data/en-US/SSOTerms",
          dcrContent: {
            Content: {
              SSOTerms_Title: "It's your credit information. See it for FREE.",
              SSOTerms_Content_Email: "",
              SSOTerms_Content:
                "Your acceptance is required to access Mission: Credit Confidence",
              SSOTerms_Content1: "",
              SSOTerms_Content2_1: "",
              SSOTerms_Content2:
                "You understand that by clicking on the 'I Accept and Continue' button below, you agree to TransUnion Consumer Interactive's <a href='/cvd/#/legal?tab=Terms-and-Conditions'>Terms and Conditions</a> and you are providing 'Written Instructions' authorizing TransUnion Interactive, Inc. to update information from your personal credit profile from TransUnion in order to confirm your identity and display your credit data to you.<br/>",
              SSOTerms_Content3:
                "<strong>Almost there!</strong><br/> After you verify your identity, you will receive your credit score & trending. Plus: Score Simulator & Credit Education.<br/>",
              SSO_Welcome_Image: "",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_LoginHelp",
        type: "DCR",
        name: "default_en-US_LoginHelp",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/LoginHelp/data/en-US/LoginHelp",
          dcrContent: {
            Content: {
              LoginHelp_Title: "Log In Help",
              LoginHelp_Step1Title: "Step 1",
              LoginHelp_Step1Description: "Enter Personal Info",
              LoginHelp_Step2Title: "Step 2",
              LoginHelp_Step2Description: "Confirm Identity",
              LoginHelp_Step3Title: "Step 3",
              LoginHelp_Step3Description: "Change Password",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_LoginHelp1",
        type: "DCR",
        name: "default_en-US_LoginHelp1",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/LoginHelp1/data/en-US/LoginHelp1",
          dcrContent: {
            Content: {
              LoginHelp1_Description:
                "Please confirm your identity and change your login information before accessing your account.",
              LoginHelp1_PersonalInfo: "Personal Info",
              LoginHelp1_SSN: "SSN",
              LoginHelp1_LastName: "Last Name",
              LoginHelp1_ButtonText: "Continue",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_LoginHelp2",
        type: "DCR",
        name: "default_en-US_LoginHelp2",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/LoginHelp2/data/en-US/LoginHelp2",
          dcrContent: {
            Content: {
              LoginHelp2_Description:
                "Please confirm your identity and change your login information before accessing your account.",
              LoginHelp2_SecurityQuestion: "Security Question",
              LoginHelp2_Answer: "Answer (case sensitive)",
              LoginHelp2_DOB: "Date of Birth (MM / DD / YYYY)",
              LoginHelp2_ButtonText: "Continue",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_LoginHelp3",
        type: "DCR",
        name: "default_en-US_LoginHelp3",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/LoginHelp3/data/en-US/LoginHelp3",
          dcrContent: {
            Content: {
              LoginHelp3_Description:
                "Please confirm your identity and change your login information before accessing your account",
              LoginHelp3_CreateNewPassword: "Create New Password",
              LoginHelp3_YourUsername: "Your Username:",
              LoginHelp3_NewPassword: "New Password",
              LoginHelp3_ButtonText: "Continue",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_ScoreFactors",
        type: "DCR",
        name: "default_en-US_ScoreFactors",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/ScoreFactors/data/en-US/ScoreFactors",
          dcrContent: {
            Content: {
              ScoreFactors_Title: "Score Factors",
              ScoreFactors_Tooltip:
                "The VantageScore\u00AE 3.0 and grade is based primarily on a 24-month review of your credit report. It ranges from 300 to 850, where a high score means low risk. Your credit report has information \u2013 such as your history of payment punctuality, the total amount of your available credit, the total amount and type of debt you have, the number of open and active accounts, and the longevity of your relationships with creditors. See the dates under your score to find out when your last score was received and when your next score refresh will be available.",
              ScoreFactors_PositiveFactors: "Positive Factors",
              ScoreFactors_NegativeFactors: "Negative Factors",
              ScoreFactors_YourCreditScore: "Your Credit Score",
              ScoreFactors_AsOf: "As of ",
              ScoreFactors_BasedOn: "Based on VantageScore<sup>®</sup> 3.0 ",
              ScoreFactors_ChartTitle: "Why am I seeing these factors?",
              ScoreFactors_ChartContent1:
                "Your credit score is measured by factors like your overall credit age, how often you make on time payments, or how much debt you carry on your credit cards.",
              ScoreFactors_ChartContent2:
                "Below are the top items that are currently impacting your credit health:",
              ScoreFactors_MoreInformation: "More about this score factor",
              ScoreFactors_LessInformation: "Less about this score factor",
              ScoreFactors_MoreInformationLabel:
                "Expand for more information about",
              ScoreFactors_LessInformationLabel:
                "Collapse more information about",
              ScoreFactors_WhatYouCanDo: "What You Can Do",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_AdditionalIDPSupport",
        type: "DCR",
        name: "default_en-US_AdditionalIDPSupport",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/AdditionalIDPSupport/data/en-US/AdditionalIDPSupport",
          dcrContent: {
            Content: {
              AdditionalIDPSupport_Title:
                "Additional Identity Protection Support",
              AdditionalIDPSupport_FraudAlerts_Title: "Fraud Alerts",
              AdditionalIDPSupport_FraudAlerts_Text:
                "Learn how you can have lenders take extra steps to verify the identity of anyone who might be applying for credit in your name.",
              AdditionalIDPSupport_FraudAlerts_Icon: "fraud_alert",
              AdditionalIDPSupport_FraudAlerts_Drawer_Title:
                "How to place a fraud alert",
              AdditionalIDPSupport_FraudAlerts_Drawer_Copy1:
                "<h4>What is a fraud alert?</h4><br /><p>A fraud alert is free and notifies creditors to take extra steps to verify your identity before extending credit. You can add a 1-year, 7-year, or Active Duty Military fraud alert. Remove a TransUnion fraud alert any time using the TransUnion Service Center with no effect to your credit score. Please note, you'll have to create a <a href=''>TransUnion Service Center</a> account for this which is free.",
              AdditionalIDPSupport_FraudAlerts_Drawer_Copy2:
                "<p><strong>How to Place a Fraud Alert: </strong>Create a free online <a href=''>TransUnion Service Center</a> account or call 800-680-7289.</p><p><strong>Initial Fraud Alert: </strong>A good option if you're concerned about becoming a victim of fraud or ID theft, an initial fraud alert lasts for 1 year.</p><p><strong>Extended Fraud Alert: </strong>An extended fraud alert lasts 7 years. You can only requestone by mail because we need extra documentation that proves your identity andconfirms identity theft. It's a good option if you've been a victim of fraud and have an identity theft report.</p><p><strong>Active Duty Miltary Alert: </strong>This is a 1-year alert for eligible military personnel who want to minimize their risk of fraud or ID theft. </p>",
              AdditionalIDPSupport_FraudAlerts_Drawer_TakeAction: "Take Action",
              AdditionalIDPSupport_FraudAlerts_Drawer_TakeAction_Content:
                "To get started, create a free TransUnion Service Center account or login if you already have one.",
              AdditionalIDPSupport_FraudAlerts_Drawer_TakeAction_Url:
                "https://service.transunion.com/dss/orderStep1_form.page?_gl=1*1mxrmo9*_ga*NzQ1NzQ4ODkyLjE2NzgxMzk0NTc.*_ga_6D2F5M2DQK*MTY4NTYzMDA1My4xMzMuMS4xNjg1NjMwMTEzLjYwLjAuMA..",
              AdditionalIDPSupport_ChildIdentityTheft_Title:
                "Child Identity Theft",
              AdditionalIDPSupport_ChildIdentityTheft_Text:
                "If you suspect that identity thieves may have targeted your child, TransUnion can help.",
              AdditionalIDPSupport_ChildIdentityTheft_Icon: "child_id_theft",
              AdditionalIDPSupport_IDTheftInsurance_Title: "ID Theft Insurance",
              AdditionalIDPSupport_IDTheftInsurance_Text:
                "Get a summary view of your identity theft insurance.",
              AdditionalIDPSupport_IDTheftInsurance_Icon: "id_theft_insurance",
              AdditionalIDPSupport_ChildIdentityTheft_Drawer_Title:
                "If you suspect that identity thieves may have targeted your child, TransUnion can help.",
              AdditionalIDPSupport_ChildIdentityTheft_Drawer_Copy1:
                "<h4>Understanding child identity theft</h4><p>Children make a tempting target for identity thieves because theft of a child's identity may go undetected for years.</p><p>After their child is born, most parents apply for a Social Security number, which isall that's required to open most credit accounts. It could be years until a child applies for credit in their own name. This makes it easy for identity theft to go undetected for years and create serious consequences:</p><ul><li>Identity theft could affect your child's future credit and employment history if the thieves (who sometimes turn out to be family members) obtain credit accounts or even get jobs using your child's identity.</li><li>If the thieves are arrested for other crimes, those crimes could become associated with your child's record.</li></ul>",
              AdditionalIDPSupport_ChildIdentityTheft_Drawer_Copy2:
                "<h4>How do you know if your child's identity has been stolen?</h4><ul><li>Your child begins to receive suspicious mail, like pre-approved credit cards and other financial offers normally sent to adults, in their own name.</li><li>You try to open a financial account for them but find one already exists, or the application is denied because of a poor credit history.</li><li>A credit report already exists in their name. If the child has one, they may have been targeted already, since only an application for credit, a credit account, or a public record starts the compilation of a consumer credit file.</li></ul>",
              AdditionalIDPSupport_ChildIdentityTheft_Drawer_Copy3:
                "<h4>How can you check if identity thieves targeted your child?</h4><p>If you suspect your child is a victim of identity theft, TransUnion can help. Please use our secure <a href='https://www.transunion.com/credit-freeze/credit-freeze-faq#freeze-other-minor' target='_blank'>Child Identity Theft Inquiry Form</a> to submit details about your concerns. You can also email <a href='mailto:childidtheft@transunion.com'>childidtheft@transunion.com</a>. Do not email sensitive, identifying or account information. Additionally, a minor's credit report can be frozen by a parent or legal guardian. Read more on <a href='https://www.transunion.com/credit-disputes/child-identity-theft-inquiry-form' target='_blank'>minor credit report freezes</a>.</p><p>The more detailed the information you provide, the more thoroughly we can investigate the existence of a potential credit file in your child's name. Remember, you are initiating this communication with TransUnion, a trusted source of credit information. We will use this information only to conduct the search you request. We will not include this sensitive information in any return correspondence to you.</p><p>After our search is complete, we will respond to you at the email address you provide. If we locate a file in your child's name, we will ask you for additional information in order to proceed with steps to protect your child from any impact associated with this fraudulent activity. The more promptly you respond to this request, the more quickly we can take action on your family's behalf.</p>",
              AdditionalIDPSupport_PasswordManager_Title: "Password Manager",
              AdditionalIDPSupport_PasswordManager_Text:
                "My TrueIdentity users receive an automatic complimentary Dashlane Premium for 1 year. This offer can be redeemed once per My TrueIdentity customer.",
              AdditionalIDPSupport_PasswordManager_Icon: "password_manager",
              AdditionalIDPSupport_PasswordManager_Drawer_Title:
                "Complimentary password manager for one year with Dashlane Premium",
              AdditionalIDPSupport_PasswordManager_Drawer_Copy1:
                "My TrueIdentity users receive an automatic complimentary Dashlane Premium for 1 year. This offer can be redeemed once per My TrueIdentity customer.",
              AdditionalIDPSupport_PasswordManager_Drawer_Copy2:
                "<h4>About Dashlane Premium:</H4><span>Multiple accounts might be at risk now if you have ever re-used a password. Rest assured that Dashlane Password Manager from TransUnion's Password Defense Alert feature:</span><br /><br /><ul><li>Secure all your passwords within minutes</li><li>Generate strong passwords for every account</li><li>Sync passwords to unlimited devices for on-the-go access.</li><li>Helps change to unique, strong passwords with Automatic Password Changer</li><li>Provides alerts when any account might be compromised</li></ul>",
              AdditionalIDPSupport_PasswordManager_Drawer_CTA_Label:
                "Use Dashlane Premium now",
              AdditionalIDPSupport_PasswordManager_Drawer_CTA_Url:
                "https://www.dashlane.com/mytrueidentity?utm_source=transunion&utm_medium=partnerships",
              AdditionalIDPSupport_EnhancedIDRestoration_Title:
                "Enhanced ID Restoration",
              AdditionalIDPSupport_EnhancedIDRestoration_Text:
                "Get help recovering from Identity Fraud.",
              AdditionalIDPSupport_EnhancedIDRestoration_Icon:
                "enhanced_id_restoration",
              AdditionalIDPSupport_EnhancedIDRestoration_Drawer_Title:
                "Recovering from identity fraud",
              AdditionalIDPSupport_EnhancedIDRestoration_Drawer_Copy1:
                "If your product includes enhanced ID Restoration support, you can receive additional information, education, and services to help minimize the impact of suspicious activity and secure your personal information quickly.<br/><br/>",
              AdditionalIDPSupport_EnhancedIDRestoration_Drawer_Copy2:
                "To receive your free enhanced-support services, please check the welcome letter containing your enrollment instructions. The ID Restoration phone number and special service code provided in your letter will connect you directly to our TransUnion ID Restoration team.",
              AdditionalIDPSupport_IDTheftInsurance_Drawer_Title:
                "Insurance Summary",
              AdditionalIDPSupport_IDTheftInsurance_Drawer_Accordian: [
                {
                  Section_Title:
                    "Summary Description of Benefits for the Personal Internet & Identity Coverage Master Policy",
                  Item: [
                    {
                      Title: "",
                      Content:
                        '<p><strong>This Summary is provided to inform you that as a member of myTrueIdentity, you are entitled benefits under the Master Policy referenced below.</strong> This Summary Description of Benefits does not state all the terms, conditions, and exclusions of the Policy. Your benefits will be subject to all of the terms, conditions, and exclusions of the Master Policy, even if they are not mentioned in this Summary. A complete copy of the Policy will be provided upon request.</p><p>The Master Policies of Personal Internet Identity Coverage have been issued to: TransUnion (the "Master Policy Holder"), under Policy Numbers: 7077495 and 16452600 respectively underwritten by insurance company subsidiaries or affiliates of American International Group, Inc. to provide benefits as described in this Summary.<h3>General Information</h3><p>Should you have any questions regarding the Membership Program provided by the Master Policyholder, or wish to view a complete copy of the Master Policy, please call the customer service number at (800) 493-2392 located in your membership materials.</p><h3>Filing a Claim</h3><p>If you have any questions regarding the identity theft insurance coverage or wish to file a claim under the Master Policy, please contact the Insurer at 1-866-IDHelp2 (1-866-434-3572).</p><p>This is a group master policy issued to TransUnion. If this master policy is terminated, your benefits will cease effective that date. It is the obligation of the master policyholder to inform you of any termination of the master policy.</p><p> </p>',
                    },
                  ],
                },
                {
                  Section_Title: "Insurance Benefits",
                  Item: [
                    {
                      Title: "",
                      Content:
                        "<strong>We shall pay you for the following:</strong></p><p><strong>a) Costs</strong>.<ol class='roman'><li>Reasonable and necessary costs incurred by you in the United States for re-filing applications for loans, grants or other credit instruments that are rejected solely as a result of a Stolen Identity Event;</li><li>Reasonable and necessary costs incurred by you in the United States for notarizing affidavits or other similar documents, long distance telephone calls and postage solely as a result of your efforts to report a Stolen Identity Event and/or amend or rectify records as to your true name or identity as a result of a Stolen Identity Event;</li><li>Reasonable and necessary costs incurred by you for up to six credit reports from established credit bureaus (with no more than two reports from any one credit bureau) dated within 12 months after your knowledge or discovery of a Stolen Identity Event.</li><li>Reasonable and necessary costs incurred by you for ordering medical records for the purpose of amending and/or rectifying these documents as a result of a stolen identity event.</li><li>Reasonable and necessary costs incurred by you for travel within the United States incurred as a result of the insured's efforts to amend or rectify records as to the insured's true name and identity; and</li><li>Reasonable and necessary costs incurred by you for elder care or child care incurred as a result of the insured's efforts to amend or rectify records as to the insured's true name or identity.\n" +
                        "Reasonable and necessary costs incurred by you for the replacement of identification cards, drivers licenses and passports as a result of a stolen identity event</li><li>Reasonable and necessary costs incurred by the insured associated with the use of any certified public accountant engaged to amend or rectify records as to the true name or identity of the insured as a result of a stolen identity event. We reserve the right to select such certified public accountant; however, with our express prior written consent, you may select such certified public accountant.</li><li>Reasonable and necessary costs incurred by you to conduct a property title search for a residential property in response to a stolen identity event.</li><li>Reasonable and necessary costs incurred by you to obtain background check reports in order to amend or resubmit a job application or residential lease application in response to a stolen identity event.</li><li>Reasonable and necessary costs incurred by you to resubmit a residential lease application in response to a stolen identity event</li><li>Reasonable and necessary costs incurred by you to obtain copies of educational transcripts and/or occupational licenses in order to amend or resubmit a job application in response to a stolen identity event.</li></ol> " +
                        "<p><strong>b) Lost Wages</strong></p><p>Actual lost wages earned in the United States, whether partial or whole days, for time reasonably and necessarily taken off work and away from your work premises solely as a result of your efforts to amend or rectify records as to your true name or identity as a result of a Stolen Identity Event. Actual lost wages includes remuneration for vacation days, discretionary days, floating holidays, and paid personal days and excludes business interruption or future earnings of a self-employed professional. Computation of lost wages for self-employed professionals must be supported by and will be based on prior year tax returns. Coverage is limited to wages lost within twelve months after your discovery of a Stolen Identity Event.</p>" +
                        "<p><strong>c) Legal defense fees and expenses </strong><ol class='roman'><li>An initial consultation with a lawyer to determine the severity of and appropriate response to a stolen identity event.</li><li>Defending any civil suit brought against you by a creditor or collection agency or entity acting on behalf of a creditor for non-payment of goods or services or default on a loan as a result of a stolen identity event.</li><li>Removing any civil judgment wrongfully entered against you as a result of the stolen identity event.</li><li>Defending criminal charges brought against the insured as a result of a stolen identity event; provided, however, we will only pay criminal defense related fees and expenses after it has been established that the insured was not in fact the perpetrator.</li><li>Challenging the accuracy or completeness of any information in the insured's medical history as a result of a medical identity theft. It is further agreed that solely with respect to subparagraph (c) the insured, with our express prior written consent, may select such attorney.</li><li>Court filing fees for an action to quiet title on a residential property in response to a stolen identity event</li><li>Challenging the accuracy or completeness of any information in the insured's background check report as a result of a stolen identity event.</li></ol>" +
                        "<p><strong>d) Unauthorized Electronic Fund Transfer Reimbursement</strong></p><p>The principal amount, exclusive of interest and fees, incurred by you and caused by an Unauthorized Electronic Fund Transfer. Stolen Funds Loss shall not include any amount for which you did not seek reimbursement from the financial institution which issued the access device and holds the account from which funds were stolen, and stolen funds loss shall not include any amount for which you received reimbursement from any source.</p><p>A Stolen Identity Event means the fraudulent use of your name, address, Social Security number, bank or credit card account number or other personally identifying information or other method of identifying you. This includes, but is not limited to, the fraudulent use of your personal identity to establish credit accounts, secure loans, enter into contracts or commit crimes. Stolen identity event shall include Medical identity theft. Medical Identity Theft means the theft of the insured's personal or health insurance information to obtain medical treatment, pharmaceutical services or medical insurance coverage. Medical identity theft also means the theft of the insured's personal or health insurance information to submit false claims for medical services or goods.</p><p>A Stolen Identity Event does not include the theft or unauthorized or illegal use of your business name, d/b/a or any other method of identifying your business activity.</p><p>Unauthorized Electronic Fund Transfer means an Electronic Fund Transfer from your account initiated by a person other than you without the actual authority to initiate the transfer and from which you receive no benefit. An Unauthorized Electronic Fund Transfer does not include an Electronic Fund Transfer initiated: (1) by a person who was furnished the access device to your account by you, unless you had notified the financial institution that transfers by such person were no longer authorized; (2) with fraudulent intent by you or any person acting in concert with you; or (3) by the financial institution or its employee.</p>",
                    },
                  ],
                },
                {
                  Section_Title: "Coverage Scope",
                  Item: [
                    {
                      Title: "",
                      Content:
                        "<h4>Stolen Identity Event</h4><p>The Master Policy provides benefits to you only if you report a stolen identity event to us by the contact number stated above as soon as you become aware of a stolen identity event, in no event later than one hundred twenty (120) days after the stolen identity event is discovered by you and you follow the instructions given to you in a claims kits that you will be provided. These instructions will include notifying major credit bureaus, the Federal Trade Commission's Identity Theft Hotline and appropriate law enforcement authorities. This claims kit will also instruct you how to file for benefits under the policy if the stolen identity event results in losses covered under the policy.</p><p>You will only be covered if a stolen identity event is reported to us within one hundred twenty (120) days of discovery. You will not be covered if the stolen identity event first occurs after termination of the master policy or termination of your membership in the Master Policyholder's program.</p>" +
                        "<h4>Unauthorized Electronic Fund Transfer</h4><p>The Master Policy provides benefits to you only if you report an Unauthorized Electronic Fund Transfer to us at the contact number stated above as soon as you become aware of a Unauthorized Electronic Fund Transfer, but in no event later than one hundred twenty (120) days after the Unauthorized Electronic Fund Transfer is discovered by you.</p><p>You will only be covered if an Unauthorized Fund Transfer: (1) first occurs while you are a member of the Master Policyholder's Membership Program, and (2) is reported to us within one hundred twenty (120) days after your discovery of the Unauthorized Fund Transfer. You will not be covered if the Unauthorized Fund Transfer first occurs after expiration or termination of the Master Policy or termination of your membership in the Master Policyholder's Membership Program.</p>" +
                        "<h4>Limits of Insurance</h4><table class='drawerTable'><tbody><tr><td>Aggregate Limit of Insurance:</td><td class='right'>$1,000,000 per policy period</td></tr><tr><td>Lost Wages:</td><td class='right'>$2,000 per week, for 5 weeks maximum</td></tr><tr><td>Deductable:</td><td class='right'>$0 per policy period</td></tr></tbody></table>" +
                        "<p>The most we shall pay you are the Limits of Insurance shown above. All Legal Costs shall be part of and subject to the Aggregate Limit of Insurance. LEGAL COSTS ARE PART OF, AND NOT IN ADDITION TO, THE LIMIT OF INSURANCE.</p><p>The Lost Wages Limits of Insurance shown above are sublimits of the Aggregate Limit of Insurance and the most we shall pay you for Lost Wages.</p>" +
                        "<h4>Deductible</h4><ol class='numeric'><li>You shall be responsible for the applicable Deductible amount shown above and you may not insure against it.</li><li>You shall be responsible for only one Deductible during any one policy period.</li></ol>" +
                        "<h4>Duplicate Coverages</h4><p>Should you be enrolled in more than one membership program insured by us, or any of our affiliates, we will reimburse you under each membership program:</p><ol class='alpha'><li>subject to the applicable deductibles and limits of liability of each insured membership program</li><li>but in no event shall the total amount reimbursed to you under all membership programs exceed the actual amount of loss</li></ol>",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_InitialModal",
        type: "DCR",
        name: "default_en-US_InitialModal",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/InitialModal/data/en-US/InitialModal",
          dcrContent: {
            Content: {
              InitialModal_Title: "Welcome to your new CreditView Dashboard.",
              InitialModal_Body:
                "We've updated our experience to make it easier for you to find information, use our tools and monitor your credit health.",
              InitialModal_Bullets: "",
              InitialModal_Button: "View New Dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_WelcomeModal",
        type: "DCR",
        name: "default_en-US_WelcomeModal",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/WelcomeModal/data/en-US/WelcomeModal",
          dcrContent: {
            Content: {
              WelcomeModal_Title:
                "An important update on your new Creditview Dashboard",
              WelcomeModal_Body:
                "We have recently upgraded our systems and we need you to re-enroll to take advantage of what's new. Use the 'Re-enroll now' button to continue or log in if you've already done this.",
              WelcomeModal_Bullets: "",
              WelcomeModal_Button: "Log In",
              WelcomeModal_Button2: "Re-enroll now",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TU1_en-US_InitialModal",
        type: "DCR",
        name: "TU1_en-US_InitialModal",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TU1/InitialModal/data/en-US/InitialModal",
          dcrContent: {
            Content: {
              InitialModal_Title: "Welcome to your new CreditView Dashboard.",
              InitialModal_Body:
                "We've updated our experience to make it easier for you to find information, use our tools and monitor your credit health.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_MissingInfoStep1",
        type: "DCR",
        name: "default_en-US_MissingInfoStep1",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/MissingInfoStep1/data/en-US/MissingInfoStep1",
          dcrContent: {
            Content: {
              MissingInfoStep1_Title: "Step 1",
              MissingInfoStep1_Text: "Create Your Account",
              MissingInfoStep1_Label:
                "We need few more pieces of information in order to create your account.",
              MissingInfoStep1_DateOfBirth: "Date of Birth (MM / DD / YYYY)",
              MissingInfoStep1_ZipCode: "Zip Code",
              MissingInfoStep1_State: "State",
              MissingInfoStep1_City: "City",
              MissingInfoStep1_Address: "Address",
              MissingInfoStep1_PreviousResidence: "Previous Residence",
              MissingInfoStep1_PreviousZipCode: "Zip Code",
              MissingInfoStep1_PreviousCity: "City",
              MissingInfoStep1_PreviousAddress: "Address",
              MissingInfoStep1_Legal:
                "You understand that by clicking on the 'I Accept and Continue' button below, you agree to TransUnion Consumer Interactive's <a href='/cvd/#/legal?tab=Terms-and-Conditions'>Terms and Conditions</a> and you are providing 'Written Instructions' authorizing TransUnion Interactive, Inc. to update information from your personal credit profile from TransUnion in order to confirm your identity and display your credit data to you.",
              MissingInfoStep1_ImageText:
                "Imagine what awaits beyond your credit score.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_MissingInfoStep2",
        type: "DCR",
        name: "default_en-US_MissingInfoStep2",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/MissingInfoStep2/data/en-US/MissingInfoStep2",
          dcrContent: {
            Content: {
              MissingInfoStep2_Title: "Step 2",
              MissingInfoStep2_Text: "Confirm Your Identity",
              MissingInfoStep2_TitleTooltip: "Tooltip content",
              MissingInfoStep2_ImageCaption:
                "The safety of your personal data is important to us and you can count on us to keep it secure!",
              MissingInfoStep2_Verify: "Verify My Identity",
              MissingInfoStep2_TitleOTP: "One Time Passcode Verification",
              MissingInfoStep2_OTPParaOne:
                "How would you like to receive the verification code? We'll use the phone number you entered in Step 1.",
              MissingInfoStep2_OTPParaTwo:
                "Standard text message and voice rates apply.",
              MissingInfoStep2_OTPSendText: "Send Me A Text Message",
              MissingInfoStep2_OTPCallPhone: "Call My Phone",
              MissingInfoStep2_OTPEnterPasscode:
                "Enter the passcode you received",
              MissingInfoStep2_Passcode: "Passcode",
              MissingInfoStep2_NewPasscodeText:
                "Please check your phone for a new passcode",
              MissingInfoStep2_ResendPasscodeLink: "Resend Code",
              MissingInfoStep2_RemberDevice: "Should we remember this device?",
              MissingInfoStep2_RememberDeviceParaOne:
                "We'll remember your device to make signing in easier next time.",
              MissingInfoStep2_RememberDeviceBtn: "Yes, Remember This Device",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_StaticAd",
        type: "DCR",
        name: "default_en-US_StaticAd",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/StaticAd/data/en-US/StaticAd",
          dcrContent: {
            Content: {
              StaticAd_Title: "Utilize Your Score",
              StaticAd_Ad1_filename: "nRewards.png",
              StaticAd_Ad1_altText:
                "Earn Rewards While You Build or Repair Your Credit",
              StaticAd_Ad1_link: "",
              StaticAd_Ad1_lowScore: "300",
              StaticAd_Ad1_highScore: "639",
              StaticAd_Ad1_alternate_filename: "CredControl.jpg",
              StaticAd_Ad1_alternate_altText:
                "Credit with You in Mind - Lower rates, no annual fees.",
              StaticAd_Ad1_alternate_link: "",
              StaticAd_Ad1_alternate_lowScore: "640",
              StaticAd_Ad1_alternate_highScore: "850",
              StaticAd_Ad2_filename: "OurCalculators.png",
              StaticAd_Ad2_altText:
                "Calculate Your Way to Success - Take the guesswork out of planning with our calculators.",
              StaticAd_Ad2_link: "",
              StaticAd_Ad2_lowScore: "300",
              StaticAd_Ad2_highScore: "850",
              StaticAd_Ad3_filename: "MakingCents.png",
              StaticAd_Ad3_altText:
                "Reach Your Financial Goals - Enjoy step-by-step guidance with MakingCents.",
              StaticAd_Ad3_link: "",
              StaticAd_Ad3_lowScore: "300",
              StaticAd_Ad3_highScore: "850",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Logout",
        type: "DCR",
        name: "default_en-US_Logout",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Logout/data/en-US/Logout",
          dcrContent: {
            Content: {
              Logout_Screen1_Title:
                "You have logged out of the MyCredit Guide<sup>®</sup>.",
              Logout_Screen2_Title:
                "If you would like to go back in, please log back in",
              Logout_LogBackIn_Button: "Log Back In",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_CreditScore",
        type: "DCR",
        name: "default_en-US_CreditScore",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/CreditScore/data/en-US/CreditScore",
          dcrContent: {
            Content: {
              CreditScore_Tooltip_Title: "Credit Score",
              CreditScore_Tooltip_Text:
                "The VantageScore\u00AE 3.0 and grade is based primarily on a 24-month review of your credit report. It ranges from 300 to 850, where a high score means low risk. Your credit report has information \u2013 such as your history of payment punctuality, the total amount of your available credit, the total amount and type of debt you have, the number of open and active accounts, and the longevity of your relationships with creditors. See the dates under your score to find out when your last score was received and when your next score refresh will be available.",
              CreditScore_Chart_Description_Start:
                "A Credit Score chart with the range running from 300, which is equivalent to a score value of Needs Work, to 850, which is equivalent to a score value of Excellent. The score is marked at",
              CreditScore_Chart_Description_End:
                "which is equivalent to a score rating of",
              CreditScore_Chart_Based_On: "Based on VantageScore\u00AE 3.0",
              CreditScore_Chart_Next_Available: "Next available update on ",
              CreditScore_Chart_Points: " pts \u2022",
              CreditScore_Chart_Since: " as of ",
              CreditScore_Chart_NeedsWork: "Needs Work",
              CreditScore_Chart_Fair: "Fair",
              CreditScore_Chart_Good: "Good",
              CreditScore_Chart_Excellent: "Excellent",
              CreditScore_Chart_NeedsWorkPoor: "Needs Work",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_SecurityDetails",
        type: "DCR",
        name: "default_en-US_SecurityDetails",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/SecurityDetails/data/en-US/SecurityDetails",
          dcrContent: {
            Content: {
              SecurityDetails_TabName: "Security",
              SecurityDetails_Heading: "Security Details",
              SecurityDetails_title:
                "TransUnion Interactive, Inc. understands the confidentiality of information contained in credit reports, and we safeguard the privacy of all information you provide to us through any TransUnion Interactive website.",
              SecurityDetails_Des_title:
                "SSL (Secure Sockets Layer) Encryption",
              SecurityDetails_Description:
                "To ensure that your credit information remains secure and confidential, TransUnion Interactive uses programs that encrypt the data you provide on the order form before transmission to TransUnion Interactive. Encryption is a way of coding the information in a file so that if it is intercepted by a third party as it travels over a network, it cannot be read. Only the person or persons that have the right type of decoding software can unscramble the message. Thus, your encrypted information can only be read by TransUnion Interactive.",
              SecurityDetails_Description2:
                "Questions or concerns about the TransUnion Interactive's security system? Please contact the Customer Service Team.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Terms",
        type: "DCR",
        name: "default_en-US_Terms",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Terms/data/en-US/Terms",
          dcrContent: {
            Content: {
              Terms_TabName: "Terms and Conditions",
              Terms_Content: {
                tabHeading: "Welcome to MyCredit Guide<sup>®</sup>",
                tabDescription:
                  "<br/>THE TERMS AND CONDITIONS BELOW CONTAIN AN ARBITRATION AGREEMENT AND A CLASS ACTION WAIVER. <br/><br/>Welcome to MyCredit Guide<sup>&reg;</sup> (here on referred to as MyCredit Guide<sup>&reg;</sup>), provided by TransUnion Interactive, Inc. MyCredit Guide<sup>&reg;</sup> is subject to your provider's Online Terms and Conditions. In addition, by accessing and using MyCredit Guide<sup>&reg;</sup>, you agree to be bound by the below Terms and Conditions. YOU MUST ACCEPT THE TERMS AND CONDITIONS BELOW BEFORE YOU WILL BE PERMITTED ACCESS TO MyCredit Guide<sup>&reg;</sup>.",
                itemList: [
                  {
                    Title: "Eligibility and Availability",
                    Description:
                      "<br/>MyCredit Guide<sup>&reg;</sup> is offered to select account holders only. To access MyCredit Guide<sup>&reg;</sup>, you must have already enrolled in your provider's online account management and accepted the online terms and conditions. MyCredit Guide<sup>&reg;</sup> is only available if we can match your personal information with your credit file. You will not have access to MyCredit Guide<sup>&reg;</sup> if you do not have access to your provider's online account management. We may terminate access to MyCredit Guide<sup>&reg;</sup> for any reason and without notice. You may ask to cancel your enrollment at any time and it may take up to 60 days to process your cancellation request. MyCredit Guide<sup>&reg;</sup> is only available in English at this time.",
                  },
                  {
                    Title: "Registration and Accurate Information",
                    Description:
                      "<br/>If you chose to access MyCredit Guide<sup>&reg;</sup>, you will be required to register, provide personal information, and select a user name and password. You agree to provide accurate information in your registration and not to share your password with third parties. You agree not to impersonate another person or to select or use a user name or password of another person. You agree to notify TransUnion Interactive promptly of any unauthorized use of MyCredit Guide<sup>&reg;</sup> and of any loss, theft or disclosure of your password. Failure to comply with these requirements shall constitute a breach of these terms and conditions and shall constitute grounds for immediate termination of your right to access MyCredit Guide<sup>&reg;</sup>.",
                  },
                  {
                    Title: "Consent to Obtain Credit Information",
                    Description:
                      "<br/>In order to deliver MyCredit Guide<sup>&reg;</sup> to you, we must obtain your credit file and other information. You hereby authorize TransUnion Interactive, Inc. to access your credit file from TransUnion and exchange certain information about you in order to verify your identity and provide you MyCredit Guide<sup>&reg;</sup>. Each time you access MyCredit Guide<sup>&reg;</sup>, you are providing “written instructions” as set forth in the Fair Credit Reporting Act for TransUnion Interactive to obtain your consumer credit report from TransUnion, a consumer reporting agency.",
                  },
                  {
                    Title: "TransUnion Credit Score",
                    Description:
                      "<br/>The credit score provided is your VantageScore<sup>&reg;</sup> Credit Score, which is a model created by the three major credit bureaus, Equifax, Experian and TransUnion. VantageScore<sup>&reg;</sup> Credit Score predicts credit risk. Specifically, it measures the probability that a person will pay his or her debts on time. There are many different credit scores in the marketplace based on different models with different scoring ranges. The scores provided by MyCredit Guide<sup>&reg;</sup> are for educational/informational purposes only and are not intended for use by lenders. MyCredit Guide<sup>&reg;</sup> can only evaluate the account information that appears on your TransUnion consumer credit report. Accounts not reported to or subsequently deleted from your TransUnion consumer credit report will not be reflected in your score. MyCredit Guide<sup>®</sup> does not maintain your credit report information and is not able to make any changes to it. MyCredit Guide<sup>®</sup> cannot initiate any disputes on your behalf. MyCredit Guide<sup>®</sup> and TransUnion Interactive, Inc. are not responsible for inaccurate results, including any due to incorrect, incomplete, or outdated information in your credit report.",
                  },
                  {
                    Title: "Simulations",
                    Description:
                      "<br/>MyCredit Guide<sup>&reg;</sup> has a credit score simulator that estimates how certain changes in your credit behavior may impact your credit score. This simulator shows how these changes impact the credit score displayed on MyCredit Guide<sup>&reg;</sup>, which is the VantageScore<sup>&reg;</sup> credit score. Simulated scores and score changes simulated by MyCredit Guide<sup>&reg;</sup> are only predicated estimates. MyCredit Guide<sup>&reg;</sup> and TransUnion Interactive do not guarantee that your actual credit score will change by the same amount, in the same way, or at all.",
                  },
                  {
                    Title: "Credit Monitoring Only",
                    Description:
                      "MyCredit Guide<sup>&reg;</sup> and TransUnion Interactive are not credit repair or credit counseling organizations or similarly regulated organizations under other applicable law, and do not provide credit repair advice. MyCredit Guide<sup>&reg;</sup> is not a credit repair tool and makes no representation or promise that it will improve your credit record, credit history or credit rating or provide you with any assistance in that regard.",
                  },
                  {
                    Title: "Communications",
                    Description:
                      "<br/>You agree to receive in electronic form these Terms and Conditions and all other communications regarding MyCredit Guide<sup>&reg;</sup>. As part of the MyCredit Guide<sup>&reg;</sup> service, we may send you alerts by email, text message, telephone, or mail. You consent to receive these communications. You can withdraw your consent only by cancelling your enrollment in MyCredit Guide<sup>&reg;</sup>.",
                  },
                  {
                    Title:
                      "Right To Receive A Free Credit Report From AnnualCreditReport.com",
                    Description:
                      "<br/>Under the Fair Credit Reporting Act, you are entitled to receive a free disclosure of your credit report from each of the national credit reporting agencies annually. For more information visit AnnualCreditReport.com.",
                  },
                  {
                    Title: "Intellectual Property",
                    Description:
                      '<br/>The images, text, screens, web pages, materials, data, content and other information ("Content") used and displayed on MyCredit Guide<sup>&reg;</sup> are the property of TransUnion Interactive or its licensors and are protected by copyright, trademark and other laws. In addition to our rights in individual elements of the Content within MyCredit Guide<sup>&reg;</sup>, TransUnion Interactive owns copyright or patent rights in the selection, coordination, arrangement and enhancement of such Content. You may copy the Content from MyCredit Guide<sup>&reg;</sup> for your personal or educational use only, provided that each copy includes any copyright, trademark or service mark notice or attribution as they appear on the pages copied. Except as provided in the preceding sentence, none of the Content may be copied, displayed, distributed, downloaded, licensed, modified, published, reposted, reproduced, reused, sold, transmitted, used to create a derivative work or otherwise used for public or commercial purposes without the express written permission of TransUnion Interactive or the owner of the Content.',
                  },
                  {
                    Title: "Disclaimer of Warranties and Liabilities",
                    Description:
                      '<br/>MyCredit Guide<sup>&reg;</sup>, INCLUDING ALL CONTENT, PRODUCTS AND SERVICES MADE AVAILABLE ON OR ACCESSED THROUGH MyCredit Guide<sup>&reg;</sup>, IS PROVIDED TO YOU "AS IS". TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, NEITHER TRANSUNION INTERACTIVE NOR ITS AFFILIATES MAKE ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND WHATSOEVER AS TO THE CONTENT, PRODUCTS OR SERVICES AVAILABLE ON OR ACCESSED THROUGH MyCredit Guide<sup>&reg;</sup>, THAT A USER WILL HAVE CONTINUOUS, UNINTERRUPTED OR SECURE ACCESS TO MyCredit Guide<sup>&reg;</sup>, PRODUCTS OR SERVICES OR THAT MyCredit Guide<sup>&reg;</sup>, PRODUCTS OR SERVICES WILL BE ERROR-FREE. IN ADDITION, TRANSUNION INTERACTIVE AND ITS AFFILIATES DISCLAIM ALL EXPRESS OR IMPLIED WARRANTIES, INCLUDING TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON INFRINGEMENT AND INFORMATIONAL CONTENT. THEREFORE, YOU AGREE THAT YOUR ACCESS TO AND USE OF MyCredit Guide<sup>&reg;</sup>, PRODUCTS, SERVICES AND CONTENT ARE AT YOUR OWN RISK. BY USING MyCredit Guide<sup>&reg;</sup>, YOU ACKNOWLEDGE AND AGREE THAT NEITHER TRANSUNION INTERACTIVE NOR ITS AFFILIATES HAVE ANY LIABILITY TO YOU (WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE) FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL OR SPECIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR ACCESS TO MyCredit Guide<sup>&reg;</sup>, CONTENT, PRODUCTS OR SERVICES (EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), INCLUDING LIABILITY ASSOCIATED WITH ANY VIRUSES WHICH MAY INFECT YOUR COMPUTER EQUIPMENT.',
                  },
                  {
                    Title: "Release",
                    Description:
                      "<br/>You agree to release, discharge and hold MyCredit Guide<sup>&reg;</sup> harmless from any and all claims, losses, damages, obligations, or liabilities, directly or indirectly relating from your use of the MyCredit Guide<sup>&reg;</sup>. In no event shall MyCredit Guide<sup>&reg;</sup> be liable for any direct, incidental, special, punitive or consequential damages however caused arising out of your use, or inability to use, the MyCredit Guide<sup>&reg;</sup>.",
                  },
                  {
                    Title: "Privacy Policy",
                    Description:
                      "<br/>By accessing MyCredit Guide<sup>&reg;</sup>, you agree that TransUnion Interactive may use and share your personal information in accordance with the terms of our Privacy Statement. Our privacy statement can be reached from the Privacy Policy link located in the footer of each MyCredit Guide<sup>&reg;</sup> page.",
                  },
                  {
                    Title: "Applicable Law",
                    Description:
                      "<br/>The laws applicable to the interpretation of these terms and conditions shall be the laws of the State of Delaware, USA, and applicable federal law, without regard to any conflict of law provisions. TransUnion Interactive can provide credit information only for individuals who have established credit in the United States. If you choose to access MyCredit Guide<sup>®</sup> from outside the United States, you do so at your own initiative and are responsible for compliance with local laws. You agree that any and all disputes arising under this Agreement or out of TransUnion Interactive's provision of services to you, if submitted to a court of law, shall be submitted to the state and federal courts of New Castle County, Delaware, USA.",
                  },
                  {
                    Title: "Policy Regarding Children",
                    Description:
                      "<br/>We define children as individuals under the age of 16. MyCredit Guide<sup>&reg;</sup> is not intended for the use of children and we do not intend to collect information about children through MyCredit Guide<sup>&reg;</sup>. Furthermore, you must be at least 18 years old to access MyCredit Guide<sup>®</sup>.",
                  },
                  {
                    Title: "Notices",
                    Description:
                      "<br/>You should send any notices or other communications regarding MyCredit Guide<sup>&reg;</sup>, including products or services accessed through MyCredit Guide<sup>&reg;</sup>, to TransUnion Interactive, 100 Cross Street, Suite 202, San Luis Obispo, CA 93401. <br/> Except as otherwise provided, we may send any notices to you to the most recent e-mail address you have provided or, if you have not provided an e-mail address, to any e-mail or postal address that we believe is your address. If you wish to update your personal information, please go to “My Profile” and then to “My Information.”",
                  },
                  {
                    Title:
                      "Agreement to Resolve Disputes by Binding Individual Arbitration",
                    Description:
                      "<br/>THIS SECTION IS AN AGREEMENT TO ARBITRATE DISPUTES (“ARBITRATION AGREEMENT”) THAT MAY ARISE AS A RESULT OF YOUR ACCESS TO AND USE OF MyCredit Guide<sup>&reg;</sup>, YOUR USE OF THE PRODUCTS OR SERVICES ACCESSED BY MyCredit Guide<sup>&reg;</sup>, AND/OR THESE TERMS AND CONDITIONS. READ THIS SECTION CAREFULLY. YOU UNDERSTAND AND AGREE THAT BOTH PARTIES WOULD HAVE HAD A RIGHT TO LITIGATE DISPUTES THROUGH A COURT AND TO HAVE A JUDGE OR JURY DECIDE THEIR CASE, BUT BOTH PARTIES BY ENTERING INTO THIS AGREEMENT CHOOSE TO HAVE ANY DISPUTE RESOLVED THROUGH BINDING INDIVIDUAL ARBITRATION. OTHER RIGHTS THAT YOU WOULD HAVE IF YOU WENT TO COURT MAY NOT BE AVAILABLE OR MAY BE MORE LIMITED IN ARBITRATION, INCLUDING YOUR RIGHT TO APPEAL.",
                  },
                  {
                    Title: "Right to Reject Arbitration",
                    Description:
                      "<br/>YOU HAVE THE RIGHT TO REJECT THIS ARBITRATION AGREEMENT, BUT YOU MUST EXERCISE THIS RIGHT PROMPTLY. You must notify us in writing within sixty (60) days after the date you click-on to “Accept” the Terms and Conditions. You must send your request to: TransUnion Interactive, 100 Cross Street, Suite 202, San Luis Obispo, CA 93401. This request must include your current username and a clear statement of your intent, such as “I reject the arbitration agreement in the Terms and Conditions of MyCredit Guide<sup>&reg;</sup>.” <br/><br/> In consideration for our willingness to provide you with access to MyCredit Guide<sup>&reg;</sup> or any services or products accessed through MyCredit Guide<sup>&reg;</sup>, you and we agree as follows: <br/><br/> You agree that any dispute, claim or controversy (“Claim”) between you and TransUnion Interactive or its parent, TransUnion, our agents, contractors, employees, officers or assignees, arising out of or relating in any way to your access to and use of MyCredit Guide<sup>&reg;</sup>, your access or use of any product or service accessed through MyCredit Guide<sup>&reg;</sup>, and these Terms and conditions, including, without limitation, tort and contract claims, claims based on any federal, state or local statute, law or regulation and the issue of arbitrability must be resolved exclusively by binding arbitration, except for the validity, scope or enforceability of this Arbitration Agreement. However, we will not demand arbitration pursuant to this Arbitration Agreement in connection with any individual Claim that you properly file and pursue in a small-claims court of your state or municipality, so long as the Claim is pending only in that court.<br/><br/> YOU UNDERSTAND AND AGREE THAT NO CLAIM, DISPUTE OR CONTROVERSY MAY BE CONSOLIDATED WITH A DISPUTE OF ANY OTHER PERSON IN ARBITRATION, OR RESOLVED ON A CLASS-WIDE BASIS BY A CLASS ACTION OR OTHER PROCEEDING AND YOU HEREBY WAIVE YOUR RIGHT TO COMMENCE OR PARTICIPATE IN ANY SUCH COLLECTIVE OR REPRESENTATIVE PROCEEDING. Unless a different procedure is required by applicable law, the arbitration will be conducted before a single arbitrator in accordance with the rules of the American Arbitration Association (“AAA”), including the AAA's Supplementary Procedures for Consumer-Related Disputes.<br/><br/> A demand for arbitration under this Arbitration Agreement may be made either before or after a lawsuit or other legal proceeding begins. However, any demand for arbitration that is made after a lawsuit or other legal proceeding has begun must be made within 90 days following the service of a complaint, third-party complaint, cross-claim or counterclaim or any answer thereto or any amendment to any of the above.<br/><br/> You understand and agree that before you take a dispute to arbitration under this Agreement, you must first contact our customer account representatives and give us an opportunity to resolve this dispute. Similarly, before TransUnion Interactive takes a dispute to arbitration, we must first attempt to resolve it by contacting you. If the dispute cannot be satisfactorily resolved within sixty days from the date you or TransUnion Interactive is notified by the other of a dispute, either party may then contact the AAA in writing and request arbitration of the dispute. Information about the arbitration process and the AAA's arbitration rules and its fees are available from the AAA on the Internet at <a href='#'>http://www.adr.org.</a><br/><br/> The cost of any arbitration proceeding shall be divided as follows:<br/><br/> <ul><li>If you initiate arbitration, you will be responsible for paying one half of the filing fee, or $125.00, whichever is less, when the demand for arbitration is made.</li><li>If we initiate arbitration, we will be responsible for paying all arbitration costs.</li><li>Regardless of who initiates the arbitration, you will not be responsible for any arbitration fees that exceed one half of the filing fee, or $125.00, whichever is less, or the fees that you would have incurred if the Claim had been brought in court. Notwithstanding the foregoing, if you believe the cost of arbitration may be too burdensome, you may seek a waiver of the filing fee under the applicable arbitration rules. If you seek, but not qualify for such waiver, we will consider a written request from you to advance all or part of the filing fee.</li></ul><br/> <br/>The arbitration will be based only on the written submissions of the parties and the documents submitted to the AAA relating to the dispute, unless either party requests that the arbitration be conducted using the AAA's telephonic, online, or in-person procedures (additional charges may apply for these procedures). Any arbitration proceeding will take place at a location within the federal judicial district that includes the most recent U.S. Mail address we have on file for you at the time the Claim is filed or at any other mutually acceptable location.<br/><br/> The arbitrator will be required to follow relevant law and applicable judicial precedent to arrive at a decision and shall be empowered to grant whatever relief would be available in court. Where authorized by applicable law, the arbitrator's award may include attorneys' fees and other expenses. You understand and agree that you and TransUnion Interactive are entering into this arbitration agreement in connection with a transaction involving interstate commerce. Accordingly, this arbitration agreement and any proceedings hereunder shall be governed by and enforceable under the Federal Arbitration Act (“FAA”), 9 U.S.C. §§1-16.<br/><br/> Any party to the arbitration proceeding may enter judgment upon the arbitration award in any court having jurisdiction over the arbitration award and may have that judgment enforced by any court having jurisdiction over that judgment. If this Arbitration Agreement is held to be invalid or otherwise unenforceable for any reason, it will be severed from the Agreement and the parties agree that exclusive jurisdiction and venue for any claims will be within the federal judicial district that includes the most recent U.S. Mail address we have on file for you at the time the Claim is filed or at any other mutually acceptable location.<br/><br/> BECAUSE YOUR ACESS TO AND USE OF MyCredit Guide<sup>&reg;</sup> REQUIRES THAT YOU CONSENT TO ARBITRATION OF YOUR CLAIMS OR DISPUTES, YOU WILL NOT HAVE THE RIGHT TO PURSUE YOUR CLAIM IN COURT OR BEFORE A JUDGE OR JURY OR TO PARTICIPATE IN A CLASS ACTION OR ANY OTHER COLLECTIVE OR REPRESENTIVE PROCEEDING. OTHER RIGHTS THAT EITHER PARTY WOULD HAVE IF THAT PARTY WENT TO COURT, INCLUDING WITHOUT LIMITATION THE RIGHT TO CONDUCT DISCOVERY OR TO APPEAL, MAY BE LIMITED OR UNAVAILABLE IN ARBITRATION.<br/><br/> The arbitrator's decision shall become final and binding after 30 days unless a party to the arbitration takes an appeal from the decision by making a written request to AAA. The appeal panel, which will consist of three arbitrators, will consider all factual and legal issues anew, will conduct the appeal in the same manner as the initial arbitration, and will make decisions based on the vote of the majority. We will advance any fees and costs required by AAA to commence any appeal. The appeal panel's decision shall be final and binding.<br/><br/> In the event of a conflict between the applicable arbitration rules and this Arbitration Agreement, this Arbitration Agreement shall govern. To the extent that the class action and collective action waivers contained herein are rendered invalid or unenforceable by applicable law as to any Claims, this Arbitration Agreement shall not apply to such Claims and thus we may elect to proceed exclusively in court. If any other provision of this Arbitration Agreement should be found invalid or unenforceable, such a determination shall not affect the enforceability of the remaining provisions, which shall remain and continue in full force and effect.",
                  },
                ],
              },
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Privacy",
        type: "DCR",
        name: "default_en-US_Privacy",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Privacy/data/en-US/Privacy",
          dcrContent: {
            Content: {
              Privacy_TabName: "Privacy Policy",
              Privacy_Content: {
                tabHeading:
                  "https://www.transunion.com/privacy/consumer-interactive",
                tabDescription:
                  "<br/>Effective Date: 07/29/2020 <br/><br/>Last Updated: 07/29/2020 <br/><br/> We have recently updated this Privacy Notice. Be sure to review the notice carefully to understand TransUnion Interactive's privacy practices.",
                itemList: [
                  {
                    Title: "Introduction",
                    Description:
                      '<br/>This Privacy Notice ("Notice") provides information about how TransUnion Interactive, Inc. ("We," "Us," "Our," "TUI") collects, uses, protects, and shares personal information about you and describes the rights you may have regarding your personal information. This Notice applies to TUI, its websites, applications, products ("The Products"), features, and application program interfaces, when you communicate or interact with us either directly or through the use of any of our online systems and applications, (collectively, the "Online and Offline Services"). This Notice applies to the MyCredit Guide<sup>&reg;</sup>™ Dashboard membership program. Use of our Online and Offline Services constitutes your agreement to the terms of this Notice. If you do not agree with the terms of this Notice, please do not use our Online and Offline Services.',
                  },
                  {
                    Title: "Collection and use of your personal information",
                    Description:
                      "<br/>Personal information we may collect, from whom or how we may collect, and why we may collect it",
                    SubItem_List: [
                      {
                        SubItem_Title:
                          "IDENTIFIERS, INCLUDING THOSE IN THE CALIFORNIA CUSTOMER RECORDS STATUTE",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Name (first, last, and/or maiden name) (or that of a family member or child); home address, billing address, or other physical address; an email address (so we may communicate with you); a telephone number</li><li>Social security number; or certain other information, such as date of birth, employment information, and credit card account information</li><li>Device identification information which we may associate with a mobile telephone number you provide in order to access &nbsp;the Online Services</li><li>Information collected passively via cookies and similar technology</li><li>IP addresses, device identifiers, and application identifiers</li><li>Account and password information related to financial services</li><li>Debt, income and financial information</li><li>Driver's license number and passport number</li><li>Utility and income information</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li><li>Information collected passively via cookies and similar technology</li><li>Advertising Partners</li><li>Credit reporting agency and its affiliates</li><li>External data providers, vendors</li></ul><h4>Why we may collect it</h4></br><ul><li>To verify your identity</li><li>To enroll you in the Product, finalize your application during the enrollment process and create your TUI Product membership program</li><li>To provide you with products and their features</li><li>To send emails and other alerts</li><li>To process payment and complete the transaction</li><li>To provide you with quality customer service</li><li>For product development, product research, and product improvement by TUI and its Affiliates, or the TransUnion family of companies</li><li>To prevent fraud on your account, or to identify fraudulent activity towards TUI</li><li>To enhance and optimize your experience on our Online and Offline Services and improve our Products, for example, to test new products, to determine if products that we are contemplating may be desirable to our customers, for analytics, marketing research, and business analysis</li><li>To perform analytics, improve user experience, improve our product offerings</li><li>To maintain the accuracy of your credit report and information</li><li>To participate in our affiliate program, subscribe to our emails or newsletter, participate in one of our contests or surveys or &nbsp;transact other business with us</li><li>To display, optimize and provide you with personalized advertisements</li><li>To communicate with you</li><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product; promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "PROTECTED CLASSIFICATION CHARACTERISTICS UNDER CALIFORNIA OR FEDERAL LAW",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Date of Birth</li><li>Ethnicity</li><li>Marital Status</li></ul></br><h4>From whom or how we may collect it</h4></h4><ul><li>Consumers</li><li>Advertising partners</li><li>Credit reporting agency and its affiliates</li></ul><h4>Why we may collect it</h4><ul><li>To verify your identity</li><li>To enhance and optimize your TUI Product membership program experience</li><li>To provide you with advertisements that are more relevant to your demographic</li><li>To finalize your application and create your TUI Product membership program</li><li>To display, optimize and provide you with personalized advertisements</li><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product; promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                      {
                        SubItem_Title: "COMMERCIAL INFORMATION",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Purchase records of our Product</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li><li>Payment processor</li><li>TUI</li></ul><h4>Why we may collect it</h4><ul><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product, promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>To keep a record of your transaction history.</li></ul>",
                      },
                      {
                        SubItem_Title: "BIOMETRIC",
                        SubItem_Description: "<ul><li>Not collected</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "INTERNET OR OTHER SIMILAR NETWORK ACTIVITY",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Information about your interactions with the website, for example, when you view or search content, we receive and track that information; web session; log file information; information such as the website(s) you visited, when you visited the website, how long you stayed, your behavior while you were on our website and from what device you accessed the website; device identification information which we may associate with a mobile telephone number you provide used to access the website; the IP address and information related to that IP address, the internet service provider or proxy used, operating system information, browser information (the pages you view, how long you stay on each page, how often you come back and your behavior while you are on our websites); and which advertisement, emails, SMS notifications or other push notifications related to the website and/or Product, offer or online content you view, access, or click on, including to get to the Online Services or while you are on the websites</li><li>Information collected from advertising partners</li><li>Local Storage Objects such as HTML5 and Flash to store content information and preferences</li></ul></br><h4>From whom or how we may collect it</h4><ul><li>Consumers</li><li>Cookies and similar technology</li></ul><h4>Why we may collect it</h4><ul><li>To continually enhance and optimize the Product and the Online Services, based on up-to-date user experience and available technology</li><li>To improve the delivery and development of the Product</li><li>To customize your web site and/or customer service experience</li><li>To develop new Products</li><li>To display, optimize, and provide you with personalized advertisements</li><li>To measure advertising effectiveness</li><li>To perform site analysis</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                      {
                        SubItem_Title: "GEOLOCATION DATA",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>We collect geolocation data by using various technologies to determine your location including, but not limited to IP address, Wi-Fi access points, and cell towers</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li><li>Cookies and similar technology</li><li>Telecommunications providers</li></ul><h4>Why we may collect it</h4><ul><li>Fraud prevention</li><li>Targeted advertisements</li><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product; promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                      {
                        SubItem_Title: "SENSORY DATA",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Audio and electronic recording, for example, when you call in with a question to customer service</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li></ul><h4>Why we may collect it</h4><ul><li>To provide customer service and support consumers</li><li>To train agents to ensure best customer service delivery</li><li>To ensure legal and compliance obligations</li><li>To help answer questions and resolve disputes</li></ul>",
                      },
                      {
                        SubItem_Title: "PROFESSIONAL OR EMPLOYMENT",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Employment</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li></ul><h4>Why we may collect it</h4><ul><li>To enhance and optimize your experience and improve our Products and our Affiliates' Products, for example, to test new products, to determine if products that we are contemplating may be desirable to our customers, for analytics, marketing research, and business analysis</li><li>To display, optimize and provide you with personalized advertisements.</li></ul>",
                      },
                      {
                        SubItem_Title: "NON-PUBLIC EDUCATION INFORMATION",
                        SubItem_Description: "<ul><li>Not collected</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "INFERENCES DRAWN FROM OTHER PERSONAL INFORMATION",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Site preferences and characteristics, for example, your behavior on our sites</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumer</li><li>Cookies and similar technology</li><li>Advertising partners</li></ul><h4>Why we may collect it</h4><ul><li>To determine how users interact with our website and how we can improve the user experience</li><li>To create a customer profile in order to better optimize your customer experience and offer personalized advertisements</li><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product; promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                    ],
                  },
                  {
                    Title: "Sharing your personal information",
                    Description:
                      "Personal information disclosed for a business purpose during the prior 12 months, by category of third parties. We may share your personal information with the following recipients or categories of recipients:",
                    SubItem_List: [
                      {
                        SubItem_Title:
                          "IDENTIFIERS, PERSONAL INFORMATION CATEGORIES LISTED IN THE CALIFORNIA CUSTOMER RECORDS STATUTE, PROTECTED CLASSIFICATION CHARACTERISTICS UNDER CALIFORNIA OR FEDERAL LAW",
                        SubItem_Description:
                          "<ul><li>Commercial partners or non-affiliated third parties, in order to provide and continually enhance the Product and deliver Personalized offers to you</li><li>Consumer data resellers, with whom we form indirect partnerships</li><li>Advertising networks, to provide personalized advertisements, reporting purposes, analytics, if applicable</li><li>Affiliates, to improve their product offerings, to offer consumers targeted offers and advertising</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services, Product and understand consumer and optimize experience</li><li>Service provider, third parties with whom we contract to enable certain services, such as, for example, email list and email management, marketing, customer support, Product fulfillment, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the Online Services website to a third party site</li><li>Marketing companies, to provide personalized advertisements and enhance the your experience; measure advertising effectiveness; provide advertising services such as advertising placement, advertising performance, cookie management</li><li>Affiliates, or the TransUnion family of companies, to enable updates on TransUnion's consumer credit database; deliver, enhance or develop the Products and those of TransUnion companies, or for internal business purposes; and to provide you with products, to improve our product offerings, to facilitate and improve our advertising, improve our database accuracy, or to send you Personalized Offers</li><li>Government entities and regulators, to respond to regulator request</li><li>Parties to litigation, to provide required documentation for litigation</li><li>Operating systems and platforms, to share with a different system or database, for example, to process payments</li><li>Law enforcement agencies, without your consent pursuant to a subpoena or when required by other legal process, government request, to protect TUI's rights, to protect the rights, privacy, safety or property of TUI and its Affiliates, you, or another individual, and otherwise as may be necessary or required by applicable law or regulation. This may include responding to legal requests from jurisdictions outside of the United States; to detect, prevent and address fraud and other illegal activity, including as part of internal investigations and remediation efforts, to protect TUI and its Affiliates, you and others, and to prevent harm to you or any other individual</li><li>To consultants, agents and advisors, such as attorneys and accountants, in the good faith belief that such disclosure is within the scope of their professional duties to TUI and with the understanding that such professionals will abide by our security and confidentiality policies</li><li>Internet service providers</li><li>Data analytics providers, to optimize customer experience</li><li>Credit reporting agencies to obtain your requested credit report.</li></ul>",
                      },
                      {
                        SubItem_Title: "COMMERCIAL INFORMATION",
                        SubItem_Description:
                          "<ul><li>Data analytics providers, for testing purposes</li><li>Affiliates, or the TransUnion family of companies, to enable updates on TransUnion's consumer credit database; deliver, enhance or develop the Products and those of TransUnion companies, or for internal business purposes; and to provide you with products, to improve our product offerings, to facilitate and improve our advertising, or improve our database accuracy.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "INTERNET OR OTHER SIMILAR NETWORK ACTIVITY",
                        SubItem_Description:
                          "<ul><li>Data analytics providers, to optimize customer experience</li><li>Service provider, to scrub against opt out list</li><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners, in order to provide and continually enhance the Product and deliver Personalized offers to you</li><li>Consumer data resellers, with whom we form indirect partnerships</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services, Product and understand consumer experience</li><li>Marketing companies, to provide personalized advertisements and enhance your experience</li><li>Service providers, third parties with whom we contract to enable certain services, such as, for example, email list and email management, marketing, customer support, Product fulfillment, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and to interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the Online Services website to a third party site</li><li>Internet service providers.</li></ul>",
                      },
                      {
                        SubItem_Title: "GEOLOCATION DATA",
                        SubItem_Description:
                          "<ul><li>Data analytics providers, for analytics and testing purposes.</li></ul>",
                      },
                      {
                        SubItem_Title: "SENSORY DATA",
                        SubItem_Description:
                          "<ul><li>Law enforcement agencies, only as required by law</li><li>Government entities and regulators, to respond to regulator request</li><li>Parties to litigation, to provide required documentation for litigation.</li></ul>",
                      },
                      {
                        SubItem_Title: "PROFESSIONAL OR EMPLOYMENT",
                        SubItem_Description:
                          "<ul><li>Service provider, third parties with whom we contract to enable certain services, such as, for example, email list and email management, marketing, customer support, Product fulfillment, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, to interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the Online Services to a third party site</li><li>Affiliates, or the TransUnion family of companies, in order to deliver, enhance or develop the Products and those of TransUnion companies, or for internal business purposes</li><li>Data analytics providers, to optimize customer experience</li><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners, in order to provide and continually enhance the Product and deliver Personalized offers to you</li><li>Consumer data resellers , with whom we form indirect partnerships</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services, Product and understand consumer experience</li><li>Marketing companies, to provide personalized advertisements and enhance your experience.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "INFERENCES DRAWN FROM OTHER PERSONAL INFORMATION",
                        SubItem_Description:
                          "<ul><li>Service provider, third parties with whom we contract to enable certain services, such as, for example, email list and email management, marketing, customer support, Product fulfillment, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the Online Services to a third party site</li><li>Affiliates in the TransUnion family of companies, in order to deliver, enhance or develop the Products and those of TransUnion companies, or for internal business purposes</li><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners, in order to provide and continually enhance the Product and deliver Personalized offers to you</li><li>Consumer data resellers, with whom we form indirect partnerships</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services, Product and understand consumer experience</li><li>Marketing companies, to provide personalized advertisements and enhance your experience.</li></ul>",
                      },
                    ],
                  },
                  {
                    Title: "Personal information sold",
                    Description:
                      "Categories of personal information sold during the prior 12 months, by category of third parties",
                    SubItem_List: [
                      {
                        SubItem_Title:
                          "Identifiers and personal information categories listed in the California Customer Records statute",
                        SubItem_Description:
                          "<ul><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners or non-affiliated third parties in order to provide and continually enhance the Product and deliver personalized offers to you</li><li>Consumer data resellers</li><li>Marketing companies, to provide personalized advertisements and enhance the your experience</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Protected classification characteristics under California or federal law",
                        SubItem_Description:
                          "<ul><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners or non-affiliated third parties in order to provide and continually enhance the Product and deliver personalized offers to you</li><li>Consumer data resellers</li><li>Marketing companies, to provide personalized advertisements and enhance the your experience</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title: "Commercial information",
                        SubItem_Description:
                          "<ul><li>Advertising networks, to provide personalized advertisements</li><li>Consumer data resellers</li><li>Marketing companies, to provide personalized advertisements and enhance the your experience</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title: "Biometric",
                        SubItem_Description:
                          "<ul><li>We do not sell this category of personal information.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Internet or other similar network activity",
                        SubItem_Description:
                          "<ul><li>Advertising networks</li><li>Commercial partners</li><li>Consumer data resellers</li><li>Marketing companies</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title: "Geolocation data",
                        SubItem_Description:
                          "We sell personal information that may allow a third party to determine location, such as IP addresses. <br/> <ul><li>Advertising networks</li><li>Commercial partners</li><li>Consumer data resellers</li><li>Marketing companies</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title: "Sensory data",
                        SubItem_Description:
                          "<ul><li>We do not sell this category of persona information.</li></ul>",
                      },
                      {
                        SubItem_Title: "Professional or employment",
                        SubItem_Description:
                          "<ul><li>Advertising networks</li><li>Commercial partners</li><li>Consumer data resellers</li><li>Marketing companies</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our &nbsp;&nbsp;&nbsp;&nbsp;Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Non-public education information( per the Family Educational Rights and Privacy Act )",
                        SubItem_Description:
                          "<ul><li>We do not sell this category of personal information.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Inferences drawn from other personal information",
                        SubItem_Description:
                          "<ul><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners or non-affiliated third parties, in order to provide and continually enhance the Product and deliver personalized offers to you</li><li>Consumer data resellers, with whom we form indirect partnerships</li><li>Marketing companies</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                    ],
                  },
                  {
                    Title: "Your Authorization to TUI",
                    Description:
                      "<br/>When you enrolled, you provided written instruction and authorization for TUI to obtain your credit information from TransUnion, Experian and Equifax (depending on the Product) to display it to you, as well as to use and share the information provided by you, along with your credit information, to obtain personalized offers from third parties and display personalized offers to you.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "Cookies, pixels, and similar technology",
                    Description: "",
                    SubItem_List: {
                      SubItem_Title:
                        "Information collected passively via cookies and similar technology",
                      SubItem_Description:
                        "<br/>A cookie is a small text file that a web server places on your computer or device when your browser accesses a website. Cookies store data specific to a client or website and are designed to create a record of or \"remember\" online activity. We use cookies for a number of different purposes. Some cookies are necessary to ensure the site functions properly and some enable us to deliver an individualized Online Services experience.<br/> <br/>When you use the site, TUI, commercial partners, and service providers may use cookies and similar technologies like pixel tags and web beacons to facilitate your access to and use of our Online Services, and to improve, enhance and personalize your experience for advertising purposes on the site. For example, we use this technology to recognize you each time you return to the site using the same computer or device so that you do not have to re-enter all of your personal information on each visit. Like many websites, we also use this technology to collect and store information to customize user experience, track activity on the site, as well as to deliver and measure online advertising, including Personalized offers and retarget advertisements. TUI advertising commercial partners and service providers may also use cookies or similar technologies for the management and delivery of email communications so that, for example, TUI knows when an email communication to you has been delivered or opened.<br/> <br/>You generally have the ability to accept or decline cookies. Most web browsers give you a choice to modify your browser settings to decline some or all cookies. We provide you choices to manage your privacy and sharing. Not accepting cookies may make certain features of the site unavailable to you. If you would like more information about cookies, you can visit <a href='http://www.cookiecentral.com/n_cookie_faq.htm'>Click Here</a> <br/><br/>Partners and service providers may separately permit you to opt-out of some or all of their information collection activities.",
                    },
                  },
                  {
                    Title: "Analytics",
                    Description:
                      "<br/>TUI uses a number of additional third party tools for analytical and advertising purposes. These tools provide internet or similar network activity, geolocation and inferences drawn from other network activity, collected over time, and from other websites on which TUI displays advertisements and enables TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services and Product, as well as understand consumer experience. We may also use this information to segment, enhance or modify our advertisements and to personalize your experience.",
                    SubItem_List: {
                      SubItem_Title: "Analytics Disclosure",
                      SubItem_Description:
                        "<br/>TUI uses Google Analytics 360, including Google Tag Manager and Google Ads. If you would like to learn more about Google Analytics, or opt-out of this data collection and sharing activity, please use this link: <a href='#'>https://www.google.com/policies/privacy/partners/</a>.",
                    },
                  },
                  {
                    Title: "TransUnion's credit reporting business",
                    Description:
                      "<br/>Access to information on this TransUnion database is limited to: (1) entities with a permissible purpose to receive it, as defined in the Fair Credit Reporting Act; (2) entities with a permitted use under the Gramm-Leach-Bliley Act; (3) companies who resell TransUnion data as permitted under law; and (4) companies who process data on behalf of TUI or TransUnion.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "Personalized (Third Party) Offers",
                    Description:
                      "<br/>In order to provide you with an optimal consumer experience, TUI strives to continually personalize the Product, including the offers displayed on the Product dashboard and delivered to you by email for some of the Online Services. TUI wants users to have access to personalized offers based on individual user credit experience, and not generic offers that may or may not be suited to an individual user's needs. Personalized offers, including prescreen offers, are third-party offers displayed automatically on the Product dashboard, via email, and in addition to other display locations as part of the Product. TUI may share personal information with Affiliates and commercial partners or service providers so that the personalized offers can be generated by the third party and then displayed to you. For example, in order to enable the delivery of a personalized offer from a lender (itself or through an aggregator of loan offers), the lender must have access to your personal information to extend an appropriate offer for which you may be eligible. The lender may separately access your credit information if it has a lawful purpose to do so. In addition to seeing personalized offers on the Product dashboard, you may receive personalized offers via email or other forms of communication from TUI.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "Links to other sites or services",
                    Description:
                      "<br/>This Notice does not apply to other third-party sites or services. Please remember that personalized offers and other opportunities presented on Online Services will include a link or linking ability to a third-party site or application. If you click on a link or browse to a third-party site from our site/service, your activity and interaction is subject to that third party's rules and policies. These third party sites are not controlled by TUI and TUI is not responsible for the privacy practices or the content of any such third party site. Personalized offers are provided to you as a convenience and the display of a third party offer through our Online Services is not an endorsement by TUI. If you provide any information to a third party, then the third party's respective privacy policies will apply with regard to any information you provide or which may be collected by the third party. If, however, the third-party site provides that TUI's Privacy Notice applies to the information provided by you on that site, then TUI's policies will apply to the information collected for the purpose of enrolling in the Product once we receive the information from you or the third party. We recommend that you review the online privacy statements on these other sites to understand their privacy practices and treatment of personal information so that you can make an informed decision regarding your use or interaction with their site/service. <br/> <br/>Under the FCRA, our parent company, TransUnion, may provide information to companies that provide you with pre-approved offers of credit or insurance. If you prefer not to receive such offers, you may opt-out by calling 1-888-5OPTOUT or visiting <a href='https://www.optoutprescreen.com/' target='_blank'>https://www.optoutprescreen.com/</a>.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "Market research",
                    Description:
                      "<br/>From time-to-time, you may be presented with a survey or other questions to solicit feedback about your use of the Product and the Online Services. Your participation in these types of market research activities is optional. Should you choose to participate, we may use information you provide to improve and/or develop our Product and services.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "Securing your personal information",
                    Description:
                      "<br/>We take security seriously at TUI and TransUnion and maintain physical, electronic, and administrative safeguards to protect any information that we collect. TransUnion and TUI use security technologies to safeguard credit information and any information you provide us, and maintain policies, procedures, and compliance mechanisms, such as training, independent review and third-party verification of our stated practices, to ensure adherence to our information security plans. When TUI shares information as described in this Privacy Notice, we enter into written agreements with such third parties to ensure that the physical and information security environments of such third parties satisfy TransUnion and TUI standards.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "Managing Your Account",
                    Description:
                      "<br/>You are responsible for maintaining the accuracy of the information that you provide to TUI and for your own password management and online safety when accessing this Product. Please always consider best practices like changing your password routinely, using a strong password that is not the same as you use for other websites, and not accessing the Product with unsecure devices or unsecure networks. You may make changes to your account settings on the Your Profile settings tab, including your email address, phone number, mailing address, payment card information and password details. You may also cancel your account online, if applicable, and manage communications preferences related to certain types of communications (email and SMS/MMS) from TUI to you. Please note that although you may manage communication preferences so that you do not receive commercial communications from TUI outside of the Product dashboard, you may not decline to receive transactional communications from TUI, which contain information about your account and the Product. Please also note that important information about your account, including the alerts that are a part of the Product, will be sent to the email address and/or phone number that you have provided, if applicable. It therefore is important that you update your account information when necessary and actively check email communications from TUI.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "Personal information of Children",
                    Description:
                      "<br/>You must be at least 18 to access our Online and Offline Services and Products or become a member of any membership program entitled to membership benefits. Our Online and Offline Services are not intended for use by children and we do not knowingly solicit or collect information from children.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "Assignment",
                    Description:
                      "<br/>TUI reserves the right to transfer or assign any and all of the information that we collect on the website to an Affiliate including in connection with any reorganization, merger, sale, joint venture, assignment, transfer or other disposition of part or all of the business, assets or stock of TUI.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "California Privacy Rights",
                    Description:
                      "<br/>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA).",
                    SubItem_List: [
                      {
                        SubItem_Title: "Right to know",
                        SubItem_Description:
                          "<br/>You have the right to request a disclosure of the personal information collected, sold, and shared about you over the past 12 months and the purpose for doing so. Upon submission of a verifiable consumer request, we will provide you with the following information. <br/><ul><li>The categories of personal information we collected about you.</li><li>The categories of sources from which we collected your personal information.</li><li>Our business or commercial purpose for collecting or selling the personal Information.</li><li>The categories of third parties with whom we share personal Information.</li><li>The specific pieces of personal information we collected about you.</li><li>The categories of personal information that we sold in the preceding 12 months, and for each category identified, the categories of third parties to which we sold that particular category of personal information.</li><li>The categories of personal information that we disclosed for a business purpose in the preceding 12 months, and for each category identified, the categories of third parties with whom we disclosed that particular category of personal information</li></ul><br/>If we provide this information to you electronically, the information will be in a portable format. To the extent that it is technically feasible, we will provide you the information in a readily useable format that you can easily transfer to another entity. Effective January 1, 2020, <a href='https://www.transunion.com/consumerprivacy/'>Click Here</a> to exercise your rights with TUI. Please refer to your primary banking CCPA site or guidance page for more information.",
                      },
                      {
                        SubItem_Title: "Right to deletion",
                        SubItem_Description:
                          "<br/>If we collected personal information from you, you have the right to request the deletion of this personal information. Effective January 1, 2020, <a href='https://www.transunion.com/consumerprivacy/'>Click Here</a> to exercise your rights with TUI. Please refer to your primary banking CCPA site or guidance page for more information</br>",
                      },
                      {
                        SubItem_Title: "Right to be free from discrimination",
                        SubItem_Description:
                          "<br/>You have the right to be free from discrimination for exercising any of the California consumer privacy rights. If you choose to exercise any of your CCPA rights, we will not:<br/><ul><li>Deny you goods or services;</li><li>Charge you a different price or rate for goods or services, including through granting discounts or other benefits, or imposing penalties;</li><li>Provide you a different level or quality of good or services; or</li><li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Right to opt-out of the sale of personal information",
                        SubItem_Description:
                          "<br/>You have the right, at any time, to direct a business that sells your personal information to third parties to not sell your personal Information. If you would like to exercise this right with TUI, visit our <a href='https://www.transunion.com/optout/'>\"Do not sell my personal information\"</a> page. Please refer to your primary banking CCPA site or guidance page for more information.",
                      },
                      {
                        SubItem_Title:
                          "Right to Opt-In the Sale of Personal Information for Children",
                        SubItem_Description:
                          "<br/>We do not provide a right to opt-in because we do not offer this Product to minors.",
                      },
                      {
                        SubItem_Title: "Right to Know",
                        SubItem_Description:
                          '<br/>You have the right to know the categories of personal information we collect and the purpose for the collection. <br/>You have the right to know the categories of personal information that we collected, sold, and disclosed for a business purpose during the prior 12 months. The charts in Sections 2 and 3 above summarize the categories of personal information that we have generally collected, sold, and disclosed for a business purpose in the preceding twelve months. <br/><br/>Please review the sections titled "Collection and use of your personal information" and "Sharing your personal information" to understand our practices. If you intend to exercise your rights with TUI, <a href=\'https://www.transunion.com/consumerprivacy/\'>Click Here</a>. Please refer to your primary banking CCPA site or guidance page for more information.',
                      },
                    ],
                  },
                  {
                    Title: "Authorized Agent",
                    Description:
                      "<br/>If a consumer is using an authorized agent to submit a CCPA privacy request to know (disclosure report) or delete their personal information, the following is required.",
                    SubItem_List: [
                      {
                        SubItem_Title:
                          "Using an authorized agent without power of attorney to submit a request to know or delete",
                        SubItem_Description:
                          "<br/><ol><li>Signed permission from the consumer authorizing the agent to submit the CCPA privacy request(s) on their behalf. Describe the type of privacy request(s) (know/disclosure report and/or deletion).</li><li>The consumer must verify their own identity directly with the business by submitting information or documentation that provides sufficient proof of identification, such as:<ul><li>a Social Security number or a copy of a social security card issued by the Social Security Administration,</li><li>a certified or official copy of a birth certificate issued by the entity authorized to issue the birth certificate, or</li><li>a copy of a driver's license, an identification card issued by the motor vehicle administration or any other government issued identification.</li></ul></li></ol>",
                      },
                      {
                        SubItem_Title:
                          "Using an authorized agent with power of attorney to submit a request to know or delete",
                        SubItem_Description:
                          "If you have provided the authorized agent with power of attorney pursuant to California Probate Code sections 4000 to 4465, provide only the following: <br/><ul><li> the valid power of attorney executed lawfully under California Probate Code sections 4000 to 4465.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Using an authorized agent to submit an opt-out request",
                        SubItem_Description:
                          "<ul><li>written permission, signed by the consumer, authorizing the agent to submit the opt-out request.</li></ul> <br/> Please send your letter and documentation to the following address:  TransUnion Data Privacy Request <br/> P.O. Box 130 <br/> Woodlyn, PA 19094   ",
                      },
                    ],
                  },
                  {
                    Title: "Contact Information",
                    Description:
                      "<br/>If you have questions or concerns regarding this Notice or the protection of your personal information and privacy rights, you may contact us in the following ways:",
                    SubItem_List: {
                      SubItem_Title: "All Locations",
                      SubItem_Description:
                        "<br/>Phone:        1-866-310-8783 <br/> Postal Mail:  TransUnion Data Privacy Request, P.O. Box 130, Woodlyn, PA 19094",
                    },
                  },
                  {
                    Title: "Notice changes and effective date",
                    Description:
                      "<br/>We may periodically make changes to this Notice and recommend that you check back to review this Notice so that you always know how we collect, use, and share your personal information. TUI reserves the right to change this Notice at any time without prior notice. We will inform you of changes to the Notice on the website. The effective date denotes the date that we publish this Notice to our online services. Use of the Product following any change constitutes your acceptance of the Notice then in effect. We encourage you to check the website periodically for updates to our Notice.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                ],
              },
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_FAQ",
        type: "DCR",
        name: "default_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title: "What is the MyCredit Guide<sup>®</sup>?",
                      Content:
                        "MyCredit Guide<sup>&reg;</sup> provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my MyCredit Guide<sup>®</sup>?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the MyCredit Guide<sup>®</sup>. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using MyCredit Guide<sup>®</sup> impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title: "How do I cancel MyCredit Guide<sup>®</sup>?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Manage-Account">Click here</a> to cancel your MyCredit Guide<sup>&reg;</sup> service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your MyCredit Guide<sup>&reg;</sup> subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at 1-888-226-4988.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Articles",
        type: "DCR",
        name: "default_en-US_Articles",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Articles/data/en-US/Articles",
          dcrContent: {
            Content: {
              Articles_Title: "Credit Education",
              Articles_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title: "Credit Report Information 101",
                      Content:
                        "The credit reporting bureaus — TransUnion, Equifax and Experian\n" +
                        "                — are the three major companies that maintain credit reports.\n" +
                        "                The reporting companies issue credit reports to creditors,\n" +
                        "                insurers and others as permitted under law for the purposes of\n" +
                        "                evaluating your financial responsibility.\n" +
                        "<h3>Here is an example of how the system works:</h3>\n" +
                        '<ol className="list">' +
                        "<li><h4>Apply for a Credit Card</h4>" +
                        "<p>When you apply for a new credit card, the creditor requests" +
                        "a copy of your financial history, or credit report, from one" +
                        "or more of thr credit reporting companies.</p></li>" +
                        "<li><h4>The Creditor's Assessment</h4>" +
                        "<p>The creditor may use your credit report, a score, and other\n" +
                        "                    information you provide (such as income or debt information)\n" +
                        "                    to determine whether to approve your application and what\n" +
                        "                    rates to offer.</p></li>" +
                        "<li><h4>The Creditor's Decision</h4>" +
                        "<p>If you are issued a card, the creditor reports that account\n" +
                        "                    to the credit reporting companies, and then updates it,\n" +
                        "                    including your balance and payment activity, about every 30\n" +
                        "                    days.</p></li>" +
                        "<li><h4>Your Credit Profile Updated</h4>" +
                        "<p>The credit reporting companies update your credit report as\n" +
                        "                    they receive new information from creditors and lenders.\n" +
                        "                    Your credit profile changes based on your financial\n" +
                        "                    activity. The next time you apply for a credit card or loan,\n" +
                        "                    the process repeats.</p></li>" +
                        "</ol>" +
                        "<h3>Your Credit Report</h3>" +
                        "<p>Your report is divided into six main sections. When you open a\n" +
                        "                new account, miss a payment or move, these sections are updated\n" +
                        "                with new information.</p>" +
                        "<h3>These section are:</h3>" +
                        "<ul>" +
                        "<li>Identifying information <br /> (name, address, birth date\n" +
                        "                    and Social Security number)</li>" +
                        "<li>Employment</li>" +
                        "<li>Consumer Statement</li>" +
                        "<li>Account Information</li>" +
                        "<li>Public Records</li>" +
                        "<li>Inquiries</li>" +
                        "</ul>" +
                        "<h3>Managing Your Credit Report</h3>" +
                        "<ul>" +
                        "<li><h4>Negative Records</h4>" +
                        "Late payments create a negative record. Generally, negative\n" +
                        "                    records will stay on your report for up to 7 years (up to 10\n" +
                        "                    years for certain bankruptcy information). Positive records\n" +
                        "                    can remain on your credit report longer.</li>" +
                        "<li><h4>Your Credit Report is updated in most cases every 30 days</h4>" +
                        "Your credit report is updated with new information reported\n" +
                        "                    by your creditors. Most creditors report new information\n" +
                        "                    approximately every 30 days, to reflect your account\n" +
                        "                    balances and payments you make.</li>" +
                        "<li><h4>Check every 6-12 months</h4>" +
                        "Not all creditors report to all three companies; the\n" +
                        "                    companies obtain their data independently, so your credit\n" +
                        "                    reports from TransUnion, Equifax and Experian could\n" +
                        "                    substantially differ. That's why it's important to check\n" +
                        "                    your three credit reports every 6-12 months to ensure that\n" +
                        "                    the information is accurate and up-to-date.</li>" +
                        "<li><h4>Correcting inaccuracies</h4>" +
                        "Under the Fair Credit Reporting Act, consumers are protected\n" +
                        "                    if there is inaccurate information on their credit reports.\n" +
                        "                    If you find inaccurate information on your credit reports,\n" +
                        "                    you can contact the associated creditor or lender directly.\n" +
                        "                    You can also dispute the inaccuracy with the credit\n" +
                        "                    reporting companies.</li>" +
                        "<li><h4>Know the system</h4>" +
                        "Managing your credit and maintaining a good credit history\n" +
                        "                    can lead to better rates on major purchases. We recommend\n" +
                        "                    that you check your credit reports every 6-12 months, or at\n" +
                        "                    least 3 months before a major purchase, in order to identify\n" +
                        "                    potential inaccuracies and any signs of identity theft.\n" +
                        "                    <br />\n" +
                        "                    <br />\n" +
                        "                    Routine check-ups, along with paying your bills on time,\n" +
                        "                    keeping your credit card balances below 35% of their limits,\n" +
                        "                    and correcting any inaccuracies will help ensure your credit\n" +
                        "                    reports are viewed in the most favorable light.</li>" +
                        "</ul>",
                    },
                    {
                      Title: "Credit Score Recipe",
                      Content:
                        "<h3>What goes into my credit score?</h3>" +
                        "<p>Have you ever wondered how your credit score is calculated, how\n" +
                        "                something as complex as an individual's credit history is\n" +
                        "                represented by a simple three-digit number?</p>\n" +
                        "<p>It's a great question and something worth further explanation\n</p>" +
                        "<p>The credit scoring system became prevalent during the 1980's as\n" +
                        "                a way for lenders to quickly evaluate a potential borrower's\n" +
                        "                creditworthiness. Now credit scoring is used by lenders,\n" +
                        "                landlords, and utility companies to evaluate your credit\n" +
                        "                behavior.</p>" +
                        "<p>Here's an easy way to think about credit scores: they're like\n" +
                        "                pies. Similar to a recipe for a pie, the recipe for a credit\n" +
                        "                score calls for the blending together of numerous ingredients to\n" +
                        "                form a resulting product. Tastier pies have better ingredients.\n" +
                        "                So do more palatable scores.</p>" +
                        "<h3>So what are those ingredients, anyway</h3>" +
                        "<p>Using VantageScore<sup>®</sup> 3.0 as an example, let's look at 5 of the\n" +
                        "                main ingredients that factor into your credit score:</p>" +
                        "<ol>" +
                        "<li><b>Payment History.</b> Let's face it, if someone has a\n" +
                        "                    consistent history of making payments on time, they should\n" +
                        "                    probably be perceived as less of a risk than someone with\n" +
                        "                    the same exact credit profile who only has an intermittent\n" +
                        "                    history of on-time payments.</li>" +
                        "<li><b>Outstanding Debt.</b> This is the amount owed. Reducing\n" +
                        "                    Outstanding Debt is always in the best interest of your\n" +
                        "                    credit health.</li>" +
                        "<li><b>Utilization.</b> Utilization measures the amount of\n" +
                        "                    available credit one is using. VantageScore<sup>®</sup> Credit Score\n" +
                        "                    recommends keeping balances below 30% of credit limit.</li>" +
                        "<li><b>Credit Type & History.</b> History again? Yep, all else\n" +
                        "                    equal, someone with a longer and diversified credit history\n" +
                        "                    is typically seen as a less risky borrower. This fact\n" +
                        "                    reinforces the importance of establishing a solid foundation\n" +
                        "                    of good credit as early as possible.</li>" +
                        "<li><b>Recent Inquiries.</b> Each time someone authorizes a\n" +
                        "                    lender or business to make an official inquiry of his/her\n" +
                        "                    credit in connection with seeking credit, the score\n" +
                        "                    typically drop a little bit. It is important to apply for\n" +
                        "                    credit in moderation.</li></ol>" +
                        "<h3>What does this all mean?</h3>" +
                        "<p>Good credit scores and delicious apple pies have this in common:\n" +
                        "                quality ingredients. So whether you're borrowing or baking, what\n" +
                        "                matters is what you put into it.\n" +
                        "</p>" +
                        "<p>When you are preparing for a major purchase make sure you check\n" +
                        "                your credit scores and credit reports from all three credit\n" +
                        "                reporting agencies: TransUnion, Equifax and Experian. Looking at\n" +
                        "                your scores and reports a few months before your loan\n" +
                        "                application will help you get a complete picture of your credit\n" +
                        "                health.</p>\n" +
                        "<p>Source: What Influences Your Score (VantageScore Solutions,\n" +
                        '                LLC);{" "}\n' +
                        "                <a\n" +
                        '                  href="http://your.vantagescore.com/score-influences"\n' +
                        '                  target="_blank"\n' +
                        '                  rel="noreferrer"\n' +
                        "                >\n" +
                        "                  http://your.vantagescore.com/score-influences\n" +
                        "                </a></p>",
                    },
                    {
                      Title: "Credit Myths and Misconceptions",
                      Content:
                        "<p>Credit myths and misconceptions are plentiful. Don't let\n" +
                        "                incorrect information influence your credit behavior.</p>" +
                        "<h3>Some of the most common credit myths are:</h3>" +
                        "<h4>Your score drops if you check your own credit.</h4>" +
                        "<p>This widespread credit misconception fools a lot of people, but\n" +
                        '                viewing your own report and score is counted as a "soft inquiry"\n' +
                        "                and doesn't change the score one way or another. \"Hard\n" +
                        '                inquiries" by a lender or creditor, such as those resulting from\n' +
                        "                your applying for credit, may slightly lower your credit score.\n" +
                        "                If you're shopping for a loan and concerned about harm to your\n" +
                        "                score, know that multiple loan inquiries within a period of a\n" +
                        "                few weeks are usually treated as a single inquiry to minimize\n" +
                        "                impact.</p>" +
                        "<h4>Paying off a negative record means it's taken off your credit report.</h4>" +
                        "<p>Generally, negative records, such as collection accounts and\n" +
                        "                late payments, will remain on your credit reports for up to\n" +
                        "                seven years from the date of first delinquency. Paying off the\n" +
                        "                account sooner doesn't mean it's deleted from your credit\n" +
                        "                report; instead it's listed as \"paid.\" Of course, it's smart to\n" +
                        "                pay your debts, both to reduce the total amount of debt you owe\n" +
                        "                and to show your willingness to repay your obligations, but\n" +
                        "                expect the negative record to have some effect until it is\n" +
                        "                purged from your report.</p>" +
                        "<h4>Co-signing doesn't mean you're responsible for the account.</h4>" +
                        "<p>Regardless of this credit myth, if you open an account jointly\n" +
                        "                or co-sign a loan, you will be held legally responsible for the\n" +
                        "                account. Activity on the joint account is displayed on the\n" +
                        "                credit reports of both account holders. If you co-sign for a\n" +
                        "                friend's auto loan and that person doesn't make the payments,\n" +
                        "                your credit profile will be hurt and vice versa. The only way to\n" +
                        "                end the dual liability is to have one party refinance the loan,\n" +
                        "                or persuade the creditor to formally take you off the account.</p>" +
                        "<h4>Paying off a debt boosts your score by 50 points.</h4>" +
                        "<p>Contrary to this credit myth, credit reporting agencies\n" +
                        "                companies determine your credit score via a complex algorithm\n" +
                        "                that uses hundreds of factors and values to calculate it. It's\n" +
                        "                almost impossible to calculate the difference in points changing\n" +
                        "                one factor might make. It's wise to pay your bills on time, work\n" +
                        "                to lower your debts and ask that any inaccuracies be corrected.\n" +
                        "                A proven record of sound financial behavior and time will have\n" +
                        "                the most significant impact on your score.</p>",
                    },
                    {
                      Title: "Learn How To Get Credit",
                      Content:
                        "<h3>Wondering how to get credit?</h3>" +
                        "<p>If you've never had a credit card, an auto loan, or even a cell\n" +
                        "                phone in your name, then you probably have very little credit\n" +
                        "                history. Having little or no credit history can make it\n" +
                        "                difficult to get a loan. In your case, the lender has little\n" +
                        "                information for predicting how likely it is that you will repay\n" +
                        "                your debt.</p>" +
                        "<p>Fortunately, establishing credit is something you can work on\n" +
                        "                over time. There are some steps that may help when you're trying\n" +
                        "                to establish a credit history.</p>" +
                        "<h3>Establishing a new credit file takes time and patience</h3>" +
                        "<p>This isn't something that you can do overnight, and despite what\n" +
                        "                you might think, there are no shortcuts to establishing good\n" +
                        "                credit. Take your time and be patient. Avoid making applications\n" +
                        "                with places that are likely to turn you down the first time.\n" +
                        "                Each time you make a credit application, it results in a hard\n" +
                        "                inquiry. If potential creditors see numerous hard inquiries on\n" +
                        "                your file, it could have a negative impact on results of future\n" +
                        "                applications.</p>" +
                        "<p>The important thing to remember when you are establishing your\n" +
                        "                credit is to be patient and take your time. Make sure that when\n" +
                        "                you do receive credit, whether it's a loan, credit card or even\n" +
                        "                utility bills, you pay them on time.</p>" +
                        "<p>This information is for educational purposes only and does not\n" +
                        "                constitute legal or financial advice. You should always seek the\n" +
                        "                advice of a legal or financial professional before making legal\n" +
                        "                or financial decisions.</p>",
                    },
                    {
                      Title: "Tips for Raising Your Credit Score",
                      Content:
                        "<p>Self-improvement is a wonderful thing. Becoming a better public\n" +
                        "                speaker can earn you confidence and a promotion. Going to the\n" +
                        "                gym regularly can help you lose those extra pounds. And\n" +
                        "                improving your credit score can save you hundreds or even\n" +
                        "                thousands of dollars on life's big purchases. Improving your\n" +
                        "                credit is not hard to do. It just takes time and a little\n" +
                        "                knowledge about the credit scoring system.</p>" +
                        "<p>While each person's individual credit profile is different and\n" +
                        "                can be improved in different ways.</p>" +
                        "<h3>There are five basic things that everyone can do to give their credit score a boost:</h3>" +
                        "<ol>" +
                        "<li><h4>Be punctual</h4>" +
                        "<p>Pay all your bills on time each month. Late payments,\n" +
                        "                    collections, and bankruptcies have a negative effect on your\n" +
                        "                    credit scores.</p></li>" +
                        "<li><h4>Check your credit report regularly and take the necessary steps to remove inaccuracies</h4>" +
                        "<p>Don't let your credit health suffer due to inaccurate\n" +
                        "                    information. If you find an inaccuracy on your credit\n" +
                        "                    report, contact the creditor associated with the account, or\n" +
                        "                    the credit reporting agencies to have it corrected.</p></li>" +
                        "<li><h4>Manage your debts</h4>" +
                        "<p>Keep your credit card account balances below 35% of your\n" +
                        "                    available credit limits. For instance, if you have a credit\n" +
                        "                    card with a $1,000 limit, you should try to keep the balance\n" +
                        "                    owed below $350.</p></li>" +
                        "<li><h4>Give yourself time</h4>" +
                        "<p>Time is one of the most significant factors that can improve\n" +
                        "                    your credit score. Establish a long history of paying your\n" +
                        "                    bills on time and using credit responsibly. You may also\n" +
                        "                    want to keep the oldest account on your credit report open\n" +
                        "                    in order to lengthen your period of active credit use.</p></li>" +
                        "<li><h4>Avoid excessive hard inquiries</h4>" +
                        "<p>A large number of hard inquiries may be interpreted as a\n" +
                        "                    sign that you are opening numerous credit accounts due to\n" +
                        "                    financial difficulties, or overextending yourself by taking\n" +
                        "                    on more debt than you can easily repay. Apply for new credit\n" +
                        "                    in moderation.</p></li></ol>",
                    },
                    {
                      Title: "Credit Report Expiration Guide",
                      Content:
                        "<p>Late payments, tax liens, bankruptcies…Are you anxiously waiting\n" +
                        "                for old records to be removed from your credit report? Take the\n" +
                        "                initiative to check the expiration dates on records in your\n" +
                        "                report. For example, if you discover an obsolete bankruptcy from\n" +
                        "                2001 on your credit report, having it changed can boost your\n" +
                        "                credit score.</p>" +
                        "<h3>Check out the following expiration guide to kick your credit management into gear:</h3>" +
                        "<h4>Bankruptcy</h4>" +
                        "<p>Chapter 7, 11, and 13 bankruptcies remain on your credit report\n" +
                        "                for 7-10 years after the filing date. When you file for\n" +
                        "                bankruptcy, all the accounts included should be marked as\n" +
                        '                "Included in BK" and will each stay on your report for a period\n' +
                        "                of 7-10 years.</p>" +
                        "<h4>Charge-off accounts</h4>" +
                        "<p>If your delinquent account is charged-off, the record will stay\n" +
                        "                on your credit report for 7 years.</p>" +
                        "<h4>Closed accounts</h4>" +
                        "<p>If the account has delinquencies, those marks will stay on your\n" +
                        "                credit report for 7 years from the date they were reported.\n" +
                        "                Positive closed accounts (with no delinquencies or late\n" +
                        "                payments) can remain on your credit report for longer than 7\n" +
                        "                years.</p>" +
                        "<h4>Collection accounts</h4>" +
                        "<p>Accounts sent to collections will remain on your credit report\n" +
                        "                for 7 years from the date of the last 180-day late payment on\n" +
                        '                the original account. The record will be marked as "paid\n' +
                        '                collection" on your report when you pay the full balance. If you\n' +
                        "                settle with the collections agency for a reduced amount, be\n" +
                        '                aware your record will state the account as "paid for less than\n' +
                        '                the total due."</p>' +
                        "<h4>Inquiries</h4>" +
                        '<p>When a creditor or lender checks your credit it causes a "hard\n' +
                        '                inquiry" to be listed on your credit report. These hard\n' +
                        "                inquiries stay on your report for up to two years, and they can\n" +
                        "                cause a slight drop in your credit score if there are too many\n" +
                        "                of them. When your credit is checked by an employer or when you\n" +
                        '                check your own credit online, you may see a harmless "soft\n' +
                        '                inquiry" on your credit report. Soft inquiries do not cause a\n' +
                        "                drop in your credit score and do not appear when a business\n" +
                        "                checks your credit.</p>" +
                        "<h4>Judgments</h4>" +
                        "<p>Most judgments, including small claims, civil and child support,\n" +
                        "                will remain on your credit report for 7 years from the filing\n" +
                        "                date.</p>" +
                        "<h4>Late payments</h4>" +
                        "<p>If you are late with a payment, the 30 -180 day delinquency can\n" +
                        "                stay on your credit report for 7 years.</p>" +
                        "<h4>Tax Liens</h4>" +
                        "<p>City, county, state and federal tax liens are especially harmful\n" +
                        "                and can remain on your credit report indefinitely if unpaid.\n" +
                        "                Once the lien is paid the record will remain on your credit\n" +
                        "                report for 7 years from the payment date.</p>",
                    },
                    {
                      Title: "All About Credit Inquiries",
                      Content:
                        "<p>We all have them. Many of us aren't sure where they came from,\n" +
                        "                or how long they are staying. No, we're not talking about the\n" +
                        "                in-laws! We're talking about inquiries on our credit reports.\n" +
                        "                Inquiries are one of the most confusing and least understood\n" +
                        "                aspects of the credit reporting system. Here's the skinny on\n" +
                        "                inquiries and how you can manage them:</p>" +
                        "<h3>What are inquiries?</h3>" +
                        "<p>An inquiry is a record of someone checking your credit\n" +
                        '                information. Inquiries come in two distinct categories: "hard\n' +
                        '                inquiries" that occur when a business views your credit report\n' +
                        '                for the purpose of an application for credit and "soft\n' +
                        '                inquiries" that occur when your credit is checked for other\n' +
                        "                reasons or when you check your credit. If you apply for a new\n" +
                        "                credit card, a hard inquiry record will appear on your credit\n" +
                        "                report and may cause a temporary drop in your credit score. When\n" +
                        "                you check your own credit report, or when it is checked for a\n" +
                        "                pre-approved marketing purpose or for account management, it is\n" +
                        "                considered a soft inquiry and will not harm your credit score.</p>" +
                        "<h3>Will checking my own credit harm my score?</h3>" +
                        "<p>Checking your own credit data will not harm your credit score.\n" +
                        "                You can check your credit and review your data without worrying\n" +
                        "                about causing any damage to your score.</p>" +
                        "<h3>Why are inquiries recorded?</h3>" +
                        "<p>Hard inquiries are recorded so that potential creditors and\n" +
                        "                lenders can view how often you have applied for new credit.\n" +
                        "                Potential creditors may think you are trying to spend beyond\n" +
                        "                your means if there are too many hard inquiries on your credit\n" +
                        "                report. You can still shop around for a loan; multiple inquiries\n" +
                        "                for the same purpose in a short amount of time are commonly\n" +
                        "                grouped into one less harmful inquiry session. Inquiries are\n" +
                        "                also helpful for consumers because they can notify you of a\n" +
                        "                potential identity thief applying for accounts in your name.</p>" +
                        "<h3>How long do they last?</h3>" +
                        "<p>Most hard inquiries remain on your credit report for two years\n" +
                        "                from the original placement. All inquiries must stay on your\n" +
                        "                credit report for at least a year. You are allowed to dispute\n" +
                        "                inquiries on your credit report, but it can be difficult to\n" +
                        "                prove that the inquiry is indeed inaccurate. If you are unsure\n" +
                        "                of where an inquiry came from, try contacting the financial\n" +
                        "                institution listed before sending off a letter of dispute.</p>",
                    },
                  ],
                },
                {
                  Section_Title: "Identity & Safety",
                  Item: [
                    {
                      Title: "Identity & Safety",
                      Content:
                        "<p>In 2015, 13.1 million Americans were identity fraud victims.*\n" +
                        "                That's a new victim every two seconds. Education is critical to\n" +
                        "                fast recovery. Once you realize that you are a victim of fraud,\n" +
                        "                you'll want to act quickly to minimize potential damage. We\n" +
                        "                recommend you start by contacting necessary government, banking\n" +
                        "                and credit agencies to ensure they're aware of the crime and to\n" +
                        "                put a stop to any ongoing theft.</p>" +
                        "<p>Review the following tips and procedures to help resolve any\n" +
                        "                issues with your creditors, remove inaccurate information from\n" +
                        "                your credit report and prevent further fraud.</p>" +
                        "<h3>Protect your credit report immediately</h3>" +
                        "<ul>" +
                        "<li>Add a Fraud Alert to your credit report to warn potential\n" +
                        "                    credit grantors that you may be a victim of identity theft —\n" +
                        "                    online, right</li>" +
                        "<li>Consider placing a Security Freeze on your TransUnion Credit\n" +
                        "                    Report.</li>" +
                        "<li>Placing a security freeze on your credit report will stop\n" +
                        "                    lenders and others from accessing your TransUnion Credit\n" +
                        "                    Report entirely, which will prevent them from extending\n" +
                        "                    credit. You can do this online, right now.</li>" +
                        "</ul>" +
                        "<h3>Obtain and review a copy of your credit report</h3>" +
                        "<ul>" +
                        "<li>Review your TransUnion Credit Report and check for any\n" +
                        "                    unauthorized activity. Should suspicious activity show up on\n" +
                        "                    your report, contact the creditors and question the account\n" +
                        "                    and/or inquiry. Also, take full advantage of your credit\n" +
                        "                    monitoring solution, as well as any features that allow you\n" +
                        "                    to lock your report long-term.</li>" +
                        "<li>If you have questions, contact us and/or the other major\n" +
                        "                    credit reporting companies, Equifax and Experian.</li></ul>" +
                        "<h3>Report fraud to the authorities</h3>" +
                        "<ul><li>Contact government agencies, such as the Federal Trade\n" +
                        "                    Commission (FTC), to report fraudulent activity. You should\n" +
                        "                    also contact your local law enforcement agency to file a\n" +
                        "                    report. Download the FTC's Universal Fraud Affidavit.</li>" +
                        "<li>Contact your credit grantors and financial institutions.</li>" +
                        "<li>Connect with companies with whom you have financial\n" +
                        "                    relationships and inform them that your accounts may be\n" +
                        "                    compromised. Banks and credit card companies may issue new\n" +
                        "                    cards and PINs to protect your assets, and will work to\n" +
                        "                    identify and rectify any unauthorized charges.</li>" +
                        "<li>Notify your bank to stop checks, if needed. You can also\n" +
                        "                    report stolen checks.</li>" +
                        "<li>Contact any companies on your credit report that you do not\n" +
                        "                    recognize. Verify the information they have in their records\n" +
                        "                    for the reported item.</li>" +
                        "<li>Provide the companies with a copy of your police report,\n" +
                        "                    notarized FTC Affidavit and other relevant documentation.</li>" +
                        "<li>Keep a log of all related phone conversations, including the\n" +
                        "                    names of people with whom you speak.</li></ul>" +
                        "<h3>Follow-up is key</h3>" +
                        "<ul><li>Stay in touch with the companies and agencies you have\n" +
                        "                    contacted to ensure that their investigations resulted in\n" +
                        "                    your favor. TransUnion's FVAD will assist, but remember that\n" +
                        "                    as a victim, you are ultimately responsible for working with\n" +
                        "                    credit grantors to remediate fraudulent accounts.</li>" +
                        "<li>Periodically review your credit report. Check for any new\n" +
                        "                    fraudulent activity. Consider using features such as\n" +
                        "                    TransUnion Credit Lock, for ongoing protection.</li>" +
                        "</ul><br/>" +
                        "<p>Visit <a\n" +
                        '                  href="https://www.transunion.com"\n' +
                        '                  target="_blank"\n' +
                        '                  rel="noreferrer"\n' +
                        "                >\n" +
                        "                  https://www.transunion.com\n" +
                        "                </a>\n" +
                        "                for more information.\n" +
                        "                <br />\n" +
                        "                *Javelin Strategy & Research</p>",
                    },
                    {
                      Title: "Spotting Identity Theft Signs",
                      Content:
                        "<p>Knowing identity theft signs can help you protect yourself from\n" +
                        "                this crime. While identity theft is always difficult, if it's\n" +
                        "                caught early, you can minimize its damage to your reputation and\n" +
                        "                financial health. Unfortunately, some people don't realize that\n" +
                        "                their credit, medical or even criminal records contain\n" +
                        "                inaccuracies caused by the activity of identity thieves. Credit\n" +
                        "                identity thieves use your personal information to apply for\n" +
                        "                credit in your name, leaving you to deal with angry creditors\n" +
                        "                and collectors.</p>" +
                        "<h3>Here Are Some Common Indicators of Identity Theft:</h3>" +
                        "<ul><li>Unfamiliar activity on your credit reports: Regularly\n" +
                        "                    monitor your credit reports to look for new and unfamiliar\n" +
                        "                    accounts. If you see that unauthorized or unfamiliar\n" +
                        "                    activity has occurred, contact the credit bureau that issued\n" +
                        "                    the report right away.</li>" +
                        "<li>Unexpected charges on your credit or bank account\n" +
                        "                    statements: Don't toss your bank and credit card statements\n" +
                        "                    without reviewing them. Review each charge and call your\n" +
                        "                    bank or credit card company to question any purchase that\n" +
                        "                    you don't recall making.</li>" +
                        "<li>Letters or phone calls from unfamiliar creditors or bill\n" +
                        "                    collectors: If you start getting phone calls and letters\n" +
                        "                    from unknown creditors or bill collectors, take action. An\n" +
                        "                    identity thief has likely used your identity to open\n" +
                        "                    accounts and make purchases, leaving you with the bills.\n" +
                        "                    Children and the elderly can also be targets of identity\n" +
                        "                    thieves that operate in this way, so look out for similar\n" +
                        "                    communications to your children or to relatives in your\n" +
                        "                    care.</li>" +
                        "<li>Inability to access online accounts: If you suddenly can't\n" +
                        "                    access bank or credit card account websites, contact your\n" +
                        "                    financial institutions immediately by phone. Someone may\n" +
                        "                    have stolen your passwords in an attempt to take over your\n" +
                        "                    accounts.</li>" +
                        "</ul>" +
                        "<p>If you notice these identity theft signs, contact your local law\n" +
                        "                enforcement agency and file a report. You should also notify\n" +
                        "                credit bureaus, credit card companies and banks to inform them\n" +
                        "                about your situation, reverse any charges and remove inaccurate\n" +
                        "                information. As a precaution, you may also want to place a fraud\n" +
                        "                alert or security freeze on your credit reports, which provides\n" +
                        "                you with additional layers of protection against an identity\n" +
                        "                thief.</p>",
                    },
                    {
                      Title:
                        "The Difference Between a Fraud Alert and a Credit Freeze (also known as a Security Freeze)",
                      Content:
                        "<h3>Fraud Alert</h3>" +
                        "<p>A Fraud Alert is a cautionary flag, which is placed on your\n" +
                        "                credit file to notify lenders and others that they should take\n" +
                        "                special precautions to verify your identity before extending\n" +
                        "                credit. When you place a Fraud Alert, you can provide a mobile\n" +
                        "                or other phone number for lenders to contact you to verify that\n" +
                        "                the party applying for credit is actually you, not a fraudster.</p>" +
                        "<p>When you place a Fraud Alert on your credit report with any one\n" +
                        "                of the three major credit reporting companies, that company will\n" +
                        "                notify the other two and fraud alerts will also be placed on\n" +
                        "                those files as well. An Initial Fraud alert lasts for 90 days\n" +
                        "                and may be renewed. Fraud Alerts are available at no charge to\n" +
                        "                consumers who believe they may be victims of identity theft.</p>" +
                        "<h3>Security Freeze (also known as Credit Freeze)</h3>" +
                        "<p>A Security Freeze is a more dramatic step in protecting your\n" +
                        "                credit. Placing a Security Freeze will prevent lenders and\n" +
                        "                others from accessing your credit report entirely, which will\n" +
                        "                prevent them from extending credit. With a Security Freeze in\n" +
                        "                place, you will need to take special steps when you wish to\n" +
                        "                apply for any type of credit.</p>" +
                        "<p>Because of more stringent security features, you will need to\n" +
                        "                place a Security Freeze separately with each of the three major\n" +
                        "                credit reporting companies if you want the freeze on all of your\n" +
                        "                credit files. A Security Freeze remains on your credit file\n" +
                        "                until you remove it or choose to lift it temporarily when\n" +
                        "                applying for credit or credit-dependent services.</p>",
                    },
                    {
                      Title:
                        "Five Powerful Ways to Protect Against Identity Theft",
                      Content:
                        "<p>Identity theft has become a prominent-enough problem that most\n" +
                        "                people know they need to protect against it. The question is:\n" +
                        "                how? Unfortunately there is no foolproof plan that can\n" +
                        "                completely guarantee the safety of your identity. However, there\n" +
                        "                are steps individuals can take. Here are five great precautions\n" +
                        "                to help guard against identity thieves:</p>" +
                        "<ol><li><h4>Protect your Social Security Number (SSN) like a Mama Bear.</h4>" +
                        '<p>Your SSN is "Need to Know" information. This means that you\n' +
                        "                    only give it out when ABSOLUTELY necessary. In addition, use\n" +
                        "                    your common sense. If the party asking for your SSN seems\n" +
                        "                    untrustworthy or if it doesn't seem like they should need to\n" +
                        "                    know this information, then don't give it out.</p></li>" +
                        "<li><h4>When it comes to online passwords, randomness is the key.</h4>" +
                        "<p>In a perfect world, we could all just use our mother's\n" +
                        "                    maiden name or high school mascot as a universal password\n" +
                        "                    for everything. Unfortunately, we live in an imperfect\n" +
                        "                    world. In today's society, thieves can easily find out this\n" +
                        "                    type of personal information. According to the Federal Trade\n" +
                        "                    Commission, a good rule of thumb is to keep it to an\n" +
                        "                    as-random-as-possible mix of letters, number and symbols.\n" +
                        "                    That way, it will be more difficult to crack.</p></li>" +
                        "<li><h4>Keep an eye on your credit card accounts.</h4>" +
                        "<p>No, you don't need to memorize every purchase or know\n" +
                        "                    exactly what your balance is at all times. However, you\n" +
                        "                    should be able to look at your credit card statement and\n" +
                        "                    account for every purchase. If something seems incorrect,\n" +
                        "                    immediately contact the issuer. Better to be on the safe\n" +
                        "                    side.</p></li>" +
                        "<li><h4>Stay on top of your credit.</h4>" +
                        "<p>Make sure your credit reports show accurate information.\n" +
                        "                    Signing up for a credit monitoring service is a great way to\n" +
                        "                    receive alerts regarding any credit report changes. Handle\n" +
                        "                    it similarly to how you analyze your credit card statement:\n" +
                        "                    if you notice any inaccurate or unfamiliar information in\n" +
                        "                    your credit report, you should contact the creditor or file\n" +
                        "                    a dispute with all three major credit bureaus (TransUnion,\n" +
                        "                    Equifax, Experian).</p></li>" +
                        "<li><h4>Don't carry every important document in your wallet/purse.</h4>" +
                        "<p>Although your wallet/purse may seem like a convenient and\n" +
                        "                    secure place to keep your Social Security card, birth\n" +
                        "                    certificate, or passport, doing so is a good way to misplace\n" +
                        "                    or even lose these valuable items. This information may be\n" +
                        "                    as good as gold to identity thieves. Identity theft can take\n" +
                        "                    years to overcome. Developing good habits in protecting your\n" +
                        "                    personal information will go a long way toward lowering the\n" +
                        "                    risk you'll have to undergo a lot of unnecessary stress and\n" +
                        "                    hassle. You can help achieve peace of mind by putting the\n" +
                        "                    above five steps into practice, starting today.</p></li></ol>" +
                        "<p>Sources:\n" +
                        "                <br />\n" +
                        "                OnGuard Online (U.S. Federal Trade Commission);\n" +
                        "                <a\n" +
                        '                  href="https://www.onguardonline.gov"\n' +
                        '                  target="_blank"\n' +
                        '                  rel="noreferrer"\n' +
                        "                >\n" +
                        "                  https://www.onguardonline.gov\n" +
                        "                </a></p>",
                    },
                    {
                      Title: "Keep Your Credit Safe While Traveling",
                      Content:
                        "<p>Whether you're planning a trip to Las Vegas or Venice, including\n" +
                        "                a few financial arrangements in your preparations will help keep\n" +
                        "                your credit reports safe — and your mind free of worries — while\n" +
                        "                you are away:</p>" +
                        "<h3>Guard against mix-ups.</h3>" +
                        "<p>Call your credit card issuers to notify them before you leave on\n" +
                        "                a vacation, especially if you are traveling outside the U.S. If\n" +
                        "                your banks and card issuers know that you are traveling, they\n" +
                        "                are less likely to mistakenly block your access to the account\n" +
                        "                when charges from unusual locations appear.</p>" +
                        "<h3>Make photocopies of important documents.</h3>" +
                        "<p>Having copies of your credit cards, driver's licenses and\n" +
                        "                passports will make the replacement process much faster if you\n" +
                        "                lose something important while traveling. Add a list of\n" +
                        "                emergency contacts to this folder including the phone numbers of\n" +
                        "                your doctor, banks and family members. Leave a set of these\n" +
                        "                documents at home with a friend and store one in a separate\n" +
                        "                piece of luggage.</p>" +
                        "<h3>Avoid late payments.</h3>" +
                        "<p>Plan ahead so you won't miss any bill payments while you are\n" +
                        "                away. Online bill payment systems make it easy to schedule a\n" +
                        "                payment in advance. A little preparation can help you avoid\n" +
                        "                expensive late charges and unnecessary damage to your credit.</p>" +
                        "<h3>Keep an eye on your identity.</h3>" +
                        "<p>Guard against fraud by asking the Post Office to put a vacation\n" +
                        "                hold on your mail and be careful where you use your credit card.\n" +
                        "                Check the activity on your financial statements and your credit\n" +
                        "                report(s) closely when you return, to make sure they are\n" +
                        "                accurate.</p>",
                    },
                  ],
                },
                {
                  Section_Title: "Managing Your Money",
                  Item: [
                    {
                      Title:
                        "Money Mistakes: How to Rectify Past Financial Sins",
                      Content:
                        "<p>Everyone makes mistakes, especially when it comes to money. Find\n" +
                        "                out how you can set yourself on a better financial path by\n" +
                        "                atoning for some of your worst money missteps.</p>" +
                        "<p>Nobody's perfect — especially when it comes to managing money.\n" +
                        "                While you may try to keep track of your funds, budget wisely and\n" +
                        "                spend well now, you may have made some serious money mistakes\n" +
                        "                when you were younger. Since having money doesn't exactly come\n" +
                        "                with an owner's manual, you may have had lackadaisical spending\n" +
                        "                ways or gone wild with credit before you smartened up and\n" +
                        "                started taking money seriously. Still, those past sins can come\n" +
                        "                back to haunt you in the form of creditors or\n" +
                        "                less-than-impressive credit scores. Your best bet is to face\n" +
                        "                money issues head-on and atone for those missteps so you can\n" +
                        "                move forward with better habits.</p>" +
                        "<h3 className='h4'>Open up</h3>" +
                        "<p>When dealing with past financial mistakes, it's easy to turn a\n" +
                        "                blind eye and hope that they simply go away. But when you owe\n" +
                        "                money or default on loans, not only are those creditors still\n" +
                        "                looking to get paid, it can affect your long-term ability to\n" +
                        "                secure credit and enjoy future financial freedom. Instead,\n" +
                        "                gather up all of your statements and go through them with a\n" +
                        "                fine-tooth comb to give yourself a general picture of which\n" +
                        "                mistakes you've made but can be easily rectified with dedicated\n" +
                        "                work.</p>" +
                        "<h3 className='h4'>Make a plan</h3>" +
                        "<p>Once you know where you stand money-wise, it's time to create a\n" +
                        "                plan to pay back creditors, and remove any inaccurate\n" +
                        "                information on your credit report. This may require some leg\n" +
                        "                work on your part, so plan on working with creditors on\n" +
                        "                settlement deals, checking your credit report and contacting\n" +
                        "                your creditors or credit reporting agencies to remove\n" +
                        "                inaccuracies that you may have found. Consider your plan like\n" +
                        "                you would a work project: focus, then put your energy into\n" +
                        "                accomplishing it.</p>" +
                        "<h3 className='h4'>Start small</h3>" +
                        "<p>No one is saying that you need to put all of your savings toward\n" +
                        "                paying off an old debt to get rid of it. In fact, starting with\n" +
                        "                smaller debts — an old credit card or small tax bill, for\n" +
                        "                instance - helps you get rid of some of your smaller mistakes,\n" +
                        "                and can also help provide a sense of accomplishment. Start with\n" +
                        "                the most manageable issues. That way, you'll have more of a leg\n" +
                        "                to stand on when negotiating with larger creditors.</p>" +
                        "<h3 className='h4'>Keep it rolling</h3>" +
                        "<p>Once you've made headway on some of your smaller money mistakes,\n" +
                        "                it's time to get serious. Keep up the good work by taking a look\n" +
                        "                at your current budget and cutting back spending to free up\n" +
                        "                money for payment of other debts, or making settlement\n" +
                        "                agreements with other creditors. When you have cash in hand,\n" +
                        "                creditors may be more willing to settle, but you'll need to be\n" +
                        "                prepared to act immediately. While it might mean a few months of\n" +
                        "                leaner living, having a clear conscience and rectifying the\n" +
                        "                mistakes of the past can help you move forward with your future\n" +
                        "                financial goals.</p>",
                    },
                    {
                      Title: "Setting and Achieving Personal Goals",
                      Content:
                        "<p>Trying to improve your finances? Not sure where to start?\n" +
                        "                Whether your goals involve credit enhancing, refinancing, or\n" +
                        "                saving, you can make this year a personal best for your credit.\n" +
                        "                Read on for our top credit best practices:</p>" +
                        "<h3>Set Goals</h3>" +
                        "<ul><li>Check your credit report every three months: The first step\n" +
                        "                    to robust credit health is to know which bad financial\n" +
                        "                    habits, such as late payments, are reflected in your credit\n" +
                        "                    report. Regular check-ups will also help you guard against\n" +
                        "                    identity theft.</li>" +
                        "<li>Improve and raise your credit score above 650: A credit\n" +
                        "                    score above 650 may help qualify you for credit. The higher\n" +
                        "                    your score, the better the interest rates available to you.</li>" +
                        "<li>Reduce your debt balances to below 35% of your available\n" +
                        "                    credit limit: Reducing your balances while maintaining\n" +
                        "                    active credit use makes you more appealing to prospective\n" +
                        "                    lenders and can help improve your credit score.</li>" +
                        "<li>Create a monthly spending plan and stick to it: This simple\n" +
                        "                    commitment can help you start a savings plan and keep you\n" +
                        "                    from accruing unmanageable debt.</li></ul>" +
                        "<h3>Update Your Records:</h3>" +
                        "<ul><li>Dispute inaccuracies on your credit report: Don't let your\n" +
                        "                    credit standing suffer because of inaccurate information.</li>" +
                        "<li>Most negative records expire from your credit report after\n" +
                        "                    7-10 years. These accounts have a significant negative\n" +
                        "                    effect on your credit rating, so make sure they are removed\n" +
                        "                    from your report at the right time.</li>" +
                        "<li>Consider refinancing: See if refinancing your home or car\n" +
                        "                    could save you money. Investigate your options with a\n" +
                        "                    lender.</li></ul>" +
                        "<h3>Plan Ahead:</h3>" +
                        "<ul><li>Start putting money into a savings account each month: No\n" +
                        "                    matter how much available credit you have, it can't beat\n" +
                        "                    cash in the bank. Setting aside a fixed amount each month\n" +
                        "                    will guarantee funds in the case of emergency while helping\n" +
                        "                    you develop financial discipline.</li>" +
                        "<li>Contribute to your 401(k): See if your company offers\n" +
                        "                    matching funds and try to add the maximum amount allowable\n" +
                        "                    for your budget.</li>" +
                        "</ul>" +
                        "<p>This information is for educational purposes only and does not\n" +
                        "                constitute legal or financial advice. You should always seek the\n" +
                        "                advice of a legal or financial professional before making legal\n" +
                        "                or financial decisions.</p>",
                    },
                    {
                      Title: "Unpaid Medical Bills and Your Credit Report",
                      Content:
                        "<p>Unpaid medical bills can cause surprising and serious damage to\n" +
                        "                your credit report.</p>" +
                        "<p>It's often a plain and simple case of miscommunication. Your\n" +
                        "                insurance company and your medical provider are in negotiations\n" +
                        "                over paying a recent hospital bill. You think it has been paid,\n" +
                        "                or at least should have been, because you have insurance. The\n" +
                        "                bill is delinquent and then overdue and then sent to\n" +
                        "                collections. All of the sudden you are stuck with a collections\n" +
                        "                record on your credit report for 7 years. Not your fault? Think\n" +
                        "                again.</p>" +
                        "<p>Medical collections are becoming increasingly common. If you are\n" +
                        "                injured and your insurance company doesn't pay, you can become\n" +
                        "                legally responsible for the bill. That collections account can\n" +
                        "                stay on your credit report for up to seven years if you don't\n" +
                        "                prove that it was a factual error. How can you be sure your\n" +
                        "                credit doesn't end up with a scar?</p>" +
                        "<h3>Follow these tips for keeping your credit out of harm's way:</h3>" +
                        "<h4>Prevention</h4>" +
                        "<ul><li><h4>Emergency reserve</h4>" +
                        "<p>It's important to have enough money saved to cover your\n" +
                        "                    living expenses for a few months in case you lose your job\n" +
                        "                    or unexpectedly land in the hospital. Medical bills can\n" +
                        "                    sometimes add up to unbelievable amounts, so you may want to\n" +
                        "                    also keep a credit card with a high limit reserved for\n" +
                        "                    emergency use.</p></li>" +
                        "<li><h4>Be flexible</h4>" +
                        '<p>Flexible Spending Accounts or "Cafeteria Plans" offered\n' +
                        "                    through your employer provide an easy pre-tax way to pay for\n" +
                        "                    medical expenses. Ask your employer about what plan may be\n" +
                        "                    included in your benefits. With this system, you decide how\n" +
                        "                    much of your salary to set aside when you sign up for the\n" +
                        "                    year. For example, if you choose to pull out $100 a month\n" +
                        "                    for the plan, you have $1,200 you can use for medical bill\n" +
                        "                    reimbursements that year.</p></li>" +
                        "<li><h4>Power of attorney</h4>" +
                        "<p>If things get really sticky, having a trusted spouse or\n" +
                        "                    family member with legal power of attorney can help. When\n" +
                        "                    you are sick in the hospital, you may not be able to wrestle\n" +
                        "                    with the insurance companies and billing offices on your\n" +
                        "                    own. Talk to a financial planner or lawyer to have these\n" +
                        "                    papers drawn up. Be sure that this person understands the\n" +
                        "                    responsibilities and has a copy of your medical insurance\n" +
                        "                    policy.</p></li></ul>" +
                        "<h3>Prescription</h3>" +
                        "<ul><li><h4>Get the facts</h4>" +
                        "<p>If you receive a bill you thought was covered, go through\n" +
                        "                    your insurance policy with a fine tooth comb to see what you\n" +
                        "                    are really responsible for paying. These documents can also\n" +
                        "                    outline the best procedures for cutting through the red tape\n" +
                        "                    in the billing office. You'll also want to contact the\n" +
                        "                    insurance company and the medical office for more\n" +
                        "                    information as soon as you suspect something is wrong with\n" +
                        "                    your bill.</p></li>" +
                        "<li><h4>Settle your bills</h4>" +
                        "<p>Even if your insurance company is at fault, you will\n" +
                        "                    probably be better off paying the medical bill yourself\n" +
                        "                    before it's sent to collections rather than continuing to\n" +
                        "                    deny the charge. Paying the bill doesn't mean you have to\n" +
                        "                    stop negotiating with your insurance company over the\n" +
                        "                    amount, it just means that you won't also have to negotiate\n" +
                        "                    over a collection account on your credit report.</p></li>" +
                        "<li><h4>Righting the wrongs</h4>" +
                        '<p>If the account was sent to collections, avoid "settling" the\n' +
                        "                    bill and try to pay off the amount in full. A fully-paid\n" +
                        "                    collections account is better for your credit than an unpaid\n" +
                        "                    or settled account. If your medical bill was sent to\n" +
                        "                    collections in error, you still have options. You can\n" +
                        "                    dispute the record on your credit report if you can prove\n" +
                        "                    that the bill was sent to collections unlawfully (for\n" +
                        "                    example — if you were never billed directly for the amount\n" +
                        "                    before it was sent to collections).</p></li></ul>",
                    },
                    {
                      Title: "The Importance of Understanding Interest",
                      Content:
                        "<p>It's one thing to know what interest is. It's another to truly\n" +
                        "                understand how interest works. Understanding interest is so\n" +
                        "                important because it can have a considerable impact on your\n" +
                        "                entire financial picture.</p>" +
                        "<p>The most important thing to know about interest is that not all\n" +
                        "                types are created equal. The way you calculate interest can\n" +
                        "                drastically alter the results. Taking that into account, let's\n" +
                        "                discuss the two main types of interest:</p>" +
                        "<h3>Simple or Nominal Interest</h3>" +
                        "<p>When you learned about interest in school, simple interest was\n" +
                        "                probably the kind you were first taught. The amount of simple\n" +
                        "                interest is calculated as a percentage of the principal amount.\n" +
                        "                Put another way, with simple interest, the principal amount upon\n" +
                        "                which the interest is calculated, is constant.</p>" +
                        "<p>This is easy to understand when your think about a savings\n" +
                        "                account. Say you deposit $10,000 with an annual interest rate of\n" +
                        "                5%. Now let's say you let that $10,000 sit there for 5 years.\n" +
                        "                What would the new amount be? If you said $12,500, then you\n" +
                        "                would be correct. Our deposit (the principal) earned $500 (5% of\n" +
                        "                10,000) each year for five years. That leaves us with $12,500.</p>" +
                        "<h3>Compound Interest</h3>" +
                        "<p>Remember how with simple interest the amount upon which interest\n" +
                        "                is calculated stayed the same (every year it was based on\n" +
                        "                $10,000)? Well, with compound interest, that amount continues to\n" +
                        "                accumulate on itself. Compound interest is calculated based on\n" +
                        "                the principal amount and any past interest earned. [1] The\n" +
                        "                earned interest is simply added to the original principal amount\n" +
                        "                at a predetermined rate (annually, monthly, etc.).</p>" +
                        "<p>Compound interest might be better understood by example. Let's\n" +
                        "                look back at our savings account scenario once again. This time,\n" +
                        "                however, let's say at the end of each year your earned interest\n" +
                        "                is added back to the original principal amount. After year 1,\n" +
                        "                just like with simple interest, you would have earned $500 in\n" +
                        "                interest. This time, though, the difference is that $500 is now\n" +
                        "                added to the $10,000. So the following year's principal becomes\n" +
                        "                $10,500 and that year's interest is calculated based on that new\n" +
                        "                figure. This process repeats itself every year for 5 years. At\n" +
                        "                the end of 5 years, with interest compounding at a yearly rate,\n" +
                        "                we would actually end up with $12,763, leaving us with $263 more\n" +
                        "                than simple interest.</p>" +
                        "<p>$263 is hardly an impressive extra profit, but hold that\n" +
                        "                thought. Let's say you let that $10,000 sit for 10 years instead\n" +
                        "                of 5. In that case, the simple interest would leave you with\n" +
                        "                $15,000. On the other hand, compound interest would leave you\n" +
                        "                with $16,288. That's an extra profit of $1,288! As you can see,\n" +
                        "                allowing compound interest to build and grow over a longer\n" +
                        "                period of time can make a big difference.</p>" +
                        "<p>Just ask Warren Buffett how powerful compound interest can be:</p>" +
                        '<p>"My wealth has come from a combination of living in America,\n' +
                        '                some lucky genes, and compound interest." — Warren Buffett [2]</p>' +
                        "<p>Most of us are not Warren Buffet. The beauty of compound\n" +
                        "                interest, though, is that anyone can take advantage of its\n" +
                        "                financial power. Whether you have a mortgage, are repaying\n" +
                        "                student loans, or even depositing money in a bank account,\n" +
                        "                interest has the power to add to your debt or help build your\n" +
                        "                savings. Knowing what interest is won't help you truly take\n" +
                        "                advantage. Rather, it's understanding how it can best work for\n" +
                        "                you.</p>" +
                        "<p>[1]\n" +
                        "                <a\n" +
                        '                  href="https://www.investor.gov/glossary/glossary_terms/compound-interest"\n' +
                        '                  target="_blank"\n' +
                        '                  rel="noreferrer"\n' +
                        "                >\n" +
                        "                  https://www.investor.gov/glossary/glossary_terms/compound-interest\n" +
                        "                </a>\n" +
                        "                <br />\n" +
                        "                [2]\n" +
                        "                <a\n" +
                        '                  href="http://archive.fortune.com/2010/06/15/news/newsmakers/Warren_Buffett_Pledge_Letter.fortune/index.htm"\n' +
                        '                  target="_blank"\n' +
                        '                  rel="noreferrer"\n' +
                        "                >\n" +
                        "                  http://archive.fortune.com/2010/06/15/news/newsmakers/Warren_Buffett_Pledge_Letter.fortune/index.htm\n" +
                        "                </a></p>",
                    },
                    {
                      Title: "Budgeting Tips to Get Your Finances on Track",
                      Content:
                        "<p>Do you cringe when you hear the word budgeting? If so, you\n" +
                        "                aren't alone. Creating a budget requires planning and a lot of\n" +
                        "                work to record all financial transactions made in a household.\n" +
                        "                It's even more work to keep spending within the limits of your\n" +
                        "                monthly income.</p>" +
                        "<p>Some people find it difficult to remember to record each and\n" +
                        "                every item purchased, while others are surprised when they see\n" +
                        "                how much money they spend on small things like daily coffee. If\n" +
                        "                you don't use some form of a budget, however, you run the risk\n" +
                        "                of continually spending more money than you bring home or\n" +
                        "                spending more money than you realize on things you don't need.\n" +
                        "                You could also be at risk for missing payments on credit\n" +
                        "                accounts, which may have a damaging effect on your credit\n" +
                        "                history and score. No matter which financial life-stage your\n" +
                        "                family is in, it's never too late to create a household budget.</p>" +
                        "<p>Recording how much of your monthly income goes to pay various\n" +
                        "                bills and expenses will help you see where you may be spending\n" +
                        "                more money than expected. Cutting unnecessary expenses frees up\n" +
                        "                cash to increase emergency and long-term savings or pay down\n" +
                        "                debt faster. Planning monthly spending so it doesn't exceed your\n" +
                        "                monthly income can prevent you from turning to credit cards or\n" +
                        "                loans to cover your regular monthly bills. Sticking to a budget\n" +
                        "                can also help families, who would otherwise scramble to find the\n" +
                        "                cash, to make their monthly mortgage or loan payments on time.</p>" +
                        "<h3>Set up a basic budget</h3>" +
                        "<p>Record your net monthly family income which is your total income\n" +
                        "                from all sources less taxes, and other deductions from your\n" +
                        "                gross wages. Then, list each bill, loan and credit account\n" +
                        "                payment, as well as variable expenses that change from month to\n" +
                        "                month, such as grocery spending, entertainment and restaurant\n" +
                        "                costs. Remember to include a monthly contribution to savings in\n" +
                        "                your expenses. If your expenses are greater than your monthly\n" +
                        "                income, you'll need to find ways to increase your income,\n" +
                        "                decrease your expenses, or both.</p>" +
                        "<h3>Avoid budgeting pitfalls</h3>" +
                        "<p>Families can find it difficult to stick to budgets that don't\n" +
                        "                include rewards for careful money management. When you set up\n" +
                        "                your budget, include a monthly amount to fund inexpensive\n" +
                        "                activities or outings, such as monthly movie and dinner nights,\n" +
                        "                concerts or sporting events, or longer-term goals, such as\n" +
                        "                annual family vacations.</p>" +
                        "<p>Another common budget problem is forgetting to record daily\n" +
                        "                spending. Small expenditures can add up over the month and are\n" +
                        "                difficult to track down weeks after they've occurred. Avoid this\n" +
                        "                problem by setting aside a monthly cash amount or allowance to\n" +
                        "                family members to spend as they like.</p>" +
                        "<p>This information is for educational purposes only and does not\n" +
                        "                constitute legal or financial advice. You should always seek the\n" +
                        "                advice of a legal or financial professional before making legal\n" +
                        "                or financial decisions.</p>",
                    },
                    {
                      Title: "How to Rebuild Your Savings",
                      Content:
                        "<p>Sometimes no matter how much planning you do, your savings\n" +
                        "                strategy goes awry. You can, however, rebuild your savings after\n" +
                        "                a financial downturn. The key to rebuilding a drained savings\n" +
                        "                account or a depleted retirement account is to start again, as\n" +
                        '                soon as you can, and not wait for some "extra" money to come\n' +
                        "                rolling in from a mysterious source. You have the ability to\n" +
                        "                rebuild your safety net and give yourself peace of mind.</p>" +
                        "<h3>Revise your budget</h3>" +
                        "<p>Although you may have just survived a financial downturn due to\n" +
                        "                unemployment or an unexpectedly large expense, now isn't the\n" +
                        "                time to spend freely.</p>" +
                        "<ul>" +
                        "<li>Revise your budget to account for a changed income or to\n" +
                        "                    include a payment plan for a large medical or home repair\n" +
                        "                    expense.</li>" +
                        "<li>Cut back on frivolous spending. Reconsider your 300 cable\n" +
                        "                    channels, the latest gadget, going out to dinner five times\n" +
                        "                    a week or a new handbag every month. Distinguish between\n" +
                        "                    need and want and you may discover some extra money in your\n" +
                        "                    budget.</li></ul>" +
                        "<p>Your parents were right. Sometimes you have to make do with what\n" +
                        "                you already have, including your current income. You can try to\n" +
                        "                rebuild your savings when you pay yourself first. Here's how:</p>" +
                        "<ul><li>Invest in your company's tax-deferred 401(k) plan. This will\n" +
                        "                    help you build a retirement fund over time. It will also\n" +
                        "                    lower your taxable income which may result in a lower tax\n" +
                        "                    rate for you. If your company matches your contribution,\n" +
                        "                    this will boost your retirement savings even further.</li>" +
                        "<li>Consider an IRA account. If you don't have access to a\n" +
                        "                    company-sponsored 401(k) plan, consider a Roth or\n" +
                        "                    traditional individual retirement account (IRA). Just\n" +
                        "                    finding an extra $30 a week in your budget could make this a\n" +
                        "                    reality.</li>" +
                        "<li>Set up automatic deposits to a savings account. You may\n" +
                        "                    already have your mortgage or other bills set up to be paid\n" +
                        "                    automatically through your checking account, but what about\n" +
                        "                    your savings account? Pay your savings account monthly just\n" +
                        "                    like any other bill you receive.</li></ul>" +
                        "<h3>Spend extra money wisely</h3>" +
                        "<p>Extra money can sometimes find its way to you in the form of a\n" +
                        "                pay raise, an income tax refund, a small inheritance, a work\n" +
                        "                bonus or income from a side job. Consider using this extra money\n" +
                        "                to pay yourself, not treat yourself.</p>" +
                        "<ul><li>Increase your 401(k) contribution if you receive a pay\n" +
                        "                    raise.</li>" +
                        "<li>Stash refunds or bonuses into a savings account or your IRA.</li></ul>" +
                        "<h3>Track your credit score</h3>" +
                        "<p>You've worked hard to pay down debt and rebuild your savings.\n" +
                        "                Don't let the unknown sneak up on you. Keep an eye on your\n" +
                        "                credit score as part of a routine to manage your financial\n" +
                        "                well-being.</p>" +
                        "<p>This information is for educational purposes only and does not\n" +
                        "                constitute legal or financial advice. You should always seek the\n" +
                        "                advice of a legal or financial professional before making legal\n" +
                        "                or financial decisions.</p>",
                    },
                  ],
                },
                {
                  Section_Title: "Life Events",
                  Item: [
                    {
                      Title: "Wait…Student Debt Can Help Me?",
                      Content:
                        "<p>Over the past few decades, the cost of attending college in the\n" +
                        "                United States has skyrocketed. Not surprisingly, the use of\n" +
                        "                student loans to help pay for this higher cost has also\n" +
                        "                increased quite dramatically. This has left a large portion of\n" +
                        "                the population, especially the Millennial generation, with a\n" +
                        "                substantial amount of debt just as they are entering the\n" +
                        "                workforce. This phenomenon may end up weighing on the U.S.\n" +
                        "                economy for decades to come. However, on an individual level,\n" +
                        "                might there be a silver lining for all of those student\n" +
                        "                borrowers? The answer: potentially.</p>" +
                        "<p>The fact is no one wants student debt, but if you have to take\n" +
                        "                out a loan, it provides an opportunity to start recording a\n" +
                        "                solid payment history. According to VantageScore™, student loans\n" +
                        "                can positively impact your credit score because generic models,\n" +
                        '                like the VantageScore<sup>®</sup> 3.0 credit score, "reward a history of\n' +
                        "                on-time payments as it demonstrates the ability to manage\n" +
                        '                credit." [3]</p>' +
                        "<p>Here's an example. Let's say that Joe Student finished college\n" +
                        "                with $30,000 in student debt. Let's also say Joe is paying this\n" +
                        "                back over a ten-year period at a 5% interest rate. Roughly\n" +
                        "                speaking, Joe will likely be making monthly payments of around\n" +
                        "                $300. As long as Joe makes his payments on time, he is on his\n" +
                        "                way to enhancing one of the most vital factors when it comes to\n" +
                        "                a healthy credit score, a strong payment history.</p>" +
                        "<p>Now, let's use that same scenario but say that Joe decided to\n" +
                        "                ignore his scheduled repayment plan or never reached out to his\n" +
                        "                student loan creditor to negotiate a more reasonable,\n" +
                        "                income-based plan. Depending on how long Joe's neglect lasts,\n" +
                        "                his silver-lining opportunity could turn into a negative\n" +
                        "                situation for his credit health. Just as Joe could have built a\n" +
                        "                strong history of consistent and timely payments, he has done\n" +
                        "                the opposite in this scenario. He's built a history of\n" +
                        "                inconsistent and unreliably-timed repayment.</p>" +
                        "<p>In the end, carrying a load of student debt may weigh on your\n" +
                        "                finances. However, student borrowers should also realize that\n" +
                        "                borrowing presents an opportunity to establish a strong payment\n" +
                        "                history. In the long run, student debt may pave the way for more\n" +
                        "                manageable credit terms down the road.</p>" +
                        "<p>This information is for educational purposes only and does not\n" +
                        "                constitute legal or financial advice. You should always seek the\n" +
                        "                advice of a legal or financial professional before making legal\n" +
                        "                or financial decisions.</p>" +
                        "<p>[3] A Lesson Plan to Understanding Credit Scores. New Haven, CT:\n" +
                        "                VantageScore, 2012. Print.</p>",
                    },
                    {
                      Title: "Credit Cards and College Student - A Good Match?",
                      Content:
                        "<p>You've seen the ads and been tempted by the giveaways — but how\n" +
                        "                much do you really know about credit cards? Wading through\n" +
                        "                offers to find a credit card that suits your student lifestyle\n" +
                        "                can be tricky. If you know a little about how credit works and\n" +
                        "                your options, you can start building your credit on the right\n" +
                        "                foot. Here's a crash course in credit cards:</p>" +
                        "<h3>Statistics</h3>" +
                        "<p>The Credit Card Act of 2009 slowed credit card use by college\n" +
                        "                students by banning card approvals for anyone under 21 years\n" +
                        "                old, unless they have an adult co-signer or can prove they have\n" +
                        "                sufficient income to pay the bills. Yet according to a survey by\n" +
                        "                student loan provider Sallie Mae, students still manage to\n" +
                        "                accrue credit card debt. The average balance among college\n" +
                        "                students in 2013 was $499. By grade level, sophomores carry the\n" +
                        "                lowest average balance while freshmen and seniors carry the\n" +
                        "                highest. Now that you know the credit stats, let's move on to\n" +
                        "                some of the details.</p>" +
                        "<h3>Economics</h3>" +
                        "<p>Think you're ready for a credit card? Opening a credit account\n" +
                        "                has its benefits: you'll have access to emergency funds, you can\n" +
                        "                start building your credit and your purchases may be protected\n" +
                        "                under some credit cards if damaged or stolen. It also has its\n" +
                        "                dangers: you can easily rack up serious debt, interest rates can\n" +
                        "                run high and you might damage your credit if not careful.\n" +
                        "                Opening a credit account is only a good idea if you are sure you\n" +
                        "                can use it responsibly.</p>" +
                        "<h3>Accounting</h3>" +
                        "<p>How can you find the card that is right for you? <br />\n" +
                        "                There are four major factors to take into consideration when\n" +
                        "                looking at credit card offers:</p>" +
                        "<ol><li><h4>Card Type</h4>" +
                        "<p>Credit cards come in all sorts of shapes and sizes. If you\n" +
                        "                    don't qualify for an ordinary credit card, investigate\n" +
                        "                    secured credit cards that use a savings account as\n" +
                        "                    collateral.</p></li>" +
                        "<li><h4>Annual Percentage Rate (APR)</h4>" +
                        "<p>As a student your interest rates will probably range between\n" +
                        "                    10-18% percent. This is higher than the rates an established\n" +
                        "                    borrower would receive but better than the rate for people\n" +
                        "                    with poor credit histories. Read the APR offer closely to\n" +
                        "                    see what the terms are for the introductory rate. The lower\n" +
                        "                    the rate, the less your credit spending will cost.</p></li>" +
                        "<li><h4>Annual Fees</h4>" +
                        "<p>Most standard credit cards don't come with annual fees. ?\n" +
                        "                    Some premium or reward cards, such as airline mileage cards,\n" +
                        "                    charge annual fees. Look at the small print disclosure to\n" +
                        "                    see if your card has an annual fee. Also look for late fees,\n" +
                        "                    transaction fees and over-limit fees.</p></li>" +
                        "<li><h4>Grace Period</h4>" +
                        "<p>The grace period on a credit card is the amount of time\n" +
                        "                    between when you make a purchase and when interest is\n" +
                        "                    applied to the purchase. For many cards, the interest-free\n" +
                        "                    grace period is around 25 days.</p></li>" +
                        "</li></ol>" +
                        "<h3>History</h3>" +
                        "<p>Once you start using your new card, it's a good idea to check\n" +
                        "                your credit history to see if the account is being recorded\n" +
                        "                correctly. Your credit reports from TransUnion, Equifax and\n" +
                        "                Experian should have accurate information about the account's\n" +
                        "                name, open date, balance, monthly payment and credit limit.\n" +
                        "                After a few months you'll want to check again to make sure your\n" +
                        "                payment history is being reported properly. Late payments can\n" +
                        "                damage your credit score for up to 7 years, and can lead to\n" +
                        "                problems receiving new credit in the future.</p>" +
                        "<h3>Philosophy</h3>" +
                        "<p>The lethal student combination of limited income and a lot of\n" +
                        "                opportunities for spending makes it easy for young credit card\n" +
                        "                users to end up in deep debt. Using your new credit card to pay\n" +
                        "                a regular monthly expense (like gasoline or cable) is a good way\n" +
                        "                to start. You'll know what to expect from your bill and can pay\n" +
                        "                it in full each month. Having a conservative credit philosophy\n" +
                        "                will help you graduate with your debt under control.</p>",
                    },
                    {
                      Title: "Buying Your First Car: What You Need to Know",
                      Content:
                        "<p>Buying your first car is considerably more expensive than the\n" +
                        "                sticker price reveals. Prepare yourself for the unavoidable\n" +
                        "                expenditures that come along for the ride.</p>" +
                        "<p>Buying your first car? Congratulations! Before you plan your\n" +
                        "                first road trip, though, there are several important financial\n" +
                        "                factors to consider as you prepare to purchase this big ticket\n" +
                        "                item.</p>" +
                        "<h3>Not just the sticker price</h3>" +
                        "<p>Buyer, beware. The sticker price posted on the window at any\n" +
                        "                auto dealership, or even the listed price of a private sale, is\n" +
                        "                actually considerably less than what you will need to pay to get\n" +
                        "                your car on the road. Taxes and fees can vary depending upon the\n" +
                        "                state in which you live, but there are some common threads that\n" +
                        "                add up to unavoidable expenditures.</p>" +
                        "<p>You should be prepared to pay sales tax on the vehicle before\n" +
                        "                you ever pull out of the dealership's parking lot. Your sales\n" +
                        "                consultant will calculate this tax based upon the current rate\n" +
                        "                in your state and will include it in your bottom line. The\n" +
                        "                dealership will then submit the tax payment to the state\n" +
                        "                government directly.</p>" +
                        "<h3>Taxes, taxes, taxes</h3>" +
                        "<p>Many states also assess an excise or personal property tax based\n" +
                        "                on the book value of your vehicle. This tax is assessed and\n" +
                        "                collected annually and is generally not included as part of the\n" +
                        "                fee package charged by your dealership. Be prepared to receive\n" +
                        "                this bill at a later date.</p>" +
                        "<h3>Registration, license plate and inspection fees</h3>" +
                        "<p>Speaking of your state government, it will also want to make\n" +
                        "                sure your car has been safety inspected, is registered and\n" +
                        "                easily identifiable — all at additional cost to you. Many\n" +
                        "                dealerships, especially new car dealerships, will manage the\n" +
                        "                trip to the Registry (or Department) of Motor Vehicles for you.\n" +
                        "                You'll see your registration and license plate fees appear in\n" +
                        "                the breakdown of charges on your invoice. Find out in advance if\n" +
                        "                your dealership handles this end of the deal. Most states allow\n" +
                        "                you a certain number of days within which the vehicle must be\n" +
                        "                registered before penalties apply, so you'll need to plan ahead\n" +
                        "                if you'll be completing this task yourself.</p>" +
                        "<p>Even if your new ride has just rolled off the assembly line, you\n" +
                        "                may be required to have the vehicle inspected by a licensed\n" +
                        "                garage. Most states require an annual inspection. The garage\n" +
                        "                will inspect all the lights and other safety features, plus run\n" +
                        "                an emissions test before stickering your car. Your inspection\n" +
                        "                sticker is good for a year and also must be completed within a\n" +
                        "                set period of time after purchase. For specifics in your state,\n" +
                        "                check with your dealership.</p>" +
                        "<h3>The Basics</h3>" +
                        "<p>If you are buying your first car because you're just getting a\n" +
                        "                driver's license for the first time, this is an expense to\n" +
                        "                consider, as well. Your written and road tests usually carry a\n" +
                        "                charge separate from paying for the driver's license itself. As\n" +
                        "                you finalize your budgeting, factor in the cost of general\n" +
                        "                maintenance and scheduled servicing, such as oil changes and\n" +
                        "                tire rotations. And of course, gas is a regular expense! Be\n" +
                        "                certain you've selected a car that not only meets your budget,\n" +
                        "                but also is efficient enough to meet your needs.</p>",
                    },
                    {
                      Title: "Give to Charity: A Win-Win at Tax Time",
                      Content:
                        "<p>There are many reasons to give to charity. The first, of course,\n" +
                        "                is to lend your support to a cause in which you believe. But\n" +
                        "                many people don't realize that donating to charity is a win-win\n" +
                        "                situation at tax time.</p>" +
                        "<h3>It could be deductible!</h3>" +
                        "<p>Many people take the standard deduction on their 1040s. The\n" +
                        "                current standard deduction parameters allow $12,600 for couples\n" +
                        "                filing jointly or $6,300 for individuals. If your tax deductible\n" +
                        "                spending is higher than allowed under the standard deduction,\n" +
                        "                it's a good idea to fill out Schedule A and itemize further\n" +
                        "                deductions. This is where those donations to charity may put\n" +
                        "                cash back in your pocket.</p>" +
                        "<h3>Qualified charitable organizations</h3>" +
                        "<p>Before you give, you may want to find out if your charity of\n" +
                        "                choice is a qualified charitable organization. This means that\n" +
                        "                the charity has registered with the government and has been\n" +
                        "                designated a 501(c)(3) organization. If so, you can deduct your\n" +
                        "                donations. Some smaller charities, such as individual churches\n" +
                        "                may not be required to file for 501(c)(3) status but donations\n" +
                        "                to them may also be tax deductible.</p>" +
                        "<p>Donations to individuals, political campaigns and foreign\n" +
                        "                charities don't generally fall under the umbrella of qualified\n" +
                        "                organizations. If you are unsure about a group's status, search\n" +
                        "                the IRS website to find out if they're qualified.</p>" +
                        "<h3>Keep your receipts</h3>" +
                        "<p>In order to claim charitable deductions on your tax return,\n" +
                        "                you'll need to have receipts from the charity on hand, noting\n" +
                        "                the date and dollar amount of each donation. Canceled checks or\n" +
                        "                credit card statements verify your claims as well. In the event\n" +
                        "                that you have donated goods to the charity, such as gently used\n" +
                        "                clothing, books or household goods, you'll have to generate a\n" +
                        "                fair market value for the items donated and have your figure\n" +
                        "                validated by the charity. If the total value of your non-cash\n" +
                        "                contributions is greater than $500, be prepared to file a Form\n" +
                        "                8283 along with your 1040 and Schedule A.</p>" +
                        "<p>While you don't have to mail in your receipts with your tax\n" +
                        "                return, be careful to maintain them with your records. In the\n" +
                        "                event of an audit, these receipts will be critical in proving\n" +
                        "                that your deductions are valid.</p>" +
                        "<h3>How it's done</h3>" +
                        "<p>Schedule A of the IRS Form 1040 is fairly user-friendly. Lines\n" +
                        "                16 through 19 apply to those who give to charity. You will enter\n" +
                        "                your cash contributions, non-cash contributions, any carryover\n" +
                        "                you may have from a prior year (a less common situation) and the\n" +
                        "                sum of your charitable deductions. This amount will be tallied\n" +
                        "                on the Schedule A, along with other deductions you are entitled\n" +
                        "                to, and deducted from your gross income before your tax is\n" +
                        "                calculated.</p>" +
                        "<p>Lending your support to a cause you believe in and saving at tax\n" +
                        "                time…talk about a win-win situation!</p>",
                    },
                    {
                      Title:
                        "Plan Financial Management Reviews at Each Life Stage",
                      Content:
                        "<p>Do you wonder if you're doing the right things with your\n" +
                        "                finances? Perhaps you don't know where to focus your attention.\n" +
                        "                As we move through adulthood, we pass through several financial\n" +
                        "                life stages and make budget, debt and investing choices.\n" +
                        "                Understanding where you are and which financial management\n" +
                        "                activities commonly occur at your life stage can help you meet\n" +
                        "                your goals.</p>" +
                        "<h3>College</h3>" +
                        "<p>Young adults attending college often need time to adjust to\n" +
                        "                being in charge of their own finances. Between applying for\n" +
                        "                student loans and credit cards, and struggling with budgeting on\n" +
                        "                a student income, college students may find it difficult to\n" +
                        "                balance cash flow. Establish good credit habits, such as paying\n" +
                        "                credit card bills on time, staying out of overdraft on bank\n" +
                        "                accounts, and keeping your credit balances below their limits.\n" +
                        "                It can take years to improve a negative credit history, so start\n" +
                        "                strong and do your best to keep your credit healthy!</p>" +
                        "<h3>First Job</h3>" +
                        "<p>Graduating from college and entering the workforce brings new\n" +
                        "                financial management challenges, such as making regular student\n" +
                        "                loan payments. Once you are employed, you may want to apply for\n" +
                        "                a car loan or increase your credit card limit. Now is also the\n" +
                        "                time to start a savings program. As you earn promotions or\n" +
                        "                raises, start contributing to short and long-term savings,\n" +
                        "                especially an emergency fund. Continue to make all payments on\n" +
                        "                time and review your credit file annually to verify the\n" +
                        "                information is correct. In the near future, you may need a\n" +
                        "                mortgage loan, and good credit could help qualify you for a\n" +
                        "                lower interest rate.</p>" +
                        "<h3>Establishing a Home and Family</h3>" +
                        "<p>Marriage, children, and home ownership make this a busy life\n" +
                        "                stage. Budgeting for household bills, loan payments, emergency\n" +
                        "                savings, education savings, and retirement planning often\n" +
                        "                requires careful financial management. Take time now to\n" +
                        "                fine-tune financial plans. Inquire about life insurance to\n" +
                        "                protect your family members from financial pressure should\n" +
                        "                anything happen to you. As you apply for joint credit products,\n" +
                        "                remember that you and your partner are equally responsible for\n" +
                        "                repaying jointly borrowed money. Negative credit will affect\n" +
                        "                both of your credit files.</p>" +
                        "<h3>Wealth-Building</h3>" +
                        "<p>If you have managed your credit responsibly to this point, your\n" +
                        "                credit file and score may work in your favor. Continue to check\n" +
                        "                your credit annually. A good credit score may help you get\n" +
                        "                reduced interest rates on a mortgage refinance or limit\n" +
                        "                increases. While your equity and savings grow, your debt and\n" +
                        "                outstanding credit balances should be declining.</p>" +
                        "<h3>Retirement</h3>" +
                        "<p>For many people, an ideal retirement includes spending time with\n" +
                        "                loved ones, pursuing travel and other leisure activities. Even\n" +
                        "                if your borrowing activity slows in retirement, continue to\n" +
                        "                check your credit report annually. Identifying any\n" +
                        "                out-of-the-ordinary activity, such as inquiries from unknown\n" +
                        "                companies or people, can alert you to potential issues such as\n" +
                        "                attempted identity theft.</p>",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_CreditReport",
        type: "DCR",
        name: "default_en-US_CreditReport",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/CreditReport/data/en-US/CreditReport",
          dcrContent: {
            Content: {
              CreditReport_Title: "Your TransUnion Credit Report",
              CreditReport_3B_Title: "Your Credit Reports",
              CreditReport_Updated: "Report updated as of:",
              CreditReport_LockActiveTitle: "Credit Lock Active: ",
              CreditReport_LockActiveContent:
                "Your credit information is currently locked which means most lenders cannot view it at the moment. Follow the link to learn how to unlock your credit information.",
              CreditReport_FreezeActiveTitle: "Credit Report Is Frozen: ",
              CreditReport_FreezeActiveContent:
                "Your credit information is currently frozen which means most lenders cannot view it at the moment. Follow the link to learn how to unlock your credit information.",
              CreditReport_TipTitle: "Tip: ",
              CreditReport_TipContent:
                "If you find an error or inaccuracy in your report, you have the power to dispute and/or to fix that information.",
              CreditReport_TooltipContent:
                "Your TransUnion credit report and score is updated daily upon you logging in. As part of this service, we provided you with a one-time Equifax and Experian score & report update and those may now be out of date depending when you first accessed this product.",
              CreditReport_LearnMore: "Learn How",
              CreditReport_LearnMore_URL:
                "https://www.transunion.com/credit-disputes/dispute-your-credit",
              CreditReport_TabNavigation_Overview: "Overview",
              CreditReport_TabNavigation_Accounts: "Accounts",
              CreditReport_TabNavigation_Collections: "Collections",
              CreditReport_TabNavigation_Inquiries: "Inquiries",
              CreditReport_TabNavigation_PublicRecords: "Public Records",
              CreditReport_TabNavigation_PersonalInfo: "Personal Info",
              CreditReport_TabNavigation_PersonalInformation:
                "Personal Information",
              CreditReport_Overview_Title: "Your Overview",
              CreditReport_Overview_CreditScore: "Credit Score",
              CreditReport_Overview_CreditScore_NA: "NA",
              CreditReport_Overview_CreditScore_TooltipTitle: "Credit Score",
              CreditReport_Overview_BasedOnVantage: "Based on VantageScore 3.0",
              CreditReport_Overview_CreditScoreTooltip:
                "The VantageScore 3.0 and grade is based primarily on a 24-month review of your credit report. It ranges from 300 to 850, where a high score means low risk. Your credit report has information – such as your history of payment punctuality, the total amount of your available credit, the total amount and type of debt you have, the number of open and active accounts, and the longevity of your relationships with creditors. See the dates under your score to find out when your last score was received and when your next score refresh will be available.",
              CreditReport_Overview_OpenAccounts: "Open Accounts",
              CreditReport_Overview_TotalLatePayments: "Total Late Payments",
              CreditReport_Overview_TotalLatePayments_TooltipTitle:
                "Total Late Payments",
              CreditReport_Overview_LatePaymentsTooltip:
                "See a summary of late payments (30-59 days, 60-89 days, 90 or more days) filed on your credit report across all trade line accounts (open or closed). A history of late payments - even by a few days - can be potentially hurtful. Payments received beyond 30 days of the due date are considered late. When lenders report credit data to credit bureaus, they typically lump payments that are late one day in with those that are late 59 days.",
              CreditReport_Overview_AccountsInCollections:
                "Accounts in collections",
              CreditReport_Overview_AccountsInCollections_TooltipTitle:
                "Accounts in collections",
              CreditReport_Overview_AccountsInCollectionsTooltip:
                "An account usually goes into collections after consistently missing payments. Collections can come from the original creditor or a third party agency that's contracted by that creditor, and remains on your report for up to 7 years.",
              CreditReport_Overview_Inquiries: "Inquiries (last 2 years)",
              CreditReport_Overview_AgeOfCredit: "Age of Credit",
              CreditReport_Overview_AgeOfCredit_TooltipTitle: "Age of Credit",
              CreditReport_Overview_AgeOfCreditTooltip:
                "Depth of Credit is the length of time you've had credit. Having a strong, long history of prudent credit use is ideal under any credit scoring model. But as important as it is to have long-term credit relationships, a diverse mix of credit accounts is also beneficial.",
              CreditReport_Overview_AgeOfCredit_Year: "Year",
              CreditReport_Overview_AgeOfCredit_Years: "Years",
              CreditReport_Overview_AgeOfCredit_Month: "Month",
              CreditReport_Overview_AgeOfCredit_Months: "Months",
              CreditReport_Overview_TotalCredit: "Credit Usage",
              CreditReport_Overview_TotalCredit_TooltipTitle: "Credit Usage",
              CreditReport_Overview_TotalCreditTooltip:
                "Utilization is the percentage of available credit that you've used. Having access to credit is one consideration, and how much of that has been tapped into is another. An individual who has 'maxed out' his or her credit cards and/or other lines-of-credit may not be able to obtain any additional credit or credit at the best possible terms. The lack of liquidity will deem these consumers high-risk in the eyes of lenders.",
              CreditReport_Overview_TotalCredit_PercentText: "Stay below",
              CreditReport_Overview_TotalCredit_Description:
                "You're currently using <b>{creditPercentage}%</b> of your credit limit",
              CreditReport_Overview_TotalDebtTitle: "Total Debt",
              CreditReport_Overview_TotalDebtTitle_TooltipTitle: "Total Debt",
              CreditReport_Overview_TotalDebtTooltip:
                "The total debt chart reflects the total balance across all accounts that have been reported monthly to TransUnion by banks or lenders. This number may not reflect your current balance especially if you've recently made a payment. Also, keeping your accounts in good standing and having lower debt balances relative to your available credit usually.",
              CreditReport_Overview_Debt_TotalDebtAmount: "Total Debt",
              CreditReport_Overview_Debt_AutoInstallmentDebtAmount: "Auto",
              CreditReport_Overview_Debt_CreditCardDebtAmount: "Credit Card",
              CreditReport_Overview_Debt_CollectionDebtAmount: "Collections",
              CreditReport_Overview_Debt_NonAutoInstallDebtAmount:
                "Installment",
              CreditReport_Overview_Debt_RealEstateDebtAmount: "Real Estate",
              CreditReport_Overview_Debt_OtherDebtAmount: "Other",
              CreditReport_Overview_Message:
                "Having a low debt balance relative to your available credit signals to lenders you're more likely to make on-time payments.",
              CreditReport_Accounts_Message:
                "<b>Friendly Reminder:</b> If you've made a recent payment to one of your accounts, it can sometimes take up to 2 weeks for it to reflect in your report.",
              CreditReport_Accounts_CreditCards: "Credit Cards",
              CreditReport_Accounts_DaysPastDue: "Days Past Due",
              CreditReport_Accounts_LastUpdated: "Last Updated",
              CreditReport_Accounts_DateClosed: "Date Closed",
              CreditReport_Accounts_AccountClosed: "Account Closed",
              CreditReport_Accounts_Loans: "Loans",
              CreditReport_Accounts_Other: "Other",
              CreditReport_Accounts_OtherTooltip: "Lorem ipsum dolor sit amet",
              CreditReport_Accounts_EmptyData:
                "There are no open accounts on your report",
              CreditReport_Collections_Tooltip: "Lorem ipsum dolor sit amet",
              CreditReport_Inquiries_Tooltip: "Lorem ipsum dolor sit amet",
              CreditReport_Inquiries_Type: "Type",
              CreditReport_Inquiries_InquiryDate: "Inquiry Date",
              CreditReport_Inquiries_ExpectedRemovalDate:
                "Expected Removal Date",
              CreditReport_Inquiries_ContactInfo: "Contact Info",
              CreditReport_Inquiries_DisputeInquiry:
                "Don't recognize this inquiry?",
              CreditReport_Inquiries_DisputeContent:
                "Report inaccuracies with the link below.",
              CreditReport_Inquiries_DisputeLink: "Dispute inquiry",
              CreditReport_Inquiries_EmptyData:
                "There are no inquiries to report.",
              CreditReport_PublicRecords_Tooltip: "Lorem ipsum dolor sit amet",
              CreditReport_PublicRecords_DateFiled: "Date Filed",
              CreditReport_PublicRecords_DisputeTitle:
                "Don't recognize record?",
              CreditReport_PublicRecords_DisputeContent:
                "Report inaccuracies with the link below.",
              CreditReport_PublicRecords_DisputeLink: "Dispute inquiry",
              CreditReport_PublicRecords_EmptyData:
                "There are no public records to report.",
              CreditReport_PublicRecords_Type: "Type",
              CreditReport_PublicRecords_Status: "Status",
              CreditReport_PublicRecords_HowFiled: "How Filed",
              CreditReport_Collections_EmptyData:
                "There are no collections to report.",
              CreditReport_PersonalInfo_FullName: "Full Name",
              CreditReport_PersonalInfo_AlsoKnownAs: "Also Known As",
              CreditReport_PersonalInfo_YearOfBirth: "Year of Birth",
              CreditReport_PersonalInfo_Phone: "Phone",
              CreditReport_PersonalInfo_Addresses: "Addresses",
              CreditReport_PersonalInfo_Employer: "Employer(s):",
              CreditReport_PersonalInfo_Message:
                "If your personal information is incorrect or misspelled, you may have to update over the phone. Only certain information can be changed online.",
              CreditReport_PersonalInfo_PersonalStatement:
                "Personal Statement(s):",
              CreditReport_HowDoesItLook_Title: "How Does Everything Look?",
              CreditReport_HowDoesItLook_Card1_Title:
                "Lenders provide us your data",
              CreditReport_HowDoesItLook_Card1_Content:
                "Lenders typically report your information to all 3 credit bureaus and it may cause some of your information to look a bit differently.",
              CreditReport_HowDoesItLook_Card2_Title: "VantageScore 3.0 varies",
              CreditReport_HowDoesItLook_Card2_Content:
                "There are many scoring models out there, including ones from FICO and other companies. Each one calculates your score a bit differently, but they all use information from your report.",
              CreditReport_HowDoesItLook_Card3_Title:
                "You have a right to dispute",
              CreditReport_HowDoesItLook_Card3_Content:
                "If you find inaccurate information on your TransUnion credit report, you can dispute it online or via postal mail.",
              CreditReport_HowDoesItLook_Card3_URL:
                "https://www.transunion.com/credit-disputes/dispute-your-credit",
              CreditReport_AccountDetails_BackButton: "Go Back",
              CreditReport_AccountDetails_Title: "Account Details",
              CreditReport_AccountDetails_UpdatedAsOf: "Updated as of:",
              CreditReport_AccountDetails_DateClosed: "Date Closed:",
              CreditReport_AccountDetails_LastUpdated: "Last Updated:",
              CreditReport_AccountDetails_AccountInfo: "Account Information",
              CreditReport_AccountDetails_AccountInfo_Tooltip:
                "Lorem ipsum dolor sit amet",
              CreditReport_AccountDetails_AccountStatus: "Account Status",
              CreditReport_AccountDetails_AccountType: "Account Type",
              CreditReport_AccountDetails_DateOpened: "Date Opened",
              CreditReport_AccountDetails_MonthlyPayment: "Monthly Payment",
              CreditReport_AccountDetails_Below30Message:
                "Keeping your credit usage <b>below 30%</b> will keep you in good standing with lenders and may lower the impact to your credit score.",
              CreditReport_AccountDetails_Below30Image:
                "Credit_Account_Usage.svg",
              CreditReport_Account_Usage_Image: "Credit_Account_Usage.svg",
              CreditReport_AccountDetails_PaymentInfo: "Payment Information",
              CreditReport_AccountDetails_PaymentStatus: "Payment Status",
              CreditReport_AccountDetails_PaymentStatusCurrent: "Current",
              CreditReport_AccountDetails_PaymentStatusLate: "Late",
              CreditReport_AccountDetails_PaymentStatusClosed: "Account Closed",
              CreditReport_AccountDetails_PaymentStatus_LastUpdated:
                "Last Updated",
              CreditReport_AccountDetails_PaymentStatus_PastDueAmount:
                "Past Due Amount",
              CreditReport_AccountDetails_PaymentStatus_HighestBalance:
                "Highest balance",
              CreditReport_AccountDetails_PaymentStatus_MonthlyPayment:
                "Monthly Payment",
              CreditReport_AccountDetails_PaymentStatus_TimesLate:
                "Times 30/60/90 days late",
              CreditReport_AccountDetails_PaymentStatus_TimesLateRange:
                "(Last 7 years)",
              CreditReport_AccountDetails_PaymentStatus_TotalLatePayments:
                "Total Late Payments",
              CreditReport_AccountDetails_AdditionalInfo:
                "Additional Information",
              CreditReport_AccountDetails_AdditionalInfo_Responsibility:
                "Responsibility",
              CreditReport_AccountDetails_AdditionalInfo_Terms: "Terms",
              CreditReport_AccountDetails_AdditionalInfo_Remarks: "Remarks",
              CreditReport_AccountDetails_AdditionalInfo_CreditorName:
                "Creditor Name",
              CreditReport_AccountDetails_AdditionalInfo_CreditorContact:
                "Creditor Contact",
              CreditReport_AccountDetails_EverythingCorrect_Title:
                "Is everything looking correct?",
              CreditReport_AccountDetails_Image: "Credit_Account_Details.svg",
              CreditReport_AccountDetails_EverythingCorrect_Content:
                "If not, you can report an inaccuracy.",
              CreditReport_AccountDetails_EverythingCorrect_Button:
                "Learn how to report this account",
              CreditReport_AccountDetails_EverythingCorrect_URL:
                "https://www.transunion.com/credit-disputes/dispute-your-credit",
              CreditReport_CollectionDetails_OriginalBalance:
                "Original Balance",
              CreditReport_CollectionDetails_CurrentBalance: "Current Balance",
              CreditReport_Reminder_Image: "Credit_Report_Reminder.png",
              CreditReport_TU_Image: "TULogo.svg",
              CreditReport_Equifax_Image: "EquifaxLogo.svg",
              CreditReport_Experian_Image: "ExperianLogo.svg",
              CreditReport_LockFreezeActiveContent:
                "Your TransUnion credit information is currently <b>locked or frozen</b> so most lenders cannot view it.",
              CreditReport_LockFreeze_LearnMore: "Learn More",
              CreditReport_LockFreeze_URL: "/protection-support",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_ProtectionSupport",
        type: "DCR",
        name: "default_en-US_ProtectionSupport",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/ProtectionSupport/data/en-US/ProtectionSupport",
          dcrContent: {
            Content: {
              ProtectionSupport_Title: "Protection Support",
              ProtectionSupport_ContentCard_Title:
                "When your credit is locked:",
              ProtectionSupport_ContentCard_Content:
                "<ul><li>Hard inquiries and credit applications using your name are stopped.</li><li>We'll send you an alert if someone tries to make a hard inquiry on your credit report.</li><li>We'll send you an alert if someone tries to make a hard inquiry on your credit report.</li></ul>",
              ProtectionSupport_Inquiries_Title: "Your recent hard inquiries",
              ProtectionSupport_Inquiries_Tooltip_Title: "Hard Inquiries",
              ProtectionSupport_Inquiries_Tooltip_Content:
                "Hard inquiries happen when a lender requests your credit report to evaluate a credit application. When your credit is locked, lenders can't pull your report and therefore can't make a hard inquiry. Hard inquiries stay on your credit report for two years.",
              ProtectionSupport_Inquiries_ViewMore_Button:
                "View more inquiries",
              ProtectionSupport_Inquiries_ViewLess_Button:
                "View less inquiries",
              ProtectionSupport_Inquiries_EmptyData:
                "There are no hard inquiries on your credit report right now.",
              ProtectionSupport_FAQ_Title: "Frequently Asked Questions",
              ProtectionSupport_FAQ_Section: [
                {
                  Section_Title: "What is Credit Lock?",
                  Item: [
                    {
                      Title: "What is Credit Lock?",
                      Content:
                        "<p>Credit Lock gives you the ability to lock and unlock access to your TransUnion credit report at the touch of a button&mdash;giving you more control over your credit health. </p><p>When your credit report is locked, lenders won&rsquo;t be able to pull your file when you apply for new accounts. </p><p>You&rsquo;ll get an alert if someone tries to make a hard inquiry on your credit report while it&rsquo;s locked. </p><p>Locking your credit report blocks others from looking at it, which can help stop an identity thief from opening credit in your name.</p>",
                    },
                  ],
                },
                {
                  Section_Title:
                    "What's the difference between Credit Lock, Credit Freeze and a Fraud Alert?",
                  Item: [
                    {
                      Title:
                        "What's the difference between Credit Lock, Credit Freeze and a Fraud Alert?",
                      Content:
                        '<p>Credit Lock and credit freeze (also known as a security freeze) both block access to your credit report, stopping new accounts from being opened in your name. </p><p>Credit Lock alerts you when someone applies for credit in your name. A credit freeze does not send you alerts, but you can log in to the TransUnion Service Center at any time to see your freeze status. </p><p>A fraud alert tells lenders to verify your identity before extending new credit, but it doesn&rsquo;t block access to your credit report. You can learn more about credit freezes at <a title="Credit Freeze" href="https://www.transunion.com/credit-freeze" target="_blank" rel="noopener">TransUnion.com/credit-freeze</a> and fraud alerts at <a title="Fraud Alerts" href="https://www.transunion.com/fraud-alerts" target="_blank" rel="noopener">Transunion.com/fraud-alerts</a>.</p>',
                    },
                  ],
                },
                {
                  Section_Title:
                    "What kind of alerts will I receive when my credit is locked?",
                  Item: [
                    {
                      Title:
                        "What kind of alerts will I receive when my credit is locked?",
                      Content:
                        "<p>You'll receive an inquiry alert when someone tries to access your credit report while it&rsquo;s locked. You&rsquo;ll also get email confirmations when you lock and unlock your credit.</p>",
                    },
                  ],
                },
                {
                  Section_Title:
                    "How can locking my credit help prevent identity theft and fraud?",
                  Item: [
                    {
                      Title:
                        "How can locking my credit help prevent identity theft and fraud?",
                      Content:
                        "<p>If someone tries to apply for credit in your name while your credit report is locked, access will be denied, and we&rsquo;ll notify you about it.</p>",
                    },
                  ],
                },
                {
                  Section_Title:
                    "Can information be added to my credit file while locked?",
                  Item: [
                    {
                      Title:
                        "Can information be added to my credit file while locked?",
                      Content:
                        "<p>Yes. When your TransUnion credit report is locked, a creditor can still open an account using your file from one of the other major credit bureaus where it isn&rsquo;t locked or frozen. This could result in new information being added to your TransUnion credit report.</p>",
                    },
                  ],
                },
                {
                  Section_Title: "What are Credit Lock service hours?",
                  Item: [
                    {
                      Title: "What are Credit Lock service hours?",
                      Content:
                        "<p>Changes to your Credit Lock status are available 24 hours, 7 days a week, with the exception of Sunday from 2 a.m. &ndash; 5:30am Central Time. If you see a message that Credit Lock is unavailable due to system maintenance please try again in a few hours.</p>",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_StaticHeaderBanner",
        type: "DCR",
        name: "default_en-US_StaticHeaderBanner",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/AMEX/StaticHeaderBanner/data/en-US/StaticHeaderBanner",
          dcrContent: {
            Content: {
              StaticHeaderBanner_Title: "American Express® Savings",
              StaticHeaderBanner_Content:
                "Meet your savings goals faster with American Express Savings Account. Enjoy no monthly fees or minimum opening deposit with 24/7 customer support. FDIC Insured. Terms Apply.",
              StaticHeaderBanner_ContentPadding: "26px",
              StaticHeaderBanner_Image: "StartSavings.svg",
              StaticHeaderBanner_ImageTitle: "",
              StaticHeaderBanner_ImageHeight: "",
              StaticHeaderBanner_ImagePadding: "",
              StaticHeaderBanner_CtaText: "Start Saving",
              StaticHeaderBanner_SecondaryCtaText: "Close",
              StaticHeaderBanner_secondaryCtaAction: "Close",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_EnrollCancellation",
        type: "DCR",
        name: "AMEX_en-US_EnrollCancellation",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/AMEX/EnrollCancellation/data/en-US/EnrollCancellation",
          dcrContent: {
            Content: {
              EnrollCancellation_Description:
                "Your MyCredit Guide cancellation has been processed.<br/>We're sorry to see you go.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_MyProfile",
        type: "DCR",
        name: "AMEX_en-US_MyProfile",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/MyProfile/data/en-US/MyProfile",
          dcrContent: {
            Content: {
              MyProfile_Cancel_Account_Text:
                "Use the button below to cancel your MyCredit Guide<sup>®</sup> account. Canceling your account will not affect your credit report, but you will lose the ability to view the historical data and trends over the course of your enrollment.",
              MyProfile_Disclaimer_Message:
                "<b>Please Note:</b> Making changes to the information below will only change the information stored for MyCredit Guide<sup>®</sup>. Changes at the TransUnion Credit Bureau or your service provider will need to be made independently.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_Error",
        type: "DCR",
        name: "AMEX_en-US_Error",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Error/data/en-US/Error",
          dcrContent: {
            Content: {
              Error_Content_sso_timeout:
                "To protect your privacy, sessions are ended after 15 minutes of inactivity. We apologize for the inconvenience.<br/><b>What to do now</b>:<br/> Please access MyCredit Guide<sup>®</sup> again from your provider.",
              Error_Content_sso_deceased:
                "Thank you for your interest in MyCredit Guide<sup>®</sup>.<br/><br/>We are sorry to inform you that we are unable to fulfill your credit products at this time.  The information you provided does not match what we currently have in our records.<br/><br/><b>What to do now</b>:<br/><br/>We apologize for any inconvenience this has caused.  For help with your order, please contact any of our customer service representatives below . They will be able to walk you through the order process and grant you access to your credit data.",
              Error_Content_sso_saml_issue:
                "Unfortunately, MyCredit Guide<sup>®</sup> has encountered an issue with your membership information. We apologize for the inconvenience.<br/><br/><b>What to do now</b>:<br/><br/> Please contact any of our customer service representatives:<br/>  ",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_Dashboard",
        type: "DCR",
        name: "AMEX_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_Title: "MyCredit Guide<sup>®</sup>",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_Logout",
        type: "DCR",
        name: "AMEX_en-US_Logout",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Logout/data/en-US/Logout",
          dcrContent: {
            Content: {
              Logout_Screen1_Title:
                "You have logged out of the MyCredit Guide<sup>®</sup>",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_Generic",
        type: "DCR",
        name: "AMEX_en-US_Generic",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Generic/data/en-US/Generic",
          dcrContent: {
            Content: {
              Generic_Continue2: "Accept and Continue",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "default_en-US_Blog",
        type: "DCR",
        name: "default_en-US_Blog",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/default/Blog/data/en-US/Blog",
          dcrContent: {
            Content: {
              Blog_Title: "Your Guide For All Things Credit and Protection",
              Blog_Description:
                "Find the latest pieces on credit health and wealth protection here.",
              Blog_FeaturedArticles_Title: "Featured articles",
              Blog_MoreArticles_Title: "More articles",
              Blog_MinRead: "min read",
              Blog_Pagination_Label: "Articles per page:",
              Blog_Post_BlogLink: "Credit Guide Blog",
              Blog_Post_CTAText: "Did you find this article helpful?",
              Blog_Post_CTAAction_Yes: "Yes",
              Blog_Post_CTAAction_No: "No",
              Blog_Post_MinRead: "Min Read",
              Blog_Post_CTA_ThankYou: "Thank you for the feedback!",
            },
          },
        },
      },
      {
        id: "default_en-US_Personalization",
        type: "DCR",
        name: "default_en-US_Personalization",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/Personalization/data/en-US/Personalization",
          dcrContent: {
            Content: {
              Personalization_Title: "Set your financial goals",
              Personalization_Welcome_Image: "Personalization.svg",
              Personalization_Welcome_Title: "We’re glad you’re here!",
              Personalization_Welcome_Text:
                "Let's learn a little bit about your immediate needs and financial goals.",
              Personalization_Welcome_PrimaryButtonText: "Answer questions",
              Personalization_Welcome_SecondaryButtonText: "Remind me later",
              Personalization_CancelModal_Trigger: "Remind me later",
              Personalization_CancelModal_Title: "Are you sure?",
              Personalization_CancelModal_Text:
                "Your answers won't be saved, but you can always update your answers from your Profile page.",
              Personalization_CancelModal_PrimaryButtonText:
                "Continue to dashboard",
              Personalization_CancelModal_SecondaryButtonText: "Go Back",
              Personalization_EnrollReason_Index: "Question 1 of 2",
              Personalization_EnrollReason_Title: "What brings you here today?",
              Personalization_EnrollReason_Guidance: "Select all that apply.",
              Personalization_EnrollReason_Answer1_Value:
                "Improve my credit score",
              Personalization_EnrollReason_Answer1_Label:
                "Improve my credit score",
              Personalization_EnrollReason_Answer1_Id: "improve",
              Personalization_EnrollReason_Answer2_Value:
                "Help protect my identity",
              Personalization_EnrollReason_Answer2_Label:
                "Help protect my identity",
              Personalization_EnrollReason_Answer2_Id: "protect",
              Personalization_EnrollReason_Answer3_Value: "Rebuild my credit",
              Personalization_EnrollReason_Answer3_Label: "Rebuild my credit",
              Personalization_EnrollReason_Answer3_Id: "rebuild",
              Personalization_EnrollReason_Answer4_Value:
                "Help plan a big purchase",
              Personalization_EnrollReason_Answer4_Label:
                "Help plan a big purchase",
              Personalization_EnrollReason_Answer4_Id: "plan",
              Personalization_EnrollReason_Answer5_Value: "Maintain my credit",
              Personalization_EnrollReason_Answer5_Label: "Maintain my credit",
              Personalization_EnrollReason_Answer5_Id: "maintain",
              Personalization_EnrollReason_ContinueButtonText: "Next question",
              Personalization_FinancialGoals_PreviousQuestion:
                "Previous question",
              Personalization_FinancialGoals_Index: "Question 2 of 2",
              Personalization_FinancialGoals_Title:
                "Tell us about the financial goals you are hoping to achieve",
              Personalization_FinancialGoals_Guidance: "Select all that apply.",
              Personalization_FinancialGoals_Answer1_Value: "Buy a home",
              Personalization_FinancialGoals_Answer1_Label: "Buy a home",
              Personalization_FinancialGoals_Answer1_Id: "home",
              Personalization_FinancialGoals_Answer2_Value: "Buy a car",
              Personalization_FinancialGoals_Answer2_Label: "Buy a car",
              Personalization_FinancialGoals_Answer2_Id: "car",
              Personalization_FinancialGoals_Answer3_Value:
                "Get a new credit card",
              Personalization_FinancialGoals_Answer3_Label:
                "Get a new credit card",
              Personalization_FinancialGoals_Answer3_Id: "creditcard",
              Personalization_FinancialGoals_Answer4_Value: "Pay down debt",
              Personalization_FinancialGoals_Answer4_Label: "Pay down debt",
              Personalization_FinancialGoals_Answer4_Id: "debt",
              Personalization_FinancialGoals_Answer5_Value:
                "Save for retirement",
              Personalization_FinancialGoals_Answer5_Label:
                "Save for retirement",
              Personalization_FinancialGoals_Answer5_Id: "retirement",
              Personalization_FinancialGoals_Answer6_Value: "Start a business",
              Personalization_FinancialGoals_Answer6_Label: "Start a business",
              Personalization_FinancialGoals_Answer6_Id: "business",
              Personalization_FinancialGoals_Answer7_Value:
                "Seeking a new loan",
              Personalization_FinancialGoals_Answer7_Label:
                "Seeking a new loan",
              Personalization_FinancialGoals_Answer7_Id: "loan",
              Personalization_FinancialGoals_Answer8_Value: "Other",
              Personalization_FinancialGoals_Answer8_Label: "Other",
              Personalization_FinancialGoals_Answer8_Id: "other",
              Personalization_FinancialGoals_ContinueButtonText:
                "Save your answers",
              Personalization_Confirmation_Image: "TopFocusSample.jpg",
              Personalization_Confirmation_Title: "Looks good!",
              Personalization_Confirmation_Text:
                "If your financial needs and goals change, you can always update these answers under the “My Profile” section.",
              Personalization_Confirmation_PrimaryButtonText:
                "View My Dashboard",
            },
          },
        },
      },
      {
        id: "default_en-US_AdditionalToolsAndResources",
        type: "DCR",
        name: "default_en-US_AdditionalToolsAndResources",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/default/AdditionalToolsAndResources/data/en-US/AdditionalToolsAndResources",
          dcrContent: {
            Content: {
              AdditionalToolsAndResources_Heading:
                "Additional Tools & Resources",
              AdditionalToolsAndResources_ScoreSimulator_Title:
                "Simulate your credit score",
              AdditionalToolsAndResources_ScoreSimulator_Content:
                "See how specific credit choices may affect your credit score.",
              AdditionalToolsAndResources_ScoreSimulator_Img:
                "AdditionalTools_Simulator.svg",
              AdditionalToolsAndResources_CreditReport_Title:
                "TransUnion credit report",
              AdditionalToolsAndResources_CreditReport_Content:
                "Get a clear view of your newly designed Transunion Credit Report.",
              AdditionalToolsAndResources_CreditReport_Img:
                "AdditionalTools_CreditReport.svg",
              AdditionalToolsAndResources_CreditCompass_Title:
                "Set a score goal today",
              AdditionalToolsAndResources_CreditCompass_Content:
                "With a higher score you could get access to better credit offers and even increase your approval odds.",
              AdditionalToolsAndResources_CreditCompass_Img:
                "AdditionalTools_CreditCompass.svg",
              AdditionalToolsAndResources_Alerts_Title: "See your alerts",
              AdditionalToolsAndResources_Alerts_Content:
                "Check in on activity and changes on your credit report.",
              AdditionalToolsAndResources_Alerts_Img:
                "AdditionalTools_Alerts.svg",
              AdditionalToolsAndResources_Blog_Title: "Get smart on credit",
              AdditionalToolsAndResources_Blog_Content:
                "Visit the credit education blog to learn more about credit, scores and how to reach your financial goals.",
              AdditionalToolsAndResources_Blog_Img: "AdditionalTools_Blog.svg",
              AdditionalToolsAndResources_DisputeCenter_Title: "Dispute Center",
              AdditionalToolsAndResources_DisputeCenter_Content:
                "If there are any inaccuracies contained within your credit report, you can easily file a dispute online and we can show you how.",
              AdditionalToolsAndResources_DisputeCenter_Img:
                "AdditionalTools_DisputeCenter.svg",
            },
          },
        },
      },
      {
        id: "TU1_en-US_CreditScore",
        type: "DCR",
        name: "TU1_en-US_CreditScore",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TU1/CreditScore/data/en-US/CreditScore",
          dcrContent: {
            Content: {
              CreditScore_Chart_Fair: "Good",
              CreditScore_Chart_Good: "Very Good",
              CreditScore_Chart_NeedsWork: "Fair",
              CreditScore_Chart_NeedsWorkPoor: "Poor",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TU1_en-US_CreditReport",
        type: "DCR",
        name: "TU1_en-US_CreditReport",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TU1/CreditReport/data/en-US/CreditReport",
          dcrContent: {
            Content: {
              CreditReport_Reminder_Image: "Credit_Report_Reminder.svg",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_MyProfile",
        type: "DCR",
        name: "NavyFed_en-US_MyProfile",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/MyProfile/data/en-US/MyProfile",
          dcrContent: {
            Content: {
              MyProfile_Cancel_Account_Text:
                "Use the button below to cancel your Mission: Credit Confidence account. Canceling your account will not affect your credit report, but you will lose the ability to view the historical data and trends over the course of your enrollment.",
              MyProfile_Disclaimer_Message:
                "<b>Please Note:</b> Making changes to the information below will only change the information stored for Mission: Credit Confidence Dashboard. Changes at the TransUnion Credit Bureau or your service provider will need to be made independently.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_Error",
        type: "DCR",
        name: "NavyFed_en-US_Error",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/Error/data/en-US/Error",
          dcrContent: {
            Content: {
              Error_Content_sso_timeout:
                "To protect your privacy, sessions are ended after 15 minutes of inactivity. We apologize for the inconvenience.<br/><b>What to do now</b>:<br/> Please access Mission: Credit Confidence\u2122 Dashboard again from your provider.",
              Error_Content_sso_deceased:
                "Thank you for your interest in Mission: Credit Confidence\u2122 Dashboard.<br/><br/>We are sorry to inform you that we are unable to fulfill your credit products at this time.  The information you provided does not match what we currently have in our records.<br/><br/><b>What to do now</b>:<br/><br/>We apologize for any inconvenience this has caused.  For help with your order, please contact any of our customer service representatives below . They will be able to walk you through the order process and grant you access to your credit data.",
              Error_Content_sso_saml_issue:
                "Unfortunately, Mission: Credit Confidence\u2122 Dashboard has encountered an issue with your membership information. We apologize for the inconvenience.<br/><br/><b>What to do now</b>:<br/><br/> Please contact any of our customer service representatives:<br/>  ",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_Alerts",
        type: "DCR",
        name: "NavyFed_en-US_Alerts",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/Alerts/data/en-US/Alerts",
          dcrContent: {
            Content: {
              Alerts_Tooltip:
                "Mission: Credit Confidence\u2122 Dashboard alerts you to changes to your credit report that could indicate potential signs of identity theft, fraud or inaccuracies that could damage your score. We will be monitoring for any critical changes such as new account, inquiries or address changes.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_Dashboard",
        type: "DCR",
        name: "NavyFed_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_Title: "Mission: Credit Confidence\u2122 Dashboard",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#00a6ca",
              Dashboard_SetAGoalHeader: "Set a score goal today",
              Dashboard_SetAGoalText:
                "With a higher score you could get access to better credit offers and even increase your approval odds.",
              Dashboard_SetAGoal_Button: "Get Started",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_SSOTerms",
        type: "DCR",
        name: "NavyFed_en-US_SSOTerms",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/SSOTerms/data/en-US/SSOTerms",
          dcrContent: {
            Content: {
              SSOTerms_Content:
                "Your acceptance is required to access Mission: Credit Confidence",
              SSO_Welcome_Image: "SSO_Welcome.svg",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_Logout",
        type: "DCR",
        name: "NavyFed_en-US_Logout",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/Logout/data/en-US/Logout",
          dcrContent: {
            Content: {
              Logout_Screen1_Title:
                "You have logged out of the Mission: Credit Confidence Dashboard.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_StaticAd",
        type: "DCR",
        name: "NavyFed_en-US_StaticAd",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/StaticAd/data/en-US/StaticAd",
          dcrContent: {
            Content: {
              StaticAd_Title: "Utilize Your Score",
              StaticAd_Ad1_filename: "nRewards.png",
              StaticAd_Ad1_altText:
                "Earn Rewards While You Build or Repair Your Credit - With the Navy Federal nRewards<sup>®</sup> Secured Credit Card.",
              StaticAd_Ad1_link:
                "https://www.navyfederal.org/loans-cards/credit-cards/nrewards-secured.html?cmpid=aff|transunion|mcc21|brn|gen|crd_nrws|07/30/2021|||",
              StaticAd_Ad1_lowScore: "300",
              StaticAd_Ad1_highScore: "639",
              StaticAd_Ad1_alternate_filename: "CredControl.jpg",
              StaticAd_Ad1_alternate_altText:
                "Credit with You in Mind - Lower rates, no annual fees.",
              StaticAd_Ad1_alternate_link:
                "https://www.navyfederal.org/loans-cards/credit-cards.html?cmpid=aff|transunion|mcc21|brn|gen|crd_gen|07/30/2021|||",
              StaticAd_Ad1_alternate_lowScore: "640",
              StaticAd_Ad1_alternate_highScore: "850",
              StaticAd_Ad2_filename: "OurCalculators.png",
              StaticAd_Ad2_altText:
                "Calculate Your Way to Success - Take the guesswork out of planning with our calculators.",
              StaticAd_Ad2_link:
                "https://www.navyfederal.org/resources/calculators.html?cmpid=aff|transunion|mcc21|brn|gen|calculator|07/30/2021|||",
              StaticAd_Ad2_lowScore: "300",
              StaticAd_Ad2_highScore: "850",
              StaticAd_Ad3_filename: "MakingCents.png",
              StaticAd_Ad3_altText:
                "Reach Your Financial Goals - Enjoy step-by-step guidance with MakingCents.",
              StaticAd_Ad3_link:
                "https://www.navyfederal.org/resources/financial-wellness.html?cmpid=aff|transunion|mcc21|brn|gen|finwellness|07/30/2021|||",
              StaticAd_Ad3_lowScore: "300",
              StaticAd_Ad3_highScore: "850",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_EnrollCancellation",
        type: "DCR",
        name: "NavyFed_en-US_EnrollCancellation",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/NavyFed/EnrollCancellation/data/en-US/EnrollCancellation",
          dcrContent: {
            Content: {
              EnrollCancellation_Title: "Cancellation Confirmed",
              EnrollCancellation_Description:
                "Your Mission: Credit Confidence Dashboard cancellation has been processed.<br/>We're sorry to see you go.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BoltCard_en-US_FAQ",
        type: "DCR",
        name: "BoltCard_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BoltCard/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18556813196'>+1 (855) 681-3196</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TU1_en-US_Dashboard",
        type: "DCR",
        name: "TU1_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TU1/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_Title: "Mission: Credit Confidence\u2122 Dashboard",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#00a6ca",
              Dashboard_SetAGoalHeader: "Set a score goal today",
              Dashboard_SetAGoalText:
                "With a higher score you could get access to better credit offers and even increase your approval odds.",
              Dashboard_SetAGoal_Button: "Get Started",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "CompassCard_en-US_FAQ",
        type: "DCR",
        name: "CompassCard_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/CompassCard/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18556813196'>+1 (855) 681-3196</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_FAQ",
        type: "DCR",
        name: "NavyFed_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at 1-888-226-4988.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_Terms",
        type: "DCR",
        name: "NavyFed_en-US_Terms",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/Terms/data/en-US/Terms",
          dcrContent: {
            Content: {
              Terms_TabName: "Terms and Conditions",
              Terms_Content: {
                tabHeading: "Welcome to Mission: Credit Confidence Dashboard",
                tabDescription:
                  "<br/>THE TERMS AND CONDITIONS BELOW CONTAIN AN ARBITRATION AGREEMENT AND A CLASS ACTION WAIVER. <br/><br/>Welcome to Mission: Credit Confidence Dashboard (here on referred to as Mission: Credit Confidence), provided by TransUnion Interactive, Inc. Mission: Credit Confidence is subject to your provider's Online Terms and Conditions. In addition, by accessing and using Mission: Credit Confidence, you agree to be bound by the below Terms and Conditions. YOU MUST ACCEPT THE TERMS AND CONDITIONS BELOW BEFORE YOU WILL BE PERMITTED ACCESS TO MISSION: CREDIT CONFIDENCE.",
                itemList: [
                  {
                    Title: "Eligibility and Availability",
                    Description:
                      "<br/>Mission: Credit Confidence is offered to select account holders only. To access Mission: Credit Confidence, you must have already enrolled in your provider's online account management and accepted the online terms and conditions. Mission: Credit Confidence is only available if we can match your personal information with your credit file. You will not have access to Mission: Credit Confidence if you do not have access to your provider's online account management. We may terminate access to Mission: Credit Confidence for any reason and without notice. You may ask to cancel your enrollment at any time and it may take up to 60 days to process your cancellation request. Mission: Credit Confidence is only available in English at this time.",
                  },
                  {
                    Title: "Registration and Accurate Information",
                    Description:
                      "<br/>If you chose to access Mission: Credit Confidence, you will be required to register, provide personal information, and select a user name and password. You agree to provide accurate information in your registration and not to share your password with third parties. You agree not to impersonate another person or to select or use a user name or password of another person. You agree to notify TransUnion Interactive promptly of any unauthorized use of Mission: Credit Confidence and of any loss, theft or disclosure of your password. Failure to comply with these requirements shall constitute a breach of these terms and conditions and shall constitute grounds for immediate termination of your right to access Mission: Credit Confidence.",
                  },
                  {
                    Title: "Consent to Obtain Credit Information",
                    Description:
                      "<br/>In order to deliver Mission: Credit Confidence to you, we must obtain your credit file and other information. You hereby authorize TransUnion Interactive, Inc. to access your credit file from TransUnion and exchange certain information about you in order to verify your identity and provide you Mission: Credit Confidence. Each time you access Mission: Credit Confidence, you are providing “written instructions” as set forth in the Fair Credit Reporting Act for TransUnion Interactive to obtain your consumer credit report from TransUnion, a consumer reporting agency.",
                  },
                  {
                    Title: "TransUnion Credit Score",
                    Description:
                      "<br/>The credit score provided is your VantageScore<sup>®</sup> Credit Score, which is a model created by the three major credit bureaus, Equifax, Experian and TransUnion. VantageScore<sup>®</sup> Credit Score predicts credit risk. Specifically, it measures the probability that a person will pay his or her debts on time. There are many different credit scores in the marketplace based on different models with different scoring ranges. The scores provided by Mission: Credit Confidence are for educational/informational purposes only and are not intended for use by lenders. Mission: Credit Confidence can only evaluate the account information that appears on your TransUnion consumer credit report. Accounts not reported to or subsequently deleted from your TransUnion consumer credit report will not be reflected in your score. Mission: Credit Confidence does not maintain your credit report information and is not able to make any changes to it. Mission: Credit Confidence cannot initiate any disputes on your behalf. Mission: Credit Confidence and TransUnion Interactive, Inc. are not responsible for inaccurate results, including any due to incorrect, incomplete, or outdated information in your credit report.",
                  },
                  {
                    Title: "Simulations",
                    Description:
                      "<br/>Mission: Credit Confidence has a credit score simulator that estimates how certain changes in your credit behavior may impact your credit score. This simulator shows how these changes impact the credit score displayed on Mission: Credit Confidence, which is the VantageScore<sup>®</sup> credit score. Simulated scores and score changes simulated by Mission: Credit Confidence are only predicated estimates. Mission: Credit Confidence and TransUnion Interactive do not guarantee that your actual credit score will change by the same amount, in the same way, or at all.",
                  },
                  {
                    Title: "Credit Monitoring Only",
                    Description:
                      "Mission: Credit Confidence and TransUnion Interactive are not credit repair or credit counseling organizations or similarly regulated organizations under other applicable law, and do not provide credit repair advice. Mission: Credit Confidence is not a credit repair tool and makes no representation or promise that it will improve your credit record, credit history or credit rating or provide you with any assistance in that regard.",
                  },
                  {
                    Title: "Communications",
                    Description:
                      "<br/>You agree to receive in electronic form these Terms and Conditions and all other communications regarding Mission: Credit Confidence. As part of the Mission: Credit Confidence service, we may send you alerts by email, text message, telephone, or mail. You consent to receive these communications. You can withdraw your consent only by cancelling your enrollment in Mission: Credit Confidence.",
                  },
                  {
                    Title:
                      "Right To Receive A Free Credit Report From AnnualCreditReport.com",
                    Description:
                      "<br/>Under the Fair Credit Reporting Act, you are entitled to receive a free disclosure of your credit report from each of the national credit reporting agencies annually. For more information visit AnnualCreditReport.com.",
                  },
                  {
                    Title: "Intellectual Property",
                    Description:
                      '<br/>The images, text, screens, web pages, materials, data, content and other information ("Content") used and displayed on Mission: Credit Confidence are the property of TransUnion Interactive or its licensors and are protected by copyright, trademark and other laws. In addition to our rights in individual elements of the Content within Mission: Credit Confidence, TransUnion Interactive owns copyright or patent rights in the selection, coordination, arrangement and enhancement of such Content. You may copy the Content from Mission: Credit Confidence for your personal or educational use only, provided that each copy includes any copyright, trademark or service mark notice or attribution as they appear on the pages copied. Except as provided in the preceding sentence, none of the Content may be copied, displayed, distributed, downloaded, licensed, modified, published, reposted, reproduced, reused, sold, transmitted, used to create a derivative work or otherwise used for public or commercial purposes without the express written permission of TransUnion Interactive or the owner of the Content.',
                  },
                  {
                    Title: "Disclaimer of Warranties and Liabilities",
                    Description:
                      '<br/>MISSION: CREDIT CONFIDENCE, INCLUDING ALL CONTENT, PRODUCTS AND SERVICES MADE AVAILABLE ON OR ACCESSED THROUGH MISSION: CREDIT CONFIDENCE, IS PROVIDED TO YOU "AS IS". TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, NEITHER TRANSUNION INTERACTIVE NOR ITS AFFILIATES MAKE ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND WHATSOEVER AS TO THE CONTENT, PRODUCTS OR SERVICES AVAILABLE ON OR ACCESSED THROUGH MISSION: CREDIT CONFIDENCE, THAT A USER WILL HAVE CONTINUOUS, UNINTERRUPTED OR SECURE ACCESS TO MISSION: CREDIT CONFIDENCE, PRODUCTS OR SERVICES OR THAT MISSION: CREDIT CONFIDENCE, PRODUCTS OR SERVICES WILL BE ERROR-FREE. IN ADDITION, TRANSUNION INTERACTIVE AND ITS AFFILIATES DISCLAIM ALL EXPRESS OR IMPLIED WARRANTIES, INCLUDING TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON INFRINGEMENT AND INFORMATIONAL CONTENT. THEREFORE, YOU AGREE THAT YOUR ACCESS TO AND USE OF MISSION: CREDIT CONFIDENCE, PRODUCTS, SERVICES AND CONTENT ARE AT YOUR OWN RISK. BY USING MISSION: CREDIT CONFIDENCE, YOU ACKNOWLEDGE AND AGREE THAT NEITHER TRANSUNION INTERACTIVE NOR ITS AFFILIATES HAVE ANY LIABILITY TO YOU (WHETHER BASED IN CONTRACT, TORT, STRICT LIABILITY OR OTHERWISE) FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL OR SPECIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH YOUR ACCESS TO MISSION: CREDIT CONFIDENCE, CONTENT, PRODUCTS OR SERVICES (EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), INCLUDING LIABILITY ASSOCIATED WITH ANY VIRUSES WHICH MAY INFECT YOUR COMPUTER EQUIPMENT.',
                  },
                  {
                    Title: "Release",
                    Description:
                      "<br/>You agree to release, discharge and hold Mission: Credit Confidence harmless from any and all claims, losses, damages, obligations, or liabilities, directly or indirectly relating from your use of the Mission: Credit Confidence Dashboard. In no event shall Mission: Credit Confidence be liable for any direct, incidental, special, punitive or consequential damages however caused arising out of your use, or inability to use, the Mission: Credit Confidence Dashboard.",
                  },
                  {
                    Title: "Privacy Policy",
                    Description:
                      "<br/>By accessing Mission: Credit Confidence, you agree that TransUnion Interactive may use and share your personal information in accordance with the terms of our Privacy Statement. Our privacy statement can be reached from the Privacy Policy link located in the footer of each Mission: Credit Confidence page.",
                  },
                  {
                    Title: "Applicable Law",
                    Description:
                      "<br/>The laws applicable to the interpretation of these terms and conditions shall be the laws of the State of Delaware, USA, and applicable federal law, without regard to any conflict of law provisions. TransUnion Interactive can provide credit information only for individuals who have established credit in the United States. If you choose to access Mission: Credit Confidence from outside the United States, you do so at your own initiative and are responsible for compliance with local laws. You agree that any and all disputes arising under this Agreement or out of TransUnion Interactive's provision of services to you, if submitted to a court of law, shall be submitted to the state and federal courts of New Castle County, Delaware, USA.",
                  },
                  {
                    Title: "Policy Regarding Children",
                    Description:
                      "<br/>We define children as individuals under the age of 16. Mission: Credit Confidence is not intended for the use of children and we do not intend to collect information about children through Mission: Credit Confidence. Furthermore, you must be at least 18 years old to access Mission: Credit Confidence.",
                  },
                  {
                    Title: "Notices",
                    Description:
                      "<br/>You should send any notices or other communications regarding Mission: Credit Confidence, including products or services accessed through Mission: Credit Confidence, to TransUnion Interactive, 100 Cross Street, Suite 202, San Luis Obispo, CA 93401. <br/> Except as otherwise provided, we may send any notices to you to the most recent e-mail address you have provided or, if you have not provided an e-mail address, to any e-mail or postal address that we believe is your address. If you wish to update your personal information, please go to “My Profile” and then to “My Information.”",
                  },
                  {
                    Title:
                      "Agreement to Resolve Disputes by Binding Individual Arbitration",
                    Description:
                      "<br/>THIS SECTION IS AN AGREEMENT TO ARBITRATE DISPUTES (“ARBITRATION AGREEMENT”) THAT MAY ARISE AS A RESULT OF YOUR ACCESS TO AND USE OF MISSION: CREDIT CONFIDENCE DASHBOARD, YOUR USE OF THE PRODUCTS OR SERVICES ACCESSED BY MISSION: CREDIT CONFIDENCE DASHBOARD, AND/OR THESE TERMS AND CONDITIONS. READ THIS SECTION CAREFULLY. YOU UNDERSTAND AND AGREE THAT BOTH PARTIES WOULD HAVE HAD A RIGHT TO LITIGATE DISPUTES THROUGH A COURT AND TO HAVE A JUDGE OR JURY DECIDE THEIR CASE, BUT BOTH PARTIES BY ENTERING INTO THIS AGREEMENT CHOOSE TO HAVE ANY DISPUTE RESOLVED THROUGH BINDING INDIVIDUAL ARBITRATION. OTHER RIGHTS THAT YOU WOULD HAVE IF YOU WENT TO COURT MAY NOT BE AVAILABLE OR MAY BE MORE LIMITED IN ARBITRATION, INCLUDING YOUR RIGHT TO APPEAL.",
                  },
                  {
                    Title: "Right to Reject Arbitration",
                    Description:
                      "<br/>YOU HAVE THE RIGHT TO REJECT THIS ARBITRATION AGREEMENT, BUT YOU MUST EXERCISE THIS RIGHT PROMPTLY. You must notify us in writing within sixty (60) days after the date you click-on to “Accept” the Terms and Conditions. You must send your request to: TransUnion Interactive, 100 Cross Street, Suite 202, San Luis Obispo, CA 93401. This request must include your current username and a clear statement of your intent, such as “I reject the arbitration agreement in the Terms and Conditions of Mission: Credit Confidence.” <br/><br/> In consideration for our willingness to provide you with access to Mission: Credit Confidence or any services or products accessed through Mission: Credit Confidence, you and we agree as follows: <br/><br/> You agree that any dispute, claim or controversy (“Claim”) between you and TransUnion Interactive or its parent, TransUnion, our agents, contractors, employees, officers or assignees, arising out of or relating in any way to your access to and use of Mission: Credit Confidence, your access or use of any product or service accessed through Mission: Credit Confidence, and these Terms and conditions, including, without limitation, tort and contract claims, claims based on any federal, state or local statute, law or regulation and the issue of arbitrability must be resolved exclusively by binding arbitration, except for the validity, scope or enforceability of this Arbitration Agreement. However, we will not demand arbitration pursuant to this Arbitration Agreement in connection with any individual Claim that you properly file and pursue in a small-claims court of your state or municipality, so long as the Claim is pending only in that court.<br/><br/> YOU UNDERSTAND AND AGREE THAT NO CLAIM, DISPUTE OR CONTROVERSY MAY BE CONSOLIDATED WITH A DISPUTE OF ANY OTHER PERSON IN ARBITRATION, OR RESOLVED ON A CLASS-WIDE BASIS BY A CLASS ACTION OR OTHER PROCEEDING AND YOU HEREBY WAIVE YOUR RIGHT TO COMMENCE OR PARTICIPATE IN ANY SUCH COLLECTIVE OR REPRESENTATIVE PROCEEDING. Unless a different procedure is required by applicable law, the arbitration will be conducted before a single arbitrator in accordance with the rules of the American Arbitration Association (“AAA”), including the AAA's Supplementary Procedures for Consumer-Related Disputes.<br/><br/> A demand for arbitration under this Arbitration Agreement may be made either before or after a lawsuit or other legal proceeding begins. However, any demand for arbitration that is made after a lawsuit or other legal proceeding has begun must be made within 90 days following the service of a complaint, third-party complaint, cross-claim or counterclaim or any answer thereto or any amendment to any of the above.<br/><br/> You understand and agree that before you take a dispute to arbitration under this Agreement, you must first contact our customer account representatives and give us an opportunity to resolve this dispute. Similarly, before TransUnion Interactive takes a dispute to arbitration, we must first attempt to resolve it by contacting you. If the dispute cannot be satisfactorily resolved within sixty days from the date you or TransUnion Interactive is notified by the other of a dispute, either party may then contact the AAA in writing and request arbitration of the dispute. Information about the arbitration process and the AAA's arbitration rules and its fees are available from the AAA on the Internet at <a href='#'>http://www.adr.org.</a><br/><br/> The cost of any arbitration proceeding shall be divided as follows:<br/><br/> <ul><li>If you initiate arbitration, you will be responsible for paying one half of the filing fee, or $125.00, whichever is less, when the demand for arbitration is made.</li><li>If we initiate arbitration, we will be responsible for paying all arbitration costs.</li><li>Regardless of who initiates the arbitration, you will not be responsible for any arbitration fees that exceed one half of the filing fee, or $125.00, whichever is less, or the fees that you would have incurred if the Claim had been brought in court. Notwithstanding the foregoing, if you believe the cost of arbitration may be too burdensome, you may seek a waiver of the filing fee under the applicable arbitration rules. If you seek, but not qualify for such waiver, we will consider a written request from you to advance all or part of the filing fee.</li></ul><br/> <br/>The arbitration will be based only on the written submissions of the parties and the documents submitted to the AAA relating to the dispute, unless either party requests that the arbitration be conducted using the AAA's telephonic, online, or in-person procedures (additional charges may apply for these procedures). Any arbitration proceeding will take place at a location within the federal judicial district that includes the most recent U.S. Mail address we have on file for you at the time the Claim is filed or at any other mutually acceptable location.<br/><br/> The arbitrator will be required to follow relevant law and applicable judicial precedent to arrive at a decision and shall be empowered to grant whatever relief would be available in court. Where authorized by applicable law, the arbitrator's award may include attorneys' fees and other expenses. You understand and agree that you and TransUnion Interactive are entering into this arbitration agreement in connection with a transaction involving interstate commerce. Accordingly, this arbitration agreement and any proceedings hereunder shall be governed by and enforceable under the Federal Arbitration Act (“FAA”), 9 U.S.C. §§1-16.<br/><br/> Any party to the arbitration proceeding may enter judgment upon the arbitration award in any court having jurisdiction over the arbitration award and may have that judgment enforced by any court having jurisdiction over that judgment. If this Arbitration Agreement is held to be invalid or otherwise unenforceable for any reason, it will be severed from the Agreement and the parties agree that exclusive jurisdiction and venue for any claims will be within the federal judicial district that includes the most recent U.S. Mail address we have on file for you at the time the Claim is filed or at any other mutually acceptable location.<br/><br/> BECAUSE YOUR ACESS TO AND USE OF MISSION: CREDIT CONFIDENCE REQUIRES THAT YOU CONSENT TO ARBITRATION OF YOUR CLAIMS OR DISPUTES, YOU WILL NOT HAVE THE RIGHT TO PURSUE YOUR CLAIM IN COURT OR BEFORE A JUDGE OR JURY OR TO PARTICIPATE IN A CLASS ACTION OR ANY OTHER COLLECTIVE OR REPRESENTIVE PROCEEDING. OTHER RIGHTS THAT EITHER PARTY WOULD HAVE IF THAT PARTY WENT TO COURT, INCLUDING WITHOUT LIMITATION THE RIGHT TO CONDUCT DISCOVERY OR TO APPEAL, MAY BE LIMITED OR UNAVAILABLE IN ARBITRATION.<br/><br/> The arbitrator's decision shall become final and binding after 30 days unless a party to the arbitration takes an appeal from the decision by making a written request to AAA. The appeal panel, which will consist of three arbitrators, will consider all factual and legal issues anew, will conduct the appeal in the same manner as the initial arbitration, and will make decisions based on the vote of the majority. We will advance any fees and costs required by AAA to commence any appeal. The appeal panel's decision shall be final and binding.<br/><br/> In the event of a conflict between the applicable arbitration rules and this Arbitration Agreement, this Arbitration Agreement shall govern. To the extent that the class action and collective action waivers contained herein are rendered invalid or unenforceable by applicable law as to any Claims, this Arbitration Agreement shall not apply to such Claims and thus we may elect to proceed exclusively in court. If any other provision of this Arbitration Agreement should be found invalid or unenforceable, such a determination shall not affect the enforceability of the remaining provisions, which shall remain and continue in full force and effect.",
                  },
                ],
              },
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "NavyFed_en-US_Privacy",
        type: "DCR",
        name: "NavyFed_en-US_Privacy",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/NavyFed/Privacy/data/en-US/Privacy",
          dcrContent: {
            Content: {
              Privacy_TabName: "Privacy Policy",
              Privacy_Content: {
                tabHeading:
                  "https://www.transunion.com/privacy/consumer-interactive",
                tabDescription:
                  "<br/>Effective Date: 07/29/2020 <br/><br/>Last Updated: 07/29/2020 <br/><br/> We have recently updated this Privacy Notice. Be sure to review the notice carefully to understand TransUnion Interactive's privacy practices.",
                itemList: [
                  {
                    Title: "Introduction",
                    Description:
                      '<br/>This Privacy Notice ("Notice") provides information about how TransUnion Interactive, Inc. ("We," "Us," "Our," "TUI") collects, uses, protects, and shares personal information about you and describes the rights you may have regarding your personal information. This Notice applies to TUI, its websites, applications, products ("The Products"), features, and application program interfaces, when you communicate or interact with us either directly or through the use of any of our online systems and applications, (collectively, the "Online and Offline Services"). This Notice applies to the Mission: Credit Confidence™ Dashboard membership program. Use of our Online and Offline Services constitutes your agreement to the terms of this Notice. If you do not agree with the terms of this Notice, please do not use our Online and Offline Services.',
                  },
                  {
                    Title: "Collection and use of your personal information",
                    Description:
                      "<br/>Personal information we may collect, from whom or how we may collect, and why we may collect it",
                    SubItem_List: [
                      {
                        SubItem_Title:
                          "IDENTIFIERS, INCLUDING THOSE IN THE CALIFORNIA CUSTOMER RECORDS STATUTE",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Name (first, last, and/or maiden name) (or that of a family member or child); home address, billing address, or other physical address; an email address (so we may communicate with you); a telephone number</li><li>Social security number; or certain other information, such as date of birth, employment information, and credit card account information</li><li>Device identification information which we may associate with a mobile telephone number you provide in order to access &nbsp;the Online Services</li><li>Information collected passively via cookies and similar technology</li><li>IP addresses, device identifiers, and application identifiers</li><li>Account and password information related to financial services</li><li>Debt, income and financial information</li><li>Driver's license number and passport number</li><li>Utility and income information</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li><li>Information collected passively via cookies and similar technology</li><li>Advertising Partners</li><li>Credit reporting agency and its affiliates</li><li>External data providers, vendors</li></ul><h4>Why we may collect it</h4></br><ul><li>To verify your identity</li><li>To enroll you in the Product, finalize your application during the enrollment process and create your TUI Product membership program</li><li>To provide you with products and their features</li><li>To send emails and other alerts</li><li>To process payment and complete the transaction</li><li>To provide you with quality customer service</li><li>For product development, product research, and product improvement by TUI and its Affiliates, or the TransUnion family of companies</li><li>To prevent fraud on your account, or to identify fraudulent activity towards TUI</li><li>To enhance and optimize your experience on our Online and Offline Services and improve our Products, for example, to test new products, to determine if products that we are contemplating may be desirable to our customers, for analytics, marketing research, and business analysis</li><li>To perform analytics, improve user experience, improve our product offerings</li><li>To maintain the accuracy of your credit report and information</li><li>To participate in our affiliate program, subscribe to our emails or newsletter, participate in one of our contests or surveys or &nbsp;transact other business with us</li><li>To display, optimize and provide you with personalized advertisements</li><li>To communicate with you</li><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product; promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "PROTECTED CLASSIFICATION CHARACTERISTICS UNDER CALIFORNIA OR FEDERAL LAW",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Date of Birth</li><li>Ethnicity</li><li>Marital Status</li></ul></br><h4>From whom or how we may collect it</h4></h4><ul><li>Consumers</li><li>Advertising partners</li><li>Credit reporting agency and its affiliates</li></ul><h4>Why we may collect it</h4><ul><li>To verify your identity</li><li>To enhance and optimize your TUI Product membership program experience</li><li>To provide you with advertisements that are more relevant to your demographic</li><li>To finalize your application and create your TUI Product membership program</li><li>To display, optimize and provide you with personalized advertisements</li><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product; promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                      {
                        SubItem_Title: "COMMERCIAL INFORMATION",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Purchase records of our Product</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li><li>Payment processor</li><li>TUI</li></ul><h4>Why we may collect it</h4><ul><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product, promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>To keep a record of your transaction history.</li></ul>",
                      },
                      {
                        SubItem_Title: "BIOMETRIC",
                        SubItem_Description: "<ul><li>Not collected</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "INTERNET OR OTHER SIMILAR NETWORK ACTIVITY",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Information about your interactions with the website, for example, when you view or search content, we receive and track that information; web session; log file information; information such as the website(s) you visited, when you visited the website, how long you stayed, your behavior while you were on our website and from what device you accessed the website; device identification information which we may associate with a mobile telephone number you provide used to access the website; the IP address and information related to that IP address, the internet service provider or proxy used, operating system information, browser information (the pages you view, how long you stay on each page, how often you come back and your behavior while you are on our websites); and which advertisement, emails, SMS notifications or other push notifications related to the website and/or Product, offer or online content you view, access, or click on, including to get to the Online Services or while you are on the websites</li><li>Information collected from advertising partners</li><li>Local Storage Objects such as HTML5 and Flash to store content information and preferences</li></ul></br><h4>From whom or how we may collect it</h4><ul><li>Consumers</li><li>Cookies and similar technology</li></ul><h4>Why we may collect it</h4><ul><li>To continually enhance and optimize the Product and the Online Services, based on up-to-date user experience and available technology</li><li>To improve the delivery and development of the Product</li><li>To customize your web site and/or customer service experience</li><li>To develop new Products</li><li>To display, optimize, and provide you with personalized advertisements</li><li>To measure advertising effectiveness</li><li>To perform site analysis</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                      {
                        SubItem_Title: "GEOLOCATION DATA",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>We collect geolocation data by using various technologies to determine your location including, but not limited to IP address, Wi-Fi access points, and cell towers</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li><li>Cookies and similar technology</li><li>Telecommunications providers</li></ul><h4>Why we may collect it</h4><ul><li>Fraud prevention</li><li>Targeted advertisements</li><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product; promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                      {
                        SubItem_Title: "SENSORY DATA",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Audio and electronic recording, for example, when you call in with a question to customer service</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li></ul><h4>Why we may collect it</h4><ul><li>To provide customer service and support consumers</li><li>To train agents to ensure best customer service delivery</li><li>To ensure legal and compliance obligations</li><li>To help answer questions and resolve disputes</li></ul>",
                      },
                      {
                        SubItem_Title: "PROFESSIONAL OR EMPLOYMENT",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Employment</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumers</li></ul><h4>Why we may collect it</h4><ul><li>To enhance and optimize your experience and improve our Products and our Affiliates' Products, for example, to test new products, to determine if products that we are contemplating may be desirable to our customers, for analytics, marketing research, and business analysis</li><li>To display, optimize and provide you with personalized advertisements.</li></ul>",
                      },
                      {
                        SubItem_Title: "NON-PUBLIC EDUCATION INFORMATION",
                        SubItem_Description: "<ul><li>Not collected</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "INFERENCES DRAWN FROM OTHER PERSONAL INFORMATION",
                        SubItem_Description:
                          "<h4>We may collect the following information, including, but not limited to:</h4><ul><li>Site preferences and characteristics, for example, your behavior on our sites</li></ul><h4>From whom or how we may collect it</h4><ul><li>Consumer</li><li>Cookies and similar technology</li><li>Advertising partners</li></ul><h4>Why we may collect it</h4><ul><li>To determine how users interact with our website and how we can improve the user experience</li><li>To create a customer profile in order to better optimize your customer experience and offer personalized advertisements</li><li>For fulfillment of your requests and purchases, transactional and other communications about the Online Services, Offline Services and Product; promotional opportunities and generally for TUI's and its Affiliates' internal business purposes such as, for example, internal analyses and audits</li><li>For product development and research, and for any purpose subject to the limitations set forth in this Privacy Notice and applicable law</li><li>For data utilization from third parties, such as your telecommunications provider, to help confirm your identity and prevent fraudulent access. It is likely that you authorize your wireless operator to disclose your mobile number, name, address, email, network status, customer type, customer role, billing type, mobile device identifiers (IMSI and IMEI) and other subscriber status and device details, if available, to our third party service provider, solely to verify your identity and prevent fraud for the duration of the business relationship. TUI limits the use of this information to prevent fraud and unauthorized access or disclosures of your personal information.</li></ul>",
                      },
                    ],
                  },
                  {
                    Title: "Sharing your personal information",
                    Description:
                      "Personal information disclosed for a business purpose during the prior 12 months, by category of third parties. We may share your personal information with the following recipients or categories of recipients:",
                    SubItem_List: [
                      {
                        SubItem_Title:
                          "IDENTIFIERS, PERSONAL INFORMATION CATEGORIES LISTED IN THE CALIFORNIA CUSTOMER RECORDS STATUTE, PROTECTED CLASSIFICATION CHARACTERISTICS UNDER CALIFORNIA OR FEDERAL LAW",
                        SubItem_Description:
                          "<ul><li>Commercial partners or non-affiliated third parties, in order to provide and continually enhance the Product and deliver Personalized offers to you</li><li>Consumer data resellers, with whom we form indirect partnerships</li><li>Advertising networks, to provide personalized advertisements, reporting purposes, analytics, if applicable</li><li>Affiliates, to improve their product offerings, to offer consumers targeted offers and advertising</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services, Product and understand consumer and optimize experience</li><li>Service provider, third parties with whom we contract to enable certain services, such as, for example, email list and email management, marketing, customer support, Product fulfillment, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the Online Services website to a third party site</li><li>Marketing companies, to provide personalized advertisements and enhance the your experience; measure advertising effectiveness; provide advertising services such as advertising placement, advertising performance, cookie management</li><li>Affiliates, or the TransUnion family of companies, to enable updates on TransUnion's consumer credit database; deliver, enhance or develop the Products and those of TransUnion companies, or for internal business purposes; and to provide you with products, to improve our product offerings, to facilitate and improve our advertising, improve our database accuracy, or to send you Personalized Offers</li><li>Government entities and regulators, to respond to regulator request</li><li>Parties to litigation, to provide required documentation for litigation</li><li>Operating systems and platforms, to share with a different system or database, for example, to process payments</li><li>Law enforcement agencies, without your consent pursuant to a subpoena or when required by other legal process, government request, to protect TUI's rights, to protect the rights, privacy, safety or property of TUI and its Affiliates, you, or another individual, and otherwise as may be necessary or required by applicable law or regulation. This may include responding to legal requests from jurisdictions outside of the United States; to detect, prevent and address fraud and other illegal activity, including as part of internal investigations and remediation efforts, to protect TUI and its Affiliates, you and others, and to prevent harm to you or any other individual</li><li>To consultants, agents and advisors, such as attorneys and accountants, in the good faith belief that such disclosure is within the scope of their professional duties to TUI and with the understanding that such professionals will abide by our security and confidentiality policies</li><li>Internet service providers</li><li>Data analytics providers, to optimize customer experience</li><li>Credit reporting agencies to obtain your requested credit report.</li></ul>",
                      },
                      {
                        SubItem_Title: "COMMERCIAL INFORMATION",
                        SubItem_Description:
                          "<ul><li>Data analytics providers, for testing purposes</li><li>Affiliates, or the TransUnion family of companies, to enable updates on TransUnion's consumer credit database; deliver, enhance or develop the Products and those of TransUnion companies, or for internal business purposes; and to provide you with products, to improve our product offerings, to facilitate and improve our advertising, or improve our database accuracy.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "INTERNET OR OTHER SIMILAR NETWORK ACTIVITY",
                        SubItem_Description:
                          "<ul><li>Data analytics providers, to optimize customer experience</li><li>Service provider, to scrub against opt out list</li><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners, in order to provide and continually enhance the Product and deliver Personalized offers to you</li><li>Consumer data resellers, with whom we form indirect partnerships</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services, Product and understand consumer experience</li><li>Marketing companies, to provide personalized advertisements and enhance your experience</li><li>Service providers, third parties with whom we contract to enable certain services, such as, for example, email list and email management, marketing, customer support, Product fulfillment, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and to interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the Online Services website to a third party site</li><li>Internet service providers.</li></ul>",
                      },
                      {
                        SubItem_Title: "GEOLOCATION DATA",
                        SubItem_Description:
                          "<ul><li>Data analytics providers, for analytics and testing purposes.</li></ul>",
                      },
                      {
                        SubItem_Title: "SENSORY DATA",
                        SubItem_Description:
                          "<ul><li>Law enforcement agencies, only as required by law</li><li>Government entities and regulators, to respond to regulator request</li><li>Parties to litigation, to provide required documentation for litigation.</li></ul>",
                      },
                      {
                        SubItem_Title: "PROFESSIONAL OR EMPLOYMENT",
                        SubItem_Description:
                          "<ul><li>Service provider, third parties with whom we contract to enable certain services, such as, for example, email list and email management, marketing, customer support, Product fulfillment, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, to interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the Online Services to a third party site</li><li>Affiliates, or the TransUnion family of companies, in order to deliver, enhance or develop the Products and those of TransUnion companies, or for internal business purposes</li><li>Data analytics providers, to optimize customer experience</li><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners, in order to provide and continually enhance the Product and deliver Personalized offers to you</li><li>Consumer data resellers , with whom we form indirect partnerships</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services, Product and understand consumer experience</li><li>Marketing companies, to provide personalized advertisements and enhance your experience.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "INFERENCES DRAWN FROM OTHER PERSONAL INFORMATION",
                        SubItem_Description:
                          "<ul><li>Service provider, third parties with whom we contract to enable certain services, such as, for example, email list and email management, marketing, customer support, Product fulfillment, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the Online Services to a third party site</li><li>Affiliates in the TransUnion family of companies, in order to deliver, enhance or develop the Products and those of TransUnion companies, or for internal business purposes</li><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners, in order to provide and continually enhance the Product and deliver Personalized offers to you</li><li>Consumer data resellers, with whom we form indirect partnerships</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services, Product and understand consumer experience</li><li>Marketing companies, to provide personalized advertisements and enhance your experience.</li></ul>",
                      },
                    ],
                  },
                  {
                    Title: "Personal information sold",
                    Description:
                      "Categories of personal information sold during the prior 12 months, by category of third parties",
                    SubItem_List: [
                      {
                        SubItem_Title:
                          "Identifiers and personal information categories listed in the California Customer Records statute",
                        SubItem_Description:
                          "<ul><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners or non-affiliated third parties in order to provide and continually enhance the Product and deliver personalized offers to you</li><li>Consumer data resellers</li><li>Marketing companies, to provide personalized advertisements and enhance the your experience</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Protected classification characteristics under California or federal law",
                        SubItem_Description:
                          "<ul><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners or non-affiliated third parties in order to provide and continually enhance the Product and deliver personalized offers to you</li><li>Consumer data resellers</li><li>Marketing companies, to provide personalized advertisements and enhance the your experience</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title: "Commercial information",
                        SubItem_Description:
                          "<ul><li>Advertising networks, to provide personalized advertisements</li><li>Consumer data resellers</li><li>Marketing companies, to provide personalized advertisements and enhance the your experience</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title: "Biometric",
                        SubItem_Description:
                          "<ul><li>We do not sell this category of personal information.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Internet or other similar network activity",
                        SubItem_Description:
                          "<ul><li>Advertising networks</li><li>Commercial partners</li><li>Consumer data resellers</li><li>Marketing companies</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title: "Geolocation data",
                        SubItem_Description:
                          "We sell personal information that may allow a third party to determine location, such as IP addresses. <br/> <ul><li>Advertising networks</li><li>Commercial partners</li><li>Consumer data resellers</li><li>Marketing companies</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title: "Sensory data",
                        SubItem_Description:
                          "<ul><li>We do not sell this category of persona information.</li></ul>",
                      },
                      {
                        SubItem_Title: "Professional or employment",
                        SubItem_Description:
                          "<ul><li>Advertising networks</li><li>Commercial partners</li><li>Consumer data resellers</li><li>Marketing companies</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our &nbsp;&nbsp;&nbsp;&nbsp;Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Non-public education information( per the Family Educational Rights and Privacy Act )",
                        SubItem_Description:
                          "<ul><li>We do not sell this category of personal information.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Inferences drawn from other personal information",
                        SubItem_Description:
                          "<ul><li>Advertising networks, to provide personalized advertisements</li><li>Commercial partners or non-affiliated third parties, in order to provide and continually enhance the Product and deliver personalized offers to you</li><li>Consumer data resellers, with whom we form indirect partnerships</li><li>Marketing companies</li><li>Data analytics providers, to enable TUI to understand and improve the delivery of advertisements, enhance, or modify our Online Services, Product and understand consumer experience</li><li>Third parties with whom we contract to enable certain services, such as, marketing, consumer research, surveys, contests, promotions; and to enable personalization of offers based on your credit profile, and so that you can interact more easily with a third party through pre-filled forms or applications, or to enable a data pass when you redirect from the site to a third party site.</li></ul>",
                      },
                    ],
                  },
                  {
                    Title: "Your Authorization to TUI",
                    Description:
                      "<br/>When you enrolled, you provided written instruction and authorization for TUI to obtain your credit information from TransUnion, Experian and Equifax (depending on the Product) to display it to you, as well as to use and share the information provided by you, along with your credit information, to obtain personalized offers from third parties and display personalized offers to you.",
                    SubItem_List: {
                      SubItem_Title: "",
                      SubItem_Description: "",
                    },
                  },
                  {
                    Title: "Cookies, pixels, and similar technology",
                    Description: "",
                    SubItem_List: {
                      SubItem_Title:
                        "Information collected passively via cookies and similar technology",
                      SubItem_Description:
                        "<br/>A cookie is a small text file that a web server places on your computer or device when your browser accesses a website. Cookies store data specific to a client or website and are designed to create a record of or \"remember\" online activity. We use cookies for a number of different purposes. Some cookies are necessary to ensure the site functions properly and some enable us to deliver an individualized Online Services experience.<br/> <br/>When you use the site, TUI, commercial partners, and service providers may use cookies and similar technologies like pixel tags and web beacons to facilitate your access to and use of our Online Services, and to improve, enhance and personalize your experience for advertising purposes on the site. For example, we use this technology to recognize you each time you return to the site using the same computer or device so that you do not have to re-enter all of your personal information on each visit. Like many websites, we also use this technology to collect and store information to customize user experience, track activity on the site, as well as to deliver and measure online advertising, including Personalized offers and retarget advertisements. TUI advertising commercial partners and service providers may also use cookies or similar technologies for the management and delivery of email communications so that, for example, TUI knows when an email communication to you has been delivered or opened.<br/> <br/>You generally have the ability to accept or decline cookies. Most web browsers give you a choice to modify your browser settings to decline some or all cookies. We provide you choices to manage your privacy and sharing. Not accepting cookies may make certain features of the site unavailable to you. If you would like more information about cookies, you can visit <a href='http://www.cookiecentral.com/n_cookie_faq.htm'>Click Here</a> <br/><br/>Partners and service providers may separately permit you to opt-out of some or all of their information collection activities.",
                    },
                  },
                  {
                    Title: "Analytics",
                    Description:
                      "<br/>TUI uses a number of additional third party tools for analytical and advertising purposes. These tools provide internet or similar network activity, geolocation and inferences drawn from other network activity, collected over time, and from other websites on which TUI displays advertisements and enables TUI to understand and improve the delivery of advertisements, enhance or modify our Online Services and Product, as well as understand consumer experience. We may also use this information to segment, enhance or modify our advertisements and to personalize your experience.",
                    SubItem_List: {
                      SubItem_Title: "Analytics Disclosure",
                      SubItem_Description:
                        "<br/>TUI uses Google Analytics 360, including Google Tag Manager and Google Ads. If you would like to learn more about Google Analytics, or opt-out of this data collection and sharing activity, please use this link: <a href='#'>https://www.google.com/policies/privacy/partners/</a>.",
                    },
                  },
                  {
                    Title: "TransUnion's credit reporting business",
                    Description:
                      "<br/>Access to information on this TransUnion database is limited to: (1) entities with a permissible purpose to receive it, as defined in the Fair Credit Reporting Act; (2) entities with a permitted use under the Gramm-Leach-Bliley Act; (3) companies who resell TransUnion data as permitted under law; and (4) companies who process data on behalf of TUI or TransUnion.",
                  },
                  {
                    Title: "Personalized (Third Party) Offers",
                    Description:
                      "<br/>In order to provide you with an optimal consumer experience, TUI strives to continually personalize the Product, including the offers displayed on the Product dashboard and delivered to you by email for some of the Online Services. TUI wants users to have access to personalized offers based on individual user credit experience, and not generic offers that may or may not be suited to an individual user's needs. Personalized offers, including prescreen offers, are third-party offers displayed automatically on the Product dashboard, via email, and in addition to other display locations as part of the Product. TUI may share personal information with Affiliates and commercial partners or service providers so that the personalized offers can be generated by the third party and then displayed to you. For example, in order to enable the delivery of a personalized offer from a lender (itself or through an aggregator of loan offers), the lender must have access to your personal information to extend an appropriate offer for which you may be eligible. The lender may separately access your credit information if it has a lawful purpose to do so. In addition to seeing personalized offers on the Product dashboard, you may receive personalized offers via email or other forms of communication from TUI.",
                  },
                  {
                    Title: "Links to other sites or services",
                    Description:
                      "<br/>This Notice does not apply to other third-party sites or services. Please remember that personalized offers and other opportunities presented on Online Services will include a link or linking ability to a third-party site or application. If you click on a link or browse to a third-party site from our site/service, your activity and interaction is subject to that third party's rules and policies. These third party sites are not controlled by TUI and TUI is not responsible for the privacy practices or the content of any such third party site. Personalized offers are provided to you as a convenience and the display of a third party offer through our Online Services is not an endorsement by TUI. If you provide any information to a third party, then the third party's respective privacy policies will apply with regard to any information you provide or which may be collected by the third party. If, however, the third-party site provides that TUI's Privacy Notice applies to the information provided by you on that site, then TUI's policies will apply to the information collected for the purpose of enrolling in the Product once we receive the information from you or the third party. We recommend that you review the online privacy statements on these other sites to understand their privacy practices and treatment of personal information so that you can make an informed decision regarding your use or interaction with their site/service. <br/> <br/>Under the FCRA, our parent company, TransUnion, may provide information to companies that provide you with pre-approved offers of credit or insurance. If you prefer not to receive such offers, you may opt-out by calling 1-888-5OPTOUT or visiting <a href='https://www.optoutprescreen.com/' target='_blank'>https://www.optoutprescreen.com/</a>.",
                  },
                  {
                    Title: "Market research",
                    Description:
                      "<br/>From time-to-time, you may be presented with a survey or other questions to solicit feedback about your use of the Product and the Online Services. Your participation in these types of market research activities is optional. Should you choose to participate, we may use information you provide to improve and/or develop our Product and services.",
                  },
                  {
                    Title: "Securing your personal information",
                    Description:
                      "<br/>We take security seriously at TUI and TransUnion and maintain physical, electronic, and administrative safeguards to protect any information that we collect. TransUnion and TUI use security technologies to safeguard credit information and any information you provide us, and maintain policies, procedures, and compliance mechanisms, such as training, independent review and third-party verification of our stated practices, to ensure adherence to our information security plans. When TUI shares information as described in this Privacy Notice, we enter into written agreements with such third parties to ensure that the physical and information security environments of such third parties satisfy TransUnion and TUI standards.",
                  },
                  {
                    Title: "Managing Your Account",
                    Description:
                      "<br/>You are responsible for maintaining the accuracy of the information that you provide to TUI and for your own password management and online safety when accessing this Product. Please always consider best practices like changing your password routinely, using a strong password that is not the same as you use for other websites, and not accessing the Product with unsecure devices or unsecure networks. You may make changes to your account settings on the Your Profile settings tab, including your email address, phone number, mailing address, payment card information and password details. You may also cancel your account online, if applicable, and manage communications preferences related to certain types of communications (email and SMS/MMS) from TUI to you. Please note that although you may manage communication preferences so that you do not receive commercial communications from TUI outside of the Product dashboard, you may not decline to receive transactional communications from TUI, which contain information about your account and the Product. Please also note that important information about your account, including the alerts that are a part of the Product, will be sent to the email address and/or phone number that you have provided, if applicable. It therefore is important that you update your account information when necessary and actively check email communications from TUI.",
                  },
                  {
                    Title: "Personal information of Children",
                    Description:
                      "<br/>You must be at least 18 to access our Online and Offline Services and Products or become a member of any membership program entitled to membership benefits. Our Online and Offline Services are not intended for use by children and we do not knowingly solicit or collect information from children.",
                  },
                  {
                    Title: "Assignment",
                    Description:
                      "<br/>TUI reserves the right to transfer or assign any and all of the information that we collect on the website to an Affiliate including in connection with any reorganization, merger, sale, joint venture, assignment, transfer or other disposition of part or all of the business, assets or stock of TUI.",
                  },
                  {
                    Title: "California Privacy Rights",
                    Description:
                      "<br/>If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA).",
                    SubItem_List: [
                      {
                        SubItem_Title: "Right to know",
                        SubItem_Description:
                          "<br/>You have the right to request a disclosure of the personal information collected, sold, and shared about you over the past 12 months and the purpose for doing so. Upon submission of a verifiable consumer request, we will provide you with the following information. <br/><ul><li>The categories of personal information we collected about you.</li><li>The categories of sources from which we collected your personal information.</li><li>Our business or commercial purpose for collecting or selling the personal Information.</li><li>The categories of third parties with whom we share personal Information.</li><li>The specific pieces of personal information we collected about you.</li><li>The categories of personal information that we sold in the preceding 12 months, and for each category identified, the categories of third parties to which we sold that particular category of personal information.</li><li>The categories of personal information that we disclosed for a business purpose in the preceding 12 months, and for each category identified, the categories of third parties with whom we disclosed that particular category of personal information</li></ul><br/>If we provide this information to you electronically, the information will be in a portable format. To the extent that it is technically feasible, we will provide you the information in a readily useable format that you can easily transfer to another entity. Effective January 1, 2020, <a href='https://www.transunion.com/consumerprivacy/'>Click Here</a> to exercise your rights with TUI. Please refer to your primary banking CCPA site or guidance page for more information.",
                      },
                      {
                        SubItem_Title: "Right to deletion",
                        SubItem_Description:
                          "<br/>If we collected personal information from you, you have the right to request the deletion of this personal information. Effective January 1, 2020, <a href='https://www.transunion.com/consumerprivacy/'>Click Here</a> to exercise your rights with TUI. Please refer to your primary banking CCPA site or guidance page for more information</br>",
                      },
                      {
                        SubItem_Title: "Right to be free from discrimination",
                        SubItem_Description:
                          "<br/>You have the right to be free from discrimination for exercising any of the California consumer privacy rights. If you choose to exercise any of your CCPA rights, we will not:<br/><ul><li>Deny you goods or services;</li><li>Charge you a different price or rate for goods or services, including through granting discounts or other benefits, or imposing penalties;</li><li>Provide you a different level or quality of good or services; or</li><li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Right to opt-out of the sale of personal information",
                        SubItem_Description:
                          "<br/>You have the right, at any time, to direct a business that sells your personal information to third parties to not sell your personal Information. If you would like to exercise this right with TUI, visit our <a href='https://www.transunion.com/optout/'>\"Do not sell my personal information\"</a> page. Please refer to your primary banking CCPA site or guidance page for more information.",
                      },
                      {
                        SubItem_Title:
                          "Right to Opt-In the Sale of Personal Information for Children",
                        SubItem_Description:
                          "<br/>We do not provide a right to opt-in because we do not offer this Product to minors.",
                      },
                      {
                        SubItem_Title: "Right to Know",
                        SubItem_Description:
                          '<br/>You have the right to know the categories of personal information we collect and the purpose for the collection. <br/>You have the right to know the categories of personal information that we collected, sold, and disclosed for a business purpose during the prior 12 months. The charts in Sections 2 and 3 above summarize the categories of personal information that we have generally collected, sold, and disclosed for a business purpose in the preceding twelve months. <br/><br/>Please review the sections titled "Collection and use of your personal information" and "Sharing your personal information" to understand our practices. If you intend to exercise your rights with TUI, <a href=\'https://www.transunion.com/consumerprivacy/\'>Click Here</a>. Please refer to your primary banking CCPA site or guidance page for more information.',
                      },
                    ],
                  },
                  {
                    Title: "Authorized Agent",
                    Description:
                      "<br/>If a consumer is using an authorized agent to submit a CCPA privacy request to know (disclosure report) or delete their personal information, the following is required.",
                    SubItem_List: [
                      {
                        SubItem_Title:
                          "Using an authorized agent without power of attorney to submit a request to know or delete",
                        SubItem_Description:
                          "<br/><ol><li>Signed permission from the consumer authorizing the agent to submit the CCPA privacy request(s) on their behalf. Describe the type of privacy request(s) (know/disclosure report and/or deletion).</li><li>The consumer must verify their own identity directly with the business by submitting information or documentation that provides sufficient proof of identification, such as:<ul><li>a Social Security number or a copy of a social security card issued by the Social Security Administration,</li><li>a certified or official copy of a birth certificate issued by the entity authorized to issue the birth certificate, or</li><li>a copy of a driver's license, an identification card issued by the motor vehicle administration or any other government issued identification.</li></ul></li></ol>",
                      },
                      {
                        SubItem_Title:
                          "Using an authorized agent with power of attorney to submit a request to know or delete",
                        SubItem_Description:
                          "If you have provided the authorized agent with power of attorney pursuant to California Probate Code sections 4000 to 4465, provide only the following: <br/><ul><li> the valid power of attorney executed lawfully under California Probate Code sections 4000 to 4465.</li></ul>",
                      },
                      {
                        SubItem_Title:
                          "Using an authorized agent to submit an opt-out request",
                        SubItem_Description:
                          "<ul><li>written permission, signed by the consumer, authorizing the agent to submit the opt-out request.</li></ul> <br/> Please send your letter and documentation to the following address:  TransUnion Data Privacy Request <br/> P.O. Box 130 <br/> Woodlyn, PA 19094   ",
                      },
                    ],
                  },
                  {
                    Title: "Contact Information",
                    Description:
                      "<br/>If you have questions or concerns regarding this Notice or the protection of your personal information and privacy rights, you may contact us in the following ways:",
                    SubItem_List: [
                      {
                        SubItem_Title: "All Locations",
                        SubItem_Description:
                          "<br/>Phone:        1-866-310-8783 <br/> Postal Mail:  TransUnion Data Privacy Request, P.O. Box 130, Woodlyn, PA 19094",
                      },
                    ],
                  },
                  {
                    Title: "Notice changes and effective date",
                    Description:
                      "<br/>We may periodically make changes to this Notice and recommend that you check back to review this Notice so that you always know how we collect, use, and share your personal information. TUI reserves the right to change this Notice at any time without prior notice. We will inform you of changes to the Notice on the website. The effective date denotes the date that we publish this Notice to our online services. Use of the Product following any change constitutes your acceptance of the Notice then in effect. We encourage you to check the website periodically for updates to our Notice.",
                  },
                ],
              },
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BoltCard_en-US_Dashboard",
        type: "DCR",
        name: "BoltCard_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BoltCard/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_SimulateHeader: "Simulate Your Score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#364E61",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "CompassCard_en-US_Dashboard",
        type: "DCR",
        name: "CompassCard_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/CompassCard/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_SimulateHeader: "Simulate Your Score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#364E61",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "RevviCard_en-US_Dashboard",
        type: "DCR",
        name: "RevviCard_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/RevviCard/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_SimulateHeader: "Simulate Your Score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#364E61",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TotalCard_en-US_Dashboard",
        type: "DCR",
        name: "TotalCard_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TotalCard/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_SimulateHeader: "Simulate Your Score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#364E61",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TotalSelectCard_en-US_Dashboard",
        type: "DCR",
        name: "TotalSelectCard_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TotalSelectCard/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_SimulateHeader: "Simulate Your Score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Link: "Explore Simulator",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#364E61",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TotalCard_en-US_FAQ",
        type: "DCR",
        name: "Total_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TotalCard/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18556813196'>+1 (855) 681-3196</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "RevviCard_en-US_FAQ",
        type: "DCR",
        name: "RevviCard_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/RevviCard/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18556813196'>+1 (855) 681-3196</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TotalSelectCard_en-US_FAQ",
        type: "DCR",
        name: "TotalSelectCard_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TotalSelectCard/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18556813196'>+1 (855) 681-3196</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TU1_en-US_FAQ",
        type: "DCR",
        name: "TU1_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TU1/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18445419928'>+1 (844) 541-9928</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUCI1_en-US_FAQ",
        type: "DCR",
        name: "TUCI1_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUCI1/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18447874607'>+1 (844) 787-4607</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TU1_en-US_SSOTerms",
        type: "DCR",
        name: "TU1_en-US_SSOTerms",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TU1/SSOTerms/data/en-US/SSOTerms",
          dcrContent: {
            Content: {
              SSOTerms_Title: "It's your credit information. See it for FREE.",
              SSOTerms_Content_Email:
                "To enroll, please confirm your email address below, then review and accept the terms.",
              SSOTerms_Content:
                "Your acceptance is required to access Mission: Credit Confidence",
              SSOTerms_Content1: "",
              SSOTerms_Content2:
                "You understand that by clicking on the 'I Accept and Continue' button below, you agree to TransUnion Consumer Interactive's <a href='/cvd/#/legal?tab=Terms-and-Conditions'>Terms and Conditions</a> and you are providing 'Written Instructions' authorizing TransUnion Interactive, Inc. to update information from your personal credit profile from TransUnion in order to confirm your identity and display your credit data to you.<br/>",
              SSOTerms_Content3:
                "<strong>Almost there!</strong><br/> After you verify your identity, you will receive your credit score & trending. Plus: Score Simulator & Credit Education.<br/>",
              SSO_Welcome_Image: "",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_CreditReport",
        type: "DCR",
        name: "BMOUS_en-US_CreditReport",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BMOUS/CreditReport/data/en-US/CreditReport",
          dcrContent: {
            Content: {
              CreditReport_Reminder_Image: "Credit_Account_Usage_V1.svg",
              CreditReport_Overview_Message:
                "Having a low debt balance relative to your available credit signals to lenders that you're more likely to make your payments on time.",
              CreditReport_PersonalInfo_Message:
                "If your personal information is incorrect or misspelled, you may have to make your updates over the phone. Unfortunately, some information can't be changed online.",
              CreditReport_AccountDetails_Below30Message:
                "Keeping your credit usage below 30% will keep you in good standing with lenders and may improve your credit score.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_SSOTerms",
        type: "DCR",
        name: "BMOUS_en-US_SSOTerms",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BMOUS/SSOTerms/data/en-US/SSOTerms",
          dcrContent: {
            Content: {
              SSOTerms_Content2:
                "You understand that by clicking on the 'I Accept and Continue' button below, you agree to TransUnion Consumer Interactive's <a href='/cvd/#/legal?tab=Terms-and-Conditions'>Terms and Conditions</a> and you are providing 'Written Instructions' authorizing TransUnion Interactive, Inc. to update information from your personal credit profile from TransUnion in order to confirm your identity and display your credit data to you.<br/>",
              SSOTerms_Content2_1:
                "<b>Before we get started, please take a moment to read and accept the following:</b>",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_Enroll2",
        type: "DCR",
        name: "BMOUS_en-US_Enroll2",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BMOUS/Enroll2/data/en-US/Enroll2",
          dcrContent: {
            Content: {
              Enroll2_ImageCaption:
                "A great credit score means more opportunities at your fingertips.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_Enroll3",
        type: "DCR",
        name: "BMOUS_en-US_Enroll3",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BMOUS/Enroll3/data/en-US/Enroll3",
          dcrContent: {
            Content: {
              Enroll3_OTPParaOne:
                "How would you like to receive your verification code? We'll use the phone number you entered in Step 1.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_MissingInfoStep1",
        type: "DCR",
        name: "BMOUS_en-US_MissingInfoStep1",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/BMOUS/MissingInfoStep1/data/en-US/MissingInfoStep1",
          dcrContent: {
            Content: {
              MissingInfoStep1_ImageText:
                "A great credit score means more <br/>opportunities at your fingertips.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_MissingInfoStep2",
        type: "DCR",
        name: "BMOUS_en-US_MissingInfoStep2",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/BMOUS/MissingInfoStep2/data/en-US/MissingInfoStep2",
          dcrContent: {
            Content: {
              MissingInfoStep2_OTPParaOne:
                "How would you like to receive the verification code? We'll use the phone number you entered in Step 1.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_Login",
        type: "DCR",
        name: "BMOUS_en-US_Login",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BMOUS/Login/data/en-US/Login",
          dcrContent: {
            Content: {
              Login_Head: "Login",
              Login_Username: "Username",
              Login_Password: "Password",
              Login_Forgot: "Forgot Username or Password?",
              Login_Continue: "Login",
              Login_NoAccount: "Don't have an account?",
              Login_Signup: "Sign Up",
              Login_timeoutText1: "You've been inactive for a while.",
              Login_timeoutText2:
                "For your security, we'll automatically sign you out in approximately <b>one</b> minute.",
              Login_timeoutText4:
                "You may choose 'Stay signed in' to continue or sign out if you're done.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_Compass",
        type: "DCR",
        name: "BMOUS_en-US_Compass",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BMOUS/Compass/data/en-US/Compass",
          dcrContent: {
            Content: {
              Compass_SimulatorBannerContent:
                "Now that you know what to do, test out your recommendations with our Score Simulator!",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Synchrony_en-US_Dashboard",
        type: "DCR",
        name: "Synchrony_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Synchrony/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_SimulateHeader: "Simulate Your Score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.jpg",
              Dashboard_Map_Color_code: "#00a6ca",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Synchrony_en-US_InitialModal",
        type: "DCR",
        name: "Synchrony_en-US_InitialModal",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Synchrony/InitialModal/data/en-US/InitialModal",
          dcrContent: {
            Content: {
              InitialModal_Title: "Welcome to your new CreditView Dashboard.",
              InitialModal_Body:
                "We've updated our experience to make it easier for you to find information, use our tools and monitor your credit health.",
              InitialModal_Bullets: "",
              InitialModal_Button: "View New Dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Synchrony_en-US_FAQ",
        type: "DCR",
        name: "Synchrony_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Synchrony/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18663173880'>+1 (866) 317-3880</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Pocket360_en-US_Dashboard",
        type: "DCR",
        name: "Pocket360_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Pocket360/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_SimulateHeader: "Simulate Your Score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#00a6ca",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Pocket360_en-US_FAQ",
        type: "DCR",
        name: "Pocket360_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Pocket360/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18339652299'>1-833-965-2299</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "HomeFreeUSA_en-US_Dashboard",
        type: "DCR",
        name: "HomeFreeUSA_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/HomeFreeUSA/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_SimulateHeader: "Simulate Your Score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#00a6ca",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "HomeFreeUSA_en-US_FAQ",
        type: "DCR",
        name: "HomeFreeUSA_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/HomeFreeUSA/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18555092815'>+1 (855) 509-2815</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Dashlane_en-US_Dashboard",
        type: "DCR",
        name: "Dashlane_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Dashlane/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_SimulateHeader: "Simulate Your Score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#00a6ca",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "Dashlane_en-US_FAQ",
        type: "DCR",
        name: "Dashlane_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/Dashlane/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18002173029'>+1 (800) 217-3029</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUADM_en-US_Dashboard",
        type: "DCR",
        name: "TUADM_en-US_Dashboard",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUADM/Dashboard/data/en-US/Dashboard",
          dcrContent: {
            Content: {
              Dashboard_BlogWidget_Title: "From Our Blog",
              Dashboard_SimulateHeader: "Simulate your score",
              Dashboard_SimulateText:
                "Discover how different financial decisions can affect your credit score.",
              Dashboard_Simulate_Link: "Get Started",
              Dashboard_Simulate_Image: "Dashboard_Simulator_Card.svg",
              Dashboard_Map_Color_code: "#00a6ca",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUADM_en-US_FAQ",
        type: "DCR",
        name: "TUADM_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUADM/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18447874607'>+1 (844) 787-4607</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "TUADM_en-US_Login",
        type: "DCR",
        name: "TUADM_en-US_Login",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/TUADM/Login/data/en-US/Login",
          dcrContent: {
            Content: {
              Login_Head: "Login",
              Login_Username: "Username",
              Login_Password: "Password",
              Login_Forgot: "Forgot Username or Password?",
              Login_Continue: "Login",
              Accept_Continue: "Accept & Continue",
              Login_NoAccount: "Click here to ",
              Login_Signup: "Sign Up",
              Login_timeoutText1: "You've been inactive for a while.",
              Login_timeoutText2:
                "For your security, we'll automatically sign you out in approximately <b>1</b> minute.",
              Login_timeoutText4:
                "You may choose 'Stay signed in' to continue or sign out if you're done.",
              Login_info1:
                "By logging in you are certifying that you are over the age of eighteen (18) years and eligible to subscribe in Active Duty Credit Monitoring. Active Duty Credit Monitoring is available to any consumer who is on full-time duty in military service of the United States, which includes full-time training duty; annual training duty; full-time National Guard duty; and attendance, while in the active military service, at a school designated as a service school by law or by the Secretary of the military department concerned ('Active Duty Status').",
              Login_info2:
                "To create an account, enroll or use Active Duty Credit Monitoring, you certify that you are 'Active Duty Status' as defined above. Your certification of Active Duty Status is valid for two years. TransUnion reserves the right to require you to re-certify or otherwise provide proof of Active Duty Status after the expiration of this two-year period for your continued use of Active Duty Credit Monitoring.",
              Enrollment_info1:
                "Please certify that you are active duty military.",
              Enrollment_info2:
                "By clicking the 'Accept & Continue' button, I certify that  I represent that I am over the age of eighteen (18) years and eligible to enroll in Active Duty Credit Monitoring. Active Duty Credit Monitoring is available to any consumer who is on full-time duty in military service of the United States, which includes full-time training duty; annual training duty; full-time National Guard duty; and attendance, while in the active military service, at a school designated as a service school by law or by the Secretary of the military department concerned ('Active Duty Status'). To create an account, enroll, or use Active Duty Credit Monitoring, you certify that you are 'Active Duty Status' as defined above. Your certification of Active Duty Status is valid for two years. TransUnion reserves the right to require you to re-certify or otherwise provide proof of Active Duty Status after the expiration of this two-year period for your continued use of Active Duty Credit Monitoring.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "BMOUS_en-US_FAQ",
        type: "DCR",
        name: "BMOUS_en-US_FAQ",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/BMOUS/FAQ/data/en-US/FAQ",
          dcrContent: {
            Content: {
              FAQ_Title: "FAQ",
              FAQ_Section: [
                {
                  Section_Title: "Credit Basics",
                  Item: [
                    {
                      Title:
                        "What is the Mission: Credit Confidence Dashboard?",
                      Content:
                        "Mission: Credit Confidence Dashboard provides you access to a dashboard that highlights your key credit information, such as your TransUnion credit score, score trending and national score comparison.",
                    },
                    {
                      Title: "What is the Score Simulator?",
                      Content:
                        "The simulator shows you how your credit score could increase or decrease based on changes to your credit behavior. You can use this interactive tool to help predict the possible impact of various actions or events on your credit score.",
                    },
                    {
                      Title:
                        "How often can I view my Mission: Credit Confidence Dashboard?",
                      Content:
                        "If you have a current subscription, it can be viewed online anytime.",
                    },
                    {
                      Title: "How often is my score updated?",
                      Content:
                        'Please note the "Next update available" date on the Mission: Credit Confidence Dashboard. This date will show you the next time your credit information will be updated.',
                    },
                    {
                      Title: "Where does the score come from?",
                      Content:
                        "Your TransUnion credit score is generated by a mathematical formula using the data from your TransUnion credit report. Information used may include your bill pay history, amount of available credit, number and age of open accounts, and recent credit activity.",
                    },
                    {
                      Title:
                        "Does using Mission: Credit Confidence Dashboard impact my credit score?",
                      Content: "No, it will not impact your credit score.",
                    },
                    {
                      Title:
                        "How can I obtain a full copy of my credit report?",
                      Content:
                        'You can receive a free credit report once every 12 months from each of the three nationwide reporting agencies at <a href="https://www.annualcreditreport.com/index.action" target="_blank" rel="noreferrer">Annual Credit Report.com</a>.',
                    },
                    {
                      Title:
                        "How do I cancel Mission: Credit Confidence Dashboard?",
                      Content:
                        '<a href="/cvd/#/my-profile?tab=Password-Settings">Click here</a> to cancel your Mission: Credit Confidence Dashboard service.',
                    },
                  ],
                },
                {
                  Section_Title: "Logging In",
                  Item: [
                    {
                      Title: "What if I forgot my password or username?",
                      Content:
                        'On the Member Login page, use our "I forgot my username and password" link. This automatic login process that is easy and secure. The process provides assistance to help you log in when you have forgotten your username and password. To ensure the security of your account, you will be asked to enter components of your account information as a method of identification. Once we validate that the information entered is accurate, you will be provided access to your account. When the process is complete, a privacy protection email will be sent to you.',
                    },
                    {
                      Title: "How do I change my login information?",
                      Content:
                        'After you have logged in, click the link to your Profile at the top of the screen, then select the "My Settings" tab.',
                    },
                    {
                      Title: "How do I choose a good username and password?",
                      Content:
                        "When selecting a username, you should pick something you can remember. However, you should also choose something unique. TransUnion Interactive suggests using your email address.<br/><br/>Your password should be at least 8 characters in length using numbers and letters; remember it is also case sensitive.",
                    },
                    {
                      Title: "What is a secret question and secret answer?",
                      Content:
                        'Your secret answer is your personal response to a secret question you choose from a list we provide. They will help you log in if you forget your username and password. For example, if you choose the question: "What city were you born in?", then your secret answer could be "Los Angeles." Make sure the answer is true and specific enough so it will help you reset your login.',
                    },
                  ],
                },
                {
                  Section_Title: "ID Verification",
                  Item: [
                    {
                      Title: "What is Identity Verification?",
                      Content:
                        "The Identity Verification process is an essential part of the TransUnion Interactive website because it protects your privacy by ensuring that your credit report can only be viewed by YOU.<br/><br/>Identity Verification confirms your identity through a series of questions based on accounts and personal information contained in your credit report. Here's how it works:<br/><br/><ul><li>The system presents you with a question based upon information contained in your credit report.</li><li>You select the answer from a list of possible choices and click NEXT to continue.</li><li>As you submit your answers, that information is compared with the information in your credit report. </li><li>You will answer as many questions as necessary to successfully confirm your identity.</li><li>When enough correct information about you has been confirmed, you will have access to your online credit report. </li><li>If you need to leave the site to look up some information, you can safely log off and come back later to continue your identity verification. You have three days from when you began the Identity Verification process.</li><li>If your identity cannot be confirmed online, you will be given instructions on how to continue.</li></ul>",
                    },
                    {
                      Title:
                        "Is the Identity Verification process really necessary?",
                      Content:
                        "The protection of your security and privacy are of utmost importance to us. Identity Verification is a powerful fraud protection tool because it asks questions that can only be answered by the person who is the subject of the credit report – without it, an unauthorized party could obtain your most private credit information.",
                    },
                    {
                      Title:
                        "I'm selecting the correct answer(s). Why won't Identity Verification confirm my identity?",
                      Content:
                        "Identity Verification uses specific information contained in your credit report, and sometimes this information has not been recently updated or the information is inaccurate. For example, you may have recently paid off a loan that has not yet been reported to the credit reporting agency. If you are unable to pass the Identity Verification step, please follow the instructions provided online.",
                    },
                    {
                      Title:
                        "What if Identity Verification asks for outdated information that I no longer have?",
                      Content:
                        "The system may ask for information about accounts that you may have closed within the past three years. It may be necessary to review our files or contact your previous creditors to request the information. If the system cannot verify your identity, feel free to contact the Customer Service Team – they will do their best to help confirm your identity. See the error page or email with their contact information.",
                    },
                    {
                      Title:
                        "What if I've tried everything, and Identity Verification still cannot confirm my identity?",
                      Content:
                        "Please contact the customer service team. See the error page or email with their contact information. Sometimes they are able to view additional details in the data that the online Identity Verification system cannot.<br/><br> A Customer Service Team member will attempt to confirm your identity by asking you questions about your credit history. Once your identity has been confirmed, the representative will immediately make your credit report available for you to view online.",
                    },
                  ],
                },
                {
                  Section_Title: "Account Information",
                  Item: [
                    {
                      Title:
                        "How do I update my mailing address or email address?",
                      Content:
                        'The "My Information" tab under My Profile allows you to easily update your street address and email address. To get there, click the link to My Profile at the top of the screen, then select the "My Information" tab.',
                    },
                    {
                      Title:
                        "Why would I need to change my mailing address or email address?",
                      Content:
                        "If you move or change your email address, you should update your information. Having your current information in the system allows TransUnion Interactive to contact you, if necessary, regarding your Mission: Credit Confidence Dashboard subscription.",
                    },
                    {
                      Title:
                        "Do you sell my information to companies who send me junk mail?",
                      Content:
                        "No. TransUnion Interactive does not sell your personal information to any third party for any reason.",
                    },
                  ],
                },
                {
                  Section_Title: "General Support Services",
                  Item: [
                    {
                      Title: "What if I need help or have a question?",
                      Content:
                        "If you have questions about your credit benefits, need help accessing your report or passing identity verification, please contact our Customer Service Team at <a href='tel://+18559465755'>1-855-946-5755</a>.",
                    },
                  ],
                },
              ],
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_Sidebar",
        type: "DCR",
        name: "AMEX_en-US_Sidebar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Sidebar/data/en-US/Sidebar",
          dcrContent: {
            Content: {
              Sidebar_Dashboard: "Home",
              Sidebar_Dashboard_URL: "/dashboard",
              Sidebar_CreditReport: "Credit Report",
              Sidebar_CreditReport_URL: "/credit-report",
              Sidebar_Tools: "Tools",
              Sidebar_CreditCompass: "CreditCompass\u2122",
              Sidebar_CreditCompass_URL: "/credit-compass",
              Sidebar_ScoreSimulator: "Score Simulator",
              Sidebar_ScoreSimulator_URL: "/simulator",
              Sidebar_ScoreSimulator_Tooltip_Title: "Score Simulator",
              Sidebar_ScoreSimulator_Tooltip:
                "The VantageScore<sup>®</sup>  3.0 Simulator estimates how your score may change by varying one or more key variables. Your current score is displayed so that you can compare your actual score to your simulated score. The Simulator does not guarantee that your actual score will reach the simulated score range, nor does it guarantee that you will be approved or rejected for credit by any financial institution; it just provides an approximate indication of your credit-worthiness. Change any or all of these variables to calculate an estimated change to your score.",
              Sidebar_Education: "Credit Education",
              Sidebar_ScoreFactors: "Score Factors",
              Sidebar_ScoreFactors_URL: "/score-factors",
              Sidebar_Articles: "Articles",
              Sidebar_Articles_URL: "/articles",
              Sidebar_Blog: "Credit Intel Blog",
              Sidebar_Blog_URL: "/blog",
              Sidebar_FAQ: "FAQ",
              Sidebar_FAQ_URL: "/FAQ",
              Sidebar_Signup: "Sign Up",
              Sidebar_Signup_URL: "/enroll-step-1",
              Sidebar_Login: "Login",
              Sidebar_Login_URL: "/login",
              Sidebar_Support: "Support",
              Sidebar_Privacy: "Privacy",
              Sidebar_Privacy_URL:
                "https://www.americanexpress.com/us/content/legal-disclosures/privacy-center.html",
              Sidebar_Terms: "Terms of Use",
              Sidebar_Terms_URL: "/legal?tab=Terms-and-Conditions",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_Toolbar",
        type: "DCR",
        name: "AMEX_en-US_Toolbar",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Toolbar/data/en-US/Toolbar",
          dcrContent: {
            Content: {
              Toolbar_Alerts: "Alerts",
              Toolbar_Alerts_URL: "/alerts",
              Toolbar_Profile: "My Profile",
              Toolbar_Info: "My Information",
              Toolbar_Info_URL: "/my-profile?tab=My-Information",
              Toolbar_Account: "User Settings",
              Toolbar_Account_URL: "/my-profile?tab=User-Settings",
              Toolbar_Email: "Email Preference",
              Toolbar_Email_URL: "/my-profile?tab=Email-Preference",
              Toolbar_Password: "Password Settings",
              Toolbar_Password_URL: "/my-profile?tab=Password-Settings",
              Toolbar_Cancel: "Manage Account",
              Toolbar_Cancel_URL: "/my-profile?tab=Manage-Account",
              Toolbar_Logout: "Logout",
              Toolbar_Logout_URL: "/logout",
              Toolbar_Support: "Support",
              Toolbar_FAQ: "FAQs",
              Toolbar_FAQ_URL: "/FAQ",
              Toolbar_Legal: "Legal Information",
              Toolbar_Legal_URL: "/legal",
              Toolbar_Login: "Login",
              Toolbar_Login_URL: "/login",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_Footer",
        type: "DCR",
        name: "AMEX_en-US_Footer",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Footer/data/en-US/Footer",
          dcrContent: {
            Content: {
              Footer_FAQTitle: "FAQs",
              Footer_FAQTitle_URL:
                "https://www.americanexpress.com/us/credit-cards/features-benefits/free-credit-score/faq.html",
              Footer_PrivacyTitle: "Privacy Policy",
              Footer_PrivacyTitle_URL:
                "https://www.americanexpress.com/us/content/legal-disclosures/privacy-center.html",
              Footer_TermsTitle: "Terms and Conditions",
              Footer_TermsTitle_URL:
                "https://www.americanexpress.com/us/credit-cards/features-benefits/free-credit-score/terms-and-conditions.html",
              Footer_Legal:
                "This site is hosted and operated by TransUnion Interactive, Inc., a wholly owned subsidiary of TransUnion, LLC.",
              Footer_Copyright: "TransUnion Interactive. All Rights Reserved.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_MissingInfoStep1",
        type: "DCR",
        name: "AMEX_en-US_MissingInfoStep1",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/AMEX/MissingInfoStep1/data/en-US/MissingInfoStep1",
          dcrContent: {
            Content: {
              MissingInfoStep1_Title: "Step 1",
              MissingInfoStep1_Text: "Create Your Account",
              MissingInfoStep1_Label:
                "We need few more pieces of information in order to create your account.",
              MissingInfoStep1_DateOfBirth: "Date of Birth (MM / DD / YYYY)",
              MissingInfoStep1_ZipCode: "Zip Code",
              MissingInfoStep1_State: "State",
              MissingInfoStep1_City: "City",
              MissingInfoStep1_Address: "Address",
              MissingInfoStep1_PreviousResidence: "Previous Residence",
              MissingInfoStep1_PreviousZipCode: "Zip Code",
              MissingInfoStep1_PreviousCity: "City",
              MissingInfoStep1_PreviousAddress: "Address",
              MissingInfoStep1_Legal:
                "Please carefully review the following before clicking \"Continue\":<ul><li>You are providing written instructions under the Fair Credit Reporting Act and other applicable laws, including similar state laws, for TransUnion or any other consumer reporting agency to release your credit report information to American Express upon American Express' request at any time as long as you are enrolled in American Express MyCredit Guide™. For purposes of this authorization, \"American Express\" means American Express National Bank and its service providers. You agree that American Express will use your credit report information and personal information to verify your identity and provide MyCredit Guide to you, to market its products and services to you, for analytical purposes and for other purposes permitted by applicable law. For more information about how American Express protects your privacy, please visit <a href='https://www.americanexpress.com/us/privacy-center/' target='_blank'> American Express Privacy Center. </a></li><li>American Express Privacy Notice<ul><li><U> Not an Existing American Express Personal or Small Business Charge or Credit Card Customer:</U> You have received a copy of the <a href='https://www.americanexpress.com/content/dam/amex/us/company/Privacy/MyCredit-Guide_5.2021.pdf' target='_blank'>American Express Privacy Notice</a> and, if you so choose, you will retrieve any future copies of the American Express Privacy Notice electronically on the <a href='https://www.americanexpress.com/us/privacy-center/' target='_blank'> American Express Privacy Center. </a></li><li><u>Existing American Express Personal or Small Business Charge or Credit Card Customer:</u> The <a href='https://www.americanexpress.com/content/dam/amex/us/company/Privacy/MyCredit-Guide_5.2021.pdf' target='_blank'>American Express Privacy Notice</a> you received for your American Express account will govern.</li></ul></li><li>You agree to the applicable <a href='https://www.americanexpress.com/us/credit-cards/features-benefits/free-credit-score/terms-and-conditions.html' target='_blank'>Terms and Conditions</a> for MyCredit Guide as they may be amended from time to time. <strong>The MyCredit Guide Terms and Conditions include an arbitration provision, which restricts your opportunity to have claims related to MyCredit Guide heard in court or resolved by a jury, and to participate in a class action or similar proceeding.</strong></li></ul>",
              MissingInfoStep1_ImageText:
                "Imagine what awaits beyond your credit score.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_UnsubscribeEmail",
        type: "DCR",
        name: "AMEX_en-US_UnsubscribeEmail",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/AMEX/UnsubscribeEmail/data/en-US/UnsubscribeEmail",
          dcrContent: {
            Content: {
              Unsubscribe_Email_Preference: "Email Preference",
              Unsubscribe_SaveAll: "Save All",
              Unsubscribe_Cancel: "Cancel",
              Unsubscribe_GoBack: "Go Back",
              Unsubscribe_Alerts_Communication: "Alerts communication is ",
              Unsubscribe_Marketing_Communication:
                "Marketing communication is ",
              Unsubscribe_All_Communication:
                "Unsubscribe from all email sent to",
              Unsubscribe_Email_Preference_Text:
                "Choose the types of emails you want to receive from us.",
              Unsubscribe_Marketing_communication_Text:
                "Receive emails regarding offers and surveys.",
              Unsubscribe_Alerts_communication_Text:
                "Receive email alerts regarding changes to my credit report and scores, and the dark web.",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_SSOTerms",
        type: "DCR",
        name: "AMEX_en-US_SSOTerms",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/SSOTerms/data/en-US/SSOTerms",
          dcrContent: {
            Content: {
              SSOTerms_Title: "It's your credit information. See it for FREE.",
              SSOTerms_Content_Email: "",
              SSOTerms_Content:
                "Your acceptance is required to access Mission: Credit Confidence",
              SSOTerms_Content1: "",
              SSOTerms_Content2_1: "",
              SSOTerms_Content2:
                "Please carefully review the following before clicking \"Continue\":<ul><li>You are providing written instructions under the Fair Credit Reporting Act and other applicable laws, including similar state laws, for TransUnion or any other consumer reporting agency to release your credit report information to American Express upon American Express' request at any time as long as you are enrolled in American Express MyCredit Guide™. For purposes of this authorization, \"American Express\" means American Express National Bank and its service providers. You agree that American Express will use your credit report information and personal information to verify your identity and provide MyCredit Guide to you, to market its products and services to you, for analytical purposes and for other purposes permitted by applicable law. For more information about how American Express protects your privacy, please visit <a href='https://www.americanexpress.com/us/privacy-center/' target='_blank'> American Express Privacy Center. </a></li><li>American Express Privacy Notice<ul><li><U> Not an Existing American Express Personal or Small Business Charge or Credit Card Customer:</U> You have received a copy of the <a href='https://www.americanexpress.com/content/dam/amex/us/company/Privacy/MyCredit-Guide_5.2021.pdf' target='_blank'>American Express Privacy Notice</a> and, if you so choose, you will retrieve any future copies of the American Express Privacy Notice electronically on the <a href='https://www.americanexpress.com/us/privacy-center/' target='_blank'> American Express Privacy Center. </a></li><li><u>Existing American Express Personal or Small Business Charge or Credit Card Customer:</u> The <a href='https://www.americanexpress.com/content/dam/amex/us/company/Privacy/MyCredit-Guide_5.2021.pdf' target='_blank'>American Express Privacy Notice</a> you received for your American Express account will govern.</li></ul></li><li>You agree to the applicable <a href='https://www.americanexpress.com/us/credit-cards/features-benefits/free-credit-score/terms-and-conditions.html' target='_blank'>Terms and Conditions</a> for MyCredit Guide as they may be amended from time to time. <strong>The MyCredit Guide Terms and Conditions include an arbitration provision, which restricts your opportunity to have claims related to MyCredit Guide heard in court or resolved by a jury, and to participate in a class action or similar proceeding.</strong></li></ul>",
              SSOTerms_Content3:
                "<strong>Almost there!</strong><br/> After you verify your identity, you will receive your credit score & trending. Plus: Score Simulator & Credit Education.<br/>",
              SSO_Welcome_Image: "",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_Enroll2",
        type: "DCR",
        name: "AMEX_en-US_Enroll2",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Enroll2/data/en-US/Enroll2",
          dcrContent: {
            Content: {
              Enroll2_Legal:
                'By clicking on the "Continue" button below, I acknowledge that I have read the <a target="_blank" href="https://www.americanexpress.com/us/credit-cards/features-benefits/free-credit-score/terms-and-conditions.html">Terms of Service</a> and <a target="_blank" href="https://www.americanexpress.com/us/privacy-center/">Privacy Policy</a>, and that I agree to their terms, I understand that the Terms of Service contain an <a href="">Arbitration Clause</a>.',
            },
          },
        },
      },
      {
        id: "AMEX_en-US_Alerts",
        type: "DCR",
        name: "AMEX_en-US_Alerts",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Alerts/data/en-US/Alerts",
          dcrContent: {
            Content: {
              Alerts_Tooltip_Title: "Types of alerts",
              Alerts_Tooltip:
                "We keep track of two types of alerts, Credit and Protection, on this page. <br> <br> Credit alerts let you know about changes that could affect your credit report or score. <br> <br> Protection alerts inform you if your information was leaked or stolen.",
              Alerts_NoneTitle: "No credit alerts!",
              Alerts_NoneBody:
                "Check back here for more information on any changes to your credit report.",
              Alerts_NoDarkWebTitle: "No protection alerts!",
              Alerts_NoDarkWebBody:
                "We'll keep monitoring for any breaches, but keep following these tips to help keep your data secure.",
            },
          },
        },
      },
      {
        id: "AMEX_en-US_StaticHeaderBanner",
        type: "DCR",
        name: "AMEX_en-US_StaticHeaderBanner",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/AMEX/StaticHeaderBanner/data/en-US/StaticHeaderBanner",
          dcrContent: {
            Content: {
              StaticHeaderBanner_Title: "American Express® Savings",
              StaticHeaderBanner_Content:
                "Meet your savings goals faster with American Express Savings Account. Enjoy no monthly fees or minimum opening deposit with 24/7 customer support. FDIC Insured. Terms Apply.",
              StaticHeaderBanner_ContentPadding: "26px",
              StaticHeaderBanner_Image: "StartSavings.svg",
              StaticHeaderBanner_ImageTitle: "",
              StaticHeaderBanner_ImageHeight: "",
              StaticHeaderBanner_ImagePadding: "",
              StaticHeaderBanner_CtaText: "Start Saving",
              StaticHeaderBanner_CtaAction:
                "https://www.americanexpress.com/en-us/banking/online-savings/account/",
              StaticHeaderBanner_SecondaryCtaText: "Close",
              StaticHeaderBanner_secondaryCtaAction: "Close",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },
      {
        id: "AMEX_en-US_InitialModal",
        type: "DCR",
        name: "AMEX_en-US_InitialModal",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/InitialModal/data/en-US/InitialModal",
          dcrContent: {
            Content: {
              InitialModal_Title:
                "Welcome to your new MyCredit Guide Dashboard.",
              InitialModal_Body:
                "We've updated our experience to make it easier for you to find information, use our tools and monitor your credit health.",
              InitialModal_Bullets:
                "<li>Monitor your credit score weekly</li><li>View your full credit report from TransUnion</li><li>Set a credit score goal with CreditCompass</li><li> Get notified when we see changes in your score, new credit inquiries, new accounts and more </li>",
              InitialModal_Button: "View New Dashboard",
            },
          },
        },
        exposed: true,
        replicatable: false,
      },

      {
        id: "AMEX_en-US_Blog",
        type: "DCR",
        name: "AMEX_en-US_Blog",
        dcr: {
          category: "Content",
          type: "Site",
          value: "templatedata/AMEX/Blog/data/en-US/Blog",
          dcrContent: {
            Content: {
              Blog_Title: "Your Guide For All Things Credit and Protection",
              Blog_Description:
                "Find the latest pieces on credit health and wealth protection here.",
              Blog_FeaturedArticles_Title: "Featured articles",
              Blog_MoreArticles_Title: "More articles",
              Blog_MinRead: "min read",
              Blog_Pagination_Label: "Articles per page:",
              Blog_Post_BlogLink: "Credit Guide Blog",
              Blog_Post_CTAText: "Did you find this article helpful?",
              Blog_Post_CTAAction_Yes: "Yes",
              Blog_Post_CTAAction_No: "No",
              Blog_Post_MinRead: "Min Read",
              Blog_Post_CTA_ThankYou: "Thank you for the feedback!",
            },
          },
        },
      },
      {
        id: "AMEX_en-US_AdditionalToolsAndResources",
        type: "DCR",
        name: "AMEX_en-US_AdditionalToolsAndResources",
        dcr: {
          category: "Content",
          type: "Site",
          value:
            "templatedata/AMEX/AdditionalToolsAndResources/data/en-US/AdditionalToolsAndResources",
          dcrContent: {
            Content: {
              AdditionalToolsAndResources_Heading:
                "Additional Tools & Resources",
              AdditionalToolsAndResources_ScoreSimulator_Title:
                "Simulate your credit score",
              AdditionalToolsAndResources_ScoreSimulator_Content:
                "See how specific credit choices may affect your credit score.",
              AdditionalToolsAndResources_ScoreSimulator_Img:
                "AdditionalTools_Simulator.svg",
              AdditionalToolsAndResources_CreditReport_Title:
                "TransUnion credit report",
              AdditionalToolsAndResources_CreditReport_Content:
                "Get a clear view of your newly designed Transunion Credit Report.",
              AdditionalToolsAndResources_CreditReport_Img:
                "AdditionalTools_CreditReport.svg",
              AdditionalToolsAndResources_CreditCompass_Title:
                "Set a score goal today",
              AdditionalToolsAndResources_CreditCompass_Content:
                "With a higher score you could get access to better credit offers and even increase your approval odds.",
              AdditionalToolsAndResources_CreditCompass_Img:
                "AdditionalTools_CreditCompass.svg",
              AdditionalToolsAndResources_Alerts_Title: "See your alerts",
              AdditionalToolsAndResources_Alerts_Content:
                "Check in on activity and changes on your credit report.",
              AdditionalToolsAndResources_Alerts_Img:
                "AdditionalTools_Alerts.svg",
              AdditionalToolsAndResources_Blog_Title: "Get smart on credit",
              AdditionalToolsAndResources_Blog_Content:
                "Visit the credit education blog to learn more about credit, scores and how to reach your financial goals.",
              AdditionalToolsAndResources_Blog_Img: "AdditionalTools_Blog.svg",
            },
          },
        },
      },
    ],
  };
})();
