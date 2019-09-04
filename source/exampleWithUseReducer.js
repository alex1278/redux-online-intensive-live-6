// Core
import React, { useState } from 'react';

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        default:
            throw new Error(`We don't have this action ${action.type}`);
    }
}

const useReducer = (reducer, initialState) => {
    const [state, setState] = useState(initialState);

    const dispatch = (action) => {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}

export const Component = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const [counter, setCounter] = useState();

    const increment = () => setCounter(counter + 1);

    return (
        <>
            <h1>Count: { state.count }</h1>
            <button onClick={ () => dispatch({type: 'increment'}) }>+</button>
            <button onClick={ () => dispatch({type: 'decrement'}) }>-</button>
            <h2>Second Count: { counter }</h2>
            <button onClick={ () => setCounter(counter + 1) }>+</button>
            <button onClick={ () => setCounter(counter - 1) }>-</button>
        </>
    );
}