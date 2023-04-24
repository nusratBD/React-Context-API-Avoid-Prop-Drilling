import React from 'react';
import '../GrandPa/GrandPa.css'
import Vai from '../Vai/Vai';
import Bon from '../Bon/Bon';
import Ami from '../Ami/Ami';

const Father = ({children}) => {
    return (
        <div className='area-design'>
            {children}
            <div className='child-design'>
                <Vai>Brother</Vai>
                <Bon>Sister</Bon>
                <Ami>MySelf</Ami>
            </div>
        </div>
    );
};

export default Father;