import React from 'react';
export default class AllIngredients extends React.Component {
  render() {
    return (
  <div className="container">
    <div class="row">
      <div class="col-md-12 ">
        <h1><b>All Ingredients</b></h1>
        <h2><b>Wet Ingredients</b></h2>
        <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Beets</li>
          <li>Carrots</li>
          <li>Peanut Butter</li>
          <li>Pumpkin Purée</li>
          <li>Red Cabbage</li>
          <li>Spinach</li>
          <li>Sweet Potatoes</li>
        </ul>

        <h2><b>Dry Ingredients</b></h2>
        <ul>
          <li>All-purpose Flour</li>
          <li>Almond Flour</li>
          <li>Brown Rice Flour</li>
          <li>Coconut Flour</li>
          <li>Corn Flour</li>
          <li>Garbanzo Bean Flour</li>
          <li>Wheat Flour</li>
          <li>White Rice Flour</li>
        </ul>
      </div>
    </div>
  </div>
    );
  } // END OF RENDER
} // END OF AllIngredients
