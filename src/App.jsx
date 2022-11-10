import { useState, useEffect } from 'react';
import './App.css';
import Board from "./components/Board";
import Header from './components/Header';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TagFilter from './components/TagFilter';

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  useEffect(() => {
    //ローカルストレージにノートを保存
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header />
        <TagFilter />
        <Board
          notes={notes} 
          setNotes={setNotes}
        />
      </div>
    </DndProvider>
  )
}

export default App
