import { configureStore } from "@reduxjs/toolkit";
import { rootSaga, sagaMiddleware } from "./saga";
import { authReducer } from "./slices/Auth";
import { progressReducer } from "./slices/Progress";

const store = configureStore({
  reducer: {
    authReducer,
    progressReducer,
  },
  middleware: [sagaMiddleware],
});

export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export default store;
