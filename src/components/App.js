// import React, { useState } from "react";
// import CategoryFilter from "./CategoryFilter";
// import NewTaskForm from "./NewTaskForm";
// import TaskList from "./TaskList";

// import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

// function App() {

//   const [tasks, setTasks] = useState(TASKS)
//   const [categories, setCategories] = useState(CATEGORIES)

//   function handleDeleteTask(task) {
//     console.log(task);

//   }

//   return (
//     <div className="App">
//       <h2>My tasks</h2>
//       <CategoryFilter />
//       <NewTaskForm />
//       <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
//     </div>
//   );
// }

// export default App;





import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [allTasks, setAllTasks] = useState(TASKS)


  function deleteClick(text) {
    console.log(text);
    const updatedTasks = tasks.filter((task) => task.text !== text)
    setTasks(updatedTasks)
  }

  function handleCategoryFilter(category) {
    console.log(category)
    const categoryFilter = category === 'All' ? allTasks : allTasks.filter((task) => task.category === category)

    setTasks(categoryFilter)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryFilter={handleCategoryFilter} />
      <NewTaskForm categories={CATEGORIES} />
      <TaskList tasks={tasks} deleteClick={deleteClick} />
    </div>
  );
}

export default App;
