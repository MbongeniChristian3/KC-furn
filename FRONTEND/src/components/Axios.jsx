import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YourComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/your-endpoint/')
      .then(response => setData(response.data));
  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}

export default YourComponent;