import React from 'react'
import '../Components/Home.css';
import { Link } from 'react-router-dom';

  
export default function Foter(props) {
  return (
    <div className="footer-basic" style={{background:props.newmode==='#FAE7A5'? '#BFA181' : '#0c0d12', color: props.newmode==='#FAE7A5' ? 'black' : 'white'}}>
        <footer>
            <div className="social" style={{color:props.newmode==='#FAE7A5'? 'black' : 'white'}} ><a href="https://www.linkedin.com/in/abdullah-bin-ata-804074299/"><i className="icon ion-social-linkedin"></i></a><a href="https://github.com/Abdullahata450"><i className="icon ion-social-github"></i></a><a href="https://www.instagram.com/_abdullahata_/"><i className="icon ion-social-instagram"></i></a><a href="https://www.facebook.com/profile.php?id=100012258855831"><i className="icon ion-social-facebook"></i></a></div>
            <ul className="list-inline"  >
                <li style={{color:props.newmode==='#FAE7A5'? 'black': 'white'}} className="list-inline-item"><Link to="/">Home</Link></li>
                <li style={{color:props.newmode==='#FAE7A5'? 'black': 'white'}} className="list-inline-item"><Link to="about">About</Link></li>
                <li style={{color:props.newmode==='#FAE7A5'? 'black': 'white'}} className="list-inline-item"><Link to="/Explore">PortFolio</Link></li>
                <li style={{color:props.newmode==='#FAE7A5'? 'black': 'white'}} className="list-inline-item"><Link to="Contact">Contact</Link></li>
            </ul>
            <p className="copyright ">Copyright <i class="fa-solid fa-copyright"></i> Design And Develope By Abdullah Bin Ata</p>
        </footer>
    </div>
  )
}
