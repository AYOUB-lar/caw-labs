
import React, { useState } from 'react';


const DisplayTab = ({ table }) => {
  const [items, setItems] = useState(table); 

  
  const handleClick = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Composant App qui contient deux DisplayTab avec des tableaux différents
const App = () => {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "cherry"];

  return (
    <div>
      <h1>Mes Exercices React</h1>
      
      <h2>Table 1</h2>
      <DisplayTab table={tab1} />

      <h2>Table 2</h2>
      <DisplayTab table={tab2} />
    </div>
  );
};

export default App;
