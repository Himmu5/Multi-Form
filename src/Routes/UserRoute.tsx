import { FC, ReactNode } from "react";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../Redux/store";
import { tokenSelector } from "../Redux/selector/AuthState";
import Home from "../Components/Pages/Home";

type P = {
  children: ReactNode;
} & ReduxProps;
const UserRoute: FC<P> = ({ token, children }) => {
    
  if (token.length > 0) {
    return <Home />;
  }

  return <div>{children}</div>;
};

const mapStateToProps = (state: State) => ({ token: tokenSelector(state) });

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(UserRoute);
