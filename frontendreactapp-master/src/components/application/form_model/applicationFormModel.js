export default {
  formId: "applicationForm",
  formField: {
    wam: {
      name: "wam",
      label: "Weighted Average Mark*",
      requiredErrorMsg: "Weighted Average Mark is required",
      invalidErrorMsg:
        "Weighted Average Mark is not valid (enter a number between 0 and 100)",
    },
    studentId: {
      name: "studentId",
      label: "StudentAPI ID*",
      requiredErrorMsg: "StudentAPI ID is required",
      invalidErrorMsg: "StudentAPI ID is not valid (e.g. 12345678)",
    },
    givenName: {
      name: "givenName",
      label: "Given name*",
      requiredErrorMsg: "First name is required",
    },
    familyName: {
      name: "familyName",
      label: "Family name",
    },
    preferredName: {
      name: "preferredName",
      label: "Preferred name",
    },
    mobileNumber: {
      name: "mobileNumber",
      label: "Mobile Number*",
      requiredErrorMsg: "Mobile Number required",
      invalidErrorMsg: "Mobile Number is not valid (e.g. 0400 000 000)",
    },
    courseTitle: {
      name: "courseTitle",
      label: "Course Title*",
      requiredErrorMsg: "Course Title is required",
    },
  },
};
