import { React, useState } from "react";
import TextField from "@material-ui/core/TextField"
import "./SearchBar.css";
import '../App.css';

function SearchBar() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="search-bar-container">
            <div className="search">
                <input
                    placeholder="Enter video URL"
                    className="search-text"
                    onChange={inputHandler}
                />
            </div>
        </div>
    );
}

export default SearchBar;


