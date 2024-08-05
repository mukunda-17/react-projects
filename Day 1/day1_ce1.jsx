import React from 'react';

const World = () => {
    const display = () => {
        let myobject = {name:'Madras'};
        let newObject = myobject;
        newObject.name = 'Chennai';

        let myarray = ['a', 'e', 'i', 'o'];
        let vowelArray = myarray;
        myarray.push('u');

        alert("Check the console output!");

        console.log(vowelArray);
    };
    
    return (
        <>
            <button onClick={display}>Click me!</button>
        </>
    );
};

export default World;