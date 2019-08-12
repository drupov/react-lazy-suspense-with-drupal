import React, { useState, Suspense } from 'react';
import Articles from './components/Articles';

function App() {
  const [articlesVisible, setArticlesVisible] = useState(false);

  return (
    <React.Fragment>
      {articlesVisible ? (
        <Articles />
      ) : (
        <button onClick={() => setArticlesVisible(true)}>Show articles</button>
      )}
    </React.Fragment>
  );
}

export default App;
