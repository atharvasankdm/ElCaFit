import React from 'react'
import classes from './header.module.css'
import cover from '../../attributes/cover.mp4'
import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <div className={classes.mainHeader}>
       <Navbar/>

        <div className={classes.headerContent}>
            <h1>We Believe Little Things Matter</h1>
            <button className={classes.headerContentButton}>EXPLORE</button>
        </div>

    </div>
  )
}

export default Header
