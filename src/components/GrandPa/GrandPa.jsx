import React, { useState } from 'react';
import './GrandPa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import { createContext } from 'react';
export const MoneyContext = createContext(0);
const GrandPa = () => {
    const [money, setMoney] = useState(0);
    const transferMoney = () => {
        setMoney(money + 1000);
    }
    return (
        <div className='area-design'>
            <h1>GrandPa</h1>
            <button className='btn' onClick={transferMoney}>Transfer Money</button>
            <div className='child-design'>
                <MoneyContext.Provider value={money}>
                    <Father>Father</Father>
                    <Uncle>Uncle</Uncle>
                    <Aunty>Aunty</Aunty>
                </MoneyContext.Provider >
            </div>
        </div>
    );
};

export default GrandPa;