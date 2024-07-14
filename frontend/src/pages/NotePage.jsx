import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function NotePage() {
  let { id } = useParams();
  let [note, setNote] = useState({});

  useEffect(() => {
    getNote();
  }, [id]);

  let getNote = async () => {
      let response = await fetch(`/api/notes/${id}/`);
      let data = await response.json();
      console.log(data);
      setNote(data);
  };

  return (
    <div>
      <h1>Single Note {id}</h1>
      <h1>{note?.body}</h1>
    </div>
  );
}

export default NotePage;
