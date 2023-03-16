import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const Products = () => {

    const dispatch = useAppDispatch()
    const products = useAppSelector(state=>state.productReducer)
    
  return (
    <div>
    {
    products.map(
        item => (
            <li key={item.id}>{item.title}</li>
        ))
    }
    </div>
  )
}

export default Products