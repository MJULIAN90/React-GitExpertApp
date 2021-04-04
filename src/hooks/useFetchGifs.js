import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  // cuando mandamos por consola setState a quien estamos mandando al parametro o la funcion
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, );
    });
  }, [category]);

  return state;
};
