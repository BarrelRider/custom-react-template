import React from "react";
import Person from './Person'

import UseStateHook from './useStateHook';
import UseEffectHook from './useEffectHook';
import UseContextHook from './useContextHook';

import RiffContext from '../contexts/riff.context';


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Person/>
                <hr/>
                <UseStateHook/>
                <hr/>
                <UseEffectHook/>
                <hr/>
                <RiffContext.Provider value={{value: "Starbucks - Context Value"}}>
                    <UseContextHook/>
                </RiffContext.Provider>
            </div>
        );
    }
}

export default App;