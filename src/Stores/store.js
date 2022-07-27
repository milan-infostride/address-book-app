import { configureStore } from "@reduxjs/toolkit";
import addressesSlice from "./slices/adderesses-slice";
import currentUserSlice from "./slices/current-user-slice";
const store = configureStore({
    reducer: {
        addresses: addressesSlice.reducer,
        currentUser: currentUserSlice.reducer
    }
})

export default store;