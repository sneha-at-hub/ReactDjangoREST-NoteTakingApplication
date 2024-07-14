import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import { Link } from 'react-router-dom';

function NotePage() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState({});

  useEffect(() => {
    if (id !== 'new') {
      getNote();
    }
  }, [id]);

  const getNote = async () => {
    try {
      let response = await fetch(`/api/notes/${id}/`);
      if (!response.ok) {
        throw new Error('Failed to fetch note');
      }
      let data = await response.json();
      setNote(data);
    } catch (error) {
      console.error('Error fetching note:', error);
      // Handle error (e.g., show error message to the user)
    }
  };

  const updateNoteBody = (e) => {
    setNote({
      ...note,
      body: e.target.value,
    });
  };

  const deleteNote = async () => {
    try {
      let response = await fetch(`http://localhost:8000/api/notes/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add other headers as necessary (e.g., Authorization)
        },
      });
      if (!response.ok) {
        throw new Error('Failed to delete note');
      }
      navigate('/'); // Navigate to the homepage after successful deletion
    } catch (error) {
      console.error('Error deleting note:', error);
      alert('Failed to delete note. Please try again.');
    }
  };
  

  const createNote = async () => {
    try {
      let response = await fetch(`http://localhost:8000/api/notes/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        throw new Error('Failed to create note');
      }
      navigate('/'); // Navigate to the homepage after successful creation
    } catch (error) {
      console.error('Error creating note:', error);
      // Handle error (e.g., show error message to the user)
    }
  };
  

  const updateNote = async () => {
    try {
      let response = await fetch(`http://localhost:8000/api/notes/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
      if (!response.ok) {
        throw new Error('Failed to update note');
      }
      // Optionally, you can fetch the updated note after saving
      // getNote(); // Uncomment if you want to fetch the updated note after saving
    } catch (error) {
      console.error('Error updating note:', error);
      // Handle error (e.g., show error message to the user)
    }
  };
  

  const handleSubmit = () => {
    if (id === 'new') {
      createNote();
    } else if (!note.body) {
      deleteNote();
    } else {
      updateNote();
    }
  };

  return (
    <div className='note'>
      <div className="note-header">
        <h3>
          <Link to={`/`}>
            <ArrowLeft onClick={handleSubmit} />
          </Link>
        </h3>
        {id !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <textarea onChange={updateNoteBody} value={note.body || ''}></textarea>
    </div>
  );
}

export default NotePage;
