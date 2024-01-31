import FormGroup from "./FormGroup";

function EmailFormGroup() {
  return (
    <FormGroup
      label={{
        htmlFor: "email",
        value: "Email",
      }}
      input={{
        id: "email",
        type: "email",
        placeholder: "johndoe@gmail.com",
        dataTestId: "email",
      }}
    />
  );
}

export default EmailFormGroup;
