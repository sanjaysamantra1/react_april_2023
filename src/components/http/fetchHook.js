import React, { useEffect, useState } from "react";

// useFetch - Custom Hook
export default function useFetch(url) {
  const [data, setData] = useState([]);

  const getData = async function () {
    let response = await fetch(url);
    let data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return data;
}
