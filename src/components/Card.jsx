import { useState } from "react";

function Card({ name, img, options }) {
  const [card, setCard] = useState(true);

  const onClick = () => {
    setCard(!card);
  };

  return (
    <div className='cards my-1 my-md-2' onClick={onClick}>
      {card ? (
        <div className='text-center h-100 bg-info'>
          <div className='py-2'>
            <img src={img} alt='' className='image img-fluid' />
          </div>
          <div className='bg-warning d-flex justify-content-center align-items-center'>
            <p>{name}</p>
          </div>
        </div>
      ) : (
        <div className=' h-100 d-flex justify-content-start align-items-center'>
          <ul className=''>
            <li>{options[0]}</li>
            <li>{options[1]}</li>
            <li>{options[2]}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Card;
