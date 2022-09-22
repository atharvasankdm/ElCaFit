import React from 'react'
import classes from './navbar.module.css'

const navbar = () => {
  return (
    <div className={classes.mainNav} >
      <div className={classes.navLeft}>
        <h2>FYTNATION<span className={classes.navLeftSpan}>.</span></h2>
      </div>

      <div className={classes.navRight}>

        <ul className={classes.navRightUl}>
            <li>Home</li>
            <li>Schedule</li>
            <li>Calories</li>
            <li>Consult</li>
            <li>Recipes</li>
            <li>Supplements</li>
            <li>Track</li>



        </ul>

      </div>
    </div>
  )
}

export default navbar
