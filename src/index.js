import React from "react";
import ReactDOM from "react-dom";
import App from './components/App'

import "./assets/scss/main.scss"

function importAll(r) {
    return r.keys().map(r);
}
importAll(require.context('./', true, /\.(png|jpe?g|svg|eot|ttf|woff|woff2)$/));

ReactDOM.render(<App />, document.getElementById("index"));