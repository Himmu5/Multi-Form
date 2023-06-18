import { FC, useEffect } from "react";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../../Redux/store";
import { alertSelector } from "../../Redux/selector/AuthState";
import { removeAlert } from "../../Redux/slices/Auth";

type P = {} & ReduxProps;

const Alert: FC<P> = ({ alert, removeAlert }) => {
  if (alert.message?.length === 0) {
    return <div></div>;
  }

  useEffect(() => {
    setTimeout(() => {
      removeAlert();
    }, 3 * 1000);
  }, []);

  return (
    <div className="flex justify-center mx-4 my-1 ">
      <div
        className="absolute  z-5 p-4 w-full max-w-4xl mx-3 mb-4 text-sm text-green-800 rounded-lg bg-green-100 shadow-xl dark:bg-gray-800 dark:text-green-400 flex gap-2"
        role="alert"
      >
        <span className="font-medium">
          {alert.type === "Success" ? "Success alert!" : " error alert!  "}
        </span>
        {alert.message}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({ alert: alertSelector(state) });
const mapDispatchToProps = {
  removeAlert,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Alert);
