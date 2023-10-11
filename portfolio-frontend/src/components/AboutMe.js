import React, { useEffect, useRef } from 'react';
import '../About.css';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

function AboutMe() {
    // const textRef = useRef(null);
    // const imageRef = useRef(null);

    // useEffect(() => {
    //     // Add the sliding effect after the component mounts
    //     if (textRef.current) {
    //         textRef.current.classList.add('slide-in-text');
    //     }
    //     if (imageRef.current) {
    //         imageRef.current.classList.add('slide-in-image');
    //     }
    // }, []);

    return (
        <div className='aboutpage'>
            {/* <h1>Max Beales <br/> 
                MSc <span style={{color:'#66FF00'}}>Computer Science </span>  
                graduate <br/> 
                <span style={{color:'#66FF00'}}>Data</span> Enthusiast */}
            {/* </h1>

            <img src="/images/home_image.png" alt="Descriptive Alt Text" /> */}
            <p>affff</p>

            <h2>Skills</h2>
            <div class="tech-rectangle">
            <i class="fab fa-python fa-2x"></i>
            <i class="fab fa-js-square fa-2x"></i>
            <i class="fab fa-html5 fa-2x"></i>
            <i class="fab fa-css3 fa-2x"></i>

            <i class="fab fa-react fa-2x"></i>


            <i class="fab fa-git fa-2x"></i>
            <i class="fab fa-linux fa-2x"></i>
            <i class="fab fa-docker fa-2x"></i>





            </div>

            <ColoredLine color="#66FF00" />
            <h2>Qualifications</h2>
            <ColoredLine color="#66FF00" />
       
            <h2>Experience</h2>
          
            <ColoredLine color="#66FF00" />

        </div>
    );
}

export default AboutMe;

