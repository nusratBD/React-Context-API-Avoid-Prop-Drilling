import React from 'react';
import '../GrandPa/GrandPa.css'
import { useContext } from 'react';
import { MoneyContext } from '../GrandPa/GrandPa';
const Aunty = ({children}) => {
    const money = useContext(MoneyContext)
    return (
        <div className='area-design'>
            {children}
            <p>Account: {money}</p>
        </div>
    );
};

export default Aunty;