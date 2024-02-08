// import React from "react";

// function CategoryFilter() {
//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//     </div>
//   );
// }

// export default CategoryFilter;




import React, { useState } from "react";



function CategoryFilter({ categories, handleCategoryFilter }) {

  const [selectedCategory, setSelectedCategory] = useState(null)

  function handleCategoryClick(category) {

    setSelectedCategory(category)

  }


  const createCategories = categories.map((category) =>
    <button
      key={category}
      className={selectedCategory === category ? 'selected' : ''}
      onClick={() => {
        handleCategoryClick(category)
        handleCategoryFilter(category)
      }}
    >{category}</button>)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {createCategories}
    </div>
  );
}

export default CategoryFilter;
