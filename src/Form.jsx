import { Formik, Form, Field } from "formik";
import { feedback_schema } from "./form.schema";

export function FeedbackForm() {
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      address: "",
      phoneNum: "",
    }}
    validationSchema={feedback_schema}
    onSubmit={console.log}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="firstName" />
        {errors.firstName && touched.firstName ? (
          <div>{errors.firstName}</div>
        ) : null}
        <Field name="lastName" />
        {errors.lastName && touched.lastName ? (
          <div>{errors.lastName}</div>
        ) : null}
        <Field name="address" />
        {errors.address && touched.address ? <div>{errors.email}</div> : null}
        <Field name="country" />
        {errors.country && touched.country ? <div>{errors.country}</div> : null}
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <Field name="phoneNum" />
        {errors.phoneNum && touched.phoneNum ? (
          <div>{errors.phoneNum}</div>
        ) : null}

        <button type="submit">Submit Feedback</button>
      </Form>
    )}
  </Formik>;
}
