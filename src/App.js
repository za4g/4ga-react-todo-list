import { useEffect, useState } from "react";

function App() {
  return <Todos />;
}

function Todos() {
  const [itemCount, setItemCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputValue.trim() !== "") {
        setTodos([...todos, inputValue]);
        setInputValue("");
        setItemCount(itemCount + 1);
      }
    }
  };

  useEffect(() => {}, [itemCount, todos]);

  return (
    <div className="todo-component">
      <div>
        <h1 className="todo-header">todos</h1>
      </div>
      <div className="todo-container">
        <div>
          <input
            className="todo-input"
            type="text"
            placeholder="What needs to be done?"
            onKeyDown={handleKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </div>
        <div>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <div key={index} className="todo-item">
                <li>{todo}</li>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <p className="item-count">{itemCount} items left</p>
        </div>
      </div>
    </div>
  );
}

export default App;
