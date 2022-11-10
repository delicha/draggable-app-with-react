import React from 'react';
import "./Board.css";
import Column from './Column';

const Board = ({
  notes,
  setNotes, 
}) => {

  return (
    <>
      <Column 
        notes={notes} 
        setNotes={setNotes}
      />
    </>
  );
};

export default Board;
