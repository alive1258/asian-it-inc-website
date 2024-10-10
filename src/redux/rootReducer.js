import { persistReducer } from "redux-persist";
import { baseApi } from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import adminSiteBerSlice from "./features/adminSiteBerSlice";
import authSlice from "./features/authSlice";
import otpSlice from "./features/otpSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAdminSideBarTree = persistReducer(
  persistConfig,
  adminSiteBerSlice
);
// const persistedAuthTree = persistReducer(persistConfig, authSlice);
const persistedOTPTree = persistReducer(persistConfig, otpSlice);

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  adminTree: persistedAdminSideBarTree,
  authTree: persistedAdminSideBarTree,
  otpTree: persistedOTPTree,
};
