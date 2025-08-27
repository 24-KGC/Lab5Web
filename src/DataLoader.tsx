import React, { useState, useEffect } from 'react';

type DataLoaderProps = {
  render: (args: { data: any; loading: boolean; error: string | null }) => React.ReactNode;
};

const DataLoader: React.FC<DataLoaderProps> = ({ render }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return <>{render({ data, loading, error })}</>;
};

export default DataLoader;
