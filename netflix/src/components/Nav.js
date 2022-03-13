import React,{useEffect,useState} from "react";
import "../Nav.css";

function Nav() {
    const [show,handleShow]=useState(false);
    useEffect(()=>{
        console.log("Hello",show);
        //added one eventListener
        window.addEventListener("scroll",transitionNavbar);
        return () =>window.removeEventListener("scroll",transitionNavbar); //we can cleanup in useEffect (good practice)
    },[])

    //Created one function
    const transitionNavbar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false)
        }
    }
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav_logo"
          src="/assets/imgs/netflix-logo.png"
          alt="netflix-logo"
        />
        <img
          className="nav_avatar"
          src="/assets/imgs/avatar.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
