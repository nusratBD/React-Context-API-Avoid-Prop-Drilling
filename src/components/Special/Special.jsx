import React, { useContext } from 'react';
import '../GrandPa/GrandPa.css';
import {MoneyContext} from '../GrandPa/GrandPa'
const Special = ({children}) => {
    const money = useContext(MoneyContext);
    return (
        <div className='area-design'>
            {children}
            <p>Account: {money}</p>
        </div>
    );
};

export default Special;