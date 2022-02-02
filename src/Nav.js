import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return()=>{
            window.removeEventListener("scroll") //it removes listener everytime useEffect gets fired up so we don't have 20.. listeners.
        }
    },[]);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className='nav_logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png'
            alt='Netflix Logo'
            />

            <img
            className='nav_avatar'
            src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
            alt='Netflix logo'
            />
        </div>
    )
}

export default Nav;
