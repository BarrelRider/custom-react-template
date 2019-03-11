import React, { useState, useContext }  from 'react';
import RiffContext from '../contexts/riff.context';

const useContextHook = () => {

    const [count, setCount] = useState(0);
    const context = useContext(RiffContext);

    return (
        <div>
            <p>useContext hook - component </p>   
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Hook Count</button>
            <p>{count}</p>
            <p>{context.value}</p>
        </div>
    );
};

export default useContextHook;
