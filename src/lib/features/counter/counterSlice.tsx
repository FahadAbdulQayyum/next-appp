import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStore } from '../../store';
import { productType } from '@/app/popup/upperPopup';

interface CounterState {
    value: number;
    obj: {
        productName: string[];
        location: string[];
    }
}

const initialState: CounterState = {
    value: 0,
    obj: { productName: [], location: [] }
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        initializeCount: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        incrementt: (state, action) => {
            console.log('action.payload...,', action.payload)
            let foundProduct = state.obj.productName.length > 0 && state.obj.productName.filter(v => v.id === action.payload.id)
            console.log('foundProduct...', foundProduct)
            if (foundProduct) {
                foundProduct.quantity = foundProduct.quantity ? foundProduct.quantity + 1 : foundProduct.quantity + 2;
            }
            state.obj.productName.push(action.payload);
        },
        incrementLocation: (state, action) => {
            console.log('action.payload...,', action.payload)
            state.obj.location.push(action.payload);
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
export const { initializeCount, increment, incrementt, incrementLocation, decrement, decrementt } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
