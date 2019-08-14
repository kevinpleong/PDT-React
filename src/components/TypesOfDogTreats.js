import React from 'react';
export default class TypesOfDogTreats extends React.Component {
  render() {
    return (
      <div class="container">
        <h1>Types of Dog Treats</h1>
        <div class="container" style="border-radius: 1em; padding: 1em; background-color: #27FB6B;">

          <h3>
            1 Package of dog treats contains around half a dozen cookies
          </h3>

          <h2>
            1 Package of Dog Treats is $7
          </h2>

          <h2>
            3 Packages of Dog Treats are $18
          </h2>
        </div>

        <h3><b>Apple and Banana Dog Treats</b></h3>
        <ol>
          <li>Flour/binding agent</li>
          <li>Apple</li>
          <li>Banana</li>
        </ol>



        <h3><b>Apple and Peanut Butter Dog Treats</b></h3>
        <ol>
          <li>Flour/binding agent</li>
          <li>Apple</li>
          <li>Peanut Butter</li>
        </ol>

        <h3><b>Banana and Peanut Butter Dog Treats</b></h3>
        <div class="row">
          <div class="col-md-4">
            <img class="img-responsive" src="./Assets/Banana and Peanut Butter.png" alt="Banana and Peanut Butter" />
          </div>
        </div>
        <ol>
          <li>Flour/binding agent</li>
          <li>Peanutbutter</li>
          <li>Bananas</li>
        </ol>

        <h3><b>Carrots and Pumpkin Dog Treats</b></h3>
        <ol>
          <li>Flour/Binding Agents</li>
          <li>Carrots</li>
          <li>Pumpkin</li>
        </ol>

        <h3><b>Carrot and Spinach Dog Treats</b></h3>
        <ol>
          <li>Flour/binding agent</li>
          <li>Spinach</li>
          <li>Carrot</li>
        </ol>

        <h3><b>Carrot and Sweet Potato Dog Treats</b></h3>
        <ol>
          <li>Flour/binding agent</li>
          <li>Carrot</li>
          <li>Sweet Potato</li>
        </ol>

        <h3><b>Pumpkin and Sweet Potato Dog Treats</b></h3>
        <ol>
          <li>Flour/binding agent</li>
          <li>Pumpkin</li>
          <li>Sweet Potato</li>
        </ol>
      </div>
    );
  } // END OF RENDER
} // END OF TypesOfDogTreats
