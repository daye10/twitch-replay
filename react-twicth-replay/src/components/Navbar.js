import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/fontawesome-free-solid'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
            REPLAY <FontAwesomeIcon icon="fa-solid fa-tv" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon  icon={click ? 'fa-solid fa-bars' : 'fa-solid fa-bars'} />
        </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar