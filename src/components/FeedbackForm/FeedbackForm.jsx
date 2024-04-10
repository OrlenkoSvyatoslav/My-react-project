import { Formik, Form, Field } from "formik";
import { useId } from "react";

const FeedbackForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />

        <label htmlFor={emailFieldId}>Email</label>
        <Field type="email" name="email" id={emailFieldId} />
        <button type="submit">Submit</button>

        <Field as="textarea" name="message" id={msgFieldId} />
      </Form>
    </Formik>
  );
};

export default FeedbackForm;
