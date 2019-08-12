import React, { useState, Suspense } from 'react';
const Articles = React.lazy(() => import('./components/Articles'));

function App() {
  const [articlesVisible, setArticlesVisible] = useState(false);

  return (
    <React.Fragment>
      {articlesVisible ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Articles />
        </Suspense>
      ) : (
        <button onClick={() => setArticlesVisible(true)}>Show articles</button>
      )}
    </React.Fragment>
  );
}

export default App;
