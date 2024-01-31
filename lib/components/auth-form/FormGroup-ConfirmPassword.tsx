import FormGroup from "./FormGroup";

function ConfirmPasswordFormGroup() {
  return (
    <FormGroup
      label={{
        htmlFor: "confirm-password",
        value: "Confirm Password",
      }}
      input={{
        id: "confirm-password",
        type: "password",
        placeholder: "•••••••••",
        dataTestId: "confirm-password",
      }}
    />
  );
}

export default ConfirmPasswordFormGroup;
