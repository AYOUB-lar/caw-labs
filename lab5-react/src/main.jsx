import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Exo1 from './exo1.jsx'; 
import Exo2 from './exo2.jsx';
import Exo3 from './exo3.jsx';
import Exo4 from './exo4.jsx'; 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <h1>Mes Exercices React</h1>
      
      <h2>Exercice 1</h2>
      <Exo1 /> 

      <h2>Exercice 2</h2>
      <Exo2 /> 

      <h2>Exercice 3</h2>
      <Exo3 /> 

      <h2>Exercice 4</h2>
      <Exo4 />
    </div>
  </StrictMode>
);