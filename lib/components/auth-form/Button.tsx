interface ButtonProps {
  title: string;
}
function Button({ title }: ButtonProps) {
  return (
    <button className="mt-3 rounded-lg bg-blue-400 px-4 py-3 font-semibold text-white hover:bg-blue-500">
      {title}
    </button>
  );
}

export default Button;
