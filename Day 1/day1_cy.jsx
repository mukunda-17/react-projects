import React from 'react';

const App = () => {
    const compare = () => {
        const name1 = 'Kabil';
        const name2 = 'Kabil';

        const object1 = {name:'Kabil'};
        const object2 = {name:'Kabil'};

        alert("Check the console output!");

        console.log(name1 === name2);
        console.log(object1 === object2);
    };

    return (
        <>
        <button onClick={compare}>Click me!</button>
        </>
    );
};

export default App;