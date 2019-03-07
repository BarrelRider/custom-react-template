import React from "react";

class Person extends React.Component {

    state = {
        quote: "Eg riff ykkur i bita",
        author: "Raider"
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">{this.state.quote}</div>
                <div className="col-md-6"> - {this.state.author}</div>
            </div>
        );
    }
}

export default Person;