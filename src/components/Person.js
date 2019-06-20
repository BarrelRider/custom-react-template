import React, { useState } from "react";

const Person = props => {

    const [article, setArticle] = useState({
        quote: "Eg riff ykkur i bita",
        author: "Raider"
    });


    return (
        <div className="row">
            <div className="col-md-6">{article.quote}</div>
            <div className="col-md-6"> - {article.author}</div>
        </div>
    );
}

export default Person;