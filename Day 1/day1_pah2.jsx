import React from 'react';

const App = () => {
    const display = () => {
        alert("Check the console output!");
        let age = 18;
        let name = 'Kiran';
        let setStatus = false;
        let userDefault = undefined;
        let responseValue = null;
    
        console.log(age);
        console.log(name);
        console.log(setStatus);
        console.log(userDefault);
        console.log(responseValue);
    };
    
    return (
        <>
            <button onClick={display}>Click me!</button>
        </>
    );
};

export default App;