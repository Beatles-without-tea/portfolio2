import React, { useState } from 'react';
import '../Projects.css';




function Project ({title, subtitle, imgSource, imgSize, tools, projectLink,  onTopArrowClick, onBottomArrowClick}){
    const [isTopArrowActive, setIsTopArrowActive] = useState(false);
    const [isBottomArrowActive, setIsBottomArrowActive] = useState(false);


    const handleArrowClick = (arrow, callback) => {
        if (arrow === "top") {
            setIsTopArrowActive(true);
            setTimeout(() => setIsTopArrowActive(false), 100);
        } else if (arrow === "bottom") {
            setIsBottomArrowActive(true);
            setTimeout(() => setIsBottomArrowActive(false), 100);
        }
        callback();
    };
    

    
    return (
        <div className='project'>

            <div className='projectText'>


                <img 
                    className={`arrow top ${isTopArrowActive ? 'active' : ''}`} 
                    onClick={() => handleArrowClick("top",onTopArrowClick)} 
                    src="images/arrow.png" 
                    alt="Navigate to Previous"
                />

                <h1 style={{color:'#66FF00'}} >{title}</h1>
                <h2>{subtitle}</h2>
                <p>{tools}</p>
                <div className='projectButton'>


                    <img 
                            className={`arrow bottom ${isBottomArrowActive ? 'active' : ''}`} 
                            onClick={() => handleArrowClick("bottom",onBottomArrowClick)} 
                            src="images/arrow.png" 
                            alt="Navigate to Next"
                        />

                </div>
            </div>
            <div >
                <img onClick={() => window.open(projectLink, "_blank")} className="projectImage" src={imgSource} style={{width:imgSize}}></img>
                <div className="overlayText">Open Repository</div>
            </div>

        </div>

    )
}


function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const projects = [
        {title:"Child Malnutrition Dashboard", 
        subtitle :'Interactive dashboard analysing global malnutrition trends in children under 5. Containerized with Docker and features real time requests to the GHO OData API',
        imgSource:'images/hunger_dash.png',
        tools:'Python | Dash | Pandas | NumPy | HTML | CSS | Docker',
        imgSize:'100vh',

        projectLink:'https://github.com/Beatles-without-tea/hunger-dash'},

        {title:"German whist" ,
        subtitle :'German Whist card game implemented in Python that utilises the Monte Carlo Tree Search (MCTS) algorithm to simulate an intelligent opponent' ,
        imgSource:'images/monte_carlo_crop.png',
        tools:'Python | OOP | Git',
        imgSize:'100vh',
        projectLink:'https://github.com/Beatles-without-tea/german_whist'},


        {title:"Multi-Armed Bandits", 
        subtitle:'Python implementation of the Multi-Armed Bandits reinforcement learning algorithm ',
        imgSource:'images/reinforcement.png',
        tools:'Python | Jupyter Notebooks | MatPlotLib | OOP | Git',
        imgSize:'100vh',
        projectLink:'https://github.com/Beatles-without-tea/reinforcement-learning-algorithms/blob/master/multi-armed-bandits.ipynb'},


        {title:"ECB Interest Rate Forecasts", 
        subtitle:'Extention of the 2013 paper Forecasting and policy making',
        imgSource:'images/taylor_rules.png',
        tools:'Python | Pandas | NumPy | Seaborn | Scipy',
        imgSize:'100vh',
        projectLink:'https://github.com/Beatles-without-tea/ECB_forecasting'}

    ];

    function navigateToPrevious() {
        setCurrentProjectIndex(prevIndex => {
            if (prevIndex === 0){
                return projects.length - 1;
            } else{
                return prevIndex -1;
            }
        }
            
            
            
            );
    }
    
    function navigateToNext() {
        setCurrentProjectIndex(prevIndex =>{
            if (prevIndex === projects.length -1){
                return 0
            }else{
                return prevIndex + 1;
            }
        });
    }
    

    return (
        <div  className='projectPage' >
            <div>
                <h1 style={{color:'#66FF00'}} className='projectText' >Some things I've worked on</h1>
            </div>
            <div>
                <Project {...projects[currentProjectIndex]} 

                onTopArrowClick={navigateToPrevious}
                onBottomArrowClick={navigateToNext} />

            </div>
        </div>
        );
}

export default Projects;