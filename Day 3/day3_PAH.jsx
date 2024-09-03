import React, { useState } from 'react';

const ToggleMessage = () => {
  const [transformation, setTransformation] = useState('Kaioken');
  const [clickCount, setClickCount] = useState(0);

  const toggleTransformation = () => {
    setClickCount((prevClickCount) => {
      const newClickCount = prevClickCount + 1;
      if (newClickCount === 4) {
        setTransformation((prevTransformation) =>
          prevTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
        );
        return 0;
      }
      return newClickCount;
    });
  };

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'90vh',
      textAlign:'center'
      }}>
      <h1>Goku's Transformation: {transformation}</h1>
      <button onClick={toggleTransformation} style={{padding:'10px 20px'}}>Toggle Transformation</button>
      <p>Click count : {clickCount}</p>
    </div>
  );
};

export default ToggleMessage;
