import { configureStore } from "@reduxjs/toolkit";
import { projectReducer } from "./slices/projectSlice";
import { overRideReducer } from "./slices/overRideSlice";


export const store = configureStore({
    reducer: {
        projectReducer,
        overRideReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
