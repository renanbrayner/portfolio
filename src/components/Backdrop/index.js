import React from 'react';
import './styles.css';

function Backdrop({ click }) {
    return(
        <div className='backdrop' onClick={click}></div>
    );
}

export default Backdrop;