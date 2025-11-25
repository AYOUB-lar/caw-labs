import { useState } from 'react';

export default function App() {
  const [divs, setDivs] = useState([]);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [color, setColor] = useState('#ff0000');

  const handleSubmit = () => {
    if (height && width) {
      setDivs([...divs, { 
        id: Date.now(), 
        height: parseInt(height), 
        width: parseInt(width), 
        color 
      }]);
      setHeight('');
      setWidth('');
      setColor('#ff0000');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Créateur de Div - Exercice 4
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hauteur (px)
              </label>
              <input
                type="number"
                placeholder="Ex: 100"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Largeur (px)
              </label>
              <input
                type="number"
                placeholder="Ex: 200"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Couleur de fond
              </label>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md cursor-pointer"
              />
            </div>
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
          >
            Ajouter le Div
          </button>
        </div>
        
        <div className="space-y-4">
          {divs.length > 0 && (
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Divs créés ({divs.length})
            </h2>
          )}
          {divs.map((div) => (
            <div
              key={div.id}
              style={{
                height: `${div.height}px`,
                width: `${div.width}px`,
                backgroundColor: div.color
              }}
              className="border-2 border-gray-400 rounded shadow-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}