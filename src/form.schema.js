import * as Yup from "yup";

const yup_string_reqd = Yup.string().required();

export const feedback_schema = Yup.object().shape({
  firstName: yup_string_reqd.min(2, "too short").max(50, "too long"),
  lastName: yup_string_reqd.min(2, "too short").max(50, "too long"),
  address: yup_string_reqd.min(10, "too short").max(100, "too long"),
  country: yup_string_reqd,
  email: yup_string_reqd.email("Enter a valid Email"),
  phoneNum: Yup.number()
    .min(1e10, "Enter a valid number")
    .max(1e11 - 1),
});
