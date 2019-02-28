import React from "react";
import Person from './Person'

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Person />
            </div>
        );
    }
}

export default App;