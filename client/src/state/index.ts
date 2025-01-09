import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface initialStateTypes {
    isSidebarCollapse: boolean;
    isDarkMode: boolean;
}

const initialState: initialStateTypes = {
    isSidebarCollapse: false,
    isDarkMode: true
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapse: (state, action:PayloadAction<boolean>) => {
            state.isSidebarCollapse = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    }
})

export const { setIsSidebarCollapse, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;