interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  dataTestId?: string;
}

function Input({ type, placeholder, dataTestId }: InputProps) {
  return (
    <input
      className="rounded border border-gray-200 p-2 pl-3 text-gray-600 outline-blue-500 md:text-sm"
      data-testid={dataTestId}
      placeholder={placeholder}
      type={type}
    />
  );
}

export default Input;
