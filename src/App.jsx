import { useState } from 'react';
import './App.css';
import Images from './Images';
import Swal from 'sweetalert2';
import Data from './Components/Data';

function App() {
  const [clickedIds, setClickedIds] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  function ClickCheck(id) {
    setCurrentId(id);
    setClickedIds((prevIds) => {
      if (!prevIds.includes(id)) {
        return [...prevIds, id];
      } else {
        // Remove the ID if it's already in the clickedIds array
        return prevIds.filter((clickedId) => clickedId !== id);
      }
    });
  }

  function deleteSelectedFiles() {
    if (clickedIds.length === 0) {
      return;
    }
    const updatedData = Data.filter((item) => !clickedIds.includes(item.id));
    Data.length = 0;
  Data.push(...updatedData);

    // Alert to confirm deletion
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setClickedIds([]);
      setCurrentId(null);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })


  }

  return (
    <>
      <div className='flex justify-between'>
        <h1 className='bg-base-100 text-3xl p-4'>
          {(clickedIds.length === 0 ? 'Gallery' : `${clickedIds.length} File${clickedIds.length > 1 ? 's' : ''} Selected`)}
        </h1>
        <button className='font-medium text-red-600' onClick={deleteSelectedFiles}>
          {(clickedIds.length === 0 ? '' : 'Delete Files')}
        </button>
      </div>
      
      <Images onClickCheck={ClickCheck} currentId={currentId} clickedIds={clickedIds} />
    </>
  );
}

export default App;