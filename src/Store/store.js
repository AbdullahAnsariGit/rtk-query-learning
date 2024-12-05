import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { authApi } from "../Api/authApiSlice";
import { postApi } from "../Api/postApiSlice";
import { profileApi } from "../Api/profileApiSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { reduxStorage } from "./mmkv";
import { contactApi } from "../Api/contactApiSlice";
import { rafflesApi } from "../Api/rafflesApiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { resetApi } from "../Api/resetPassApiSlice";
import { userApi } from "../Api/userApiSlice";
import { chatApi } from "../Api/chatApi";
const persistConfig = {
  key: "root",
  storage: reduxStorage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
      immutableCheck: false,
    }).concat(
      authApi.middleware,
      postApi.middleware,
      profileApi.middleware,
      contactApi.middleware,
      rafflesApi.middleware,
      resetApi.middleware,
      userApi.middleware,
      chatApi.middleware
    ),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
