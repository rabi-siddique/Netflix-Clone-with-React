import React,{useState,useEffect} from 'react'
import logo from './netflix-logo.png';
import "./NavBar.css"
function NavBar(){

    const [show,handleShow] = useState(false)

    useEffect(() => {

        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        })
        
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav-black"}`}>

            <img 
            className="nav-logo"
            src={logo}
            alt="Netflix Logo"
            />

           

        </div>
    )
}

export default NavBar