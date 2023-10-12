import React from 'react';
import '../Projects.css';


function Projects() {
    return (
        <div className='projectpage' >

{/* this is one project         */}
        <div className='project'>
            <div className='projectText'>
                <h1 style={{color:'#66FF00'}} >test</h1>
                <h2>sduub</h2>
            </div>
            <div className='projectImage'>
                <img src='images/monte_carlo_project.png'></img>
            </div>
        </div>
{/* end of project */}



        </div>
    );
}

export default Projects;