import "../App.css";
import { useState } from "react";
import {collection, addDoc} from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

export default function Create() {

  const notesCollectionRef = collection(db, "Notes");

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");


  const handleSubmit = async () => {
    await addDoc(notesCollectionRef, {title: title, Note: note})
  }


  return (
    <div className="create-note">
    <div className="create-note-form">
    <input type="text" value={title} placeholder="Take a Note" onChange={(e) => setTitle(e.target.value)}/>
    <textarea  value={note} id = 'note' placeholder="note" onChange={(e) => setNote(e.target.value)} cols={30} rows={10}></textarea>
    <button onClick={handleSubmit} id = "create-btn">Create</button>
    <Link to= "/" id = 'return-btn'>Back to Home</Link>
    </div>
    </div>
  )
}
