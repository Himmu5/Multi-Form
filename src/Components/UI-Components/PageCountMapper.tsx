import { FC } from "react";
import ProgressCount from "./ProgressCount";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../../Redux/store";
import { pageSelector } from "../../Redux/selector/progress";

type P = {} & ReduxProps;

const PageCountMapper: FC<P> = ({ page }) => {
  return (
    <>
      <div className="flex-1">
        <div
          className={
            "w-10 h-10  text-white mx-auto rounded-full text-lg border-2 flex items-center " +
            (page >= 1 && "bg-indigo-500")
          }
        >
          <span className=" text-center w-full">
            <i className="fa fa-check w-full fill-current ">1</i>
          </span>
        </div>
      </div>
      {[...Array(4).keys()].map((i) => {
        return (
          <ProgressCount progress={page > i +1 ? 100 : 0} count={i + 2} />
        );
      })}
    </>
  );
};

const mapStateToProps = (state: State) => ({ page: pageSelector(state) });

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;
export default connector(PageCountMapper);
