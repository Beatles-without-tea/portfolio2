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
 
            <p>I am this that this that</p>


            <ColoredLine color="#66FF00" />
            <h2 style={{marginLeft:'45%'}} >Qualifications</h2>
            <div class="tech-rectangle">
            <h5>MSc Computer Science; Artifical Intelligence, Systems, Data - PSL Research University (Paris-Dauphine)</h5>
            <h5>MSc Economics; Econometrics - Aix Marseille University & University of Konstanz</h5>
            <h5>BSc Economics; Finance - Aix Marseille University</h5>
            </div>

            <ColoredLine color="#66FF00" />
            

            <h2  class="title-block">Experience</h2>
            <div class="tech-rectangle">
            <h5>Data Scientist (Co-op/Alternance) - Ceva Animal Health - </h5>
            <h5>Data Scientist Internship - Ceva Animal Health - </h5>
            </div>
            
            <ColoredLine color="#66FF00" />

            <h2 class="title-block">Skills</h2>
            <div class="tech-rectangle">
                <div style={{display:'flex', alignItems:'center'}}>
                    <h5>Languages:</h5>
                    <h6>Python, Javascript, HTML, CSS</h6>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                <h5>Libraries: </h5>
                <h6>Python, Javascript, HTML, CSS</h6>

                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                <h5>Frameworks:</h5>
                <h6>Python, Javascript, HTML, CSS</h6>

                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                <h5>Tools:</h5>
                <h6>Python, Javascript, HTML, CSS</h6>
                </div>
            </div>

        </div>
    );
}

export default AboutMe;

