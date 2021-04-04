import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertapp = () => {
  const initialState = ["Dragon ball z"];

  const [categories, setcategories] = useState(initialState);

  /* const add=()=>{

    setcategories(cats => [...cats , inputValue]);
} */

  return (
    <div>
      <h2>GifExpertapp</h2>
      <AddCategory setcategories={setcategories}></AddCategory>
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};
