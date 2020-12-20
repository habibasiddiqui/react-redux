

// COUNTER



import React from 'react';
import {useSelector} from 'react-redux';


function CounterOutput() {
    const counter = useSelector(state => state.counter)
    return (
        <div>
            <h3>Counter Value: {counter}</h3>
        </div>
    )
}

export default CounterOutput
