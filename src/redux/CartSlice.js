import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, title: 'Велосипед', count: 5 },
    { id: 2, title: 'Самокат', count: 4 },
    { id: 3, title: 'Гантели', count: 7 },
    { id: 4, title: 'Ракетки', count: 1 }
]

const cartSlice = createSlice({
    name: 'cart', initialState,
    reducers: {
        increment: (state, action) => {
            const item = state.find(item => item.id === action.payload);

            if (item && item.count < 25) {
                item.count += 1;
            }
        },
        decrement: (state, action) => {
            const item = state.find(item => item.id === action.payload);

            if (item) {
                item.count -= 1;

                if (item.count < 1) {
                    const index = state.findIndex(item => item.id === action.payload);

                    if (index !== -1) {
                        state.splice(index, 1);
                    }
                }
            }
        },
        addItem: (state, action) => {
            let nextId = initialState.length + 1;
            const title = action.payload;

            if (title) {
                state.push({ id: nextId++, title: title, count: 1 });
            }
        }
    }
})

export const { increment, decrement, addItem } = cartSlice.actions;
export default cartSlice.reducer;
