import React from 'react';
import Data from './Components/Data';

const Images = ({ onClickCheck, clickedIds, currentId }) => {
  const handleCheckboxClick = (id) => {
    onClickCheck(id);
  };

  
  return (
    <div className='container'>
      {Data.map((data) => (
        <div className={`pin ${data.size} ${clickedIds.includes(data.id) ? 'checked' : ''}`} key={data.id} draggable>
          <img
            className={`images ${clickedIds.includes(data.id) ? 'selected' : ''}`}
            src={data.img}
            alt=""
          />
          <div className="content">
            
            <div>
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked={clickedIds.includes(data.id)}
                onChange={() => handleCheckboxClick(data.id)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Images;