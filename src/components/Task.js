// import React from "react";

// function Task({ category, text, task, handleDeleteTask }) {


//   return (
//     <div className="task">
//       <div className="label">{category}</div>
//       <div className="text">{text}</div>
//       <button onClick={(e) => handleDeleteTask(task)} className="delete">X</button>
//     </div>
//   );
// }

// export default Task;




import React from "react";


function Task({ text, category, deleteClick }) {


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => deleteClick(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
