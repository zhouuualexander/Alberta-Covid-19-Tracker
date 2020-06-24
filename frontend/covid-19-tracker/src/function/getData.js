import React, { useState, useEffect } from "react";
/***********get data from API ******************************************************8 */
export default function getData(){
var albertaData = [];
const [abData, setabData] = useState(albertaData);
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      "http://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq"
    );
    console.log(result);
    setabData(result.data);
  };

  fetchData();
}, []);
    return abData;
}
/**************************************************************************** */