import axios from "axios";
import React from "react";
import { useEffect } from "react";

export default function HttpDemo6() {
  const fetchData = async function () {
    const promise1 = axios.get("https://api.github.com/users/defunkt");
    const promise2 = axios.get("https://api.github.com/users/sanjaysamantra1");

    try {
      let [response1, response2] = await axios.all([promise1, promise2]);
      console.log(response1.data, response2.data);
    } catch (err) {
      console.log("Something went wrong");
    }

  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>HttpDemo6 Axios.all()</div>;
}
