import React from 'react'
import NavBar from './NavBar'


function Banner({newArray}) {
  return (
    <div className='header'>
      <div className='container'>
        <NavBar newArray={newArray}/>
        <div class="col-2 row row-1 " >
        <div class=" col-header">
          <h1>WAKULIMA MART</h1>
          <h2>Your Farming Partner </h2>
          <p>All your farm Chemicals & Equipments in one place  </p>
          <a href="#products"class='btn'>Expore Now &#10142; </a>
        </div>
       
      </div>
      </div>
    </div>
  )
}

export default Banner;