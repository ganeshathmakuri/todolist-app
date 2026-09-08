import { useState } from "react";

function Todoinput(props) {
  // State to track the current input value
  const [inputText, setInputText] = useState('');

  // Handle Enter key press to add todo
  const enterpress = (e) => {
    if (e.keyCode === 13) {
      props.addlist(inputText); // Call parent function
      setInputText('');         // Clear input after adding
    }
  };

  return (
    <div className="todoinput">
      {/* Input box for typing todos */}
      <input
        placeholder="Enter your todo"
        type="text"
        value={inputText}
        className="inputbox"
        onChange={(e) => setInputText(e.target.value)} // Update state on typing
        onKeyDown={enterpress}                         // Add todo on Enter
      />

      {/* Add button (click to add todo) */}
      <button className="addbtn">
        <span
          onClick={() => {
            props.addlist(inputText); // Add todo on click
            setInputText('');         // Clear input
          }}
        >
          +
        </span>
      </button>
    </div>
  );
}

export default Todoinput;
