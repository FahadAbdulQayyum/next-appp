import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStore } from '../../store';

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initializeCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

// Export the actions
export const { initializeCount, increment, decrement } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
