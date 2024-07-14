import React, { useState, useEffect } from 'react'
import Listitem from '../components/Listitem'



const NotesListPage = () => {

let [notes, setNotes] = useState([])

useEffect(() => {
    getNotes()
}, [])
let getNotes = async () =>{
   let response = await fetch('/api/notes/') //since it is going to port 3000 so we will specify proxy in package.json
   let data = await response.json()
   setNotes(data)
}
  return (
    <div className='notes'>

        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Notes</h2>
            <p className='notes-count'>{notes.length}</p>
        </div>
        <div className="notes-list">
            {notes.map((note, index) => (
                // <h3 key ={index}>{note.body}</h3>
                <Listitem key={index} note={note} /> //setting props
            ))}
        </div>
    </div>
  )
}

export default NotesListPage
