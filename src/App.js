import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "./data/data";

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='frame pb-2 mb-5 pt-2'>
        {data.map((item, i) => {
          const { name, img, options } = item;
          return <Card key={i} name={name} img={img} options={options} />;
        })}
      </div>
    </div>
  );
}

export default App;
