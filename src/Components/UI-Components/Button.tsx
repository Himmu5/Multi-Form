import { ButtonHTMLAttributes, FC, memo } from "react";
type P = {
  mode: "primary" | "secondary";
  extraClasses?:string
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<P> = ({ mode, children,extraClasses , ...rest }) => {
  let styleClasses = ""
  if (mode === "primary") {
    styleClasses = " bg-indigo-500 hover:bg-indigo-600 text-white ";
  }
  if (mode === "secondary") {
    styleClasses = "  text-black hover:scale-110 shadow-xl ";
  }

  return (
    <button className={"rounded-md py-2 px-4 "+extraClasses + styleClasses} {...rest}>
      {children}
    </button>
  );
};
export default memo(Button);
