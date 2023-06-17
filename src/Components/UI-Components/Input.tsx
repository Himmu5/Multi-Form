import { FC, InputHTMLAttributes, memo } from "react";
type P = {
  extraClass?: string;
  touch?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<P> = ({
  extraClass,
  type,
  error,
  touch,
  children,
  ...props
}) => {
    
  return (
    <div className="py-2 flex flex-col w-full">
      <label
        htmlFor={type}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
      >
        Your {children}
      </label>
      <input
        {...props}
        id={type}
        type={type}
        className={
          "focus:outline-none foucs:ring-indigo-500 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white " +
          (touch && error && " border-red-500 ")
        }
        required
      />
    </div>
  );
};
export default memo(Input);
