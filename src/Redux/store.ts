import { configureStore } from "@reduxjs/toolkit";
import { rootSaga, sagaMiddleware } from "./saga";
import { authReducer } from "./slices/Auth";

const store = configureStore({
  reducer: {
    authReducer,
  },
  middleware: [sagaMiddleware],
});

export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export default store;
