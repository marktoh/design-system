import { FC } from "react";
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  value?: string;
  dataTestId?: string;
}
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  dataTestId?: string;
}
interface FormGroupProps {
  label: LabelProps;
  input: InputProps;
}
const FormGroup: FC<FormGroupProps> = ({ label, input }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label?.htmlFor}
        className="w-full text-sm font-medium text-slate-500"
      >
        {label?.value}
      </label>
      <input
        id={input?.id}
        className="rounded border border-gray-200 p-4 pl-3 text-gray-600 outline-blue-500 md:text-sm"
        data-testid={input?.dataTestId}
        placeholder={input?.placeholder}
        type={input?.type}
        pattern={input?.pattern}
      />
    </div>
  );
};

export default FormGroup;
