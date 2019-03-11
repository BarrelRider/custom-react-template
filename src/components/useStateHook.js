import React, { useState } from 'react';


const useStateHook = () => {

    const [count, setCount] = useState(0)


    return (
        <div>
            <p>useState hook - component </p>   
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Hook Count</button>
            <p>{count}</p>
        </div>
    )
}

export default useStateHook;