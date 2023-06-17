import { FC } from "react";
type P = {};
const Alert: FC<P> = () => {
  return (
    <div className="flex justify-center">
      <div
        className="absolute max-w-4xl mx-auto w-full z-5 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 shadow-xl dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span className="font-medium">Success alert!</span> Change a few things
        up and try submitting again.
      </div>
    </div>
  );
};
export default Alert;
