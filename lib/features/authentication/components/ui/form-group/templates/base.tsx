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
          className="w-full select-none text-sm font-medium text-slate-500"
        >
          {label?.value}
        </label>
      </div>
      <div className="relative">
        <input
          id={input?.id}
          className="w-full rounded border border-gray-200 p-4 pl-3 text-gray-600 outline-blue-500 md:text-sm"
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
