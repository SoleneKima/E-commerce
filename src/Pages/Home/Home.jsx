import React from 'react'
import "../Home/Home.css";
import { Link } from 'react-router-dom';
import menHome from '../../components/assets/Home/Men.jpg';
import womenHome from '../../components/assets/Home/Womwn.jpg';
import kidsHome from '../../components/assets/Home/Kids.jpg';


function Home() {
  return (
    <div className='home-content'> 
      <header className='home-header'>
        <h1> 
           " Your online store for quality shoes, refined style and unparalleled comfort "</h1>
      </header>

      {/*Content of Home Page*/}

      <div className='home-main'>
          
            

         
        {/* Image Section Women */ }
        <div className='section'>
        <Link to="/women">
          <img src={womenHome} alt="Slogan" className="home-image" />
          <button className="section-button">Shop Now</button>
        </Link>
        </div>

        {/*Image section Kids*/}
        
        <div className='section'>
        <Link to='/kids'>
        <img src={kidsHome} alt='KidsBanniere' className='home-image'/>
         <button className='section-button'>Shop Now</button>
         
        </Link>
        </div>
        {/*Image Section Men*/}
        <div className='section'>
        <Link to='/men'>
        <img src={menHome} alt='MenBanniere' className='home-image'/>
          <button className='section-button'>Shop Now</button>
          
        </Link>
        </div>
      </div>
  
    </div>

   

  )
}

export default Home
