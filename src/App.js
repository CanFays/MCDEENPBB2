import React, { useState } from 'react';
import Home from './pages/Home';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';

// GESTION DU PARTIAL
// App.js gère l'état global pour la sélection (selectedPartial) et transmet les fonctions nécessaires (handlePartialSection) à Header et Home qui peuvent appeler la fonction pour mettre à jour la sélection.
// Home gère l'affichage du composant correspondant à la sélection.

function App() {

  const [selectedPartial, setSelectedPartial] = useState(null);

  const handlePartialSection = (partialName) => {
    setSelectedPartial(partialName);
  };

  return (
    <div className="App">
      <MyHeader
        handlePartialSection={handlePartialSection} />
      <Home
        handlePartialSection={handlePartialSection}
        selectedPartial={selectedPartial}
      />
      <MyFooter/>
    </div>
  );
}

export default App;
