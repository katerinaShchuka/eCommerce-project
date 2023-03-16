import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import { useAppDispatch } from './redux/hooks';
import { fetchAll } from './redux/reducers/products';

const App = () => {
   const dispatch = useAppDispatch()
   useEffect(() => {
    dispatch(fetchAll())
   }, [])
    return (
        <div className="App">
            <Products />
            <Login />
        </div>
    )
}

export default App;