import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Newscard from "./components/Newscard";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div className="container-fluid m-0 p-0">
      <Wrapper />
      <Navbar setCategory={setCategory} category={category} />
      <Newscard category={category} />
    </div>
  );
};

export default App;
