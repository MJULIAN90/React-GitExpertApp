import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GridGridItem } from "./GridGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p className='animate__animated animate_flash'>Loading </p>}

      <div className="card-grid animate__animated animate__fadeInLeft">
        {
          // no se porque images y no setImages
          images.map((img) => (
            <GridGridItem key={img.id} {...img} />
          ))
        }
      </div>
    </>
  );
};
