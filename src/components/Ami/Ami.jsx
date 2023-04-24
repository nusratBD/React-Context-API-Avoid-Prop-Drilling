import React from 'react';
import '../GrandPa/GrandPa.css'
import Special from '../Special/Special';
const Ami = ({children}) => {
    return (
        <div className='area-design'>
            {children}
            <div>
                <Special>Special</Special>
            </div>
        </div>
    );
};

export default Ami;