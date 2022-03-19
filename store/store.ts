import {
    Action,
    configureStore,
    createSlice,
    ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import counter from "./counter";

export const hydrateSlice = createSlice({
    name: "hydrate",
    initialState: {} as any,
    reducers: {},
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log("HYDRATE", action.payload);
            return {
                ...state,
                ...action.payload.subject,
            };
        },
    },
});

const makeStore = () =>
    configureStore({
        reducer: {
            hydrate: hydrateSlice.reducer,
            counter: counter,
        },
        devTools: process.env.NODE_ENV === "development",
    });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);