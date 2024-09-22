import React, {useState} from "react";

const EventExample = () => {
    
    const [inputValue, setInputValue] = useState ('');
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (tite) => {
        setInputValue(tite.target.value);
        setIsFocused(true);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };
    
    const handleBlur = () => {
        setIsFocused(false);
    };

    return (

        <div>
            <h1>Event Handling in React</h1>
            <input className="form-control" 
                type="text" 
                value={inputValue} 
                onChange={handleChange}
                onfocus={handleFocus}
                onBlur={handleBlur}
                placeholder="Type something"
            />

            <p> {isFocused ? 'Input is focused' : 'Input is not focused'}</p>

            <p>Current Input: {inputValue}</p>
        </div>
    );
};

export default  EventExample;
