import React, { useState, useEffect } from 'react';


const useEffectHook = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Effected');
    });

    return (
        <div>
            <p>useEffect hook - component </p>   
            <p>Look to the console</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Hook Count</button>
            <p>{count}</p>
        </div>
    )
}

export default useEffectHook;