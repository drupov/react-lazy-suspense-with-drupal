import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Articles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://react-lazy-suspense-with-drupal.lndo.site/graphql?query={nodeQuery(limit:5){entities{entityId,entityLabel}}}',
      );

      setData(result.data.data.nodeQuery.entities);
    };

    fetchData();
  }, []);

  return (
      <ul>
        {data.map(item => (
            <li key={item.entityId}>{item.entityLabel}</li>
        ))}
      </ul>
  );
}

export default Articles;
