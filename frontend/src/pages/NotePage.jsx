import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { ReactComponent as Arrowleft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';

function NotePage() {
  let { id } = useParams();
  const navigate = useNavigate(); // Use useNavigate hook instead of history

  let [note, setNote] = useState({});

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
    try {
      let response = await fetch(`/api/notes/${id}/`);
      let data = await response.json();
      console.log(data);
      setNote(data);
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  };

  let updateNoteBody = (e) => {
    setNote({
      ...note,
      body: e.target.value,
    });
  };

  let updateNote = async () => {
    try {
      await fetch(`/api/notes/${id}/update/`, {  // Notice the leading '/'
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      });
  
      // Optionally, you can fetch the updated note after saving
      // getNote(); // Uncomment if you want to fetch the updated note after saving
    } catch (error) {
      console.error('Error updating note:', error);
      // Handle error (e.g., show error message to the user)
    }
  };
  

  let handleSubmit = () => {
    updateNote();
    navigate('/'); // Use navigate function to go back to the homepage
  };

  return (
    <div className='note'>
      <div className="note-header">
        <h3>
          <Link to={`/`}>
            <Arrowleft onClick={handleSubmit} />
          </Link>
        </h3>
      </div>
      <textarea onChange={updateNoteBody} defaultValue={note?.body}></textarea>
    </div>
  );
}

export default NotePage;
