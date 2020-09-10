import * as Yup from "yup";
import moment from "moment";
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

export default [
  Yup.object().shape({
    [studentId.name]: Yup.string()
      .required(`${studentId.requiredErrorMsg}`)
      .matches(/^\d{8}$/, `${studentId.invalidErrorMsg}`),
    [wam.name]: Yup.number()
      .required(`${wam.requiredErrorMsg}`)
      .min(0, `${wam.invalidErrorMsg}`)
      .max(100, `${wam.invalidErrorMsg}`),
  }),
  Yup.object().shape({
    [givenName.name]: Yup.string().required(`${givenName.requiredErrorMsg}`),
    [courseTitle.name]: Yup.string().required(
      `${courseTitle.requiredErrorMsg}`
    ),
    [mobileNumber.name]: Yup.string()
      .required(`${mobileNumber.requiredErrorMsg}`)
      .matches(/^\d{10}$/, `${mobileNumber.invalidErrorMsg}`),
  }),
];
