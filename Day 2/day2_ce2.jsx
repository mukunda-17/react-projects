import React from 'react';

const App = () => {
    const headStyle = {
        color: 'green'
      };
    
      const paraStyle = {
        color: 'darkblue',
        fontSize: '16px'
      };
    
      const divStyle = {
        backgroundColor: 'lightblue',
        color: 'darkblue',
        padding: '10px',
        border: '1px solid blue',
        borderRadius: '5px'
      };

    return (
        <>
            <h1 style={headStyle}>Inline Style in JSX Example.</h1>
            <div style={divStyle}>
                <p style={paraStyle}>This is a paragraph with inline styles applied.</p>
            </div>
        </>
    );
};

export default App;