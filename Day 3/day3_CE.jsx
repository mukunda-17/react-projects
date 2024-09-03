import React, { useState } from "react";

const ToggleMessage = () => {
    const [isMessageVisible, setIsMessageVisible] = useState('true');

    const toggleMessage = () => {
        setIsMessageVisible(!isMessageVisible);
    };

    return (
        <div style={{textAlign:'center'}}>
            <button style={{padding:'10px 20px', marginTop:'200px', fontSize:'bolder'}} onClick={toggleMessage}>{isMessageVisible ? 'Hide Component' : 'Show Component'}</button><br/>
            {isMessageVisible && <div style={{fontSize:'50px'}}>Hi! How are you!!!</div>}
        </div>
    );
};

export default ToggleMessage;
