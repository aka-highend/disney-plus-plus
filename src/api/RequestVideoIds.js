import { useState, useEffect } from "react";
import { fetchData } from "./API";

export const RequestVideoIds = (props) => {
  const endPoint = `${props.type}/${props.id}/videos`;

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchData(endPoint);
      setData(res?.results);
    };
    getData();
  }, [endPoint]);


  let trailers = data?.sort((a, b) => {
    if (a.official === true) return -1;
    if (b.official === true) return 1;
    return 0;
  });
  trailers = trailers?.sort((a, b) => {
    if (a.type === "Trailer") return -1;
    if (b.type === "Trailer") return 1;
    return 0;
  });
  const videoKey =trailers? trailers[0]?.key : "";

  return props.multiple ? trailers : videoKey;
};
