import React, { useState } from 'react';
import Data from './Components/Data';

const Images = ({ onClickCheck, clickedIds, currentId }) => {
  const [isHovered, setIsHovered] = useState(false); //track hover state
  const [draggedImage, setDraggedImage] = useState(null); //track dragged image
  const [imageData, setImageData] = useState(Data); //store image data

  const handleCheckboxClick = (id) => {
    onClickCheck(id);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (clickedIds.length === 0) {
      setIsHovered(false);
    }
  };
  
  // handle drag start and store dragged image 
  const handleDragStart = (e, data) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(data));
    setDraggedImage(data);
  };


  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetData) => {
    e.preventDefault();
    const droppedData = JSON.parse(e.dataTransfer.getData('text/plain'));

    // Swap the positions of the dropped image and the target image
    const updatedImageData = imageData.map((data) => {
      if (data.id === targetData.id) {
        return { ...droppedData };
      } else if (data.id === droppedData.id) {
        return { ...targetData };
      }
      return data;
    });

    setImageData(updatedImageData);
  };


  // render the component  
  return (
    <div className='container'>
      {imageData.map((data) => (
        <div
        className={`pin ${data.size} ${clickedIds.includes(data.id) ? 'checked' : ''}`} key={data.id}
          draggable
          onDragStart={(e) => handleDragStart(e, data)}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, data)}
        >
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
