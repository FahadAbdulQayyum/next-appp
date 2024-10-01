import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStore } from '../../store';

interface CounterState {
    value: number;
    obj: {
        productName: string[];
    }
}

const initialState: CounterState = {
    value: 0,
    obj: { productName: [] }
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initializeCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        incrementt: (state, action) => {
            state.obj.productName.push(action.payload);
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
export const { initializeCount, increment, incrementt, decrement } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
