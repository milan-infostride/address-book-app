import { configureStore } from "@reduxjs/toolkit";
import addressesSlice from "./slices/adderesses-slice";
const store = configureStore({
    reducer: {
        addresses: addressesSlice.reducer
    }
})

export default store;