import React from 'react'
import vg from "../assets/2.webp";
import {AiFillAmazonCircle,AiFillGoogleCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"
import Footer from './footer';

const Home = () => {
  return (
    <>
    <div className='home' id="home">
    <main>

        <h1>TechXpert</h1>
        <p>React project one</p>
    </main>
    </div>
    <div className="home2">

        <img src={vg} />
        <div>
            <p>Lorem ipsum dolor sit amet
                 consectetur adipisicing elit. Adipisci, ea.</p>
        </div>
    </div>

    <div className="home3" id="about">
        <div><h1>Who we are?</h1>
        <p>Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Aliquam 
          minima eveniet debitis fugiat aut incidunt
           dolores iste iure minus esse?</p>
           </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>

          <AiFillGoogleCircle/>
          <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.5s",
          }}>

          <AiFillAmazonCircle/>
          <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>

          <AiFillYoutube/>
          <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"1s",
          }}>

          <AiFillInstagram/>
          <p>Instagram</p>
          </div>
          </article>
      </div>
    </div>
    </>
  )
}

export default Home
