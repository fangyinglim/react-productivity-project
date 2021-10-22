import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(url).then((res) =>
      res.json().then((data) => {
        // console.log(data.items[0].readings);
        let totalTemp = data.items[0].readings
          .map((data) => data.value)
          .reduce(function (previous, current) {
            return previous + current;
          });
        // console.log(totalTemp);
        let avgTemp = totalTemp / data.items[0].readings.length;
        // console.log(avgTemp);
        setWeather(avgTemp);
      })
    );
  }, [url]);

  return weather;
};

export default useFetch;
