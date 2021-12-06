import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./firebase";
import Todo from "./Todo";
import firebase from "@firebase/app-compat";
import { Button, Input } from "@material-ui/core";
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    //connect with firebase db
    db.collection("todos").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    });
  }, []);
  const addButton = (e) => {
    e.preventDefault(); //stop the refresh when type submit button defined
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input]);
   setInput(""); //clear up after todo button clicked
  };
  return (
    <div className="App">
      <h1>Odyssey </h1>
      <form>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button disabled={!input} type="submit" onClick={addButton}>
          Add
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo persons={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
