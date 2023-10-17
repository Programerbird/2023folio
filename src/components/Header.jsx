import React from 'react'
import './Header.css'
import bk from '../Pictures/bk.jpg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <div className='main_wrapper' >
            <img src={bk} alt='background__image'/>
                <div className='main_buttons' >
                    <div className='button' >
                        <Link to="/">
                          <Button variant="contained" color="success">Home</Button> 
                        </Link> 
                        <Link to="/aboutme">
                          <Button variant="contained" color="success">About</Button>
                        </Link>
                        <Link to="/skills">
                          <Button variant="contained" color="success">Skills</Button>
                        </Link>
                        <Link to="/projects">
                          <Button variant="contained" color="success">Projects</Button> 
                        </Link> 
                        <Link to="/contact">
                          <Button variant="contained" color="success">Contact</Button>
                        </Link>      
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Header