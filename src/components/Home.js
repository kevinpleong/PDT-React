import React from 'react';
import Logo from './Assets/Pawsitively Delicious Logo.jpg';
export default class HOME extends React.Component{
  render(){
    return (
    <div className="container">
      <div className="col-md-12">
        <div className="row">
          <img src={Logo} alt="Pawsitively Delicious Homemade Dog treat logo. A dog with its tongue out and holding a paw." className="img-fluid center-block"></img>
        </div>
        <div className="row">
          <h1>
            <b>Home</b>
          </h1>
          <p>Dogs are an essential part of our lives. They are our best friends!</p>
          <p>What better way to show your dog you love them than to give them amazing and delicious homemade dog treats? Your dogs will love our treats! These healthy nuggets are made from whole ingredients, like pumpkins, sweet potatoes, spinach, peanut butter,
          and bananas. As a source of calcium, we use egg shells. Our treats contain no artificial colors or preservatives. The flour is made from garbanzo beans for extra protein. We only use ingredients that dogs are less likely to cause allergic reactions.
          The dog treats are fully customizable so you will definitely find one that your pooch will love.</p>
          <p>We are a small-batch dog treat bakery in northern California, showing your dogs the same love that we give to our special four-legged friends.</p>
          <p>Check us out-subscribe to our newsletter and your first order is 50% off!</p>
        </div>
      </div>
    </div>
    );
  } // END OF RENDER
} // END OF HOME
