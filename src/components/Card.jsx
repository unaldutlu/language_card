import { useState } from "react";
import data from "../data/data";

function Card() {
  const [card, setCard] = useState(true);

  const onClick = () => {
    setCard(!card);
  };
  return (
    <div className='frame pb-2 mb-5 pt-2' onClick={onClick}>
      {data.map((e, i) => (
        <div key={i} className='cards my-1 my-md-2'>
          {card ? (
            <div className='text-center h-100 bg-info '>
              <div className='py-2'>
                <img src={e.img} alt='' className='image img-fluid' />
              </div>
              <div className='bg-warning d-flex justify-content-center align-items-center'>
                <p>{e.name}</p>
              </div>
            </div>
          ) : (
            <div className=' h-100 d-flex justify-content-start align-items-center'>
              <ul className=''>
                <li>{e.options[0]}</li>
                <li>{e.options[1]}</li>
                <li>{e.options[2]}</li>
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
