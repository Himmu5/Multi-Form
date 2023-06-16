import { FC, InputHTMLAttributes } from "react";
type P = {
  children: string;
  extraClass: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<P> = ({ children, extraClass, type, ...props }) => {
  return (
    <div className="py-2 flex flex-col ">
      <label
        htmlFor={type}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        Your {type}
      </label>
      <input
        id={type}
        {...props}
        className="focus:outline-none foucs:ring-indigo-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
  );
};
export default Input;
