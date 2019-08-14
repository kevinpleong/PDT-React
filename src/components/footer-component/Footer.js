import React from 'react';
import facebookIcon from "./facebook-icon-color.png"
import instagramIcon from "./instagram-icon.png"
import linkedinIcon from "./linkedin-icon.png"
import pinterestIcon from "./pinterest-icon.png"
import twitterIcon from "./twitter-icon.png"
import flickrIcon from "./flickr-icon.png"

export default class Footer extends React.Component {
  render() {
    return (<div>
      <footer className="blog-footer">
        <p>Made by Kevin Leong</p>
          <a href="https://www.facebook.com/PawsitivelyDeliciousHomemadeDogTreats/" rel="noopener noreferrer" target="_blank"><img src={facebookIcon} width="30" height="30" alt="Facebook Icon" class="img-responsive" /></a>

          <a href="https://twitter.com/DelishDogTreat" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} width="30" height="30" alt="Twitter Icon" className="img-responsive" /></a>

          <a href="https://www.instagram.com/pawsitivelydeliciousdogtreats/ " target="_blank" rel="noopener noreferrer"><img src={instagramIcon} width="30" height="30" alt="Instagram Icon" className="img-responsive" /></a>

          <a href="http://www.linkedin.com/in/pawsitivelydelicious " target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} width="30" height="30" alt="Linked In Icon" className="img-responsive"/></a>

          <a  href="https://www.pinterest.com/pawsitivelydelicious" target="_blank" rel="noopener noreferrer"><img src={pinterestIcon} width="30" height="30" alt="Pinterest Icon" className="img-responsive"/></a>

          <a href="https://www.flickr.com/photos/156408095@N03/" target="_blank" rel="noopener noreferrer"><img src={flickrIcon} width="30" height="30" alt="Flickr Icon" className="img-responsive"/></a>

      </footer>
    </div>);
  } // END OF RENDER
} // END OF Footer
