import { ButtonHTMLAttributes, FC, memo } from "react";
type P = {
  mode: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<P> = ({ mode, children, ...rest }) => {
  let styleClasses = ""
  if (mode === "primary") {
    styleClasses = " bg-indigo-500 hover:bg-indigo-600 text-white ";
  }

  return (
    <button className={"rounded-md py-2 px-4 " + styleClasses} {...rest}>
      {children}
    </button>
  );
};
export default memo(Button);
