import "../App.css";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import {
  collection, 
  getDocs,
  deleteDoc,
  doc,

} from "@firebase/firestore";


export default function Home() {
  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, "Notes");

  useEffect(() => {
    const getMyNotes = async () => {
      const data = await getDocs(notesCollectionRef);
      setNotes(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }

    getMyNotes();
  }, [])

  // delete doc //

  const deleteNote = async (id) => {
    const deleteNoteDoc = doc(db, "Notes", id);
    await deleteDoc(deleteNoteDoc);

    const removeNote = notes.filter((note) => note.id !== id);
    setNotes(removeNote);

  }



  return (
    <div className="Home">
      <h1>Your Notes</h1>
      <div className="note-container">
      {
        notes.map((note) => {
          return (
            <div key={note.id} className="note-col">
              <div className="note-header">
              <h2>{note.title}</h2>
              <button onClick={() => deleteNote(note.id)} id = "remove-btn">remove</button>
              </div>
              <p>{note.Note}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
