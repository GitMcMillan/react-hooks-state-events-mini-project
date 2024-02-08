// import React from "react";

// function NewTaskForm() {
//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {/* render <option> elements for each category here */}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;

import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[1]); // Default to first category after "All"

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Construct a task object and call onTaskFormSubmit
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    // Reset form fields
    setText('');
    setCategory(categories[1]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categories.filter(category => category !== "All").map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;





// import React from "react";

// function NewTaskForm({ categories }) {

//   function renderCategories(categories) {
//     return categories.filter(category => category !== "All").map((category) => (
//       <option key={category} value={category}>
//         {category}
//       </option>
//     ));
//   }

//   return (
//     <form className="new-task-form">
//       <label>
//         Details
//         <input type="text" name="text" />
//       </label>
//       <label>
//         Category
//         <select name="category">
//           {renderCategories(categories)}
//         </select>
//       </label>
//       <input type="submit" value="Add task" />
//     </form>
//   );
// }

// export default NewTaskForm;


/*
GPT
To update your NewTaskForm to be a controlled component and handle form submissions according to your requirements, follow these steps:

Create State Hooks for Form Inputs: Initialize state to manage the input values for task details and category selection.

Handle Form Inputs: Create event handlers to update these states whenever the user types in the task detail input or selects a category.

Handle Form Submission: Implement a function that constructs a new task object from the state and calls a passed-in callback prop (onTaskFormSubmit) with this object.

Prevent Default Form Submission Behavior: To avoid reloading the page on form submission.

Here's how you can do it, implementing the controlled component and form submission logic:

jsx
Copy code
import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[1]); // Default to first category after "All"

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Construct a task object and call onTaskFormSubmit
    const newTask = { text, category };
    onTaskFormSubmit(newTask);
    // Reset form fields
    setText('');
    setCategory(categories[1]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categories.filter(category => category !== "All").map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
In this setup:

The form inputs for task details and category are controlled components, meaning their values are tied to the React component state.
When the form is submitted, it calls onTaskFormSubmit with the new task object, allowing the parent component (App) to update the tasks list.
After submission, the form fields are reset to their initial states.
Ensure that onTaskFormSubmit is properly implemented in your App component to handle adding the new task to the list.

*/