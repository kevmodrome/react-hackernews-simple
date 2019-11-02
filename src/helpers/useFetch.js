import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      setLoading(true)
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false)
    })();
  }, [url]);
  return [loading, data];
};