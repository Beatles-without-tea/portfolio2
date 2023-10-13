import React, { useState } from 'react';
import '../Projects.css';



// export default RotatingImage;

function Project ({title, subtitle, imgSource, imgSize, tools, projectLink,  onTopArrowClick, onBottomArrowClick}){
    return (
        <div className='project'>

            <div className='projectText'>
            <div className="arrow top" onClick={onTopArrowClick}>&uarr;</div>

                <h1 style={{color:'#66FF00'}} >{title}</h1>
                <h2>{subtitle}</h2>
                <p>{tools}</p>
                <div className='projectButton'>
    
            <div className="arrow bottom" onClick={onBottomArrowClick}>&darr;</div>

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
        imgSource:'images/original_monte_carlo.png',
        tools:'Python | OOP | Git',
        imgSize:'100vh',
        projectLink:'https://github.com/Beatles-without-tea/german_whist'}

    ];

    function navigateToPrevious() {
        setCurrentProjectIndex(prevIndex => Math.max(0, prevIndex - 1));
    }
    
    function navigateToNext() {
        setCurrentProjectIndex(prevIndex => Math.min(projects.length - 1, prevIndex + 1));
    }
    

    return (
        <div  className='projectpage' >
            <div>
                <h1 style={{color:'#66FF00'}} className='projectText' >All Projects</h1>
            </div>
            <div>
                {/* <div className="arrow top" onClick={navigateToPrevious}>&uarr;</div> */}
                <Project {...projects[currentProjectIndex]} 

                onTopArrowClick={navigateToPrevious}
                onBottomArrowClick={navigateToNext} />

                {/* <div className="arrow bottom" onClick={navigateToNext}>&darr;</div> */}
            </div>
        </div>
        );
}

function Projects2() {
    return (
        <div  className='projectpage' >
            <div>
                <h1 style={{color:'#66FF00'}} className='projectText' >All Projects</h1>
            </div>


    <Project title="Child Malnutrition Dashboard" 
        subtitle ='Interactive dashboard analysing global malnutrition trends in children under 5.
         Containerized with Docker and features real time requests to the GHO OData API'
        imgSource='images/hunger_dash.png'
        tools='Python | Dash | Pandas | NumPy | HTML | CSS | Docker'
        imgSize='100vh'

        projectLink='https://github.com/Beatles-without-tea/hunger-dash'/>

        <Project title="German whist" 
        subtitle ='German Whist card game implemented in Python that utilises the Monte Carlo Tree Search (MCTS) algorithm to simulate an intelligent opponent' 
        imgSource='images/original_monte_carlo.png'
        tools='Python | OOP | Git'
        imgSize='100vh'
        projectLink='https://github.com/Beatles-without-tea/german_whist'/>


        <Project title="Multi-Armed Bandits" 
        subtitle='Python implementation of the Multi-Armed Bandits reinforcement learning algorithm '
        imgSource='images/reinforcement.png'
        tools='Python | Jupyter Notebooks | MatPlotLib | OOP | Git'
        imgSize='100vh'
        projectLink='https://github.com/Beatles-without-tea/reinforcement-learning-algorithms/blob/master/multi-armed-bandits.ipynb'/>


<Project title="ECB Interest Rate Forecasts" 
        subtitle ='Extention of the 2013 paper Forecasting and policy making'
        imgSource='images/taylor_rules.png'
        tools='Python | Pandas | NumPy | Seaborn | Scipy'
        imgSize='100vh'

        projectLink='https://github.com/Beatles-without-tea/ECB_forecasting'/>



        </div>
    );
}

export default Projects;