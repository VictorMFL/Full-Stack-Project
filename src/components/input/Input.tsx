import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface InputProps {
  title: string;
  type: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Input = ({ title, type, value, setValue }: InputProps) => {
  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }
  return (
    <div className="relative opacity-40 mb-10 w-full">
      <input
        id={title}
        type={type}
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit w-full"
        onChange={handleChange}
        required
      />
      <label
        htmlFor={title}
        className={`absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 ${
          value.length > 0 ? "text-xs -top-5 text-blue-700" : ""
        }`}
      >
        {title}
      </label>
    </div>
  );
};

export default Input;
