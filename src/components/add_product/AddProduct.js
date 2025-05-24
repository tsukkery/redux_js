import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/CartSlice';

function AddProduct() {
    const dispatch = useDispatch();

    const addProduct = () => {
        const title = prompt("Введите название товара:");

        if (title) {
            dispatch(addItem(title));
        }
    }

    return (
        <button onClick={addProduct}>Добавить товар</button>
    )
}

export default AddProduct;
