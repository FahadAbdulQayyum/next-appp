import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStore } from '../../store';
import { productType } from '@/app/popup/upperPopup';

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
        decrementt: (state, action) => {
            console.log('action.payload...', action.payload)
            console.log('state.obj.productName...', state.obj)
            state.obj.productName = []
            state.obj.productName.push(...action.payload)
            console.log('staet.obj.productName...', state.obj.productName)
            // state.obj.productName.filter((v: CounterState) => v.id !== action.payload.id);

            // state.obj.productName.filter((v: productType) => (typeof v === 'productType' && 'id' in v) && v.id !== action.payload.id);
        },
    },
});

// Export the actions
export const { initializeCount, increment, incrementt, decrement, decrementt } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
