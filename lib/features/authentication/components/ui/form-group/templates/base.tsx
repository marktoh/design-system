import { FC, ReactNode } from "react";
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
  icon?: ReactNode;
}
const FormGroup: FC<FormGroupProps> = ({ label, input, icon }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <label
          htmlFor={label?.htmlFor}
          className="w-full select-none text-sm font-medium text-slate-700"
        >
          {label?.value}
        </label>
      </div>
      <div className="relative">
        <input
          id={input?.id}
          className="w-full rounded-lg border border-gray-200 bg-gray-200 p-4 pl-3 text-gray-900 outline-blue-500"
          data-testid={input?.dataTestId}
          placeholder={input?.placeholder}
          type={input?.type}
          pattern={input?.pattern}
        />
        {icon}
      </div>
    </div>
  );
};

export { FormGroup };
