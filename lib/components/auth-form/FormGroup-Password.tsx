import FormGroup from "./FormGroup";

function PasswordFormGroup() {
  return (
    <FormGroup
      label={{
        htmlFor: "password",
        value: "Password",
      }}
      input={{
        id: "password",
        type: "password",
        placeholder: "•••••••••",
        dataTestId: "password",
      }}
    />
  );
}

export default PasswordFormGroup;
