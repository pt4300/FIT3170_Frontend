import applicationFormModel from "./applicationFormModel";
const {
  formField: {
    wam,
    studentId,
    givenName,
    familyName,
    preferredName,
    mobileNumber,
    courseTitle,
  },
} = applicationFormModel;

export default {
  [wam.name]: "",
  [studentId.name]: "",
  [givenName.name]: "",
  [familyName.name]: "",
  [preferredName.name]: "",
  [mobileNumber.name]: "",
  [courseTitle.name]: "",
};
