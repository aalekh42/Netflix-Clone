import React from "react";
import "../Banner.css";
function Banner() {

    //If description is too long then we make it short using this fn.
    function truncate(string,n){
        return(
            string && string.length > n ? string.substr(0,n-1) + '...': string
        )
    }
  return (
    // <div className="banner">
    //   <img src="/assets/imgs/netflix-banner.jpg" alt="netlfix-banner" />
    // </div>
    <header
      className="banner"
      style={{
        backgroundImage: `url("/assets/imgs/netflix-banner.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My list</button>
          <h1 className="banner_description">
{           truncate( `THis is all abou the new movie descriptionTHis is all abou the new
            movie descriptionTHis is all abou the new movie descriptionTHis is
            all abou the new movie descriptionTHis is all abou the new movie
            descriptionTHis is all abou the new movie descriptionTHis is all
            abou the new movie descriptionTHis is all abou the new movie
            descriptionTHis is all abou the new movie descriptionTHis is all
            abou the new movie descriptionTHis is all abou the new movie
            descriptionTHis is all abou the new movie descriptionTHis is all
            abou the new movie descriptionTHis is all abou the new movie
            descriptionTHis is all abou the new movie descriptionTHis is all
            abou the new movie descriptionTHis is all abou the new movie
            descriptionTHis is all abou the new movie descriptionTHis is all
            abou the new movie descriptionTHis is all abou the new movie
            descriptionTHis is all abou the new movie descriptionTHis is all
            abou the new movie descriptionTHis is all abou the new movie
            descriptionTHis is all abou the new movie descriptionTHis is all
            abou the new movie descriptionTHis is all abou the new movie
            descriptionTHis is all abou the new movie descriptionTHis is all
            abou the new movie descriptionTHis is all abou the new movie
            descriptionTHis is all abou the new movie descriptionTHis is all
            abou the new movie descriptionTHis is all abou the new movie
            description`,100)}
          </h1>
        </div>
      </div>
      <div className="fade_bottom" /> {/*Css trick to add fade */}
    </header>
  );
}

export default Banner;
