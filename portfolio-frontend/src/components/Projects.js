import React from 'react';
import '../Projects.css';


import { useEffect, useRef, useState } from 'react';

function RotatingImage({ imgSource, imgSize }) {
  const [inView, setInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const imagePosition = imageRef.current.getBoundingClientRect();

      // If the top of the image is visible within the viewport
      if (imagePosition.top <= window.innerHeight && imagePosition.top >= 0 && !inView) {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]);

  return (
    <img 
        src={imgSource} 
        alt="Animated Image" 
        className={`projectImage ${inView ? 'inView' : ''}`} 
        ref={imageRef}
        style={{ width: imgSize }}
    />
  );
}

// export default RotatingImage;

function Project ({title, subtitle, imgSource, imgSize, tools, projectLink}){
    return (
        <div className='project'>
            <div className='projectText'>
                <h1 style={{color:'#66FF00'}} >{title}</h1>
                <h2>{subtitle}</h2>
                <p>{tools}</p>
            <button onClick={() => window.open(projectLink, "_blank")}>View Project</button>

            </div>
            <div >
            {/* <RotatingImage imgSource={imgSource} imgSize={imgSize}/> */}
                <img className="projectImage" src={imgSource} style={{width:imgSize}}></img>
            </div>
            
        </div>

    )
}

function Projects() {
    return (
        <div className='projectpage' >
        <div>
            <h1>All Projects</h1>
        </div>

        <Project title="German whist" 
        subtitle ='German Whist card game implemented in Python that utilizes the Monte Carlo Tree Search (MCTS) algorithm to simulate an intelligent opponent.' 
        imgSource='images/monte_carlo_project.png'
        tools='Python | OOP | Git'
        imgSize='120vh'
        projectLink='https://github.com/Beatles-without-tea/german_whist'/>


<Project title="Child Malnutrition Dashboard" 
        subtitle ='Interactive dashboard analysing global malnutrition trends in children under 5.
         The dashboard, containerized with Docker, ensures scalable access 
          via deployment on cloud Platforms.'
        imgSource='images/hunger_dash.png'
        tools='Python | Dash | Pandas | NumPy | HTML | CSS | Docker'
        imgSize='120vh'

        projectLink='https://github.com/Beatles-without-tea/german_whist'/>





        </div>
    );
}

export default Projects;