import React from 'react';
import {Link} from 'react-router-dom';

const ReactHello = () => {
    return (
        <>
            <div><Link to='/demo1'>Demo1</Link></div>
            <div><Link to='/demo2'>Demo2</Link></div>
            <div><Link to='/demo4'>Demo4</Link></div>
            <div><Link to='/demo5'>Demo5</Link></div>
        </>
    );
};

export default ReactHello;
