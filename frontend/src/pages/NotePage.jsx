import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {ReactComponent as Arrowleft } from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'


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
    <div className='note'>
        <div className="note-header">
            <h3>
                <Link to={`/`}>
                <Arrowleft />
                </Link></h3>
        </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
}

export default NotePage;
