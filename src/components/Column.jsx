import React from 'react';
import { useState } from 'react';
import './Column.css';
import Modal from './Modal';

const Column = ({
  notes,
  setNotes,
}) => {
  const [showModal, setShowModal] = useState(false);
  const ShowModal = () => {
    setShowModal(true);
  };
  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
  };

  return (
    <>
      <div className="column-container">
        {notes.map((note) => (
          <div className="column-task">
            <div key={note.id}>
              <div className="column-note-title">
                <strong>{note.title}</strong>
                <button onClick={() => onDeleteNote(note.id)}>削除</button>
              </div>
            </div>
          </div>
        ))}
        <button onClick={ShowModal}>+</button>
        <Modal
          notes={notes} 
          showFlag={showModal} 
          setShowModal={setShowModal} 
          setNotes={setNotes}
        />
      </div>
    </>
  )
}

export default Column;
