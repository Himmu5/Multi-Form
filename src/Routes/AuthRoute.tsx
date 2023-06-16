import { FC, ReactNode } from "react";
import { ConnectedProps, connect } from "react-redux";
import { State } from "../Redux/store";
import { tokenSelector } from "../Redux/selector/AuthState";
import SignIn from "../Components/Pages/SignIn";
type P = {
  children: ReactNode;
} & ReduxProps;
const AuthRoute: FC<P> = ({ token, children }) => {
  if (token.length === 0) {
    return <SignIn />;
  }

  return <div>{children}</div>;
};

const mapStateToProps = (state: State) => ({ token: tokenSelector(state) });

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(AuthRoute);
