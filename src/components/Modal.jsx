import React from 'react';
import './Modal.css';
import uuid from 'react-uuid';
import { useState } from 'react';
import Tag from './Tag';

const Modal = (
  props,
) => {
  const [title, setTitle] = useState("");
  const [showTagField, setShowTagField] = useState(false);
  const ShowTagField = () => {
    setShowTagField(true);
  };
  const closeModal = () => {
    props.setShowModal(false);
  };
  
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: title,
    };
    props.setNotes([...props.notes, newNote]);
    setTitle("");
  };

  return (
    <>
      {props.showFlag ? (
          <div className="modal-container">
            <div className="app-main-note-edit">
              <input 
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <button onClick={ShowTagField}>+</button><br />
            <Tag
              showFlag={showTagField} 
              setShowModal={setShowTagField} 
            /><br />
            <button onClick={closeModal}>Cancel</button>
            <button onClick={onAddNote}>OK</button>
          </div>
        ) : (
          <></>
        )
      }
    </>
  );
};

export default Modal;
