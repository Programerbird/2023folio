import React from 'react'
import './Header.css'
import bk from '../Pictures/bk.jpg'
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div>
        <div className='main_wrapper' >
            <img src={bk}/>
                <div className='main_buttons' >
                    <div className='button' >
                        <Button variant="contained" color="success">Home</Button>  
                        <Button variant="contained" color="success">About</Button>
                        <Button variant="contained" color="success">Skills</Button>
                        <Button variant="contained" color="success">Projects</Button>  
                        <Button variant="contained" color="success">Contact</Button>      
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Header